# react-use

> A collection of useful React hooks for state, lifecycle, and browser APIs.

**npm:** https://www.npmjs.com/package/react-use
**GitHub:** https://github.com/streamich/react-use
**Docs:** https://github.com/streamich/react-use#readme

---

## The Problem

React projects often reimplement common hook patterns for things like debouncing, media queries, local storage, and document visibility, leading to duplicated code and subtle bugs.

---

## What It Does

`react-use` provides a large set of reusable hooks for browser APIs and common React behaviors, so you can compose features quickly without writing boilerplate logic for every component.

---

## Installation

```bash
npm install react-use
```

---

## Usage Example

```js
import { useLocalStorage, useMedia } from "react-use";

function Settings() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const isWide = useMedia("(min-width: 1024px)");

  return (
    <div>
      <p>Theme: {theme}</p>
      <p>Wide screen: {isWide ? "yes" : "no"}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >Toggle theme</button>
    </div>
  );
}
```

---

## Submitted by

@awaisoem
