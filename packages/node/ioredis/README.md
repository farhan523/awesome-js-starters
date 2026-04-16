# ioredis

> Robust, full-featured Redis client for Node.js — Cluster, Sentinel, pipelining, Lua scripting, and Streams support.

**npm:** https://www.npmjs.com/package/ioredis
**GitHub:** https://github.com/redis/ioredis
**Docs:** https://github.com/redis/ioredis

---

## The Problem

The basic `redis` npm package lacks built-in support for Redis Cluster, Sentinel failover, automatic reconnection, and command pipelining — all critical features for production deployments.

---

## What It Does

ioredis handles Redis Cluster topology automatically, reconnects on failure with exponential backoff, supports pipelining and transactions for batching commands, and provides first-class TypeScript types for all commands. It also supports Redis Streams for event sourcing patterns.

---

## Installation

```bash
npm install ioredis
```

---

## Usage Example

```typescript
import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: 6379,
  retryStrategy: (times) => Math.min(times * 50, 2000),
});

// Simple operations
await redis.set('session:123', JSON.stringify({ userId: 456 }), 'EX', 3600);
const session = await redis.get('session:123');

// Pipelining
const pipeline = redis.pipeline();
pipeline.set('key1', 'val1');
pipeline.get('key2');
const results = await pipeline.exec();
```

---

## Screenshot / Demo

<!-- https://github.com/redis/ioredis -->

---

## Submitted by

[@claude](https://github.com/claude)
