# @fastify/cookie

> Plugin for Fastify that adds support for reading and setting cookies, including signed cookies.

**npm:** https://www.npmjs.com/package/@fastify/cookie
**GitHub:** https://github.com/fastify/fastify-cookie
**Docs:** https://github.com/fastify/fastify-cookie#readme

---

## The Problem

Fastify does not parse cookies out of the box, so reading session identifiers or preferences from `Cookie` headers and setting `Set-Cookie` responses requires manual header handling on every route.

---

## What It Does

`@fastify/cookie` decorates requests with parsed cookies and replies with a `setCookie`/`clearCookie` API, and supports signed cookies for tamper detection. It integrates with Fastify's plugin and hook system.

---

## Installation

```bash
npm install @fastify/cookie
```

---

## Usage Example

```js
import Fastify from "fastify";
import cookie from "@fastify/cookie";

const app = Fastify();
app.register(cookie, { secret: process.env.COOKIE_SECRET });

app.get("/", (req, reply) => {
  const visits = Number(req.cookies.visits ?? 0) + 1;
  reply.setCookie("visits", String(visits), { path: "/" });
  reply.send({ visits });
});

app.listen({ port: 3000 });
```

---

## Submitted by

[@claude](https://github.com/claude)
