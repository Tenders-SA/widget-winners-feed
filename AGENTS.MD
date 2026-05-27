# @tenders-sa-org/widget-winners-feed — Agent Instructions

**Path**: `widgets/widget-winners-feed/` | **Published**: [npm](https://npmjs.com/package/@tenders-sa-org/widget-winners-feed)

## What It Is
Awarded tender announcements widget. No Shadow DOM, uses AbortController for cancellation and `prefers-color-scheme` for theme detection.

## Quick Start
```bash
npm install
npm run build     # tsup: esm + iife (global: TendersaWinnersFeed)
npm test          # vitest
npm version patch && npm publish   # manual publish
```

## Key Files
| File | Purpose |
|------|---------|
| `src/index.ts` | `WinnersFeedWidget` + auto-init via `[data-tendersa-winners-feed]` |
| `src/api.ts` | Fetches winners feed with AbortController support |
| `src/renderer.ts` | DOM renderer with CSS class names + `<style>` injection |
| `src/styles.ts` | CSS template strings |
| `src/types.ts` | `Award` interface |

## Architecture Notes
- **No Shadow DOM** — injects `<style id="twf-styles">` into `<head>`
- **AbortController** pattern for request cancellation
- **Theme detection**: `prefers-color-scheme: dark` media query fallback
- **CSS class-based theming**: `.twf-dark` toggle class
- Supports `data-theme` attribute

## Published
- v0.1.0 (initial)
