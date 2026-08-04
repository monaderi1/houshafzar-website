import { writeFile } from 'node:fs/promises';

const base = 'https://houshafzar.com/wp-json/wp/v2';
const fields = 'id,slug,link,date,title,content,excerpt,featured_media';

async function get(type) {
  const response = await fetch(`${base}/${type}?per_page=100&_fields=${fields}`);
  if (!response.ok) throw new Error(`${type}: ${response.status}`);
  return response.json();
}

function decode(value = '') {
  return value
    .replace(/&#8211;/g, '–').replace(/&#8212;/g, '—')
    .replace(/&#8220;|&#8221;|&quot;/g, '"').replace(/&#039;|&apos;/g, "'")
    .replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

function clean(html = '') {
  return decode(html)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi, '\n')
    .replace(/<\/(h[1-6]|p|li|div|section|article)>/gi, '\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

const [pages, posts] = await Promise.all([get('pages'), get('posts')]);
const all = [...pages.map(x => ({...x, kind: 'page'})), ...posts.map(x => ({...x, kind: 'post'}))]
  .map(x => ({
    slug: x.slug,
    path: new URL(x.link).pathname,
    kind: x.kind,
    date: x.date,
    title: clean(x.title.rendered),
    excerpt: clean(x.excerpt?.rendered || '').replace(/\s*\[…\]\s*$/, ''),
    body: clean(x.content?.rendered || '')
  }));

await writeFile('app/content.json', JSON.stringify(all, null, 2));
console.log(`Imported ${pages.length} pages and ${posts.length} posts.`);
