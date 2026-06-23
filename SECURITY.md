# Security Policy

## Reporting a Vulnerability
This is a personal portfolio site. To report a security issue, open a private
security advisory on this repository or email **ash@ashclements.dev**. I respond
within 72 hours.

## Dependency Vulnerability Posture
*Last assessed: 2026-06-23*

This is a statically / edge-rendered Next.js portfolio site: no user accounts, no
database, no user-submitted input, and no self-hosted Next.js server processing
untrusted requests. Dependabot findings are triaged against that deployment
context rather than treated as a raw count. Advisory existence is not the same as
exploitability in this deployment.

### Applied
- `npm audit fix` (non-breaking): resolved the directly patchable advisories (16 down to 8).

### Triaged and tracked
The remaining advisories require major-version bumps and are assessed as low
real-world risk for this deployment:

- **glob (high), CLI command injection via `-c/--cmd`:** a build/dev transitive
  dependency. The glob CLI is never invoked with untrusted input at runtime. Not
  exploitable here.
- **Next.js (high/moderate), server-side DoS / SSRF / cache-poisoning / image-optimizer:**
  these require a self-hosted Next server handling untrusted requests and specific
  features (Image Optimizer `remotePatterns`, middleware, i18n, WebSocket upgrades,
  RSC server actions). They do not apply to a static / edge-rendered portfolio.
  Tracked for resolution via a deliberate Next 15+ upgrade.
- **@anthropic-ai/sdk (moderate), filesystem Memory Tool path/permissions:** affects
  only the SDK's local-filesystem Memory Tool, which this site does not use.
- **gray-matter / js-yaml (moderate), YAML DoS:** parses only the author's own
  trusted MDX front-matter at build time, never untrusted input.

### Plan
- Next 15+ upgrade (with an MDX render-path migration so static export keeps working)
  to clear the framework-bound advisories. Build-gated: nothing ships that does not
  build clean.
- This file is updated as advisories are resolved.

Ash Clements
