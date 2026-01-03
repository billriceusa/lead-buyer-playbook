import Link from 'next/link';
import { getAllContent } from '@/lib/chapters';

export default function HomePage() {
  const allContent = getAllContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Book Cover Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Book Cover */}
            <div className="flex-shrink-0">
              <div className="book-cover">
                <div className="book-spine"></div>
                <div className="book-front">
                  <div className="book-content">
                    {/* Top tagline */}
                    <p className="book-tagline">
                      The Operational System for Validating Vendors, Maximizing Contact Rates, and Scaling Customer Acquisition
                    </p>

                    {/* Title */}
                    <div className="book-title">
                      <span className="title-the">THE</span>
                      <span className="title-lead">LEAD</span>
                      <span className="title-buyers">BUYER&apos;S</span>
                      <span className="title-playbook">PLAYBOOK</span>
                    </div>

                    {/* Subtitle */}
                    <p className="book-subtitle">
                      How to Turn Third-Party Leads Into a Predictable Revenue Engine
                    </p>

                    {/* Red line and author */}
                    <div className="book-footer">
                      <div className="book-red-line"></div>
                      <span className="book-author">BILL RICE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <p className="text-amber-400 font-semibold tracking-wide uppercase text-sm mb-4">
                Free Online Edition
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Master the Art of <span className="text-amber-400">Strategic Lead Buying</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Stop treating lead generation as a procurement problem. Learn the systematic approach that transforms lead buying from a cost center into a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href={`/chapter/${allContent[0]?.slug || 'dedication'}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors"
                >
                  Start Reading
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://billrice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-lg transition-colors"
                >
                  About the Author
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Table of Contents</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A comprehensive guide organized into strategic foundations, risk management, operational excellence, and financial intelligence.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <nav className="divide-y divide-slate-100">
              {allContent.map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/chapter/${item.slug}`}
                  className="block group"
                >
                  <div className="flex items-center gap-4 p-4 hover:bg-amber-50 transition-colors">
                    <span className={`flex-shrink-0 w-10 h-10 flex items-center justify-center text-sm font-semibold rounded-lg ${
                      item.type === 'chapter' 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {item.type === 'chapter' ? item.order : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                    </span>
                    <span className="flex-1 text-slate-800 group-hover:text-amber-700 transition-colors font-medium">
                      {item.title}
                    </span>
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-slate-300 group-hover:text-amber-500 transition-colors"
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
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-4">
              Copyright © {new Date().getFullYear()} by Bill Rice. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs max-w-2xl mx-auto mb-6">
              No part of this publication may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of the publisher, except for brief quotations in critical reviews.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <a 
                href="https://billrice.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                billrice.com
              </a>
              <span className="text-slate-700">•</span>
              <a 
                href="https://kaleidico.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-300 transition-colors"
              >
                Kaleidico
              </a>
              <span className="text-slate-700">•</span>
              <a 
                href="https://leadgenerationworld.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-300 transition-colors"
              >
                Lead Generation World
              </a>
            </div>
            <p className="text-slate-600 text-xs mt-6">
              First Edition — November 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
