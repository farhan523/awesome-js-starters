# @fastify/redis

> Redis connection plugin for Fastify — share a Redis client instance across your entire Fastify application via decorators.

**npm:** https://www.npmjs.com/package/@fastify/redis
**GitHub:** https://github.com/fastify/fastify-redis
**Docs:** https://github.com/fastify/fastify-redis

---

## The Problem

Sharing a Redis client across Fastify plugins and route handlers without passing it manually through every function requires Fastify's decorator system — wiring this up correctly with proper lifecycle management is boilerplate.

---

## What It Does

`@fastify/redis` registers an `ioredis` client and decorates the Fastify instance with `fastify.redis`. The client is automatically closed when the server shuts down. Multiple named clients allow connecting to different Redis instances for different purposes.

---

## Installation

```bash
npm install @fastify/redis
```

---

## Usage Example

```typescript
import fastify from 'fastify';
import redis from '@fastify/redis';

const app = fastify();

await app.register(redis, {
  host: process.env.REDIS_HOST,
  port: 6379,
  family: 4,
});

app.get('/cached-data', async (request, reply) => {
  const cached = await app.redis.get('data:list');
  if (cached) return JSON.parse(cached);

  const data = await fetchData();
  await app.redis.setex('data:list', 300, JSON.stringify(data));
  return data;
});
```

---

## Screenshot / Demo

<!-- https://github.com/fastify/fastify-redis -->

---

## Submitted by

[@claude](https://github.com/claude)
