# tsx

> TypeScript execute — run TypeScript files directly in Node.js without a compilation step, with ESM support and watch mode.

**npm:** https://www.npmjs.com/package/tsx
**GitHub:** https://github.com/privatenumber/tsx
**Docs:** https://tsx.is/

---

## The Problem

Running TypeScript Node.js scripts requires either a build step (`tsc`) or a heavy runtime like `ts-node` that has slow startup times, ESM compatibility issues, and complex configuration.

---

## What It Does

`tsx` uses esbuild to transform TypeScript on-the-fly with near-instant startup. It supports both CommonJS and ESM, handles `tsconfig.json` paths, and provides a `--watch` flag for development. Drop-in replacement for `node` — just prefix your command with `tsx`.

---

## Installation

```bash
npm install -D tsx
```

---

## Usage Example

```json
// package.json
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "start": "tsx src/server.ts",
    "seed": "tsx scripts/seed-database.ts"
  }
}
```

```typescript
// src/server.ts — runs directly with `tsx src/server.ts`
import { createServer } from 'http';

const server = createServer((req, res) => {
  res.end('Hello from TypeScript!');
});

server.listen(3000, () => console.log('Server running on :3000'));
```

---

## Screenshot / Demo

<!-- https://tsx.is/ -->

---

## Submitted by

[@claude](https://github.com/claude)
