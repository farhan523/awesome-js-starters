# passport

> Authentication middleware for Node.js — 500+ strategies for OAuth, OpenID, local username/password, JWT, and more.

**npm:** https://www.npmjs.com/package/passport
**GitHub:** https://github.com/jaredhanson/passport
**Docs:** https://www.passportjs.org/docs/

---

## The Problem

Implementing authentication for every provider (Google, GitHub, Facebook, local) from scratch means handling OAuth flows, token exchanges, session management, and user serialization repeatedly for each strategy.

---

## What It Does

Passport uses a strategy pattern — you install a strategy package (e.g. `passport-google-oauth20`) and configure it once. Passport handles the auth flow, calls your `verify` callback with the authenticated user profile, and integrates with Express sessions or JWT-based stateless auth.

---

## Installation

```bash
npm install passport passport-local passport-jwt
```

---

## Usage Example

```typescript
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

passport.use(new LocalStrategy(async (username, password, done) => {
  const user = await User.findOne({ username });
  if (!user || !await user.verifyPassword(password)) return done(null, false);
  return done(null, user);
}));

passport.use(new JwtStrategy(
  { jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: process.env.JWT_SECRET },
  async (payload, done) => {
    const user = await User.findById(payload.sub);
    return user ? done(null, user) : done(null, false);
  }
));

app.post('/login', passport.authenticate('local'), (req, res) => res.json({ token: signJwt(req.user) }));
app.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => res.json(req.user));
```

---

## Screenshot / Demo

<!-- https://www.passportjs.org/docs/ -->

---

## Submitted by

[@claude](https://github.com/claude)
