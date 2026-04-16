# axios

> Promise-based HTTP client for the browser and Node.js — interceptors, automatic JSON parsing, request cancellation, and progress events.

**npm:** https://www.npmjs.com/package/axios
**GitHub:** https://github.com/axios/axios
**Docs:** https://axios-http.com/docs/intro

---

## The Problem

The native `fetch` API lacks request/response interceptors, automatic JSON serialization, request timeout support, and meaningful error objects that include the response body when a request fails.

---

## What It Does

Axios provides a simple API for HTTP requests with automatic JSON request/response transformation, configurable interceptors for auth headers and error handling, request cancellation via `AbortController`, upload/download progress callbacks, and detailed error objects including HTTP status and response body.

---

## Installation

```bash
npm install axios
```

---

## Usage Example

```typescript
import axios from 'axios';

// Create a configured instance
const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
});

// Add auth interceptor
api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});

// Type-safe response
const { data } = await api.get<{ users: User[] }>('/users');
const user = await api.post<User>('/users', { name: 'Alice', email: 'alice@example.com' });
```

---

## Screenshot / Demo

<!-- https://axios-http.com/docs/example -->

---

## Submitted by

[@claude](https://github.com/claude)
