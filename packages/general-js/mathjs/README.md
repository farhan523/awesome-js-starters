# mathjs

> Extensive mathematics library for JavaScript and Node.js — expression parsing, symbolic algebra, matrix operations, units, and statistics.

**npm:** https://www.npmjs.com/package/mathjs
**GitHub:** https://github.com/josdejong/mathjs
**Docs:** https://mathjs.org/docs/

---

## The Problem

JavaScript's native Math object covers basic trigonometry but lacks fractions, complex numbers, matrix operations, unit conversions, expression parsing, and symbolic computation needed for scientific and financial applications.

---

## What It Does

Math.js evaluates mathematical expressions from strings (useful for formula builders and spreadsheet-like features), performs symbolic differentiation, handles fractions and complex numbers without floating-point loss, supports matrix/tensor operations, and converts between physical units.

---

## Installation

```bash
npm install mathjs
```

---

## Usage Example

```typescript
import { evaluate, derivative, unit, matrix } from 'mathjs';

// Evaluate expressions from user input
evaluate('sqrt(16) + 2^3');            // 12
evaluate('sin(pi / 4)');               // 0.7071...

// Symbolic differentiation
derivative('x^2 + 3*x', 'x').toString(); // '2 * x + 3'

// Unit conversion
unit('5 km').toNumber('mile');          // 3.107...

// Matrix operations
matrix([[1, 2], [3, 4]]);
evaluate('inv([1, 2; 3, 4])');
```

---

## Screenshot / Demo

<!-- https://mathjs.org/ -->

---

## Submitted by

[@claude](https://github.com/claude)
