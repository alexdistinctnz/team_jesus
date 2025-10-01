'use client';

import { motion } from 'framer-motion';
import { DonateWidget } from './DonateWidget';

export function ImpactStats() {

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
              <div className="text-4xl md:text-7xl font-display font-black text-white tabular-nums mb-4">
                10,029,090
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

          {/* Right side - Donation Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <DonateWidget />
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
