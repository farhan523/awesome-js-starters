# rxjs

> Reactive Extensions for JavaScript — compose asynchronous and event-based programs using observable sequences.

**npm:** https://www.npmjs.com/package/rxjs
**GitHub:** https://github.com/ReactiveX/rxjs
**Docs:** https://rxjs.dev

---

## The Problem

Coordinating streams of asynchronous events — user input, websockets, timers, HTTP — with raw callbacks or promises leads to tangled state, race conditions, and manual cleanup that is hard to get right.

---

## What It Does

`rxjs` models async data as composable Observables and offers a rich set of operators (`map`, `filter`, `debounceTime`, `switchMap`, and many more) to transform, combine, and cancel streams declaratively. It underpins Angular and is widely used across the JS ecosystem.

---

## Installation

```bash
npm install rxjs
```

---

## Usage Example

```js
import { fromEvent } from "rxjs";
import { debounceTime, map } from "rxjs/operators";

const input = document.querySelector("#search");

fromEvent(input, "input")
  .pipe(
    debounceTime(300),
    map((e) => e.target.value)
  )
  .subscribe((value) => console.log("query:", value));
```

---

## Submitted by

[@claude](https://github.com/claude)
