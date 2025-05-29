"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Categories list
const categories = [
  "الذكاء الاصطناعي",
  "تحليل البيانات", 
  "إدارة المعلومات",
  "الأمن السيبراني",
  "تطوير الويب"
];

// Category details
const categoryContent = {
  "الذكاء الاصطناعي": {
    title: "مسار الذكاء الاصطناعي",
    description: "تعلم أساسيات الذكاء الاصطناعي وتطبيقاته المتقدمة",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    englishTitle: "ARTIFICIAL INTELLIGENCE",
    bgGradient: "from-blue-600 to-purple-600"
  },
  "تحليل البيانات": {
    title: "مسار تحليل البيانات وتعلم الآلة",
    description: "اكتسب المهارات اللازمة لتحويل البيانات إلى رؤية قوية وقرارات ذكية",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    englishTitle: "DATA ANALYSIS",
    bgGradient: "from-teal-500 to-blue-600"
  },
  "إدارة المعلومات": {
    title: "مسار إدارة المعلومات",
    description: "تعلم كيفية إدارة البيانات والمعلومات بكفاءة",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    englishTitle: "DATA MANAGEMENT",
    bgGradient: "from-green-500 to-teal-600"
  },
  "الأمن السيبراني": {
    title: "مسار الأمن السيبراني", 
    description: "احصل على المهارات الأساسية لحماية الأنظمة والبيانات من الهجمات الإلكترونية",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    englishTitle: "CYBERSECURITY",
    bgGradient: "from-red-500 to-pink-600"
  },
  "تطوير الويب": {
    title: "مسار تطوير الويب",
    description: "ابدأ في بناء مواقع ويب ديناميكية باستخدام أحدث التقنيات",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
    englishTitle: "WEB DEVELOPMENT", 
    bgGradient: "from-orange-500 to-red-600"
  }
};

export default function ResponsiveDataPathSlider() {
  const [activeCategory, setActiveCategory] = useState(categories[1]); // Start with Data Analysis
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : categories.length - 1;
    setCurrentIndex(newIndex);
    setActiveCategory(categories[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setActiveCategory(categories[newIndex]);
  };

  const currentContent = categoryContent[activeCategory];

  return (
    <section className="min-h-screen! bg-gradient-to-br! from-slate-50! to-blue-50! relative! overflow-hidden! flex! items-center! justify-center! ">
      {/* Background Pattern */}
      <div className="absolute! inset-0! opacity-5!">
        <div className="absolute! top-20! left-20! w-3!2 h-32! bg-blue-500! rounded-full! blur-3xl!"></div>
        <div className="absolute! bottom-20! right-20! w-40 h-40! bg-teal-500! rounded-full! blur-3xl!"></div>
        <div className="absolute! top-1/2! left-1/3! w-24! h-24! bg-purple-500! rounded-full! blur-2xl!"></div>
      </div>

      <div className="min-h-screen! flex! flex-col! items-center! justify-center! py-4! sm:py-6!">
        
        {/* Navigation Categories - Hidden on mobile */}
        <div className="flex-shrink-0! px-4! sm:mt-8! mt-6! mb-6! sm:mb-8! hidden md:block!">
          <div className="max-w-7xl! mx-auto!">
            <div className="flex! items-center! justify-center! relative!">
              {/* Left Arrow - Hidden on mobile */}
              <button
                onClick={handlePrevious}
                className="partners-prev! absolute! left-0! top-1/2! -translate-y-1/2! z-10! w-0! h-0! border-t-[15px]! border-b-[15px]! border-r-[20px]! border-t-transparent! border-b-transparent! border-r-blue-900! hover:border-r-blue-700! transition-colors! duration-300!"
              ></button>

              {/* Category Pills with المزيد button */}
              <div className="flex! gap-4! sm:gap-6! overflow-x-auto! max-w-full! px-12! sm:px-16! md:px-20! scrollbar-hide! items-center!">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveCategory(category);
                      setCurrentIndex(index);
                    }}
                    className={`flex-shrink-0! px-6! sm:px-8! py-2! sm:py-3! rounded-full! text-sm! sm:text-base! font-medium! transition-all! duration-300! whitespace-nowrap! border! border-slate-300! ${
                      activeCategory === category
                        ? "bg-[#202C5B]! text-white! shadow-lg! scale-105! border-blue-900!"
                        : "bg-white/80! backdrop-blur-sm! text-slate-700! hover:border-blue-400! hover:text-blue-900! hover:bg-white! hover:shadow-sm!"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Right Arrow - Hidden on mobile */}
              <button
                onClick={handleNext}
                className="partners-next! absolute! right-0! top-1/2! -translate-y-1/2! z-10! w-0! h-0! border-t-[15px]! border-b-[15px]! border-l-[20px]! border-t-transparent! border-b-transparent! border-l-blue-900! hover:border-l-blue-700! transition-colors! duration-300!"
              ></button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1! px-4! sm:px-6! lg:px-8! flex! items-center! justify-center! w-full!">
          <div className="max-w-7xl! w-full! mx-auto! h-full! rounded-2xl! overflow-hidden!">
            <div className="bg-white/70! backdrop-blur-xl! rounded-2xl! shadow-2xl! overflow-hidden! flex! flex-col! lg:flex-row! items-center! lg:items-stretch!" dir="ltr">
              {/* Image Section - Always Left */}
              <div className="order-1! lg:order-1! flex! flex-col! items-center! justify-center! w-full! lg:w-1/2! p-4! lg:p-8!">
                {/* المزيد Button for mobile/tablet above image */}
                <div className="block! lg:hidden! w-full! flex! justify-end! mb-2!">
                  <button
                    className="bg-[#202C5B]! text-white! rounded-full! px-6! py-2! font-medium! shadow-md! transition! hover:bg-[#1a1a40]!"
                    onClick={handleNext}
                  >
                    المزيد
                  </button>
                </div>
                <div className="rounded-2xl!  border-[1px]! border-transparent! bg-gradient-to-br! from-cyan-400! to-emerald-400! p-0.5!">
                  <div className="bg-white! rounded-2xl! overflow-hidden!">
                    <img
                      src={currentContent.image}
                      alt={currentContent.title}
                      className="w-full! h-[260px]! sm:h-[320px]! md:h-[340px]! lg:h-[400px]! object-cover!"
                    />
                  </div>
                </div>
                {/* Pagination Dots Below Image */}
                <div className="flex-shrink-0! pt-4! sm:pt-6! pb-2! w-full!">
                  <div className="flex! justify-center! gap-2!">
                    {categories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          setActiveCategory(categories[index]);
                        }}
                        className={`h-2! rounded-full! transition-all! duration-300! ${
                          index === currentIndex
                            ? "bg-teal-500! w-6! sm:w-8!"
                            : "bg-slate-300! hover:bg-slate-400! w-2!"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Content Section - Right */}
              <div className="order-2! flex! flex-col! justify-center! items-center! lg:items-end! text-center! lg:text-right! w-full! lg:w-1/2! p-4! lg:p-12!">
                <h1 className="text-2xl! md:text-3xl! xl:text-5xl! font-bold! text-[#202C5B]! leading-relaxed! mb-4!">
                  {currentContent.title}
                </h1>
                <p className="text-base! md:text-lg! text-teal-500! leading-relaxed! mb-8! max-w-xl!">
                  {currentContent.description}
                </p>
                <button className="px-10! py-4! rounded-full! text-white! text-lg! font-semibold! bg-gradient-to-r! from-cyan-500! to-emerald-400! focus:outline-none! shadow-md! transition! hover:opacity-90! min-w-[220px]!">
                  استعراض المسارات
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}