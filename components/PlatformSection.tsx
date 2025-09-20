'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, BarChart3, DollarSign, Users2, Lightbulb, TrendingUp } from 'lucide-react'

const PlatformSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const capabilities = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Technical Analysis",
      description: "Advanced player performance metrics and statistical analysis"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Tactical Evaluation",
      description: "Formation compatibility and tactical fit assessment"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Financial Planning",
      description: "Budget optimization and salary sustainability analysis"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Player Identification",
      description: "AI-driven scouting based on playing characteristics and role"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Adaptability Scoring",
      description: "Assessment of player adaptability to different playing styles"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Algorithms",
      description: "Machine learning models for optimal roster composition"
    }
  ]

  return (
    <section id="platform" ref={ref} className="section-padding bg-black relative overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12" style={{color: '#01DEF1'}}
          >
            NXT PLATFORM
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Main description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 h-full">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                NXT Platform provides <span className="text-white font-semibold">solutions</span> for 
                football teams executives in building the <span className="text-white font-bold">perfect roster</span> considering 
                multiple <span className="text-white font-semibold">technical</span>, 
                <span className="text-white font-semibold"> tactical</span> and 
                <span className="text-white font-semibold"> financial aspects</span>.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                The software architecture is designed to use <span className="text-white font-bold">algorithms</span> and 
                <span className="text-white font-bold"> artificial intelligence</span> to identify the best roster through 
                an analysis that involves <span className="text-white font-semibold">playing philosophy</span>, 
                <span className="text-white font-semibold"> player identification</span> based on characteristics, 
                <span className="text-white font-semibold"> role</span>, 
                <span className="text-white font-semibold"> adaptability</span> and 
                <span className="text-white font-semibold"> financial sustainability</span> defining the salary in line 
                with the club's available budget.
              </p>

              <div className="flex flex-wrap gap-3">
                {['AI-Powered', 'Data-Driven', 'Strategic', 'Innovative'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-full"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Capabilities grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 h-full"
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to revolutionize your team building strategy?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Join the future of football management with AI-powered roster optimization.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlatformSection
