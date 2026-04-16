# vue-i18n

> Internationalization plugin for Vue 3 — translate messages, format dates and numbers, and switch locales at runtime.

**npm:** https://www.npmjs.com/package/vue-i18n
**GitHub:** https://github.com/intlify/vue-i18n-next
**Docs:** https://vue-i18n.intlify.dev/

---

## The Problem

Adding multi-language support to a Vue app requires loading translation strings, formatting locale-specific dates and numbers, handling plurals and gender, and switching languages without a full page reload.

---

## What It Does

Vue I18n provides a `$t()` function and `useI18n()` composable for translating messages in templates and script code. It supports ICU message format for complex plurals, `$d()` for locale-aware date formatting, and lazy locale loading for large translation files.

---

## Installation

```bash
npm install vue-i18n
```

---

## Usage Example

```typescript
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: { greeting: 'Hello, {name}!', items: '{count} item | {count} items' },
    de: { greeting: 'Hallo, {name}!', items: '{count} Artikel | {count} Artikel' },
  },
});

app.use(i18n);
```

```html
<template>
  <p>{{ $t('greeting', { name: 'Alice' }) }}</p>
  <p>{{ $t('items', { count: 3 }, 3) }}</p>
  <button @click="$i18n.locale = 'de'">Switch to German</button>
</template>
```

---

## Screenshot / Demo

<!-- https://vue-i18n.intlify.dev/ -->

---

## Submitted by

[@claude](https://github.com/claude)
