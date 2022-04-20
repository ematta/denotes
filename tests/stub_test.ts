import { asserts } from "../deps.ts"

Deno.test("test_stub", function (): void {
  asserts.assertEquals(1, 1);
});