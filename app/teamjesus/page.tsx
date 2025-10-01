import { Hero } from '@/components/Hero';
import { RecentDonors } from '@/components/RecentDonors';
import { HowItWorksStepper } from '@/components/HowItWorksStepper';
import { WhyThisMatters } from '@/components/WhyThisMatters';
import { RewardsInHeaven } from '@/components/RewardsInHeaven';
import { Stewardship } from '@/components/Stewardship';
import { TithingMonthly } from '@/components/TithingMonthly';
import { TrustBand } from '@/components/TrustBand';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function TeamJesusPage() {
  return (
    <main className="min-h-screen">
      <Hero />

      <RecentDonors />
      <HowItWorksStepper />
      <WhyThisMatters />
      <RewardsInHeaven />
      <Stewardship />
      <TithingMonthly />
      <TrustBand />
      <FAQ />
      <Footer />
    </main>
  );
}