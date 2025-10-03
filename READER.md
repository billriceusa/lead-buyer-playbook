# Lead Buyer Playbook - Online Reader

A beautiful, simple online reading experience for the Lead Buyer Playbook manuscript.

## Features

- 📖 Clean, book-like reading interface
- 🔄 Automatic updates from markdown files
- 📱 Mobile-responsive design
- ⚡ Fast server-side rendering
- 🎨 Beautiful typography with Tailwind CSS
- ⬅️➡️ Chapter navigation (Previous/Next)
- 📑 Table of contents

## Tech Stack

- **Next.js 14** with App Router
- **React Server Components** for automatic content updates
- **Tailwind CSS** with Typography plugin
- **React Markdown** with GitHub Flavored Markdown support
- **TypeScript** for type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the reader.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Visit [vercel.com](https://vercel.com) and sign up/login
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

Your playbook will be live in minutes!

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## How It Works

The reader automatically:
1. Scans the `/manuscript` folder for markdown files
2. Orders chapters by filename prefix (e.g., `01-`, `02-`, etc.)
3. Extracts titles from the first H1 heading in each file
4. Renders them with beautiful typography
5. Updates content on each page load (no rebuild needed!)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with table of contents
│   ├── chapter/[slug]/
│   │   └── page.tsx        # Dynamic chapter pages
│   └── globals.css         # Tailwind styles
├── lib/
│   └── chapters.ts         # Chapter reading utilities
├── manuscript/             # Your markdown chapters
└── package.json
```

## Customization

### Styling

Edit `app/chapter/[slug]/page.tsx` to customize the prose styles. The typography is configured using Tailwind's typography plugin.

### Metadata

Update `app/layout.tsx` to change the site title and description.

### Colors

Modify Tailwind classes in the components to change the color scheme. Currently using slate for a clean, professional look.

## License

This reader application is separate from the manuscript content. The reader code can be used freely.

