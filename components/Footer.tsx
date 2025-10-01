'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Footer() {
  return (
    <div className="relative bg-primary-600 text-white py-16 overflow-hidden">
      {/* Ripple circles decoration at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none opacity-30">
        <svg className="w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="xMidYMid meet">
          <ellipse cx="600" cy="60" rx="500" ry="50" fill="none" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="600" cy="60" rx="400" ry="40" fill="none" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="600" cy="60" rx="300" ry="30" fill="none" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="600" cy="60" rx="200" ry="20" fill="none" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="600" cy="60" rx="100" ry="10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main navigation and logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12"
        >
          {/* Navigation links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8 font-heading text-sm">
            <a href="#faq" className="hover:text-white/80 transition-colors">
              FAQ
            </a>
            <a href="mailto:hello@postclips.com" className="hover:text-white/80 transition-colors">
              CONTACT US
            </a>
            <a href="#how-it-works" className="hover:text-white/80 transition-colors">
              RESOURCES
            </a>
          </nav>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2">
              <Image
                src="/images/Team_Jesus_Logo.png"
                alt="PostClips"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Hashtags and legal links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center space-y-4"
        >
          <div className="font-heading text-lg">
            #TEAMJESUS #POSTCLIPS
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}