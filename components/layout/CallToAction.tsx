'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export function CallToAction() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 overflow-hidden relative">
      {/* Background design elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-100 rounded-full opacity-70 blur-2xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                Ready to create amazing videos with AI?
              </motion.h2>
              <motion.p 
                className="text-indigo-100 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join thousands of creators, marketers, and businesses who are transforming their video content with our AI platform.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link 
                  href="/signup" 
                  className="bg-white hover:bg-gray-100 text-indigo-600 font-medium px-6 py-3 rounded-md transition-colors text-center"
                >
                  Get Started Free
                </Link>
                <Link 
                  href="/demo" 
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium px-6 py-3 rounded-md transition-colors text-center"
                >
                  Watch Demo
                </Link>
              </motion.div>
            </div>
            <div className="hidden md:block relative h-full min-h-[300px]">
              {/* Decorative image or illustration */}
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <span className="text-white/70">Illustration</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial preview */}
        <motion.div 
          className="mt-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-block mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-4">
            "KrimOS has revolutionized our marketing videos. What used to take days now takes minutes with incredible results."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
            <div className="text-left">
              <div className="font-medium">Sarah Johnson</div>
              <div className="text-gray-600 text-sm">Marketing Director, TechCorp</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
