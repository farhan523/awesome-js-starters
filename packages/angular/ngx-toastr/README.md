# ngx-toastr

> Simple, configurable toast notifications for Angular — show success, error, warning, and info messages with ease.

**npm:** https://www.npmjs.com/package/ngx-toastr
**GitHub:** https://github.com/scttcper/ngx-toastr
**Docs:** https://ngx-toastr.vercel.app/

---

## The Problem

Showing transient feedback messages (save confirmations, error alerts) in Angular requires either a shared service with complex state, or reaching for a UI library that brings far more than you need.

---

## What It Does

`ngx-toastr` provides a `ToastrService` you inject anywhere. Call `toastr.success()`, `toastr.error()`, or `toastr.warning()` and a styled notification appears in a configurable position. Toasts auto-dismiss, stack, and support click callbacks.

---

## Installation

```bash
npm install ngx-toastr
```

---

## Usage Example

```typescript
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right', timeOut: 3000 }),
  ],
})
export class AppModule {}
```

```typescript
import { ToastrService } from 'ngx-toastr';

@Component({...})
export class AppComponent {
  constructor(private toastr: ToastrService) {}

  save() {
    this.toastr.success('Changes saved!', 'Success');
  }
}
```

---

## Screenshot / Demo

<!-- https://ngx-toastr.vercel.app/ -->

---

## Submitted by

[@claude](https://github.com/claude)
