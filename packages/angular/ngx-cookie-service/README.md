# ngx-cookie-service

> An injectable Angular service for reading, writing, and deleting browser cookies.

**npm:** https://www.npmjs.com/package/ngx-cookie-service
**GitHub:** https://github.com/stevermeister/ngx-cookie-service
**Docs:** https://github.com/stevermeister/ngx-cookie-service#readme

---

## The Problem

Angular has no built-in abstraction for cookies, so components end up touching `document.cookie` directly — which is awkward to parse, hard to test, and unsafe to use during server-side rendering.

---

## What It Does

`ngx-cookie-service` wraps cookie access in an injectable, tree-shakeable Angular service with `get`, `set`, `check`, and `delete` methods, keeping cookie logic out of your components and easy to mock in tests.

---

## Installation

```bash
npm install ngx-cookie-service
```

---

## Usage Example

```ts
import { Component, inject } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({ selector: "app-root", template: "<p>{{ theme }}</p>" })
export class AppComponent {
  private cookies = inject(CookieService);
  theme = this.cookies.get("theme") || "light";

  setDark() {
    this.cookies.set("theme", "dark", { path: "/" });
  }
}
```

---

## Submitted by

[@claude](https://github.com/claude)
