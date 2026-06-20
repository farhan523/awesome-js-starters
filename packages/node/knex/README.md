# knex

> A batteries-included SQL query and schema builder for PostgreSQL, MySQL, SQLite, MSSQL, and more.

**npm:** https://www.npmjs.com/package/knex
**GitHub:** https://github.com/knex/knex
**Docs:** https://knexjs.org

---

## The Problem

Writing raw SQL strings across multiple database engines is fragile and non-portable, while a full ORM is often heavier than you want when you just need composable, safe queries and migrations.

---

## What It Does

`knex` provides a fluent, chainable query builder that compiles to SQL for many engines, plus a migration and seeding system. It is a middle ground between raw SQL and a full ORM, and underpins tools like Objection.js.

---

## Installation

```bash
npm install knex pg
```

---

## Usage Example

```js
import knexFactory from "knex";

const knex = knexFactory({
  client: "pg",
  connection: process.env.DATABASE_URL,
});

const activeUsers = await knex("users")
  .select("id", "email")
  .where("active", true)
  .orderBy("created_at", "desc")
  .limit(10);

console.log(activeUsers);
```

---

## Submitted by

[@claude](https://github.com/claude)
