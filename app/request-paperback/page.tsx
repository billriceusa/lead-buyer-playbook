'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RequestPaperbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: '',
    leadsPerMonth: '',
    referralSource: '',
    shippingAddress: '',
    strategyCall: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/request-paperback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Thank You!</h2>
          <p className="text-slate-600 mb-6">
            Your request has been submitted. We'll review your information and contact you soon about your free paperback copy.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-12 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Request a FREE Paperback</h1>
            <p className="text-lg text-slate-800 max-w-2xl mx-auto">
              We have a limited number of free paperbacks available to qualified lead buyers. 
              Complete the form below to request your copy.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-semibold text-slate-900 mb-2">
                Industry <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                required
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                placeholder="e.g., Mortgage, Insurance, Solar, Home Improvement"
              />
            </div>

            <div>
              <label htmlFor="leadsPerMonth" className="block text-sm font-semibold text-slate-900 mb-2">
                How many leads do you buy (per month)? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="leadsPerMonth"
                name="leadsPerMonth"
                required
                value={formData.leadsPerMonth}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                placeholder="e.g., 100, 500, 1000+"
              />
            </div>

            <div>
              <label htmlFor="referralSource" className="block text-sm font-semibold text-slate-900 mb-2">
                Where did you hear about this book? <span className="text-red-500">*</span>
              </label>
              <select
                id="referralSource"
                name="referralSource"
                required
                value={formData.referralSource}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors bg-white"
              >
                <option value="">Select an option</option>
                <option value="search">Search</option>
                <option value="conference">Conference</option>
                <option value="youtube">YouTube</option>
                <option value="podcast">Podcast</option>
                <option value="recommended">Recommended</option>
              </select>
            </div>

            <div>
              <label htmlFor="shippingAddress" className="block text-sm font-semibold text-slate-900 mb-2">
                Shipping Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="shippingAddress"
                name="shippingAddress"
                required
                value={formData.shippingAddress}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-none"
                placeholder="Street address, City, State, ZIP Code"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="strategyCall"
                name="strategyCall"
                checked={formData.strategyCall}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
              />
              <label htmlFor="strategyCall" className="ml-3 text-sm text-slate-700">
                Would you like to schedule a strategy call with Bill Rice?
              </label>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 disabled:cursor-not-allowed text-slate-900 font-semibold rounded-lg transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
              <Link
                href="/"
                className="flex-1 px-6 py-3 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-semibold rounded-lg transition-colors text-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

