'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const pricingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(pricingRef, { once: true, amount: 0.3 });
  
  const pricingPlans = [
    {
      name: 'Free',
      description: 'Perfect for trying out the platform',
      price: { monthly: 0, annual: 0 },
      features: [
        '5 AI-generated videos per month',
        'Standard video quality',
        'Basic templates',
        '720p exports',
        'KrimOS watermark',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      description: 'Best for creators and small businesses',
      price: { monthly: 29, annual: 24 },
      features: [
        '30 AI-generated videos per month',
        'HD video quality',
        'All templates',
        'Custom branding',
        'Voice-to-text conversion',
        'Priority rendering',
        'No watermark',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Business',
      description: 'For teams and professional use',
      price: { monthly: 79, annual: 69 },
      features: [
        'Unlimited AI-generated videos',
        '4K video quality',
        'All Pro features',
        'Team collaboration',
        'Advanced analytics',
        'API access',
        'Dedicated support',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" ref={pricingRef} className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the plan that fits your needs
          </motion.p>
          
          {/* Billing Toggle */}
          <motion.div 
            className="flex items-center justify-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className={`text-lg ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative rounded-full w-14 h-7 bg-indigo-200 flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span 
                className={`absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform transform ${
                  isAnnual ? 'translate-x-7' : ''
                }`} 
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Yearly <span className="ml-1 text-sm text-indigo-600 font-medium">Save 20%</span>
            </span>
          </motion.div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-indigo-500 relative' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-1 rotate-45">
                  POPULAR
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {plan.price.monthly > 0 ? '/month' : ''}
                  </span>
                  {isAnnual && plan.price.monthly > 0 && (
                    <div className="text-sm text-gray-500 mt-1">
                      Billed annually (${plan.price.annual * 12}/year)
                    </div>
                  )}
                </div>
                <Link
                  href="/signup"
                  className={`block text-center py-3 px-4 rounded-md font-medium transition-colors w-full ${
                    plan.popular
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
              <div className="bg-gray-50 p-6 md:p-8">
                <p className="font-medium text-gray-700 mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enterprise Section */}
        <motion.div
          className="mt-16 bg-gray-900 text-white rounded-xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Enterprise</h3>
              <p className="text-gray-300 text-lg mb-6">
                Custom solutions for large organizations with advanced needs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Custom AI model training',
                  'Advanced security features',
                  'SSO & user management',
                  'Custom integrations',
                  'Dedicated account manager',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-indigo-400 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Contact our sales team</h4>
              <p className="text-gray-300 mb-6">
                Let us help you find the perfect solution for your organization.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-4 rounded-md transition-colors"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
