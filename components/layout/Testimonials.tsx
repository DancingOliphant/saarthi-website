'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "KrimOS has completely transformed how we produce video content. The AI technology is mind-blowing and the results are professional-grade videos in a fraction of the time it used to take us.",
    author: "Alex Thompson",
    role: "Content Creator",
    company: "CreativeMinds",
    avatar: "/images/testimonial-avatars/avatar-1.png"
  },
  {
    quote: "As someone with no video editing background, I was skeptical about AI-generated videos. But KrimOS made it incredibly easy to create high-quality marketing videos for our products.",
    author: "Michelle Rodriguez",
    role: "E-commerce Manager",
    company: "ShopWave",
    avatar: "/images/testimonial-avatars/avatar-2.png"
  },
  {
    quote: "Our team saves countless hours every week thanks to KrimOS. The templates are sleek, the interface is intuitive, and the videos we create consistently get high engagement on social media.",
    author: "James Wilson",
    role: "Social Media Director",
    company: "Pulse Marketing",
    avatar: "/images/testimonial-avatars/avatar-3.png"
  },
  {
    quote: "I've tried several AI video tools, and KrimOS stands out for its quality and ease of use. The voice-to-text feature is incredibly accurate, and the export options meet all our needs.",
    author: "Sophia Chen",
    role: "Digital Media Specialist",
    company: "TechInnovate",
    avatar: "/images/testimonial-avatars/avatar-4.png"
  },
  {
    quote: "KrimOS has become an essential tool in our content creation workflow. The ability to quickly generate professional videos has given us a competitive edge in our industry.",
    author: "David Martinez",
    role: "Creative Director",
    company: "Visual Studios",
    avatar: "/images/testimonial-avatars/avatar-5.png"
  },
  {
    quote: "The ROI with KrimOS has been incredible. We've cut our video production costs by 70% while actually increasing our output. I highly recommend it to any business looking to scale their video content.",
    author: "Emily Parker",
    role: "COO",
    company: "GrowthPath",
    avatar: "/images/testimonial-avatars/avatar-6.png"
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} id="testimonials" className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Thousands</span> of Creators
          </h2>
          <p className="text-xl text-gray-600">
            See what our users are saying about their experience with KrimOS
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="absolute -top-5 -left-5 text-indigo-500 transform -rotate-12">
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  {/* Replace with actual avatar */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-xs">Avatar</span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonials[activeIndex].author}</div>
                  <div className="text-gray-600">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-1 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index ? 'bg-indigo-500 w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
        
        {/* Testimonial Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {testimonials.slice(0, 3).map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4">
                "{item.quote.length > 150 ? item.quote.substring(0, 150) + '...' : item.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                  {/* Placeholder for avatar */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-xs">Avatar</span>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{item.author}</div>
                  <div className="text-gray-600 text-sm">{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
