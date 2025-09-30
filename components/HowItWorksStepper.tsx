'use client';

import { motion } from 'framer-motion';
import { Heart, Video, Target, ArrowRight } from 'lucide-react';

export function HowItWorksStepper() {
  const steps = [
    {
      number: 1,
      icon: Heart,
      title: 'You Donate',
      description: 'Your gift directly funds the mission to reach people with the Gospel.',
      color: 'from-primary-500 to-primary-700',
      bgColor: 'bg-primary-100',
      textColor: 'text-primary-700',
    },
    {
      number: 2,
      icon: Video,
      title: 'Clippers Create Content',
      description: 'PostClips pays creators to cut and post compelling short Gospel videos across platforms.',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
    },
    {
      number: 3,
      icon: Target,
      title: 'Pay Only for Results',
      description: 'We pay clippers $0.01 per 10 views—ensuring every dollar drives real impact.',
      color: 'from-accent-500 to-accent-700',
      bgColor: 'bg-accent-100',
      textColor: 'text-accent-700',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-primary-600 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circles-how" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="1" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles-how)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A simple, transparent process that maximizes impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full z-0">
                    <ArrowRight className="w-8 h-8 text-slate-300 mx-auto -ml-4" />
                  </div>
                )}

                <div className="relative z-10 bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${step.bgColor} rounded-2xl mb-6`}>
                    <Icon className={`w-8 h-8 ${step.textColor}`} />
                  </div>

                  <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${step.color} text-white text-xl font-bold rounded-full mb-4 shadow-lg`}>
                    {step.number}
                  </div>

                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
            <p className="text-lg font-bold text-slate-900 mb-2">
              💯 100% of donations go to clippers as commissions.
            </p>
            <p className="text-sm text-slate-600">
              Operations are funded separately through business revenue.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}