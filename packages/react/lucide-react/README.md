# lucide-react

> Beautiful, consistent open-source icon library for React — 1,500+ pixel-perfect SVG icons as individual tree-shakeable components.

**npm:** https://www.npmjs.com/package/lucide-react
**GitHub:** https://github.com/lucide-icons/lucide
**Docs:** https://lucide.dev/guide/packages/lucide-react

---

## The Problem

Icon libraries often ship as a single large bundle, bloating your JavaScript even when you only use a handful of icons. Custom SVGs require manual copy-pasting and lose consistency across your app.

---

## What It Does

Lucide-React exports each icon as an individual React component. Tree-shaking ensures only the icons you import end up in your bundle. All icons accept standard SVG props (`size`, `color`, `strokeWidth`) for consistent customization.

---

## Installation

```bash
npm install lucide-react
```

---

## Usage Example

```tsx
import { Search, Bell, Settings, ChevronRight } from 'lucide-react';

export function Toolbar() {
  return (
    <div className="flex gap-2">
      <Search size={20} className="text-gray-500" />
      <Bell size={20} strokeWidth={1.5} />
      <Settings size={20} color="blue" />
      <ChevronRight size={20} />
    </div>
  );
}
```

---

## Screenshot / Demo

<!-- https://lucide.dev/icons/ -->

---

## Submitted by

[@claude](https://github.com/claude)
