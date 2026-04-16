# jsonwebtoken

> JWT implementation for Node.js — sign, verify, and decode JSON Web Tokens for stateless authentication.

**npm:** https://www.npmjs.com/package/jsonwebtoken
**GitHub:** https://github.com/auth0/node-jsonwebtoken
**Docs:** https://github.com/auth0/node-jsonwebtoken

---

## The Problem

Stateless authentication requires creating tokens that encode user identity and can be cryptographically verified without a database lookup. Implementing JWT signing, expiry, and verification correctly from scratch is error-prone.

---

## What It Does

`jsonwebtoken` signs payloads with HMAC or RSA, verifies tokens and returns the decoded payload (or throws if invalid/expired), and decodes tokens without verification for inspecting headers. It supports all standard JWT algorithms and claim verification (exp, iss, aud).

---

## Installation

```bash
npm install jsonwebtoken
npm install -D @types/jsonwebtoken
```

---

## Usage Example

```typescript
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET!;

// Sign a token (e.g., at login)
const token = jwt.sign(
  { userId: user.id, role: user.role },
  SECRET,
  { expiresIn: '7d' }
);

// Verify a token (e.g., in middleware)
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const payload = jwt.verify(token, SECRET) as { userId: string };
    req.userId = payload.userId;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}
```

---

## Screenshot / Demo

<!-- https://jwt.io/ -->

---

## Submitted by

[@claude](https://github.com/claude)
