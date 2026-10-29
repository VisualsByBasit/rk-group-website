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
        super().__init__(); self.canonicals=[]; self.links=[]; self.ids=[]; self.h1=0; self.schemas=[]; self.script=False; self.buffer=''; self.description=None; self.robots=''
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.append(a['id'])
        if tag=='h1':self.h1+=1
        if tag=='a':self.links.append(a.get('href',''))
        if tag=='link' and a.get('rel')=='canonical':self.canonicals.append(a['href'])
        if tag=='meta' and a.get('name')=='description':self.description=a.get('content')
        if tag=='meta' and a.get('name')=='robots':self.robots=a.get('content','')
        if tag=='script' and a.get('type')=='application/ld+json':self.script=True;self.buffer=''
    def handle_data(self, data):
        if self.script:self.buffer+=data
    def handle_endtag(self, tag):
        if tag=='script' and self.script:self.schemas.append(json.loads(self.buffer));self.script=False

urls=[x.text for x in ET.parse(ROOT/'sitemap.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert len(urls)==9 and len(set(urls))==9, urls
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
for path,p in pages.items():
    for link in p.links:
        u=urlsplit(link)
        if u.scheme or u.netloc:continue
        target=u.path or path
        if target not in pages:continue
        assert not u.fragment or u.fragment in pages[target].ids, (path,link)
robots=(ROOT/'robots.txt').read_text()
assert f'Sitemap: {ORIGIN}/sitemap.xml' in robots
assert 'Disallow: /' not in robots
print('PASS: 9 exported pages; self-canonicals, JSON-LD, descriptions, H1s, IDs, anchor targets, sitemap and robots.')
