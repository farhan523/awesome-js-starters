# exceljs

> Read, write, and manipulate Excel workbooks in Node.js — full support for formulas, styles, charts, and streaming large datasets.

**npm:** https://www.npmjs.com/package/exceljs
**GitHub:** https://github.com/exceljs/exceljs
**Docs:** https://github.com/exceljs/exceljs

---

## The Problem

Generating Excel reports in Node.js requires producing `.xlsx` files with proper formatting, column widths, cell styles, and formulas — not just raw CSV. Reading user-uploaded Excel files needs to handle merged cells, multiple sheets, and data types.

---

## What It Does

ExcelJS creates and reads `.xlsx` files with full formatting support: fonts, colors, borders, alignment, merged cells, formulas, conditional formatting, and images. A streaming writer handles workbooks with hundreds of thousands of rows without memory exhaustion.

---

## Installation

```bash
npm install exceljs
```

---

## Usage Example

```typescript
import ExcelJS from 'exceljs';

const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Sales Report');

sheet.columns = [
  { header: 'Product', key: 'product', width: 25 },
  { header: 'Revenue', key: 'revenue', width: 15 },
];

sheet.addRow({ product: 'Widget A', revenue: 15000 });
sheet.addRow({ product: 'Widget B', revenue: 23500 });

// Style header row
sheet.getRow(1).font = { bold: true, size: 12 };
sheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4472C4' } };

await workbook.xlsx.writeFile('report.xlsx');
```

---

## Screenshot / Demo

<!-- https://github.com/exceljs/exceljs -->

---

## Submitted by

[@claude](https://github.com/claude)
