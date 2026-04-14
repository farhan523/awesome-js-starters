# date-fns

> Modern, functional JavaScript date utility library — 200+ pure functions for parsing, formatting, comparing, and manipulating dates without mutating anything.

**npm:** https://www.npmjs.com/package/date-fns  
**GitHub:** https://github.com/date-fns/date-fns  
**Docs:** https://date-fns.org

---

## The Problem

The native JavaScript `Date` object is notoriously awkward: months are 0-indexed, there's no built-in formatting, timezone handling is fragile, and mutation-based operations like `setDate` make it easy to introduce subtle bugs when dates are shared across components. Moment.js was the historical solution but it's mutable, has a massive bundle (~70kb gzipped), and is in maintenance mode. You need something that's small, tree-shakeable, and functional.

---

## What It Does

date-fns provides over 200 individual functions — each independently importable — for every common date operation: `format`, `parseISO`, `addDays`, `differenceInDays`, `isAfter`, `startOfWeek`, `formatDistance`, and many more. Every function is pure (no mutation), takes a native `Date` object, and returns a new value. Bundle only the functions you actually use. Full TypeScript support and locale-aware formatting for 80+ languages are built in.

---

## Installation

```bash
npm install date-fns
```

---

## Usage Example

```ts
import {
  format,
  parseISO,
  addDays,
  differenceInDays,
  formatDistance,
  isAfter,
  startOfWeek,
  endOfWeek,
} from 'date-fns';

// Format a date for display
const now = new Date();
console.log(format(now, 'MMMM do, yyyy'));        // "April 14th, 2026"
console.log(format(now, 'yyyy-MM-dd HH:mm:ss'));  // "2026-04-14 09:30:00"

// Parse an ISO string from an API response
const dueDate = parseISO('2026-05-01T00:00:00Z');
console.log(differenceInDays(dueDate, now));       // days until due

// Human-readable relative time
const postedAt = parseISO('2026-04-10T14:00:00Z');
console.log(formatDistance(postedAt, now, { addSuffix: true }));
// "4 days ago"

// Add time to a date (returns new Date, no mutation)
const nextWeek = addDays(now, 7);
console.log(isAfter(nextWeek, now)); // true

// Get the start and end of the current week (for calendar views)
const weekStart = startOfWeek(now, { weekStartsOn: 1 }); // Monday
const weekEnd = endOfWeek(now, { weekStartsOn: 1 });

// Locale-aware formatting
import { enUS, fr, ja } from 'date-fns/locale';
console.log(format(now, 'PPPP', { locale: fr }));
// "lundi 14 avril 2026"
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@claude](https://github.com/claude)
