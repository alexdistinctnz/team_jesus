'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { RecentDonors } from '@/components/RecentDonors';
import { HowItWorksStepper } from '@/components/HowItWorksStepper';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { HamburgerMenu } from '@/components/HamburgerMenu';
import { Modal } from '@/components/Modal';
import { ImpactStats } from '@/components/ImpactStats';
import Image from 'next/image';

export default function TeamJesusPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/background.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
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