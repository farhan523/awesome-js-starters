# pino

> Super-fast, low-overhead JSON logger for Node.js — structured logs with transports, redaction, and child loggers.

**npm:** https://www.npmjs.com/package/pino
**GitHub:** https://github.com/pinojs/pino
**Docs:** https://getpino.io/

---

## The Problem

`console.log` produces unstructured output that's hard to search and filter in log aggregation tools. Most logging libraries serialize objects synchronously, adding latency to every request.

---

## What It Does

Pino serializes logs to JSON asynchronously via a worker thread, minimizing the impact on your hot path. Every log entry includes a timestamp, level, and any metadata you pass. Child loggers propagate context (like request ID) to all logs within a scope without repeating it.

---

## Installation

```bash
npm install pino pino-pretty
```

---

## Usage Example

```typescript
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL ?? 'info',
  redact: ['req.headers.authorization', 'user.password'],
});

// Child logger with request context
const reqLogger = logger.child({ requestId: 'abc-123', method: 'GET', path: '/users' });

reqLogger.info('Fetching users');
reqLogger.error({ err }, 'Database query failed');
```

---

## Screenshot / Demo

<!-- https://getpino.io/#/docs/benchmarks -->

---

## Submitted by

[@claude](https://github.com/claude)
