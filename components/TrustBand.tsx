'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export function TrustBand() {
  const partners = [
    { name: 'PostClips', width: 120 },
    { name: 'Elevation Church', width: 150 },
    { name: 'Partner 3', width: 110 },
    { name: 'Partner 4', width: 130 },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-bold text-slate-500 text-center mb-8 uppercase tracking-wider">
            Trusted Partners
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div
                  className="relative bg-white rounded-2xl flex items-center justify-center border-2 border-slate-200 hover:border-primary-300 transition-all shadow-sm hover:shadow-md"
                  style={{ width: partner.width, height: 70 }}
                  role="img"
                  aria-label={`${partner.name} logo`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Building2 className="w-6 h-6 text-slate-400" />
                    <span className="text-slate-600 text-xs font-semibold px-2 text-center">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs text-slate-500 text-center italic"
          >
            Placeholder logos for demonstration. Replace with actual partner branding.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}