# @fastify/cors

> CORS plugin for Fastify — configure cross-origin resource sharing with full support for preflight requests and dynamic origins.

**npm:** https://www.npmjs.com/package/@fastify/cors
**GitHub:** https://github.com/fastify/fastify-cors
**Docs:** https://github.com/fastify/fastify-cors

---

## The Problem

Browser security blocks cross-origin requests. Configuring CORS headers in Fastify manually requires handling `OPTIONS` preflight responses across all routes, managing allowed origin lists, and setting correct `Access-Control-*` headers.

---

## What It Does

`@fastify/cors` registers a plugin that intercepts all requests and adds the appropriate CORS headers. It supports static and dynamic origin configuration (function-based for per-request decisions), credentials, exposed headers, and max age for preflight caching.

---

## Installation

```bash
npm install @fastify/cors
```

---

## Usage Example

```typescript
import fastify from 'fastify';
import cors from '@fastify/cors';

const app = fastify();

await app.register(cors, {
  origin: (origin, cb) => {
    const allowed = ['https://myapp.com', 'https://staging.myapp.com'];
    cb(null, allowed.includes(origin ?? ''));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});
```

---

## Screenshot / Demo

<!-- https://github.com/fastify/fastify-cors -->

---

## Submitted by

[@claude](https://github.com/claude)
