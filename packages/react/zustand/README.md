# zustand

> Small, fast, and scalable state management for React — bears the minimal boilerplate of Redux with none of the ceremony.

**npm:** https://www.npmjs.com/package/zustand
**GitHub:** https://github.com/pmndrs/zustand
**Docs:** https://zustand-demo.pmnd.rs/

---

## The Problem

Redux requires actions, reducers, selectors, and a Provider — even for a simple counter. Context API causes unnecessary re-renders whenever any part of the shared state changes.

---

## What It Does

Zustand stores are plain JavaScript objects with methods. Components subscribe to only the slices they need using a selector, so unrelated updates never cause re-renders. No Provider, no boilerplate — just a `create` call and a hook.

---

## Installation

```bash
npm install zustand
```

---

## Usage Example

```ts
import { create } from 'zustand';

interface BearStore {
  count: number;
  increment: () => void;
}

const useStore = create<BearStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useStore();
  return <button onClick={increment}>Bears: {count}</button>;
}
```

---

## Screenshot / Demo

<!-- https://zustand-demo.pmnd.rs/ -->

---

## Submitted by

[@claude](https://github.com/claude)
