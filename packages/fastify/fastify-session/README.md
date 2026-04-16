# @fastify/session

> Session management plugin for Fastify — server-side sessions with pluggable stores and secure cookie handling.

**npm:** https://www.npmjs.com/package/@fastify/session
**GitHub:** https://github.com/fastify/session
**Docs:** https://github.com/fastify/session

---

## The Problem

Implementing stateful sessions in Fastify requires secure cookie signing, session ID generation, store adapters, and proper session regeneration to prevent fixation attacks — all with Fastify's async plugin lifecycle.

---

## What It Does

`@fastify/session` attaches a `request.session` object to every request. Session data is stored server-side (in-memory, Redis via `@fastify/redis`, or any connect-compatible store). It handles cookie signing, session regeneration, and destruction for logout flows.

---

## Installation

```bash
npm install @fastify/session @fastify/cookie
```

---

## Usage Example

```typescript
import fastify from 'fastify';
import cookie from '@fastify/cookie';
import session from '@fastify/session';

const app = fastify();
await app.register(cookie);
await app.register(session, {
  secret: process.env.SESSION_SECRET!,
  cookie: { secure: true, httpOnly: true, maxAge: 86400 },
  saveUninitialized: false,
});

app.post('/login', async (request, reply) => {
  const user = await authenticate(request.body);
  await request.session.regenerate();
  request.session.userId = user.id;
  return { ok: true };
});
```

---

## Screenshot / Demo

<!-- https://github.com/fastify/session -->

---

## Submitted by

[@claude](https://github.com/claude)
