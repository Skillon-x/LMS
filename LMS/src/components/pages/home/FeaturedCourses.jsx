import React from 'react';

const courses = [
  {
    id: 1,
    title: "Introduction to Quranic Tafsir",
    instructor: "Sheikh Ahmad Al-Rashid",
    rating: 4.9,
    students: 3456,
    image: "/api/placeholder/300/200?text=Tafsir+Course"
  },
  {
    id: 2,
    title: "Advanced Tajweed: Perfecting Recitation",
    instructor: "Ustadha Fatima Hassan",
    rating: 4.8,
    students: 2789,
    image: "/api/placeholder/300/200?text=Tajweed+Course"
  },
  {
    id: 3,
    title: "Islamic History: From Prophet to Present",
    instructor: "Dr. Yasir Qadhi",
    rating: 4.9,
    students: 5678,
    image: "/api/placeholder/300/200?text=Islamic+History+Course"
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-font">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-green-700">{course.title}</h3>
                <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500">★ {course.rating}</span>
                  <span className="text-gray-600">{course.students} students</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-font shadow-md shadow-secondary hover:scale-105 text-primary font-bold py-3 px-6 rounded-full transition duration-300">
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;