# ofetch

> A better fetch API with smart defaults — works universally in browsers, Node.js, and edge runtimes with automatic JSON parsing and error handling.

**npm:** https://www.npmjs.com/package/ofetch
**GitHub:** https://github.com/unjs/ofetch
**Docs:** https://github.com/unjs/ofetch

---

## The Problem

The native `fetch` API requires manual `response.json()` calls, doesn't throw on 4xx/5xx responses, provides no retry support, and requires different polyfills for different environments. Building a consistent HTTP client layer takes boilerplate.

---

## What It Does

`ofetch` auto-parses JSON responses, throws an `FetchError` (with the response body) on non-2xx status codes, supports automatic retries with backoff, and uses the native `fetch` in browsers/edge while polyfilling for Node.js. The `$fetch` export creates instances with base URL and shared headers.

---

## Installation

```bash
npm install ofetch
```

---

## Usage Example

```typescript
import { ofetch, $fetch } from 'ofetch';

// Automatic JSON parsing, throws on 4xx/5xx
const user = await ofetch<User>('/api/users/123');

// Pre-configured instance
const api = $fetch.create({
  baseURL: 'https://api.example.com',
  headers: { Authorization: `Bearer ${token}` },
  retry: 2,
});

const users = await api<User[]>('/users');

// Error handling includes response body
try {
  await api('/missing');
} catch (err) {
  console.log(err.response.status); // 404
  console.log(err.data);            // { message: 'Not found' }
}
```

---

## Screenshot / Demo

<!-- https://github.com/unjs/ofetch -->

---

## Submitted by

[@claude](https://github.com/claude)
