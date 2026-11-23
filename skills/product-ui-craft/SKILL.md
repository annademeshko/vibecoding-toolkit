---
name: product-ui-craft
description: Audit, reproduce, polish, or redesign product interfaces with deliberate visual craft and strict design-system fidelity. Apply to Figma, iOS/mobile apps, dashboards, websites, portfolios, UI kits and interactive prototypes. Prevent generic AI-looking UI while preserving requested references, brand identity, layout, product logic and accessibility. Trigger on UI/UX design, visual QA, Figma auto layout, exact visual reproduction, interface cleanup, responsive UI and motion polish.
license: CC-BY-4.0
metadata:
  author: Custom adaptation for product design workflows
  based_on: "Unslop by Damir Sokolovsky — https://github.com/heydamir/unslop"
  original_license: "Creative Commons Attribution 4.0 International"
---

# Product UI Craft

A design-review and execution skill adapted from **Unslop** by Damir Sokolovsky ([source](https://github.com/heydamir/unslop), CC BY 4.0). It adds faithful recreation, Figma auto layout, component systems, mobile/iOS, portfolio sites, accessibility, evidence-based UX and delivery QA.

## Mission

Make a product interface feel **designed for its particular product**, not auto-generated. Respect the user's intent over generic taste. Do not add decoration merely to make an interface interesting. Do not erase existing brand character, unusual intentional effects, or well-designed details.

## When to activate

Apply this skill for any design or editing request involving:
- Figma screens, flows, UI kits, components or design systems
- Web and mobile UI, iOS and responsive layouts
- Dashboards, data-heavy interfaces, B2B/B2C product surfaces
- Portfolio cases, landing pages, prototypes and motion
- “Make it less AI-looking,” “polish,” “clean up,” or “recreate exactly”

For a request that only asks for text, research, or code explanation without UI output, do not force a visual redesign.

## Non-negotiable priority order

1. **Explicit user instructions** — including “exactly like this,” “do not change,” target screens, effects, assets and design preferences.
2. **Supplied source, existing brand and design system** — use actual fonts, tokens, assets, components, and layouts.
3. **Platform guidelines and accessibility** — iOS HIG, web semantics, contrast, keyboard and touch interaction as appropriate.
4. **Product behavior and content** — preserve functionality, labels, information hierarchy and flow unless changes are requested.
5. **Unslop heuristics** — defaults, not universal bans. If the reference intentionally uses liquid metal, gradients, glass, bright color or heavy typography, preserve these while making execution coherent.

Never override a user's visual reference with this skill's personal aesthetic.

## Mode selection (do this before any edits)

| Mode | User intent | What to do |
|---|---|---|
| **Faithful reproduction** | “Pixel-perfect,” “точь-в-точь,” “как в Hinge/Revolut” | Match the supplied reference; preserve branding, hierarchy, layout, colors, type, content, icon treatment; correct implementation errors only. No speculative redesign. |
| **Constrained variation** | Compare option A/B, change chips instead of dropdowns | Duplicate the baseline and change only the requested dimension, holding all others constant. |
| **Polish** | Refine an existing good product UI | Identify specific inconsistencies, fix them minimally, preserve brand and structure. |
| **Unslop** | Remove AI-looking styling | Audit and run the ordered passes below; derive character from the product. |
| **Redesign** | New creative direction explicitly requested | Explore only requested scope; preserve real requirements, functionality and distinct brand assets. |
| **Audit-only** | Critique or check a flow | Report evidence-based issues and severity, do not silently edit. |

If the request is unambiguous, proceed. Ask only when a crucial source, file or decision is absent and the task cannot be completed responsibly. If the user says “just do it,” work without a design-direction approval gate.

## Execution protocol

### 0. Inspect first

- Inspect actual on-screen result: screenshot, Figma node, rendered web page, source code or attached media. Never infer a UI's visual quality from code alone when a rendered view is available.
- Identify target platform and viewport/device; current brand font(s), palette, density, icon set, components, tokens, grid, corner radii, responsive states and motion.
- When a screenshot is the only source, distinguish clearly between observable features and unknown implementation details.
- For Figma, inspect all requested screens and components before making a replacement. Look for existing instances and variables to reuse.
- For an exact copy, make a **reference inventory**: frame sizes, main groups, horizontal and vertical spacings, typography, asset shapes, colors, corner treatment, states, navigation, safe areas.

### 1. Audit the visible UI

Use `references/audit-rubric.md`. Write concrete problems with location + visual evidence + user impact + suggested fix. Separate:
- **Functional/UX problems** (unclear actions, poor state feedback, missing paths)
- **Craft problems** (spacing, alignment, hierarchy, color, icons, copy, motion)
- **Reference mismatches** (when faithful reproduction was requested)
- **Accessibility/platform issues**

Choose severity (blocker/major/minor). Not every vivid element is “slop.” A deliberately strong brand treatment is not a defect by itself.

### 2. Set direction (only for unslop/redesign)

Write five short lines: **Product** (purpose/audience), **Character** (2–3 specific qualities), **World** (relevant context/material), **Moments** (1–2 places for richness), **Signature** (one repeatable product-specific detail). Choose these from product evidence, not a stock moodboard.

For faithful reproduction or constrained variation, skip inventing a new direction; write instead: **Source → what stays constant → exactly what changes**.

### 3. Apply the passes in order

Work across the entire screen or requested scope in each pass before proceeding. When implementation makes multiple passes inseparable, check them in this order regardless.

1. **Spacing.** Establish a coherent 4-pt/px rhythm (adapt to platform and reference), grouping, consistent padding, aligned baselines and equal controls. Remove accidental one-off offsets. Do not flatten hierarchy for symmetry.
2. **Color.** Start from real brand tokens or product world. Keep surfaces legible, accents meaningful, semantic states clear and contrast sufficient. Remove accidental gradients/glows, not user-authorized brand effects.
3. **Icons.** Prefer real project assets; otherwise one coherent set, scale and optical weight. Maintain touch/click targets and alignment. Avoid emoji as substitute for UI icons unless explicitly part of the product.
4. **Copy.** Use short, concrete product language; real flows and plausible data. No generic growth hype, unsupported metrics or invented feature names. Preserve source copy on exact recreations.
5. **Typography.** Preserve brand fonts; define a clear and small scale, optical hierarchy, line-height, wrapping, numeric alignment, and language-aware typography. Avoid unnecessary heavy bold and all-caps labels when not brand-driven.
6. **Layout.** Compose for the actual viewport and information density. Ensure usable responsive variants, native platform patterns and preserved section order. On mobile, respect safe areas and interactive target sizes.
7. **Details.** Audit nested radii, borders, surfaces, dividers, affordances, variants, empty/loading/error/selected/disabled states, hover/focus, table density, chart meaning and component consistency.
8. **Visuals.** Favor true product content and supplied assets. Use illustrations/hero imagery when they improve comprehension or are requested; never use generic 3D blobs or fake UI filler by default.
9. **Motion.** Motion should explain navigation, selection, feedback or state change. Prefer transform/opacity, coherent easing and durations, reduce-motion alternatives and no gratuitous perpetual loops.

For precise mobile/Figma execution, read `references/figma-and-ios.md`. For websites and portfolios, read `references/web-and-brand.md`. For interactive motion, read `references/motion.md`.

### 4. Verify visually

- Compare **before, reference and after** at the same viewport and scale. If matching a reference, check every requested screen and interaction; do not rely on a single hero screenshot.
- Inspect cropped and full views at the target device, plus relevant responsive widths.
- Check actual rendered typography and line wraps, spacing, baseline alignment, icon geometry, interactive states and safe areas.
- Check dark/light themes where applicable. Check loading, empty, selected, pressed, disabled and error states where relevant.
- Inspect auto-layout nesting, resizing modes, constraints and component reuse in Figma.
- Validate real interactions where possible; no inert controls labeled as working.
- Do not declare “pixel perfect” if there are known mismatches or missing source assets.

### 5. Report precisely

Summarize **what changed**, **what stayed untouched**, **checks performed**, and **any limitations**. For exact clones, report residual mismatches. Distinguish created artifacts, proposed changes and changes actually applied/published.

## Extra guardrails

- **No aesthetic drift.** If a source's typography, icon family or palette is known, do not replace it with generic Inter/Lucide without permission.
- **No fake implementation claims.** Never claim that Figma, a website or a GitHub repository changed unless an available tool confirmed the change.
- **No invented requirements.** Do not add features, menus, badges, charts, stats or decorative illustrations to fill space.
- **No destructive changes.** Preserve editable components, source files and design system references; use variants/branches where appropriate.
- **No unrequested complexity.** Avoid gratuitous carousels, glass, neon, grain, floating cards, over-animated transitions and visual noise.
- **Do not erase personality.** Distinctive colors, liquid-metal effects, quirky illustration and editorial composition are valid when intentionally part of the brief.
- **Avoid overfitting defaults.** Original Unslop tokens are a starting point, not an imposed cross-product house style.
- **Not a substitute for usability research.** Label hypotheses as hypotheses; do not present inferred behavior as measured evidence.

## Output acceptance test

Before declaring an interface ready, answer all of these:

- Can a user identify the primary action and understand the current state?
- Does the screen have a product-specific point of view, without obvious AI decoration?
- Are style and behavior consistent with the user's reference and actual design system?
- Do alignment, spacing, type, icons and radii hold up at full resolution?
- Are tap targets, contrast, states and focus/keyboard support appropriate to the platform?
- Does every interaction work or have a clearly marked implementation limitation?
- Are Figma layers editable and auto-layout/constraints sensible, when applicable?
- Is motion purposeful and non-disruptive?
- Were only authorized changes made?

## Attribution

Adapted from **Unslop** by **Damir Sokolovsky**: https://github.com/heydamir/unslop (CC BY 4.0). This is a modified, independently organized derivative focused on product-design workflows, not an official release of the original skill. See `ATTRIBUTION.md`.
