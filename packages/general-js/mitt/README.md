# mitt

> Tiny functional event emitter for JavaScript — 200 bytes, zero dependencies, and works everywhere.

**npm:** https://www.npmjs.com/package/mitt
**GitHub:** https://github.com/developit/mitt
**Docs:** https://github.com/developit/mitt

---

## The Problem

Node's `EventEmitter` is Node-only. Browser-native `EventTarget` is verbose. Building a simple publish-subscribe bus for cross-component communication or module decoupling shouldn't require a heavy library.

---

## What It Does

Mitt provides `on`, `off`, and `emit` methods in 200 bytes. It's typed with generics so TypeScript knows which events exist and what their payload types are. Works in browsers, Node.js, Deno, and Web Workers without any polyfills.

---

## Installation

```bash
npm install mitt
```

---

## Usage Example

```typescript
import mitt from 'mitt';

type Events = {
  'user:login': { userId: string; email: string };
  'cart:update': { itemCount: number };
  resize: undefined;
};

const emitter = mitt<Events>();

// Listen
emitter.on('user:login', ({ userId, email }) => {
  console.log(`User ${email} logged in`);
});

// Emit
emitter.emit('user:login', { userId: '123', email: 'alice@example.com' });

// Unsubscribe
const handler = () => {};
emitter.on('resize', handler);
emitter.off('resize', handler);
```

---

## Screenshot / Demo

<!-- https://github.com/developit/mitt -->

---

## Submitted by

[@claude](https://github.com/claude)
