# react-wrap-balancer

> Balanced text wrapping for React — prevent awkward single-word last lines in headings and short copy blocks.

**npm:** https://www.npmjs.com/package/react-wrap-balancer
**GitHub:** https://github.com/shuding/react-wrap-balancer
**Docs:** https://react-wrap-balancer.vercel.app/

---

## The Problem

Long headings often wrap leaving a single word dangling on the last line, which looks unprofessional. CSS `text-wrap: balance` helps but browser support is inconsistent, and it doesn't work for all layout scenarios.

---

## What It Does

`<Balancer>` wraps any text element and uses a tiny binary-search algorithm to reduce the width of the text until the last line is as wide as possible — eliminating awkward orphans. The script is < 1KB and only runs after hydration.

---

## Installation

```bash
npm install react-wrap-balancer
```

---

## Usage Example

```tsx
import Balancer from 'react-wrap-balancer';

export function Hero() {
  return (
    <section>
      <h1>
        <Balancer>
          The Quick Brown Fox Jumps Over the Lazy Dog Near the River
        </Balancer>
      </h1>
      <p>
        <Balancer ratio={0.5}>
          This subheading also benefits from balanced wrapping on smaller screens.
        </Balancer>
      </p>
    </section>
  );
}
```

---

## Screenshot / Demo

<!-- https://react-wrap-balancer.vercel.app/ -->

---

## Submitted by

[@claude](https://github.com/claude)
