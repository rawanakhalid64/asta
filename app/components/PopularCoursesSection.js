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
      image: "v1234567890/courses/data-analysis-1"
    },
    {
      id: 2,
      title: "تحليل البيانات",
      provider: "Microsoft Corp.",
      rating: 4.2,
      price: "250 ج.م",
      image: "v1234567890/courses/data-analysis-2"
    },
    {
      id: 3,
      title: "تحليل البيانات",
      provider: "Microsoft Corp.",
      rating: 4.2,
      price: "250 ج.م",
      image: "v1234567890/courses/data-analysis-3"
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
    <div className="bg-gradient-to-br! from-slate-50! to-blue-50! py-16! px-4! sm:px-6! lg:px-8! min-h-screen! flex! items-center! justify-center!">
      <div className="max-w-7xl! w-full! mx-auto! ">
        {/* Header */}
        <div className="flex! flex-col! sm:flex-row! justify-between! items-center! mb-12! text-center! sm:text-right! px-4! sm:px-0!">
          <h2 className="text-3xl! md:text-4xl! lg:text-5xl! font-bold! text-gray-800! mb-4! sm:mb-0!">
            الدورات الأكثر شيوعاً
          </h2>
          <button className="bg-slate-700! hover:bg-slate-800! text-white! px-6! py-3! rounded-full! font-medium! transition-colors! duration-200!">
            عرض الكل
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid! grid-cols-1! sm:grid-cols-2! lg:grid-cols-3! gap-8! px-4! sm:px-0!">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white! rounded-2xl! shadow-lg! hover:shadow-xl! transition-all! duration-300! transform! hover:-translate-y-2! overflow-hidden!"
            >
              {/* Course Image with Overlay Icons */}
              <div className="relative! h-48! overflow-hidden!">
                {/* Cloudinary Image */}
                <Image
                  src={`https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_800,h_400,c_fill/${course.image}`}
                  alt={course.title}
                  fill
                  className="object-cover!"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={course.id === 1}
                />
                
                {/* Overlay with Icons */}
                <div className="absolute! inset-0! bg-black/20! flex! items-center! justify-center!">
                  <div className="flex! gap-4!">
                    <Search className="w-6! h-6! text-white!" />
                    <Cloud className="w-6! h-6! text-white!" />
                    <Eye className="w-6! h-6! text-white!" />
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6! flex! flex-col! items-center! text-center!">
                {/* Provider */}
                <div className="border! border-blue-300! rounded-full! px-4! py-1! mb-4!">
                  <span className="text-sm! text-gray-800! font-bold!">
                    {course.provider}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-xl! font-bold! text-gray-800! mb-4! text-right! w-full!">
                  {course.title}
                </h3>

                <hr className="w-full! border-gray-300! mb-4!" />

                {/* Rating and Price */}
                <div className="flex! items-center! justify-between! w-full! mb-6!">
                  {/* Rating */}
                  <div className="flex! items-center! gap-1!">
                    <span className="text-lg! font-bold! text-gray-800!">
                      {course.rating}
                    </span>
                    <div className="flex! items-center! gap-1!">
                      {renderStars(course.rating)}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-lg! font-bold! text-gray-800!">
                    {course.price}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-[152px]! bg-gradient-to-r! from-cyan-500! to-blue-500! hover:from-cyan-600! hover:to-blue-600! text-white! py-3! px-6! rounded-full! font-medium! transition-colors! duration-200!">
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