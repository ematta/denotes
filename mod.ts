import { read, search, write } from "./src/notes.ts";
import { parse } from "./deps.ts";

const helpMessage = `
Usage:
  denotes [options] <message>

Options:
  -h           Print usage
  -r           Read notes
  -s <term>    Search notes
`;

(async () => {
  const args = parse(Deno.args);
  if (args.h) {
    console.log(helpMessage);
  } else if (args.r) {
    console.log('Messages:\n' + await read());
  } else if (args.s) {
    console.log('Search results:\n' + (await search(args.s)).join('\n'));
  } else {
    if (args._.length === 0) { console.log(helpMessage); }
    else { await write(args); }

  }
  Deno.exit(0);
})();
