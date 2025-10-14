'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Footer() {
  return (
    <div className="relative text-black py-12 overflow-hidden">
      {/* Gradient background from white to orange */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5E6D3] to-[#F0C89F] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Desktop layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex items-center justify-between"
        >
          {/* #TeamJesus */}
          <div className="font-heading text-2xl font-bold">
            #TEAMJESUS
          </div>

          {/* Contact Us */}
          <nav className="font-heading text-base font-bold">
            <a href="mailto:hello@postclips.com" className="hover:text-white transition-colors">
              CONTACT US
            </a>
          </nav>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-0.5">
              <Image
                src="/images/Team_Jesus_Logo.png"
                alt="Team Jesus"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Mobile layout - stacked */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:hidden flex flex-col items-center gap-6"
        >
          {/* Logo */}
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-0.5">
              <Image
                src="/images/Team_Jesus_Logo.png"
                alt="Team Jesus"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* #TeamJesus */}
          <div className="font-heading text-2xl font-bold">
            #TEAMJESUS
          </div>

          {/* Contact Us */}
          <nav className="font-heading text-base font-bold">
            <a href="mailto:hello@postclips.com" className="hover:text-white transition-colors">
              CONTACT US
            </a>
          </nav>
        </motion.div>
      </div>
    </div>
  );
}