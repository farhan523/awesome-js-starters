# Drizzle ORM

> A tool that helps you talk to your database using JavaScript in a way that feels natural and stays very fast.

**npm:** https://www.npmjs.com/package/drizzle-orm  
**GitHub:** https://github.com/drizzle-team/drizzle-orm  
**Docs:** https://orm.drizzle.team/

---

## The Problem

Writing raw SQL queries directly within an application can be cumbersome and error-prone, yet many developers hesitate to use traditional ORMs because of the heavy abstraction layers that sacrifice execution speed. The challenge lies in finding a middle ground: a solution that avoids the complexity of manual string manipulation without introducing significant performance bloat. Furthermore, functionality alone isn't enough; maintaining a high-quality developer experience is essential to ensure that interacting with the database remains intuitive, predictable, and clean as the codebase grows.

---

## What It Does

Drizzle ORM solves these issues by providing a "headless" approach that offers the type safety of a modern tool without the performance tax of a traditional abstraction layer. It eliminates the need to write raw SQL by allowing you to define schemas and queries in standard JavaScript, yet it stays blazingly fast by remaining thin and lightweight. By prioritizing developer experience, Drizzle ensures that you get the convenience of a powerful query builder while keeping your application lean and your database interactions transparent and efficient.

---

## Installation

```bash
npm i drizzle-orm
```

---

## Usage Example

Initialize Drizzle, using SQLite for this example :

```js
// drizzle.js
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import path from "path";
import * as schema from "./schema";

const dbName = "database.db";
const dbPath = path.join(process.cwd(), dbName);
const client = new Database(dbPath);

export const db = drizzle(client, { schema });
```

Define your schema :

```js
// schema.js
import { sqliteTable, text, blob } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const Documentations = sqliteTable("Documentations", {
  id: text("id").primaryKey()
    .$defaultFn(() => sql`lower(hex(randomblob(16)))`),
  imageBlob: blob("image_blob").notNull(),
});
```

Do a query to get all data :

```js
import { db } from "./drizzle";
import { Documentations } from "./schema";

const result = await db
  .select({
    id: Documentations.id,
    imageBlob: Documentations.imageBlob,
  })
  .from(Documentations);
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@moefc32](https://github.com/moefc32)
