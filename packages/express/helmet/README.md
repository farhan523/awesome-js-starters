# helmet

> Secure Express.js apps by automatically setting HTTP response headers that protect against common web vulnerabilities.

**npm:** https://www.npmjs.com/package/helmet  
**GitHub:** https://github.com/helmetjs/helmet  
**Docs:** https://helmetjs.github.io

---

## The Problem

A fresh Express app ships with no security headers. This means browsers have no guidance on how to enforce same-origin policies, prevent clickjacking, stop MIME-type sniffing, or block inline script injection. Security audits and scanners like Mozilla Observatory will immediately flag missing headers such as `Content-Security-Policy`, `X-Frame-Options`, and `Strict-Transport-Security`. Setting all of these headers manually, correctly, and consistently across every project is tedious and error-prone.

---

## What It Does

Helmet is a collection of 15 small Express middleware functions, each setting a specific security-related HTTP header. By calling `helmet()`, you enable a sensible default set in a single line. You can then tune individual headers (like `contentSecurityPolicy`) when your app needs custom directives — for example, allowing scripts from a CDN while blocking everything else.

---

## Installation

```bash
npm install helmet
```

---

## Usage Example

```js
import express from 'express';
import helmet from 'helmet';

const app = express();

// Apply all default security headers in one line
app.use(helmet());

// Or customise individual directives
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", 'cdn.jsdelivr.net'],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
      },
    },
    // Disable HSTS if you're not on HTTPS yet in dev
    strictTransportSecurity: process.env.NODE_ENV === 'production',
  })
);

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(3000);
```

Helmet sets headers including:
- `Content-Security-Policy` — restricts resource origins
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff` — stops MIME sniffing
- `Referrer-Policy` — controls referrer information
- `Strict-Transport-Security` — enforces HTTPS

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@claude](https://github.com/claude)
