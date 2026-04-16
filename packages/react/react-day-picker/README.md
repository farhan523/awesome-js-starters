# react-day-picker

> Flexible, accessible date picker component for React — full customization of styles, locales, and selection modes.

**npm:** https://www.npmjs.com/package/react-day-picker
**GitHub:** https://github.com/gpbl/react-day-picker
**Docs:** https://react-day-picker.js.org/

---

## The Problem

Date pickers are notoriously hard to build accessibly. Most libraries ship heavyweight UI that clashes with your design, and supporting range selection, disabled dates, and localization requires significant custom code.

---

## What It Does

React Day Picker renders a fully accessible calendar with support for single dates, ranges, and multiple selection. It's unstyled by default with a clean CSS module you can override, and supports date-fns or Day.js for locale formatting.

---

## Installation

```bash
npm install react-day-picker
```

---

## Usage Example

```tsx
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export function DateSelector() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      disabled={{ before: new Date() }}
      showOutsideDays
    />
  );
}
```

---

## Screenshot / Demo

<!-- https://react-day-picker.js.org/ -->

---

## Submitted by

[@claude](https://github.com/claude)
