'use client';

import { motion } from 'framer-motion';
import { Shield, DollarSign, TrendingUp } from 'lucide-react';

export function Stewardship() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 rounded-full mb-4">
            <Shield className="w-4 h-4 text-accent-700" />
            <span className="text-sm font-semibold text-accent-700 uppercase tracking-wide">Trust & Transparency</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Faithful Stewardship
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-card-hover p-10 border-2 border-slate-200"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <motion.div
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-2xl mb-4">
                <DollarSign className="w-8 h-8 text-accent-700" />
              </div>
              <h3 className="text-3xl font-display font-bold text-accent-700 mb-2">100%</h3>
              <p className="text-sm text-slate-600 font-medium">to Commissions</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                <TrendingUp className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-3xl font-display font-bold text-primary-700 mb-2">$0.01</h3>
              <p className="text-sm text-slate-600 font-medium">per 10 Views</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
                <Shield className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-3xl font-display font-bold text-purple-700 mb-2">0%</h3>
              <p className="text-sm text-slate-600 font-medium">Admin Overhead</p>
            </motion.div>
          </div>

          <div className="space-y-6 text-lg text-slate-700">
            <p className="leading-relaxed">
              We take stewardship seriously. Your donations go <strong className="text-primary-700">100% to commission payments</strong> for
              clippers who create and post Gospel content that reaches people around the world.
            </p>
            <p className="leading-relaxed">
              PostClips operates sustainably through revenue from our business services. This allows us to
              ensure that every dollar you give directly funds the mission to reach people with the message of Jesus.
            </p>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border-2 border-primary-200">
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-primary-700">Results-based model:</strong> We pay clippers $0.01 per 10 views, so your investment drives measurable,
                real-world impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}