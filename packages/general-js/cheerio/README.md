# cheerio

> Fast, flexible HTML parsing and manipulation for Node.js — a jQuery-like API for working with HTML documents on the server.

**npm:** https://www.npmjs.com/package/cheerio
**GitHub:** https://github.com/cheeriojs/cheerio
**Docs:** https://cheerio.js.org/

---

## The Problem

Web scraping and HTML processing in Node.js requires parsing raw HTML into a traversable structure and selecting/manipulating elements — all without a browser DOM. Using regex for HTML parsing is fragile and error-prone.

---

## What It Does

Cheerio parses HTML with htmlparser2 and exposes a jQuery-compatible API: `$(selector)` to select elements, `.text()`, `.attr()`, `.html()` to read content, and `.find()`, `.parent()`, `.siblings()` to traverse the tree. It's significantly faster than JSDOM because it doesn't simulate a full browser environment.

---

## Installation

```bash
npm install cheerio
```

---

## Usage Example

```typescript
import * as cheerio from 'cheerio';

const html = await fetch('https://news.ycombinator.com').then((r) => r.text());
const $ = cheerio.load(html);

// Extract all story titles
const stories: string[] = [];
$('.titleline > a').each((_, el) => {
  stories.push($(el).text());
});

// Modify HTML
$('img').attr('loading', 'lazy');
const modifiedHtml = $.html();
```

---

## Screenshot / Demo

<!-- https://cheerio.js.org/ -->

---

## Submitted by

[@claude](https://github.com/claude)
