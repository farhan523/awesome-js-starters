# ngx-progressbar

> Slim progress bar for Angular — shows a loading indicator at the top of the page, inspired by YouTube and GitHub.

**npm:** https://www.npmjs.com/package/ngx-progressbar
**GitHub:** https://github.com/MurhafSousli/ngx-progressbar
**Docs:** https://murhafsousli.github.io/ngx-progressbar/

---

## The Problem

Showing a top progress bar during route navigations and HTTP requests in Angular requires interceptors, router event subscriptions, and careful start/stop coordination to avoid visual glitches.

---

## What It Does

ngx-progressbar provides a `<ng-progress>` component that animates smoothly across the top of the page. It integrates automatically with Angular's router and `HttpClient` via `NgProgressRouter` and `NgProgressHttp` modules, so it starts and stops with zero manual wiring.

---

## Installation

```bash
npm install ngx-progressbar
```

---

## Usage Example

```typescript
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressRouterModule } from 'ngx-progressbar/router';

@NgModule({
  imports: [
    NgProgressModule.withConfig({ color: '#29d', thick: true }),
    NgProgressRouterModule, // auto-starts on route changes
  ],
})
export class AppModule {}
```

```html
<!-- In your root component template -->
<ng-progress></ng-progress>
<router-outlet></router-outlet>
```

---

## Screenshot / Demo

<!-- https://murhafsousli.github.io/ngx-progressbar/ -->

---

## Submitted by

[@claude](https://github.com/claude)
