# cmdk

> Fast, composable command palette for React — keyboard-driven search UI with fuzzy filtering and accessible markup out of the box.

**npm:** https://www.npmjs.com/package/cmdk
**GitHub:** https://github.com/pacocoursey/cmdk
**Docs:** https://cmdk.paco.me/

---

## The Problem

Building a ⌘K command palette means implementing keyboard navigation, fuzzy search, item grouping, and ARIA roles from scratch — a significant amount of work that most apps delay indefinitely.

---

## What It Does

`cmdk` provides composable `Command.*` components that handle keyboard navigation, filtering, and accessibility automatically. You supply the items and styling; the library handles the rest. It pairs perfectly with Radix Dialog for a modal command palette.

---

## Installation

```bash
npm install cmdk
```

---

## Usage Example

```tsx
import { Command } from 'cmdk';

export function CommandMenu() {
  return (
    <Command>
      <Command.Input placeholder="Search commands..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Actions">
          <Command.Item onSelect={() => console.log('new file')}>New File</Command.Item>
          <Command.Item onSelect={() => console.log('open settings')}>Open Settings</Command.Item>
        </Command.Group>
      </Command.List>
    </Command>
  );
}
```

---

## Screenshot / Demo

<!-- https://cmdk.paco.me/ -->

---

## Submitted by

[@claude](https://github.com/claude)
