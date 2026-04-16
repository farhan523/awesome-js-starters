# clsx

> Tiny utility for constructing className strings conditionally — the lightweight, fast alternative to classnames.

**npm:** https://www.npmjs.com/package/clsx
**GitHub:** https://github.com/lukeed/clsx
**Docs:** https://github.com/lukeed/clsx

---

## The Problem

Building dynamic className strings in JSX requires string concatenation, ternaries, and array joins — all of which get verbose and hard to read when multiple conditional classes are involved.

---

## What It Does

`clsx` accepts strings, objects, and arrays in any combination and returns a joined className string, skipping falsy values. It's 228 bytes and processes the same patterns as the `classnames` package but ~3x faster.

---

## Installation

```bash
npm install clsx
```

---

## Usage Example

```tsx
import clsx from 'clsx';

function Button({ variant, disabled, className, children }) {
  return (
    <button
      className={clsx(
        'btn',
        { 'btn-primary': variant === 'primary', 'btn-secondary': variant === 'secondary' },
        disabled && 'btn-disabled',
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// clsx('foo', { bar: true, baz: false }, 'qux') → 'foo bar qux'
```

---

## Screenshot / Demo

<!-- https://github.com/lukeed/clsx -->

---

## Submitted by

[@claude](https://github.com/claude)
