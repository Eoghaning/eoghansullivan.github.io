# Bug Fixes

## Hover Effects Broken After Stagger Reveal

**Bug:** Project card hover effects (scale, tilt, lift) stopped working. Cards didn't lift/scale on hover.

**Root Cause:** `animation-fill-mode: forwards` keeps the animation's final keyframe values (`opacity: 1; transform: translateY(0)`) active forever after the animation ends. Because the animation cascade level overrides normal declarations (including `:hover`), the `.project-card:hover { transform: scale(1.03) ... }` had no effect — the animation's `transform` always won.

**Fix:**
1. Changed `animation-fill-mode` from `forwards` to `backwards` — the animation only controls values during its active period (including pre-fill during delay)
2. After the animation ends, the card falls back to its base state (`opacity: 1; transform: none`), which allows `:hover` to override `transform` normally via the CSS `transition`
3. Cards are visible by default (no opacity/transform on base state), so no flash when `visible` is removed

### Files Changed
- `src/pages/Projects/Projects.css`: `animation-fill-mode` changed from `forwards` to `backwards`, removed `opacity: 0; transform: translateY(20px)` from base `.project-card`

---

## Duplicate `.project-card:hover` Block in CSS

**Bug:** The `Projects.css` file had two identical `.project-card:hover` blocks, with the second one overriding the first. The first block (positioned between card base styles and the animation rules) was missing a `transition` property and had no visible effect, while the second block (at the bottom) actually applied. This made the CSS confusing and fragile.

**Fix:** Removed the duplicate block, keeping only one `.project-card:hover` with all hover effects and ensuring the base `.project-card` has `transition` set.

### Files Changed
- `src/pages/Projects/Projects.css`: Removed duplicate `.project-card:hover` block, added `transition` to base `.project-card`
