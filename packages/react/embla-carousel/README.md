# embla-carousel-react

> Lightweight, extensible carousel library for React — smooth scrolling, touch/mouse drag, and full CSS control without prescribing markup.

**npm:** https://www.npmjs.com/package/embla-carousel-react
**GitHub:** https://github.com/davidjerleke/embla-carousel
**Docs:** https://www.embla-carousel.com/

---

## The Problem

Most carousel libraries render their own DOM structure, inject global styles, and bundle animations that conflict with your design system. They are hard to integrate into accessible, responsive layouts.

---

## What It Does

Embla Carousel gives you a hook that attaches to your own scroll container. It handles touch/mouse/pointer drag, snapping, autoplay (via plugins), and infinite looping. The rendering is 100% yours — Embla only manages scroll behavior.

---

## Installation

```bash
npm install embla-carousel-react
```

---

## Usage Example

```tsx
import useEmblaCarousel from 'embla-carousel-react';

export function Carousel({ slides }: { slides: string[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((src, i) => (
          <div key={i} className="flex-[0_0_100%]">
            <img src={src} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Screenshot / Demo

<!-- https://www.embla-carousel.com/examples/ -->

---

## Submitted by

[@claude](https://github.com/claude)
