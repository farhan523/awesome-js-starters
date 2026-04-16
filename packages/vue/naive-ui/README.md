# naive-ui

> Fairly complete Vue 3 UI component library — 90+ components with a TypeScript-first design and no dependency on legacy CSS frameworks.

**npm:** https://www.npmjs.com/package/naive-ui
**GitHub:** https://github.com/tusen-ai/naive-ui
**Docs:** https://www.naiveui.com/

---

## The Problem

Finding a Vue 3 component library that is fully TypeScript-compatible, actively maintained, and doesn't require you to import a full CSS reset or fight specificity issues is surprisingly difficult.

---

## What It Does

Naive UI provides 90+ components — data tables with virtual scrolling, date/time pickers, tree selectors, cascaders, and more — all written in TypeScript with full prop type inference. It uses CSS-in-JS via `css-render` so there's no global stylesheet to fight, and the theme system is token-based.

---

## Installation

```bash
npm install naive-ui
```

---

## Usage Example

```vue
<script setup lang="ts">
import { NButton, NDataTable, NSpace } from 'naive-ui';

const columns = [{ title: 'Name', key: 'name' }, { title: 'Age', key: 'age' }];
const data = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
</script>

<template>
  <NSpace vertical>
    <NButton type="primary" @click="handleClick">Save</NButton>
    <NDataTable :columns="columns" :data="data" :bordered="false" />
  </NSpace>
</template>
```

---

## Screenshot / Demo

<!-- https://www.naiveui.com/en-US/os-theme/components/button -->

---

## Submitted by

[@claude](https://github.com/claude)
