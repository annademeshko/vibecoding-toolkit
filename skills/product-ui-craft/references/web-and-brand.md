# Web apps, portfolios and brand fidelity

## Observe before changing

- Inspect the current deployed page and source/CSS when available. Record typography, design tokens, component conventions, color themes, responsive breakpoints and existing motion.
- Identify localization variants, e.g. RU/EN, and theme variants, e.g. dark/light. Changing one shared component may require tests in every variant.
- Prefer surgical edits to broad restyling when the user asks to fix a specific issue. Keep DOM semantics and accessible keyboard behavior.
- If the request is to clone a reference, compare at equivalent viewport widths and device pixel ratios. Use real assets whenever authorized and available.

## Product-centered composition

- Above the fold should communicate what is being shown and why, without generic hero theatrics.
- Use product imagery/previews and real work instead of fake abstract fills.
- Keep typography, navigation density and component spacing consistent with the product's current visual identity.
- Verify at narrow phone, tablet and desktop viewports. No horizontal overflow, clipped text, inaccessible hover-only action or cropped essential media.
- Support `prefers-reduced-motion` and preserve content readability during transitions.

## Intentional effects are allowed

Original Unslop warns against default gradients, glows and liquid chrome used as filler. This adaptation **does not forbid deliberate effects**. A liquid-metal border, refraction or depth scaling may be a brand signature when the user chose it. Audit implementation quality instead:

- Is it confined to the intended surface and purpose?
- Does it work in both themes without flashes, harsh clipping or inaccessible contrast?
- Does it preserve good performance on mobile?
- Is the static fallback coherent and are reduced-motion users supported?
- Does it align with existing buttons/controls across languages and states?

## Safer web execution

- Make the smallest patch that accomplishes the visual request.
- Check accessibility semantics and tap/keyboard interaction.
- For animation bugs, reproduce the moment of failure and inspect intermediate states, not just the final screenshot.
- Do not publish/commit without an explicit request and actual repository access.
- For changes involving shared CSS, test across themes, locales and breakpoints.
- Report files changed, results checked, and any remaining limitations without invented success claims.
