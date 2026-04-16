# cors

> CORS middleware for Express — configure cross-origin resource sharing with a single line of code.

**npm:** https://www.npmjs.com/package/cors
**GitHub:** https://github.com/expressjs/cors
**Docs:** https://github.com/expressjs/cors

---

## The Problem

Browser security blocks cross-origin API requests by default. Configuring CORS headers correctly — including preflight `OPTIONS` responses, allowed origins, credentials, and methods — requires careful implementation that's easy to get wrong.

---

## What It Does

The `cors` middleware handles all CORS header logic for Express. You can allow all origins, restrict to a whitelist, configure per-route, and handle preflight automatically. The options mirror the CORS spec exactly — `origin`, `methods`, `allowedHeaders`, `credentials`, `maxAge`.

---

## Installation

```bash
npm install cors
npm install -D @types/cors
```

---

## Usage Example

```typescript
import express from 'express';
import cors from 'cors';

const app = express();

// Allow specific origins
app.use(cors({
  origin: ['https://myapp.com', 'https://staging.myapp.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Or per-route
app.get('/public', cors(), (req, res) => {
  res.json({ data: 'accessible from anywhere' });
});
```

---

## Screenshot / Demo

<!-- https://github.com/expressjs/cors -->

---

## Submitted by

[@claude](https://github.com/claude)
