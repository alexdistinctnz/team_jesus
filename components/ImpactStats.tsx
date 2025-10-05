'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Fish } from 'lucide-react';
import { DonateWidget } from './DonateWidget';
import Image from 'next/image';

export function ImpactStats() {
  // Mock data for donor circles
  const topDonors = [
    { id: 1, icon: 'sandals', amount: 500000 },
    { id: 2, icon: 'fish-loaves', amount: 250000 },
    { id: 3, icon: 'staff', amount: 100000 },
    { id: 4, icon: 'fish-net', amount: 75000 },
    { id: 5, icon: 'question', amount: 50000 },
    { id: 6, icon: 'question', amount: 25000 },
    { id: 7, icon: 'question', amount: 10000 },
    { id: 8, icon: 'question', amount: 5000 },
    { id: 9, icon: 'question', amount: 2500 },
    { id: 10, icon: 'question', amount: 1000 },
  ];

  const getDonorIcon = (iconType: string) => {
    switch (iconType) {
      case 'sandals':
        return <Image src="/images/1_sandals_icon.svg" alt="Sandals" width={52} height={52} />;
      case 'fish-loaves':
        return <Image src="/images/2_fish_and_loaves_icon.svg" alt="Fish and Loaves" width={52} height={52} />;
      case 'staff':
        return <Image src="/images/3_staff_icon.svg" alt="Staff" width={52} height={52} />;
      case 'fish-net':
        return <Image src="/images/4_fish_and_net_icon.svg" alt="Fish and Net" width={52} height={52} />;
      default:
        return <HelpCircle className="w-8 h-8 text-white" />;
    }
  };

  const getDonorColor = (iconType: string) => {
    switch (iconType) {
      case 'sandals':
        return 'from-yellow-600 to-yellow-500';
      case 'fish-loaves':
        return 'from-amber-600 to-amber-400';
      case 'staff':
        return 'from-blue-600 to-blue-400';
      case 'fish-net':
        return 'from-cyan-600 to-cyan-400';
      default:
        return 'from-slate-400 to-slate-300';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ transform: 'scale(0.75)', transformOrigin: 'center' }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Impact stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative">
              <p className="text-2xl md:text-4xl font-sans font-extrabold mb-4 text-white relative z-10">You told</p>

              {/* Radial gradient circle behind number - positioned around "about" */}
              <div className="relative mb-0">
                <div className="absolute inset-0 flex items-center justify-start pointer-events-none -z-10">
                  <div className="w-[400px] h-[400px] -translate-x-[50px] translate-y-[120px] bg-gradient-radial from-[#0973AC] via-[#0973AC]/50 to-transparent rounded-full blur-3xl"></div>
                </div>
                <div className="relative text-[2.625rem] md:text-[5.25rem] font-sans font-extrabold text-white tabular-nums leading-tight z-10">
                  10,029,090
                </div>
              </div>

              <p className="text-3xl md:text-5xl font-sans font-extrabold text-white relative z-10">people about Jesus!</p>
            </div>

            <p className="text-xl md:text-2xl font-extrabold text-white leading-relaxed max-w-xl relative z-10">
              These people might have never heard the word without YOU.
            </p>

            <div className="pt-6 border-t border-white/20 relative z-10">
              <blockquote className="text-white font-semibold text-base md:text-lg leading-relaxed">
                "Whoever brings back a sinner from his wandering will save his soul from death and will cover a multitude of sins."
              </blockquote>
              <p className="text-sm text-white font-semibold mt-2 text-right">James 5:20 (ESV)</p>
            </div>
          </motion.div>

          {/* Right side - Donation Widget, Progress Bar, and Badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Donate Widget and Progress Bar side by side */}
            <div className="flex items-stretch gap-6 mb-8">
              {/* Donate Widget Container */}
              <div className="flex flex-col">
                <DonateWidget />
              </div>

              {/* Progress Bar Section - matches donate panel height */}
              <div className="flex flex-col items-center justify-between py-4">
                {/* Badge Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-2xl border-4 border-white/20">
                    <Fish className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Vertical Progress Bar - full height */}
                <div className="relative w-20 flex-1 bg-slate-700/50 rounded-full overflow-hidden border-4 border-slate-600/50 my-4">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '40%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="absolute bottom-0 w-full bg-gradient-to-t from-primary-500 to-primary-400 rounded-full"
                  />

                  {/* Progress labels */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-xs font-bold text-white px-2 py-1">10M/25M</p>
                  </div>
                </div>

                {/* Fisherman Badge Label */}
                <p className="text-sm font-heading font-bold">Fisherman</p>
              </div>
            </div>

            {/* Donor circles below - centered under donate widget */}
            <div className="w-full max-w-[440px]">
              <div className="flex flex-wrap justify-center gap-3">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
