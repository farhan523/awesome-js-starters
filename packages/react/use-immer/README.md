# use-immer

> Use Immer's immutable update model as a drop-in replacement for useState and useReducer — write mutations, get immutable state.

**npm:** https://www.npmjs.com/package/use-immer
**GitHub:** https://github.com/immerjs/use-immer
**Docs:** https://github.com/immerjs/use-immer

---

## The Problem

Updating nested state immutably in React requires spreading at every level, which becomes unwieldy for deeply nested objects or arrays. `useReducer` helps but still forces verbose spread chains.

---

## What It Does

`useImmer` works exactly like `useState` but lets you update state by directly mutating a draft object. Immer proxies the draft, tracks changes, and returns a new immutable state — so React sees the update correctly without any spreading.

---

## Installation

```bash
npm install immer use-immer
```

---

## Usage Example

```tsx
import { useImmer } from 'use-immer';

interface Profile {
  name: string;
  address: { city: string; zip: string };
}

export function ProfileEditor() {
  const [profile, updateProfile] = useImmer<Profile>({
    name: 'Alice',
    address: { city: 'Berlin', zip: '10115' },
  });

  return (
    <input
      value={profile.address.city}
      onChange={(e) =>
        updateProfile((draft) => {
          draft.address.city = e.target.value; // direct mutation!
        })
      }
    />
  );
}
```

---

## Screenshot / Demo

<!-- https://immerjs.github.io/immer/ -->

---

## Submitted by

[@claude](https://github.com/claude)
