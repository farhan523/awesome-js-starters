# uuid

> RFC4122 UUID generation for JavaScript — create v1, v3, v4, v5, and v7 UUIDs for entity identification and distributed systems.

**npm:** https://www.npmjs.com/package/uuid
**GitHub:** https://github.com/uuidjs/uuid
**Docs:** https://github.com/uuidjs/uuid

---

## The Problem

Generating universally unique identifiers for database records, distributed events, and API resources requires RFC4122 compliance. Rolling your own UUID implementation risks subtle entropy or formatting bugs.

---

## What It Does

The `uuid` package generates all major UUID versions: v4 (random, most common), v7 (time-ordered for database index performance), v1 (time-based), v3/v5 (namespace-based, deterministic). All output is formatted as the canonical `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` string.

---

## Installation

```bash
npm install uuid
```

---

## Usage Example

```typescript
import { v4 as uuidv4, v7 as uuidv7, validate, version } from 'uuid';

// Random UUID (most common)
const id = uuidv4(); // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// Time-ordered UUID (better for database indexes)
const orderedId = uuidv7(); // '018e3c1a-7f2a-7a8b-8b2c-4b5d6e7f8a9b'

// Validate
validate('not-a-uuid'); // false
validate(id);            // true

version(id);             // 4
```

---

## Screenshot / Demo

<!-- https://github.com/uuidjs/uuid -->

---

## Submitted by

[@claude](https://github.com/claude)
