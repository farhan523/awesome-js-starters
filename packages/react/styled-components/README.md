# styled-components

> Visual primitives for React — write actual CSS scoped to components using tagged template literals.

**npm:** https://www.npmjs.com/package/styled-components
**GitHub:** https://github.com/styled-components/styled-components
**Docs:** https://styled-components.com/docs

---

## The Problem

Global CSS class names collide, dead styles are hard to detect, and dynamically theming components based on props with plain stylesheets means juggling conditional class names everywhere.

---

## What It Does

`styled-components` lets you define styled React components with real CSS, automatically scoping class names and supporting prop-based and theme-based styling. Styles live next to the components that use them.

---

## Installation

```bash
npm install styled-components
```

---

## Usage Example

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.$primary ? "#2563eb" : "#e5e7eb")};
  color: ${(props) => (props.$primary ? "white" : "black")};
  padding: 8px 16px;
  border-radius: 6px;
`;

export default function App() {
  return <Button $primary>Save</Button>;
}
```

---

## Submitted by

[@claude](https://github.com/claude)
