# @dnd-kit/core

> Modern, accessible drag-and-drop toolkit for React — fully customizable with keyboard support, collision detection, and zero dependencies.

**npm:** https://www.npmjs.com/package/@dnd-kit/core
**GitHub:** https://github.com/clauderic/dnd-kit
**Docs:** https://docs.dndkit.com/

---

## The Problem

Most drag-and-drop libraries are heavy, poorly accessible, and tightly coupled to DOM structure. Adding keyboard navigation or custom collision detection requires fighting the library's internals.

---

## What It Does

`@dnd-kit` provides composable primitives — `DndContext`, `useDraggable`, and `useDroppable` — that you wire up to your existing markup. It handles pointer, touch, and keyboard events out of the box, and lets you plug in any collision detection algorithm.

---

## Installation

```bash
npm install @dnd-kit/core @dnd-kit/sortable
```

---

## Usage Example

```tsx
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';

function SortableItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id });
  return (
    <div ref={setNodeRef} {...attributes} {...listeners}>
      {id}
    </div>
  );
}

export function SortableList({ items }: { items: string[] }) {
  return (
    <DndContext collisionDetection={closestCenter}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((id) => <SortableItem key={id} id={id} />)}
      </SortableContext>
    </DndContext>
  );
}
```

---

## Screenshot / Demo

<!-- https://docs.dndkit.com/ -->

---

## Submitted by

[@claude](https://github.com/claude)
