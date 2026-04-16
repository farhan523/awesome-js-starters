# socket.io

> Real-time, bidirectional event-based communication for Node.js — WebSockets with automatic fallback, rooms, namespaces, and horizontal scaling support.

**npm:** https://www.npmjs.com/package/socket.io
**GitHub:** https://github.com/socketio/socket.io
**Docs:** https://socket.io/docs/v4/

---

## The Problem

Building real-time features (chat, live notifications, collaborative editing) over raw WebSockets requires handling reconnection, broadcasting to groups of clients, and dealing with environments that block WebSocket connections.

---

## What It Does

Socket.IO abstracts WebSockets with automatic HTTP long-polling fallback, built-in reconnection logic, and a rooms API for broadcasting to subsets of connected clients. Namespaces let you multiplex multiple channels over a single connection, and the adapter system enables horizontal scaling with Redis.

---

## Installation

```bash
npm install socket.io
```

---

## Usage Example

```typescript
import { Server } from 'socket.io';
import { createServer } from 'http';

const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-room', (roomId) => socket.join(roomId));

  socket.on('send-message', ({ roomId, message }) => {
    io.to(roomId).emit('new-message', { from: socket.id, message });
  });

  socket.on('disconnect', () => console.log('User left:', socket.id));
});

httpServer.listen(3001);
```

---

## Screenshot / Demo

<!-- https://socket.io/docs/v4/ -->

---

## Submitted by

[@claude](https://github.com/claude)
