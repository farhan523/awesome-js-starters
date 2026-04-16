# destr

> Safe, fast alternative to JSON.parse — handles prototype pollution, JSON syntax errors, and common edge cases gracefully.

**npm:** https://www.npmjs.com/package/destr
**GitHub:** https://github.com/unjs/destr
**Docs:** https://github.com/unjs/destr

---

## The Problem

`JSON.parse` throws on invalid input, making you wrap every call in try/catch. It's also vulnerable to prototype pollution via `__proto__` keys in malicious input, and doesn't handle non-string inputs gracefully.

---

## What It Does

`destr` parses JSON safely — it returns the input as-is if it's not a string, returns `undefined` on parse errors instead of throwing, and strips `__proto__`, `constructor`, and `prototype` keys to prevent prototype pollution. It's a drop-in `JSON.parse` replacement for user-supplied or untrusted data.

---

## Installation

```bash
npm install destr
```

---

## Usage Example

```typescript
import { destr, safeDestr } from 'destr';

// Safe parsing — no try/catch needed
destr('{"name": "Alice"}');   // { name: 'Alice' }
destr('invalid json');        // 'invalid json' (returns as-is)
destr(undefined);             // undefined
destr(42);                    // 42

// Prototype pollution prevention
destr('{"__proto__": {"admin": true}}'); // {} (strips __proto__)

// Strict mode — throws on invalid JSON
safeDestr('not json'); // throws SyntaxError
```

---

## Screenshot / Demo

<!-- https://github.com/unjs/destr -->

---

## Submitted by

[@claude](https://github.com/claude)
