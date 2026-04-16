# bcryptjs

> Pure JavaScript bcrypt password hashing — no native dependencies, same API as bcrypt, works anywhere Node.js runs.

**npm:** https://www.npmjs.com/package/bcryptjs
**GitHub:** https://github.com/dcodeIO/bcrypt.js
**Docs:** https://github.com/dcodeIO/bcrypt.js

---

## The Problem

Storing passwords in plain text or with weak hashes (MD5, SHA-1) is a critical security vulnerability. bcrypt's built-in salt and cost factor make brute-force attacks computationally expensive.

---

## What It Does

`bcryptjs` hashes passwords with bcrypt's adaptive algorithm — the cost factor controls how slow the hash is, making it future-proof as hardware improves. `compare` safely verifies passwords against stored hashes without timing attack vulnerabilities. No native modules means it works in serverless environments.

---

## Installation

```bash
npm install bcryptjs
npm install -D @types/bcryptjs
```

---

## Usage Example

```typescript
import bcrypt from 'bcryptjs';

// Hash a password before storing
async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}

// Verify a password at login
async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Usage
const hash = await hashPassword('mySecurePassword');
const isValid = await verifyPassword('mySecurePassword', hash); // true
```

---

## Screenshot / Demo

<!-- https://github.com/dcodeIO/bcrypt.js -->

---

## Submitted by

[@claude](https://github.com/claude)
