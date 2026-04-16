# @fastify/static

> Static file serving plugin for Fastify — serve assets from a local directory with range requests, ETag caching, and index files.

**npm:** https://www.npmjs.com/package/@fastify/static
**GitHub:** https://github.com/fastify/fastify-static
**Docs:** https://github.com/fastify/fastify-static

---

## The Problem

Serving static files (images, CSS, JS bundles, built frontend assets) from a Fastify backend requires efficient range request handling, proper caching headers, and `index.html` fallback for SPA routing.

---

## What It Does

`@fastify/static` serves files from a directory with automatic ETag generation, `Last-Modified` headers, and `Cache-Control` support. It handles partial content (`Range`) requests for media streaming and can serve multiple directories with different prefixes.

---

## Installation

```bash
npm install @fastify/static
```

---

## Usage Example

```typescript
import fastify from 'fastify';
import staticFiles from '@fastify/static';
import { join } from 'path';

const app = fastify();

// Serve frontend build
await app.register(staticFiles, {
  root: join(__dirname, '../client/dist'),
  prefix: '/',
  index: 'index.html',
});

// SPA fallback
app.setNotFoundHandler((req, reply) => {
  reply.sendFile('index.html');
});
```

---

## Screenshot / Demo

<!-- https://github.com/fastify/fastify-static -->

---

## Submitted by

[@claude](https://github.com/claude)
