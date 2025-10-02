'use client';

import { motion } from 'framer-motion';
import { useMetrics } from '@/hooks/useMetrics';
import { ImpactCounter } from './ImpactCounter';
import { DonateWidget } from './DonateWidget';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Hero() {
  const { metrics, isLoading } = useMetrics();
  const [cloudCount, setCloudCount] = useState(6);

  // Adjust cloud count based on screen size
  useEffect(() => {
    const updateCloudCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCloudCount(3); // Mobile: 3 clouds
      } else if (width < 1024) {
        setCloudCount(5); // Tablet: 5 clouds
      } else if (width < 1536) {
        setCloudCount(8); // Desktop: 8 clouds
      } else {
        setCloudCount(10); // Large screens: 10 clouds
      }
    };

    updateCloudCount();
    window.addEventListener('resize', updateCloudCount);
    return () => window.removeEventListener('resize', updateCloudCount);
  }, []);

  // All possible clouds - we'll slice based on cloudCount
  // Random scale between 1.0 and 2.0 for each cloud
  const allClouds = [
    {
      src: '/images/cloud_white.svg',
      top: '10%',
      startX: '-15%',
      endX: '100%',
      width: 200,
      opacity: 0.7,
      blur: 1,
      duration: 80,
      delay: 0,
      scale: 1 + Math.random()
    },
    {
      src: '/images/cloud_eccf89.svg',
      top: '20%',
      startX: '10%',
      endX: '115%',
      width: 150,
      opacity: 0.8,
      blur: 0.5,
      duration: 100,
      delay: 5,
      scale: 1 + Math.random()
    },
    {
      src: '/images/cloud_f5e9cb.svg',
      top: '35%',
      startX: '60%',
      endX: '125%',
      width: 180,
      opacity: 0.75,
      blur: 1,
      duration: 90,
      delay: 10,
      scale: 1 + Math.random()
    },
    {
      src: '/images/cloud_d8c688.svg',
      top: '15%',
      startX: '70%',
      endX: '130%',
      width: 160,
      opacity: 0.85,
      blur: 0.5,
      duration: 95,
      delay: 15,
      scale: 1 + Math.random()
    },
    {
      src: '/images/cloud_white.svg',
      top: '5%',
      startX: '40%',
      endX: '120%',
      width: 140,
      opacity: 0.7,
      blur: 1.5,
      duration: 110,
      delay: 20,
      scale: 1 + Math.random()
    },
    {
      src: '/images/cloud_eccf89.svg',
      top: '30%',
      startX: '-10%',
      endX: '105%',
      width: 170,
      opacity: 0.8,
      blur: 1,
      duration: 85,
      delay: 25,
      scale: 1 + Math.random()
    },
    {
      src: '/images/cloud_d8c688.svg',
      top: '8%',
      startX: '25%',
      endX: '110%',
      width: 155,
      opacity: 0.75,
      blur: 0.8,
      duration: 92,
      delay: 30,
      scale: 1 + Math.random()
    },
    {
      src: '/images/cloud_f5e9cb.svg',
      top: '28%',
      startX: '50%',
      endX: '140%',
      width: 165,
      opacity: 0.8,
      blur: 1.2,
      duration: 88,
      delay: 35,
      scale: 1 + Math.random()
    },
    {
      src: '/images/cloud_white.svg',
      top: '18%',
      startX: '-5%',
      endX: '95%',
      width: 145,
      opacity: 0.7,
      blur: 1,
      duration: 105,
      delay: 40,
      scale: 1 + Math.random()
    },
    {
      src: '/images/cloud_eccf89.svg',
      top: '12%',
      startX: '80%',
      endX: '135%',
      width: 175,
      opacity: 0.85,
      blur: 0.6,
      duration: 98,
      delay: 45,
      scale: 1 + Math.random()
    },
  ];

  const clouds = allClouds.slice(0, cloudCount);

  return (
    <section className="relative pt-10 md:pt-16 pb-20 md:pb-32 overflow-hidden">
      {/* Sunrise Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-orange-200 to-yellow-100" />

      {/* Floating Clouds */}
      {clouds.map((cloud, index) => (
        <motion.div
          key={index}
          className="absolute z-10"
          style={{
            top: cloud.top,
            filter: `blur(${cloud.blur}px)`,
            opacity: cloud.opacity,
            width: `${cloud.width * cloud.scale}px`,
          }}
          animate={{
            left: [cloud.startX, cloud.endX],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: cloud.delay,
          }}
        >
          <img
            src={cloud.src}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </motion.div>
      ))}

      {/* Gradient overlay - fade to white at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
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