# @swimlane/ngx-charts

> Declarative, D3-powered charting library for Angular — SVG charts as Angular components with animations and responsive support.

**npm:** https://www.npmjs.com/package/@swimlane/ngx-charts
**GitHub:** https://github.com/swimlane/ngx-charts
**Docs:** https://swimlane.gitbook.io/ngx-charts/

---

## The Problem

Integrating raw D3 with Angular conflicts with Angular's zone-based change detection and requires imperative DOM manipulation that bypasses the component model.

---

## What It Does

ngx-charts wraps D3 calculations in Angular components, so charts update reactively when your data changes. It provides bar, line, area, pie, bubble, heat map, and gauge charts — all fully declarative, animated, and responsive out of the box.

---

## Installation

```bash
npm install @swimlane/ngx-charts
```

---

## Usage Example

```typescript
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({ imports: [NgxChartsModule] })
export class AppModule {}
```

```html
<ngx-charts-bar-vertical
  [results]="salesData"
  [xAxisLabel]="'Month'"
  [yAxisLabel]="'Revenue'"
  [showXAxisLabel]="true"
  [showYAxisLabel]="true"
  [animations]="true">
</ngx-charts-bar-vertical>
```

---

## Screenshot / Demo

<!-- https://swimlane.gitbook.io/ngx-charts/ -->

---

## Submitted by

[@claude](https://github.com/claude)
