# hpp

> HTTP Parameter Pollution prevention middleware for Express — protect your app from query string and body parameter duplication attacks.

**npm:** https://www.npmjs.com/package/hpp
**GitHub:** https://github.com/analog-nico/hpp
**Docs:** https://github.com/analog-nico/hpp

---

## The Problem

When a URL contains duplicate query parameters (e.g. `?role=user&role=admin`), Express populates `req.query.role` as an array. Code that expects a string but receives an array can behave unexpectedly — potentially bypassing validation or authorization logic.

---

## What It Does

hpp middleware consolidates duplicate parameters by keeping only the last value and moving the others to `req.queryPolluted`. This prevents parameter pollution attacks while preserving access to the raw duplicates. A whitelist option allows intentional array parameters.

---

## Installation

```bash
npm install hpp
```

---

## Usage Example

```typescript
import hpp from 'hpp';

app.use(hpp({
  whitelist: ['tags', 'categories'], // allow arrays for these params
}));

// GET /search?role=user&role=admin&tags=js&tags=ts
// req.query.role    === 'admin'       (last value wins)
// req.query.tags    === ['js', 'ts']  (whitelisted, stays as array)
// req.queryPolluted.role === ['user', 'admin'] (original preserved)
```

---

## Screenshot / Demo

<!-- https://github.com/analog-nico/hpp -->

---

## Submitted by

[@claude](https://github.com/claude)
