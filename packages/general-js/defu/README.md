# defu

> Deeply merge objects with defaults — a tiny utility for layered configuration that handles nested objects correctly.

**npm:** https://www.npmjs.com/package/defu
**GitHub:** https://github.com/unjs/defu
**Docs:** https://github.com/unjs/defu

---

## The Problem

`Object.assign` and spread syntax only shallow-merge objects — nested objects are overwritten entirely, not merged. Deeply merging a user config with defaults requires recursion that most teams reinvent repeatedly.

---

## What It Does

`defu(userConfig, defaults)` recursively merges defaults into the user object, but only fills in keys that are `undefined` or missing. Arrays can be merged or concatenated. The `defuFn` variant applies function defaults for computed values. Common in configuration management and library defaults.

---

## Installation

```bash
npm install defu
```

---

## Usage Example

```typescript
import { defu } from 'defu';

const userConfig = {
  server: { port: 8080 },
  logging: { level: 'debug' },
};

const defaults = {
  server: { port: 3000, host: 'localhost', https: false },
  logging: { level: 'info', format: 'json' },
  cache: { ttl: 300 },
};

const config = defu(userConfig, defaults);
// {
//   server: { port: 8080, host: 'localhost', https: false }, // user port wins
//   logging: { level: 'debug', format: 'json' },             // user level wins
//   cache: { ttl: 300 },                                     // default added
// }
```

---

## Screenshot / Demo

<!-- https://github.com/unjs/defu -->

---

## Submitted by

[@claude](https://github.com/claude)
