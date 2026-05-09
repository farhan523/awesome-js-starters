# Contributing to npm Hidden Gems

Thank you for sharing your discoveries! This guide walks you through submitting a package.

---

## Who Can Contribute?

Anyone who has **personally used** a package and found it genuinely useful. You don't need to be the package author — in fact, user-written submissions are preferred because they include honest, real-world context.

---

## Quality Requirements

To keep the catalog useful and trustworthy, submitted packages must meet these minimum thresholds:

- **Published on npm for at least 30 days** — we want packages with some real-world usage, not brand-new experiments
- **At least 500 weekly npm downloads OR 50+ GitHub stars** — this is a low bar by design, since we focus on hidden gems that most developers haven't discovered yet
- **Not deprecated or archived** — the package should be actively maintained or stable enough that it still works well
- **Not already listed** — search the `packages/` directory before submitting to avoid duplicates

If a similar package already exists in the catalog (e.g., another validation library), explain in your PR description what makes yours different or better for a specific use case.

> These thresholds aren't gatekeeping — they help ensure the package has minimum traction and won't disappear tomorrow.

---

## What Makes a Good Submission?

A great submission answers these questions for a developer who has never heard of the package:

- **What problem were you trying to solve?** Be specific. "I needed to send transactional emails" is better than "I needed email functionality."
- **Why was this hard before?** What alternatives did you try, and why did they fall short?
- **What does this package do differently?** One or two sentences.
- **How do you use it?** A minimal, working code snippet.
- **What does it look like?** Screenshot or gif if relevant (drag into your PR or link externally).

---

## Submission Steps

> **Prefer to let an AI agent do this for you?** See [.github/CONTRIBUTOR_AI_PROMPT.md](.github/CONTRIBUTOR_AI_PROMPT.md) — copy the prompt, swap in your package name, and paste it into Claude Code or your editor's agent.

1. **Fork** this repository
2. **Create a folder** at the correct path:
   ```
   packages/<category>/<package-name>/
   ```
   Categories: `react`, `angular`, `vue`, `node`, `express`, `fastify`, `general-js`

3. **Add a `README.md`** inside that folder using the template below
4. **Add any screenshots** inside the same folder (e.g., `screenshot.png`)
5. **Open a pull request** — the PR template will guide you through a checklist

---

## Package README Template

Copy this into your `packages/<category>/<package-name>/README.md`.

> **Important:** The `> ` blockquote on line 3 is **required** — our website's build system parses it to generate the package index. The `**npm:**`, `**GitHub:**`, and `**Docs:**` link fields are also parsed programmatically. Deviating from this template means your package won't appear correctly on the website.

```markdown
# <package-name>

> One-line description of what the package does.

**npm:** https://www.npmjs.com/package/<package-name>
**GitHub:** https://github.com/<org>/<repo>
**Docs:** <link to official docs>

---

## The Problem

<!-- What were you trying to do, and why was it painful without this package? -->

---

## What It Does

<!-- 2-3 sentences explaining the package's approach -->

---

## Installation

```bash
npm install <package-name>
```

---

## Usage Example

<!-- A real, minimal working snippet from your actual project (sanitized if needed) -->

```js
// your code here
```

---

## Screenshot / Demo

<!-- Optional but encouraged. Drag an image into your PR or paste a link -->

---

## Submitted by

<!-- Your GitHub username: @yourhandle -->
```

---

## Rules

- The package must be published on npm
- You must have **personally used** it (not just read about it)
- No packages that are abandoned (last publish > 3 years ago, no active maintainer), unless you explain why it still works well
- No self-promotion of packages you authored unless you also include honest caveats
- One package per pull request
- Keep code examples concise — if a full working example is large, link to a separate `examples/` file

---

## Updating an Existing Entry

If you have additional examples, a better screenshot, or a correction — open a PR with your changes and describe what you improved in the PR body.

---

## Questions?

Open a [GitHub Discussion](../../discussions) with the "Question" label.
