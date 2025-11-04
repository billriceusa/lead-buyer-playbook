import Link from 'next/link';
import { getAllChapters } from '@/lib/chapters';

export default function HomePage() {
  const chapters = getAllChapters();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Lead Buyer Playbook
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-3">
            The Enterprise Guide to Buying and Converting Leads Profitably
          </p>
          <p className="text-lg text-slate-500">
            by <a href="https://billrice.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">Bill Rice</a>
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Table of Contents</h2>
          
          <nav className="space-y-3">
            {chapters.map((chapter, index) => (
              <Link
                key={chapter.slug}
                href={`/chapter/${chapter.slug}`}
                className="block group"
              >
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-slate-900 text-white text-sm font-semibold rounded">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                      {chapter.title}
                    </h3>
                  </div>
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </nav>
        </div>

        <footer className="mt-12 text-center text-sm text-slate-600">
          <p>© {new Date().getFullYear()} <a href="https://billrice.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">Bill Rice</a>. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
