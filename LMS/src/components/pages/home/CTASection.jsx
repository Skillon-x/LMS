import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Embark on Your Quranic Journey Today
          </h2>
          <p className="text-xl text-primary mb-8">
            Join thousands of seekers of knowledge on QuranConnect. 
            Deepen your understanding of Islam with our comprehensive courses and guidance from esteemed scholars.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/signup"
              className="bg-font border-2 border-primary shadow-lg shadow-primary text-green-700 hover:scale-105 transition duration-300 font-semibold py-3 px-8 rounded-full text-lg flex items-center justify-center"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/courses"
              className="bg-primary  border-font border-2 shadow-md shadow-primary hover:scale-105 text-white  transition duration-300 font-semibold py-3 px-8 rounded-full text-lg"
            >
              Explore Islamic Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;