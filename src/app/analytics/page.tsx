'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, TrendingDown, MousePointer, DollarSign, Eye, Heart } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', clicks: 45, saves: 120, earnings: 12 },
  { day: 'Tue', clicks: 62, saves: 189, earnings: 28 },
  { day: 'Wed', clicks: 38, saves: 98, earnings: 8 },
  { day: 'Thu', clicks: 89, saves: 234, earnings: 45 },
  { day: 'Fri', clicks: 112, saves: 312, earnings: 67 },
  { day: 'Sat', clicks: 156, saves: 445, earnings: 89 },
  { day: 'Sun', clicks: 134, saves: 389, earnings: 72 },
];

const topPins = [
  { name: 'Modern Velvet Sofa Ideas', saves: 1240, clicks: 89, earnings: 63 },
  { name: 'Minimalist Bedroom Makeover', saves: 980, clicks: 67, earnings: 0 },
  { name: 'Kitchen Island Cart Hacks', saves: 856, clicks: 45, earnings: 24 },
  { name: 'Rustic Farmhouse Dining', saves: 670, clicks: 34, earnings: 31 },
  { name: 'Area Rug Styling Guide', saves: 445, clicks: 28, earnings: 21 },
];

const maxClicks = Math.max(...weeklyData.map(d => d.clicks));
const maxSaves = Math.max(...weeklyData.map(d => d.saves));

export default function AnalyticsPage() {
  const totalClicks = weeklyData.reduce((s, d) => s + d.clicks, 0);
  const totalSaves = weeklyData.reduce((s, d) => s + d.saves, 0);
  const totalEarnings = weeklyData.reduce((s, d) => s + d.earnings, 0);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-2">Analytics 📊</h2>
        <p className="text-gray-600">Track what's working and scale it</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <MousePointer size={20} className="text-purple-500" />
            <span className="text-green-500 text-sm flex items-center gap-1">
              <TrendingUp size={14} /> +23%
            </span>
          </div>
          <p className="text-3xl font-bold">{totalClicks}</p>
          <p className="text-sm text-gray-500">Total Clicks</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <Heart size={20} className="text-pink-500" />
            <span className="text-green-500 text-sm flex items-center gap-1">
              <TrendingUp size={14} /> +18%
            </span>
          </div>
          <p className="text-3xl font-bold">{totalSaves.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Total Saves</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <Eye size={20} className="text-turquoise-500" />
            <span className="text-green-500 text-sm flex items-center gap-1">
              <TrendingUp size={14} /> +12%
            </span>
          </div>
          <p className="text-3xl font-bold">1.2K</p>
          <p className="text-sm text-gray-500">Impressions</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <DollarSign size={20} className="text-green-500" />
            <span className="text-green-500 text-sm flex items-center gap-1">
              <TrendingUp size={14} /> +34%
            </span>
          </div>
          <p className="text-3xl font-bold text-green-600">${totalEarnings}</p>
          <p className="text-sm text-gray-500">Earnings</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h3 className="font-semibold mb-4">Weekly Performance</h3>
        <div className="flex items-end justify-between gap-2 h-48">
          {weeklyData.map((d, i) => (
            <div key={d.day} className="flex-1 flex flex-col items-center">
              <div className="w-full flex gap-1 h-40 items-end">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(d.clicks / maxClicks) * 100}%` }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 bg-purple-400 rounded-t"
                />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(d.saves / maxSaves) * 100}%` }}
                  transition={{ delay: i * 0.1 + 0.05 }}
                  className="flex-1 bg-pink-400 rounded-t"
                />
              </div>
              <span className="text-xs text-gray-500 mt-2">{d.day}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-4 justify-center">
          <span className="text-sm flex items-center gap-2">
            <span className="w-3 h-3 bg-purple-400 rounded"></span> Clicks
          </span>
          <span className="text-sm flex items-center gap-2">
            <span className="w-3 h-3 bg-pink-400 rounded"></span> Saves
          </span>
        </div>
      </div>

      {/* Top Pins */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h3 className="font-semibold mb-4">Top Performing Pins</h3>
        <div className="space-y-3">
          {topPins.map((pin, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{pin.name}</p>
                <p className="text-sm text-gray-500">{pin.saves.toLocaleString()} saves • {pin.clicks} clicks</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">${pin.earnings}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
