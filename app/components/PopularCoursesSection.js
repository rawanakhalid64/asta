import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Search } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Eye } from 'lucide-react';

const PopularCoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "تحليل البيانات",
      provider: "Microsoft Corp.",
      rating: 4.2,
      price: "250 ج.م",
      image: "/images/cr.png"
    },
    {
      id: 2,
      title: "تحليل البيانات",
      provider: "Microsoft Corp.",
      rating: 4.2,
      price: "250 ج.م",
      image: "/images/cr.png"
    },
    {
      id: 3,
      title: "تحليل البيانات",
      provider: "Microsoft Corp.",
      rating: 4.2,
      price: "250 ج.م",
      image: "/images/cr.png"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4! h-4! ${
          index < Math.floor(rating) 
            ? 'fill-yellow-400! text-yellow-400!' 
            : index < rating 
            ? 'fill-yellow-400/50! text-yellow-400!' 
            : 'fill-gray-200! text-gray-200!'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br! from-slate-50! to-blue-50! py-8! px-0! sm:px-6! lg:px-8! min-h-screen! flex! items-center! justify-center!">
      <div className="max-w-7xl! w-full! mx-auto! px-2! sm:px-0!">
        {/* Header */}
        <div className="flex! flex-col! items-center! text-center! gap-4! px-2! sm:px-8! md:px-16! mb-8! md:flex-row-reverse! md:justify-between! md:items-center! md:text-right! md:gap-0!">
          <button className="bg-slate-700! hover:bg-slate-800! text-white! px-6! py-3! rounded-full! font-medium! transition-colors! duration-200! mt-4! md:mt-0!">
            عرض الكل
          </button>
          <h2 className="text-2xl! sm:text-3xl! md:text-4xl! lg:text-5xl! font-bold! text-gray-800!">
            الدورات الأكثر شيوعاً
          </h2>
        </div>

        {/* Courses Grid */}
        <div className="grid! w-full! grid-cols-1! sm:grid-cols-2! lg:grid-cols-3! gap-1! px-0! sm:px-2!">
          {courses.map((course, idx) => (
            <div
              key={course.id}
              className="bg-white! rounded-2xl! border! border-cyan-300! hover:shadow-xl! transition-all! duration-300! relative! overflow-visible! w-full! sm:max-w-xs! md:max-w-md! lg:w-[400px]! mx-0! sm:mx-auto!"
            >
              {/* Course Image */}
              <div className="flex! items-center! justify-center! pt-4! px-4!">
                <div className="rounded-xl! overflow-hidden! border! border-cyan-200! w-full!">
                  <img
                    src="/images/cr.png"
                    alt={course.title}
                    className="object-cover! w-full! h-40!"
                  />
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6! flex! flex-col! items-center! text-center! relative!">
                {/* Provider */}
                <div className="border! border-cyan-300! rounded-full! px-4! py-2! mb-4! flex! items-center! gap-2! bg-white! w-full! justify-center!">
                  <span className="text-md! text-gray-800! font-medium!">{course.provider}</span>
                  <img src="/images/icons/micro.svg" alt="Microsoft Logo" className="w-5! h-5!" />
                </div>
                {/* Course Title */}
                <h3 className="text-2xl! font-bold! text-black! mb-2! w-full! text-right!">{course.title}</h3>
                <hr className="w-full! border-cyan-200! mb-4!" />
                {/* Reviews and Price Centered */}
                <div className="flex! flex-col! items-center! justify-center! mb-4!">
                  <div className="flex! items-center! gap-2! mb-2!">
                    <span className="text-base! font-bold! text-gray-800!">{course.rating}</span>
                    <div className="flex! items-center! gap-1!">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-5! h-5! text-yellow-400!" fill="currentColor" viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.9 4.9,17.9 9.9,14.9 14.9,17.9 13.8,11.9 18.2,7.6 12.2,6.6 "/></svg>
                      ))}
                      <svg className="w-5! h-5! text-gray-300!" fill="currentColor" viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.9 4.9,17.9 9.9,14.9 14.9,17.9 13.8,11.9 18.2,7.6 12.2,6.6 "/></svg>
                    </div>
                  </div>
                  <div className="text-xl! font-bold! text-black!">{course.price} ريال</div>
                </div>
                {/* CTA Button */}
                <button className="w-full! bg-gradient-to-r! from-cyan-500! to-emerald-400! hover:from-cyan-600! hover:to-emerald-500! text-white! py-3! px-6! rounded-full! font-medium! transition-colors! duration-200! mb-2!">
                  تصفح الدورات
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCoursesSection;