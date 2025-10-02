'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
  const [objectFit, setObjectFit] = useState<'cover' | 'contain'>('contain');
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateObjectFit = () => {
      if (!mainRef.current) return;

      const img = new window.Image();
      img.src = '/images/background.jpeg';
      img.onload = () => {
        const contentHeight = mainRef.current?.scrollHeight || window.innerHeight;
        const viewportWidth = window.innerWidth;

        // Calculate what the image height would be at 100% width
        const imageAspectRatio = img.width / img.height;
        const imageHeightAtFullWidth = viewportWidth / imageAspectRatio;

        // If content is taller than the image would be at full width, use cover to fill
        if (contentHeight > imageHeightAtFullWidth) {
          setObjectFit('cover');
        } else {
          setObjectFit('contain');
        }
      };
    };

    // Initial calculation with a delay to ensure content is rendered
    const timer = setTimeout(updateObjectFit, 100);

    updateObjectFit();
    window.addEventListener('resize', updateObjectFit);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateObjectFit);
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className="min-h-screen relative"
    >
      {/* Background Image using Next.js Image component for better mobile support */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/background.jpeg"
          alt="Background"
          fill
          className="object-top"
          style={{ objectFit }}
          priority
          quality={100}
        />
      </div>
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