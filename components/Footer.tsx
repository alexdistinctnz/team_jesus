'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-slate-300 py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-600 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-display font-bold text-2xl">#TeamJesus</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Raising $8.142M to tell 8.142 billion people about Jesus through PostClips. Every dollar reaches 1,000 people with the Gospel.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#donate"
                  className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  Donate
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  How It Works
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  FAQ
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@postclips.com"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-primary-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                hello@postclips.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-400"
            >
              © {currentYear} PostClips. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 text-slate-500 text-xs"
            >
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              Demo site with mock payment processing
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}