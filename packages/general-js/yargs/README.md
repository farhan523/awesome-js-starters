# yargs

> Build interactive command-line tools by parsing arguments and generating an elegant user interface.

**npm:** https://www.npmjs.com/package/yargs
**GitHub:** https://github.com/yargs/yargs
**Docs:** https://yargs.js.org

---

## The Problem

Parsing `process.argv` by hand quickly becomes messy once a CLI needs subcommands, typed options, defaults, validation, and auto-generated help text.

---

## What It Does

`yargs` turns argument parsing into a declarative API with commands, options, coercion, and validation, and automatically produces `--help` and `--version` output. It is a core dependency of countless CLI tools.

---

## Installation

```bash
npm install yargs
```

---

## Usage Example

```js
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "greet <name>",
    "greet a user",
    (y) => y.positional("name", { type: "string" }),
    (argv) => console.log(`Hello, ${argv.name}!`)
  )
  .option("loud", { type: "boolean", default: false })
  .help()
  .parse();
```

---

## Submitted by

[@claude](https://github.com/claude)
