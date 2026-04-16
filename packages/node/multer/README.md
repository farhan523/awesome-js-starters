# multer

> Node.js middleware for handling multipart/form-data — the standard solution for file uploads in Express and Fastify apps.

**npm:** https://www.npmjs.com/package/multer
**GitHub:** https://github.com/expressjs/multer
**Docs:** https://github.com/expressjs/multer

---

## The Problem

HTTP file uploads arrive as multipart/form-data, a binary encoding that requires parsing outside the standard `express.json()` middleware. Handling file size limits, type validation, and disk vs. memory storage adds significant complexity.

---

## What It Does

Multer parses multipart requests and provides uploaded files on `req.file` (single) or `req.files` (multiple). Storage engines let you save to disk with configurable naming or keep files in memory. File filter callbacks reject uploads that don't match your type or size requirements.

---

## Installation

```bash
npm install multer
npm install -D @types/multer
```

---

## Usage Example

```typescript
import multer from 'multer';
import express from 'express';

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: (req, file, cb) => {
    cb(null, file.mimetype.startsWith('image/'));
  },
});

const app = express();

app.post('/avatar', upload.single('avatar'), (req, res) => {
  console.log(req.file); // { fieldname, originalname, size, path, ... }
  res.json({ path: req.file?.path });
});
```

---

## Screenshot / Demo

<!-- https://github.com/expressjs/multer -->

---

## Submitted by

[@claude](https://github.com/claude)
