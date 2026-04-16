# @tanstack/react-table

> Headless, type-safe table and datagrid library for React — full control over markup and styles while the library handles sorting, filtering, pagination, and more.

**npm:** https://www.npmjs.com/package/@tanstack/react-table
**GitHub:** https://github.com/TanStack/table
**Docs:** https://tanstack.com/table/latest

---

## The Problem

Most table libraries ship with opinionated HTML and CSS, making it hard to match your design system. Building sorting, filtering, and pagination from scratch is tedious and bug-prone.

---

## What It Does

TanStack Table is 100% headless — it provides hooks that compute the table state and exposes row/column models, leaving all rendering to you. This means it works with any UI framework, CSS strategy, or virtualization layer without fighting the library's DOM output.

---

## Installation

```bash
npm install @tanstack/react-table
```

---

## Usage Example

```tsx
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

export function Table({ data }: { data: { name: string; age: number }[] }) {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <table>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

---

## Screenshot / Demo

<!-- https://tanstack.com/table/latest -->

---

## Submitted by

[@claude](https://github.com/claude)
