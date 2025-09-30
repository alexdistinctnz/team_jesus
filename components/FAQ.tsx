'use client';

import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Where does my donation go?',
    answer: '100% of donations go directly to commission payments for clippers who create and distribute Gospel content. PostClips operations are funded separately through business revenue.',
  },
  {
    question: 'Who are the clippers?',
    answer: 'Clippers are content creators who cut and post short-form Gospel videos across social media platforms. They are compensated at $0.01 per 10 views, ensuring results-driven impact.',
  },
  {
    question: 'Is my donation tax-deductible?',
    answer: 'Tax-deductibility depends on the legal structure of the receiving organization. Please consult with your tax advisor for specific guidance. (Note: Update this answer based on actual non-profit status.)',
  },
  {
    question: 'How do you track people reached?',
    answer: 'We track video views across platforms. Each donation of $1 funds content that reaches approximately 1,000 people with the Gospel message.',
  },
  {
    question: 'Can I cancel my monthly donation?',
    answer: 'Yes, you can cancel your monthly donation at any time by contacting us at hello@postclips.com.',
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-primary-700" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">Have Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4 mb-12">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion.Item
                value={`item-${index}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border-2 border-slate-100 hover:border-primary-200 overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className={cn(
                      "w-full px-6 py-5 text-left flex items-center justify-between",
                      "hover:bg-slate-50 transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/50 focus-visible:ring-inset"
                    )}
                  >
                    <span className="font-semibold text-lg text-slate-900 pr-4 group-hover:text-primary-700 transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown className="w-5 h-5 text-primary-700 flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-slate-700 leading-relaxed">{item.answer}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl shadow-card p-10 border-2 border-primary-200"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Still Have Questions?</h3>
          <p className="text-lg text-slate-700 mb-6 max-w-md mx-auto">
            We'd love to hear from you. Reach out anytime.
          </p>
          <motion.a
            href="mailto:hello@postclips.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-700 text-white font-bold rounded-2xl hover:bg-primary-800 shadow-lg hover:shadow-xl transition-all"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}