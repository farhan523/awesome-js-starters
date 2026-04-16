# got

> Human-friendly HTTP requests for Node.js — a powerful fetch alternative with retry, pagination, caching, and hooks built in.

**npm:** https://www.npmjs.com/package/got
**GitHub:** https://github.com/sindresorhus/got
**Docs:** https://github.com/sindresorhus/got

---

## The Problem

Node.js's built-in `fetch` and the `http` module lack retry logic, request hooks, pagination helpers, and response caching. Building these on top of bare fetch requires significant wrapper code.

---

## What It Does

Got provides a feature-rich HTTP client for Node.js: automatic retry with exponential backoff, request/response hooks for auth and logging, built-in pagination for cursor/page-based APIs, response caching, and detailed timing metrics. The `extend()` API creates pre-configured instances for different services.

---

## Installation

```bash
npm install got
```

---

## Usage Example

```typescript
import got from 'got';

// Create a pre-configured instance for your API
const api = got.extend({
  prefixUrl: 'https://api.example.com',
  headers: { Authorization: `Bearer ${token}` },
  retry: { limit: 3, statusCodes: [429, 503] },
});

const user = await api.get('users/123').json<User>();

// Paginate through all results automatically
for await (const user of api.paginate<User>('users', {
  pagination: { paginate: ({ currentItems, nextPageUrl }) => nextPageUrl ? { url: nextPageUrl } : false },
})) {
  process(user);
}
```

---

## Screenshot / Demo

<!-- https://github.com/sindresorhus/got -->

---

## Submitted by

[@claude](https://github.com/claude)
