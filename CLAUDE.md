# CLAUDE.md - Lead Buyer's Playbook

This document provides guidance for AI assistants working with this repository.

## Project Overview

**The Lead Buyer's Playbook** is a comprehensive book and online reader application about B2C lead buying strategies for enterprise organizations. The project includes:

- A 15-chapter manuscript about lead generation best practices
- A Next.js web application for reading the manuscript online
- Supporting planning documents, frameworks, and artifacts

**Author**: Bill Rice
**Target Audience**: B2C lead buyers in mortgage, insurance, solar, and home improvement industries
**First Edition**: November 2025

## Repository Structure

```
lead-buyer-playbook/
├── manuscript/           # Book chapters in Markdown (main content)
│   ├── 01-*.md through 15-*.md  # Numbered chapters
│   ├── preface.md, dedication.md  # Front matter
│   ├── about-the-author.md, acknowledgements.md, afterword.md  # Back matter
│   └── archive/          # Deprecated chapter versions
├── book/                 # Planning documents and outlines
│   ├── lead-buyers-playbook-writers-guide.md  # Author voice guide
│   ├── lead-buyers-playbook-outline-best.md   # Canonical outline
│   └── *.md              # Various planning docs
├── artifacts/            # Supporting frameworks and charters
├── app/                  # Next.js 14 web reader
│   ├── page.tsx          # Home page with table of contents
│   ├── chapter/[slug]/page.tsx  # Dynamic chapter pages
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Tailwind styles
├── lib/
│   └── chapters.ts       # Chapter reading utilities
├── EDITING_SPECIFICATION.md  # Detailed editing rules (IMPORTANT)
├── READER.md             # Web reader documentation
└── README.md             # Project overview
```

## Key Documents to Reference

When working on content:
1. **EDITING_SPECIFICATION.md** - The authoritative guide for chapter structure, word counts, and style rules
2. **book/lead-buyers-playbook-writers-guide.md** - Bill Rice's voice and tone guidelines

## Content Rules (Critical)

### Chapter Structure
Every chapter follows this mandatory structure (~2,000 words total):

1. **Opening Vignette** (400-500 words) - Sarah encounters the challenge
2. **Core Framework** (800-1,000 words) - The ONE solution taught through Sarah implementing it
3. **Tactical Application** (400-500 words) - 1-2 specific implementations with results
4. **Transition** (100-150 words) - Bridge to next chapter

### Sarah - The Protagonist
Sarah is the illustrative character who appears in EVERY chapter:
- Starting role: Marketing executive thrust into B2C lead buying
- Journey: Learning and implementing each discipline systematically
- End state: Seasoned media buyer at the center of revenue operations

### Content Focus
- **B2C ONLY**: Mortgage, insurance, solar, home improvement
- **NO B2B content**: Eliminate all SaaS, LinkedIn, enterprise software references
- **Word target**: 1,900-2,100 words per chapter

### Prohibited Patterns
- "Let's explore...", "Now we'll examine..."
- "As Sarah discovered...", "Sarah learned that..." (show, don't tell)
- "...Changes Everything" hyperbolic phrases
- Recap of previous chapters
- More than 5 bullet points per chapter
- More than 2 levels of subheadings

## Tech Stack

### Web Reader Application
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Typography plugin
- **Markdown**: react-markdown with remark-gfm
- **Deployment**: Vercel

### Development Commands
```bash
npm install        # Install dependencies
npm run dev        # Start development server (localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Chapter File Conventions

### Naming Pattern
Chapters use numbered prefixes: `XX-chapter-slug.md`
- Example: `01-enterprise-lead-buying-landscape.md`
- Front/back matter: no prefix (e.g., `preface.md`, `about-the-author.md`)

### Content Type Classification (from lib/chapters.ts)
- **Front matter**: `dedication`, `preface`
- **Back matter**: `about-the-author`, `acknowledgements`, `afterword`
- **Excluded**: `titlepage`, `copyright`, `toc` (integrated into homepage)
- **Chapters**: All other numbered files

### Title Extraction
Chapter titles are extracted from the first H1 heading (`# Title`) in each markdown file.

## Writing Style Guidelines

### Voice (Bill Rice's Style)
- Industry realism addressing real B2C challenges
- Conversational authority as a knowledgeable peer
- Data-driven with actual benchmarks
- Compliance-first (TCPA, consent, privacy)

### Do's
- Active voice, tight sentences
- Show through Sarah's experience
- Specific numbers and concrete examples
- Professional but accessible tone

### Don'ts
- Generic business-speak or jargon
- Over-explanation or editorializing
- Nested bullets or complex formatting
- B2B examples (eliminate entirely)

## Editing Workflow

When editing chapters:
1. Read entire chapter to understand Sarah's arc
2. Identify the ONE framework this chapter teaches
3. Identify 1-2 tactical applications that prove it works
4. Cut everything else ruthlessly
5. Rewrite remaining content as tight prose
6. Verify word count (1,900-2,100)
7. Ensure smooth transition to next chapter

### Quality Checklist
- [ ] Sarah drives the narrative
- [ ] One clear framework (not multiple pillars)
- [ ] 1-2 tactical applications (not 3-5)
- [ ] Minimal bullets (0-5 maximum)
- [ ] No B2B content
- [ ] No concept redundancy with previous chapters
- [ ] 8-10 minute read time

## Git Workflow

- Main branch is for production-ready content
- Create feature branches for significant changes
- Use descriptive commit messages
- Keep chapters as separate `.md` files

## Book Chapter Overview

| # | Title | Core Framework |
|---|-------|----------------|
| 1 | Enterprise Lead Buying Landscape | Vendor dependency risk + portfolio thinking |
| 2 | Becoming a Lead Strategist | Tactical → strategic mindset shift |
| 3 | Markets, Pricing, and Unit Economics | Unit economics calculation |
| 4 | How Leads Are Made | Four sources + quality pyramid |
| 5 | Data Validation and Fraud Controls | Five-layer validation system |
| 6 | Compliance Without Myths | Consent-first operations |
| 7 | The 20% Contact Rate Formula | SMS-first speed systems |
| 8 | Speed-to-Lead Systems | Intelligent routing + capacity management |
| 9 | Omnichannel Outreach | Consumer preference detection |
| 10 | Building Trust Quickly | Immediate credibility signals |
| 11 | Sales Cycle Acceleration | Intent-based segmentation |
| 12 | CRM and RevOps That Don't Leak | Data integrity + automation |
| 13 | Lead Mix Forecasting | Portfolio diversification |
| 14 | Sales Enablement | Source-specific messaging |
| 15 | Conclusion | Three mindset shifts + 90-day action plan |

## Common Tasks

### Adding/Editing a Chapter
1. Create/edit file in `manuscript/` with proper naming
2. Include H1 title at the start
3. Follow the chapter template structure
4. Verify against EDITING_SPECIFICATION.md requirements

### Testing the Web Reader
1. Run `npm run dev`
2. Navigate to `http://localhost:3000`
3. Verify chapter renders correctly with navigation

### Building for Production
```bash
npm run build  # Creates production build
npm run start  # Serves production build locally
```

## External Links

- **Author Website**: https://billrice.com
- **Kaleidico**: https://kaleidico.com
- **Lead Generation World**: https://leadgenerationworld.com

## Notes for AI Assistants

1. Always reference EDITING_SPECIFICATION.md when making content changes
2. Maintain Sarah's presence in every chapter
3. Keep strict B2C focus - no B2B content
4. Prefer tight prose over bullet points
5. Respect the ~2,000 word limit per chapter
6. When editing, prioritize cutting over adding
7. Test web reader changes locally before committing
