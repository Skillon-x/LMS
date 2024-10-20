import React from 'react';

const categories = [
  { name: 'Tafsir', icon: '📖', courses: '50+ Courses' },
  { name: 'Tajweed', icon: '🎙️', courses: '30+ Courses' },
  { name: 'Islamic History', icon: '🕌', courses: '40+ Courses' },
  { name: 'Fiqh', icon: '⚖️', courses: '35+ Courses' },
  { name: 'Hadith Studies', icon: '📜', courses: '45+ Courses' },
  { name: 'Arabic Language', icon: '🗨️', courses: '25+ Courses' },
  { name: 'Seerah', icon: '👳‍♂️', courses: '20+ Courses' },
  { name: 'Islamic Ethics', icon: '🤲', courses: '15+ Courses' },
];

const CustomButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-font  text-green-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-100 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

const BrowseCategories = () => {
  return (
    <section className="py-16 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-primary">
          Explore Quranic Wisdom by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {categories.map((category) => (
            <div key={category.name} className="bg-primary p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-700 cursor-pointer hover:scale-110  ease-in-out shadow-primary">
              <span className="text-4xl mb-3">{category.icon}</span>
              <h3 className="font-semibold mb-1 text-font">{category.name}</h3>
              <p className="text-sm text-font">{category.courses}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-primary font-medium mb-4">Discover our comprehensive range of Islamic studies courses.</p>
          <CustomButton  onClick={() => console.log('View All Categories clicked')} >
            View All Categories
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;