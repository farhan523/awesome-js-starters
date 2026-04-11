# Ky

> A friendlier version of the standard fetch function used to request data from other websites or servers.

**npm:** https://www.npmjs.com/package/ky  
**GitHub:** https://github.com/sindresorhus/ky  
**Docs:** https://github.com/sindresorhus/ky

---

## The Problem

Communicating with web APIs using the native fetch() function often becomes a repetitive and frustrating chore due to its lack of built-in convenience features, such as automatic JSON parsing or easy error handling. This hassle is compounded when you need a solution that remains consistently high-performing across different runtimes and environments. The challenge is finding a tool that simplifies the boilerplate of network requests while maintaining the broad compatibility and efficiency required for modern, professional web development.

---

## What It Does

Ky transforms the standard fetch experience by wrapping it in a developer-friendly interface that eliminates common pain points like manual response processing and complex timeout configurations. It solves the issue of repetitive "fetch" logic by providing sensible defaults and a cleaner syntax, while remaining remarkably lightweight to ensure top-tier performance. Because it is built on top of native fetch standards, it guarantees wide compatibility across various environments, allowing you to handle API communication reliably without the weight of massive traditional libraries.

---

## Installation

```bash
npm i ky
```

---

## Usage Example

Traditionally, using plain fetch() you will need to write like this :

```js
class HTTPError extends Error {}

const response = await fetch("https://example.com", {
  method: "POST",
  body: JSON.stringify({ foo: true }),
  headers: {
    "content-type": "application/json",
  },
});

if (!response.ok) {
  throw new HTTPError(`Fetch error: ${response.statusText}`);
}

const json = await response.json();

console.log(json);
```

But with Ky, it can be simplified into :

```js
import ky from "ky";

const json = await ky
  .post("https://example.com", { json: { foo: true } })
  .json();

console.log(json);
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@moefc32](https://github.com/moefc32)
