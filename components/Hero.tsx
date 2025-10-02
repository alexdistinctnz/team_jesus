'use client';

import { motion } from 'framer-motion';
import { useMetrics } from '@/hooks/useMetrics';
import { ImpactCounter } from './ImpactCounter';
import { DonateWidget } from './DonateWidget';
import Image from 'next/image';

export function Hero() {
  const { metrics, isLoading } = useMetrics();

  // Cloud configurations with random properties
  const clouds = [
    {
      src: '/images/cloud_white.svg',
      top: '10%',
      left: '-10%',
      width: 200,
      opacity: 0.7,
      blur: 1,
      duration: 80,
      delay: 0
    },
    {
      src: '/images/cloud_eccf89.svg',
      top: '20%',
      left: '20%',
      width: 150,
      opacity: 0.8,
      blur: 0.5,
      duration: 100,
      delay: 5
    },
    {
      src: '/images/cloud_f5e9cb.svg',
      top: '35%',
      left: '60%',
      width: 180,
      opacity: 0.75,
      blur: 1,
      duration: 90,
      delay: 10
    },
    {
      src: '/images/cloud_d8c688.svg',
      top: '15%',
      left: '70%',
      width: 160,
      opacity: 0.85,
      blur: 0.5,
      duration: 95,
      delay: 15
    },
    {
      src: '/images/cloud_white.svg',
      top: '5%',
      left: '40%',
      width: 140,
      opacity: 0.7,
      blur: 1.5,
      duration: 110,
      delay: 20
    },
    {
      src: '/images/cloud_eccf89.svg',
      top: '30%',
      left: '-5%',
      width: 170,
      opacity: 0.8,
      blur: 1,
      duration: 85,
      delay: 25
    },
  ];

  return (
    <section className="relative pt-10 md:pt-16 pb-20 md:pb-32 overflow-hidden">
      {/* Sunrise Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-orange-200 to-yellow-100" />

      {/* Floating Clouds */}
      {clouds.map((cloud, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: cloud.top,
            left: cloud.left,
            filter: `blur(${cloud.blur}px)`,
            opacity: cloud.opacity,
          }}
          animate={{
            x: ['0%', '100vw'],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: cloud.delay,
          }}
        >
          <Image
            src={cloud.src}
            alt=""
            width={cloud.width}
            height={cloud.width * 0.6}
            className="w-auto h-auto"
          />
        </motion.div>
      ))}

      {/* Gradient overlay - fade to white at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white pointer-events-none" />

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
              width={180}
              height={180}
              className="w-28 md:w-44 h-auto"
            />
          </div>

          <h1 className="text-2xl md:text-6xl font-display text-primary-900 mb-4 tracking-tight">
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
          className="max-w-2xl mx-auto"
          style={{ transform: 'scale(0.6)', transformOrigin: 'top center' }}
        >
          <DonateWidget />
        </motion.div>
      </div>
    </section>
  );
}