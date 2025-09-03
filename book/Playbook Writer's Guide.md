# **Lead Buyer’s Playbook — Writer’s Guide**

Last updated: August 10, 2025

Purpose: Equip all contributors to write clear, accurate, and usable chapters for the Lead Buyer’s Playbook, aligned to the canonical outline in `2025-lead-buyer-summit/lead-buyers-playbook-outline-best.md`.

## 1\) Audience, Promise, and Outcomes

- **Primary readers**: hands-on lead buyers, performance marketers, revenue leaders, and RevOps.  
- **Reader intent**: ship pipeline this quarter; improve cost per opportunity; enforce compliance; operationalize vendor relationships.  
- **Book promise**: vendor-agnostic, compliance-aware tactics that measurably increase conversion and ROI while de-risking operations.

## 2\) Voice and Tone

- **Practitioner-first**: specific, stepwise, and field-tested. Prefer “do X → measure Y → decide Z.”  
- **Vendor-agnostic**: name categories, not brands, unless used as neutral examples with disclaimers.  
- **Compliance-aware**: treat TCPA/consent/privacy as first-class requirements, not afterthoughts.  
- **No hype**: avoid superlatives. Use precise benefits, guardrails, and conditions.  
- **Direct style**: second person (“you”), active voice, short sentences and paragraphs.

## 3\) Chapter Template (Mandatory)

Every chapter must follow this structure:

1. **Chapter Goal (2–3 sentences)**  
   - What the reader will achieve and how they’ll know.  
2. **Quick Wins (bulleted)**  
   - 3–5 actions that yield impact in ≤14 days.  
3. **Core Concepts (short subsections)**  
   - Definitions and decision criteria; include simple diagrams where helpful.  
4. **How-To (numbered steps)**  
   - Stepwise instructions with inputs/outputs and owner roles.  
5. **Checklist or Worksheet**  
   - Reference the artifact name and place a QR tag.  
6. **Metrics & Guardrails**  
   - KPIs, target ranges, monitoring cadence, and failure thresholds.  
7. **Pitfalls & Anti-Patterns**  
   - What commonly breaks and how to prevent/repair.  
8. **Case Interlude (optional, 0.5–1 page)**  
   - Short anonymized example with before/after metrics.  
9. **Instrument This**  
   - What to log, alert, and QA; specific fields or events.  
10. **Close (3–5 bullets)**  
- Action checklist and links to related chapters.

## 4\) Style and Formatting (Markdown)

- **Headings**: use `##` for chapter sections, `###` for subsections; no `#` inside chapters.  
- **Bullets**: prefer concise bullets over long prose; one idea per bullet.  
- **Tables**: use for comparisons (e.g., source types, cadence variants, contract levers).  
- **Callouts**: use bold lead-ins, e.g., **Pitfall**:, **Guardrail**:, **Tip**:.  
- **Numbers**: prefer ranges and qualitative descriptors; avoid time-sensitive figures that will stale.  
- **Screenshots/figures**: reference figure IDs and provide alt text; source files live in `/design`.  
- **Acronyms**: spell out on first use; add to Glossary when new.

## 5\) Claims, Evidence, and Examples

- **Evidence types (in order)**: primary telemetry, controlled tests, published research, reputable secondary sources.  
- **Cite inline**: “In a 12-week test (n=3,214 leads), reply rate increased 18–22% …”  
- **Anonymize**: no PII; replace names/brands with roles or categories unless permission is on file.  
- **No legal advice**: describe operational practices; reference counsel for interpretations.

## 6\) Compliance & Privacy Guardrails

- **Consent**: when describing outreach, specify the consent basis and how it’s captured, stored, and provable.  
- **TCPA**: flag autodialer and SMS considerations; always link back to the consent matrix artifact.  
- **Data minimization**: collect only what you use; justify each field in payload specs.  
- **Jurisdictions**: call out CCPA/GDPR/sector-specific requirements in vertical chapters.

## 7\) Artifacts, QR Assets, and Naming

All templates/checklists must exist as editable Google Docs/Sheets and be exportable to PDF.

- **Artifact naming**: `Artifact - <Concise Name> - v1` (e.g., `Artifact - Vendor Scorecard - v1`).  
- **Repository paths**:  
  - Manuscript chapters: `2025-lead-buyer-summit/manuscript/XX-<chapter-slug>.md`  
  - Artifacts (editable links \+ PDFs): `2025-lead-buyer-summit/artifacts/`  
  - Figures/diagrams (source \+ exports): `2025-lead-buyer-summit/design/`  
- **QR links**: place inline `[QR: Artifact - <Name>]` and list full links at chapter end under “Resources”.

## 8\) Figures and Visuals (Accessibility)

- **Clarity**: minimal ink, label directly, no decorative elements.  
- **Color**: ensure contrast; don’t rely on color alone to convey meaning.  
- **Alt text**: 1–2 sentences describing the figure’s message.  
- **Source files**: Figma/Excalidraw stored in `/design` with matching IDs.

## 9\) Cross-Referencing and Consistency

- **Canonical outline**: `lead-buyers-playbook-outline-best.md` governs scope and order.  
- **Cross-links**: refer to chapters by number and title (e.g., “see Chapter 11: Practical Lead Scoring”).  
- **Term consistency**: use the Glossary spellings; add new terms with definitions.

## 10\) Editorial Workflow

- **Drafting**: chapters written in the chapter template with artifact placeholders ready.  
- **SME review**: subject-matter expert verifies correctness and compliance callouts.  
- **Copy edit**: clarity, tone, consistency; enforce style rules.  
- **Finalization**: figures placed, QR links verified, checklist passes; file status set to Ready.  
- **Sprints**: draft by Part (2 weeks), interludes parallel; design (1 week); proof (1 week).

Roles

- Lead Editor: owns consistency and schedule  
- Section Editors: own Parts and integrate feedback  
- SMEs: validate correctness and compliance  
- Designer: figures, layout, QR codes

## 11\) Chapter Acceptance Checklist

Before marking a chapter Ready, confirm:

- Goal, Quick Wins, How-To, Metrics, Pitfalls, Instrumentation, Close are present.  
- At least one artifact (checklist/worksheet) exists and is linked via QR.  
- Metrics specify definitions, ranges, and review cadence.  
- Compliance/consent considerations are explicitly called out.  
- Figures (if any) have alt text and appear legible when printed.  
- Examples are anonymized and claims are evidenced.  
- Cross-references added where relevant and Glossary updated.

## 12\) Research & Data Hygiene

- **Lag-aware metrics**: specify windows (e.g., 7/30/90 days) when discussing ROI.  
- **Routing and dedupe**: when presenting performance, confirm no leakage artifacts.  
- **Holdouts**: indicate if tests used control groups; document decision logs.

## 13\) Vertical Playbooks Guidance

- Keep the common spine; highlight what changes vs what doesn’t.  
- Include industry-specific compliance flags and disclosures.  
- Provide cadence and channel mix tuned to vertical realities.

## 14\) Writing Conventions (Quick Reference)

- Use present tense, active voice.  
- Prefer “you/your team” over “we/our.”  
- Short paragraphs (≤5 lines) and lists over walls of text.  
- Spell out numbers zero–nine; numerals for 10+ and precise metrics.  
- Use UTC-neutral phrasing; avoid fragile, time-sensitive figures.

## 15\) Change Log

- Add a bullet here whenever the guide changes, with who/what/why.  
- 2025-08-10: Initial version created and aligned to best-of-best outline.

