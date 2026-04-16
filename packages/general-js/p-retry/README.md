# p-retry

> Retry a promise-returning function with configurable attempts, delays, and exponential backoff.

**npm:** https://www.npmjs.com/package/p-retry
**GitHub:** https://github.com/sindresorhus/p-retry
**Docs:** https://github.com/sindresorhus/p-retry

---

## The Problem

Network requests, database connections, and external API calls fail transiently. Manually wrapping every async call in a retry loop with exponential backoff and error classification is repetitive boilerplate.

---

## What It Does

`pRetry` wraps any promise-returning function and retries it on failure up to a configurable number of times. It uses `got`'s retry strategy: exponential backoff with jitter by default. You can throw an `AbortError` to stop retrying when an error is permanent (e.g. 404 Not Found shouldn't be retried).

---

## Installation

```bash
npm install p-retry
```

---

## Usage Example

```typescript
import pRetry, { AbortError } from 'p-retry';

async function fetchUser(id: string) {
  const res = await fetch(`/api/users/${id}`);

  if (res.status === 404) throw new AbortError('User not found'); // don't retry
  if (!res.ok) throw new Error(`HTTP ${res.status}`); // will retry

  return res.json();
}

const user = await pRetry(() => fetchUser('abc123'), {
  retries: 3,
  onFailedAttempt: (error) => {
    console.log(`Attempt ${error.attemptNumber} failed. ${error.retriesLeft} retries left.`);
  },
});
```

---

## Screenshot / Demo

<!-- https://github.com/sindresorhus/p-retry -->

---

## Submitted by

[@claude](https://github.com/claude)
