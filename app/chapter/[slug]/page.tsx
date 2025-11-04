import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllChapters, getChapterBySlug, getAdjacentChapters } from '@/lib/chapters';

interface ChapterPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const chapters = getAllChapters();
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export async function generateMetadata({ params }: ChapterPageProps) {
  const chapter = getChapterBySlug(params.slug);
  
  if (!chapter) {
    return {
      title: 'Chapter Not Found',
    };
  }

  return {
    title: `${chapter.title} | Lead Buyer Playbook`,
    description: chapter.content.substring(0, 160),
  };
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const chapter = getChapterBySlug(params.slug);
  
  if (!chapter) {
    notFound();
  }

  const { prev, next } = getAdjacentChapters(params.slug);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Table of Contents
            </Link>
            <span className="text-sm text-slate-500">Chapter {chapter.order}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <article className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
          <div className="prose prose-slate prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-slate-900
            prose-h1:text-4xl prose-h1:mb-8
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-slate-700 prose-p:leading-relaxed
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ol:my-6
            prose-li:text-slate-700 prose-li:my-2
            prose-code:text-sm prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-slate-900 prose-pre:text-slate-100
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:italic
            prose-img:rounded-lg prose-img:shadow-md"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {chapter.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Navigation */}
        <nav className="mt-12 flex items-center justify-between gap-4">
          <div className="flex-1">
            {prev && (
              <Link
                href={`/chapter/${prev.slug}`}
                className="group flex items-center gap-2 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-slate-500 mb-1">Previous</div>
                  <div className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {prev.title}
                  </div>
                </div>
              </Link>
            )}
          </div>

          <div className="flex-1 flex justify-end">
            {next && (
              <Link
                href={`/chapter/${next.slug}`}
                className="group flex items-center gap-2 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="text-right">
                  <div className="text-xs text-slate-500 mb-1">Next</div>
                  <div className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {next.title}
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </nav>
      </main>

      {/* Footer */}
      <footer className="mt-16 pb-8 text-center text-sm text-slate-600">
        <p>© {new Date().getFullYear()} <a href="https://billrice.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">Bill Rice</a>. All rights reserved.</p>
      </footer>
    </div>
  );
}
