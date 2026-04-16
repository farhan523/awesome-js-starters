# papaparse

> Fast, powerful CSV parser for JavaScript — handles large files via streaming, auto-detects delimiters, and works in browsers and Node.js.

**npm:** https://www.npmjs.com/package/papaparse
**GitHub:** https://github.com/mholt/PapaParse
**Docs:** https://www.papaparse.com/docs

---

## The Problem

Parsing CSV files correctly requires handling quoted fields with commas, escaped quotes, multiline fields, different delimiters, and inconsistent line endings. Naive string splitting breaks on the first edge case.

---

## What It Does

PapaParse handles all CSV edge cases correctly, auto-detects delimiters, casts numbers and booleans, and maps headers to object keys. For large files, streaming mode processes rows without loading the entire file into memory. It also converts arrays/objects back to CSV strings.

---

## Installation

```bash
npm install papaparse
npm install -D @types/papaparse
```

---

## Usage Example

```typescript
import Papa from 'papaparse';
import { createReadStream } from 'fs';

// Parse a CSV string
const { data } = Papa.parse<{ name: string; age: string }>(csvString, {
  header: true,
  skipEmptyLines: true,
  dynamicTyping: true, // auto-cast numbers/booleans
});

// Stream a large file
Papa.parse(createReadStream('large.csv'), {
  header: true,
  step: (row) => processRow(row.data),
  complete: () => console.log('Done'),
});

// Convert objects to CSV
const csv = Papa.unparse([{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]);
```

---

## Screenshot / Demo

<!-- https://www.papaparse.com/ -->

---

## Submitted by

[@claude](https://github.com/claude)
