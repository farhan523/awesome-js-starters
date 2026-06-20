# element-plus

> A complete component library for Vue 3 with a clean, desktop-oriented design system.

**npm:** https://www.npmjs.com/package/element-plus
**GitHub:** https://github.com/element-plus/element-plus
**Docs:** https://element-plus.org

---

## The Problem

Building data-dense admin and dashboard UIs in Vue 3 from scratch means reinventing forms, tables, dialogs, date pickers, and validation — and keeping them visually consistent and accessible.

---

## What It Does

`element-plus` offers a comprehensive set of ready-made Vue 3 components — buttons, forms, tables, dialogs, notifications, and more — with theming support and TypeScript types, ideal for back-office and admin applications.

---

## Installation

```bash
npm install element-plus
```

---

## Usage Example

```js
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
```

```vue
<template>
  <el-button type="primary" @click="visible = true">Open</el-button>
  <el-dialog v-model="visible" title="Hello">Element Plus dialog</el-dialog>
</template>
```

---

## Submitted by

[@claude](https://github.com/claude)
