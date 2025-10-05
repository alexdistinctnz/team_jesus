'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Fish } from 'lucide-react';
import { DonateWidgetPopup } from './DonateWidgetPopup';
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
        return <Image src="/images/1_sandals_icon.svg" alt="Sandals" width={80} height={80} />;
      case 'fish-loaves':
        return <Image src="/images/2_fish_and_loaves_icon.svg" alt="Fish and Loaves" width={80} height={80} />;
      case 'staff':
        return <Image src="/images/3_staff_icon.svg" alt="Staff" width={80} height={80} />;
      case 'fish-net':
        return <Image src="/images/4_fish_and_net_icon.svg" alt="Fish and Net" width={80} height={80} />;
      default:
        return (
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-2" style={{ borderColor: '#161616' }}>
            <span className="text-6xl font-bold text-black">?</span>
          </div>
        );
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
    <section className="py-20 text-white relative overflow-hidden" style={{ backgroundColor: '#161616' }}>
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
              <p className="text-3xl md:text-5xl font-sans font-extrabold mb-4 text-white relative z-10">You told</p>

              {/* Radial gradient circle behind number - positioned around "about" */}
              <div className="relative mb-0">
                <div className="absolute inset-0 flex items-center justify-start pointer-events-none -z-10">
                  <div className="w-[440px] h-[440px] -translate-x-[10px] translate-y-[120px] bg-gradient-radial from-[#0973AC] via-[#0973AC]/50 to-transparent rounded-full blur-3xl"></div>
                </div>
                <div className="relative text-[2.625rem] md:text-[5.25rem] font-sans font-extrabold text-white tabular-nums leading-tight z-10">
                  10,029,090
                </div>
              </div>

              <p className="text-3xl md:text-5xl font-sans font-extrabold text-white relative z-10">people about Jesus!</p>
            </div>

            <p className="text-xl md:text-2xl font-extrabold text-white leading-relaxed max-w-xl relative z-10 mt-10">
              These people might have never heard the word without YOU.
            </p>

            <div className="pt-6 relative z-10">
              <blockquote className="text-white font-semibold text-base md:text-lg leading-relaxed">
                "Whoever brings back a sinner from his wandering<br />will save his soul from death and will cover a multitude of sins."
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
            <div className="flex items-start gap-6 mb-8">
              {/* Donate Widget Container with donor circles below */}
              <div className="flex flex-col gap-4">
                <DonateWidgetPopup />

                {/* Donor circles below - 2 rows of 5 */}
                <div className="grid grid-cols-5 gap-2 justify-items-center">
                  {topDonors.map((donor, index) => (
                    <motion.div
                      key={donor.id}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 flex items-center justify-center"
                    >
                      {getDonorIcon(donor.icon)}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Progress Bar Section */}
              <div className="flex flex-col items-center">
                {/* Next level icon - Gates */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-4"
                >
                  <Image src="/images/5_gates_icon.svg" alt="Gates" width={80} height={80} />
                </motion.div>

                {/* Vertical Progress Bar */}
                <div className="relative w-20 h-[558px] bg-white overflow-hidden mb-2">
                  {/* Progress label above gradient */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center z-10">
                    <p className="text-xs font-bold text-black">10M/25M</p>
                  </div>

                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '40%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="absolute bottom-0 w-full bg-gradient-to-t from-primary-500 to-primary-400"
                  />
                </div>

                {/* Fisherman Badge Label */}
                <p className="text-xs font-bold text-white mb-2">Fisherman</p>

                {/* Current level icon - Fish and Net */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <Image src="/images/4_fish_and_net_icon.svg" alt="Fish and Net" width={80} height={80} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
