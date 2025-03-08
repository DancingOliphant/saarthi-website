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
    quote: "I've tried several AI video tools, and KrimOS stands out for its quality and ease of use. The voice-to-text feature is incredibly accurate
