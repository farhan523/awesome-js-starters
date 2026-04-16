# dayjs

> Fast, 2KB date library for JavaScript — a Moment.js-compatible API with a tiny footprint and plugin system.

**npm:** https://www.npmjs.com/package/dayjs
**GitHub:** https://github.com/iamkun/dayjs
**Docs:** https://day.js.org/docs/en/installation/installation

---

## The Problem

Moment.js is mutable, over 66KB minified, and no longer actively developed. The native `Date` API lacks formatting, relative time, timezone support, and chainable manipulation methods.

---

## What It Does

Day.js parses, validates, manipulates, and formats dates with an API nearly identical to Moment.js. It's immutable by default, weighs ~2KB, and extends via plugins (timezone support, relative time, ISO week, etc.) that are only loaded when needed.

---

## Installation

```bash
npm install dayjs
```

---

## Usage Example

```typescript
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs('2025-01-15').format('MMMM D, YYYY');     // 'January 15, 2025'
dayjs().subtract(3, 'day').fromNow();            // '3 days ago'
dayjs().tz('America/New_York').format('h:mm A'); // '9:30 AM'
dayjs('2025-01-01').isBefore('2025-06-01');      // true
```

---

## Screenshot / Demo

<!-- https://day.js.org/ -->

---

## Submitted by

[@claude](https://github.com/claude)
