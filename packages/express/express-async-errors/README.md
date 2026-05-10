# express-async-errors

> Simplify Express error handling by automatically passing thrown errors to `next()`.

**npm:** https://www.npmjs.com/package/express-async-errors
**GitHub:** https://github.com/davidbanham/express-async-errors
**Docs:** https://github.com/davidbanham/express-async-errors#readme

---

## The Problem

In Express, `async` route handlers and middleware must manually catch and forward errors to `next()`. Without this, thrown exceptions are silently lost or crash the app instead of hitting the error handler.

---

## What It Does

`express-async-errors` monkey-patches Express so thrown or rejected promises in async functions automatically propagate to your error-handling middleware, eliminating boilerplate `try/catch` blocks in every route.

---

## Installation

```bash
npm install express-async-errors
```

---

## Usage Example

```js
import "express-async-errors";
import express from "express";

const app = express();

app.get("/", async (req, res) => {
  throw new Error("Something went wrong");
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(3000);
```

---

## Submitted by

@awaisoem
