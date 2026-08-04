import { mirroredPages } from '../mirror-pages.generated';
import { addStaticRuntime } from '../mirror-runtime';

function normalizePath(pathname: string) {
  let decoded = pathname;
  try { decoded = decodeURIComponent(pathname); } catch {}
  return decoded.replace(/^\/+|\/+$/g, '');
}

export async function GET(request: Request) {
  const key = normalizePath(new URL(request.url).pathname);
  const html = mirroredPages[key];
  if (!html) return new Response('صفحه موردنظر پیدا نشد.', { status: 404 });
  return new Response(addStaticRuntime(html), {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}
