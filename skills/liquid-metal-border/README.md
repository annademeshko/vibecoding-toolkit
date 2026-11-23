# Liquid Metal Border

**A reusable CSS/UI skill extracted from Anna Demeshko's actual portfolio.** Not a generic gradient BorderBeam.

![Static schematic preview of liquid metal border UI](assets/preview.svg)

**[Try the interactive demo](demo/index.html)** locally to see the real animation. The SVG is a schematic preview of the updated button + editorial card, **not a browser screenshot**. The interactive demo is the reference for actual visual behavior and animation. A PNG version of this schematic is also included in the downloadable package.

## The look

A thin, silver/graphite frame travels around a rounded component. A second optical layer produces narrow rainbow glints — violet, blue, cyan, green, gold, warm red — across **three short angular sections**; most of the ring remains metallic. The rotation takes **16 seconds**. The content underneath stays completely still.

The exact stop list and material structure were extracted from the portfolio's `en-theme-parity.css`, `en-bilingual-parity.css` and fallback `contact-glass.css`, and repackaged into a namespaced component.

## Modes

| Mode | Class names | Behavior | Original use |
|---|---|---|---|
| Always on | `liquid-metal-border` | Continuous slow 16s orbit | Contact dock |
| Hover / focus | `liquid-metal-border liquid-metal-border--hover` | Border appears and orbits on hover or keyboard focus | Case / concept cards |
| Still | `liquid-metal-border liquid-metal-border--still` | Material preserved, movement removed | Static cards or screenshots |

## Copy-paste quick start

Add one CSS file and one class — no npm packages and no JS for the border itself:

```html
<link rel="stylesheet" href="./src/liquid-metal-border.css" />

<nav class="liquid-metal-border contact-links" aria-label="Contact links">
  <a href="mailto:hello@example.com">Email</a>
  <a href="https://example.com">Website</a>
</nav>
```

For hover cards:

```html
<a class="liquid-metal-border liquid-metal-border--hover case-card" href="/case">
  <img src="/case-preview.webp" alt="Project cover" />
  <h2>Case study</h2>
</a>
```

Style your own `contact-links` / `case-card` normally; the effect does **not** control card background, typography, content, layout, glass or icons. It only adds a ring.

### Tuning

```css
.my-card {
  --lmb-radius: 20px;
  --lmb-thickness: 2px;
  --lmb-duration: 16s; /* original */
}
```

The available CSS variable names are intentionally namespaced. Other properties, like brightness or spectrum, should stay as shipped for exact visual matching. Changing them creates a new art direction rather than reproducing Anna's border.

## Using it with an AI coding assistant

Say:

> Apply the **Liquid Metal Border** skill to this card. Use the original chrome / prism border from my portfolio, no generic gradient glow. Keep the design unchanged, show it on hover and focus, and test mobile + reduced motion.

Or paste the full [implementation prompt](prompts/implement-liquid-metal-border.md). The agent should start with [SKILL.md](SKILL.md), then use [the CSS](src/liquid-metal-border.css) and [source notes](references/source-notes.md).

## UI demo / preview

Open `demo/index.html` directly in a browser (local file or static server) and switch between Dark, Light and Pink themes, and moving or still. The first demo is a single **Liquid Metal** button; the second is an editorial photo card showing the hover/focus ring. Hover the card or use Tab to inspect the focused state. The demo photo loads from Unsplash, so the browser needs an internet connection; the button and metal CSS work offline. For instance, from the root of this toolkit:

```bash
python3 -m http.server 8000
# open http://localhost:8000/skills/liquid-metal-border/demo/
```

The card photography is **Fer Troulik / Unsplash**: [Modern white building with curved walls and windows](https://unsplash.com/photos/modern-white-building-with-curved-walls-and-windows-PS1pwUMfCN0), released under the [Unsplash License](https://unsplash.com/license). No Unsplash photo binaries are bundled in this repository; the demo uses the photographer's hosted Unsplash image URL and includes a fallback background.

This folder also includes a **React/TSX wrapper** (`examples/react.tsx`) and **HTML integration** (`examples/html.html`). No build step is required for the HTML/CSS example.

## Constraints and QA

- Works best in current Chromium and Safari with CSS custom-property animation and mask compositing.
- The static silver `border` remains if compositing is not supported.
- Reduced motion preference disables rotation and preserves the decorative rim.
- Hover mode activates on `:hover`, `:focus-visible` and `:focus-within` for keyboard accessibility.
- If your element already owns `::before` or `::after`, use a dedicated wrapper: the border requires both pseudo-elements.
- Avoid double contours on nested cards; apply to a **single owner** of the radius.
- On the original website, the animation phase lives on a wrapper and pseudo elements live on an inner dock. This standalone version moves the inherited phase onto the host so it can be copied easily.
- The totally separate **Liquid Metal Theme Reveal** (View Transition / GPU page wipe) is not part of this skill.

## Source and licensing

- Original: https://github.com/annademeshko/annademeshko.github.io
- Primary source: [`en-theme-parity.css`](https://github.com/annademeshko/annademeshko.github.io/blob/main/en-theme-parity.css)
- Shared base: [`contact-glass.css`](https://github.com/annademeshko/annademeshko.github.io/blob/main/contact-glass.css)
- This is a refactoring of the account owner's own portfolio CSS, preserving the original metal color recipe and motion. See [full source notes](references/source-notes.md).
- Code and documentation for this independent extracted component are made available as part of Vibecoding Toolkit (MIT), subject to any separate third-party rights and credits in the source notes.
