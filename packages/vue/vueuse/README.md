# @vueuse/core

> A collection of 200+ essential Vue Composition API utilities — from sensors and browser APIs to animations and state helpers.

**npm:** https://www.npmjs.com/package/@vueuse/core  
**GitHub:** https://github.com/vueuse/vueuse  
**Docs:** https://vueuse.org

---

## The Problem

Vue's Composition API is powerful, but implementing common browser interactions from scratch — detecting when the user goes offline, tracking mouse position, persisting state to localStorage, debouncing inputs, observing element visibility — requires repetitive boilerplate that ends up copy-pasted across projects with subtle bugs in each version.

---

## What It Does

VueUse provides over 200 composables that wrap browser APIs, sensors, animations, and utility patterns into ready-to-use reactive functions. Each composable is tree-shakeable, SSR-compatible, and TypeScript-first. Instead of reimplementing `useLocalStorage`, `useDark`, `useIntersectionObserver`, or `useDebounce` in every project, you install one package and get them all.

---

## Installation

```bash
npm install @vueuse/core
```

---

## Usage Example

```ts
<script setup lang="ts">
import {
  useLocalStorage,
  useDark,
  useToggle,
  useIntersectionObserver,
  useDebounce,
} from '@vueuse/core';
import { ref } from 'vue';

// Persist user preferences to localStorage — reactive, auto-synced
const theme = useLocalStorage('user-theme', 'light');

// Dark mode toggle that syncs with OS preference
const isDark = useDark();
const toggleDark = useToggle(isDark);

// Lazy-load a section when it scrolls into view
const targetSection = ref<HTMLElement | null>(null);
const isVisible = ref(false);
useIntersectionObserver(targetSection, ([{ isIntersecting }]) => {
  isVisible.value = isIntersecting;
});

// Debounced search input — only fires after user stops typing
const searchQuery = ref('');
const debouncedQuery = useDebounce(searchQuery, 300);
</script>

<template>
  <button @click="toggleDark()">
    {{ isDark ? '☀️ Light' : '🌙 Dark' }} Mode
  </button>
  <p>Saved theme: {{ theme }}</p>

  <div ref="targetSection">
    <p v-if="isVisible">Section is visible!</p>
  </div>

  <input v-model="searchQuery" placeholder="Search..." />
  <p>Searching for: {{ debouncedQuery }}</p>
</template>
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@claude](https://github.com/claude)
