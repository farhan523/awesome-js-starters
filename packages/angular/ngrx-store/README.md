# @ngrx/store

> Reactive state management for Angular apps built on RxJS — a predictable, unidirectional data flow inspired by Redux.

**npm:** https://www.npmjs.com/package/@ngrx/store  
**GitHub:** https://github.com/ngrx/platform  
**Docs:** https://ngrx.io/guide/store

---

## The Problem

Managing shared state in large Angular apps quickly becomes a nightmare. Services holding mutable data lead to bugs where multiple components modify the same object concurrently, change detection runs unpredictably, and you lose the ability to time-travel debug or replay state transitions. As the app grows, it becomes impossible to trace where a state change originated.

---

## What It Does

`@ngrx/store` implements the Redux pattern for Angular using RxJS observables. State lives in a single immutable store; components dispatch typed `Actions`, pure `Reducer` functions compute the next state, and `Selectors` derive slices of state for templates. The result is a fully predictable, testable, and debuggable state layer — with DevTools support for inspecting every state transition.

---

## Installation

```bash
npm install @ngrx/store
```

---

## Usage Example

```ts
// counter.actions.ts
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

// counter.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1)
);

// app.module.ts
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

@NgModule({
  imports: [StoreModule.forRoot({ count: counterReducer })],
})
export class AppModule {}

// counter.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from './counter.actions';

@Component({
  selector: 'app-counter',
  template: `
    <div>Count: {{ count$ | async }}</div>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  `,
})
export class CounterComponent {
  count$ = this.store.select((state) => state.count);

  constructor(private store: Store<{ count: number }>) {}

  increment() { this.store.dispatch(increment()); }
  decrement() { this.store.dispatch(decrement()); }
}
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

[@claude](https://github.com/claude)
