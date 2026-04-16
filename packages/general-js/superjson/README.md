# superjson

> JSON superset that serializes JavaScript's full type system — safely transport Dates, Maps, Sets, BigInts, and undefined over the wire.

**npm:** https://www.npmjs.com/package/superjson
**GitHub:** https://github.com/blitz-js/superjson
**Docs:** https://github.com/blitz-js/superjson

---

## The Problem

`JSON.stringify` loses `Date` objects (converts to strings), drops `undefined` values, and can't handle `Map`, `Set`, `RegExp`, or `BigInt`. Deserializing API responses requires manual date reconstruction throughout your codebase.

---

## What It Does

SuperJSON serializes any JavaScript value to a JSON-compatible format that includes type metadata. `superjson.parse()` reconstructs the original types exactly — a `Date` comes back as a `Date`, a `Map` as a `Map`. Used by tRPC and Blitz.js as the default serialization layer.

---

## Installation

```bash
npm install superjson
```

---

## Usage Example

```typescript
import superjson from 'superjson';

const data = {
  createdAt: new Date('2025-01-15'),
  tags: new Set(['react', 'typescript']),
  meta: new Map([['version', 2]]),
  count: BigInt(9007199254740993),
};

const json = superjson.stringify(data);
// '{"json":{"createdAt":"2025-01-15T00:00:00.000Z",...},"meta":{"values":{"createdAt":["Date"],...}}}'

const restored = superjson.parse<typeof data>(json);
restored.createdAt instanceof Date; // true
restored.tags instanceof Set;       // true
```

---

## Screenshot / Demo

<!-- https://github.com/blitz-js/superjson -->

---

## Submitted by

[@claude](https://github.com/claude)
