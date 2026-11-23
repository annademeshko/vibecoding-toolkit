# Figma and iOS execution

Use when creating or editing native Figma files, mobile app screens or iOS UI. Screen dimensions, system insets and component variants must come from the actual target device and current official platform guidance when available; never fabricate a precise current device spec.

## Figma structure

- Each screen: named root frame with meaningful hierarchy, correct device size and clipping.
- Use nested **Auto Layout** for every meaningful vertical/horizontal group, including title + description, list rows, text+icon, navigation items, buttons and sections.
- Prefer a small set of spacing tokens. Use Hug Contents for text-driven components, Fill Container for flexible content and Fixed only where size is intentionally fixed. Avoid absolute positioning for regular content flow.
- Preserve properly configured min/max constraints, text resizing and responsive width behavior.
- Reuse existing components and variants: buttons, input, tab/navigation, chips, cards, lists, overlays and states. Build new components only when the system lacks them.
- Preserve true typography styles, effects, paint/variables and components when sources are supplied. Never silently substitute a font or image.
- Name layers semantically; avoid `Frame 37 / Rectangle 22` in final deliveries when editable naming is practical.
- Keep a single source of truth for colors/typography/spacing wherever the file supports variables/styles.
- Avoid rasterizing screens intended to stay editable. A pasted screenshot is not a completed editable recreation.

## iOS platform checks

- Use device-specific canvas, layout margins and safe areas from the requested target (e.g., the exact iPhone model). **Do not assume all iPhones share a safe-area inset or points resolution.**
- Respect system status bar, Dynamic Island/cutout, home indicator and bottom system gesture area. Do not place primary interactions behind system affordances.
- Use native SF Symbols when appropriate to the brand and licensing context; match optical sizes and weights. Use the product's own icons where its system requires them.
- Touch targets: aim for **at least 44 × 44 pt** for tappable controls; visible glyphs may be smaller within the target.
- Support readable typography, proper truncation, long copy, localization and Dynamic Type where relevant.
- Check contrast and support accessible selection beyond color alone.
- Use clear screen titles and navigation patterns; sheets, tabs, toolbars and back behavior should match current iOS conventions unless the reference deliberately differs.
- Account for keyboard appearance, scrolling, sheet detents and bottom action visibility where the flow needs them.
- Check light/dark appearance separately, including assets, fills, shadows and icons.
- Preserve interactive affordances and component state when cloning a live iOS reference.

## Reference-faithful variants

To compare **baseline vs concept** (e.g., dropdowns vs chips):

1. Duplicate the *same* base screen to two side-by-side frames.
2. Keep all other content, widths, grid, typography, color, radii, image assets and navigation identical.
3. Modify only the requested pattern and the smallest necessary surrounding space.
4. State the trade-off: visibility of choices, number of choices, space cost, selection affordance and scalability.
5. If the components are interactive, provide variants/prototype links for each option and test layout under longer labels.

## Figma delivery checklist

- Editable native layers
- Nested auto layout for content groups
- Original DS/component/variable reuse
- Correct platform canvas and safe areas
- Coherent constraints and resizing
- Named variants and interaction states
- No text or icon overlaps
- Consistent optical baseline and padding
- Export only when requested
- Evidence of what was actually edited and a link to the final file when available
