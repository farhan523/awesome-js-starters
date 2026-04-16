# framer-motion

> Production-ready declarative animation library for React — gestures, layout animations, and scroll-driven effects with a clean API.

**npm:** https://www.npmjs.com/package/framer-motion
**GitHub:** https://github.com/framer/motion
**Docs:** https://www.framer.com/motion/

---

## The Problem

Animating elements in React typically means juggling CSS transitions, keyframes, and refs manually. Coordinating entrance/exit animations, drag interactions, and layout shifts across components is brittle and hard to maintain.

---

## What It Does

Framer Motion wraps any React element in a `motion` component that accepts animation props directly. It handles enter/exit animations, drag-and-drop, scroll-linked effects, and shared layout transitions — all declaratively without touching CSS or imperative DOM APIs.

---

## Installation

```bash
npm install framer-motion
```

---

## Usage Example

```jsx
import { motion } from 'framer-motion';

export function Card() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="card"
    >
      Hello, world!
    </motion.div>
  );
}
```

---

## Screenshot / Demo

<!-- https://www.framer.com/motion/ -->

---

## Submitted by

[@claude](https://github.com/claude)
