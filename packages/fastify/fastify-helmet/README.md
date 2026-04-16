# @fastify/helmet

> Security headers plugin for Fastify — sets HTTP headers that protect against common web vulnerabilities like XSS, clickjacking, and MIME sniffing.

**npm:** https://www.npmjs.com/package/@fastify/helmet
**GitHub:** https://github.com/fastify/fastify-helmet
**Docs:** https://github.com/fastify/fastify-helmet

---

## The Problem

By default, Fastify (and Node.js HTTP servers generally) set no security-related response headers. This exposes apps to clickjacking, MIME sniffing, and XSS attacks that a few HTTP headers can prevent.

---

## What It Does

`@fastify/helmet` is the Fastify wrapper around the `helmet` library. It sets `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and other protective headers by default. Each header is configurable or can be disabled individually.

---

## Installation

```bash
npm install @fastify/helmet
```

---

## Usage Example

```typescript
import fastify from 'fastify';
import helmet from '@fastify/helmet';

const app = fastify();

await app.register(helmet, {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'cdn.example.com'],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
});
```

---

## Screenshot / Demo

<!-- https://github.com/fastify/fastify-helmet -->

---

## Submitted by

[@claude](https://github.com/claude)
