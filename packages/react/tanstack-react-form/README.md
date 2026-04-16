# @tanstack/react-form

> Type-safe, headless form state management for React — first-class TypeScript inference, async validation, and framework-agnostic core.

**npm:** https://www.npmjs.com/package/@tanstack/react-form
**GitHub:** https://github.com/TanStack/form
**Docs:** https://tanstack.com/form/latest

---

## The Problem

Form libraries often sacrifice type safety for convenience, leaving you with `any`-typed field values. Async validation, field arrays, and cross-field dependencies require complex workarounds.

---

## What It Does

TanStack Form infers TypeScript types directly from your form schema, so field values, errors, and submit handlers are all fully typed. It supports synchronous and async validation, field-level and form-level validators, and integrates with any schema library.

---

## Installation

```bash
npm install @tanstack/react-form
```

---

## Usage Example

```tsx
import { useForm } from '@tanstack/react-form';

export function SignupForm() {
  const form = useForm({
    defaultValues: { email: '', age: 0 },
    onSubmit: async ({ value }) => {
      console.log(value); // fully typed
    },
  });

  return (
    <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(); }}>
      <form.Field
        name="email"
        validators={{ onChange: ({ value }) => !value.includes('@') ? 'Invalid email' : undefined }}
        children={(field) => (
          <input value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Screenshot / Demo

<!-- https://tanstack.com/form/latest -->

---

## Submitted by

[@claude](https://github.com/claude)
