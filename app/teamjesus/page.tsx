import { Hero } from '@/components/Hero';
import { ImpactStats } from '@/components/ImpactStats';
import { RecentDonors } from '@/components/RecentDonors';
import { HowItWorksStepper } from '@/components/HowItWorksStepper';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function TeamJesusPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ImpactStats />

      <RecentDonors />
      <HowItWorksStepper />
      <FAQ />
      <Footer />
    </main>
  );
}