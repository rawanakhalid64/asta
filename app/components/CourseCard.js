import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function courseCard({ course }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4! h-4! ${
          i < Math.floor(rating)
            ? "fill-yellow-400! text-yellow-400!"
            : i < rating
            ? "fill-yellow-400/50! text-yellow-400!"
            : "fill-gray-200! text-gray-200!"
        }`}
      />
    ));
  };
  return (
    <div
      key={course.id}
      className="bg-white rounded-2xl border border-cyan-300 hover:shadow-xl transition-all duration-300 relative overflow-visible max-w-full w-[100%] mx-0 sm:mx-auto p-4 flex flex-col"
    >
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
      <div
        className="border! border-cyan-300! rounded-full! px-4! py-1! mb-4! flex! items-center! gap-2! bg-white! w-full! justify-center!"
        style={{ minHeight: "40px" }}
      >
        <Image
          src="/images/icons/micro.svg"
          alt="Microsoft Logo"
          width={20}
          height={20}
          className="w-5! h-5!"
        />
        <span className="text-sm! text-gray-800! font-bold!">
          {course.provider}
        </span>
      </div>
      {/* Course Title & Subtitle */}
      <div className="w-full! text-right! mb-2!">
        <h3 className="text-2xl! font-bold! text-black! mb-1!">
          {course.title}
        </h3>
        <span className="text-cyan-500! text-base! font-bold!">
          {course.subtitle}
        </span>
      </div>
      <hr className="w-full! border-cyan-200! my-4!" />
      {/* Reviews and Price Centered */}
      <div className="flex! flex-col! items-center! justify-center! mb-6! gap-1!">
        <div className="flex! items-center! gap-2! mb-1!">
          <span className="text-base! font-bold! text-gray-800!">
            {course.rating}
          </span>
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
  );
}
