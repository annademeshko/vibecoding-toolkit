# Agent prompt — exact Liquid Metal Border

Read `skills/liquid-metal-border/SKILL.md`, `src/liquid-metal-border.css`, and `references/source-notes.md`.

Implement Anna Demeshko's **existing Liquid Metal Border** on [TARGET ELEMENT], not a generic BorderBeam or neon glow.

**Look:** mostly silver/graphite 1.5px chrome ring, with THREE short moving prismatic spectral zones (blue/violet/cyan/green/gold/red), exactly the production CSS gradients. Continuous 16s linear orbit via registered/inherited `--lmb-angle`. Use the two masked pseudo elements, not a gradient background inside the card.

**Mode:** [ALWAYS / HOVER + FOCUS / STILL].
**Constraints:** Preserve the current component size, padding, radius, layout, typography, media, behavior and themes; no extra glows, no rebranding. Ring must not block pointer events and should stop animating for reduced motion.
**QA:** Compare desktop/mobile, light/dark/pink, focus/hover, 16s speed, thickness and chromatic streaks with `demo/index.html`.

Deliver the exact code changes and a report of what was / wasn't touched.