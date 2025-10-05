'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import { DollarSign, Heart, Sparkles, CheckCircle, Loader2 } from 'lucide-react';
import { mockPaymentProvider } from '@/providers/mockPayment';
import { calculatePeopleReached, formatNumber } from '@/lib/config';
import { useMetrics } from '@/hooks/useMetrics';
import { trackEvent } from '@/utils/analytics';
import { cn } from '@/lib/utils';

type DonationState = 'idle' | 'processing' | 'success' | 'error';

export function DonateWidgetPopup() {
  const [amount, setAmount] = useState<string>('25');
  const [isMonthly, setIsMonthly] = useState(false);
  const [state, setState] = useState<DonationState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const { updateMetrics } = useMetrics();

  const amountNum = parseFloat(amount) || 0;
  const impactPeople = calculatePeopleReached(amountNum);

  const quickAmounts = [10, 25, 50, 100];

  const handleAmountChange = (value: string) => {
    setAmount(value);
    trackEvent('donation_amount_changed', { amount: parseFloat(value) || 0 });
  };

  const handleQuickAmount = (quickAmount: number) => {
    setAmount(String(quickAmount));
    trackEvent('donation_quick_amount', { amount: quickAmount });
  };

  const handleMonthlyToggle = (value: string) => {
    const monthly = value === 'monthly';
    setIsMonthly(monthly);
    trackEvent('donation_frequency_toggled', { isMonthly: monthly });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (amountNum < 1) {
      setErrorMessage('Minimum donation is $1');
      return;
    }

    setState('processing');
    setErrorMessage('');
    trackEvent('donation_submit', { amount: amountNum, isMonthly });

    try {
      const response = await mockPaymentProvider.processDonation({
        amount: amountNum,
        isMonthly,
      });

      if (response.success) {
        setTransactionId(response.transactionId ?? '');
        setState('success');
        await updateMetrics(amountNum);
        trackEvent('donation_success', {
          amount: amountNum,
          isMonthly,
          transactionId: response.transactionId,
        });
      } else {
        setErrorMessage(response.error ?? 'Payment failed');
        setState('error');
        trackEvent('donation_error', { error: response.error });
      }
    } catch (err) {
      setErrorMessage('Something went wrong. Please try again.');
      setState('error');
      trackEvent('donation_error', { error: String(err) });
    }
  };

  const handleReset = () => {
    setState('idle');
    setAmount('25');
    setIsMonthly(false);
    setTransactionId('');
  };

  if (state === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-gradient-to-br from-accent-50 to-emerald-100 rounded-3xl p-10 text-center border-2 border-accent-300 shadow-glow-emerald overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-shine opacity-20"
          animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: '200% 100%' }}
        />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-600 rounded-full mb-6 shadow-xl">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-3xl font-display font-bold text-accent-900 mb-3">Thank You!</h3>
          <p className="text-lg text-accent-800 mb-4">
            Your {isMonthly ? 'monthly' : 'one-time'} donation of <strong>${amountNum}</strong> will help{' '}
            <strong className="text-accent-900">{formatNumber(impactPeople)} people</strong> hear about Jesus.
          </p>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 mb-6">
            <p className="text-sm text-accent-700 font-medium mb-1">Transaction ID</p>
            <code className="text-xs bg-accent-100 px-3 py-1 rounded-lg text-accent-900 font-mono">
              {transactionId}
            </code>
          </div>
          <motion.button
            onClick={handleReset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent-700 text-white font-heading text-sm rounded-2xl hover:bg-accent-800 shadow-lg hover:shadow-xl transition-all"
          >
            Make Another Donation
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative rounded-3xl shadow-card-hover px-4 py-6 md:px-5 md:py-8 transition-all duration-500 overflow-hidden bg-white border-4"
      style={isMonthly ? { borderColor: '#D4AF76' } : { borderColor: '#ffffff' }}
    >
      {isMonthly && (
        <motion.div
          className="absolute inset-0 bg-shine opacity-10"
          animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: '200% 100%' }}
        />
      )}
      <h3 className="relative z-10 text-xl md:text-2xl font-heading font-bold text-slate-900 text-center mb-6">
        DONATE TO #TEAMJESUS
      </h3>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        {/* Frequency Tabs */}
        <Tabs.Root value={isMonthly ? 'monthly' : 'onetime'} onValueChange={handleMonthlyToggle}>
          <Tabs.List className="grid grid-cols-2 gap-2 p-1.5 bg-slate-100 rounded-2xl">
            <Tabs.Trigger
              value="onetime"
              className={cn(
                "py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                "data-[state=active]:bg-white data-[state=active]:text-primary-700 data-[state=active]:shadow-md",
                "data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:text-slate-900"
              )}
            >
              One-Time
            </Tabs.Trigger>
            <Tabs.Trigger
              value="monthly"
              className={cn(
                "py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                "data-[state=active]:bg-white data-[state=active]:text-primary-700 data-[state=active]:shadow-md",
                "data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:text-slate-900"
              )}
            >
              Monthly
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>

        {/* Quick Amount Buttons - First Row: $10, $25, $50 */}
        <div className="grid grid-cols-3 gap-2">
          {quickAmounts.slice(0, 3).map((quickAmount) => (
            <button
              key={quickAmount}
              type="button"
              onClick={() => handleQuickAmount(quickAmount)}
              className={cn(
                "py-4 rounded-xl font-heading text-base transition-all",
                "focus:outline-none focus:ring-2",
                isMonthly ? "focus:ring-amber-700" : "focus:ring-primary-500",
                amountNum === quickAmount
                  ? isMonthly
                    ? "text-slate-900 shadow-lg"
                    : "bg-primary-600 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-300"
              )}
              style={amountNum === quickAmount && isMonthly ? { backgroundColor: '#E9DBBD' } : {}}
              disabled={state === 'processing'}
            >
              ${quickAmount}
            </button>
          ))}
        </div>

        {/* Second Row: $100 button aligned to the left */}
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => handleQuickAmount(100)}
            className={cn(
              "py-4 rounded-xl font-heading text-base transition-all",
              "focus:outline-none focus:ring-2",
              isMonthly ? "focus:ring-amber-700" : "focus:ring-primary-500",
              amountNum === 100
                ? isMonthly
                  ? "text-slate-900 shadow-lg"
                  : "bg-primary-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-300"
            )}
            style={amountNum === 100 && isMonthly ? { backgroundColor: '#E9DBBD' } : {}}
            disabled={state === 'processing'}
          >
            $100
          </button>

          {/* Custom Amount - spans 2 columns to align with $25 and $50 */}
          <div className="col-span-2">
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                min="1"
                step="1"
                className="w-full pl-12 pr-4 py-4 border-2 border-slate-300 rounded-xl text-base font-semibold focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-all"
                aria-describedby="impact-preview"
                disabled={state === 'processing'}
                placeholder="Other amount"
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <AnimatePresence>
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-800 font-medium"
              role="alert"
            >
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button - simpler TeamWater style */}
        <button
          type="submit"
          disabled={state === 'processing' || amountNum < 1}
          className={cn(
            "w-full py-5 font-heading text-lg rounded-2xl transition-all duration-300",
            "focus:outline-none focus:ring-4",
            isMonthly ? "focus:ring-amber-300" : "focus:ring-primary-300",
            state === 'processing' || amountNum < 1
              ? "bg-slate-300 text-slate-500 cursor-not-allowed"
              : isMonthly
                ? "text-slate-900 shadow-lg hover:shadow-xl"
                : "bg-primary-600 text-white shadow-lg hover:bg-primary-700 hover:shadow-xl"
          )}
          style={!(state === 'processing' || amountNum < 1) && isMonthly ? { backgroundColor: '#E9DBBD' } : {}}
        >
          {state === 'processing' ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </span>
          ) : (
            `NEXT: $${amountNum}`
          )}
        </button>

        {/* Alternative payment methods button */}
        <button
          type="button"
          className="w-full py-4 font-heading text-sm rounded-2xl border-2 border-slate-300 text-slate-700 hover:border-primary-500 hover:text-primary-700 transition-all duration-300"
        >
          Crypto, ACH & DAFPay Donations
        </button>

        <p className="text-xs text-center text-slate-500">
          This is a demo using a mock payment provider. No actual charges will be made.
        </p>
      </form>
    </motion.div>
  );
}
