# immer

> Create the next immutable state by mutating a temporary draft of the current one.

**npm:** https://www.npmjs.com/package/immer
**GitHub:** https://github.com/immerjs/immer
**Docs:** https://immerjs.github.io/immer

---

## The Problem

Updating nested immutable state with spread operators (`{ ...state, a: { ...state.a, b: ... } }`) is verbose, easy to get wrong, and obscures intent — yet mutating state directly breaks change detection in React and Redux.

---

## What It Does

`immer` lets you write straightforward "mutating" code against a draft and produces a correctly structured-shared immutable result. It powers Redux Toolkit's reducers and integrates cleanly with React state.

---

## Installation

```bash
npm install immer
```

---

## Usage Example

```js
import { produce } from "immer";

const state = { user: { name: "Ada", tags: ["admin"] } };

const next = produce(state, (draft) => {
  draft.user.tags.push("editor");
  draft.user.name = "Ada Lovelace";
});

console.log(state.user.tags);  // ["admin"] (unchanged)
console.log(next.user.tags);   // ["admin", "editor"]
```

---

## Submitted by

[@claude](https://github.com/claude)
