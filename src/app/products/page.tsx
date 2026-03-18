'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, DollarSign, ExternalLink, Heart, Copy, Filter } from 'lucide-react';

const sampleProducts = [
  { id: 1, name: 'Modern Velvet Sofa', price: 899, commission: '7%', potential: 63, source: 'Wayfair', category: 'Living Room', saves: 1240, clicks: 89 },
  { id: 2, name: 'Rustic Farmhouse Table', price: 449, commission: '7%', potential: 31, source: 'Amazon', category: 'Dining', saves: 856, clicks: 45 },
  { id: 3, name: 'Minimalist Floor Lamp', price: 199, commission: '10%', potential: 20, source: 'Wayfair', category: 'Lighting', saves: 2100, clicks: 156 },
  { id: 4, name: 'Area Rug 8x10', price: 299, commission: '7%', potential: 21, source: 'Amazon', category: 'Rugs', saves: 670, clicks: 34 },
  { id: 5, name: 'King Size Platform Bed', price: 599, commission: '7%', potential: 42, source: 'Wayfair', category: 'Bedroom', saves: 1890, clicks: 112 },
  { id: 6, name: 'Kitchen Island Cart', price: 349, commission: '7%', potential: 24, source: 'Amazon', category: 'Kitchen', saves: 445, clicks: 28 },
];

const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Kitchen', 'Lighting', 'Rugs', 'Outdoor'];

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = sampleProducts.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalPotential = filtered.reduce((sum, p) => sum + p.potential, 0);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-2">Product Research 🔍</h2>
        <p className="text-gray-600">Find high-ticket products that convert</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Search size={16} />
            <span className="text-sm">Products</span>
          </div>
          <p className="text-2xl font-bold">{filtered.length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <DollarSign size={16} />
            <span className="text-sm">Avg Price</span>
          </div>
          <p className="text-2xl font-bold">${Math.round(filtered.reduce((s, p) => s + p.price, 0) / filtered.length)}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Heart size={16} />
            <span className="text-sm">Total Saves</span>
          </div>
          <p className="text-2xl font-bold text-pink-500">{filtered.reduce((s, p) => s + p.saves, 0).toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <DollarSign size={16} />
            <span className="text-sm">Earning Potential</span>
          </div>
          <p className="text-2xl font-bold text-purple-600">${totalPotential}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === c
                  ? 'bg-purple-500 text-white'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-2xl">
                🛋️
              </div>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                {product.source}
              </span>
            </div>
            
            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{product.category}</p>
            
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-2xl font-bold">${product.price}</span>
              </div>
              <div className="text-right">
                <span className="text-green-600 font-semibold">{product.commission}</span>
                <p className="text-xs text-gray-500">per sale</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <span>❤️ {product.saves.toLocaleString()} saves</span>
              <span>👆 {product.clicks} clicks</span>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors">
                Create Pin
              </button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Copy size={18} />
              </button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <ExternalLink size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found</p>
        </div>
      )}
    </div>
  );
}
