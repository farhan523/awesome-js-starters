# express-fileupload

> Simple Express middleware for handling `multipart/form-data` file uploads, built on Busboy.

**npm:** https://www.npmjs.com/package/express-fileupload
**GitHub:** https://github.com/richardgirges/express-fileupload
**Docs:** https://github.com/richardgirges/express-fileupload#readme

---

## The Problem

Accepting file uploads in Express normally requires wiring up streaming multipart parsing, temporary storage, and manual move-to-disk logic before you can even access the uploaded file.

---

## What It Does

`express-fileupload` exposes uploaded files on `req.files` with a convenient `mv()` helper to save them, plus options for size limits and temp files. It wraps Busboy to make basic upload handling a few lines of code.

---

## Installation

```bash
npm install express-fileupload
```

---

## Usage Example

```js
import express from "express";
import fileUpload from "express-fileupload";

const app = express();
app.use(fileUpload());

app.post("/upload", async (req, res) => {
  const file = req.files.avatar;
  await file.mv(`./uploads/${file.name}`);
  res.json({ saved: file.name, size: file.size });
});

app.listen(3000);
```

---

## Submitted by

[@claude](https://github.com/claude)
