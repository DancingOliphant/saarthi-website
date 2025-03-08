'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white -z-10" />
      
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 right-0 -z-5 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-60 -right-20 w-72 h-72 bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Create Amazing Videos with <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Transform your ideas into stunning videos in minutes with our advanced AI video generation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/signup" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-md transition-all text-center">
                Start Creating
              </Link>
              <Link href="/features" className="border border-gray-300 hover:border-gray-400 bg-white text-gray-800 font-medium py-3 px-6 rounded-md transition-all text-center">
                Learn More
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              No credit card required • Free plan available
            </div>
          </motion.div>
          
          {/* Right Column - Video/Image Showcase */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-full">
              {/* Placeholder for video/image - replace with actual content */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="aspect-video relative bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Video Showcase Placeholder
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="h-8 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-100"></div>
                    <div className="h-4 w-40 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-full -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
