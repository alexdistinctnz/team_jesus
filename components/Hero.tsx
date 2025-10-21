'use client';

import { useMetrics } from '@/hooks/useMetrics';
import { ImpactCounter } from './ImpactCounter';
import { DonateWidget } from './DonateWidget';
import Image from 'next/image';

export function Hero() {
  const { metrics, isLoading } = useMetrics();

  return (
    <section className="relative pt-10 md:pt-16 pb-20 md:pb-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo and Main heading - centered */}
        <div className="text-center mb-6 md:mb-12">
          {/* Logo */}
          <div className="flex justify-center mb-3 md:mb-6">
            <div className="w-16 h-16 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center p-0.25">
              <Image
                src="/images/logo.png"
                alt="PostClips Logo"
                width={144}
                height={144}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-display text-white mb-2 md:mb-4 tracking-tight">
            <span className="font-extralight">#TEAM</span>
            <span className="font-black">JESUS</span>
          </h1>

          {/* Strapline - 2x size on desktop, constrained width, line break after "billion" */}
          <div className="flex justify-center">
            <p className="text-base md:text-3xl text-white font-black max-w-full md:max-w-[700px]">
              Raising $8M to tell 8 billion<br />
              people about Jesus
            </p>
          </div>
        </div>

        {/* Large counter - like TeamWater's prominent counter */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block">
            <ImpactCounter
              value={metrics?.peopleReached ?? 0}
              label=""
              isLoading={isLoading}
              large
            />
            <p className="text-white text-lg md:text-3xl font-black mt-2 uppercase tracking-wide">
              People told about Jesus
            </p>
          </div>
        </div>

        {/* Donation widget */}
        <div
          className="mx-auto"
          style={{ maxWidth: '432px' }}
        >
          <DonateWidget />
        </div>
      </div>
    </section>
  );
}