# @angular/cdk

> Angular Component Dev Kit — a set of behavior primitives for building accessible, high-quality UI components without prescribing any visual style.

**npm:** https://www.npmjs.com/package/@angular/cdk  
**GitHub:** https://github.com/angular/components  
**Docs:** https://material.angular.io/cdk/categories

---

## The Problem

Building custom UI components in Angular that work correctly — with keyboard navigation, focus management, accessibility (ARIA), drag-and-drop, virtual scrolling, and overlay positioning — requires an enormous amount of low-level wiring. Doing this by hand leads to inconsistent behavior, accessibility failures, and weeks of reinventing the wheel across projects.

---

## What It Does

The Angular CDK provides battle-tested, unstyled building blocks for common UI patterns: overlays and portals, drag-and-drop with sorting, virtual scroll for large lists, an accessibility module (FocusTrap, LiveAnnouncer), stepper, table, tree, and more. You bring the styles; CDK handles the hard behavioral logic so your custom components are correct from day one.

---

## Installation

```bash
npm install @angular/cdk
```

---

## Usage Example

```ts
// app.module.ts — enable drag-and-drop
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [DragDropModule],
})
export class AppModule {}

// task-list.component.ts
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  template: `
    <div cdkDropList (cdkDropListDropped)="drop($event)">
      <div *ngFor="let task of tasks" cdkDrag class="task-item">
        {{ task }}
      </div>
    </div>
  `,
  styles: [`.task-item { padding: 12px; border: 1px solid #ccc; cursor: move; }`]
})
export class TaskListComponent {
  tasks = ['Write tests', 'Review PR', 'Deploy to staging', 'Update docs'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@claude](https://github.com/claude)
