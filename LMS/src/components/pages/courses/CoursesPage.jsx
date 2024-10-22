import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Star, Users, Clock, Grid, List, Filter } from 'lucide-react';

const CourseFilter = ({ label, options, value, onChange }) => {
  return (
    <div className="relative">
      <select 
        className="appearance-none bg-white border border-green-300 rounded-lg py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-primary font-medium tracking-wider w-full transition duration-300 ease-in-out"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
};

const CourseCard = ({ course, isListView }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${isListView ? 'flex' : 'flex flex-col'} hover:shadow-xl transition duration-300 ease-in-out`}
    >
      <img 
        src={course.image} 
        alt={course.title} 
        className={`object-cover ${isListView ? 'w-1/3 h-auto' : 'w-full h-48'}`}
      />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl mb-2 text-gray-900">{course.title}</h3>
        <p className="text-sm text-gray-700 mb-2">{course.instructor}</p>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{course.rating} ({course.reviewCount})</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.studentsEnrolled} students</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-2xl text-green-600">${course.price.toFixed(2)}</span>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [rating, setRating] = useState('');
  const [type, setType] = useState('');
  const [isListView, setIsListView] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Fetch courses from API (using dummy data for now)
    const dummyCourses = [
      // All 10 courses as before
      {
        id: 1,
        title: 'Introduction to Quranic Arabic',
        instructor: 'Sheikh Abdullah',
        description: 'Learn the basics of Quranic Arabic and start understanding the Quran in its original language.',
        image: '/api/placeholder/300/200?text=Quranic+Arabic',
        rating: 4.8,
        reviewCount: 220,
        studentsEnrolled: 2500,
        duration: '8 weeks',
        price: 49.99,
        category: 'Language',
        level: 'Beginner',
        type: 'Recorded'
      },
      {
        id: 2,
        title: 'Advanced Tafsir Studies',
        instructor: 'Dr. Aisha Ahmed',
        description: 'Dive deep into Quranic exegesis with this advanced course on Tafsir.',
        image: '/api/placeholder/300/200?text=Tafsir+Studies',
        rating: 4.9,
        reviewCount: 180,
        studentsEnrolled: 1500,
        duration: '12 weeks',
        price: 79.99,
        category: 'Quran Studies',
        level: 'Advanced',
        type: 'Live'
      },
      // Add the rest of the courses
      {
        id: 3,
        title: 'Fundamentals of Islamic Jurisprudence',
        instructor: 'Imam Muhammad Salih',
        description: 'Understand the principles of Islamic law and jurisprudence.',
        image: '/api/placeholder/300/200?text=Islamic+Jurisprudence',
        rating: 4.7,
        reviewCount: 150,
        studentsEnrolled: 1800,
        duration: '10 weeks',
        price: 59.99,
        category: 'Fiqh',
        level: 'Intermediate',
        type: 'Recorded'
      },
      {
        id: 4,
        title: 'Seerah: Life of Prophet Muhammad (PBUH)',
        instructor: 'Dr. Zainab Hassan',
        description: 'Explore the life and teachings of Prophet Muhammad (Peace Be Upon Him).',
        image: '/api/placeholder/300/200?text=Seerah',
        rating: 4.9,
        reviewCount: 300,
        studentsEnrolled: 3000,
        duration: '8 weeks',
        price: 39.99,
        category: 'Islamic History',
        level: 'Beginner',
        type: 'Live'
      },
      {
        id: 5,
        title: 'Tajweed: Perfecting Quranic Recitation',
        instructor: 'Qari Yusuf Ali',
        description: 'Master the art of Quranic recitation with proper Tajweed rules.',
        image: '/api/placeholder/300/200?text=Tajweed',
        rating: 4.8,
        reviewCount: 250,
        studentsEnrolled: 2200,
        duration: '6 weeks',
        price: 29.99,
        category: 'Quran Studies',
        level: 'Beginner',
        type: 'Recorded'
      },
      {
        id: 6,
        title: 'Islamic Finance and Economics',
        instructor: 'Dr. Omar Farooq',
        description: 'Learn about Islamic principles in finance and economic systems.',
        image: '/api/placeholder/300/200?text=Islamic+Finance',
        rating: 4.6,
        reviewCount: 120,
        studentsEnrolled: 1000,
        duration: '8 weeks',
        price: 69.99,
        category: 'Islamic Studies',
        level: 'Intermediate',
        type: 'Live'
      },
      {
        id: 7,
        title: 'Introduction to Hadith Sciences',
        instructor: 'Ustadha Fatima Ali',
        description: 'Understand the foundations of Hadith literature and authentication.',
        image: '/api/placeholder/300/200?text=Hadith+Sciences',
        rating: 4.7,
        reviewCount: 180,
        studentsEnrolled: 1600,
        duration: '6 weeks',
        price: 5.00,
        category: 'Hadith Studies',
        level: 'Beginner',
        type: 'Recorded'
      },
      {
        id: 8,
        title: 'Islamic Art and Calligraphy',
        instructor: 'Professor Ahmad Khalil',
        description: 'Explore the rich tradition of Islamic art and learn calligraphy techniques.',
        image: '/api/placeholder/300/200?text=Islamic+Art',
        rating: 4.9,
        reviewCount: 90,
        studentsEnrolled: 800,
        duration: '8 weeks',
        price: 49.99,
        category: 'Islamic Culture',
        level: 'Beginner',
        type: 'Live'
      },
      {
        id: 9,
        title: 'Comparative Religion from an Islamic Perspective',
        instructor: 'Dr. Sarah Johnson',
        description: 'Study major world religions from an Islamic viewpoint.',
        image: '/api/placeholder/300/200?text=Comparative+Religion',
        rating: 4.5,
        reviewCount: 110,
        studentsEnrolled: 950,
        duration: '10 weeks',
        price: 59.99,
        category: 'Islamic Studies',
        level: 'Intermediate',
        type: 'Recorded'
      },
      {
        id: 10,
        title: 'Arabic Grammar Mastery',
        instructor: 'Professor Layla Mahmoud',
        description: 'Advanced course in Arabic grammar for Quranic and Islamic studies.',
        image: '/api/placeholder/300/200?text=Arabic+Grammar',
        rating: 4.8,
        reviewCount: 200,
        studentsEnrolled: 1800,
        duration: '12 weeks',
        price: 79.99,
        category: 'Language',
        level: 'Advanced',
        type: 'Live'
      }
    ];
    setCourses(dummyCourses);
  }, []);

  const filteredCourses = courses.filter(course => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === '' || course.category === category) &&
      (level === '' || course.level === level) &&
      (price === '' || (price === 'Free' ? course.price === 0 : course.price > 0)) &&
      (duration === '' || course.duration.includes(duration)) &&
      (rating === '' || course.rating >= parseFloat(rating)) &&
      (type === '' || course.type === type)
    );
  });

  return (
    <div className="bg-tertiary min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Explore Our Islamic Courses</h1>
        
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for courses"
                  className="w-full pl-12 pr-4 py-3 bg-tertiary border border-font rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-primary transition duration-300 ease-in-out"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out flex items-center justify-center md:w-auto"
            >
              <Filter className="w-5 h-5 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          
          {showFilters && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <CourseFilter label="Category" options={['Quran Studies', 'Hadith Studies', 'Fiqh', 'Islamic History', 'Language', 'Islamic Culture']} value={category} onChange={setCategory} />
              <CourseFilter label="Level" options={['Beginner', 'Intermediate', 'Advanced']} value={level} onChange={setLevel} />
              <CourseFilter label="Price" options={['Free', 'Paid']} value={price} onChange={setPrice} />
              <CourseFilter label="Duration" options={['0-4 weeks', '4-8 weeks', '8+ weeks']} value={duration} onChange={setDuration} />
              <CourseFilter label="Rating" options={['4.5+', '4.0+', '3.5+']} value={rating} onChange={setRating} />
              <CourseFilter label="Type" options={['Live', 'Recorded']} value={type} onChange={setType} />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Available Courses ({filteredCourses.length})</h2>
          <div className="flex items-center space-x-4">
            <button 
              className={`p-2 rounded-lg transition-colors ${!isListView ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-900'}`} 
              onClick={() => setIsListView(false)}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button 
              className={`p-2 rounded-lg transition-colors ${isListView ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-900'}`} 
              onClick={() => setIsListView(true)}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className={`grid gap-6 ${isListView ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} isListView={isListView} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <p className="text-center text-gray-600 mt-12 text-lg">
            No courses found matching your criteria. Try adjusting your filters or search terms.
          </p>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
