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
        super().__init__(); self.canonicals=[]; self.links=[]; self.ids=[]; self.h1=0; self.schemas=[]; self.script=False; self.buffer=''; self.description=None; self.robots=''; self.titles=[]; self.intitle=False
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
        if tag=='script' and a.get('type')=='application/ld+json':self.script=True;self.buffer=''
    def handle_data(self, data):
        if self.script:self.buffer+=data
        if self.intitle:self.titles[-1]+=data
    def handle_endtag(self, tag):
        if tag=='script' and self.script:self.schemas.append(json.loads(self.buffer));self.script=False
        if tag=='title':self.intitle=False

urls=[x.text for x in ET.parse(ROOT/'sitemap.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
EXPECTED=16  # homepage, story page, 7 brand pages, 7 leadership pages
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
print(f'PASS: {EXPECTED} exported pages; self-canonicals, unique titles, JSON-LD (Person, ProfilePage and BreadcrumbList on leadership pages), descriptions, H1s, IDs, internal links, anchor targets, sitemap and robots.')
