'use client';

import { motion } from 'framer-motion';
import { Crown, Building2, Star, Gift } from 'lucide-react';
import { rewardsInHeavenCards } from '@/content/verses';

const iconMap: Record<string, any> = {
  crowns: Crown,
  authority: Building2,
  'sit-with-christ': Star,
  inheritance: Gift,
};

export function RewardsInHeaven() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Rewards in Heaven
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Scripture teaches that our faithful service is rewarded eternally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewardsInHeavenCards.map((card, index) => {
            const Icon = iconMap[card.id] || Crown;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 60px -10px rgba(0, 0, 0, 0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group h-full bg-gradient-to-br from-white to-primary-50/50 rounded-3xl shadow-card p-6 border-2 border-slate-100 hover:border-primary-300 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    {card.summary}
                  </p>

                  <p className="text-xs text-slate-500 italic font-medium">
                    {card.reference}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}