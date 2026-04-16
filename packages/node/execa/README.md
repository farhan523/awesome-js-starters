# execa

> Process execution for Node.js — a better child_process with Promises, streaming, and a clean cross-platform API.

**npm:** https://www.npmjs.com/package/execa
**GitHub:** https://github.com/sindresorhus/execa
**Docs:** https://github.com/sindresorhus/execa

---

## The Problem

Node's built-in `child_process.exec` uses callbacks, joins stdout/stderr awkwardly, has inconsistent error handling, and requires manual cross-platform command escaping. Writing shell scripts in Node.js is more painful than it should be.

---

## What It Does

Execa returns Promises, provides separate stdout/stderr streams, throws descriptive errors with the command output when a process fails, and handles cross-platform path separators. The `$` tagged template literal gives you a shell-like syntax for composing commands safely.

---

## Installation

```bash
npm install execa
```

---

## Usage Example

```typescript
import { execa, $ } from 'execa';

// Simple command execution
const { stdout } = await execa('git', ['log', '--oneline', '-5']);
console.log(stdout);

// Template literal syntax (safe, no shell injection)
const branch = 'main';
const { stdout: log } = await $`git log --oneline -5 ${branch}`;

// Pipe commands
const result = await execa('cat', ['package.json']).pipeStdout(execa('jq', ['.name']));
console.log(result.stdout);
```

---

## Screenshot / Demo

<!-- https://github.com/sindresorhus/execa -->

---

## Submitted by

[@claude](https://github.com/claude)
