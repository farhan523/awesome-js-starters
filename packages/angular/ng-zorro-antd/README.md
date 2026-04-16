# ng-zorro-antd

> Enterprise-grade UI component library for Angular based on Ant Design — 60+ production-ready components with a polished design system.

**npm:** https://www.npmjs.com/package/ng-zorro-antd
**GitHub:** https://github.com/NG-ZORRO/ng-zorro-antd
**Docs:** https://ng.ant.design/

---

## The Problem

Building enterprise-grade dashboards and admin panels requires a comprehensive component set — data tables, tree selectors, cascading menus, and form components — that most Angular UI libraries don't fully cover.

---

## What It Does

NG-ZORRO implements all Ant Design components for Angular, including complex ones like `nz-tree-select`, `nz-transfer`, `nz-timeline`, and `nz-cascader`. It supports both standalone components and module imports, custom theming via Less variables, and RTL layouts.

---

## Installation

```bash
ng add ng-zorro-antd
```

---

## Usage Example

```typescript
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({ imports: [NzTableModule, NzButtonModule] })
export class AppModule {}
```

```html
<nz-table [nzData]="users" nzBordered>
  <thead>
    <tr><th>Name</th><th>Email</th></tr>
  </thead>
  <tbody>
    <tr *ngFor="let user of users">
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
    </tr>
  </tbody>
</nz-table>
```

---

## Screenshot / Demo

<!-- https://ng.ant.design/components/overview/en -->

---

## Submitted by

[@claude](https://github.com/claude)
