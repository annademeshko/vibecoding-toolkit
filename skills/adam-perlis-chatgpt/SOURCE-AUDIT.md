# Source audit — Adam Perlis skills, 2026-11-23

Source: https://adamperlis.com/skills/  
Public marketplace: https://github.com/adamperlis/adam-plugins

This mapping records nine entries on the public skills page. The linked marketplace additionally contains skills that are not listed separately on that page. These adapters are independently written ChatGPT workflows, not byte-for-byte copies of upstream plugins.

| Public entry | Upstream | ChatGPT adaptation | Status |
|---|---|---|---|
| video-skills | https://github.com/adamperlis/video-skills | 12 individual skills (creator, feature, component, silent demo, tutorial, narrated film, brand film, Walkie voiceover, brand grid, video brand system, thumbnails, social hooks) | Native instructions; rendering depends on available tools |
| adam-plugins | https://github.com/adamperlis/adam-plugins | Marketplace unpacked by topic into core, motion, brand/character and video workflows | Distribution catalog, **not** a separate behavior to install |
| awwwards-motion | https://github.com/adamperlis/awwwards-motion | awwwards-motion | Native instruction; WebGL requires coding/browser runtime |
| frontend-design-director | https://github.com/adamperlis/frontend-design-director | frontend-design-director | Native instruction |
| design-constraints | https://github.com/adamperlis/design-constraints | design-constraints | Native instruction |
| seo-aeo-geo | https://github.com/adamperlis/claude-skill-seo-aeo-geo | seo-aeo-geo | Native instruction; live SEO needs web access |
| fullstack-coding | https://github.com/adamperlis/fullstack-coding-skill | fullstack-coding | Native instruction; repository tools required to change code |
| webflow-to-astro | https://github.com/adamperlis/claude-skill-webflow-to-astro-cloudflare | webflow-to-astro | Native instruction; real migration and DNS need tools and owner approval |
| walkie-mcp | https://github.com/adamperlis/walkie-mcp | walkie-voiceover fallback; original external connector **not bundled** | External app, Work plan or higher, supported MCP client + OAuth/local setup |
| omarchy-walkie | https://github.com/adamperlis/omarchy-walkie | Documentation only; not a ChatGPT skill | Omarchy/Arch Linux status-bar widget, not installable in ChatGPT |

## Additional skills found inside adam-plugins
- **ui-motion:** kinetic-inflated-hero, scroll-blur-manifesto, thermal-finger-trail — adapted as three separate skills.
- **companion-bot:** integration workflow only; original runtime and vendor assets must be sourced upstream.
- **gaia-brand:** distilled into brand-system-capture *method*; protected Gaia art, fonts, tokens and mark are **not** redistributed.
- **social-video:** functionality covered by the more recent video-skills/social-video-hooks; no duplicate skill name.
- Other marketplace entries overlap with the eight standalone workflows above.

## Design integrity & safety
- The project's design system and approved assets override defaults.
- Never claim a screenshot/video/shader was verified if it wasn't executed.
- No source trademarks, video footage, proprietary art, font files or binary components are copied.
- No claim that an MCP connection is installed merely because a skill file is present.
- The adapter text is originally authored; keep upstream licensing and credits when bringing in implementation code.

## Installation
- **ChatGPT:** open the [private plugin](https://chatgpt.com/plugins/plugins_6b046d93eb988191bf0f09ae2884cfe9) and use its skill list.
- **Codex:** copy `skills/adam-perlis-chatgpt/skills/*` into a recognized project or personal skills directory.
- **Other agents:** read the desired `SKILL.md` directly and map capabilities to tools actually present.
- No automatic synchronization between a GitHub commit and a previously created private plugin. Update both intentionally.
