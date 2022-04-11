import { asserts, mocks } from '../deps.ts';
import { read, search, write } from '../src/notes.ts';

Deno.test('test read', async () => {
  const mockedReadFile = mocks.stub(Deno, 'readTextFile', () => 'foo');
  try {
    asserts.assertEquals(await read(), 'foo');
  } finally {
    mockedReadFile.restore();
  }
});

Deno.test('test write', async () => {
  const spy = mocks.spy(Deno, 'writeTextFile');
  await write({ _: ['foo'] });
  mocks.assertSpyCalls(spy, 1);
});

Deno.test("search should return an empty array if there's no match", async () => {
  const stub = mocks.stub(Deno, 'readTextFile', () => "bar");
  try {
    asserts.assertEquals(await search("foo"), []);
  } finally {
    stub.restore();
  }
});

Deno.test("search should return an array of lines that contain the term", async () => {
  const stub = mocks.stub(Deno, 'readTextFile', () => "bar");
  try {
    asserts.assertEquals(await search("bar"), ['bar']);
  } finally {
    stub.restore();
  }
});