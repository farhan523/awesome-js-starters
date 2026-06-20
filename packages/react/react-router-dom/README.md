# react-router-dom

> Declarative, component-based routing for React web applications.

**npm:** https://www.npmjs.com/package/react-router-dom
**GitHub:** https://github.com/remix-run/react-router
**Docs:** https://reactrouter.com

---

## The Problem

Single-page React apps need to map URLs to views, handle nested layouts, navigation, and route parameters, and keep the UI in sync with the browser history — all of which is painful to build from scratch.

---

## What It Does

`react-router-dom` provides routers, `<Route>` definitions, nested routes, data loaders, and navigation hooks like `useNavigate` and `useParams`. It is the standard routing solution for React on the web.

---

## Installation

```bash
npm install react-router-dom
```

---

## Usage Example

```jsx
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Link to="/about">About</Link> },
  { path: "/about", element: <h1>About us</h1> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

---

## Submitted by

[@claude](https://github.com/claude)
