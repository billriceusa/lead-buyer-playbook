# Chapter 12: CRM and RevOps That Don't Leak

Twelve weeks after TechFlow cut its sales cycle by 43%, Sarah turned to the invisible problem that quietly taxes every lead buying program: leakage. Leads that never make it into the CRM. Leads that duplicate and fragment history. Leads that route to the wrong person or at the wrong time. Automations that fail silently. Reports that look fine but mask process gaps. All of it erodes ROI without leaving obvious fingerprints.

"We don't have a lead volume problem," Sarah told the RevOps and sales leadership team. "We have a plumbing problem. Every leak between intake and disposition reduces velocity, conversion, and trust. We need a CRM and RevOps stack that doesn't leak—ever."

This chapter is the blueprint TechFlow used to build leak-proof systems: clean data in, exact routing, enforced SLAs, seller workflows that create consistent outcomes, audit logs that stand up to compliance scrutiny, and reporting that changes behavior rather than admiring the problem. It connects directly to the work from earlier chapters—data and validation (see Chapter 5), speed-to-lead (see Chapter 8), contact rate (see Chapter 7), trust-building (see Chapter 10), and sales cycle acceleration (see Chapter 11)—by making sure those gains persist in the CRM where outcomes are decided.

## What “Leakage” Really Means

Sarah defined leakage as any gap where the system loses information, ownership, time, or accountability:

- Intake leakage: Leads fail to create a record, required fields are missing, or consent is not captured.
- Identity leakage: Duplicates split history across contacts, accounts, and opportunities.
- Routing leakage: Leads sit unowned; capacity caps are ignored; after-hours assignments go stale.
- SLA leakage: Time-to-first-touch and follow-up cadences are not enforced or measured.
- Workflow leakage: Reps work from email or spreadsheets instead of a unified queue; tasks are optional.
- Attribution leakage: Source, vendor, campaign, creative, and consent trail are incomplete or overwritten.
- Compliance leakage: DNC/STOP signals are missed; revocation is not propagated; audit trails are incomplete.
- Reporting leakage: Dashboards aggregate away the exceptions; managers can’t see which rule broke.

The fix isn’t a single tool. It’s a set of interlocking systems that prevent, detect, and correct issues before they impact revenue or risk posture.

## The Five Systems of a No‑Leak RevOps Stack

### System 1: Data Integrity and Hygiene

Objective: Ensure every record is created, standardized, deduped, and enriched with an immutable consent and source trail.

- Intake validation at the edge: Required fields, format checks, consent language IDs, timestamp, IP, user agent.
- Standardization: Name casing, address normalization, phone and email canonicalization, timezone derivation.
- Enrichment: Carrier type, line type, email risk, geographic metadata; store vendor and creative IDs.
- Dedupe and merge: Deterministic keys (email, E.164 phone) plus fuzzy rules (name + address + domain). Preserve a golden record with merged provenance.
- Consent registry: Immutable log with versioned disclosure text, hash of form HTML, and storage of evidence.
- Field dictionary: Define every field’s owner, allowed values, write rules, and lifecycle.

Alignment: Extends Chapter 5’s validation by enforcing it inside the CRM and making consent/audit data first‑class.

### System 2: Routing, SLAs, and Capacity Management

Objective: Assign the right lead to the right seller at the right time, with guaranteed first‑touch windows and follow‑up cadences.

- Routing matrix: Skill, license, geography, product, language, and schedule rules; include seniority/priority lanes for high‑intent (see Chapter 11).
- Capacity caps: Real‑time active‑lead limits per rep; overflow to bench or queue.
- Time windows: Working hours, holidays, and dark hours; off‑hours goes to on‑demand team or delayed release with timer.
- SLA timers: Start at record creation; pause on customer‑driven waits; auto‑escalate if breached.
- Fallback and retries: If assignment fails or rep is at capacity, re‑route in seconds with reason codes.
- Instrumentation: Every routing decision logs input attributes, rule versions, and outcomes.

Alignment: Operationalizes Chapter 8’s speed‑to‑lead and Chapter 7’s contact rate formula inside the CRM.

### System 3: Seller Workflows and Automation QA

Objective: Replace ad‑hoc rep behavior with a unified, prioritized work queue and atomic dispositions that drive automation.

- Unified work queue: All outreach tasks land in one prioritized view; reps do not hunt for records.
- Atomic dispositions: Single‑purpose outcomes like “Left Voicemail,” “Spoke—Not Qualified,” “No Answer,” “Do Not Call,” each with next‑step automation.
- Cadence engine: Day 0-3 intensive touch pattern, then day 7/14/30 checkpoints; adapts to buyer signals (see Chapter 10).
- Automation QA harness: Nightly test records traverse routing, cadence, and compliance flows; failures create incidents.
- Playbooks by intent: High‑intent shortcuts to proposals; low‑intent long‑cycle nurture (see Chapter 11).
- Shadow IT control: Email and SMS must sync to the CRM; prohibit off‑platform communication for first 30 days.

Alignment: Converts frameworks from Chapters 7, 8, 10, and 11 into repeatable daily execution.

### System 4: Governance, Audit Logs, and Compliance

Objective: Make every action observable, defensible, and reversible where needed.

- Audit log schema: Who did what, to which record, when, via which surface, with before/after values.
- Consent lifecycle: Collection, updates, revocation; propagate STOP/DNC to all channels within minutes.
- Role‑based access: Write protection on source fields; restricted editing of consent and attribution.
- Legal and QA review: Weekly audits of random samples with evidence attachments; red‑team consent verification.
- Data retention: Policies by field category; deletion workflows with immutable stubs for regulatory proof.

Alignment: Extends Chapter 6’s compliance guarantees into daily RevOps mechanics.

### System 5: Reporting That Changes Behavior

Objective: Build views that cause different actions tomorrow, not just describe yesterday.

- Rep view: Today’s SLA breaches, overdue follow‑ups, and hot signals; two clicks to fix each.
- Manager view: Exceptions by rule (routing failures, dedupe collisions, consent gaps), not just totals.
- RevOps view: Lead source quality with leakage‑adjusted conversion; vendor scorecards weighted by clean throughput.
- Executive view: Pipeline velocity, cost per connected conversation, and cycle reduction tied to rule changes.
- Decision logs: Every rule change captures hypothesis, owner, timestamp, and outcome metric.

Alignment: Preserves the improvements achieved in Chapters 7–11 and surfaces where they degrade.

## Reference Architecture (Text Walkthrough)

1) Entry points: Web forms, vendor posts, partner APIs, events → Intake Service
2) Intake Service: Validate, standardize, enrich, stamp consent and source → Event Bus
3) Dedupe Service: Deterministic and fuzzy merge → Golden Record Store
4) Router: Applies routing matrix and capacity caps → Assignment + Work Queue
5) SLA Monitor: Timers, escalations, pause/resume → Alerting
6) Engagement: Dialer, SMS, email, calendar integrations → Activity Stream
7) Compliance Service: DNC/STOP registry and propagation → Channel Blocks
8) Analytics: Exception dashboards, velocity, vendor leakage score → Decision Logs

Every arrow emits events with correlation IDs so you can reconstruct any lead’s journey end‑to‑end.

## Implementation Journey: 12 Weeks to No‑Leak

### Phase 1 (Weeks 1–4): Foundation and Integrity

- Field dictionary and ownership map finalized; source/consent fields write‑protected.
- Intake validators and standardizers live; enrichment vendors connected.
- Dedupe rules deployed with merge preview; golden record policy approved.
- Consent registry online with evidence storage; audit log schema enabled.

Early results:
- Record creation failures drop to <0.2% of posts.
- Duplicate creation rate falls by 72%.
- Consent evidence available on 100% of new leads.

### Phase 2 (Weeks 5–8): Routing, SLAs, and Workflows

- Routing matrix operational with capacity caps; off‑hours on‑call pool enabled.
- SLA timers with escalation; manager digest of breaches each morning.
- Unified work queue in place; atomic dispositions wired to cadences.
- Automation QA harness creates nightly synthetic leads; incident response playbook live.

Results:
- Time‑to‑first‑touch P50: 7 minutes → 2 minutes; P90: 22 → 8 minutes.
- SLA breach rate falls from 31% to 6%.
- First‑contact connection rate rises 19% (compounding Chapter 7 gains).

### Phase 3 (Weeks 9–12): Reporting and Behavior Change

- Exception dashboards by rule owner; weekly ops review adopts decision logs.
- Vendor scorecards shift to clean throughput and consent‑verified conversions.
- Lead recycle and long‑cycle nurture integrated for low‑intent segments (see Chapter 11).

Outcomes:
- Pipeline velocity improves 28% beyond Chapter 11 gains.
- Cost per connected conversation drops 23%.
- Compliance incidents move to zero; audit readiness becomes ongoing.

## Templates and Operating Standards

### Field Dictionary (Excerpt)

- lead_source (picklist): system‑owned; allowed: vendor, owned, referral, partner; write: intake only
- vendor_id (string): system‑owned; immutable after create
- creative_id (string): system‑owned; immutable after create
- consent_text_id (string): system‑owned; links to disclosure library
- consent_captured_at (datetime, UTC): system‑owned
- phone_e164 (string): write once; format +E.164; derived from raw_phone
- email_canonical (string): lowercased and trimmed; MX validity stored separately

### Routing Matrix (Excerpt)

- If product = Mortgage and state ∈ licensed(rep), route by capacity ASC, then SLA burden ASC
- If language = Spanish, prioritize bilingual pool; if capacity exceeded, route to overflow team
- If intent = High, escalate to senior tier with proposal fast‑track playbook

### Dedupe and Merge Rules (Excerpt)

- Block create if email_canonical matches existing AND created_within 7 days
- Fuzzy match threshold 0.92 on name+address OR 0.85 on phone+name
- Always preserve earliest consent evidence and most recent contact info

### SLA Policy (Excerpt)

- First touch: 5 minutes P90 during working hours; 15 minutes off‑hours on‑call
- Follow‑up: 8 touches in 72 hours across channels; then day 7/14/30
- Escalation: Manager notification at 50% of window; auto‑reassign at breach

### Disposition Taxonomy (Excerpt)

- no_answer, left_voicemail, spoke_not_qualified, spoke_qualified, scheduled, no_show, do_not_call, wrong_number, not_interested

### Audit Log Schema (Excerpt)

- event_id, record_id, actor_id, actor_role, surface, event_type, occurred_at_utc
- before_json, after_json, rule_version, correlation_id, evidence_url

## Measurement: Metrics That Expose and Eliminate Leaks

- Intake integrity: post success rate, required‑field completeness, consent evidence coverage
- Identity quality: dupes prevented per 1,000 posts, merges per week, golden‑record completeness
- Routing performance: assignment latency, capacity overflow events, fallback rate, rule failure rate
- SLA adherence: P50/P90 time‑to‑first‑touch, breach rate, auto‑reassign count
- Workflow compliance: percent of touches from work queue, disposition completeness, cadence adherence
- Attribution health: percent of opportunities with intact source/vendor/creative, overwrite incidents
- Compliance safety: DNC/STOP propagation latency, blocked attempts, audit pass rate
- Behavior change: exception resolution time, rule change impact deltas, decision log coverage

## Common Pitfalls and How to Avoid Them

- Treating CRM as a database, not an operating system: Without enforced workflows, leakage is inevitable.
- Over‑automation without QA: Silent failures compound; use nightly synthetic tests and canary rules.
- “Flexible” dispositions: If outcomes are ambiguous, reporting and automations break.
- Letting reps work outside the queue: Email and phone activity must sync or you lose history and SLAs.
- Weak identity strategy: Fuzzy matches without governance create merges that destroy consent chains.
- Reporting that aggregates exceptions away: Show broken rules and owners, not just totals.

## Business Impact at TechFlow

- Lead acceptance (clean, routed, owned in <5 min): 94% → 99.6%
- Duplicate rate: 7.8% → 1.9%; fragmented history down 86%
- Contact rate uplift attributable to routing/SLA: +14% over Chapter 7 baseline
- Proposal creation per 100 leads: +21% via workflow compliance
- Compliance incidents: 3/quarter → 0; audit response time: days → minutes
- Forecast accuracy: +18% through intact attribution and cycle stage integrity

## CRM Implementation Acceptance Checklist

Use this before go‑live or after significant rule changes. Do not accept the system until every item is true.

1) Intake and Evidence
- 100% of posted leads create records with required fields
- Consent evidence present (disclosure ID, timestamp, IP, HTML hash) on 100%
- Source, vendor, and creative IDs immutable after create

2) Identity and Dedupe
- Deterministic keys configured; fuzzy rules tested with gold test set
- Merge preview exists; golden record policy documented and enforced
- Duplicate creation rate under 2% in A/B canary

3) Routing and Capacity
- Routing matrix covers product, geo, license, language, hours
- Capacity caps enforced with overflow; assignment latency P90 < 10s
- Fallback re‑route proven in failure drills

4) SLAs and Workflows
- Timers start at record creation; escalations notify and reassign
- Unified work queue in daily use; 95% of activities originate from it
- Disposition taxonomy used on 100% of closed activities

5) Compliance and Audit
- STOP/DNC propagation latency < 5 minutes across channels
- Audit logs capture before/after and rule versions for sensitive fields
- Role‑based access prevents editing of consent and source

6) Reporting and Governance
- Rep/Manager/RevOps views live with exception dashboards
- Decision log captures rule changes with owners and hypotheses
- Weekly ops review actions map to dashboard exceptions

Sign‑off: RevOps, Sales, Compliance each approve with timestamp and scope.

## Resources and Tools

- CRM Field Dictionary Template [download]
- Routing Matrix and Capacity Planner [download]
- Dedupe Rules and Golden Record Playbook [download]
- SLA Timer and Escalation Design Guide [download]
- Disposition Taxonomy and Cadence Library [download]
- Compliance Audit Log Schema and Evidence Registry [download]
- Exception Dashboard and Decision Log Templates [download]

## Conclusion: Your CRM Is the Product

Sarah’s final lesson to the team was simple: buyers don’t experience your marketing plan—they experience your operating system. A CRM and RevOps stack that doesn’t leak compounds every improvement from Chapters 5, 7, 8, 10, and 11. It turns lead buying into consistent, auditable revenue.

In the next chapter, we’ll turn to portfolio design—lead mix, forecasting, and budget allocation—to balance volume, quality, and risk across vendors while protecting unit economics in changing markets.

