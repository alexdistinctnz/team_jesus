'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Footer() {
  return (
    <div className="relative text-primary-900 py-12 overflow-hidden bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top row - Hashtag with logo on right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6"
        >
          <div className="font-heading text-2xl font-bold">
            #TEAMJESUS
          </div>

          {/* Logo on right */}
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1">
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

        {/* Middle row - Navigation links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-4"
        >
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-12 font-heading text-base font-bold">
            <a href="#faq" className="hover:text-[#D4AF76] transition-colors">
              FAQ
            </a>
            <a href="mailto:hello@postclips.com" className="hover:text-[#D4AF76] transition-colors">
              CONTACT US
            </a>
            <a href="#how-it-works" className="hover:text-[#D4AF76] transition-colors">
              RESOURCES
            </a>
          </nav>
        </motion.div>

        {/* Bottom row - Legal links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-8 text-sm">
            <a href="/privacy" className="hover:text-[#D4AF76] transition-colors">
              PRIVACY POLICY
            </a>
            <a href="/terms" className="hover:text-[#D4AF76] transition-colors">
              TERMS
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}