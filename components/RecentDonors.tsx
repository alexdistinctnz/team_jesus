'use client';

import { motion } from 'framer-motion';
import { Heart, Search } from 'lucide-react';
import { useState } from 'react';

interface Donor {
  name: string;
  message?: string;
  amount: number;
  peopleReached: number;
  timestamp: string;
}

// Mock recent donors - in production, fetch from API
const mostRecentDonors: Donor[] = [
  { name: 'Sarah M.', message: 'May this help spread the Good News!', amount: 50, peopleReached: 50000, timestamp: '10/1/2025, 5:11 PM' },
  { name: 'Anonymous', amount: 100, peopleReached: 100000, timestamp: '10/1/2025, 4:45 PM' },
  { name: 'Michael T.', message: 'Thank you for all your good deeds and for the fact that we can help each other! 💙💙💙', amount: 75, peopleReached: 75000, timestamp: '10/1/2025, 4:40 PM' },
  { name: 'Anonymous', amount: 25, peopleReached: 25000, timestamp: '10/1/2025, 4:25 PM' },
  { name: 'David K.', amount: 40, peopleReached: 40000, timestamp: '10/1/2025, 4:13 PM' },
  { name: 'Jessica L.', message: 'Blessed to give!', amount: 150, peopleReached: 150000, timestamp: '10/1/2025, 4:10 PM' },
  { name: 'TeamChurch', message: 'Thank you to everyone who made this possible!', amount: 500, peopleReached: 500000, timestamp: '10/1/2025, 3:27 PM' },
  { name: 'Alex R.', message: 'With love, sharing Jesus <3', amount: 30, peopleReached: 30000, timestamp: '10/1/2025, 2:34 PM' },
];

const mostImpactDonors: Donor[] = [
  { name: 'TeamChurch', message: 'Thank you to everyone who made this possible!', amount: 500, peopleReached: 500000, timestamp: '10/1/2025, 3:27 PM' },
  { name: 'Grace Fellowship', message: 'So grateful to partner in spreading the Gospel!', amount: 250, peopleReached: 250000, timestamp: '10/1/2025, 1:15 PM' },
  { name: 'Jessica L.', message: 'Blessed to give!', amount: 150, peopleReached: 150000, timestamp: '10/1/2025, 4:10 PM' },
  { name: 'Anonymous', amount: 100, peopleReached: 100000, timestamp: '10/1/2025, 4:45 PM' },
  { name: 'Michael T.', message: 'Thank you for all your good deeds and for the fact that we can help each other! 💙💙💙', amount: 75, peopleReached: 75000, timestamp: '10/1/2025, 4:40 PM' },
  { name: 'Sarah M.', message: 'May this help spread the Good News!', amount: 50, peopleReached: 50000, timestamp: '10/1/2025, 5:11 PM' },
  { name: 'David K.', amount: 40, peopleReached: 40000, timestamp: '10/1/2025, 4:13 PM' },
  { name: 'Alex R.', message: 'With love, sharing Jesus <3', amount: 30, peopleReached: 30000, timestamp: '10/1/2025, 2:34 PM' },
];

export function RecentDonors() {
  const [activeTab, setActiveTab] = useState('recent');

  const displayedDonors = activeTab === 'recent' ? mostRecentDonors : mostImpactDonors;

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-lg"
        >
          {/* Header with tabs */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('recent')}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  activeTab === 'recent'
                    ? 'bg-primary-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                MOST RECENT
              </button>
              <button
                onClick={() => setActiveTab('impact')}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  activeTab === 'impact'
                    ? 'bg-primary-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                MOST IMPACT
              </button>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* Donor list */}
          <div className="space-y-0 divide-y divide-slate-200">
            {displayedDonors.map((donor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="py-6 flex items-start gap-4"
              >
                {/* Avatar */}
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-white fill-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-primary-900">{donor.name}</h3>
                  {donor.message && (
                    <p className="text-sm text-slate-600 mt-1 mb-2">{donor.message}</p>
                  )}
                  <p className="text-sm text-slate-500">{donor.timestamp}</p>
                </div>

                {/* Impact badge */}
                <div className="text-right flex-shrink-0">
                  <div className="inline-flex flex-col items-end">
                    <div className="bg-primary-900 text-white font-bold text-2xl px-4 py-2 rounded-lg mb-1">
                      {(donor.peopleReached / 1000).toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
                      PEOPLE REACHED
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* See All button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-bold rounded-full transition-colors uppercase tracking-wide">
              SEE ALL
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}