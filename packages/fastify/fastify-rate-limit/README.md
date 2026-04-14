# @fastify/rate-limit

> A low-overhead rate limiting plugin for Fastify — protect your API routes from abuse and brute-force attacks with per-route or global limits.

**npm:** https://www.npmjs.com/package/@fastify/rate-limit  
**GitHub:** https://github.com/fastify/fastify-rate-limit  
**Docs:** https://github.com/fastify/fastify-rate-limit#readme

---

## The Problem

Exposing API endpoints without rate limiting is an open invitation for abuse — login brute-force attacks, credential stuffing, scraping bots, and accidental infinite-loop clients can all overwhelm your server. Implementing rate limiting correctly in middleware requires careful header management (`Retry-After`, `X-RateLimit-*`), a fast in-memory or Redis store, and per-route configuration — none of which Fastify provides out of the box.

---

## What It Does

`@fastify/rate-limit` integrates directly with Fastify's plugin system. You register it globally with a default limit and then override on specific routes. It automatically sets the standard `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset` headers, returns `429 Too Many Requests` with a `Retry-After` header when limits are exceeded, and supports pluggable stores (in-memory by default, Redis for multi-instance deployments).

---

## Installation

```bash
npm install @fastify/rate-limit
```

---

## Usage Example

```js
import Fastify from 'fastify';
import rateLimit from '@fastify/rate-limit';

const app = Fastify({ logger: true });

// Global default: 100 requests per minute per IP
await app.register(rateLimit, {
  global: true,
  max: 100,
  timeWindow: '1 minute',
});

// Public route — uses global limit
app.get('/api/products', async () => {
  return { products: [] };
});

// Sensitive route — tighter limit to prevent brute-force
app.post(
  '/api/auth/login',
  {
    config: {
      rateLimit: {
        max: 5,
        timeWindow: '15 minutes',
        errorResponseBuilder: (req, context) => ({
          statusCode: 429,
          error: 'Too Many Requests',
          message: `Too many login attempts. Try again in ${context.after}.`,
        }),
      },
    },
  },
  async (req, reply) => {
    // login logic
    return { token: 'jwt-here' };
  }
);

// Exclude health check entirely from rate limiting
app.get('/health', { config: { rateLimit: false } }, async () => ({ ok: true }));

await app.listen({ port: 3000 });
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@anthropics](https://github.com/anthropics)
