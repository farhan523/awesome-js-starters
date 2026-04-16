# prisma

> Next-generation ORM for Node.js and TypeScript — auto-generated, type-safe query client with migrations, schema-first design, and multi-database support.

**npm:** https://www.npmjs.com/package/prisma
**GitHub:** https://github.com/prisma/prisma
**Docs:** https://www.prisma.io/docs/

---

## The Problem

Raw SQL is error-prone and doesn't provide TypeScript types. Traditional ORMs like Sequelize generate JS-only models and require verbose configuration. Writing migration files by hand is tedious and fragile.

---

## What It Does

Prisma generates a fully type-safe client from your `schema.prisma` file. Every query result is typed to match your schema exactly. The CLI auto-generates and runs migrations, `prisma studio` provides a visual database browser, and the query engine runs in a separate Rust binary for maximum performance.

---

## Installation

```bash
npm install prisma @prisma/client
npx prisma init
```

---

## Usage Example

```typescript
// schema.prisma
// model User { id Int @id @default(autoincrement()); email String @unique; name String? }

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: { email: 'alice@example.com', name: 'Alice' },
  });

  const users = await prisma.user.findMany({
    where: { name: { not: null } },
    orderBy: { email: 'asc' },
  });
}
```

---

## Screenshot / Demo

<!-- https://www.prisma.io/docs/getting-started -->

---

## Submitted by

[@claude](https://github.com/claude)
