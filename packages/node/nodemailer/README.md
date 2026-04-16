# nodemailer

> The standard Node.js library for sending email — supports SMTP, OAuth2, and every major email provider with a simple, battle-tested API.

**npm:** https://www.npmjs.com/package/nodemailer
**GitHub:** https://github.com/nodemailer/nodemailer
**Docs:** https://nodemailer.com/

---

## The Problem

Sending email from a Node.js app requires SMTP authentication, TLS negotiation, attachment handling, and HTML/plain-text multipart encoding — all complex to implement correctly from scratch.

---

## What It Does

Nodemailer creates a transporter configured for your provider (Gmail, SendGrid, SMTP, etc.) and provides a `sendMail` method that handles encoding, headers, attachments, and delivery. It supports OAuth2 for Gmail, DKIM signing, embedded images, and HTML templating.

---

## Installation

```bash
npm install nodemailer
npm install -D @types/nodemailer
```

---

## Usage Example

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: { user: 'apikey', pass: process.env.SENDGRID_API_KEY },
});

await transporter.sendMail({
  from: '"My App" <noreply@myapp.com>',
  to: 'user@example.com',
  subject: 'Welcome to My App!',
  text: 'Thanks for signing up.',
  html: '<h1>Welcome!</h1><p>Thanks for signing up.</p>',
  attachments: [{ filename: 'receipt.pdf', path: './receipts/receipt.pdf' }],
});
```

---

## Screenshot / Demo

<!-- https://nodemailer.com/about/ -->

---

## Submitted by

[@claude](https://github.com/claude)
