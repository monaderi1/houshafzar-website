import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const root = new URL('../mirror-pages/', import.meta.url);
const out = new URL('../app/mirror-pages.generated.ts', import.meta.url);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (entry.name === 'index.html') files.push(path);
  }
  return files;
}

const files = (await walk(root.pathname)).sort();
const imports = [];
const mappings = [];

for (const [index, file] of files.entries()) {
  const rel = relative(root.pathname, file).split(sep).join('/');
  const route = rel === 'index.html' ? '/' : rel.replace(/\/index\.html$/, '');
  const name = `page${index}`;
  imports.push(`import ${name} from '../mirror-pages/${rel}?raw';`);
  mappings.push(`  ${JSON.stringify(route)}: localize(${name}),`);
}

const source = `${imports.join('\n')}\n\nfunction localize(html: string) {\n  return html\n    .replaceAll('https://houshafzar.com/', '/')\n    .replaceAll('http://houshafzar.com/', '/')\n    .replaceAll('https:\\/\\/houshafzar.com\\/', '\\/');\n}\n\nexport const mirroredPages: Record<string, string> = {\n${mappings.join('\n')}\n};\n`;
await writeFile(out, source);
console.log(`Generated ${files.length} mirrored routes.`);
