# orus-pilot-calc-cli

> **Temporary.** This repository is the consumer in the pilot of [orus](https://github.com/zkbox/orus), a framework
> for repositories that work with AI agents. It will be deleted when the pilot ends.

A tiny calculator on the command line, built on
[orus-pilot-calc](https://github.com/zkbox/orus-pilot-calc).

```sh
calc add 2 3        # 5
calc subtract 2 3   # -1
```

## Develop

Node 24 or later.

```sh
npm install
npm test                     # the gate: type check and tests
node src/cli.ts add 2 3      # run from the source
```

The library is a git dependency on one of its release tags (see `package.json`). A new version of the library is taken
by changing that tag and the lockfile in a pull request.
