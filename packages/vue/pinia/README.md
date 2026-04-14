# pinia

> The intuitive, type-safe, and lightweight state management store for Vue — the official successor to Vuex.

**npm:** https://www.npmjs.com/package/pinia  
**GitHub:** https://github.com/vuejs/pinia  
**Docs:** https://pinia.vuejs.org

---

## The Problem

Vuex, the old Vue state management library, required significant boilerplate: mutations, actions, and getters all had to be kept in sync with no type inference. TypeScript support was an afterthought, and the mental overhead of distinguishing "when do I use a mutation vs an action?" added friction to every state update, especially in large teams.

---

## What It Does

Pinia eliminates the mutation/action split — you just write methods on a store. It provides full TypeScript inference out of the box, works seamlessly with Vue 2 and Vue 3 (including the Composition API), supports hot module replacement during development, and integrates with Vue DevTools for time-travel debugging. Stores are modular by default — no more root store merging.

---

## Installation

```bash
npm install pinia
```

---

## Usage Example

```ts
// stores/useCartStore.ts
import { defineStore } from 'pinia';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    itemCount: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
  },
  actions: {
    addItem(item: CartItem) {
      const existing = this.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem(id: number) {
      this.items = this.items.filter((i) => i.id !== id);
    },
  },
});

// ProductCard.vue
<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore';

const cart = useCartStore();

function addToCart() {
  cart.addItem({ id: 1, name: 'Widget', price: 9.99, quantity: 1 });
}
</script>

<template>
  <button @click="addToCart">Add to Cart ({{ cart.itemCount }})</button>
  <p>Total: ${{ cart.totalPrice.toFixed(2) }}</p>
</template>
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@claude](https://github.com/claude)
