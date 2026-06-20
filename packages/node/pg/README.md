# pg

> Non-blocking PostgreSQL client for Node.js — pure JavaScript with optional native bindings.

**npm:** https://www.npmjs.com/package/pg
**GitHub:** https://github.com/brianc/node-postgres
**Docs:** https://node-postgres.com

---

## The Problem

Talking to PostgreSQL from Node without an ORM means you still need reliable connection pooling, parameterized queries to prevent SQL injection, and proper handling of types and async results.

---

## What It Does

`pg` (node-postgres) offers a clean client and connection pool, parameterized queries, cursors, and streaming. It is the de facto low-level PostgreSQL driver that most Node ORMs and query builders sit on top of.

---

## Installation

```bash
npm install pg
```

---

## Usage Example

```js
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const { rows } = await pool.query(
  "SELECT id, email FROM users WHERE active = $1",
  [true]
);

console.log(rows);
```

---

## Submitted by

[@claude](https://github.com/claude)
