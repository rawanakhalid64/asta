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

              {/* Category Pills */}
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
                        ? "bg-blue-900! text-white! shadow-lg! scale-105! border-blue-900!"
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
            <div className="bg-white/70! backdrop-blur-xl! rounded-2xl! shadow-2xl! overflow-hidden! flex! flex-col! lg:flex-row!">
              
              {/* Mobile Layout - Stack vertically on small screens */}
              <div className="block! lg:hidden! w-full!">
                {/* Image Section */}
                <div className="relative! h-48! sm:h-64! w-full!">
                  <div className={`absolute! inset-0! bg-gradient-to-br! ${currentContent.bgGradient}! opacity-90!`}></div>
                  <img
                    src={currentContent.image}
                    alt={currentContent.title}
                    className="w-full! h-full! object-cover!"
                  />
                  {/* Hexagonal overlay pattern */}
                  <div className="absolute! inset-0! bg-gradient-to-br! from-transparent! via-white/10! to-transparent!">
                    <div className="absolute! top-1/2! left-1/2! transform! -translate-x-1/2! -translate-y-1/2!">
                      <div className="relative!">
                        <div className="w-12! h-12! sm:w-16! sm:h-16! bg-white/20! transform! rotate-45! rounded-lg! animate-pulse!"></div>
                        <div className="absolute! -top-2! -right-2! sm:-top-4! sm:-right-4! w-6! h-6! sm:w-8! sm:h-8! bg-white/15! transform! rotate-12! rounded-lg!"></div>
                        <div className="absolute! -bottom-2! -left-2! sm:-bottom-3! sm:-left-3! w-8! h-8! sm:w-12! sm:h-12! bg-white/10! transform! -rotate-12! rounded-lg!"></div>
                      </div>
                    </div>
                  </div>
                  {/* English Title Badge */}
                  <div className="absolute! bottom-3! right-3! sm:bottom-4! sm:right-4!">
                    <div className="bg-slate-800/90! backdrop-blur-sm! text-white! text-xs! font-bold! px-2! py-1! sm:px-3! sm:py-2! rounded-full!">
                      {currentContent.englishTitle}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4! sm:p-6! text-center! flex! flex-col! items-center! justify-center! w-full!">
                  <h1 className="text-lg! sm:text-xl! md:text-2xl! font-bold! text-slate-800! leading-relaxed! mb-3! sm:mb-4!">
                    {currentContent.title}
                  </h1>
                  <p className="text-sm! sm:text-base! text-teal-500! leading-relaxed! mb-4! sm:mb-6! max-w-prose!">
                    {currentContent.description}
                  </p>
                  
                  {/* Mobile Navigation Button */}
                  <div className="flex! items-center! justify-center! gap-4! mb-4!">
                    <button 
                      onClick={handleNext}
                      className="inline-flex! items-center! gap-2! px-4! sm:px-6! py-2! sm:py-3! bg-gradient-to-r! from-teal-500! to-blue-600! text-white! font-semibold! rounded-full! hover:from-teal-600! hover:to-blue-700! transition-all! duration-300! shadow-lg! hover:shadow-xl! transform! hover:scale-105! text-sm!"
                    >
                      المزيد
                      <ChevronLeft className="w-4! h-4!" />
                    </button>
                  </div>
                  
                  <button className="inline-flex! items-center! gap-2! px-4! sm:px-6! py-2! sm:py-3! bg-white/80! backdrop-blur-sm! text-slate-700! border! border-slate-200! font-semibold! rounded-full! hover:bg-white! hover:shadow-md! transition-all! duration-300! text-sm!">
                    استعراض المسارات
                    <ChevronLeft className="w-4! h-4!" />
                  </button>
                </div>
              </div>

              {/* Desktop Layout - Side by side on large screens */}
              <div className="hidden! lg:flex! min-h-[500px]! w-full!">
                {/* Content Section - Left side */}
                <div className="w-1/2! flex! flex-col! justify-center! p-12! text-right! pr-20!">
                  <div className="space-y-6! max-w-prose! mr-auto!">
                    <h1 className="text-3xl! xl:text-5xl! font-bold! text-slate-800! leading-relaxed!">
                      {currentContent.title}
                    </h1>
                    <p className="text-base! xl:text-lg! text-teal-500! leading-relaxed!">
                      {currentContent.description}
                    </p>
                    <button className="inline-flex! items-center! gap-3! px-8! py-4! bg-gradient-to-r! from-teal-500! to-blue-600! text-white! font-semibold! rounded-full! hover:from-teal-600! hover:to-blue-700! transition-all! duration-300! shadow-lg! hover:shadow-xl! transform! hover:scale-105!">
                      استعراض المسارات
                      <ChevronLeft className="w-5! h-5!" />
                    </button>
                  </div>
                </div>

                {/* Image Section - Right side */}
                <div className="w-1/2! relative! flex! items-center! justify-center! pl-12!">
                  <img
                    src={currentContent.image}
                    alt={currentContent.title}
                    className="w-full! h-full! object-cover! rounded-l-2xl!"
                  />
                  {/* English Title Badge */}
                  <div className="absolute! bottom-8! right-8!">
                    <div className="bg-slate-800/90! backdrop-blur-sm! text-white! text-sm! font-bold! px-4! py-2! rounded-full!">
                      {currentContent.englishTitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
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