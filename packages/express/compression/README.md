# compression

> HTTP response compression middleware for Express — gzip/deflate responses to reduce bandwidth and improve load times.

**npm:** https://www.npmjs.com/package/compression
**GitHub:** https://github.com/expressjs/compression
**Docs:** https://github.com/expressjs/compression

---

## The Problem

Serving large JSON API responses and static assets uncompressed wastes bandwidth and slows down clients. Configuring gzip correctly at the application level (vs. a reverse proxy) requires understanding content negotiation and threshold tuning.

---

## What It Does

The `compression` middleware compresses responses when the client sends an `Accept-Encoding: gzip` header and the response exceeds the threshold size. It negotiates between gzip and deflate, skips binary formats (images, video), and adds the appropriate `Content-Encoding` header.

---

## Installation

```bash
npm install compression
npm install -D @types/compression
```

---

## Usage Example

```typescript
import express from 'express';
import compression from 'compression';

const app = express();

// Apply to all routes
app.use(compression({
  threshold: 1024, // only compress responses > 1KB
  filter: (req, res) => {
    // Skip compression for already-compressed formats
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  },
}));

app.get('/data', (req, res) => {
  res.json({ users: largeUsersArray }); // automatically gzipped
});
```

---

## Screenshot / Demo

<!-- https://github.com/expressjs/compression -->

---

## Submitted by

[@claude](https://github.com/claude)
