# react-icons

> Include popular icon packs in your React project with simple ES6 imports.

**npm:** https://www.npmjs.com/package/react-icons
**GitHub:** https://github.com/react-icons/react-icons
**Docs:** https://react-icons.github.io/react-icons

---

## The Problem

Pulling icons from many different sets (Font Awesome, Material, Feather, etc.) usually means managing several dependencies, font files, or SVG sprites, and bundling far more icons than you actually render.

---

## What It Does

`react-icons` bundles dozens of icon packs behind a single dependency and exposes each icon as a tree-shakeable React component, so you import only the icons you use and style them like any other element.

---

## Installation

```bash
npm install react-icons
```

---

## Usage Example

```jsx
import { FaGithub } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

export default function Toolbar() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <FaGithub size={24} />
      <MdSettings size={24} color="#2563eb" />
    </div>
  );
}
```

---

## Submitted by

[@claude](https://github.com/claude)
