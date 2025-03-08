import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/layout/Hero';
import { Features } from '@/components/features/Features';
import { CallToAction } from '@/components/layout/CallToAction';
import { Testimonials } from '@/components/layout/Testimonials';
import { Pricing } from '@/components/layout/Pricing';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CallToAction />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
