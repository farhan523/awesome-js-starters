# vue-demi

> Write Vue libraries that work for both Vue 2 and Vue 3 from a single codebase.

**npm:** https://www.npmjs.com/package/vue-demi
**GitHub:** https://github.com/vueuse/vue-demi
**Docs:** https://github.com/vueuse/vue-demi#readme

---

## The Problem

Library authors who want to support both Vue 2 and Vue 3 face incompatible imports and APIs, forcing them to maintain separate builds or branches for each major version.

---

## What It Does

`vue-demi` re-exports the correct Vue APIs for whichever Vue version is installed, so a single library build runs on Vue 2 (with the Composition API plugin) and Vue 3. It is used by VueUse, Pinia, and many other ecosystem packages.

---

## Installation

```bash
npm install vue-demi
```

---

## Usage Example

```js
import { ref, computed, isVue3 } from "vue-demi";

export function useCounter(initial = 0) {
  const count = ref(initial);
  const double = computed(() => count.value * 2);
  return { count, double, isVue3 };
}
```

---

## Submitted by

[@claude](https://github.com/claude)
