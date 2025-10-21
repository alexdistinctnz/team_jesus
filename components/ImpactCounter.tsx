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
    const duration = 800; // Fast animation for better UX
    const steps = 60; // Increased steps for smoother animation
    const diff = value - displayValue;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep === steps) {
        setDisplayValue(value);
        setIsAnimating(false);
        clearInterval(timer);
      } else {
        // Non-linear easing (ease-out) - starts fast, slows down
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
        setDisplayValue(displayValue + (diff * easeOut));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, displayValue]);

  return (
    <div className="text-center">
      <div
        className={
          large
            ? "text-6xl md:text-8xl font-display font-black text-white tabular-nums transition-opacity duration-300"
            : "text-3xl md:text-4xl font-bold text-primary-700 tabular-nums transition-opacity duration-300"
        }
        aria-live="polite"
        aria-atomic="true"
        style={{
          opacity: isLoading ? 0.5 : 1,
          fontWeight: large ? 900 : 700, // Heavier weight for large counter
        }}
      >
        {isLoading ? '...' : formatNumber(Math.floor(displayValue))}
      </div>
      {label && <div className="text-sm text-slate-600 mt-1">{label}</div>}
    </div>
  );
}