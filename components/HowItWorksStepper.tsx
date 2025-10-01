'use client';

import { motion } from 'framer-motion';
import { Heart, Video, Target } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function HowItWorksStepper() {
  const [activeTab, setActiveTab] = useState('why');

  const tabContent = {
    why: "Join #TeamJesus in raising $8M to tell 8 billion people about Jesus through PostClips. Every dollar funds Gospel content that reaches 1,000 people with the message of Jesus. With thousands of creators sharing Christ globally, we're changing the world, one view at a time.",
    how: "You donate → PostClips pays creators to cut and post compelling short Gospel videos → We pay $0.01 per 10 views, ensuring every dollar drives real impact. 100% of donations go directly to creator commissions, with operations funded separately through business revenue.",
    impact: "$1 reaches 1,000 people with the Gospel message. Your gift directly funds results-based content creation, paying clippers only for verified views. This ensures maximum accountability and impact—every donation translates to thousands hearing about Jesus."
  };

  return (
    <section id="how-it-works" className="py-20 bg-primary-600 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bungee text-white mb-6">
            HOW IT WORKS
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
            #TeamJesus will be the biggest and most impactful campaign for sharing the Gospel in history.
            Scroll down to see how raising $8 million will share Jesus with 8 billion people.
            With thousands of the world's top Creators talking about Jesus, we're changing the world, one view at a time.
          </p>

          {/* PostClips Logo */}
          <div className="mb-8">
            <Image
              src="/images/logo_transparent.png"
              alt="PostClips"
              width={200}
              height={80}
              className="mx-auto h-16 w-auto"
            />
          </div>

          {/* Partner logos placeholder */}
          <div className="flex items-center justify-center gap-8 mb-12 opacity-60">
            <div className="text-white font-bold text-sm">PARTNER MINISTRIES</div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-0">
            <div className="inline-flex items-center bg-primary-900 rounded-full p-2 gap-2">
              <button
                onClick={() => setActiveTab('why')}
                className={`px-8 py-3 rounded-full font-bungee text-sm transition-all ${
                  activeTab === 'why'
                    ? 'bg-primary-500 text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Why
              </button>
              <button
                onClick={() => setActiveTab('how')}
                className={`px-8 py-3 rounded-full font-bungee text-sm transition-all ${
                  activeTab === 'how'
                    ? 'bg-primary-500 text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                How
              </button>
              <button
                onClick={() => setActiveTab('impact')}
                className={`px-8 py-3 rounded-full font-bungee text-sm transition-all ${
                  activeTab === 'impact'
                    ? 'bg-primary-500 text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Impact
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content Panel with wavy border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-0"
        >
          {/* Wavy top border */}
          <svg className="w-full" height="40" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,20 Q300,0 600,20 T1200,20 L1200,40 L0,40 Z" fill="#1e3a8a" />
          </svg>

          <div className="bg-primary-900 p-8 md:p-12 -mt-1">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg text-white/90 leading-relaxed mb-12"
            >
              {tabContent[activeTab as keyof typeof tabContent]}
            </motion.p>

            {/* Grid sections */}
            <div className="space-y-12">
              {/* Gospel Creators - Text Left, Image Right */}
              <div className="grid md:grid-cols-2 gap-8 items-center border-l-4 border-primary-500 pl-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Gospel Creators</h3>
                  <p className="text-white/80 leading-relaxed">
                    When creators share the Gospel through short-form video, lives are transformed. They no longer just entertain—they point people to Jesus.
                    By creating compelling content about Christ, they're reaching millions who might never enter a church, giving them the opportunity to hear
                    about salvation, find hope, and discover eternal life. With the Gospel in video form, they can spread the message with greater reach,
                    impact, and authenticity.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-primary-800 flex items-center justify-center">
                    <Video className="w-16 h-16 text-primary-400" />
                  </div>
                </div>
              </div>

              {/* Global Reach - Image Left, Text Right */}
              <div className="grid md:grid-cols-2 gap-8 items-center border-r-4 border-primary-500 pr-8">
                <div className="rounded-2xl overflow-hidden order-2 md:order-1">
                  <div className="aspect-video bg-primary-800 flex items-center justify-center">
                    <Target className="w-16 h-16 text-primary-400" />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Global Reach</h3>
                  <p className="text-white/80 leading-relaxed">
                    Short-form Gospel content is essential for reaching the world—without it, billions remain unreached through traditional methods.
                    When clean, compelling videos about Jesus are readily available, people encounter the Gospel organically, through platforms they already use.
                    By flooding social media with Christ-centered content, we're breaking down barriers to the Gospel. Reliable, viral Jesus content can transform
                    lives in communities around the world, one view at a time.
                  </p>
                </div>
              </div>

              {/* Verified Results - Text Left, Image Right */}
              <div className="grid md:grid-cols-2 gap-8 items-center border-l-4 border-primary-500 pl-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Verified Results</h3>
                  <p className="text-white/80 leading-relaxed">
                    Results-based funding ensures maximum accountability. We only pay creators for verified views, meaning every donation directly translates
                    to people hearing about Jesus. This puts already fragile ministry budgets to their best use—reaching as many souls as possible.
                    Providing transparent, verifiable metrics helps donors stay confident, support the mission effectively, and see real Kingdom impact.
                    It gives supporters—especially younger generations—the accountability they need to trust and invest in a changing world.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-primary-800 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-primary-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}