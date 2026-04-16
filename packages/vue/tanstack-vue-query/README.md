# @tanstack/vue-query

> Powerful async state management for Vue — data fetching, caching, background refetching, and server state synchronization.

**npm:** https://www.npmjs.com/package/@tanstack/vue-query
**GitHub:** https://github.com/TanStack/query
**Docs:** https://tanstack.com/query/latest/docs/framework/vue/overview

---

## The Problem

Fetching data in Vue with `fetch` or `axios` means manually managing loading/error state, cache invalidation, background updates, and retry logic in every component — leading to duplicate code and inconsistent UX.

---

## What It Does

TanStack Query for Vue provides `useQuery` and `useMutation` composables that handle the entire async lifecycle. Results are cached and shared across components, stale data is refetched in the background, and failed requests retry automatically. The devtools show cache state in real time.

---

## Installation

```bash
npm install @tanstack/vue-query
```

---

## Usage Example

```vue
<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';

const { data, isPending, isError } = useQuery({
  queryKey: ['users'],
  queryFn: () => fetch('/api/users').then((r) => r.json()),
  staleTime: 5 * 60 * 1000, // cache for 5 minutes
});
</script>

<template>
  <div v-if="isPending">Loading...</div>
  <div v-else-if="isError">Error fetching users</div>
  <ul v-else>
    <li v-for="user in data" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
```

---

## Screenshot / Demo

<!-- https://tanstack.com/query/latest/docs/framework/vue/overview -->

---

## Submitted by

[@claude](https://github.com/claude)
