# Marked

> A high-speed tool that takes text written in Markdown and instantly converts it into proper HTML for your website.

**npm:** https://www.npmjs.com/package/marked  
**GitHub:** https://github.com/markedjs/marked  
**Docs:** https://marked.js.org/

---

## The Problem

Displaying Markdown content as rendered HTML on a web page is often a complex task that requires writing intricate parsing logic or dealing with edge cases in text formatting. For developers who want to allow users to write in a simple, human-readable format, the technical hurdle of converting that input into valid, safe, and well-structured HTML can be a significant bottleneck if they have to build the transformation engine from scratch.

---

## What It Does

Marked solves this by serving as a high-speed, reliable compiler that handles the heavy lifting of text conversion for you. It eliminates the need for complicated custom code by providing a straightforward way to ingest Markdown and output proper HTML instantly. This allows you to integrate rich text features into your website with minimal effort, ensuring that your content remains easy to manage while the library handles all the technical nuances of rendering and performance.

---

## Installation

```bash
npm i marked
```

---

## Usage Example

Import the library and call the function to parse Markdown into HTML :

```js
import { marked } from "marked";

const html = marked.parse("# Marked in Node.js\n\nRendered by **marked**.");
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@moefc32](https://github.com/moefc32)
