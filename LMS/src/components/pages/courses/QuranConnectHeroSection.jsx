import React from 'react';
import { BookOpen, Users, Star } from 'lucide-react';

const StatItem = ({ icon, value, label }) => (
  <div className="flex flex-col items-center">
    {icon}
    <span className="text-2xl font-bold mt-2">{value}</span>
    <span className="text-sm text-gray-200">{label}</span>
  </div>
);

const QuranConnectHeroSection = () => {
  return (
    <div className="bg-primary text-white py-10 mt-16 sm:mt-20 md:mt-24">
      <div className="container mx-auto max-w-[80vw] px-4 py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl text-font md:text-5xl font-bold mb-4">
              Deepen Your Understanding of the Quran
            </h1>
            <p className="text-xl mb-6 text-tertiary">
              Embark on a journey of Islamic knowledge with QuranConnect. Our expert-led courses are designed to help you grow in your faith and understanding of the Quran and Islamic teachings.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-font text-primary  hover:bg-green-100 transition duration-300 font-bold py-3 px-6 rounded-full text-lg">
                Explore Courses
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 transition duration-300 font-semibold py-3 px-6 rounded-full text-lg">
                Our Approach
              </button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mt-8 md:mt-0">
            <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose QuranConnect</h2>
            <div className="grid grid-cols-3 gap-4">
              <StatItem 
                icon={<BookOpen className="w-8 h-8" />}
                value="500+"
                label="Islamic Courses"
              />
              <StatItem 
                icon={<Users className="w-8 h-8" />}
                value="100k+"
                label="Students Worldwide"
              />
              <StatItem 
                icon={<Star className="w-8 h-8" />}
                value="50+"
                label="Renowned Scholars"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranConnectHeroSection;