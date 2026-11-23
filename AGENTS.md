# Instructions for coding agents

This repository is a curated library of reusable vibecoding assets, not a product app.

## Before adding code

- Prefer a small self-contained snippet over installing dependencies.
- State purpose, required environment, usage, limitations and accessibility considerations.
- Do not claim a snippet was tested if it was not.
- No secrets, tokens, user data or copied proprietary design assets.
- Prefer descriptive names and files grouped by `skills/`, `snippets/`, `prompts/`, and `templates/`.

## For any interface work

- Read `skills/product-ui-craft/SKILL.md` when an interface is being created, recreated or polished.
- First distinguish exact reproduction from requested redesign.
- Preserve source design systems, typefaces, icons, spacing and assets.
- Prefer token consistency, semantic markup, accessibility and purposeful motion.
- Check mobile, desktop, states, dark/light theme when applicable.
- Respect `prefers-reduced-motion` and `accessibilityReduceMotion`.

## Repository quality

- Keep code copy-ready and provide a tiny usage example.
- Avoid adding frameworks just to demonstrate a CSS effect.
- Keep licensing and attribution for third-party work.
- Describe changes in a readable commit message.

## Product strategy and discovery

- Use skills/next-move-theory/SKILL.md and matching nmt-* workflows for segmentation, JTBD, product decisions and PRD work.
- Challenge the business goal and compare existing user Solutions before proposing additional features.
- Separate verified evidence, derivations and untested hypotheses. Propose falsifiable Riskiest Assumption Tests before building.
- For exact AJTBD methodology consult the public canon by Ivan Zamesin; do not substitute generic JTBD definitions.
- The NMT-derived skills are CC BY-NC-SA 4.0, not MIT.

## Liquid Metal Border effect

- When asked for the metallic/chromatic border from Anna's portfolio, first read `skills/liquid-metal-border/SKILL.md`, then copy `skills/liquid-metal-border/src/liquid-metal-border.css` rather than rebuilding a generic gradient.
- Use its HTML demo and implementation prompt. Preserve existing design and interactions, use `always` or `hover` mode, and verify reduced motion, keyboard focus and responsiveness.
- Do not confuse the rim with the separate WebGL/theme-wipe liquid metal transition.
