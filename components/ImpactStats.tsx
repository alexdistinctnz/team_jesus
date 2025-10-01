'use client';

import { motion } from 'framer-motion';
import { ImpactCounter } from './ImpactCounter';
import { Crown, Star, Sparkles, Heart, HelpCircle, Fish } from 'lucide-react';

export function ImpactStats() {
  // Mock data for donor circles
  const topDonors = [
    { id: 1, icon: 'crown', amount: 500000 },
    { id: 2, icon: 'star', amount: 250000 },
    { id: 3, icon: 'sparkles', amount: 100000 },
    { id: 4, icon: 'star', amount: 75000 },
    { id: 5, icon: 'question', amount: 50000 },
    { id: 6, icon: 'question', amount: 25000 },
    { id: 7, icon: 'question', amount: 10000 },
    { id: 8, icon: 'question', amount: 5000 },
    { id: 9, icon: 'question', amount: 2500 },
    { id: 10, icon: 'question', amount: 1000 },
  ];

  const getDonorIcon = (iconType: string) => {
    switch (iconType) {
      case 'crown':
        return <Crown className="w-8 h-8 text-white" />;
      case 'star':
        return <Star className="w-8 h-8 text-white fill-white" />;
      case 'sparkles':
        return <Sparkles className="w-8 h-8 text-white" />;
      case 'heart':
        return <Heart className="w-8 h-8 text-white fill-white" />;
      default:
        return <HelpCircle className="w-8 h-8 text-white" />;
    }
  };

  const getDonorColor = (iconType: string) => {
    switch (iconType) {
      case 'crown':
        return 'from-yellow-600 to-yellow-500';
      case 'star':
        return 'from-amber-600 to-amber-400';
      case 'sparkles':
        return 'from-blue-600 to-blue-400';
      case 'heart':
        return 'from-red-600 to-red-400';
      default:
        return 'from-slate-400 to-slate-300';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Impact stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-2xl md:text-4xl font-heading mb-4">You told</p>
              <div className="mb-4">
                <ImpactCounter targetValue={10029090} large={true} />
              </div>
              <p className="text-2xl md:text-4xl font-heading font-bold">people about Jesus!</p>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              These people might have never heard the word without YOU.
            </p>

            <div className="pt-6 border-t border-white/20">
              <blockquote className="italic text-white/80 text-base md:text-lg leading-relaxed">
                "Whoever brings back a sinner from his wandering will save his soul from death and will cover a multitude of sins."
              </blockquote>
              <p className="text-sm text-white/60 mt-2">— James 5:20 (ESV)</p>
            </div>
          </motion.div>

          {/* Right side - Vertical progress and badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Badge Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-2xl border-4 border-white/20">
                <Fish className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Vertical Progress Bar */}
            <div className="relative w-32 h-96 bg-slate-700/50 rounded-full overflow-hidden border-4 border-slate-600/50">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '40%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute bottom-0 w-full bg-gradient-to-t from-primary-500 to-primary-400 rounded-full"
              />

              {/* Progress labels */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-center">
                <p className="text-xs font-bold text-white">10M/25M</p>
              </div>
            </div>

            {/* Fisherman Badge Label */}
            <p className="text-lg font-heading font-bold mt-4">Fisherman</p>

            {/* Donor circles */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-md">
              {topDonors.map((donor, index) => (
                <motion.div
                  key={donor.id}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${getDonorColor(donor.icon)} flex items-center justify-center shadow-lg border-2 border-white/20`}
                >
                  {getDonorIcon(donor.icon)}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <p className="text-xs text-white/40 italic">scroll down for full report</p>
      </div>
    </section>
  );
}
