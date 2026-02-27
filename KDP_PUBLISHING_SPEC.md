# KDP Publishing Specification: The Lead Buyer's Playbook

This document outlines the technical specifications and assembly instructions for converting the Markdown manuscript into production-ready files for Amazon Kindle Direct Publishing (KDP).

## 1. Target Deliverables

| Format | File Type | Target Use | Key Requirement |
|--------|-----------|------------|-----------------|
| **eBook** | `.epub` | Amazon Kindle, Tablets | Reflowable text, dynamic navigation |
| **Paperback** | `.pdf` | Print on Demand | Fixed layout, 6" x 9" trim, 300dpi |

---

## 2. Manuscript Manifest (Assembly Order)

The final book must be assembled in this exact order. 

**Front Matter:**
1. `titlepage.md`
2. `copyright.md`
3. `dedication.md`
4. `toc.md` (Note: For eBook, this generates the logical NCX navigation; for Print, this is a physical page)
5. `preface.md`

**Body (The Playbook):**
6. `01-enterprise-lead-buying-landscape.md`
7. `02-becoming-a-lead-strategist.md`
8. `03-markets-pricing-and-unit-economics.md`
9. `04-how-leads-are-made-channels-and-quality-anatomy.md`
10. `05-data-validation-and-fraud-controls.md`
11. `06-compliance-without-myths.md`
12. `07-the-20-percent-contact-rate-formula.md`
13. `08-speed-to-lead-systems-for-enterprise-scale.md`
14. `09-omnichannel-outreach-playbook.md`
15. `10-building-trust-quickly.md`
16. `11-sales-cycle-acceleration-framework.md`
17. `12-crm-and-revops-that-dont-leak.md`
18. `13-lead-mix-forecasting-and-budget-allocation.md`
19. `14-sales-enablement-for-lead-buyers.md`
20. `15-conclusion.md`

**Back Matter:**
21. `afterword.md`
22. `acknowledgements.md`
23. `about-the-author.md`

---

## 3. Format Specifications

### A. Kindle eBook (.epub)

**Core Requirement:** Reflowable text. The user controls the font size and line spacing.

*   **Navigation:** Must include a logical Table of Contents (NCX).
*   **Images:**
    *   Format: JPG or PNG.
    *   Resolution: 300 PPI recommended.
    *   Color: RGB.
    *   *Note:* Do not wrap text around images; place them inline.
*   **Page Breaks:**
    *   Forced page break before every `# Chapter Title` (H1).
    *   No forced page breaks within chapters.
*   **Hyperlinks:**
    *   Internal links (to chapters) must work.
    *   External links (to websites) must be valid.
*   **Metadata:**
    *   Title: *The Lead Buyer's Playbook*
    *   Subtitle: *How to Turn Third-Party Leads Into a Predictable Revenue Engine*
    *   Author: *Bill Rice*

### B. Paperback (.pdf)

**Core Requirement:** Fixed layout. What you see in the PDF is exactly what prints.

*   **Trim Size:** 6" x 9" (Standard Trade Paperback).
*   **Margins (Gutter):**
    *   Top/Bottom/Outside: 0.5" (12.7mm) minimum.
    *   Inside (Gutter): 0.5" (12.7mm) for < 300 pages; 0.625" (15.8mm) for 300-500 pages.
*   **Bleed:** No bleed (assuming no images extend to the edge of the page).
*   **Fonts:**
    *   **Must be embedded** in the PDF.
    *   Body text: Serif font (e.g., Garamond, Caslon, Minion Pro) at 11pt or 12pt.
    *   Headers: Sans-serif font (e.g., Arial, Helvetica) matches styling.
*   **Page Numbering:**
    *   Front Matter: Lowercase Roman numerals (i, ii, iii...).
    *   Body: Arabic numerals (1, 2, 3...) starting at Chapter 1.
    *   Location: Centered bottom or outside corner.
*   **Headers:**
    *   Running headers (Author Name / Book Title) recommended.
    *   No headers on the first page of a chapter.

---

## 4. Build Process Recommendations

Since the manuscript is in Markdown, the recommended build tool is **Pandoc**.

### Prerequisites
*   Pandoc installed.
*   LaTeX (specifically `texlive` or `MacTeX`) installed for PDF generation.

### Build Commands (Examples)

**1. Generate eBook (EPUB):**
```bash
pandoc titlepage.md copyright.md dedication.md toc.md preface.md [CHAPTERS] afterword.md acknowledgements.md about-the-author.md \
  -o lead-buyers-playbook.epub \
  --toc \
  --toc-depth=2 \
  --epub-cover-image=cover.jpg \
  --metadata title="The Lead Buyer's Playbook" \
  --metadata author="Bill Rice"
```

**2. Generate Paperback (PDF):**
```bash
pandoc titlepage.md copyright.md dedication.md toc.md preface.md [CHAPTERS] afterword.md acknowledgements.md about-the-author.md \
  -o lead-buyers-playbook.pdf \
  --pdf-engine=xelatex \
  -V geometry:paperwidth=6in \
  -V geometry:paperheight=9in \
  -V geometry:margin=0.5in \
  -V documentclass=book \
  -V mainfont="Garamond"
```

---

## 5. Final Quality Checklist

### Kindle Previewer
*   [ ] Open `.epub` in **Kindle Previewer 3** (free tool from Amazon).
*   [ ] Verify Table of Contents links work.
*   [ ] Verify text flows correctly at different font sizes.
*   [ ] Check start location (should open to Title Page or Chapter 1).

### Print Preview
*   [ ] Open `.pdf`.
*   [ ] Check gutter margins (text shouldn't disappear into the binding).
*   [ ] Verify page numbers are correct and sequential.
*   [ ] Ensure all fonts are embedded (File > Properties > Fonts).
*   [ ] Confirm total page count affects spine width calculation for the cover.


