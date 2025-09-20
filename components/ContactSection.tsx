'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Image from 'next/image'

type FormData = {
  name: string
  email: string
  company?: string
  message: string
}

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formsubmit.co/infotct@alice.it', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: 'New Contact Form Submission - nextalent',
          _captcha: 'false',
          _template: 'table'
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+39 XXX XXX XXXX",
      href: "tel:+39XXXXXXXXX"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Italy",
      href: "#"
    }
  ]

  return (
    <section id="contact" ref={ref} className="relative section-padding bg-black overflow-hidden">
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left h-full"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 h-full">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8"style={{color: '#01DEF1'}}>
                Contact
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ready to revolutionize your team building strategy? 
                Contact us to learn more about how nextalent can transform your football club.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-4 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                </motion.a>
              ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-full"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 h-full">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Send A Message</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-gray-400 transition-all duration-200"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-gray-400 transition-all duration-200"
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company / Club
                      </label>
                      <input
                        {...register('company')}
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-gray-400 transition-all duration-200"
                        placeholder="Your football club or organization"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-gray-400 transition-all duration-200 resize-none"
                        placeholder="Tell us about your team building needs..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send A Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20 pt-12 border-t border-gray-700"
          >
            <p className="text-gray-400 text-lg mb-4">
              <strong className="text-white">infotct@alice.it</strong>
            </p>
            <p className="text-gray-500">
              © 2024 nextalent. All rights reserved. | Redefining football team building through AI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
