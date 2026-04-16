# pdf-lib

> Create and modify PDF documents in JavaScript — works in Node.js, browsers, React Native, and Deno without any native dependencies.

**npm:** https://www.npmjs.com/package/pdf-lib
**GitHub:** https://github.com/Hopding/pdf-lib
**Docs:** https://pdf-lib.js.org/

---

## The Problem

Generating PDFs server-side traditionally requires headless Chrome (heavy) or server-only libraries. Client-side PDF creation (for download without a server round-trip) requires a pure JavaScript implementation.

---

## What It Does

pdf-lib creates PDFs from scratch or modifies existing ones: embed custom fonts, draw text/images/shapes, fill form fields, merge documents, add pages, and set metadata. It runs in every JavaScript environment since it has zero native dependencies.

---

## Installation

```bash
npm install pdf-lib
```

---

## Usage Example

```typescript
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const pdfDoc = await PDFDocument.create();
const page = pdfDoc.addPage([595, 842]); // A4
const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

page.drawText('Invoice #1234', {
  x: 50, y: 780,
  size: 24,
  font,
  color: rgb(0, 0, 0),
});

page.drawLine({ start: { x: 50, y: 760 }, end: { x: 545, y: 760 }, thickness: 1 });

const pdfBytes = await pdfDoc.save();
// In Node.js:
await fs.writeFile('invoice.pdf', pdfBytes);
// In browser:
const blob = new Blob([pdfBytes], { type: 'application/pdf' });
```

---

## Screenshot / Demo

<!-- https://pdf-lib.js.org/ -->

---

## Submitted by

[@claude](https://github.com/claude)
