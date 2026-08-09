import { mkdir, readdir, rename, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const client = new URL('./client/', dist);

await mkdir(client, { recursive: true });

for (const entry of await readdir(dist, { withFileTypes: true })) {
  if (entry.name === 'client' || entry.name === 'server' || entry.name === '.openai') continue;
  await rename(new URL(entry.name, dist), new URL(entry.name, client));
}

await mkdir(new URL('./server/', dist), { recursive: true });
await writeFile(
  new URL('./server/index.js', dist),
  `const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);

    if (response.status === 404 && url.pathname.endsWith('/')) {
      url.pathname += 'index.html';
      response = await env.ASSETS.fetch(new Request(url, request));
    } else if (response.status === 404 && !url.pathname.split('/').at(-1).includes('.')) {
      url.pathname += '.html';
      response = await env.ASSETS.fetch(new Request(url, request));
    }

    return response;
  },
};

export default worker;
`,
);

console.log(`Prepared ${join('dist', 'client')} and ${join('dist', 'server', 'index.js')} for Sites.`);
