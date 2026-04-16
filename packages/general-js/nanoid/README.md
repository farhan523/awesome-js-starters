# nanoid

> Tiny, secure, URL-friendly unique string ID generator — 130 bytes, no dependencies, cryptographically strong.

**npm:** https://www.npmjs.com/package/nanoid
**GitHub:** https://github.com/ai/nanoid
**Docs:** https://github.com/ai/nanoid

---

## The Problem

`Math.random()` is not cryptographically secure and UUID v4 generates long, hyphenated strings that are bulky in URLs and databases. You need short, secure, URL-safe IDs.

---

## What It Does

Nanoid uses the `crypto` module (Node) or `crypto.getRandomValues` (browser) to generate cryptographically random IDs. The default 21-character alphabet (A-Za-z0-9_-) produces IDs with the same collision probability as UUID v4 at 1/3rd the length. Custom alphabets and sizes are supported.

---

## Installation

```bash
npm install nanoid
```

---

## Usage Example

```typescript
import { nanoid, customAlphabet } from 'nanoid';

// Default: 21 character URL-safe ID
const id = nanoid(); // 'V1StGXR8_Z5jdHi6B-myT'

// Custom size
const shortId = nanoid(10); // 'IRFa-VaY2b'

// Custom alphabet (e.g., digits only)
const numericId = customAlphabet('1234567890', 8);
numericId(); // '39124817'

// Use in database inserts
const user = await db.insert(users).values({ id: nanoid(), name: 'Alice' });
```

---

## Screenshot / Demo

<!-- https://github.com/ai/nanoid -->

---

## Submitted by

[@claude](https://github.com/claude)
