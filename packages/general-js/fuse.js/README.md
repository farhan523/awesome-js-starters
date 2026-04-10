# Fuse.js

A "fuzzy search" tool that helps users find what they are looking for even if they make a typo or spell a word wrong.

**npm:** https://www.npmjs.com/package/fuse.js
**GitHub:** https://github.com/krisk/Fuse
**Docs:** https://www.fusejs.io/

---

## The Problem

Implementing an effective fuzzy search from scratch is a complex technical challenge that often feels out of reach for beginners, as it requires handling intricate string-matching algorithms and scoring logic. This difficulty is amplified when your data lives in a static JSON file rather than a database, leaving you without built-in search tools to manage approximate matches or typos. Beyond just making the search work, there is the ongoing struggle of maintaining a great developer experience—finding a solution that is easy to integrate and configure without turning your codebase into a mess of custom search functions.

---

## What It Does

Fuse.js provides a powerful, lightweight solution for approximate string matching without the need for a complex backend or custom algorithmic code. It solves the difficulty of manual implementation by offering a simple, intuitive API that works perfectly with local JSON data, allowing users to find what they need even with typos or misspellings. By focusing on a superior developer experience, it enables you to deploy professional-grade search functionality instantly, ensuring your application remains fast and user-friendly while keeping your development process clean and efficient.

---

## Installation

```bash
npm i fuse.js
```

---

## Usage Example

Import the library and define the search configuration :

```js
import Fuse from "fuse.js";

const books = [
  { title: "Old Man's War", author: "John Scalzi" },
  { title: "The Lock Artist", author: "Steve Hamilton" },
  { title: "JavaScript Patterns", author: "Stoyan Stefanov" },
];

const fuse = new Fuse(books, {
  keys: ["title", "author"],
  includeScore: true,
});

fuse.search("jon");
// [{ item: { title: "Old Man's War", author: "John Scalzi" }, refIndex: 0, score: 0.25 }]
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@moefc32](https://github.com/moefc32)
