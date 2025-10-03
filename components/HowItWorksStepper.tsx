'use client';

import { motion } from 'framer-motion';
import { Heart, Video, Target } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function HowItWorksStepper() {
  const [activeTab, setActiveTab] = useState('why');

  const tabContent = {
    why: {
      description: "Jesus makes it clear that your purpose on earth is to build the kingdom of Heaven. God commands us: 'Go therefore and make disciples of all nations' (Matthew 28:19-20) and 'Follow me, and I will make you fishers of men' (Matthew 4:19). If no one spreads the gospel, people stay lost. God requires you to obey His word and share the Good News.",
      sections: [
        {
          title: "The Great Commission",
          text: "God's command is clear: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you.' (Matthew 28:19-20). Jesus declares, 'Follow me, and I will make you fishers of men' (Matthew 4:19). God requires you to obey His word: 'If you love me, you will keep my commandments' (John 14:15) and 'Obey my voice, and I will be your God' (Jeremiah 7:23).",
          icon: Video,
          image: "/images/gospel_creators.jpg",
          align: "left"
        },
        {
          title: "The Necessity of Hearing",
          text: "Romans 10:14 asks the essential question: 'How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching?' They cannot be saved without hearing. If no one spreads the gospel, people stay lost. The message must be proclaimed so that people can hear, believe, and be saved.",
          icon: Target,
          image: "/images/global_reach.jpg",
          align: "right"
        },
        {
          title: "The Cost of Silence",
          text: "God warns in Ezekiel 3:18: 'If I say to the wicked, \"You shall surely die,\" and you give him no warning... that wicked person shall die for his iniquity, but his blood I will require at your hand.' If you don't listen and warn others, two things happen: the wicked still die in their sin, and God holds you accountable for staying silent. Without the Gospel, people face 'eternal fire prepared for the devil and his angels' (Matthew 25:41) and 'the fiery furnace... weeping and gnashing of teeth' (Matthew 13:50). Without Jesus, people die lost and spend eternity in hell, fire, darkness, and separation from God.",
          icon: Heart,
          image: "/images/verified_results.jpg",
          align: "left"
        },
        {
          title: "Eternal Rewards",
          text: "God rewards those who obey Him. There is a reward system in Heaven. Jesus says: 'Do not lay up for yourselves treasures on earth... but lay up for yourselves treasures in heaven' (Matthew 6:19-20). Scripture promises crowns of righteousness (2 Timothy 4:8), life (James 1:12), and glory (1 Peter 5:4). Faithful servants receive authority over cities (Luke 19:17). The ultimate honor: 'The one who conquers, I will grant him to sit with me on my throne' (Revelation 3:21). 'From the Lord you will receive the inheritance as your reward. You are serving the Lord Christ' (Colossians 3:23-24).",
          icon: Video,
          image: "/images/step_2_creators_share_jesus.jpg",
          align: "right"
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
          <div className="text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed mb-12">
            <p className="mb-4">
              You give us $1. We then pay someone to create a short video out of Gospel content we provide
              them (Elevation Church, Bryce Crawfrod, etc…) & then for them to post it on Instagram, Tik Tok,
              Twitter, Facebook, & YouTube.
            </p>
            <p className="mb-4">
              Here's the catch, we only pay the person if their video gets views. We pay them 1 cent per 10
              views they get.
            </p>
            <p className="mb-4">
              100% of your donation is given directly to a "Clipper" (Someone who cuts up clips & posts them)
              as a commission. So they can make a living distributing content about Jesus.
            </p>
            <p className="italic mb-2">
              "In the same way, the Lord commanded that those who proclaim the gospel should get
              their living by the gospel."
            </p>
            <p className="text-base">
              1 Corinthians 9:14
            </p>
            <p className="text-sm text-gray-600 mt-2">
              *Any scripture references are from the English Standard Version of the Bible.
            </p>
          </div>

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
          {/* Cloud-like white box */}
          <div className="relative mx-auto" style={{ maxWidth: '900px' }}>
            <svg className="w-full" viewBox="0 0 900 300" preserveAspectRatio="none">
              <path
                d="M 50,250
                   L 50,80
                   C 50,50 100,30 150,30
                   C 200,30 250,50 300,50
                   C 350,50 400,30 450,30
                   C 500,30 550,50 600,50
                   C 650,50 700,30 750,30
                   C 800,30 850,50 850,80
                   L 850,220
                   C 850,250 800,270 750,270
                   C 700,270 650,250 600,250
                   C 550,250 500,270 450,270
                   C 400,270 350,250 300,250
                   C 250,250 200,270 150,270
                   C 100,270 50,250 50,220 Z"
                fill="white"
              />
            </svg>

            {/* Content centered in the cloud box */}
            <div className="absolute inset-0 flex items-center justify-center px-16">
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