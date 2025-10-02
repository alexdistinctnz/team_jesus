'use client';

import { motion } from 'framer-motion';
import { useMetrics } from '@/hooks/useMetrics';
import { ImpactCounter } from './ImpactCounter';
import { DonateWidget } from './DonateWidget';
import Image from 'next/image';

export function Hero() {
  const { metrics, isLoading } = useMetrics();

  return (
    <section className="relative pt-10 md:pt-16 pb-20 md:pb-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo and Main heading - centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/Team_Jesus_Logo.png"
              alt="PostClips Logo"
              width={144}
              height={144}
              className="w-22 md:w-36 h-auto"
            />
          </div>

          <h1 className="text-3xl md:text-7xl font-display text-primary-900 mb-4 tracking-tight">
            <span className="font-extralight">#TEAM</span>
            <span className="font-black">JESUS</span>
          </h1>
          <p className="text-base md:text-lg text-primary-900 font-black">
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
            <p className="text-primary-900 text-base md:text-2xl font-black mt-2 uppercase tracking-wide">
              People told about Jesus
            </p>
          </div>
        </motion.div>

        {/* Donation widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto"
          style={{ maxWidth: '432px' }}
        >
          <DonateWidget />
        </motion.div>
      </div>
    </section>
  );
}