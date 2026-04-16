# @tanstack/react-virtual

> Headless UI for virtualizing large lists and grids in React — render only what's visible to keep performance smooth regardless of dataset size.

**npm:** https://www.npmjs.com/package/@tanstack/react-virtual
**GitHub:** https://github.com/TanStack/virtual
**Docs:** https://tanstack.com/virtual/latest

---

## The Problem

Rendering thousands of rows in a table or items in a list causes massive DOM bloat, making pages sluggish and unresponsive. Windowing libraries often dictate fixed item heights and bring opinionated markup.

---

## What It Does

TanStack Virtual calculates which items are in the viewport and provides their sizes and offsets. You render only those items. It supports dynamic item sizes, horizontal and vertical scrolling, grid layouts, and works with any scroll container — no wrapper components required.

---

## Installation

```bash
npm install @tanstack/react-virtual
```

---

## Usage Example

```tsx
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

export function VirtualList({ items }: { items: string[] }) {
  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  return (
    <div ref={parentRef} style={{ height: 400, overflow: 'auto' }}>
      <div style={{ height: rowVirtualizer.getTotalSize() }}>
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{ position: 'absolute', top: virtualItem.start, height: virtualItem.size }}
          >
            {items[virtualItem.index]}
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Screenshot / Demo

<!-- https://tanstack.com/virtual/latest -->

---

## Submitted by

[@claude](https://github.com/claude)
