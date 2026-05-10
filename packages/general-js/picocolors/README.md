# picocolors

> Tiny, zero-dependency terminal output formatting with ANSI colors.

**npm:** https://www.npmjs.com/package/picocolors
**GitHub:** https://github.com/alexeyraspopov/picocolors
**Docs:** https://github.com/alexeyraspopov/picocolors#readme

---

## The Problem

Terminal logging and CLI output often need lightweight color formatting, but many color libraries are large or require too many dependencies.

---

## What It Does

`picocolors` provides a tiny API for ANSI color styling in console output. It focuses on speed, zero dependencies, and minimal bundle size for Node.js and CLI tools.

---

## Installation

```bash
npm install picocolors
```

---

## Usage Example

```js
import { green, red, bold } from "picocolors";

console.log(green("Success:"), bold("Deployment complete."));
console.error(red("Error:"), "Unable to connect to the database.");
```

---

## Submitted by

@awaisoem
