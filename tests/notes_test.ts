import { asserts, mocks } from '../deps.ts';
import { read, write } from '../src/notes.ts';

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
