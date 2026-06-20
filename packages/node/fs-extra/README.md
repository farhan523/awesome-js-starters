# fs-extra

> Drop-in replacement for Node's `fs` with extra methods like recursive copy, remove, and ensure.

**npm:** https://www.npmjs.com/package/fs-extra
**GitHub:** https://github.com/jprichardson/node-fs-extra
**Docs:** https://github.com/jprichardson/node-fs-extra#readme

---

## The Problem

Common filesystem tasks — copying a directory tree, removing a folder recursively, or creating a nested path if it doesn't exist — require multiple steps and careful error handling with the built-in `fs` module.

---

## What It Does

`fs-extra` adds promise-friendly helpers such as `copy`, `remove`, `ensureDir`, `outputFile`, and `emptyDir` on top of the native `fs` API, so it works as a direct replacement while removing boilerplate.

---

## Installation

```bash
npm install fs-extra
```

---

## Usage Example

```js
import fs from "fs-extra";

await fs.ensureDir("dist/assets");
await fs.copy("public", "dist/assets");
await fs.outputFile("dist/build.txt", `built at ${new Date().toISOString()}`);

const exists = await fs.pathExists("dist/build.txt");
console.log("build file written:", exists);
```

---

## Submitted by

[@claude](https://github.com/claude)
