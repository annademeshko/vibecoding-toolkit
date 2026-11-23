# Prompt: integrate Flare Scroll into a website

Implement the **Flare Scroll** organic, scroll-driven transition using the existing reusable source at `skills/flare-scroll/src/flare-scroll.js`. The full working reference is `skills/flare-scroll/demo/index.html`.

Requirements:

1. Preserve the host site's existing typography, layout, navigation, responsive behavior and design tokens. Do not rebuild the page in a generic UI style.
2. The light must NOT be visible on the initial, unscrolled frame. The dark-to-light wave enters from below, with a visibly defined central crest. The second transition is an inverted, V-shaped wave.
3. Colors must be configurable without shader edits through `colors: { dark, accent, light }`; default blue is `#2E74E2`. Support arbitrary HEX accent hues, including pink `#ED5C9C`.
4. Keep `softness` and `crest` configurable; blend colors smoothly and eliminate visibly separated stripes.
5. Tie shader `progress` to the host section's local scroll timeline, allow reversing on scroll up, and preserve sticky scene layout.
6. Keep content as real accessible HTML above the canvas; use `aria-hidden="true"` on the decorative canvas, honor reduced-motion preferences and verify at mobile and desktop widths.
7. Do not install GSAP, Lenis, React or any other package unless the host project already needs it.
8. Show where to change the colors; include a screenshot or working browser view of at least one intermediate wave frame before handoff.

Acceptance: `progress=0` is solid dark; scroll reveals an organic, colorized wave; changing `accent` affects the entire gradient; returning to `progress=0` returns to the original dark frame.
