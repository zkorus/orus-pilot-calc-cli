#!/usr/bin/env node
import { run } from "./run.ts";

const result = run(process.argv.slice(2));
(result.code === 0 ? console.log : console.error)(result.out);
process.exitCode = result.code;
