# jotai

> Primitive and flexible atomic state management for React — derive state from atoms without a centralized store.

**npm:** https://www.npmjs.com/package/jotai
**GitHub:** https://github.com/pmndrs/jotai
**Docs:** https://jotai.org/docs/introduction

---

## The Problem

Global state libraries require you to define all state upfront in a single store. When state needs to be derived, combined, or scoped to subtrees, this gets complicated fast.

---

## What It Does

Jotai models state as atoms — tiny independent units that can be composed and derived from one another. Components subscribe to only the atoms they use, and derived atoms update automatically. It integrates naturally with React Suspense and concurrent features.

---

## Installation

```bash
npm install jotai
```

---

## Usage Example

```tsx
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);
const doubleAtom = atom((get) => get(countAtom) * 2);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  const [double] = useAtom(doubleAtom);

  return (
    <div>
      <p>Count: {count}, Double: {double}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
```

---

## Screenshot / Demo

<!-- https://jotai.org -->

---

## Submitted by

[@claude](https://github.com/claude)
