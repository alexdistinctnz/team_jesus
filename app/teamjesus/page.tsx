'use client';

import { useState, useEffect, useRef } from 'react';
import { Hero } from '@/components/Hero';
import { RecentDonors } from '@/components/RecentDonors';
import { HowItWorksStepper } from '@/components/HowItWorksStepper';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { HamburgerMenu } from '@/components/HamburgerMenu';
import { Modal } from '@/components/Modal';
import { ImpactStats } from '@/components/ImpactStats';

export default function TeamJesusPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [backgroundSize, setBackgroundSize] = useState('100% auto');
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateBackgroundSize = () => {
      if (!mainRef.current) return;

      const img = new Image();
      img.src = '/images/background.jpeg';
      img.onload = () => {
        const viewportHeight = mainRef.current?.scrollHeight || window.innerHeight;
        const viewportWidth = window.innerWidth;

        // Calculate what the image height would be at 100% width
        const imageAspectRatio = img.width / img.height;
        const imageHeightAtFullWidth = viewportWidth / imageAspectRatio;

        // If viewport is taller than the image would be at full width, switch to height-based sizing
        if (viewportHeight > imageHeightAtFullWidth) {
          setBackgroundSize('auto 100%');
        } else {
          setBackgroundSize('100% auto');
        }
      };
    };

    updateBackgroundSize();
    window.addEventListener('resize', updateBackgroundSize);

    return () => window.removeEventListener('resize', updateBackgroundSize);
  }, []);

  return (
    <main
      ref={mainRef}
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/images/background.jpeg)',
        backgroundSize: backgroundSize,
        backgroundPosition: 'top center',
        backgroundAttachment: 'scroll',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <HamburgerMenu onClick={() => setIsModalOpen(true)} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ImpactStats />
      </Modal>

      <Hero />
      <RecentDonors />
      <HowItWorksStepper />
      <FAQ />
      <Footer />
    </main>
  );
}