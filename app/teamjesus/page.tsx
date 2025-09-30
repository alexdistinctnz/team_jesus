import { Hero } from '@/components/Hero';
import { DonateWidget } from '@/components/DonateWidget';
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

      <section id="donate" className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonateWidget />
        </div>
      </section>

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