import React from 'react';
import Navbar from '../home/Navbar';
import HeroSection from './HeroSection';
import CustomerLogos from './CustomerLogos';
import BrowseCategories from './BrowseCategories';
import FeaturedCourses from './FeaturedCourses';
import HowItWorks from './HowItWorks';
import BenefitsSection from './BenefitsSection';
import Footer from './footer';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CustomerLogos />
      <BrowseCategories />
      <FeaturedCourses />
      <HowItWorks />
      <CTASection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;