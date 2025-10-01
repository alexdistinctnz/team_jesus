'use client';

import { motion } from 'framer-motion';
import { Heart, Users, TrendingUp, Sparkles } from 'lucide-react';
import { useMetrics } from '@/hooks/useMetrics';
import { ImpactCounter } from './ImpactCounter';
import { GoalProgress } from './GoalProgress';
import { formatCurrency } from '@/lib/config';

export function Hero() {
  const { metrics, isLoading } = useMetrics();

  const handleDonateClick = () => {
    const donateSection = document.getElementById('donate');
    donateSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoinClick = () => {
    window.location.href = 'mailto:hello@postclips.com?subject=Join%20TeamJesus';
  };

  return (
    <section className="relative bg-primary-600 py-20 md:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Subtle circular patterns similar to TeamWater */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circles" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="1" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main heading - centered and bold like TeamWater */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-8xl font-display text-white mb-6 tracking-tight">
            <span className="font-normal">#TEAM</span>
            <span className="font-black">JESUS</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-black">
            Raising $8M to tell 8 billion people about Jesus
          </p>
        </motion.div>

        {/* Large counter - like TeamWater's prominent counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <ImpactCounter
              value={metrics?.peopleReached ?? 0}
              label=""
              isLoading={isLoading}
              large
            />
            <p className="text-white/90 text-lg font-semibold mt-2 uppercase tracking-wide">
              People told about Jesus
            </p>
          </div>
        </motion.div>

        {/* Centered donation widget card - TeamWater style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-card-hover p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 text-center mb-6">
              DONATE TO #TEAMJESUS
            </h2>
            <p className="text-center text-slate-600 mb-8">
              $1 reaches 1,000 people with the Gospel message
            </p>

            {/* This will be replaced with simplified donation widget */}
            <div className="text-center">
              <motion.button
                onClick={handleDonateClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-primary-600 hover:bg-primary-700 text-white font-bold text-xl rounded-2xl shadow-glow transition-all duration-300"
              >
                Give Now
              </motion.button>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary-600" />
                    <h3 className="text-sm font-semibold text-slate-600 uppercase">Total Raised</h3>
                  </div>
                  <p className="text-3xl font-display font-bold text-slate-900">
                    {formatCurrency(metrics?.amountRaised ?? 0)}
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-accent-600" />
                    <h3 className="text-sm font-semibold text-slate-600 uppercase">Impact</h3>
                  </div>
                  <p className="text-3xl font-display font-bold text-slate-900">
                    $1 = 1,000
                  </p>
                </div>
              </div>
            </div>

            {metrics && (
              <div className="mt-8">
                <GoalProgress
                  peopleReached={metrics.peopleReached}
                  amountRaised={metrics.amountRaised}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}