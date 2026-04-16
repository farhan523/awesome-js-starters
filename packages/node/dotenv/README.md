# dotenv

> Load environment variables from a `.env` file into `process.env` — the standard way to manage configuration in Node.js apps.

**npm:** https://www.npmjs.com/package/dotenv
**GitHub:** https://github.com/motdotla/dotenv
**Docs:** https://github.com/motdotla/dotenv

---

## The Problem

Hardcoding secrets (API keys, database URLs) in source code is a security risk. Managing different configurations for development, staging, and production environments requires a consistent, portable approach.

---

## What It Does

`dotenv` reads a `.env` file in your project root and merges its `KEY=VALUE` pairs into `process.env`. It's a zero-dependency, 12-factor app pattern that separates config from code. The `.env` file stays out of version control while `.env.example` documents required variables.

---

## Installation

```bash
npm install dotenv
```

---

## Usage Example

```bash
# .env
DATABASE_URL=postgresql://localhost:5432/myapp
JWT_SECRET=super-secret-key-here
STRIPE_KEY=sk_test_...
```

```typescript
// Must be the first import in your entry file
import 'dotenv/config';

// Or explicitly:
import dotenv from 'dotenv';
dotenv.config();

// Now access as normal
const db = new Database(process.env.DATABASE_URL!);
```

---

## Screenshot / Demo

<!-- https://github.com/motdotla/dotenv -->

---

## Submitted by

[@claude](https://github.com/claude)
