import home from '../mirror-pages/index.html?raw';
import { addStaticRuntime } from './mirror-runtime';

export async function GET() {
  const html = addStaticRuntime(home
    .replaceAll('https://houshafzar.com/', '/')
    .replaceAll('http://houshafzar.com/', '/')
    .replaceAll('https:\\/\\/houshafzar.com\\/', '\\/'));

  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}
