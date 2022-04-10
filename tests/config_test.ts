import { asserts } from '../deps.ts';
import config from '../src/config.ts';

Deno.test('test_config', () => {
  asserts.assertStringIncludes(config.filePath, '.denotes');
});
