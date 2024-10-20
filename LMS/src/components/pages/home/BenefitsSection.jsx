import React from 'react';
import { Clock, Globe, Laptop, Book, Users, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    title: "Flexible Learning",
    description: "Study Quranic sciences and Islamic knowledge at your own pace, fitting your schedule.",
    icon: Clock,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Global Ummah",
    description: "Connect with Muslim learners and scholars from diverse backgrounds worldwide.",
    icon: Globe,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Accessible Everywhere",
    description: "Access Islamic courses on any device, making learning convenient and consistent.",
    icon: Laptop,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Scholar-led Courses",
    description: "Learn from respected Islamic scholars and experts in various Islamic disciplines.",
    icon: Book,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Interactive Learning",
    description: "Engage in discussions, Q&A sessions, and collaborative study with peers and instructors.",
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Spiritual Growth",
    description: "Deepen your faith, improve your character, and strengthen your connection with Allah.",
    icon: HeartHandshake,
    color: "bg-green-100 text-green-600",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">Why Choose QuranConnect</h2>
        <p className="text-xl text-primary text-center mb-12">Discover the blessings of learning with us</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 ">
              <div className={`p-3 rounded-full bg-white ${benefit.color}`}>
                <benefit.icon size={24} className='text-primary' />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-primary text-font shadow-lg shadow-primary font-bold py-3 px-8 rounded-full transition duration-300">
            Begin Your Islamic Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;