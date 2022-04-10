import { Args, ensureFile } from '../deps.ts';
import config from './config.ts';

export async function write(args: Args): Promise<boolean> {
  await ensureFile(config.filePath);
  await Deno.writeTextFile(
    config.filePath,
    `[${Date.now()}] - ${args._.join(' ')}\n`,
    { append: true },
  );
  return true;
}

export async function read() {
  return await Deno.readTextFile(config.filePath);
}
