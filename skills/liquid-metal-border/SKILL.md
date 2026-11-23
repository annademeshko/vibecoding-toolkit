---
name: liquid-metal-border
description: Reuse Anna Demeshko portfolio's precise Liquid Metal Border: thin silver/graphite chrome, short prismatic glints, 16-second orbit. Apply to contact docks, project cards, buttons, panels and other web UI when liquid metal chrome border is requested.
---

# Liquid Metal Border

Recreate the **actual liquid chrome border** from [Anna's portfolio](https://github.com/annademeshko/annademeshko.github.io), not a generic BorderBeam, neon glow or animated rainbow fill.

## Choose the variation
- **Persistent**: `liquid-metal-border` (like contact dock).
- **On hover / keyboard focus**: `liquid-metal-border liquid-metal-border--hover` (like portfolio cards).
- **Static**: `liquid-metal-border liquid-metal-border--still`.

## Steps
1. Read `references/source-notes.md` for fidelity, source and integration cautions.
2. Copy `src/liquid-metal-border.css` and add the relevant class to the existing host.
3. Leave content, padding, background, typography, radius and behavior as they were. The CSS supplies ONLY the rim.
4. Defaults: chrome + exact spectrum, 1.5px, 26px corner radius, 16-second linear orbit. Adjust `--lmb-radius` to the actual host; optionally `--lmb-thickness` and `--lmb-duration` if requested.
5. If host uses `::before` or `::after`, add a dedicated wrapper or overlay host. Never overwrite a pre-existing functional pseudo element.
6. Verify hover/focus, themes, mobile, mask support and reduced motion. Don't claim pixel-perfect unless visually compared.

## Nonnegotiables
- Mostly grayscale reflections with SHORT rainbow portions, no full-surface gradient or massive glow.
- Animate inherited typed CSS angle `--lmb-angle`, never the card or media.
- Use both masked pseudo-element layers and pointer-events:none.
- Keep accessibility and responsive semantics.
- Don't confuse this with the separate **Liquid Metal View Transition** in `theme-wave.css` and `theme-wave-gpu.js`.

## Files
- [CSS](src/liquid-metal-border.css) — actual source-derived implementation.
- [Demo](demo/index.html) — self-contained HTML UI study, theme and motion controls.
- [Prompt](prompts/implement-liquid-metal-border.md) — copy to any AI coding tool.
- [Source notes](references/source-notes.md) — original files and deltas.
- [Examples](examples/html.html), [React](examples/react.tsx) — integration.

Source of truth: [en-theme-parity.css](https://github.com/annademeshko/annademeshko.github.io/blob/main/en-theme-parity.css) and [contact-glass.css](https://github.com/annademeshko/annademeshko.github.io/blob/main/contact-glass.css).