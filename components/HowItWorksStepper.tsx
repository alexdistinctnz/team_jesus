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
          text: "When creators share the Gospel through video, lives are changed. Their work is more than entertainment, it points people to Jesus. By making content about Christ, they reach millions who may never enter a church, giving them the chance to hear about salvation, find hope, and discover eternal life. With the Gospel in video form, the message spreads with greater reach, impact, and authenticity.",
          icon: Video,
          image: "/images/gospel_creators.jpg",
          align: "left"
        },
        {
          title: "Global Reach",
          text: "Short-form Gospel content is vital for reaching the world. Without it, billions remain unreached through traditional methods. When compelling videos about Jesus appear on platforms people already use, the Gospel spreads naturally. By filling social media with Christ-centered content, we break down barriers and bring transformation one view at a time.",
          icon: Target,
          image: "/images/global_reach.jpg",
          align: "right"
        },
        {
          title: "Verified Results",
          text: "Results-based funding ensures full accountability. We only pay creators for verified views, so every donation directly leads to people hearing about Jesus. This makes fragile ministry budgets go further, reaching more souls with fewer resources. Transparent, verifiable metrics give donors confidence, showing real Kingdom impact and inspiring lasting trust.",
          icon: Heart,
          image: "/images/verified_results.jpg",
          align: "left"
        }
      ]
    },
    how: {
      description: "You donate, PostClips pays creators to cut and post compelling short Gospel videos, and we pay $0.01 per 10 views, ensuring every dollar drives real impact. 100% of donations go directly to creator commissions, with operations funded separately through business revenue.",
      sections: [
        {
          title: "Step 1: You Donate",
          text: "Your gift directly funds the mission of reaching people with the Gospel. Every dollar becomes content that shares Jesus with thousands. When you give, you invest in eternal impact. Your contribution immediately supports creators who spread Christ's message across the world through compelling short-form video.",
          icon: Heart,
          image: "/images/step_1_you_donate.jpg",
          align: "left"
        },
        {
          title: "Step 2: Creators Share Jesus",
          text: "PostClips pays talented creators to share Gospel content. They take sermons, testimonies, and teachings and turn them into engaging short videos for TikTok, Instagram, and YouTube. Each clip is designed to capture attention, communicate truth, and point people to Jesus where they already spend their time.",
          icon: Video,
          image: "/images/step_2_creators_share_jesus.jpg",
          align: "right"
        },
        {
          title: "Step 3: Results-Based Payment",
          text: "We pay creators $0.01 per 10 verified views, tying every penny to real results. No views means no payment. This performance model ensures maximum impact and efficiency, so your donation funds true reach rather than unused content. It is transparent, accountable, and effective for modern ministry.",
          icon: Target,
          image: "/images/step_3_results_based_payment.jpg",
          align: "left"
        }
      ]
    }
  };

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-8xl font-sans font-extrabold text-black mb-6">
            HOW IT WORKS
          </h2>
          <p className="text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed mb-12">
            #TeamJesus will be the biggest and most impactful campaign for sharing the Gospel in history.
            Scroll down to see how raising $8 million will share Jesus with 8 billion people.
            With thousands of the world's top Creators talking about Jesus, we're changing the world, one view at a time.
          </p>

          {/* PostClips Logo */}
          <div className="mb-12">
            <Image
              src="/images/partner_postclips_logo.svg"
              alt="PostClips"
              width={300}
              height={100}
              className="mx-auto w-[300px] h-auto"
            />
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-0">
            <div className="inline-flex items-center bg-slate-100 rounded-full p-1.5 gap-2">
              <button
                onClick={() => setActiveTab('why')}
                className={`px-8 py-1.5 rounded-full font-heading font-bold text-sm transition-all ${
                  activeTab === 'why'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Why
              </button>
              <button
                onClick={() => setActiveTab('how')}
                className={`px-8 py-1.5 rounded-full font-heading font-bold text-sm transition-all ${
                  activeTab === 'how'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                How
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-8"
        >
          {/* Cloud-shaped container - runtime generated */}
          <div className="relative mx-auto" style={{ maxWidth: '900px' }}>
            <svg className="w-full" viewBox="0 0 735 439" preserveAspectRatio="xMidYMid meet">
              {/* Attractive cloud shape with trimmed viewBox */}
              <g transform="matrix(3.77947,0,0,3.77947,-32.7819,-180.835)">
                <path
                  d="M102.42,57.283C92.135,57.287 82.479,62.336 76.609,70.782C73.893,69.995 71.079,69.595 68.25,69.595C52.809,69.602 39.762,81.518 38.357,96.895C26.468,100.527 18.29,111.576 18.288,124.007C18.295,125.782 18.468,127.551 18.805,129.293C18.355,130.989 18.11,132.777 18.11,134.628C18.11,145.573 26.518,154.385 36.962,154.385L174.712,154.385C185.156,154.385 193.564,145.573 193.564,134.628C193.564,123.924 185.521,115.266 175.397,114.89C171.207,106.271 162.428,100.777 152.844,100.776C150.621,100.781 148.409,101.082 146.266,101.671C146.27,101.575 146.274,101.479 146.277,101.382C146.277,92.518 141.001,84.457 132.878,80.91C129.319,67.051 116.729,57.284 102.421,57.283L102.42,57.283Z"
                  fill="white"
                  fillRule="nonzero"
                />
              </g>
            </svg>

            {/* Content positioned absolutely inside the cloud */}
            <div className="absolute top-[66%] left-0 right-0 flex items-start justify-center px-16">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-base md:text-lg text-black leading-relaxed text-center max-w-3xl"
              >
                {tabContent[activeTab as keyof typeof tabContent].description}
              </motion.p>
            </div>

            {/* Extension to intersect with vertical divider */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 bg-white h-24 z-20" />
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Grid sections with decorative lines */}
            <motion.div
              key={`${activeTab}-sections`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative"
            >
              {/* Vertical center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-900 -translate-x-1/2 hidden md:block" />

              {tabContent[activeTab as keyof typeof tabContent].sections.map((section, index) => {
                const Icon = section.icon;
                const isLeft = section.align === 'left';
                const isFirst = index === 0;
                const isLast = index === tabContent[activeTab as keyof typeof tabContent].sections.length - 1;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Top horizontal line (skip for first item) */}
                    {!isFirst && (
                      <>
                        <div className="absolute top-0 left-0 right-0 h-1 bg-primary-900" />
                        {/* Intersection dot at top */}
                        <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary-900 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block" />
                      </>
                    )}

                    {/* Content grid */}
                    <div className="grid md:grid-cols-2 gap-8 items-center py-14 px-6">
                      {isLeft ? (
                        <>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">{section.title}</h3>
                            <p className="text-primary-900 leading-relaxed">{section.text}</p>
                          </div>
                          <div className="hidden md:block rounded-2xl overflow-hidden">
                            <div className="aspect-video relative">
                              <Image
                                src={section.image}
                                alt={section.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="hidden md:block rounded-2xl overflow-hidden order-2 md:order-1">
                            <div className="aspect-video relative">
                              <Image
                                src={section.image}
                                alt={section.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div className="order-1 md:order-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">{section.title}</h3>
                            <p className="text-primary-900 leading-relaxed">{section.text}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}