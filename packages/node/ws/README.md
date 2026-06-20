# ws

> Simple to use, blazing fast, and thoroughly tested WebSocket client and server for Node.js.

**npm:** https://www.npmjs.com/package/ws
**GitHub:** https://github.com/websockets/ws
**Docs:** https://github.com/websockets/ws#readme

---

## The Problem

Node.js has no built-in WebSocket server, and implementing the protocol handshake, framing, and ping/pong keep-alive correctly by hand is impractical for real-time features like chat or live updates.

---

## What It Does

`ws` provides a minimal, standards-compliant WebSocket implementation for both client and server, with a tiny API and excellent performance. Many higher-level real-time libraries are built on top of it.

---

## Installation

```bash
npm install ws
```

---

## Usage Example

```js
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  socket.on("message", (data) => {
    socket.send(`echo: ${data}`);
  });
  socket.send("connected");
});
```

---

## Submitted by

[@claude](https://github.com/claude)
