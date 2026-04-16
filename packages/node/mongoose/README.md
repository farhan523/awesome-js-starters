# mongoose

> Elegant MongoDB object modeling for Node.js — schemas, validation, middleware, and population for working with MongoDB.

**npm:** https://www.npmjs.com/package/mongoose
**GitHub:** https://github.com/Automattic/mongoose
**Docs:** https://mongoosejs.com/docs/

---

## The Problem

MongoDB's schemaless nature is flexible but leads to inconsistent documents and no validation layer. Using the raw `mongodb` driver means writing all query building, casting, and validation yourself.

---

## What It Does

Mongoose defines schemas that describe document shape and enforce types, defaults, and validation rules. Models provide a rich query API with chainable methods, and middleware hooks let you run code before/after save, delete, and find operations. Population replaces ObjectId references with full documents automatically.

---

## Installation

```bash
npm install mongoose
```

---

## Usage Example

```typescript
import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  name: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model<IUser>('User', UserSchema);

await mongoose.connect(process.env.MONGODB_URI!);
const user = await User.create({ email: 'alice@example.com', name: 'Alice' });
const found = await User.findOne({ email: 'alice@example.com' });
```

---

## Screenshot / Demo

<!-- https://mongoosejs.com/docs/guide.html -->

---

## Submitted by

[@claude](https://github.com/claude)
