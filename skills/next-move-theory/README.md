# Next Move Theory — Product Strategy Toolkit

**Decide what to build before you start vibe-coding.**

This folder documents a private ChatGPT adaptation of Ivan Zamesin's public Next Move Theory / Advanced Jobs To Be Done method, including Job-based segmentation, Value, alternative Solutions, Riskiest Assumption Tests, Theory of Constraints and unit-economics considerations.

## Workflows

| Skill | Use it when | Deliverable |
| --- | --- | --- |
| next-move-theory | You do not know where to start | Recommended next module and decision |
| nmt-chat | You need a product thinking partner | Critique and the next experiment |
| nmt-diagnose | Existing product has weak metrics | Root-cause candidates and prioritized risks |
| nmt-market-research | New idea or market question | Segment + Jobs, competition, validation verdict |
| nmt-analyze-interviews | You have actual interviews | Structured Jobs, confidence and evidence gaps |
| nmt-craft-value-proposition | Need differentiated customer value | Testable value proposition |
| nmt-product-requirements | Need a PRD | Challenge-the-build gate, requirements and edge cases |
| nmt-craft-go-to-market | Need positioning or launch | Landing, channel and demand-test messages |
| nmt-update | Want to sync with upstream | Source comparison and proposed changes |

## Recommended flow

New idea → Market and Core Jobs → Interviews → Value hypothesis → Risk test → PRD → Go-to-market → Learn.

Existing product → Diagnose goal and bottleneck → Pick next move → Test → Update product strategy.

## Examples

**Mood journal:** Which user Job does a two-tap daily mood check-in really solve? How could we validate it without implementing analytics first?

**Group trips:** Map the coordination Jobs of friends booking flights and identify the least expensive way to remove an unnecessary Job.

**Research analysis:** Analyze interview notes and show Core Jobs, current Solutions, ranked success criteria and respondent counts.

**Feature PRD:** Challenge whether a feature needs to exist before writing design and engineering requirements.

## Installation

**ChatGPT:** [Connect the private plugin](https://chatgpt.com/plugins/plugins_6b0465893afc81919b4360eaa8f52e3a). GitHub files alone do not activate a plugin.

**Codex:** Copy individual skill folders from the root skills/ directory into the target project's .agents/skills/ folder. For full original Codex workflow use the upstream repo and its canon.

**Claude Code:** Copy selected skill folders into .claude/skills/ or use the original author's native installer.

## Limits and license

The plugin is a compact, source-attributed independent adaptation, **not an official Zamesin release** and not the full paid methodology. Consult the canonical original for methodological precision. The source snapshot is pinned to commit f8e87d10255b48d381ebc7fa65172960eb6d483f.

Original author: **Ivan Zamesin**. Source: https://github.com/zamesin/Next-Move-Theory-Canon-and-Skills. **License:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/), not root MIT. See [ATTRIBUTION.md](ATTRIBUTION.md).