'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, ExternalLink, Palette, Link2, BarChart3, Sparkles, BookOpen } from 'lucide-react';

export default function GuidePage() {
  const steps = [
    {
      step: 1,
      title: 'Apply to Affiliate Programs',
      description: 'Get approved to promote products and earn commissions',
      links: [
        { name: 'Amazon Associates', url: 'https://affiliate-program.amazon.com' },
        { name: 'Wayfair', url: 'https://www.wayfair.com/affiliates' },
        { name: 'LTK', url: 'https://shopltk.com' },
      ],
      icon: Link2,
    },
    {
      step: 2,
      title: 'Set Up Pinterest',
      description: 'Create a business account and boards for your niche',
      links: [
        { name: 'Pinterest Business', url: 'https://business.pinterest.com' },
      ],
      icon: Palette,
    },
    {
      step: 3,
      title: 'Find Products',
      description: 'Use the Products page to find high-ticket items to promote',
      href: '/products',
      icon: Sparkles,
    },
    {
      step: 4,
      title: 'Create Pins',
      description: 'Design eye-catching pins in Canva or use our templates',
      href: '/create',
      icon: Palette,
    },
    {
      step: 5,
      title: 'Post & Track',
      description: 'Post to Pinterest and track your performance',
      href: '/analytics',
      icon: BarChart3,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <BookOpen className="text-purple-600" size={32} />
        </div>
        <h2 className="text-3xl font-bold mb-2">How to Use Lasthire.ai 📖</h2>
        <p className="text-gray-600">
          Follow this step-by-step guide to start earning with Pinterest affiliate marketing
        </p>
      </motion.div>

      {/* Quick Start */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-purple-50 rounded-2xl p-6 border border-purple-100"
      >
        <h3 className="font-bold text-lg mb-4">🚀 Quick Start (Do This First)</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <p className="font-medium">Apply to affiliate programs</p>
              <p className="text-sm text-gray-600">Amazon, Wayfair, LTK - apply to all 3</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <p className="font-medium">Set up Pinterest Business</p>
              <p className="text-sm text-gray-600">Create boards for your niche</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <p className="font-medium">Create pins and post</p>
              <p className="text-sm text-gray-600">Use Canva for designs, post 10+ per day</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="text-purple-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-purple-600">Step {s.step}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-600 mb-3">{s.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {s.links?.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {link.name}
                        <ExternalLink size={12} />
                      </a>
                    ))}
                    {s.href && (
                      <Link
                        href={s.href}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 rounded-full text-sm text-purple-700 hover:bg-purple-200 transition-colors"
                      >
                        Go to {s.title}
                        <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pro Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-green-50 rounded-2xl p-6 border border-green-100"
      >
        <h3 className="font-bold text-lg mb-4">💡 Pro Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <Check className="text-green-500 mt-1" size={16} />
            <p className="text-sm">Focus on high-ticket items ($300+) for bigger commissions</p>
          </div>
          <div className="flex items-start gap-2">
            <Check className="text-green-500 mt-1" size={16} />
            <p className="text-sm">Post 10-15 pins per day for best results</p>
          </div>
          <div className="flex items-start gap-2">
            <Check className="text-green-500 mt-1" size={16} />
            <p className="text-sm">Use keywords in pin titles: "under $500", "budget", "ideas"</p>
          </div>
          <div className="flex items-start gap-2">
            <Check className="text-green-500 mt-1" size={16} />
            <p className="text-sm">Pinterest is a search engine - treat it like SEO</p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-center"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-600 transition-colors"
        >
          Go to Dashboard
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </div>
  );
}
