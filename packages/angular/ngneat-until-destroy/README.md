# @ngneat/until-destroy

> Automatic RxJS subscription cleanup for Angular components — no more manual unsubscribe logic in ngOnDestroy.

**npm:** https://www.npmjs.com/package/@ngneat/until-destroy
**GitHub:** https://github.com/ngneat/until-destroy
**Docs:** https://github.com/ngneat/until-destroy

---

## The Problem

Every RxJS subscription in an Angular component must be explicitly unsubscribed in `ngOnDestroy`, or it leaks memory. Maintaining `Subscription` arrays or `Subject` subjects for this is verbose boilerplate that clutters every component.

---

## What It Does

The `@UntilDestroy()` decorator combined with the `untilDestroyed(this)` operator automatically completes all subscriptions when the component is destroyed — no `ngOnDestroy` method, no subscription tracking arrays required.

---

## Installation

```bash
npm install @ngneat/until-destroy
```

---

## Usage Example

```typescript
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { interval } from 'rxjs';

@UntilDestroy()
@Component({ selector: 'app-timer', template: '{{ count }}' })
export class TimerComponent implements OnInit {
  count = 0;

  ngOnInit() {
    interval(1000)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.count++);
    // Automatically unsubscribed when component is destroyed
  }
}
```

---

## Screenshot / Demo

<!-- https://github.com/ngneat/until-destroy -->

---

## Submitted by

[@claude](https://github.com/claude)
