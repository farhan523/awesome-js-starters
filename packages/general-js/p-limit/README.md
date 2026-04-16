# p-limit

> Run multiple promise-returning functions with limited concurrency — control how many async operations run in parallel.

**npm:** https://www.npmjs.com/package/p-limit
**GitHub:** https://github.com/sindresorhus/p-limit
**Docs:** https://github.com/sindresorhus/p-limit

---

## The Problem

Running `Promise.all()` on hundreds of async tasks (API calls, file reads, database queries) fires all of them simultaneously, overwhelming the target service or exhausting file descriptor limits.

---

## What It Does

`pLimit(n)` returns a function that wraps your async operations. It runs at most `n` at a time, queuing the rest until a slot opens. This prevents overwhelming servers, databases, or the OS while still running multiple operations concurrently.

---

## Installation

```bash
npm install p-limit
```

---

## Usage Example

```typescript
import pLimit from 'p-limit';

const limit = pLimit(5); // max 5 concurrent requests

const urls = Array.from({ length: 100 }, (_, i) => `https://api.example.com/item/${i}`);

const results = await Promise.all(
  urls.map((url) =>
    limit(async () => {
      const res = await fetch(url);
      return res.json();
    })
  )
);
// Fetches 5 URLs at a time, queuing the rest
```

---

## Screenshot / Demo

<!-- https://github.com/sindresorhus/p-limit -->

---

## Submitted by

[@claude](https://github.com/claude)
