# tailwind-merge

> Merge Tailwind CSS class names without style conflicts — intelligently resolves which utility class wins when duplicates or conflicts exist.

**npm:** https://www.npmjs.com/package/tailwind-merge
**GitHub:** https://github.com/dcastil/tailwind-merge
**Docs:** https://github.com/dcastil/tailwind-merge

---

## The Problem

When building Tailwind component libraries, consumers pass `className` overrides that conflict with the component's default styles (e.g., both `p-4` and `p-8`). CSS class order doesn't reliably determine which wins — you need programmatic deduplication.

---

## What It Does

`twMerge` resolves conflicts between Tailwind classes by understanding the utility hierarchy. `p-8` wins over `p-4` because they target the same property. It handles arbitrary values, modifiers (`hover:`, `dark:`), and custom Tailwind config extensions. Commonly paired with `clsx` via the `cn` utility pattern.

---

## Installation

```bash
npm install tailwind-merge clsx
```

---

## Usage Example

```typescript
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

// The standard `cn` utility used in shadcn/ui and similar:
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage
cn('px-4 py-2 bg-blue-500', 'p-8 bg-red-500');
// → 'bg-red-500 p-8' (conflicts resolved: p-8 replaces px-4/py-2, bg-red-500 replaces bg-blue-500)
```

---

## Screenshot / Demo

<!-- https://github.com/dcastil/tailwind-merge -->

---

## Submitted by

[@claude](https://github.com/claude)
