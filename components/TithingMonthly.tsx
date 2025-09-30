'use client';

import { motion } from 'framer-motion';
import { Calendar, Heart } from 'lucide-react';

export function TithingMonthly() {
  const handleMonthlyClick = () => {
    const donateSection = document.getElementById('donate');
    donateSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-emerald-700" />
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Recurring Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Consider Monthly Giving
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-gradient-to-br from-emerald-50 via-accent-50 to-primary-50 rounded-3xl shadow-card-hover p-10 border-2 border-emerald-200 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10">
            <div className="text-lg text-slate-700 space-y-6 mb-8">
              <p className="leading-relaxed">
                <strong className="text-emerald-800">Tithing</strong>—giving the first 10% of your income—is a biblical principle that honors God and
                advances His kingdom. Monthly giving provides <strong className="text-emerald-800">consistent support</strong> for ongoing Gospel outreach.
              </p>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-200">
                <p className="font-semibold text-emerald-900 text-xl mb-2">
                  PostClips allocates 10% of monthly profits to #TeamJesus
                </p>
                <p className="text-slate-700">
                  As our business grows, so does our impact for the Gospel.
                </p>
              </div>
            </div>

            <div className="text-center">
              <motion.button
                onClick={handleMonthlyClick}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(5, 150, 105, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-accent-700 text-white font-bold text-lg rounded-2xl shadow-glow-emerald transition-all"
              >
                <Heart className="w-5 h-5" />
                Make This Monthly
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}