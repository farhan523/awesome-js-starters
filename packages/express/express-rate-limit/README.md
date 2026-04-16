# express-rate-limit

> Basic IP rate-limiting middleware for Express — protect your API endpoints from brute-force and denial-of-service attacks.

**npm:** https://www.npmjs.com/package/express-rate-limit
**GitHub:** https://github.com/express-rate-limit/express-rate-limit
**Docs:** https://express-rate-limit.mintlify.app/

---

## The Problem

Without rate limiting, login endpoints are vulnerable to brute-force attacks and public APIs can be abused by bots. Implementing per-IP request counting with window resets requires custom middleware and a backing store.

---

## What It Does

`express-rate-limit` counts requests per IP within a time window and responds with 429 Too Many Requests when the limit is exceeded. Rate limit info is exposed via response headers. Pluggable stores (Redis, Memcached) enable rate limiting across multiple server instances.

---

## Installation

```bash
npm install express-rate-limit
```

---

## Usage Example

```typescript
import rateLimit from 'express-rate-limit';

// Strict limit for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: { error: 'Too many login attempts, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// General API limit
const apiLimiter = rateLimit({ windowMs: 60 * 1000, max: 100 });

app.use('/api', apiLimiter);
app.use('/api/auth/login', authLimiter);
```

---

## Screenshot / Demo

<!-- https://express-rate-limit.mintlify.app/ -->

---

## Submitted by

[@claude](https://github.com/claude)
