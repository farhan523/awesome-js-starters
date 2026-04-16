# inquirer

> Interactive CLI user interfaces for Node.js — prompt users for input, choices, confirmations, and passwords in terminal tools.

**npm:** https://www.npmjs.com/package/inquirer
**GitHub:** https://github.com/SBoudrias/Inquirer.js
**Docs:** https://github.com/SBoudrias/Inquirer.js

---

## The Problem

Building interactive CLI wizards — project generators, configuration tools, deployment scripts — requires collecting user input via prompts with validation, default values, and conditional logic. Parsing raw `readline` input is verbose.

---

## What It Does

Inquirer provides a promise-based API for asking questions: text input, password masking, checkboxes, lists, confirmations, and editors. Answers can be validated in real time, and conditional prompts show/hide based on previous answers.

---

## Installation

```bash
npm install inquirer
npm install -D @types/inquirer
```

---

## Usage Example

```typescript
import inquirer from 'inquirer';

const answers = await inquirer.prompt([
  {
    type: 'input',
    name: 'projectName',
    message: 'Project name:',
    validate: (input) => /^[a-z-]+$/.test(input) || 'Use lowercase letters and hyphens only',
  },
  {
    type: 'list',
    name: 'framework',
    message: 'Choose a framework:',
    choices: ['Next.js', 'Remix', 'Astro', 'SvelteKit'],
  },
  {
    type: 'confirm',
    name: 'typescript',
    message: 'Use TypeScript?',
    default: true,
  },
]);

console.log(`Creating ${answers.framework} project: ${answers.projectName}`);
```

---

## Screenshot / Demo

<!-- https://github.com/SBoudrias/Inquirer.js -->

---

## Submitted by

[@claude](https://github.com/claude)
