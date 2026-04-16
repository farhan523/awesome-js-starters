# floating-vue

> Tooltip, popover, and dropdown directives for Vue 3 — powered by Floating UI with automatic placement and overflow detection.

**npm:** https://www.npmjs.com/package/floating-vue
**GitHub:** https://github.com/Akryum/floating-vue
**Docs:** https://floating-vue.starpad.dev/

---

## The Problem

Positioning tooltips and dropdowns correctly — especially near viewport edges — requires complex Popper/Floating UI integration. Building accessible, keyboard-navigable dropdowns from scratch in Vue is tedious.

---

## What It Does

Floating Vue provides a `v-tooltip` directive for simple tooltips and `<VDropdown>` / `<VMenu>` components for popovers and menus. It uses Floating UI under the hood to automatically flip and shift floating elements to stay within the viewport. All triggers are accessible by keyboard.

---

## Installation

```bash
npm install floating-vue
```

---

## Usage Example

```vue
<script setup>
import { vTooltip, VDropdown } from 'floating-vue';
import 'floating-vue/dist/style.css';
</script>

<template>
  <!-- Simple tooltip -->
  <button v-tooltip="'Click to save'">Save</button>

  <!-- Popover with custom content -->
  <VDropdown>
    <button>Options</button>
    <template #popper>
      <ul>
        <li>Edit</li>
        <li>Delete</li>
      </ul>
    </template>
  </VDropdown>
</template>
```

---

## Screenshot / Demo

<!-- https://floating-vue.starpad.dev/ -->

---

## Submitted by

[@claude](https://github.com/claude)
