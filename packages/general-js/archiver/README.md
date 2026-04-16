# archiver

> Streaming interface for generating ZIP and TAR archives in Node.js — create compressed archives programmatically from files, directories, and buffers.

**npm:** https://www.npmjs.com/package/archiver
**GitHub:** https://github.com/archiverjs/node-archiver
**Docs:** https://www.archiverjs.com/

---

## The Problem

Creating ZIP or TAR archives in Node.js — for export features, backup utilities, or distributing generated files — requires streaming multiple sources into a compressed output without loading everything into memory.

---

## What It Does

Archiver creates a writable stream that accepts files, directories, and raw buffers. It compresses them into ZIP (with deflate) or TAR (with gzip) format and pipes the result to a file stream or HTTP response. Directory archiving handles recursive file trees automatically.

---

## Installation

```bash
npm install archiver
npm install -D @types/archiver
```

---

## Usage Example

```typescript
import archiver from 'archiver';
import { createWriteStream } from 'fs';

const output = createWriteStream('project-export.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => console.log(`Archive created: ${archive.pointer()} bytes`));
archive.on('error', (err) => { throw err; });

archive.pipe(output);

// Add individual files
archive.file('README.md', { name: 'README.md' });

// Add entire directory
archive.directory('src/', 'src');

// Add buffer as file
archive.append(Buffer.from('{"version": 1}'), { name: 'metadata.json' });

await archive.finalize();
```

---

## Screenshot / Demo

<!-- https://www.archiverjs.com/ -->

---

## Submitted by

[@claude](https://github.com/claude)
