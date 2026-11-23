# Interaction and motion craft

Motion is not a reward for having a GPU. Tie every animation to a user-facing state or spatial explanation.

## Design questions

- What state changed, and can the user understand the change without motion?
- What is the visual anchor between the before and after states?
- Is the effect an intentional brand signature or generic decorative motion?
- Does it work with keyboard, touch and reduced-motion settings?
- What happens if interrupted midway or activated twice quickly?

## Defaults — adapt to the existing app

- Hover/press: usually 120–180 ms.
- Menus/popovers: usually 160–240 ms.
- Screen/sheet transitions: usually 250–450 ms, depending on distance and platform.
- Prefer opacity and transforms over layout-property animation for performance.
- Avoid `transition: all` and bouncy/overshooting effects on routine controls.
- Do not animate a value or scale in a way that breaks focus order, touch location or reading order.
- Reduce motion rather than remove critical state feedback entirely where possible.

## Review actual intermediate frames

- Check initial, mid-transition and final states; glitches often live only in the in-between frame.
- Watch for transient white halos, background color leaks, texture/shadow mismatch, icon shifts, text flicker, clipping and unintentional layout changes.
- For a scroll-based gallery, verify center emphasis, side item behavior, easing, edge behavior and continuity of the scale function.
- For theme transitions, separate old/new surfaces as needed to avoid mismatched colors while blending; maintain stable layout through transition.
- For capture/export, verify that no essential content is cut off and that background is continuous.

## Accessibility & performance

- Use system reduced-motion preferences where supported.
- Test mobile and reduced power contexts when feasible.
- Do not animate width, height, top or left when transform/opacity can convey the same effect.
- Preserve clear focus indication and click/touch semantics throughout animation.
