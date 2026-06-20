# body-parser

> Node.js body parsing middleware — populate `req.body` from JSON, urlencoded, text, and raw payloads.

**npm:** https://www.npmjs.com/package/body-parser
**GitHub:** https://github.com/expressjs/body-parser
**Docs:** https://github.com/expressjs/body-parser#readme

---

## The Problem

Incoming HTTP request bodies arrive as raw streams. Reading, buffering, and parsing them into usable objects — while enforcing size limits and content types — is repetitive boilerplate in every Express handler.

---

## What It Does

`body-parser` provides middleware that parses request bodies before your handlers run, exposing the result on `req.body`. It supports JSON, URL-encoded, raw, and text parsers with configurable limits, and is maintained by the Express team.

---

## Installation

```bash
npm install body-parser
```

---

## Usage Example

```js
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json({ limit: "1mb" }));

app.post("/users", (req, res) => {
  res.json({ received: req.body });
});

app.listen(3000);
```

---

## Submitted by

[@claude](https://github.com/claude)
