# Contributor AI Prompt

Want to contribute a package but prefer to let an AI coding agent (Claude Code, Cursor, etc.) do the file shuffling? Copy the prompt below, replace `<PACKAGE_NAME>` with the npm package you want to add, and paste it into your agent.

The prompt walks the agent through checking for duplicates, verifying the quality bar, picking the right category, creating the README from our template, validating it, and opening a PR.

> You still need to provide first-hand context (the problem you hit, alternatives you tried, your GitHub handle). The agent is told to ask you for those rather than make them up.

---

## The prompt

````markdown
# Contribute a package to awesome-js-starters

I want to contribute the npm package **<PACKAGE_NAME>** to the awesome-js-starters catalog. Walk through every step below in order. Stop and ask me only if something genuinely blocks you (e.g., the package fails the quality bar) — otherwise proceed autonomously.

## Step 1 — Read the contribution rules
Read `CONTRIBUTING.md` at the repo root. Note especially:
- The 7 valid categories: `react`, `angular`, `vue`, `node`, `express`, `fastify`, `general-js`
- Quality bar: published on npm ≥ 30 days, ≥ 500 weekly downloads OR ≥ 50 GitHub stars, not deprecated/archived
- The exact README template (the `> ` blockquote on line 3 and the `**npm:**` / `**GitHub:**` / `**Docs:**` link fields are parsed by the build system — do not deviate)

## Step 2 — Check the package isn't already listed
Run a case-insensitive search for the package name across `packages/`:
```
ls packages/*/  | grep -i "<PACKAGE_NAME>"
```
Also grep README contents:
```
grep -ril "<PACKAGE_NAME>" packages/
```
If a folder already exists at `packages/<category>/<PACKAGE_NAME>/`, **stop** and tell me — I'll decide whether to update the existing entry instead.

## Step 3 — Verify the package meets the quality bar
Fetch these URLs and confirm the thresholds:
- `https://registry.npmjs.org/<PACKAGE_NAME>` — confirm it exists, check the earliest version date is > 30 days ago, and that it isn't marked deprecated.
- `https://api.npmjs.org/downloads/point/last-week/<PACKAGE_NAME>` — confirm weekly downloads ≥ 500, OR fetch the GitHub repo and confirm ≥ 50 stars.
- Confirm the GitHub repo is not archived.

If any check fails, stop and report which one — don't proceed.

## Step 4 — Pick the correct category
Based on what the package is for:
- React-specific → `react`
- Angular-specific → `angular`
- Vue-specific → `vue`
- Express middleware → `express`
- Fastify plugin → `fastify`
- Node-only (no browser) → `node`
- Framework-agnostic JS → `general-js`

Tell me your choice and reasoning in one sentence before creating files.

## Step 5 — Create a branch
```
git checkout -b add-<PACKAGE_NAME>
```

## Step 6 — Create the package folder and README
Create `packages/<category>/<PACKAGE_NAME>/README.md` using **exactly** this template — keep the blockquote on line 3 and the three link fields verbatim:

```markdown
# <PACKAGE_NAME>

> One-line description of what the package does.

**npm:** https://www.npmjs.com/package/<PACKAGE_NAME>
**GitHub:** https://github.com/<org>/<repo>
**Docs:** <link to official docs>

---

## The Problem

<2–3 sentences on the concrete problem this solves>

---

## What It Does

<2–3 sentences on the package's approach>

---

## Installation

​```bash
npm install <PACKAGE_NAME>
​```

---

## Usage Example

​```js
// minimal working snippet
​```

---

## Submitted by

@<my-github-handle>
```

Ask me for the GitHub handle and any first-hand context (problem, alternatives tried) before filling in the prose sections — don't invent a personal story.

## Step 7 — Validate the README
Run the repo's validator and fix any errors it reports:
```
node scripts/validate-package-readme.js packages/<category>/<PACKAGE_NAME>/README.md
```

## Step 8 — Commit
```
git add packages/<category>/<PACKAGE_NAME>/
git commit -m "feat(packages): add <PACKAGE_NAME> to <category>"
```

## Step 9 — Push and open a PR
```
git push -u origin add-<PACKAGE_NAME>
gh pr create --title "Add <PACKAGE_NAME>" --body "<short summary covering: what the package does, why it qualifies (downloads/stars), category choice, and the personal use-case>"
```

Print the PR URL when done.

## Guardrails
- **One package per PR.** Don't bundle other changes.
- Don't edit files outside `packages/<category>/<PACKAGE_NAME>/`.
- Don't fabricate download numbers, star counts, or personal usage stories — ask me.
- Don't skip the validator step.
- If `gh` isn't authenticated, stop after the push and give me the compare URL.
````
