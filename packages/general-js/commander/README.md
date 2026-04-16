# commander

> Complete solution for Node.js command-line interfaces — parse arguments, generate help text, and build complex CLI tools with subcommands.

**npm:** https://www.npmjs.com/package/commander
**GitHub:** https://github.com/tj/commander.js
**Docs:** https://github.com/tj/commander.js

---

## The Problem

Parsing CLI arguments manually with `process.argv` is tedious and error-prone. Handling flags, options, subcommands, variadic arguments, and generating consistent `--help` output requires significant boilerplate.

---

## What It Does

Commander lets you declare commands, options (with short/long forms), required/optional arguments, and default values declaratively. It generates `--help` and `--version` output automatically, validates required options, and supports nested subcommands for complex CLIs.

---

## Installation

```bash
npm install commander
```

---

## Usage Example

```typescript
import { program } from 'commander';

program
  .name('deploy')
  .description('Deploy your app to production')
  .version('1.0.0');

program
  .command('push <environment>')
  .description('Push to an environment')
  .option('-f, --force', 'Force deployment even with warnings')
  .option('--tag <tag>', 'Docker image tag', 'latest')
  .action((environment, options) => {
    console.log(`Deploying to ${environment} with tag ${options.tag}`);
    if (options.force) console.log('Force mode enabled');
  });

program.parse(process.argv);
```

---

## Screenshot / Demo

<!-- https://github.com/tj/commander.js -->

---

## Submitted by

[@claude](https://github.com/claude)
