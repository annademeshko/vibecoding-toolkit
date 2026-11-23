# Original design and implementation notes

**Verified source:** [annademeshko.github.io](https://github.com/annademeshko/annademeshko.github.io), Nov 23, 2026.

- `en-theme-parity.css` and `en-bilingual-parity.css`: registered `--contact-metal-angle`, 16s `contact-metal-orbit`, chrome/spectrum gradients, contact dock and card hover.
- `contact-glass.css`: original masked CSS border beam and fallback; attribution comment references https://libraries.dev/beam.
- `index.html` and `ru/index.html`: contact dock HTML and case-card overlays.
- **Not part of this skill:** `theme-wave.css` / `theme-wave-gpu.js` / `script.js`, the completely different full-screen theme-change effect.

**Faithful extraction:** The 45° chrome ramp and full `--contact-metal-spectrum` color stops were taken from the source CSS. Orbit duration is 16s, border padding is 1.5px, hollow ring uses CSS mask-composite and pointer-events none.

**Portable adaptation:** CSS uses one `.liquid-metal-border` host instead of `html.standalone-english`, `.contact-dock-anchor`, `.contact-dock--glass` and `.portfolio-beam`. Animation is applied directly to the host (the registered angle still inherits). The 2 pseudo elements sit on top as a hollow ring rather than behind site-specific glass layers. The underlying glass, controls and site colors are not bundled.

The original site's shared CSS says its masked border beam concept was inspired by https://libraries.dev/beam. This extraction keeps that provenance and does not reproduce or include the Libraries.dev package.

**QA:** Test Chrome and Safari; older browsers fall back to 1px silver border. Hover variant must activate on keyboard focus. Respect `prefers-reduced-motion`. Avoid double rings on nested frames.