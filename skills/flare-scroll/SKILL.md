---
name: flare-scroll
version: 1.0.0
description: Implement and customize the Flare Scroll WebGL effect — a scroll-linked organic light-wave transition with a pointed central crest, soft overlapping colors, and editable palette.
license: MIT
---

# Flare Scroll — implementation skill

Use this skill when someone requests this specific animated wave transition, wants to customize its colors, or asks to reproduce the effect from the existing HTML playground.

## Source of truth

- Use `src/flare-scroll.js` as the renderer.
- Use `demo/index.html` for complete sticky layout, scrubbed timeline, copy transitions, settings UI, and responsive behavior.
- Use `flare-scroll-standalone.html` as a completely portable live demo.
- See `README.md` for documented API, controls and code examples.

## Correct implementation

1. Inspect the host page's existing layout, typography, navigation and design tokens. Never replace those when integrating this effect.
2. Mount one `<canvas aria-hidden="true">` inside a sticky, clipped section with explicit width and height.
3. Include `src/flare-scroll.js`; initialize `new FlareScroll(canvas, { colors, softness, crest })`.
4. Compute section-local scroll progress from the scroll track (`0..1`) and pass it to `flare.setProgress(progress)` on animation frames.
5. Keep the first frame solid dark. The original reference's blue glow begins only after scrolling starts.
6. Keep the central peak relatively defined while preserving *soft*, overlapping blue/pink/other color layers.
7. Keep copy and navigation in HTML, layered above the canvas. Animate them independently using the host project's typography.
8. Handle resize; support reduced-motion users; test desktop and mobile with actual intermediate frames.

## Color changes

**For any new primary hue**, change just `colors.accent`:

```js
const flare = new FlareScroll(canvas, {
  colors: { dark: '#000000', accent: '#ED5C9C', light: '#FFFFFF' },
  softness: 1.25,
  crest: 1.0
});
```

For custom dark/light surfaces, update the corresponding endpoints. For art-directed nine-color ramps, use `setPalette([...nineHexStops])`. Do not hardcode blue RGB values inside shader code.

## Quality checklist

- No visible glow on frame `0`.
- Correct reversible wave behavior on scroll up and down.
- Defined central crest, not a flat linear-gradient boundary.
- Color transitions remain soft; no hard stripes or abrupt switching.
- All palette controls and copied code reflect actual shader state.
- No horizontal overflow or hidden controls on narrow screens.
- No text is baked into the canvas; contrast and readability survive palette changes.
- No third-party animation packages are required.

## Attribution

This is an independently implemented motion effect based on a supplied reference video, not the reference site's original source. The demo interface follows Unslop-inspired craft guidance without including Unslop source code.
