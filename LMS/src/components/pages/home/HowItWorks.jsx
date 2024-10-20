import React from 'react';
import { BookOpen, Play, Award, GraduationCap, Users, HeartHandshake } from 'lucide-react';

const steps = [
  {
    title: "Explore Islamic Courses",
    description: "Browse our diverse range of Quranic studies and Islamic courses.",
    icon: BookOpen,
    color: "text-green-600",
  },
  {
    title: "Start Your Journey",
    description: "Enroll in courses and access lessons from respected Islamic scholars.",
    icon: Play,
    color: "text-green-600",
  },
  {
    title: "Deepen Your Knowledge",
    description: "Engage with course materials, complete assignments, and reflect on teachings.",
    icon: GraduationCap,
    color: "text-green-600",
  },
  {
    title: "Earn Certifications",
    description: "Complete courses and earn certificates to validate your Islamic education.",
    icon: Award,
    color: "text-green-600",
  },
  {
    title: "Join the Community",
    description: "Participate in discussions and connect with fellow learners worldwide.",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "Apply Teachings",
    description: "Implement Islamic principles in daily life and share knowledge with others.",
    icon: HeartHandshake,
    color: "text-green-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">How QuranConnect Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 shadow-primary cursor-pointer">
              <div className={`${step.color} mb-4`}>
                <step.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-700">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4 text-primary font-medium">Ready to embark on your journey of Islamic knowledge?</p>
          <button className="bg-primary hover:scale-105 text-font shadow-lg shadow-primary font-bold py-3 px-8 rounded-full transition duration-300">
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;