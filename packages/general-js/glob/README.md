# glob

> Match files using shell-style patterns — the most widely used glob implementation in JavaScript.

**npm:** https://www.npmjs.com/package/glob
**GitHub:** https://github.com/isaacs/node-glob
**Docs:** https://github.com/isaacs/node-glob#readme

---

## The Problem

Finding files that match a pattern like `src/**/*.test.js` by manually walking directories with `fs` is verbose, and getting recursion, ignores, and cross-platform path handling right is surprisingly hard.

---

## What It Does

`glob` resolves shell-style wildcard patterns into file paths, with support for `**` recursion, ignore patterns, and both async and sync APIs. It is the backbone of file discovery in build tools, test runners, and CLIs.

---

## Installation

```bash
npm install glob
```

---

## Usage Example

```js
import { glob } from "glob";

const testFiles = await glob("src/**/*.test.js", {
  ignore: "node_modules/**",
});

console.log(`Found ${testFiles.length} test files`);
```

---

## Submitted by

[@claude](https://github.com/claude)
