# vue-router

> The official router for Vue.js — nested routes, lazy-loading, navigation guards, and typed routes for Vue 3 apps.

**npm:** https://www.npmjs.com/package/vue-router
**GitHub:** https://github.com/vuejs/router
**Docs:** https://router.vuejs.org/

---

## The Problem

Building a multi-page Vue app without a router means manually managing URL state, history pushes, and component swapping — all without the navigation guards and lazy-loading needed for real production apps.

---

## What It Does

Vue Router maps URL paths to Vue components, handles dynamic segments, query parameters, and hash navigation. Navigation guards let you intercept route changes for authentication, analytics, or data prefetching. Routes can be lazy-loaded with dynamic `import()` for automatic code splitting.

---

## Installation

```bash
npm install vue-router
```

---

## Usage Example

```typescript
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./views/Home.vue') },
    { path: '/users/:id', component: () => import('./views/User.vue') },
    { path: '/admin', component: () => import('./views/Admin.vue'),
      beforeEnter: (to, from) => isAdmin() || '/login' },
  ],
});

// main.ts
app.use(router);
```

---

## Screenshot / Demo

<!-- https://router.vuejs.org/ -->

---

## Submitted by

[@claude](https://github.com/claude)
