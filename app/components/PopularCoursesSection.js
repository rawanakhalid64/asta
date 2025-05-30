import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { BarChart3 } from "lucide-react";
import { Search } from "lucide-react";
import { Cloud } from "lucide-react";
import { Eye } from "lucide-react";
import CourseCard from "../components/CourseCard.js";

const PopularCoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "تحليل البيانات",
      provider: "Microsoft Corp.",
      rating: 4.2,
      price: "250 ج.م",
      image: "/images/cr.png",
    },
    {
      id: 2,
      title: "تحليل البيانات",
      provider: "Microsoft Corp.",
      rating: 4.2,
      price: "250 ج.م",
      image: "/images/cr.png",
    },
    {
      id: 3,
      title: "تحليل البيانات",
      provider: "Microsoft Corp.",
      rating: 4.2,
      price: "250 ج.م",
      image: "/images/cr.png",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#23a0d01a] to-[#3CBEB31A] md:my-[64px] md:py-[64px] my-[24px] py-[24px]">
      <div className="container px-2! md:px-0!">
      
        <div className="flex! flex-col! items-center! text-center! gap-4! px-2! sm:px-8! md:px-16! mb-8! md:flex-row-reverse! md:justify-between! md:items-center! md:text-right! md:gap-0!">
          <button className="bg-slate-700! max-md:hidden hover:bg-slate-800! text-white! px-6! py-3! rounded-full! font-medium! transition-colors! duration-200! mt-4! md:mt-0!">
            عرض الكل
          </button>
          <h2 className="text-2xl! sm:text-3xl! md:text-4xl! lg:text-5xl! font-bold! text-gray-800!">
            الدورات الأكثر شيوعاً
          </h2>
        </div>

    
        <div className="grid! w-full! grid-cols-1! md:grid-cols-2! lg:grid-cols-3! gap-6 px-0! md:px-2!">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 md:hidden">
        <button className="bg-[#202C5B]! text-white! md:py-[12px] py-[6px] rounded-3xl! text-[10px] md:w-[240px] w-[138px] hover:bg-blue-900! transition-colors! cursor-pointer! font-bold!">
          المزيد
        </button>
      </div>
    </div>
  );
};

export default PopularCoursesSection;
