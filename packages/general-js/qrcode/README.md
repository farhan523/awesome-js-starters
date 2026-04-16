# qrcode

> QR code generator for Node.js and the browser — generate QR codes as PNG images, SVGs, or terminal ASCII art.

**npm:** https://www.npmjs.com/package/qrcode
**GitHub:** https://github.com/soldair/node-qrcode
**Docs:** https://github.com/soldair/node-qrcode

---

## The Problem

Adding QR code generation to a web app for URLs, payment links, or 2FA setup codes requires either an external service (with privacy/availability concerns) or a reliable client-side/server-side library.

---

## What It Does

`qrcode` generates QR codes in multiple formats: PNG buffer/file, SVG string, canvas element (browser), or terminal ASCII art. It handles error correction levels, margin, color, and scale settings. Works identically in Node.js and the browser via its UMD build.

---

## Installation

```bash
npm install qrcode
npm install -D @types/qrcode
```

---

## Usage Example

```typescript
import QRCode from 'qrcode';

// Generate a PNG data URL (for use in <img> src)
const dataUrl = await QRCode.toDataURL('https://myapp.com/invite/abc123', {
  errorCorrectionLevel: 'H',
  margin: 2,
  color: { dark: '#000000', light: '#ffffff' },
});

// Generate SVG string
const svg = await QRCode.toString('https://myapp.com', { type: 'svg' });

// Save as PNG file
await QRCode.toFile('qr.png', 'https://myapp.com', { width: 300 });
```

---

## Screenshot / Demo

<!-- https://github.com/soldair/node-qrcode -->

---

## Submitted by

[@claude](https://github.com/claude)
