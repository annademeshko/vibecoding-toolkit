# UI craft audit rubric

Use only for issues that are visible or verifiable. Mark inferred issues as hypotheses.

## Severity

- **Blocker:** prevents essential use, breaks a critical user flow, severe accessibility failures, user-requested exact reproduction not recognizable.
- **Major:** notable hierarchy, state, readability or interaction problem; substantial source mismatch.
- **Minor:** polish, inconsistency, optical alignment, hover detail, small copy improvement.

For each issue record: `Location | What is wrong | Evidence | Why it matters | Specific fix | Severity`. Avoid generic judgments like “looks outdated.”

## Scan in this order

1. **Purpose:** Can users identify page/step, current state, next action and consequences?
2. **Structure:** Correct order, prominence, grouping and alignment; no nested panels without reason.
3. **Spacing:** Coherent spacing scale; optical adjustments measured; matched card/control heights when functionally equivalent.
4. **Type:** Brand font, line heights, legible scale, real hierarchy, controlled wrapping and tabular figures.
5. **Colors:** Brand integrity, surface hierarchy, semantic meaning, contrast, dark/light adaptability.
6. **Components:** Same function → same component; coherent radius, stroke, elevation, target size and icon size.
7. **States:** Selected, hover, focus, pressed, disabled, loading, empty, error and success visible and distinguishable.
8. **Content:** Source-faithful for clones; otherwise concrete and helpful, not generic or invented.
9. **Responsive/platform:** No overflow; safe area and navigation patterns; appropriate input affordances.
10. **Motion:** Is it meaningful and comfortable? No layout jitter, unwanted white flashes or continuous distraction.
11. **Slop patterns:** Gratuitous gradient/shimmer/glow, sparkle AI labels, emoji navigation, 3D decoration unrelated to content, indiscriminate pills, charts as ornaments, shouty “magic” copy.
12. **Template check:** Could the screen be from an arbitrary other product without any change? If yes, strengthen *real product* identity, not decoration.

## Reference-fidelity checklist

When a user requests exactness, compare the source and result side by side:

- Canvas/frame dimensions and device scale
- Safe-area insets and system chrome
- Major block coordinates and proportions
- Typography: face/weight/size/line height/tracking/wrapping
- Colors, gradients and actual image/icon assets
- Component states and content
- Gaps, padding, line alignments and card radii
- Navigation and flow transitions
- Dark/light appearance and responsiveness

Do not assert pixel-perfect matching unless these are checked and all visible mismatches are resolved or explicitly disclosed.
