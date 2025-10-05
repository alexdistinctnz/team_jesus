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
          image: "/images/how_it_works/why_great_commission.jpg",
          align: "left"
        },
        {
          title: "The Necessity of Hearing",
          text: "Romans 10:14 asks the essential question: 'How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching?' They cannot be saved without hearing. If no one spreads the gospel, people stay lost. The message must be proclaimed so that people can hear, believe, and be saved.",
          icon: Target,
          image: "/images/how_it_works/why_necessity_of_hearing.jpg",
          align: "right"
        },
        {
          title: "The Cost of Silence",
          text: "God warns in Ezekiel 3:18: 'If I say to the wicked, \"You shall surely die,\" and you give him no warning... that wicked person shall die for his iniquity, but his blood I will require at your hand.' If you don't listen and warn others, two things happen: the wicked still die in their sin, and God holds you accountable for staying silent. Without the Gospel, people face 'eternal fire prepared for the devil and his angels' (Matthew 25:41) and 'the fiery furnace... weeping and gnashing of teeth' (Matthew 13:50). Without Jesus, people die lost and spend eternity in hell, fire, darkness, and separation from God.",
          icon: Heart,
          image: "/images/how_it_works/why_cost_of_silence.jpg",
          align: "left"
        },
        {
          title: "Eternal Rewards",
          text: "God rewards those who obey Him. There is a reward system in Heaven. Jesus says: 'Do not lay up for yourselves treasures on earth... but lay up for yourselves treasures in heaven' (Matthew 6:19-20). Scripture promises crowns of righteousness (2 Timothy 4:8), life (James 1:12), and glory (1 Peter 5:4). Faithful servants receive authority over cities (Luke 19:17). The ultimate honor: 'The one who conquers, I will grant him to sit with me on my throne' (Revelation 3:21). 'From the Lord you will receive the inheritance as your reward. You are serving the Lord Christ' (Colossians 3:23-24).",
          icon: Video,
          image: "/images/how_it_works/why_eternal_rewards.jpg",
          align: "right"
        }
      ]
    },
    how: {
      description: "Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime. PostClips runs as a real business, generating revenue by providing posting and distribution services to traditional media companies. This allows us to fund development, operations, and business costs—so 100% of your donation goes directly as commission to those posting content about Jesus.",
      sections: [
        {
          title: "PostClips Business Model",
          text: "PostClips runs as a real business. We generate revenue by providing the same posting and distribution service for traditional media companies. This allows us to fund the development, operations, and costs of owning a business like this. That way you, the donor, are not paying for anything in connection to operations. 100% of your donation is given directly as a commission to the people posting the content, so they can make a living distributing content about Jesus.",
          icon: Video,
          image: "/images/how_it_works/how_business_model.jpg",
          align: "left"
        },
        {
          title: "100% to Clippers",
          text: "100% of your donation is given directly as a commission to the people posting the content. This ensures that every dollar you give goes straight to supporting those who create and share Gospel videos. They can make a living distributing content about Jesus, fulfilling the biblical principle: 'In the same way, the Lord commanded that those who proclaim the gospel should get their living by the gospel' (1 Corinthians 9:14).",
          icon: Heart,
          image: "/images/how_it_works/how_100_percent_clippers.jpg",
          align: "right"
        },
        {
          title: "God Calls Us to Tithe",
          text: "The word 'tithe' literally means 'a tenth' or 10%. 'Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need' (Malachi 3:10). Translation: Bring the whole 10% of your income into My house, so there will be enough to provide for My work and My people. If you do this, test Me and see—I'll throw open Heaven's windows and bless you so much you won't be able to contain it.",
          icon: Target,
          image: "/images/how_it_works/how_god_calls_tithe.jpg",
          align: "left"
        },
        {
          title: "PostClips' Action",
          text: "Because of this, PostClips allocates 10% of its monthly profits to Team Jesus. These funds are used to support the production of more non-denominational Christian content (we need a lot!) and pay clippers directly as a commission for posting the content, so they can make a living distributing content about Jesus. We'd be honored for you to join us in making this part of your monthly tithe, as we believe it's one of the most effective ways to share Jesus with the world.",
          icon: Video,
          image: "/images/how_it_works/how_postclips_action.jpg",
          align: "right"
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
          <div className="relative mx-auto" style={{ maxWidth: '1100px' }}>
            <div className="relative w-full" style={{ aspectRatio: '1100 / 500' }}>
              {/* Cloud background - visible border effect */}
              <div className="absolute inset-0">
                <Image
                  src="/images/cloud.svg"
                  alt="Cloud background"
                  fill
                  className="object-fill opacity-30"
                />
              </div>

              {/* White interior box - smaller than cloud to show cloud edges */}
              <div className="absolute inset-[8%_5%] bg-white rounded-3xl" />

              {/* Content centered in the box */}
              <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16 py-8 z-10">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm md:text-lg text-black leading-relaxed text-center max-w-3xl"
                >
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </motion.p>
              </div>
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
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black -translate-x-1/2 hidden md:block" />

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
                        <div className="absolute top-0 left-0 right-0 h-1 bg-black" />
                        {/* Intersection dot at top */}
                        <div className="absolute top-0 left-1/2 w-4 h-4 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block" />
                      </>
                    )}

                    {/* Content grid */}
                    <div className="grid md:grid-cols-2 gap-8 items-center py-14 px-6">
                      {isLeft ? (
                        <>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">{section.title}</h3>
                            <p className="text-black leading-relaxed">{section.text}</p>
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
                            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">{section.title}</h3>
                            <p className="text-black leading-relaxed">{section.text}</p>
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