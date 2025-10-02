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
  const [isMobile, setIsMobile] = useState(false);
  const [imageStyle, setImageStyle] = useState<React.CSSProperties>({ width: '100%', height: 'auto' });
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateImageStyle = () => {
      if (!mainRef.current) return;

      const viewportWidth = window.innerWidth;
      const isMobileView = viewportWidth < 768; // md breakpoint
      setIsMobile(isMobileView);

      if (isMobileView) {
        // Mobile: full viewport height, cover (fixed/sticky is OK)
        setImageStyle({ width: '100%', height: '100vh', objectFit: 'cover', objectPosition: 'top center' });
      } else {
        // Desktop: always anchor top and bottom, maintain aspect ratio with cover
        setImageStyle({ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' });
      }
    };

    // Initial calculation with a delay to ensure content is rendered
    const timer = setTimeout(updateImageStyle, 100);

    updateImageStyle();
    window.addEventListener('resize', updateImageStyle);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateImageStyle);
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className="min-h-screen relative"
    >
      {/* Background Image using Next.js Image component for better mobile support */}
      <div className={`top-0 left-0 w-full h-full -z-10 flex justify-center ${isMobile ? 'fixed' : 'absolute'}`}>
        <Image
          src="/images/background.jpeg"
          alt="Background"
          width={3000}
          height={3000}
          style={imageStyle}
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