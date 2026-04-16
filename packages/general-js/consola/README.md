# consola

> Elegant console logger for JavaScript and Node.js — beautiful formatting, log levels, reporters, and minimal bundle size.

**npm:** https://www.npmjs.com/package/consola
**GitHub:** https://github.com/unjs/consola
**Docs:** https://github.com/unjs/consola

---

## The Problem

`console.log` provides no log levels, no structured output, and no way to suppress debug messages in production. Custom loggers need consistent formatting across development (pretty) and production (JSON) environments.

---

## What It Does

Consola provides tagged log methods (`info`, `success`, `warn`, `error`, `debug`, `trace`), colorized terminal output with icons, and configurable reporters. In CI/testing, it detects the environment and switches formats. A `mockConsola` utility captures output in tests without polluting stdout.

---

## Installation

```bash
npm install consola
```

---

## Usage Example

```typescript
import { consola, createConsola } from 'consola';

// Use the default instance
consola.info('Server starting...');
consola.success('Connected to database');
consola.warn('API rate limit approaching');
consola.error('Payment failed', { orderId: '123', reason: 'card_declined' });

// Scoped logger for a module
const logger = createConsola().withTag('auth');
logger.debug('Verifying token');  // [auth] Verifying token

// Set log level (suppress debug in production)
consola.level = process.env.NODE_ENV === 'production' ? 3 : 5;
```

---

## Screenshot / Demo

<!-- https://github.com/unjs/consola -->

---

## Submitted by

[@claude](https://github.com/claude)
