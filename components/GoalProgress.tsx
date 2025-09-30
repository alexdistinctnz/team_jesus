'use client';

import { motion } from 'framer-motion';
import { GOAL_DOLLARS, GOAL_PEOPLE, formatCurrency, formatNumber } from '@/lib/config';

interface GoalProgressProps {
  peopleReached: number;
  amountRaised: number;
}

export function GoalProgress({ peopleReached, amountRaised }: GoalProgressProps) {
  const dollarProgress = Math.min((amountRaised / GOAL_DOLLARS) * 100, 100);
  const peopleProgress = Math.min((peopleReached / GOAL_PEOPLE) * 100, 100);

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Dollars Raised</span>
          <span className="text-xs font-medium text-slate-600">
            {formatCurrency(amountRaised)} / {formatCurrency(GOAL_DOLLARS)}
          </span>
        </div>
        <div className="relative h-4 bg-slate-200 rounded-full overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${dollarProgress}%` }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full relative overflow-hidden"
            role="progressbar"
            aria-valuenow={dollarProgress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${dollarProgress.toFixed(1)}% of fundraising goal reached`}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-shine opacity-40"
              animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 100%' }}
            />
          </motion.div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">People Reached</span>
          <span className="text-xs font-medium text-slate-600">
            {formatNumber(peopleReached)} / {formatNumber(GOAL_PEOPLE)}
          </span>
        </div>
        <div className="relative h-4 bg-slate-200 rounded-full overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${peopleProgress}%` }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            className="h-full bg-gradient-to-r from-accent-500 to-accent-700 rounded-full relative overflow-hidden"
            role="progressbar"
            aria-valuenow={peopleProgress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${peopleProgress.toFixed(2)}% of people reached goal achieved`}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-shine opacity-40"
              animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
              style={{ backgroundSize: '200% 100%' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}