# ngx-spinner

> Highly configurable loading spinner overlay for Angular — 50+ animation types, full-screen or component-level, with service-driven control.

**npm:** https://www.npmjs.com/package/ngx-spinner
**GitHub:** https://github.com/Napster2210/ngx-spinner
**Docs:** https://napster2210.github.io/ngx-spinner/

---

## The Problem

Adding a loading overlay to an Angular app requires building a dismissible overlay component, a shared service, and wiring it to async operations — all for something that appears in nearly every production app.

---

## What It Does

`NgxSpinnerService` exposes `show()` and `hide()` methods you call before and after async operations. The `<ngx-spinner>` component renders the overlay with your chosen animation type and color. Multiple named spinners allow independent loading states on the same page.

---

## Installation

```bash
npm install ngx-spinner
```

---

## Usage Example

```typescript
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@NgModule({ imports: [NgxSpinnerModule] })
export class AppModule {}

@Component({ template: `<ngx-spinner type="ball-spin" color="#fff"></ngx-spinner>` })
export class DataComponent {
  constructor(private spinner: NgxSpinnerService, private api: ApiService) {}

  async loadData() {
    this.spinner.show();
    try {
      this.data = await this.api.fetch();
    } finally {
      this.spinner.hide();
    }
  }
}
```

---

## Screenshot / Demo

<!-- https://napster2210.github.io/ngx-spinner/ -->

---

## Submitted by

[@claude](https://github.com/claude)
