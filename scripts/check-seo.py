"""Validate crawlability, canonical URLs and internal links in the production export."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import json
import xml.etree.ElementTree as ET

ORIGIN = 'https://rkgroupofindustries.com'
ROOT = Path(__file__).resolve().parents[1] / 'out'
class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.canonicals=[]; self.links=[]; self.ids=[]; self.h1=0; self.schemas=[]; self.script=False; self.buffer=''; self.description=None; self.robots=''; self.titles=[]; self.intitle=False; self.og={}; self.googlebot=''; self.imgs=set()
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.append(a['id'])
        if tag=='h1':self.h1+=1
        if tag=='title':self.intitle=True;self.titles.append('')
        if tag=='a':self.links.append(a.get('href',''))
        if tag=='link' and a.get('rel')=='canonical':self.canonicals.append(a['href'])
        if tag=='meta' and a.get('name')=='description':self.description=a.get('content')
        if tag=='meta' and a.get('name')=='robots':self.robots=a.get('content','')
        if tag=='meta' and a.get('name')=='googlebot':self.googlebot=a.get('content','')
        if tag=='img':self.imgs.add(a.get('src',''))
        if tag=='meta' and str(a.get('property','')).startswith('og:image'):self.og[a['property']]=a.get('content','')
        if tag=='script' and a.get('type')=='application/ld+json':self.script=True;self.buffer=''
    def handle_data(self, data):
        if self.script:self.buffer+=data
        if self.intitle:self.titles[-1]+=data
    def handle_endtag(self, tag):
        if tag=='script' and self.script:self.schemas.append(json.loads(self.buffer));self.script=False
        if tag=='title':self.intitle=False

def webp_size(file):
    b=file.read_bytes()[:30]
    assert b[:4]==b'RIFF' and b[8:12]==b'WEBP', file
    if b[12:16]==b'VP8X':return 1+int.from_bytes(b[24:27],'little'),1+int.from_bytes(b[27:30],'little')
    if b[12:16]==b'VP8L':
        n=int.from_bytes(b[21:25],'little');return (n&0x3FFF)+1,((n>>14)&0x3FFF)+1
    return int.from_bytes(b[26:28],'little')&0x3FFF,int.from_bytes(b[28:30],'little')&0x3FFF
def local(url):
    assert url.startswith(ORIGIN+'/'), url
    f=ROOT/urlsplit(url).path.lstrip('/')
    assert f.is_file(), ('missing image',url)
    return f
def nodes(p):
    return [n for s in p.schemas for n in s.get('@graph',[s])]
def check_images(path,p):
    found=nodes(p)
    org=[n for n in found if n.get('@type')=='Organization']
    assert len(org)==1 and org[0].get('logo') and org[0].get('image')==org[0]['logo'], (path,'Organization logo and image')
    local(org[0]['image'])
    for n in found+org[0].get('employee',[])+org[0].get('brand',[]):
        if n.get('@type') in ('Person','Brand'):
            assert n.get('image'), (path,'image missing',n.get('name'))
            local(n['image'])
    if path in NO_PAGE_IMAGE:return
    pages=[n for n in found if 'primaryImageOfPage' in n]
    assert len(pages)==1, (path,'primaryImageOfPage')
    img=pages[0]['primaryImageOfPage']
    assert img.get('@type')=='ImageObject' and img.get('caption'), (path,img)
    assert '/share/' not in img['url'], (path,'share crop used',img['url'])
    assert (img['width'],img['height'])==webp_size(local(img['url'])), (path,'image size',img)
    assert urlsplit(img['url']).path in p.imgs, (path,'image not visible on the page',img['url'])
urls=[x.text for x in ET.parse(ROOT/'sitemap.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
EXPECTED=19  # homepage, story, contact, ordering terms, privacy, 7 brand pages, 7 leadership pages
NO_PAGE_IMAGE={'/contact/','/ordering-terms/','/privacy/'}  # these pages have no prominent image
assert len(urls)==EXPECTED and len(set(urls))==EXPECTED, urls
pages={}
for url in urls:
    assert url.startswith(ORIGIN+'/'), url
    path=urlsplit(url).path
    text=(ROOT/path.lstrip('/')/'index.html').read_text()
    p=Page(text);pages[path]=p
    assert p.canonicals==[url], (path,p.canonicals)
    assert p.h1==1, (path,'h1',p.h1)
    assert p.description and 'noindex' not in p.robots, path
    assert p.schemas, path
    assert len(p.ids)==len(set(p.ids)), (path,'duplicate IDs')
    assert 'rkgroupofindustries.vercel.app' not in text, path
    assert 'max-image-preview:large' in p.googlebot, (path,'max-image-preview',p.googlebot)
    check_images(path,p)
    assert p.og.get('og:image','').startswith(ORIGIN+'/') and p.og.get('og:image:alt'), (path,'share image',p.og)
    assert (ROOT/urlsplit(p.og['og:image']).path.lstrip('/')).is_file(), (path,'share image file',p.og['og:image'])
    if path!='/':assert p.og.get('og:image:width')=='1200' and p.og.get('og:image:height')=='630', (path,'share image size',p.og)
    assert len(p.titles)==1 and p.titles[0].strip(), (path,'title')
    if path=='/our-story/':
        types={n.get('@type') for s in p.schemas for n in s.get('@graph',[s])}
        assert {'AboutPage','BreadcrumbList'}<=types, (path,types)
    if path.startswith('/leadership/'):
        types={n.get('@type') for s in p.schemas for n in s.get('@graph',[s])}
        assert {'Person','ProfilePage','BreadcrumbList'}<=types, (path,types)
titles=[p.titles[0] for p in pages.values()]
assert len(titles)==len(set(titles)), 'duplicate titles'
for path,p in pages.items():
    for link in p.links:
        u=urlsplit(link)
        if u.scheme or u.netloc:continue
        target=u.path or path
        if target.endswith('/'):assert target in pages, (path,'links to a missing page',link)
        if target not in pages:continue
        assert not u.fragment or u.fragment in pages[target].ids, (path,link)
robots=(ROOT/'robots.txt').read_text()
assert f'Sitemap: {ORIGIN}/sitemap.xml' in robots
assert 'Disallow: /' not in robots
print(f'PASS: {EXPECTED} exported pages; self-canonicals, unique titles, JSON-LD (Person, ProfilePage and BreadcrumbList on leadership pages), image data, share images, descriptions, H1s, IDs, internal links, anchor targets, sitemap and robots.')
