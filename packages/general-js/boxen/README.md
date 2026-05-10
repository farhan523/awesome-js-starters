# boxen

> Create boxes in the terminal for CLI output and status messages.

**npm:** https://www.npmjs.com/package/boxen
**GitHub:** https://github.com/sindresorhus/boxen
**Docs:** https://github.com/sindresorhus/boxen#readme

---

## The Problem

Terminal apps often need a way to highlight warnings, success messages, or notes without relying on plain text, but manually drawing borders and padding in the terminal is tedious and error-prone.

---

## What It Does

`boxen` wraps text in a styled box with padding, margin, border styles, and colors. It makes CLI message formatting simple, so output looks polished with minimal code.

---

## Installation

```bash
npm install boxen
```

---

## Usage Example

```js
import boxen from "boxen";

const message = boxen("Deployment complete", {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
});

console.log(message);
```

---

## Submitted by

[@awaisoem](https://github.com/awaisoem)
