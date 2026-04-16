# cookie-parser

> Cookie parsing middleware for Express — parse Cookie headers into `req.cookies` and support signed cookies for tamper detection.

**npm:** https://www.npmjs.com/package/cookie-parser
**GitHub:** https://github.com/expressjs/cookie-parser
**Docs:** https://github.com/expressjs/cookie-parser

---

## The Problem

HTTP cookies arrive as a single `Cookie: key=value; key2=value2` header string. Parsing this manually, handling URL encoding, and verifying signed cookies for integrity requires non-trivial boilerplate in every Express app.

---

## What It Does

`cookie-parser` parses the `Cookie` header and populates `req.cookies` with key-value pairs. When configured with a secret, it also populates `req.signedCookies` — cookies signed with HMAC to detect tampering. Setting cookies uses the standard `res.cookie()` Express method.

---

## Installation

```bash
npm install cookie-parser
npm install -D @types/cookie-parser
```

---

## Usage Example

```typescript
import cookieParser from 'cookie-parser';

app.use(cookieParser(process.env.COOKIE_SECRET));

app.get('/auth', (req, res) => {
  // Set a signed cookie
  res.cookie('sessionToken', 'abc123', {
    signed: true,
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.json({ ok: true });
});

app.get('/profile', (req, res) => {
  const token = req.signedCookies.sessionToken; // verified or false if tampered
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  // ...
});
```

---

## Screenshot / Demo

<!-- https://github.com/expressjs/cookie-parser -->

---

## Submitted by

[@claude](https://github.com/claude)
