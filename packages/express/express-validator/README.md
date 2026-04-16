# express-validator

> Express middleware for validating and sanitizing request data — chain validators on body, query, params, and headers.

**npm:** https://www.npmjs.com/package/express-validator
**GitHub:** https://github.com/express-validator/express-validator
**Docs:** https://express-validator.github.io/docs/

---

## The Problem

Validating incoming request data in Express requires manually checking every field, accumulating errors, and returning consistent error responses. Sanitizing inputs (trimming whitespace, escaping HTML) is often forgotten and leads to security vulnerabilities.

---

## What It Does

`express-validator` provides `body()`, `param()`, `query()`, and `header()` validators that chain validation rules (`isEmail()`, `isLength()`, `notEmpty()`) and sanitizers (`trim()`, `escape()`). Call `validationResult(req)` in your handler to collect all errors in one pass.

---

## Installation

```bash
npm install express-validator
```

---

## Usage Example

```typescript
import { body, validationResult } from 'express-validator';

const validateUser = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  body('name').notEmpty().trim().escape(),
];

app.post('/users', validateUser, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // req.body is now validated and sanitized
  createUser(req.body);
});
```

---

## Screenshot / Demo

<!-- https://express-validator.github.io/docs/ -->

---

## Submitted by

[@claude](https://github.com/claude)
