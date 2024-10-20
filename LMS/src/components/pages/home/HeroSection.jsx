import React from 'react';
import heroImage from '../../../assets/images/heropage.png';

const HeroSection = () => {
  return (
    <div className="bg-primary py-3 pb-16 mt-32 p-5 md:mt-16 md:py-20">
      <div className="max-w-[80vw] mx-auto  sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Left side content */}
        <div className="lg:w-1/2 lg:pr-10">
          <div className="flex items-center mb-4">
            <div className="flex -space-x-2 p-2 overflow-hidden">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <img
                  key={index}
                  className="inline-block h-6 w-6 md:h-8 md:w-8 rounded-full ring-font ring-2"
                  src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
                  alt=""
                />
              ))}
            </div>
            <span className="ml-1 md:ml-3 md:text-sm text-tertiary">50,000+ Active Learners</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-font mb-4">
            Learn from Expert Teachers, Anytime, Anywhere
          </h1>
          <p className="text-sm md:text-lg text-tertiary mb-6">
          Join our community of learners and explore the teachings of Islam through expert-led video courses.
          </p>
          <div className="flex space-x-4">
            <button className="bg-font hover:bg-orange-600 text-primary text-sm md:text-lg font-bold py-1 px-3 md:py-3 md:px-6 rounded-full transition duration-300">
              Start Learning
            </button>
            <button className="bg-white hover:bg-gray-100 text-primary text-sm md:text-lg font-semibold py-3 px-6 border border-gray-400 rounded-full shadow transition duration-300">
              Teach with Us
            </button>
          </div>
          <div className="mt-8 text-sm text-tertiary">
            <span className="font-bold text-tertiary tracking-wider">1000+</span> Recorded Classes Available
          </div>
        </div>
        
        {/* Right side image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;