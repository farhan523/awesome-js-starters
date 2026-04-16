# morgan

> HTTP request logger middleware for Express — log incoming requests with timing, status codes, and response sizes.

**npm:** https://www.npmjs.com/package/morgan
**GitHub:** https://github.com/expressjs/morgan
**Docs:** https://github.com/expressjs/morgan

---

## The Problem

Debugging Express APIs without request logs means flying blind — you can't see which routes are being hit, how long they take, or which requests are returning errors without adding console.log to every handler.

---

## What It Does

Morgan logs HTTP requests in configurable formats. The built-in `'dev'` format shows method, URL, status, response time, and size in a color-coded one-liner. The `'combined'` format matches Apache's production log format for ingestion by log aggregators. Custom tokens let you log any request/response property.

---

## Installation

```bash
npm install morgan
npm install -D @types/morgan
```

---

## Usage Example

```typescript
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

const app = express();

// Colorized development logging
app.use(morgan('dev'));

// Production: write to rotating log file
const accessLog = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLog }));

// Custom format with request ID
morgan.token('id', (req: any) => req.id);
app.use(morgan(':id :method :url :status :response-time ms'));
```

---

## Screenshot / Demo

<!-- https://github.com/expressjs/morgan -->

---

## Submitted by

[@claude](https://github.com/claude)
