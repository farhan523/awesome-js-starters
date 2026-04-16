# vue-final-modal

> Tiny, renderless, and stackable modal library for Vue 3 — full control over markup and transitions with proper focus trapping.

**npm:** https://www.npmjs.com/package/vue-final-modal
**GitHub:** https://github.com/vue-final/vue-final-modal
**Docs:** https://vue-final-modal.org/

---

## The Problem

Vue modal libraries either dictate all the styling, don't handle stacking (modals on top of modals), or break when you try to use `<Teleport>` with SSR. Building a robust modal from scratch requires handling focus traps, scroll locks, and `Escape` key handling.

---

## What It Does

Vue Final Modal is renderless — it provides no default styles, just the behavior: programmatic open/close API, scroll locking, focus trapping, stacking z-index management, and proper `Escape` dismissal. You style the wrapper entirely with your own CSS or Tailwind.

---

## Installation

```bash
npm install vue-final-modal
```

---

## Usage Example

```vue
<script setup lang="ts">
import { useModal, VueFinalModal } from 'vue-final-modal';

const { open, close } = useModal({ component: ConfirmModal, attrs: { title: 'Delete?' } });
</script>

<template>
  <button @click="open">Delete Item</button>
</template>
```

```vue
<!-- ConfirmModal.vue -->
<template>
  <VueFinalModal class="flex items-center justify-center">
    <div class="bg-white rounded-xl p-8 shadow-lg">
      <h2>{{ title }}</h2>
      <button @click="$emit('confirm')">Yes, delete</button>
    </div>
  </VueFinalModal>
</template>
```

---

## Screenshot / Demo

<!-- https://vue-final-modal.org/ -->

---

## Submitted by

[@claude](https://github.com/claude)
