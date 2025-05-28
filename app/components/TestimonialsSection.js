'use client';
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mohamed Ibrahem",
      username: "@Mohamed98",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content: "Very helpful content, easy to follow and understand. Great learning experience."
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      username: "@Ahmed7",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content: "Very helpful content, easy to follow and understand. Great learning experience."
    },
    {
      id: 3,
      name: "Fatma Ali",
      username: "@Fatma_A",
      rating: 4.0,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content: "Very helpful content, easy to follow and understand. Great learning experience."
    },
    {
      id: 4,
      name: "Omar Saleh",
      username: "@Omar_S",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content: "Outstanding quality and comprehensive material. Definitely worth investing in."
    },
    {
      id: 5,
      name: "Layla Ahmed",
      username: "@Layla_A",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332b2a2?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content: "Perfect for beginners and advanced learners alike. Highly structured content."
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasPartialStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-5! h-5! text-yellow-400! fill-yellow-400!" />
      );
    }
    
    // Add partial star if needed
    if (hasPartialStar) {
      stars.push(
        <Star key="partial" className="w-5! h-5! text-yellow-400! fill-yellow-400!" />
      );
    }
    
    // Add empty stars to make 5 total
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5! h-5! text-gray-300! fill-gray-300!" />
      );
    }

    return stars;
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length));
  }

  return (
    <div className="min-h-screen! relative! overflow-hidden!" style={{
      background: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)'
    }}>
      {/* Background Pattern */}
      <div 
        className="absolute! inset-0! opacity-30!"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20 20v-40l20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative! z-10! py-16! px-4!">
        {/* Title */}
        <div className="text-center! mb-16!">
          <h2 className="text-5xl! font-bold! text-white! mb-4!" style={{fontFamily: 'Arial, sans-serif'}}>
            آراء عملائنا
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="max-w-6xl! mx-auto! relative! px-4!">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute! left-0! top-1/2! transform! -translate-y-1/2! z-20! bg-white/20! hover:bg-white/30! backdrop-blur-sm! rounded-full! p-4! transition-all! duration-300!"
          >
            <ChevronLeft className="w-8! h-8! text-white!" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute! right-0! top-1/2! transform! -translate-y-1/2! z-20! bg-white/20! hover:bg-white/30! backdrop-blur-sm! rounded-full! p-4! transition-all! duration-300!"
          >
            <ChevronRight className="w-8! h-8! text-white!" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid! grid-cols-1! md:grid-cols-3! gap-12!">
            {visibleTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${currentIndex}`} className="relative! cursor-pointer! flex! justify-center! mx-6!">
                <div className={`bg-white! rounded-3xl! p-8! shadow-lg! border! border-gray-200! transition-all! duration-500! relative! flex! flex-col! h-[480px]! w-[420px]! gap-4! hover:shadow-xl! ${
                  index === 1 ? 'transform! scale-105! z-10!' : ''
                }`}>
                  {/* Profile Image */}
                  <div className="flex! justify-center! mb-6!">
                    <div className="w-24! h-24! rounded-full! overflow-hidden! border-4! border-gray-100!">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full! h-full! object-cover!"
                      />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="text-center! mb-6!">
                    <div className="text-3xl! font-bold! text-gray-800! mb-3!">
                      {testimonial.rating}
                    </div>
                    <div className="flex! justify-center! gap-1!">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center! mb-8! flex-grow!">
                    <p className="text-gray-600! leading-relaxed! text-base!">
                      {testimonial.content}
                    </p>
                  </div>

                  {/* Name and Username */}
                  <div className="text-center! mt-auto!">
                    <h3 className="font-bold! text-xl! text-teal-500! mb-2!">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400! text-base!">
                      {testimonial.username}
                    </p>
                  </div>

                  {/* Speech Bubble Tail */}
                  <div className="absolute! -bottom-4! left-1/2! transform! -translate-x-1/2!">
                    <div 
                      className="w-0! h-0!" 
                      style={{
                        borderLeft: '20px solid transparent!',
                        borderRight: '20px solid transparent!',
                        borderTop: '20px solid white!'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;