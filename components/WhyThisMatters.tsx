'use client';

import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Book } from 'lucide-react';
import { whyThisMattersVerses } from '@/content/verses';
import { trackEvent } from '@/utils/analytics';
import { cn } from '@/lib/utils';

export function WhyThisMatters() {
  const handleValueChange = (value: string) => {
    if (value) {
      trackEvent('accordion_opened', { itemId: value });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-primary-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <Book className="w-4 h-4 text-primary-700" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">Biblical Foundation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Why This Matters
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Scripture calls us to share the Gospel and make disciples of all nations.
          </p>
        </motion.div>

        <Accordion.Root
          type="single"
          collapsible
          onValueChange={handleValueChange}
          className="space-y-4"
        >
          {whyThisMattersVerses.map((verse, index) => (
            <motion.div
              key={verse.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion.Item
                value={verse.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary-200 overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className={cn(
                      "w-full px-6 py-5 text-left flex items-center justify-between rounded-t-2xl",
                      "hover:bg-slate-50 transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/50 focus-visible:ring-inset"
                    )}
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">
                        {verse.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium">{verse.reference}</p>
                    </div>
                    <ChevronDown
                      className="w-6 h-6 text-primary-700 transition-transform duration-300 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-5 pt-2">
                    <div className="pl-4 border-l-4 border-primary-200">
                      <p className="text-slate-700 leading-relaxed">{verse.summary}</p>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}