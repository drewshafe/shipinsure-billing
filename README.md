# ShipInsure — Billing & Revenue Share explainer

Interactive click-through that walks a merchant through how ShipInsure billing works —
premium collection, the weekly invoice, claims/reimbursements, and how the merchant's
**revenue share** is factored in as a line-item credit on the same invoice.

**Live:** https://drewshafe.github.io/shipinsure-billing/

## ⚠️ How this deploys (read before editing)

GitHub Pages serves this repo from the **`docs/` folder**, so `docs/index.html` is the
**live page**. There are two implementations of the same content, and they must be kept in sync:

| File | Role |
| --- | --- |
| `src/App.tsx` | The React/Vite source of truth for the component. |
| `docs/index.html` | The page GitHub Pages actually serves. |

`docs/index.html` is currently a **self-contained, hand-authored port** of `App.tsx`
(vanilla JS + Tailwind via CDN) — **not** a Vite build output. It was authored this way
because the update was made in an environment without a Node toolchain, so `vite build`
could not be run. It renders the identical UI and content as the React source.

### If you edit the content

Update **both** files so they stay consistent:

1. Edit `src/App.tsx` (the source of truth).
2. Mirror the change into `docs/index.html`.

### If you have Node and want to go back to a built bundle

You can regenerate `docs/index.html` from `src/App.tsx` instead of hand-mirroring:

```bash
pnpm install
pnpm build                       # vite build -> dist/
npx html-inline dist/index.html -o docs/index.html   # inline JS/CSS into one file
```

> Note: running the build **overwrites** the hand-authored `docs/index.html` with the
> Vite output. That's fine — `src/App.tsx` already carries the current content, including
> the revenue-share step — but it does replace the standalone port with a React bundle.

## Local development

```bash
pnpm install
pnpm dev        # Vite dev server (edits src/App.tsx with HMR)
```

Or preview the deployed page directly with any static server:

```bash
python3 -m http.server 8763 --directory docs
```

## Tech

React + TypeScript + Vite + Tailwind, shadcn/ui primitives under `src/components/ui/`.
The deployed `docs/index.html` uses the Tailwind Play CDN so it needs no build step.
