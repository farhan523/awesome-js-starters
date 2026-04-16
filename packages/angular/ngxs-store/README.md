# @ngxs/store

> State management library for Angular inspired by Redux and CQRS — simpler than NgRx with less boilerplate while maintaining predictability.

**npm:** https://www.npmjs.com/package/@ngxs/store
**GitHub:** https://github.com/ngxs/store
**Docs:** https://www.ngxs.io/

---

## The Problem

NgRx is powerful but requires actions, reducers, selectors, and effects as separate files for every feature. For small-to-medium apps this ceremony slows development without proportional benefit.

---

## What It Does

NGXS uses decorator-based state classes where actions are simple TypeScript classes and state mutations are methods on the state class. `@Select()` decorators derive observables from state, and the `Store` service dispatches actions — all with strong TypeScript typing and a fraction of the NgRx boilerplate.

---

## Installation

```bash
npm install @ngxs/store
```

---

## Usage Example

```typescript
import { State, Action, StateContext, Selector } from '@ngxs/store';

export class AddTodo { static readonly type = '[Todo] Add'; constructor(public text: string) {} }

@State<string[]>({ name: 'todos', defaults: [] })
@Injectable()
export class TodoState {
  @Selector() static todos(state: string[]) { return state; }

  @Action(AddTodo)
  add(ctx: StateContext<string[]>, action: AddTodo) {
    ctx.setState([...ctx.getState(), action.text]);
  }
}
```

---

## Screenshot / Demo

<!-- https://www.ngxs.io/ -->

---

## Submitted by

[@claude](https://github.com/claude)
