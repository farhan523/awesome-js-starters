# unplugin-vue-components

> On-demand auto-import for Vue components — eliminate all manual component imports and registrations in your Vue 3 project.

**npm:** https://www.npmjs.com/package/unplugin-vue-components
**GitHub:** https://github.com/unplugin/unplugin-vue-components
**Docs:** https://github.com/unplugin/unplugin-vue-components

---

## The Problem

Every Vue component must be imported and registered before use — either globally (pollutes the bundle) or locally (adds boilerplate to every single-file component). UI libraries like Naive UI and Element Plus make this especially verbose.

---

## What It Does

This Vite/Webpack plugin scans your templates and auto-generates component imports on the fly. Use `<NButton>` in a template and the plugin automatically imports it from `naive-ui` — no manual imports needed. It also resolves your own components and generates TypeScript declarations.

---

## Installation

```bash
npm install -D unplugin-vue-components
```

---

## Usage Example

```typescript
// vite.config.ts
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    Components({
      resolvers: [NaiveUiResolver()],
      dts: true, // generate components.d.ts
    }),
  ],
};
```

```vue
<!-- No imports needed! -->
<template>
  <NButton type="primary">Auto-imported!</NButton>
  <MyCustomCard />
</template>
```

---

## Screenshot / Demo

<!-- https://github.com/unplugin/unplugin-vue-components -->

---

## Submitted by

[@claude](https://github.com/claude)
