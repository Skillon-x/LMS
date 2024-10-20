import React, { useState } from 'react';
import { FaBook, FaMosque, FaBalanceScale, FaHistory, FaArrowRight } from 'react-icons/fa';

const LearningPathCard = ({ icon, title, courses, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 flex flex-col h-full transition-all duration-300 transform ${isHovered ? 'scale-105 shadow-xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center mb-6 p-3 rounded-lg ${color}`}>
        {icon}
        <h3 className="text-xl font-bold ml-3 text-white">{title}</h3>
      </div>
      <ul className="list-none pl-2 mb-6 flex-grow">
        {courses.map((course, index) => (
          <li key={index} className="mb-3 flex items-start">
            <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${color.replace('bg-', 'bg-opacity-75 bg-')}`}></div>
            <span>{course}</span>
          </li>
        ))}
      </ul>
      <button className={`${color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition duration-300 flex items-center justify-center`}>
        Start This Path
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

const LearningPathSuggestions = () => {
  const learningPaths = [
    {
      icon: <FaBook className="text-3xl text-white" />,
      title: "Quranic Studies",
      color: "bg-green-600",
      courses: [
        "Introduction to Quranic Arabic",
        "Tafsir Fundamentals",
        "Memorization Techniques",
        "Advanced Quranic Sciences"
      ]
    },
    {
      icon: <FaMosque className="text-3xl text-white" />,
      title: "Islamic Theology",
      color: "bg-blue-600",
      courses: [
        "Fundamentals of Aqeedah",
        "Prophetic Traditions (Hadith)",
        "Islamic Ethics and Spirituality",
        "Comparative Religion"
      ]
    },
    {
      icon: <FaBalanceScale className="text-3xl text-white" />,
      title: "Islamic Jurisprudence",
      color: "bg-yellow-600",
      courses: [
        "Principles of Fiqh",
        "Islamic Family Law",
        "Financial Transactions in Islam",
        "Contemporary Fiqh Issues"
      ]
    },
    {
      icon: <FaHistory className="text-3xl text-white" />,
      title: "Islamic History",
      color: "bg-red-600",
      courses: [
        "Life of Prophet Muhammad (PBUH)",
        "Early Islamic Civilization",
        "Islamic Golden Age",
        "Modern Islamic World"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Embark on Your Islamic Learning Journey</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Explore our expertly curated learning paths designed to deepen your understanding of Islam. Each path is tailored to provide comprehensive knowledge in key areas of Islamic studies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
          {learningPaths.map((path, index) => (
            <LearningPathCard key={index} {...path} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathSuggestions;