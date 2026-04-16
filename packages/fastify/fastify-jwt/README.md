# @fastify/jwt

> JWT authentication plugin for Fastify — sign, verify, and decode tokens with a decorator-based API that integrates with Fastify's request lifecycle.

**npm:** https://www.npmjs.com/package/@fastify/jwt
**GitHub:** https://github.com/fastify/fastify-jwt
**Docs:** https://github.com/fastify/fastify-jwt

---

## The Problem

Adding JWT authentication to Fastify routes requires integrating a JWT library with Fastify's plugin system, hooks, and request decorators. Rolling this manually risks inconsistent error handling and bypassed verification.

---

## What It Does

`@fastify/jwt` decorates `fastify` with `sign()` and `verify()` methods and adds `request.jwtVerify()` for use in route handlers or hooks. A `preHandler` hook can enforce authentication on entire route groups. It supports symmetric and asymmetric algorithms and token refresh patterns.

---

## Installation

```bash
npm install @fastify/jwt
```

---

## Usage Example

```typescript
import fastify from 'fastify';
import jwt from '@fastify/jwt';

const app = fastify();
await app.register(jwt, { secret: process.env.JWT_SECRET! });

// Protect a route
app.addHook('onRequest', async (request, reply) => {
  try { await request.jwtVerify(); }
  catch { reply.send({ error: 'Unauthorized' }); }
});

app.post('/login', async (request, reply) => {
  const { email } = request.body as { email: string };
  const token = await reply.jwtSign({ email }, { expiresIn: '7d' });
  return { token };
});
```

---

## Screenshot / Demo

<!-- https://github.com/fastify/fastify-jwt -->

---

## Submitted by

[@claude](https://github.com/claude)
