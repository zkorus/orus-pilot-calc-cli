import { add, subtract } from "orus-pilot-calc";

export const usage = "usage: calc <add|subtract> <a> <b>";

const operations = new Map<string, (a: number, b: number) => number>([
  ["add", add],
  ["subtract", subtract],
]);

/** What the command line prints, and the exit code it ends with. */
export interface Result {
  code: number;
  out: string;
}

/** Runs one command, given the arguments after the program name. */
export function run(args: string[]): Result {
  const [name, a, b, ...rest] = args;
  const operation = name === undefined ? undefined : operations.get(name);
  if (operation === undefined || a === undefined || b === undefined || rest.length > 0) {
    return { code: 1, out: usage };
  }
  for (const arg of [a, b]) {
    if (arg.trim() === "" || Number.isNaN(Number(arg))) {
      return { code: 1, out: `not a number: ${arg}` };
    }
  }
  return { code: 0, out: String(operation(Number(a), Number(b))) };
}
