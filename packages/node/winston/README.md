# winston

> Versatile, multi-transport logging library for Node.js — log to console, files, databases, and external services simultaneously.

**npm:** https://www.npmjs.com/package/winston
**GitHub:** https://github.com/winstonjs/winston
**Docs:** https://github.com/winstonjs/winston

---

## The Problem

Production applications need logs sent to multiple destinations — console during development, files in staging, and a service like Datadog or Loggly in production — with different formats and log levels per destination.

---

## What It Does

Winston lets you configure multiple transports (Console, File, HTTP, Stream) on a single logger. Each transport can have its own log level, format, and error handling. Custom formats using `winston.format.combine()` let you add timestamps, colorize output, or serialize to JSON.

---

## Installation

```bash
npm install winston
```

---

## Usage Example

```typescript
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({ format: winston.format.colorize({ all: true }) }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

logger.info('Server started', { port: 3000 });
logger.error('Unhandled exception', { err: error.message });
```

---

## Screenshot / Demo

<!-- https://github.com/winstonjs/winston -->

---

## Submitted by

[@claude](https://github.com/claude)
