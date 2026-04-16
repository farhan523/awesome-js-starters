# chalk

> Terminal string styling for Node.js — colorize and style CLI output with a chainable, expressive API.

**npm:** https://www.npmjs.com/package/chalk
**GitHub:** https://github.com/chalk/chalk
**Docs:** https://github.com/chalk/chalk

---

## The Problem

Printing colored or styled output to the terminal requires manually constructing ANSI escape codes, checking if the terminal supports color, and ensuring codes are reset after each styled string.

---

## What It Does

Chalk provides a fluent API for applying colors, backgrounds, and text styles (bold, italic, underline) to terminal strings. It auto-detects terminal color support and degrades gracefully. Nested styles work correctly with automatic reset sequencing.

---

## Installation

```bash
npm install chalk
```

---

## Usage Example

```typescript
import chalk from 'chalk';

// Colors and styles
console.log(chalk.green('✓ Build succeeded'));
console.log(chalk.red.bold('✗ 3 errors found'));
console.log(chalk.yellow.italic('⚠ 2 warnings'));

// Template literals
console.log(chalk`
  {blue Info:}  Deploying to {underline production}
  {green.bold Success:} {white 42} files uploaded
  {red Error:}  Connection timeout after {yellow 30s}
`);

// Dynamic highlighting
const status = (code: number) =>
  code < 400 ? chalk.green(code) : chalk.red(code);
```

---

## Screenshot / Demo

<!-- https://github.com/chalk/chalk -->

---

## Submitted by

[@claude](https://github.com/claude)
