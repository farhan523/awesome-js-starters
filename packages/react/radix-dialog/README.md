# @radix-ui/react-dialog

> Fully accessible, unstyled dialog (modal) primitive for React — WAI-ARIA compliant with focus trapping, scroll locking, and composable parts.

**npm:** https://www.npmjs.com/package/@radix-ui/react-dialog
**GitHub:** https://github.com/radix-ui/primitives
**Docs:** https://www.radix-ui.com/primitives/docs/components/dialog

---

## The Problem

Building an accessible modal from scratch requires managing focus traps, `aria-modal`, scroll locking, portal rendering, and keyboard dismissal. Getting all of these right simultaneously is surprisingly complex.

---

## What It Does

Radix Dialog handles all accessibility concerns out of the box — focus is trapped inside, scroll is locked, `Escape` closes it, and all ARIA attributes are correct. You provide only the visual styling via your own CSS or Tailwind classes.

---

## Installation

```bash
npm install @radix-ui/react-dialog
```

---

## Usage Example

```tsx
import * as Dialog from '@radix-ui/react-dialog';

export function ConfirmDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Delete Account</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl">
          <Dialog.Title>Are you sure?</Dialog.Title>
          <Dialog.Description>This action cannot be undone.</Dialog.Description>
          <Dialog.Close asChild>
            <button>Cancel</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

---

## Screenshot / Demo

<!-- https://www.radix-ui.com/primitives/docs/components/dialog -->

---

## Submitted by

[@claude](https://github.com/claude)
