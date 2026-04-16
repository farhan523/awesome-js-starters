# vue-toastification

> Light, easy, and beautiful toast notifications for Vue 3 — highly configurable with smooth animations and minimal setup.

**npm:** https://www.npmjs.com/package/vue-toastification
**GitHub:** https://github.com/Maronato/vue-toastification
**Docs:** https://vue-toastification.maronato.dev/

---

## The Problem

Vue apps need transient notifications for user feedback, but building a reusable, position-aware, auto-dismissing toast system from scratch requires a shared state service, teleport portals, and animation logic.

---

## What It Does

`vue-toastification` registers as a Vue plugin and provides a `useToast()` composable. Call `toast.success()`, `toast.error()`, or pass a Vue component as the toast body. Toasts stack, auto-dismiss, and support click-to-close — fully customizable via CSS variables.

---

## Installation

```bash
npm install vue-toastification
```

---

## Usage Example

```typescript
// main.ts
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
app.use(Toast, { position: 'top-right', timeout: 3000 });
```

```vue
<script setup lang="ts">
import { useToast } from 'vue-toastification';

const toast = useToast();

function save() {
  toast.success('Settings saved!');
}
</script>
```

---

## Screenshot / Demo

<!-- https://vue-toastification.maronato.dev/ -->

---

## Submitted by

[@claude](https://github.com/claude)
