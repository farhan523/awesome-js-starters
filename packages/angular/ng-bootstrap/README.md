# @ng-bootstrap/ng-bootstrap

> Angular widgets built from scratch using Bootstrap CSS — no jQuery, no Popper.js, just pure Angular components.

**npm:** https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap
**GitHub:** https://github.com/ng-bootstrap/ng-bootstrap
**Docs:** https://ng-bootstrap.github.io/

---

## The Problem

Using Bootstrap with Angular means fighting jQuery's DOM manipulation model against Angular's change detection. `ngx-bootstrap` and similar ports often lag behind Bootstrap's CSS updates and have inconsistent Angular integration.

---

## What It Does

`@ng-bootstrap/ng-bootstrap` reimplements Bootstrap's interactive components (modals, tooltips, dropdowns, date pickers, etc.) as pure Angular components and directives. They use Bootstrap's CSS directly but are driven entirely by Angular, with full TypeScript support and no runtime DOM libraries.

---

## Installation

```bash
npm install @ng-bootstrap/ng-bootstrap bootstrap
```

---

## Usage Example

```typescript
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({ imports: [NgbModalModule] })
export class AppModule {}
```

```typescript
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({ template: `<button (click)="open()">Open Modal</button>` })
export class AppComponent {
  constructor(private modal: NgbModal) {}

  open() {
    this.modal.open(MyModalComponent);
  }
}
```

---

## Screenshot / Demo

<!-- https://ng-bootstrap.github.io/#/components/modal/examples -->

---

## Submitted by

[@claude](https://github.com/claude)
