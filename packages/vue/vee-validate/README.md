# vee-validate

> Template-based form validation for Vue 3 — schema validation, error messages, and field-level state with Zod/Yup integration.

**npm:** https://www.npmjs.com/package/vee-validate
**GitHub:** https://github.com/logaretm/vee-validate
**Docs:** https://vee-validate.logaretm.com/v4/

---

## The Problem

Validating Vue forms means managing error state for every field, handling async validators, showing/hiding error messages at the right time, and integrating with schema validation libraries — all of which requires significant boilerplate.

---

## What It Does

vee-validate provides `useForm`, `useField`, and `<Field>` / `<ErrorMessage>` components that track touched, dirty, and valid state per field. It integrates directly with Zod, Yup, and Valibot via adapters so your existing schema doubles as the validation logic.

---

## Installation

```bash
npm install vee-validate @vee-validate/zod zod
```

---

## Usage Example

```vue
<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(
    z.object({ email: z.string().email(), password: z.string().min(8) })
  ),
});

const onSubmit = handleSubmit((values) => console.log(values));
</script>

<template>
  <form @submit="onSubmit">
    <Field name="email" type="email" />
    <ErrorMessage name="email" />
    <button type="submit">Login</button>
  </form>
</template>
```

---

## Screenshot / Demo

<!-- https://vee-validate.logaretm.com/v4/ -->

---

## Submitted by

[@claude](https://github.com/claude)
