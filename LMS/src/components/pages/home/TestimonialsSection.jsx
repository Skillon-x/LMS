import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    role: "Student",
    image: "/api/placeholder/150/150",
    quote: "QuranConnect has deepened my understanding of the Quran. The tafsir courses are particularly enlightening and have transformed my relationship with Allah's words.",
    rating: 5
  },
  {
    id: 2,
    name: "Sheikh Abdullah Mahmoud",
    role: "Instructor",
    image: "/api/placeholder/150/150",
    quote: "As an educator, QuranConnect provides me with the perfect platform to share Islamic knowledge globally. The interactive features allow for meaningful engagement with students.",
    rating: 5
  },
  {
    id: 3,
    name: "Fatima Ali",
    role: "Student",
    image: "/api/placeholder/150/150",
    quote: "The variety of Islamic courses on QuranConnect is incredible. I've improved my tajweed, learned about Islamic history, and even started studying Arabic - all in one place!",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-xl shadow-lg shadow-white p-8 flex flex-col items-center text-center">
    <img 
      src={testimonial.image} 
      alt={testimonial.name} 
      className="w-24 h-24 rounded-full mb-4 object-cover"
    />
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill={i < testimonial.rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
    <p className="text-sm text-gray-500">{testimonial.role}</p>
  </div>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-primary py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-font mb-12">
          Voices of Our Ummah
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4 ">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 shadow-primary top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-green-600" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 shadow-primary transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-green-600" />
          </button>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;