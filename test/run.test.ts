import assert from "node:assert/strict";
import { test } from "node:test";

import { run, usage } from "../src/run.ts";

test("add and subtract print the result", () => {
  assert.deepEqual(run(["add", "2", "3"]), { code: 0, out: "5" });
  assert.deepEqual(run(["subtract", "2", "3"]), { code: 0, out: "-1" });
  assert.deepEqual(run(["add", "0.5", "0.25"]), { code: 0, out: "0.75" });
});

test("an unknown operation prints the usage", () => {
  assert.deepEqual(run(["divide", "6", "3"]), { code: 1, out: usage });
  assert.deepEqual(run(["toString", "6", "3"]), { code: 1, out: usage });
  assert.deepEqual(run([]), { code: 1, out: usage });
});

test("a wrong number of arguments prints the usage", () => {
  assert.deepEqual(run(["add", "2"]), { code: 1, out: usage });
  assert.deepEqual(run(["add", "2", "3", "4"]), { code: 1, out: usage });
});

test("an argument that is not a number is named", () => {
  assert.deepEqual(run(["add", "two", "3"]), { code: 1, out: "not a number: two" });
  assert.deepEqual(run(["add", "2", "x"]), { code: 1, out: "not a number: x" });
  assert.deepEqual(run(["add", "2", " "]), { code: 1, out: "not a number:  " });
});
