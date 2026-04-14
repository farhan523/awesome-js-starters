# zod

> TypeScript-first schema validation with static type inference — define your data shape once, get runtime validation and compile-time types for free.

**npm:** https://www.npmjs.com/package/zod  
**GitHub:** https://github.com/colinhacks/zod  
**Docs:** https://zod.dev

---

## The Problem

In TypeScript projects, you define types for your API responses and form inputs at compile time — but at runtime, the actual data coming from external sources (HTTP requests, form submissions, environment variables, localStorage) is untyped. You can't trust that an API actually returns what the TypeScript interface says it does. Validating this manually with `if` checks and type assertions is verbose, error-prone, and always ends up out of sync with your TypeScript types.

---

## What It Does

Zod lets you declare a schema once using a fluent builder API, then derive both the TypeScript type and the runtime validator from the same definition — they're always in sync. `z.parse()` throws detailed, structured errors if data doesn't match the schema. `z.safeParse()` returns a discriminated union instead of throwing, perfect for form validation. Schemas are composable: extend, merge, pick, omit, and transform them just like TypeScript utility types.

---

## Installation

```bash
npm install zod
```

---

## Usage Example

```ts
import { z } from 'zod';

// Define schema — becomes both runtime validator and TypeScript type
const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  email: z.string().email(),
  age: z.number().int().min(0).max(150).optional(),
  role: z.enum(['admin', 'user', 'moderator']),
  createdAt: z.string().datetime(),
});

// Infer the TypeScript type — no duplication
type User = z.infer<typeof UserSchema>;

// Validate API response at runtime
async function fetchUser(id: string): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  const raw = await res.json();

  // Throws ZodError with detailed messages if shape is wrong
  return UserSchema.parse(raw);
}

// Safe parse for form validation — no throw
function validateForm(formData: unknown) {
  const result = UserSchema.safeParse(formData);

  if (!result.success) {
    // Structured field-level errors
    const errors = result.error.flatten().fieldErrors;
    console.log(errors);
    // { email: ['Invalid email'], name: ['String must contain at least 1 character'] }
    return { success: false, errors };
  }

  return { success: true, data: result.data };
}

// Composable — extend existing schemas
const CreateUserSchema = UserSchema.omit({ id: true, createdAt: true });
type CreateUserInput = z.infer<typeof CreateUserSchema>;

// Validate environment variables at startup
const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'production', 'test']),
});

const env = EnvSchema.parse(process.env);
// env.PORT is typed as number, not string
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@anthropics](https://github.com/anthropics)
