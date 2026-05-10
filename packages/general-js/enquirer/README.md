# enquirer

> Stylish, user-friendly command-line prompts for interactive Node.js tools.

**npm:** https://www.npmjs.com/package/enquirer
**GitHub:** https://github.com/enquirer/enquirer
**Docs:** https://github.com/enquirer/enquirer

---

## The Problem

Building CLI prompts by hand is tedious and inconsistent, especially when you need support for confirmations, lists, input masks, and validation across many terminal environments.

---

## What It Does

`enquirer` provides a modern prompt system with expressive question definitions, built-in prompt types, and clean terminal output. It makes interactive command-line workflows easy to configure without pulling in a heavy dependency.

---

## Installation

```bash
npm install enquirer
```

---

## Usage Example

```js
import Enquirer from "enquirer";

const enquirer = new Enquirer();
const response = await enquirer.prompt({
  type: "input",
  name: "email",
  message: "Enter your email",
  validate(value) {
    return value.includes("@") ? true : "Please enter a valid email address.";
  },
});

console.log("Email:", response.email);
```

---

## Submitted by

[@awaisoem](https://github.com/awaisoem)
