# @fastify/sensible

> Sensible defaults and HTTP utilities for Fastify — adds HTTP error helpers, assertions, and common reply methods to every Fastify instance.

**npm:** https://www.npmjs.com/package/@fastify/sensible
**GitHub:** https://github.com/fastify/fastify-sensible
**Docs:** https://github.com/fastify/fastify-sensible

---

## The Problem

Sending correct HTTP error responses in Fastify (with proper status codes and error bodies) requires verbose `reply.status(400).send({ message: 'Bad Request' })` calls. There's no built-in shorthand for common HTTP error types.

---

## What It Does

`@fastify/sensible` adds `reply.badRequest()`, `reply.unauthorized()`, `reply.notFound()`, and 30+ other HTTP error shorthands to every reply object. It also adds `request.is()` for content type checking and `reply.vary()` for Vary header management.

---

## Installation

```bash
npm install @fastify/sensible
```

---

## Usage Example

```typescript
import fastify from 'fastify';
import sensible from '@fastify/sensible';

const app = fastify();
await app.register(sensible);

app.get('/users/:id', async (request, reply) => {
  const user = await findUser(request.params.id);

  if (!user) return reply.notFound('User not found');
  if (!request.user.isAdmin) return reply.forbidden('Admins only');

  return user;
});
```

---

## Screenshot / Demo

<!-- https://github.com/fastify/fastify-sensible -->

---

## Submitted by

[@claude](https://github.com/claude)
