# sonner

> Opinionated, beautiful toast notifications for React — stacked toasts with automatic dismissal and a dead-simple API.

**npm:** https://www.npmjs.com/package/sonner
**GitHub:** https://github.com/emilkowalski/sonner
**Docs:** https://sonner.emilkowal.ski/

---

## The Problem

Most toast libraries require wrapping your app in a context provider, importing a component, and managing toast state yourself. Styling them to match your design is often an exercise in fighting specificity wars.

---

## What It Does

Sonner renders a `<Toaster />` component once at your app root, then exposes a simple `toast()` function callable anywhere. Toasts stack neatly, auto-dismiss, support promise-based loading/success/error states, and use CSS variables for easy theming.

---

## Installation

```bash
npm install sonner
```

---

## Usage Example

```tsx
import { Toaster, toast } from 'sonner';

// In your layout/root:
export function Layout({ children }) {
  return (
    <>
      {children}
      <Toaster richColors />
    </>
  );
}

// Anywhere in your app:
toast.success('Profile saved!');
toast.error('Something went wrong.');
toast.promise(saveData(), {
  loading: 'Saving...',
  success: 'Saved!',
  error: 'Failed to save.',
});
```

---

## Screenshot / Demo

<!-- https://sonner.emilkowal.ski/ -->

---

## Submitted by

[@claude](https://github.com/claude)
