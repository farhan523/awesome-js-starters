# react-hook-form

> Performant, flexible form management for React — minimal re-renders, easy validation, and zero dependencies.

**npm:** https://www.npmjs.com/package/react-hook-form
**GitHub:** https://github.com/react-hook-form/react-hook-form
**Docs:** https://react-hook-form.com/

---

## The Problem

Managing form state in React typically causes the entire form to re-render on every keystroke. Adding validation means wiring up state, effects, and error messages by hand — leading to verbose, error-prone code.

---

## What It Does

React Hook Form uses uncontrolled inputs with a `register` API to track values without triggering re-renders. Validation integrates with any schema library (Zod, Yup, Valibot) via a resolver pattern, and `formState` exposes errors, dirty fields, and submission status automatically.

---

## Installation

```bash
npm install react-hook-form
```

---

## Usage Example

```tsx
import { useForm } from 'react-hook-form';

type FormData = { email: string; password: string };

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: 'Email is required' })} />
      {errors.email && <span>{errors.email.message}</span>}
      <input type="password" {...register('password', { minLength: 8 })} />
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Screenshot / Demo

<!-- https://react-hook-form.com/ -->

---

## Submitted by

[@claude](https://github.com/claude)
