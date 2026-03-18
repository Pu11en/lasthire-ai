'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Link2, ExternalLink, Copy, Trash2, Check, Edit, DollarSign } from 'lucide-react';

const sampleAffiliates = [
  { id: 1, name: 'Beach Soul USA Towels', url: 'https://beachsoul.co/...', commission: '10%', network: 'Shopify Collabs', status: 'pending' },
  { id: 2, name: 'Sand Cloud Towels', url: 'https://sandcloud.com/...', commission: '10%', network: 'CJ Affiliate', status: 'active' },
  { id: 3, name: 'HomeWetBar Glassware', url: 'https://homewetbar.com/...', commission: '12%', network: 'ShareASale', status: 'active' },
  { id: 4, name: 'Klean Kanteen Bottle', url: 'https://kleankanteen.com/...', commission: '10%', network: 'AvantLink', status: 'pending' },
];

const networks = ['All', 'Shopify Collabs', 'ShareASale', 'Rakuten', 'CJ Affiliate', 'Impact', 'Direct'];

export default function AffiliatesPage() {
  const [affiliates, setAffiliates] = useState(sampleAffiliates);
  const [filter, setFilter] = useState('All');
  const [showAdd, setShowAdd] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const [newLink, setNewLink] = useState({ name: '', url: '', commission: '', network: '' });

  const filtered = affiliates.filter(a => filter === 'All' || a.network === filter || (filter === 'Direct' && !networks.includes(a.network)));

  const copyLink = (id: number, url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const addLink = () => {
    if (newLink.name && newLink.url) {
      setAffiliates([...affiliates, { 
        ...newLink, 
        id: Date.now(), 
        status: 'pending' 
      }]);
      setNewLink({ name: '', url: '', commission: '', network: '' });
      setShowAdd(false);
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold mb-2">Affiliate Links 🔗</h2>
          <p className="text-gray-600">Manage your money makers</p>
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="flex items-center gap-2 px-6 py-3 bg-lime-500 text-white rounded-xl font-semibold hover:bg-lime-600 transition-all"
        >
          <Plus size={20} />
          Add Link
        </button>
      </motion.div>

      {/* Add New Form */}
      {showAdd && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
        >
          <h3 className="font-semibold mb-4">Add New Affiliate Link</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newLink.name}
              onChange={(e) => setNewLink({ ...newLink, name: e.target.value })}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
            />
            <input
              type="text"
              placeholder="Affiliate URL"
              value={newLink.url}
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
            />
            <input
              type="text"
              placeholder="Commission (e.g. 10%)"
              value={newLink.commission}
              onChange={(e) => setNewLink({ ...newLink, commission: e.target.value })}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
            />
            <select
              value={newLink.network}
              onChange={(e) => setNewLink({ ...newLink, network: e.target.value })}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
            >
              <option value="">Select Network</option>
              {networks.filter(n => n !== 'All').map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={addLink}
              className="px-6 py-2 bg-lime-500 text-white rounded-xl font-semibold hover:bg-lime-600"
            >
              Save Link
            </button>
            <button
              onClick={() => setShowAdd(false)}
              className="px-6 py-2 bg-gray-100 text-gray-600 rounded-xl font-semibold hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Link2 size={16} />
            <span className="text-sm">Total Links</span>
          </div>
          <p className="text-2xl font-bold">{affiliates.length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Check size={16} />
            <span className="text-sm">Active</span>
          </div>
          <p className="text-2xl font-bold text-green-600">{affiliates.filter(a => a.status === 'active').length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <DollarSign size={16} />
            <span className="text-sm">Avg Commission</span>
          </div>
          <p className="text-2xl font-bold text-lime-600">10.5%</p>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap">
        {networks.map(n => (
          <button
            key={n}
            onClick={() => setFilter(n)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === n
                ? 'bg-lime-500 text-white'
                : 'bg-white border border-gray-200 hover:border-gray-300'
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-3">
        {filtered.map((affiliate, i) => (
          <motion.div
            key={affiliate.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center text-lime-600 font-bold">
              🔗
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold truncate">{affiliate.name}</h4>
              <p className="text-sm text-gray-500 truncate">{affiliate.url}</p>
            </div>
            <div className="text-right">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                affiliate.status === 'active' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {affiliate.status}
              </span>
              <p className="text-sm font-semibold mt-1">{affiliate.commission}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copyLink(affiliate.id, affiliate.url)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Copy link"
              >
                {copied === affiliate.id ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
              </button>
              <a
                href={affiliate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Open link"
              >
                <ExternalLink size={18} />
              </a>
              <button
                className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors"
                title="Delete"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No affiliate links found</p>
        </div>
      )}
    </div>
  );
}
