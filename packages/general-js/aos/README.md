# AOS

> An easy-to-use library that makes elements fade, slide, or zoom into view as the user scrolls down your page.

**npm:** https://www.npmjs.com/package/aos  
**GitHub:** https://github.com/michalsnik/aos  
**Docs:** https://michalsnik.github.io/aos/

---

## The Problem

Static websites can often feel flat and unengaging, yet adding professional-grade scroll animations usually requires writing complex, custom scripts that are difficult to maintain. Developing high-quality transitions like fades, slides, or zooms from scratch involves calculating scroll positions and managing CSS classes manually, which is a significant hurdle when you simply want your interface to feel more interactive without the technical headache.

---

## What It Does

AOS simplifies the animation process by handling the heavy lifting of scroll detection and CSS triggering for you. It solves the problem of complex scripting by allowing you to apply sophisticated entrance effects directly to your HTML elements via simple data attributes. Instead of writing custom JavaScript to track every movement, the library automatically animates your content as it enters the viewport, instantly transforming a static page into a dynamic, interactive experience with zero manual animation logic required.

---

## Installation

```bash
npm i aos
```

---

## Usage Example

Import the library to your page :

```js
import "aos/dist/aos.css";
import AOS from "aos";
```

Or import directly to your HTML page :

```html
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

Initialize the library :

```js
AOS.init();
```

Add the property to element(s) you want to animate :

```html
<div data-aos="fade-up"></div>
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@moefc32](https://github.com/moefc32)
