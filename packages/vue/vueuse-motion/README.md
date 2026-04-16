# @vueuse/motion

> Motion animations composables for Vue 3 — animate elements using spring physics, keyframes, and scroll-linked effects with a simple directive API.

**npm:** https://www.npmjs.com/package/@vueuse/motion
**GitHub:** https://github.com/vueuse/motion
**Docs:** https://motion.vueuse.org/

---

## The Problem

Adding entrance animations, hover effects, and scroll-triggered reveals in Vue requires either CSS keyframe juggling or heavy animation libraries that don't integrate cleanly with Vue's reactivity system.

---

## What It Does

`@vueuse/motion` provides a `v-motion` directive and `useMotion` composable. You define initial, enter, hover, and focus states as plain objects — the library animates between them using spring physics or custom transitions. It's built on Motion One and integrates naturally with Vue's template syntax.

---

## Installation

```bash
npm install @vueuse/motion
```

---

## Usage Example

```vue
<script setup>
import { MotionPlugin } from '@vueuse/motion';
// Register in main.ts: app.use(MotionPlugin)
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
    :hovered="{ scale: 1.05 }"
    class="card"
  >
    Animated Card
  </div>
</template>
```

---

## Screenshot / Demo

<!-- https://motion.vueuse.org/ -->

---

## Submitted by

[@claude](https://github.com/claude)
