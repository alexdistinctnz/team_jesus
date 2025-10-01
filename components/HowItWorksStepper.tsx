'use client';

import { motion } from 'framer-motion';
import { Heart, Video, Target } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function HowItWorksStepper() {
  const [activeTab, setActiveTab] = useState('why');

  const tabContent = {
    why: {
      description: "Join #TeamJesus in raising $8M to tell 8 billion people about Jesus through PostClips. Every dollar funds Gospel content that reaches 1,000 people with the message of Jesus. With thousands of creators sharing Christ globally, we're changing the world, one view at a time.",
      sections: [
        {
          title: "Gospel Creators",
          text: "When creators share the Gospel through short-form video, lives are transformed. They no longer just entertain—they point people to Jesus. By creating compelling content about Christ, they're reaching millions who might never enter a church, giving them the opportunity to hear about salvation, find hope, and discover eternal life. With the Gospel in video form, they can spread the message with greater reach, impact, and authenticity.",
          icon: Video,
          align: "left"
        },
        {
          title: "Global Reach",
          text: "Short-form Gospel content is essential for reaching the world—without it, billions remain unreached through traditional methods. When clean, compelling videos about Jesus are readily available, people encounter the Gospel organically, through platforms they already use. By flooding social media with Christ-centered content, we're breaking down barriers to the Gospel. Reliable, viral Jesus content can transform lives in communities around the world, one view at a time.",
          icon: Target,
          align: "right"
        },
        {
          title: "Verified Results",
          text: "Results-based funding ensures maximum accountability. We only pay creators for verified views, meaning every donation directly translates to people hearing about Jesus. This puts already fragile ministry budgets to their best use—reaching as many souls as possible. Providing transparent, verifiable metrics helps donors stay confident, support the mission effectively, and see real Kingdom impact. It gives supporters—especially younger generations—the accountability they need to trust and invest in a changing world.",
          icon: Heart,
          align: "left"
        }
      ]
    },
    how: {
      description: "You donate → PostClips pays creators to cut and post compelling short Gospel videos → We pay $0.01 per 10 views, ensuring every dollar drives real impact. 100% of donations go directly to creator commissions, with operations funded separately through business revenue.",
      sections: [
        {
          title: "Step 1: You Donate",
          text: "Your gift directly funds the mission to reach people with the Gospel. Every dollar you give becomes content that shares Jesus with thousands. When you donate, you're not just giving money—you're investing in eternal impact. Your contribution immediately goes to work, funding creators who will share the message of Christ across the globe through compelling short-form videos.",
          icon: Heart,
          align: "left"
        },
        {
          title: "Step 2: Creators Share Jesus",
          text: "PostClips pays talented creators to produce and distribute Gospel content. These clippers take powerful sermons, testimonies, and Bible teachings and transform them into engaging short videos optimized for TikTok, Instagram, and YouTube. Each piece of content is crafted to capture attention, communicate truth, and point viewers to Jesus—reaching people where they already spend their time.",
          icon: Video,
          align: "right"
        },
        {
          title: "Step 3: Results-Based Payment",
          text: "We pay creators $0.01 per 10 verified views. This means every penny is tied to measurable results—real people seeing real Gospel content. No views, no payment. This performance-based model ensures maximum efficiency and impact. Your donation funds actual reach, not just content creation. It's transparent, accountable, and effective—exactly what modern ministry should be.",
          icon: Target,
          align: "left"
        }
      ]
    },
    impact: {
      description: "$1 reaches 1,000 people with the Gospel message. Your gift directly funds results-based content creation, paying clippers only for verified views. This ensures maximum accountability and impact—every donation translates to thousands hearing about Jesus.",
      sections: [
        {
          title: "$1 = 1,000 People",
          text: "Every dollar you give reaches 1,000 people with the Gospel. It's that simple. At $0.01 per 10 views, your $1 donation funds 100 payments to creators, resulting in 1,000 verified views of Jesus-centered content. Imagine: a $25 gift shares Christ with 25,000 people. A $100 gift reaches 100,000 souls. The math is clear, the impact is real, and the results are eternal.",
          icon: Heart,
          align: "left"
        },
        {
          title: "Maximum Efficiency",
          text: "100% of your donation goes directly to creator commissions. Not a penny is wasted on overhead or admin costs—those are covered separately through business revenue. Every single dollar you give becomes Gospel content that reaches people. This is ministry efficiency at its finest, ensuring your generosity has the greatest possible Kingdom impact without dilution or waste.",
          icon: Target,
          align: "right"
        },
        {
          title: "Eternal Transformation",
          text: "Behind every view is a real person encountering Jesus. Some will scroll past, but many will pause, listen, and be changed forever. Souls are saved. Hearts are transformed. Lives are redirected toward eternity. Your gift doesn't just create content—it creates opportunities for the Holy Spirit to work. From one video view can come a lifetime of faith, and from that, generations of believers.",
          icon: Video,
          align: "left"
        }
      ]
    }
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
          <h2 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6">
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
              src="/images/Team_Jesus_Logo.png"
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
                className={`px-8 py-3 rounded-full font-heading font-bold text-sm transition-all ${
                  activeTab === 'why'
                    ? 'bg-primary-500 text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Why
              </button>
              <button
                onClick={() => setActiveTab('how')}
                className={`px-8 py-3 rounded-full font-heading font-bold text-sm transition-all ${
                  activeTab === 'how'
                    ? 'bg-primary-500 text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                How
              </button>
              <button
                onClick={() => setActiveTab('impact')}
                className={`px-8 py-3 rounded-full font-heading font-bold text-sm transition-all ${
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
              {tabContent[activeTab as keyof typeof tabContent].description}
            </motion.p>

            {/* Grid sections */}
            <motion.div
              key={`${activeTab}-sections`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="space-y-12"
            >
              {tabContent[activeTab as keyof typeof tabContent].sections.map((section, index) => {
                const Icon = section.icon;
                const isLeft = section.align === 'left';

                return (
                  <div
                    key={index}
                    className={`grid md:grid-cols-2 gap-8 items-center ${
                      isLeft ? 'border-l-4 border-primary-500 pl-8' : 'border-r-4 border-primary-500 pr-8'
                    }`}
                  >
                    {isLeft ? (
                      <>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{section.title}</h3>
                          <p className="text-white/80 leading-relaxed">{section.text}</p>
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                          <div className="aspect-video bg-primary-800 flex items-center justify-center">
                            <Icon className="w-16 h-16 text-primary-400" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="rounded-2xl overflow-hidden order-2 md:order-1">
                          <div className="aspect-video bg-primary-800 flex items-center justify-center">
                            <Icon className="w-16 h-16 text-primary-400" />
                          </div>
                        </div>
                        <div className="order-1 md:order-2">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{section.title}</h3>
                          <p className="text-white/80 leading-relaxed">{section.text}</p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}