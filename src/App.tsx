import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhySahayam from './components/WhySahayam';
import AboutStory from './components/AboutStory';
import DiscoveryCall from './components/DiscoveryCall';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CustomizedForm from './components/CustomizedForm';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-up class
    const elementsToAnimate = document.querySelectorAll('.fade-up');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Services />
        <WhySahayam />
        <AboutStory />
        <DiscoveryCall />
        <Testimonials />
        <Pricing />
    
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;