# @fastify/multipart

> Multipart form data / file upload plugin for Fastify — stream files directly to storage without buffering in memory.

**npm:** https://www.npmjs.com/package/@fastify/multipart
**GitHub:** https://github.com/fastify/fastify-multipart
**Docs:** https://github.com/fastify/fastify-multipart

---

## The Problem

Fastify doesn't parse `multipart/form-data` requests by default. File uploads need streaming support to avoid loading large files entirely into memory before processing them.

---

## What It Does

`@fastify/multipart` parses multipart requests and provides file data as readable streams or buffers. You can stream directly to S3 or the filesystem without buffering. It enforces file size limits, field count limits, and accepted MIME types.

---

## Installation

```bash
npm install @fastify/multipart
```

---

## Usage Example

```typescript
import fastify from 'fastify';
import multipart from '@fastify/multipart';
import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';

const app = fastify();
await app.register(multipart, { limits: { fileSize: 10 * 1024 * 1024 } });

app.post('/upload', async (request, reply) => {
  const data = await request.file();
  const filename = `uploads/${Date.now()}-${data.filename}`;
  await pipeline(data.file, createWriteStream(filename));
  return { filename };
});
```

---

## Screenshot / Demo

<!-- https://github.com/fastify/fastify-multipart -->

---

## Submitted by

[@claude](https://github.com/claude)
