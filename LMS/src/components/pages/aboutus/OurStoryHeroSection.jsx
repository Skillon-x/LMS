import React from 'react';
import { motion } from 'framer-motion';

const OurStoryHeroSection = () => {
  return (
    <section className="relative bg-primary text-font overflow-hidden">
      {/* Top margin to avoid navbar overlap */}
      <div className="h-16 md:h-20"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-font">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-center max-w-3xl mx-auto text-font">
            From a small startup to a global education platform, LMSPro has been transforming online learning since 2020.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center text-tertiary">Mission Statement</h2>
          <p className="text-lg text-center max-w-2xl mx-auto text-secondary">
            Our mission is to provide accessible, authentic Quranic education online, enriching the lives of our students with Islamic wisdom.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center text-tertiary">Our Vision</h2>
          <p className="text-lg text-center max-w-2xl mx-auto text-secondary">
            Our long-term vision is to become a leading platform for Islamic education, using modern technology to bring the teachings of the Quran to learners worldwide.
          </p>
        </motion.div>

        {/* History of the Platform */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center text-tertiary">History of the Platform</h2>
          <p className="text-lg text-center max-w-2xl mx-auto text-secondary">
            Our platform was founded in 2020 with the goal of making Quranic education accessible to all. From our humble beginnings, we've achieved key milestones, including launching interactive online courses and forming partnerships with leading Islamic scholars.
          </p>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center text-tertiary">Our Values</h2>
          <ul className="list-disc list-inside max-w-2xl mx-auto text-lg text-secondary">
            <li>Commitment to authentic Islamic knowledge</li>
            <li>Accessibility of Quranic wisdom</li>
            <li>Fostering a respectful learning community</li>
            <li>Continuous improvement and innovation in online Islamic education</li>
          </ul>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center text-tertiary">Meet Our Team</h2>
          <p className="text-lg text-center max-w-2xl mx-auto text-secondary">
            Our team is comprised of experienced educators and developers dedicated to providing the best Quranic education experience online.
          </p>
        </motion.div>

        {/* Advisory Board */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center text-tertiary">Advisory Board</h2>
          <p className="text-lg text-center max-w-2xl mx-auto text-secondary">
            We are honored to have a board of respected Islamic scholars guiding our content and ensuring its alignment with authentic Islamic teachings.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center text-tertiary">What Our Students Say</h2>
          <blockquote className="text-lg italic text-center max-w-2xl mx-auto text-secondary">
            "This platform has transformed my understanding of the Quran and made learning accessible from anywhere in the world." — Student
          </blockquote>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <motion.a
            href="#get-involved"
            className="inline-block bg-font hover:bg-orange-600 text-primary font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-altCta hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default OurStoryHeroSection;
