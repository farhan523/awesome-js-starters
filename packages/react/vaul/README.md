# vaul

> Accessible, unstyled drawer component for React — a mobile-friendly bottom sheet built on Radix Dialog.

**npm:** https://www.npmjs.com/package/vaul
**GitHub:** https://github.com/emilkowalski/vaul
**Docs:** https://vaul.emilkowal.ski/

---

## The Problem

Bottom sheet / drawer UIs on mobile require handling touch gestures, snap points, velocity-based dismissal, and correct focus management. Building this from scratch is complex and accessibility is often an afterthought.

---

## What It Does

Vaul extends Radix UI's Dialog primitive with drawer-specific behavior: drag-to-dismiss, snap points, and smooth spring animations. It's completely unstyled, so you bring your own CSS while the library handles all the interaction logic.

---

## Installation

```bash
npm install vaul
```

---

## Usage Example

```tsx
import { Drawer } from 'vaul';

export function MyDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 rounded-t-2xl bg-white p-4">
          <Drawer.Title>Settings</Drawer.Title>
          <p>Your drawer content goes here.</p>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
```

---

## Screenshot / Demo

<!-- https://vaul.emilkowal.ski/ -->

---

## Submitted by

[@claude](https://github.com/claude)
