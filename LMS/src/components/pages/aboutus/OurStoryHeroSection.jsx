import React from 'react';
import { motion } from 'framer-motion';

const OurStoryHeroSection = () => {
  return (
    <section className="relative bg-blue-600 text-white overflow-hidden">
      {/* Top margin to avoid navbar overlap */}
      <div className="h-16 md:h-20"></div>
      
      {/* SVG Wave Background */}
      
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white">Our Story</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-center max-w-3xl mx-auto text-white">
            From a small startup to a global education platform, LMSPro has been transforming online learning since 2020.
          </p>
          <div className="text-center">
            <motion.a
              href="#full-story"
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-blue-100 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Our Full Story
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Yellow Accent */}
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-400 rounded-full mr-4 mb-4"></div>
    </section>
  );
};

export default OurStoryHeroSection;