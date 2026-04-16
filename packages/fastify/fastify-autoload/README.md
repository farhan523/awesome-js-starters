# @fastify/autoload

> Auto-load Fastify plugins from a directory — organize routes and plugins as files and let the framework discover them automatically.

**npm:** https://www.npmjs.com/package/@fastify/autoload
**GitHub:** https://github.com/fastify/fastify-autoload
**Docs:** https://github.com/fastify/fastify-autoload

---

## The Problem

As a Fastify app grows, manually registering every route plugin with `app.register()` in the main file becomes a maintenance burden. File-based routing conventions (like Next.js uses) make the codebase much easier to navigate.

---

## What It Does

`@fastify/autoload` scans a directory recursively and registers every `.js`/`.ts` file that exports a Fastify plugin. Directory structure maps to URL prefixes (e.g. `routes/users/index.ts` → `/users`). Plugins can declare their own prefix, and the load order respects dependencies.

---

## Installation

```bash
npm install @fastify/autoload
```

---

## Usage Example

```typescript
import fastify from 'fastify';
import autoload from '@fastify/autoload';
import { join } from 'path';

const app = fastify();

// Auto-register all plugins in ./plugins
await app.register(autoload, { dir: join(__dirname, 'plugins') });

// Auto-register all routes in ./routes (maps dir structure to URL prefix)
await app.register(autoload, { dir: join(__dirname, 'routes') });

// routes/users/index.ts → GET /users
// routes/users/:id.ts  → GET /users/:id
```

---

## Screenshot / Demo

<!-- https://github.com/fastify/fastify-autoload -->

---

## Submitted by

[@claude](https://github.com/claude)
