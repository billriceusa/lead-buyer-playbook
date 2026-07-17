// Canonical site constants. Host is the apex per the agent-ready crawl-stage
// decision (www 308s to apex). Used by metadata, JSON-LD, robots, and sitemap.
export const SITE_URL = 'https://leadbuyerplaybook.com';
export const BOOK_NAME = "The Lead Buyer's Playbook";
export const OG_IMAGE = '/book-cover.jpg';
export const AUTHOR = {
  name: 'Bill Rice',
  url: 'https://billrice.com',
  sameAs: [
    'https://billrice.com',
    'https://billricestrategy.com/about',
    'https://twitter.com/billrice',
  ],
} as const;
export const PUBLISHER = {
  name: 'Bill Rice Strategy Group',
  url: 'https://billricestrategy.com',
} as const;
