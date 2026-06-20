# @fastify/websocket

> WebSocket support for Fastify, built on the `ws` library and integrated with Fastify routing.

**npm:** https://www.npmjs.com/package/@fastify/websocket
**GitHub:** https://github.com/fastify/fastify-websocket
**Docs:** https://github.com/fastify/fastify-websocket#readme

---

## The Problem

Adding real-time WebSocket endpoints to a Fastify server usually means running a separate `ws` server alongside it, which complicates routing, lifecycle, and access to Fastify's hooks and decorators.

---

## What It Does

`@fastify/websocket` lets you declare WebSocket routes directly in Fastify with the familiar route API, sharing the same server, hooks, and plugins. Each connection is handled through a standard `ws` socket.

---

## Installation

```bash
npm install @fastify/websocket
```

---

## Usage Example

```js
import Fastify from "fastify";
import websocket from "@fastify/websocket";

const app = Fastify();
await app.register(websocket);

app.get("/chat", { websocket: true }, (socket) => {
  socket.on("message", (message) => {
    socket.send(`echo: ${message}`);
  });
});

app.listen({ port: 3000 });
```

---

## Submitted by

[@claude](https://github.com/claude)
