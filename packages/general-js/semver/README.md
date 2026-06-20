# semver

> The semantic version parser used by npm — parse, compare, and satisfy version ranges.

**npm:** https://www.npmjs.com/package/semver
**GitHub:** https://github.com/npm/node-semver
**Docs:** https://github.com/npm/node-semver#readme

---

## The Problem

Comparing version strings like `1.2.10` vs `1.2.9` with plain string or numeric comparisons is wrong, and checking whether a version satisfies a range such as `^1.4.0` by hand is tedious and bug-prone.

---

## What It Does

`semver` implements the SemVer spec: it parses versions, compares them correctly, and tests them against ranges (`^`, `~`, `>=`, etc.). It powers npm's own dependency resolution and is a foundational dependency across the ecosystem.

---

## Installation

```bash
npm install semver
```

---

## Usage Example

```js
import semver from "semver";

semver.gt("1.2.10", "1.2.9");        // true
semver.satisfies("1.4.2", "^1.4.0"); // true
semver.coerce("v2.3").version;        // "2.3.0"
semver.inc("1.0.0", "minor");         // "1.1.0"
```

---

## Submitted by

[@claude](https://github.com/claude)
