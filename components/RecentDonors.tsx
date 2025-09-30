'use client';

import { motion } from 'framer-motion';
import { Users, MapPin } from 'lucide-react';

interface Donor {
  name: string;
  location: string;
  amount: number;
  peopleReached: number;
  timeAgo: string;
}

// Mock recent donors - in production, fetch from API
const recentDonors: Donor[] = [
  { name: 'Anonymous', location: 'United States', amount: 100, peopleReached: 100000, timeAgo: '2 minutes ago' },
  { name: 'Sarah M.', location: 'Canada', amount: 50, peopleReached: 50000, timeAgo: '5 minutes ago' },
  { name: 'Anonymous', location: 'United Kingdom', amount: 25, peopleReached: 25000, timeAgo: '12 minutes ago' },
  { name: 'Michael T.', location: 'Australia', amount: 75, peopleReached: 75000, timeAgo: '18 minutes ago' },
  { name: 'Anonymous', location: 'Germany', amount: 30, peopleReached: 30000, timeAgo: '25 minutes ago' },
  { name: 'Jessica L.', location: 'United States', amount: 150, peopleReached: 150000, timeAgo: '32 minutes ago' },
  { name: 'David K.', location: 'Singapore', amount: 40, peopleReached: 40000, timeAgo: '45 minutes ago' },
  { name: 'Anonymous', location: 'Brazil', amount: 60, peopleReached: 60000, timeAgo: '1 hour ago' },
];

export function RecentDonors() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <Users className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-bold text-primary-600 uppercase tracking-wide">Most Recent</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
            Recent Donors
          </h2>
        </motion.div>

        <div className="bg-slate-50 rounded-3xl p-6 md:p-8">
          <div className="space-y-3">
            {recentDonors.map((donor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-4 border-2 border-slate-200 hover:border-primary-300 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-slate-900 truncate">{donor.name}</span>
                        <span className="text-sm text-slate-500 flex-shrink-0">{donor.timeAgo}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{donor.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-lg text-primary-600">${donor.amount}</div>
                    <div className="text-xs text-slate-500">{(donor.peopleReached / 1000).toFixed(0)}K reached</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-center"
          >
            <button className="text-primary-600 hover:text-primary-700 font-bold text-sm uppercase tracking-wide">
              See All Donors →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}