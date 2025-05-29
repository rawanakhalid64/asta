'use client';
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

const categories = [
  'الدرجات الاكاديمية',
  'الدورات المضافة حديثاً',
  'الدورات الاعلى تقييماً',
  'أفضل الدورات المجانية',
];

const CourseSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Dummy data structure updated to match screenshot needs and provide more items
  const coursesByCategory = {
    'الدرجات الاكاديمية': Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      title: 'تحليل البيانات',
      subtitle: 'ماجستير',
      provider: 'Microsoft Corp.',
      rating: 4.2,
      price: '250',
      image: "/images/cr.png"
    })),
    'الدورات المتقدمة حديثاً': Array.from({ length: 6 }, (_, i) => ({
      id: i + 7,
      title: 'الذكاء الاصطناعي',
      subtitle: 'متقدم',
      provider: 'Google',
      rating: 4.9,
      price: '400',
      image: "/images/cr.png"
    })),
    'الدورات الاعلى تقييماً': Array.from({ length: 6 }, (_, i) => ({
      id: i + 13,
      title: 'البرمجة بـ Python',
      subtitle: 'مبتدئ',
      provider: 'Meta',
      rating: 4.8,
      price: '200',
      image: "/images/cr.png"
    })),
    'أفضل الدورات المجانية': Array.from({ length: 6 }, (_, i) => ({
      id: i + 19,
      title: 'مقدمة في البرمجة',
      subtitle: 'مجاني',
      provider: 'freeCodeCamp',
      rating: 4.3,
      price: '0',
      image: "/images/cr.png"
    })),
  };

  const getCurrentCourses = () => {
    // Return courses for the active category, or empty array if not found
    return coursesByCategory[activeCategory] || [];
  };

  const handleTabChange = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4! h-4! ${
          i < Math.floor(rating)
            ? 'fill-yellow-400! text-yellow-400!'
            : i < rating
            ? 'fill-yellow-400/50! text-yellow-400!'
            : 'fill-gray-200! text-gray-200!'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br! from-slate-50! to-blue-50! py-8! px-0! sm:px-6! lg:px-8! min-h-screen! flex! flex-col! items-center! justify-center!">
      <div className="max-w-7xl! w-full! mx-auto! px-2! sm:px-0!">
        {/* Tabs Header Container with Gradient */}
        <div className="w-full! bg-gradient-to-r! from-[#23A0D0]! to-[#3CBEB3]! py-4! pb-8! mb-0! relative!">
          {/* Tabs Bar */}
          {/* Tabs should be right-aligned, evenly spaced, non-scrolling, and stick to bottom */}
          {/* Added items-end to make tabs stick to bottom */}
          {/* Changed justify-end to justify-center */}
          <div className="max-w-7xl! mx-auto! flex! justify-center! gap-4! px-2! sm:px-0! md:px-6! lg:px-8! items-end!">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabChange(cat)}
                // Updated border classes and colors, added translate effect, removed bottom border
                className={`whitespace-nowrap! px-6! py-2! rounded-t-lg! rounded-b-none! border-t! border-l! border-r! font-bold! text-base! transition-all! duration-200! relative! ${
                  activeCategory === cat
                    ? 'bg-white! border-gray-400! text-[#202C5B]! shadow-sm! z-10 transform! translate-y-[-8px]! md:translate-y-[-12px]! border-b-0!'
                    : 'bg-transparent! border-gray-300! text-white! hover:bg-white! hover:bg-opacity-10! hover:translate-y-[-4px]! md:hover:translate-y-[-6px]! border-b-0!'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Removed المزيد button and scrolling styles */}
        </div>

        {/* Course Cards Container */}
        {/* Removed negative margin-top to fix overlay issue */}
        <div className="grid! w-full! grid-cols-1! sm:grid-cols-2! lg:grid-cols-3! gap-6! px-0! sm:px-2! mb-8! relative! z-0!">
          {getCurrentCourses().map((course) => (
            <div key={course.id} className="bg-white! rounded-2xl! border! border-cyan-300! hover:shadow-xl! transition-all! duration-300! relative! overflow-visible! w-full! max-w-full! sm:max-w-xs! md:max-w-sm! lg:max-w-none! xl:w-[400px]! mx-0! sm:mx-auto! p-4! flex flex-col">
              {/* Course Image */}
              <div className="flex! items-center! justify-center! mb-4!">
                <div className="rounded-xl! overflow-hidden! border! border-cyan-200! w-full!">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover! w-full! h-40!"
                  />
                </div>
              </div>

              {/* Provider Pill */}
              <div className="border! border-cyan-300! rounded-full! px-4! py-1! mb-4! flex! items-center! gap-2! bg-white! w-full! justify-center!" style={{minHeight:'40px'}}>
                 <Image src="/images/icons/micro.svg" alt="Microsoft Logo" width={20} height={20} className="w-5! h-5!" />
                <span className="text-sm! text-gray-800! font-bold!">{course.provider}</span>
              </div>
              {/* Course Title & Subtitle */}
              <div className="w-full! text-right! mb-2!">
                <h3 className="text-2xl! font-bold! text-black! mb-1!">{course.title}</h3>
                <span className="text-cyan-500! text-base! font-bold!">{course.subtitle}</span>
              </div>
              <hr className="w-full! border-cyan-200! my-4!" />
              {/* Reviews and Price Centered */}
              <div className="flex! flex-col! items-center! justify-center! mb-6! gap-1!">
                <div className="flex! items-center! gap-2! mb-1!">
                  <span className="text-base! font-bold! text-gray-800!">{course.rating}</span>
                  <div className="flex! items-center! gap-1!">
                    {renderStars(course.rating)}
                  </div>
                </div>
                <div className="text-2xl! font-bold! text-black! flex! items-center! gap-1!">
                  <span>{course.price}</span>
                  <span className="text-lg! font-normal!">﷼</span>
                </div>
              </div>
              {/* CTA Button */}
              <button className="w-full! bg-gradient-to-r! from-cyan-400! to-teal-400! hover:from-cyan-500! hover:to-teal-500! text-white! py-3! px-6! rounded-full! font-medium! transition-colors! duration-200! mt-auto!">
                تصفح الدورات
              </button>
            </div>
          ))}
        </div>

      {/* View All Button - Matching the design */}
      <div className="flex! justify-center! mt-8!">
        <button className="bg-[#202C5B]! text-white! px-8! py-3! rounded-lg! hover:bg-blue-900! transition-colors! cursor-pointer! font-bold!">
          تصفح الدورات
        </button>
      </div>

      </div>
      {/* Custom scrollbar hiding - No longer needed for tabs, but keep for potential other uses */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CourseSection;