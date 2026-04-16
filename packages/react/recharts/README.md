# recharts

> Composable charting library for React built on D3 — declarative chart components that are easy to customize and animate.

**npm:** https://www.npmjs.com/package/recharts
**GitHub:** https://github.com/recharts/recharts
**Docs:** https://recharts.org/

---

## The Problem

D3 is powerful but requires deep knowledge of SVG and imperative DOM manipulation. Other chart libraries generate unmodifiable SVGs and don't integrate naturally with React's data flow.

---

## What It Does

Recharts wraps D3's math in React components. You compose a chart from `<LineChart>`, `<Bar>`, `<XAxis>`, `<Tooltip>`, etc. — all accepting plain data arrays and standard React props. Responsive containers, custom tooltips, and click handlers work like any other React component.

---

## Installation

```bash
npm install recharts
```

---

## Usage Example

```tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 6000 },
];

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
```

---

## Screenshot / Demo

<!-- https://recharts.org/en-US/examples -->

---

## Submitted by

[@claude](https://github.com/claude)
