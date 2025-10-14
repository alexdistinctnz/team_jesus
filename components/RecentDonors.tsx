'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

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
  { name: 'Jessica L.', message: 'Blessed to give!', amount: 150, peopleReached: 150000, timestamp: '10/1/2025, 4:10 PM' },
  { name: 'TeamChurch', message: 'Thank you to everyone who made this possible!', amount: 500, peopleReached: 500000, timestamp: '10/1/2025, 3:27 PM' },
  { name: 'Alex R.', message: 'With love, sharing Jesus <3', amount: 30, peopleReached: 30000, timestamp: '10/1/2025, 2:34 PM' },
  // Additional donors for "See All"
  { name: 'David K.', message: 'Grateful to be part of this mission!', amount: 200, peopleReached: 200000, timestamp: '10/1/2025, 2:15 PM' },
  { name: 'Rachel W.', amount: 45, peopleReached: 45000, timestamp: '10/1/2025, 1:50 PM' },
  { name: 'Mark S.', message: 'For the glory of God!', amount: 120, peopleReached: 120000, timestamp: '10/1/2025, 1:30 PM' },
  { name: 'Lisa H.', message: 'Sharing the love of Christ', amount: 80, peopleReached: 80000, timestamp: '10/1/2025, 1:10 PM' },
  { name: 'Anonymous', amount: 300, peopleReached: 300000, timestamp: '10/1/2025, 12:45 PM' },
  { name: 'John P.', message: 'May many come to know Jesus!', amount: 90, peopleReached: 90000, timestamp: '10/1/2025, 12:20 PM' },
  { name: 'Emily C.', amount: 60, peopleReached: 60000, timestamp: '10/1/2025, 11:55 AM' },
  { name: 'Robert M.', message: 'Praying for this ministry', amount: 110, peopleReached: 110000, timestamp: '10/1/2025, 11:30 AM' },
  { name: 'Jennifer B.', message: 'Blessed to support the Great Commission', amount: 70, peopleReached: 70000, timestamp: '10/1/2025, 11:00 AM' },
  { name: 'Anonymous', amount: 180, peopleReached: 180000, timestamp: '10/1/2025, 10:30 AM' },
  { name: 'Christopher L.', message: 'For His Kingdom!', amount: 95, peopleReached: 95000, timestamp: '10/1/2025, 10:00 AM' },
  { name: 'Amanda J.', amount: 55, peopleReached: 55000, timestamp: '10/1/2025, 9:30 AM' },
  { name: 'Matthew D.', message: 'Let His name be known!', amount: 130, peopleReached: 130000, timestamp: '10/1/2025, 9:00 AM' },
  { name: 'Michelle G.', amount: 85, peopleReached: 85000, timestamp: '10/1/2025, 8:30 AM' },
];

const mostImpactDonors: Donor[] = [
  { name: 'TeamChurch', message: 'Thank you to everyone who made this possible!', amount: 500, peopleReached: 500000, timestamp: '10/1/2025, 3:27 PM' },
  { name: 'Anonymous', amount: 300, peopleReached: 300000, timestamp: '10/1/2025, 12:45 PM' },
  { name: 'Grace Fellowship', message: 'So grateful to partner in spreading the Gospel!', amount: 250, peopleReached: 250000, timestamp: '10/1/2025, 1:15 PM' },
  { name: 'David K.', message: 'Grateful to be part of this mission!', amount: 200, peopleReached: 200000, timestamp: '10/1/2025, 2:15 PM' },
  { name: 'Anonymous', amount: 180, peopleReached: 180000, timestamp: '10/1/2025, 10:30 AM' },
  { name: 'Jessica L.', message: 'Blessed to give!', amount: 150, peopleReached: 150000, timestamp: '10/1/2025, 4:10 PM' },
  { name: 'Matthew D.', message: 'Let His name be known!', amount: 130, peopleReached: 130000, timestamp: '10/1/2025, 9:00 AM' },
  { name: 'Mark S.', message: 'For the glory of God!', amount: 120, peopleReached: 120000, timestamp: '10/1/2025, 1:30 PM' },
  { name: 'Robert M.', message: 'Praying for this ministry', amount: 110, peopleReached: 110000, timestamp: '10/1/2025, 11:30 AM' },
  { name: 'Anonymous', amount: 100, peopleReached: 100000, timestamp: '10/1/2025, 4:45 PM' },
  { name: 'Christopher L.', message: 'For His Kingdom!', amount: 95, peopleReached: 95000, timestamp: '10/1/2025, 10:00 AM' },
  { name: 'John P.', message: 'May many come to know Jesus!', amount: 90, peopleReached: 90000, timestamp: '10/1/2025, 12:20 PM' },
  { name: 'Michelle G.', amount: 85, peopleReached: 85000, timestamp: '10/1/2025, 8:30 AM' },
  { name: 'Lisa H.', message: 'Sharing the love of Christ', amount: 80, peopleReached: 80000, timestamp: '10/1/2025, 1:10 PM' },
  { name: 'Michael T.', message: 'Thank you for all your good deeds and for the fact that we can help each other! 💙💙💙', amount: 75, peopleReached: 75000, timestamp: '10/1/2025, 4:40 PM' },
  { name: 'Jennifer B.', message: 'Blessed to support the Great Commission', amount: 70, peopleReached: 70000, timestamp: '10/1/2025, 11:00 AM' },
  { name: 'Emily C.', amount: 60, peopleReached: 60000, timestamp: '10/1/2025, 11:55 AM' },
  { name: 'Amanda J.', amount: 55, peopleReached: 55000, timestamp: '10/1/2025, 9:30 AM' },
  { name: 'Sarah M.', message: 'May this help spread the Good News!', amount: 50, peopleReached: 50000, timestamp: '10/1/2025, 5:11 PM' },
  { name: 'Rachel W.', amount: 45, peopleReached: 45000, timestamp: '10/1/2025, 1:50 PM' },
];

const getDonorIcon = (peopleReached: number) => {
  if (peopleReached >= 250000) {
    return <Image src="/images/4_fish_and_net_icon.svg" alt="Top Donor" width={64} height={64} />;
  } else if (peopleReached >= 100000) {
    return <Image src="/images/3_staff_icon.svg" alt="High Impact Donor" width={64} height={64} />;
  } else if (peopleReached >= 50000) {
    return <Image src="/images/2_fish_and_loaves_icon.svg" alt="Impact Donor" width={64} height={64} />;
  } else {
    return <Image src="/images/1_sandals_icon.svg" alt="Donor" width={64} height={64} />;
  }
};

export function RecentDonors() {
  const [activeTab, setActiveTab] = useState('recent');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const allDonors = activeTab === 'recent' ? mostRecentDonors : mostImpactDonors;

  // Filter donors based on search
  const filteredDonors = searchQuery.trim()
    ? allDonors.filter(donor =>
        donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        donor.message?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allDonors;

  // Show first 6 or all based on expansion state
  const displayedDonors = isExpanded ? filteredDonors : filteredDonors.slice(0, 6);

  return (
    <section className="py-16">
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
            {/* Tab buttons with animated pill */}
            <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1 relative">
              {/* Animated background pill */}
              <motion.div
                layoutId="tabPill"
                className="absolute bg-slate-900 rounded-full"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
                style={{
                  left: activeTab === 'recent' ? '4px' : 'calc(50%)',
                  width: activeTab === 'recent' ? 'calc(50% - 4px)' : 'calc(50% - 4px)',
                  height: 'calc(100% - 8px)',
                  top: '4px'
                }}
              />

              <button
                onClick={() => setActiveTab('recent')}
                className={`px-6 py-2 rounded-full font-heading text-xs transition-colors relative z-10 ${
                  activeTab === 'recent'
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                MOST RECENT
              </button>
              <button
                onClick={() => setActiveTab('impact')}
                className={`px-6 py-2 rounded-full font-heading text-xs transition-colors relative z-10 ${
                  activeTab === 'impact'
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                MOST PEOPLE
              </button>
            </div>

            {/* Search icon/input */}
            <div className="flex items-center">
              <AnimatePresence mode="wait">
                {!showSearch ? (
                  <motion.button
                    key="search-icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setShowSearch(true)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <Search className="w-5 h-5 text-slate-600" />
                  </motion.button>
                ) : (
                  <motion.div
                    key="search-input"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '200px' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2"
                  >
                    <Search className="w-4 h-4 text-slate-600 flex-shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="bg-transparent outline-none text-sm w-full"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        setShowSearch(false);
                        setSearchQuery('');
                      }}
                      className="flex-shrink-0 hover:bg-slate-200 rounded-full p-1 transition-colors"
                    >
                      <X className="w-3 h-3 text-slate-600" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Donor list */}
          <div className="space-y-0">
            <AnimatePresence mode="popLayout">
              {displayedDonors.map((donor, index) => (
                <motion.div
                  key={`${donor.name}-${donor.timestamp}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  className="py-6 flex items-start gap-4"
                  style={{
                    borderBottom: index < displayedDonors.length - 1 ? '3px solid rgb(203 213 225)' : 'none',
                    borderRadius: '2px'
                  }}
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {getDonorIcon(donor.peopleReached)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-black">{donor.name}</h3>
                    {donor.message && (
                      <p className="text-sm text-black mt-1 mb-2">{donor.message}</p>
                    )}
                    <p className="text-sm text-black">{donor.timestamp}</p>
                  </div>

                  {/* Impact badge */}
                  <div className="text-right flex-shrink-0">
                    <div className="inline-flex flex-col items-end">
                      <div className="bg-black text-white font-bold text-2xl px-4 py-2 rounded-lg mb-1">
                        {(donor.peopleReached / 1000).toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide text-right">
                        <div>PEOPLE TOLD</div>
                        <div>ABOUT JESUS</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* See All / Collapse button */}
          {filteredDonors.length > 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white font-heading text-sm rounded-full transition-colors uppercase tracking-wide"
              >
                {isExpanded ? 'COLLAPSE' : 'SEE ALL'}
              </button>
            </motion.div>
          )}

          {/* No results message */}
          {searchQuery && filteredDonors.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              No donors found matching "{searchQuery}"
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
