'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Brain, Target, Zap } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Entrepreneurs & Engineers"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Big Data Specialists"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Football Passion",
      description: "Shared Love for the Game"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Redefining Team Building"
    }
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-black relative overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16"
          >
            ABOUT US
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left side - Stadium image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/stadium.png"
                  alt="Football Stadium"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            
            {/* Right side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-left"
            >
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 font-light">
                Nextalent is a team of <span className="text-white font-semibold">entrepreneurs</span>, 
                <span className="text-white font-semibold"> engineers</span>, and 
                <span className="text-white font-semibold"> big data analysts</span> with a shared passion: 
                <span className="text-white font-bold"> FOOTBALL</span>.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Starting from our personal knowledge, we are developing a platform that 
                <span className="text-white font-semibold"> redefines the way football clubs build team rosters</span>.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default AboutSection
