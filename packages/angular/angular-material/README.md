# @angular/material

> Official Material Design component library for Angular — 30+ accessible, themeable UI components built for Angular's ecosystem.

**npm:** https://www.npmjs.com/package/@angular/material
**GitHub:** https://github.com/angular/components
**Docs:** https://material.angular.io/

---

## The Problem

Building consistent, accessible UI components from scratch in Angular — buttons, dialogs, date pickers, data tables — requires significant effort and ARIA expertise. Third-party libraries often lag behind Angular's release cycle.

---

## What It Does

Angular Material provides production-ready components that integrate with Angular's CDK, Forms, and Router. Each component supports theming via CSS custom properties, conforms to WAI-ARIA, and ships with built-in animations. The schematic tooling generates components pre-configured with the correct module imports.

---

## Installation

```bash
ng add @angular/material
```

---

## Usage Example

```typescript
// app.module.ts
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({ imports: [MatButtonModule, MatDialogModule] })
export class AppModule {}
```

```html
<!-- component.html -->
<button mat-raised-button color="primary" (click)="openDialog()">
  Open Dialog
</button>
```

---

## Screenshot / Demo

<!-- https://material.angular.io/components/categories -->

---

## Submitted by

[@claude](https://github.com/claude)
