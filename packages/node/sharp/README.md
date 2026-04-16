# sharp

> High-performance Node.js image processing — resize, convert, compress, and transform images using libvips at native speed.

**npm:** https://www.npmjs.com/package/sharp
**GitHub:** https://github.com/lovell/sharp
**Docs:** https://sharp.pixelplumbing.com/

---

## The Problem

Processing uploaded images in Node.js (resizing avatars, generating thumbnails, converting formats) with pure JavaScript is slow and memory-intensive. Streams of large image files block the event loop.

---

## What It Does

Sharp wraps libvips, a C image processing library, exposing a chainable API. It processes images via streams without loading the entire file into memory, supports JPEG, PNG, WebP, AVIF, GIF, TIFF, and SVG, and outperforms most alternatives by 4–5x in benchmarks.

---

## Installation

```bash
npm install sharp
npm install -D @types/sharp
```

---

## Usage Example

```typescript
import sharp from 'sharp';

// Resize and convert an uploaded image
await sharp(req.file.buffer)
  .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(`uploads/${userId}-avatar.webp`);

// Generate thumbnail
const thumbnail = await sharp(inputPath)
  .resize(200, 200, { fit: 'cover' })
  .jpeg({ quality: 70 })
  .toBuffer();
```

---

## Screenshot / Demo

<!-- https://sharp.pixelplumbing.com/ -->

---

## Submitted by

[@claude](https://github.com/claude)
