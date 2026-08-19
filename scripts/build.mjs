import { copyFileSync, mkdirSync, readdirSync, renameSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const astroBin = fileURLToPath(new URL('../node_modules/astro/bin/astro.mjs', import.meta.url));

const build = spawnSync(process.execPath, [astroBin, 'build'], {
  cwd: projectRoot,
  stdio: 'inherit',
});

if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));
const clientDir = fileURLToPath(new URL('../dist/client/', import.meta.url));
const serverDir = fileURLToPath(new URL('../dist/server/', import.meta.url));

mkdirSync(clientDir, { recursive: true });
for (const entry of readdirSync(distDir)) {
  if (entry === 'client' || entry === 'server') continue;
  renameSync(`${distDir}${entry}`, `${clientDir}${entry}`);
}

mkdirSync(serverDir, { recursive: true });
copyFileSync(
  fileURLToPath(new URL('../sites-worker/index.js', import.meta.url)),
  fileURLToPath(new URL('../dist/server/index.js', import.meta.url)),
);
