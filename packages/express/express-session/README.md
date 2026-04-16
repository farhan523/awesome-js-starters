# express-session

> Session middleware for Express — server-side sessions with configurable storage backends and cookie options.

**npm:** https://www.npmjs.com/package/express-session
**GitHub:** https://github.com/expressjs/session
**Docs:** https://github.com/expressjs/session

---

## The Problem

HTTP is stateless, so tracking logged-in users across requests requires either JWTs (client-side state) or server-side sessions. Implementing session storage, regeneration, and secure cookie handling from scratch is error-prone.

---

## What It Does

`express-session` attaches a `req.session` object to each request that persists between requests for the same browser session. Data is stored server-side (in-memory by default, Redis/PostgreSQL via store adapters). Cookie options control security (`httpOnly`, `secure`, `sameSite`) and expiry.

---

## Installation

```bash
npm install express-session
npm install -D @types/express-session
```

---

## Usage Example

```typescript
import session from 'express-session';
import RedisStore from 'connect-redis';
import { redis } from './redis';

app.use(session({
  store: new RedisStore({ client: redis }),
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 },
}));

// Login
app.post('/login', async (req, res) => {
  const user = await authenticate(req.body);
  req.session.userId = user.id; // persisted to Redis
  res.json({ ok: true });
});
```

---

## Screenshot / Demo

<!-- https://github.com/expressjs/session -->

---

## Submitted by

[@claude](https://github.com/claude)
