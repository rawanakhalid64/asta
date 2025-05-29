"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import CourseCard from "../components/CourseCard.js";

const categories = [
  "الدرجات الاكاديمية",
  "الدورات المضافة حديثاً",
  "الدورات الاعلى تقييماً",
  "أفضل الدورات المجانية",
];

const CourseSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Dummy data structure updated to match screenshot needs and provide more items
  const coursesByCategory = {
    "الدرجات الاكاديمية": Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      title: "تحليل البيانات",
      subtitle: "ماجستير",
      provider: "Microsoft Corp.",
      rating: 4.2,
      price: "250",
      image: "/images/cr.png",
    })),
    "الدورات المتقدمة حديثاً": Array.from({ length: 6 }, (_, i) => ({
      id: i + 7,
      title: "الذكاء الاصطناعي",
      subtitle: "متقدم",
      provider: "Google",
      rating: 4.9,
      price: "400",
      image: "/images/cr.png",
    })),
    "الدورات الاعلى تقييماً": Array.from({ length: 6 }, (_, i) => ({
      id: i + 13,
      title: "البرمجة بـ Python",
      subtitle: "مبتدئ",
      provider: "Meta",
      rating: 4.8,
      price: "200",
      image: "/images/cr.png",
    })),
    "أفضل الدورات المجانية": Array.from({ length: 6 }, (_, i) => ({
      id: i + 19,
      title: "مقدمة في البرمجة",
      subtitle: "مجاني",
      provider: "freeCodeCamp",
      rating: 4.3,
      price: "0",
      image: "/images/cr.png",
    })),
  };

  const getCurrentCourses = () => {
    // Return courses for the active category, or empty array if not found
    return coursesByCategory[activeCategory] || [];
  };

  const handleTabChange = (categoryName) => {
    setActiveCategory(categoryName);
  };

  return (
    <div className="bg-white flex! flex-col! items-center! justify-center! md:pb-[32px] md:my-[32px] pb-[12px] my-[12px]">
      <div className="w-full! mx-auto!">
        {/* Tabs Header Container with Gradient */}

        <div className="w-full! bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] pt-[32px] mb-0!">
          {/* Tabs Bar */}
          {/* Tabs should be right-aligned, evenly spaced, non-scrolling, and stick to bottom */}
          {/* Added items-end to make tabs stick to bottom */}
          {/* Changed justify-end to justify-center */}
          <div className="container relative! overflow-auto scrollbar-hidden">
            <div className="flex! justify-center! gap-4! items-end! w-max mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleTabChange(cat)}
                  // Updated border classes and colors, added translate effect, removed bottom border
                  className={`whitespace-nowrap px-6 py-2 rounded-t-lg rounded-b-none border-t border-l border-r font-bold! text-base! transition-all! duration-200! relative! ${
                    activeCategory === cat
                      ? "bg-white! border-gray-400! text-[#202C5B]! shadow-sm! z-10 transform! pb-[16px] md:pb-[20px] border-b-0!"
                      : "bg-transparent! border-gray-300! text-white! hover:bg-white! hover:bg-opacity-10! hover:translate-y-[-4px]! md:hover:translate-y-[-6px]! border-b-0!"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {/* Removed المزيد button and scrolling styles */}
        </div>

        {/* Course Cards Container */}
        {/* Removed negative margin-top to fix overlay issue */}
        <div className="container">
          <div className="grid! md:mt-[32px] mt-[12px] w-full! grid-cols-1! sm:grid-cols-2! lg:grid-cols-3! gap-6! mb-8! relative! z-0!">
            {getCurrentCourses().map((course) => (
              <CourseCard key={course.id} course={course}></CourseCard>
            ))}
          </div>

          {/* View All Button - Matching the design */}
          <div className="flex! justify-center! mt-8!">
            <button className="bg-[#202C5B]! text-white! py-[12px] rounded-3xl! md:w-[240px] w-[138px] hover:bg-blue-900! transition-colors! cursor-pointer! font-bold!">
              تصفح الدورات
            </button>
          </div>
          
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
