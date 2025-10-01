'use client';

import { useEffect, useState } from 'react';
import { formatNumber } from '@/lib/config';

interface ImpactCounterProps {
  value: number;
  label: string;
  isLoading?: boolean;
  large?: boolean;
}

export function ImpactCounter({ value, label, isLoading, large = false }: ImpactCounterProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value === displayValue) return;

    setIsAnimating(true);
    const duration = 1000;
    const steps = 30;
    const increment = (value - displayValue) / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep === steps) {
        setDisplayValue(value);
        setIsAnimating(false);
        clearInterval(timer);
      } else {
        setDisplayValue(prev => prev + increment);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, displayValue]);

  return (
    <div className="text-center">
      <div
        className={
          large
            ? "text-4xl md:text-8xl font-display font-black text-primary-900 tabular-nums transition-opacity duration-300"
            : "text-3xl md:text-4xl font-bold text-primary-700 tabular-nums transition-opacity duration-300"
        }
        aria-live="polite"
        aria-atomic="true"
        style={{
          opacity: isLoading ? 0.5 : 1,
        }}
      >
        {isLoading ? '—' : formatNumber(Math.floor(displayValue))}
      </div>
      {label && <div className="text-sm text-slate-600 mt-1">{label}</div>}
    </div>
  );
}