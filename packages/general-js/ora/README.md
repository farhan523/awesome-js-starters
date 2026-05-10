# ora

> Elegant terminal spinner for command-line applications.

**npm:** https://www.npmjs.com/package/ora
**GitHub:** https://github.com/sindresorhus/ora
**Docs:** https://github.com/sindresorhus/ora#readme

---

## The Problem

Long-running CLI tasks need feedback, but printing raw log lines or progress text feels unpolished and doesn’t clearly communicate that work is still running.

---

## What It Does

`ora` displays a lightweight animated spinner in terminals with simple start/stop controls and styled text. It makes CLI status updates feel clean and responsive without extra terminal handling.

---

## Installation

```bash
npm install ora
```

---

## Usage Example

```js
import ora from "ora";

const spinner = ora("Saving data...").start();

try {
  await saveData();
  spinner.succeed("Data saved successfully.");
} catch (error) {
  spinner.fail("Save failed.");
}
```

---

## Submitted by

[@awaisoem](https://github.com/awaisoem)
