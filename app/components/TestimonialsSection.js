"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules"; // A11y for accessibility
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// You might need pagination styles if you decide to use pagination
// import 'swiper/css/pagination';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mohamed Ibrahem",
      username: "@Mohamed98",
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus justo enim malesuada nibh at aliquam curabitur semper. Quam ut dignissim lorem laoreet.",
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      username: "@Ahmed7",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus justo enim malesuada nibh at aliquam curabitur semper. Quam ut dignissim lorem laoreet.",
    },
    {
      id: 3,
      name: "Fatma Ali",
      username: "@Fatma_A",
      rating: 4.0,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus justo enim malesuada nibh at aliquam curabitur semper. Quam ut dignissim lorem laoreet.",
    },
    {
      id: 4,
      name: "Omar Saleh",
      username: "@Omar_S",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content:
        "Outstanding quality and comprehensive material. Definitely worth investing in.",
    },
    {
      id: 5,
      name: "Mohamed Ibrahem",
      username: "@Mohamed98",
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus justo enim malesuada nibh at aliquam curabitur semper. Quam ut dignissim lorem laoreet.",
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      username: "@Ahmed7",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus justo enim malesuada nibh at aliquam curabitur semper. Quam ut dignissim lorem laoreet.",
    },
    {
      id: 7,
      name: "Fatma Ali",
      username: "@Fatma_A",
      rating: 4.0,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus justo enim malesuada nibh at aliquam curabitur semper. Quam ut dignissim lorem laoreet.",
    },
    {
      id: 8,
      name: "Omar Saleh",
      username: "@Omar_S",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      content:
        "Outstanding quality and comprehensive material. Definitely worth investing in.",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasPartialStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-5! h-5! text-yellow-400! fill-yellow-400!"
        />
      );
    }

    // Add partial star if needed (Swiper doesn't do partial stars itself, this logic remains)
    // For simplicity, if there's a partial, we'll render it as a full star as in the original.
    // Or you could implement a more complex partial star SVG mask.
    if (hasPartialStar) {
      stars.push(
        <Star
          key="partial"
          className="w-5! h-5! text-yellow-400! fill-yellow-400!"
        />
      );
    }

    // Add empty stars to make 5 total
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="w-5! h-5! text-gray-300! fill-gray-300!"
        />
      );
    }

    return stars;
  };

  return (
    <div
      className="md:py-[64px] py-[24px] relative! overflow-hidden!"
      style={{
        background: "linear-gradient(90deg, #23A0D0 0%, #3CBEB3 100%)",
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute! inset-0! opacity-30!"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20 20v-40l20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative! container z-10! py-16!">
        {/* Title */}
        <div className="text-center! mb-[12px] md:mb-[16px]">
          <h2
            className="md:text-[56px] text-[32px] font-bold! text-white!"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            آراء عملائنا
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="relative! px-4!">
          {/* Custom Navigation Arrows for Swiper */}
          <button className="swiper-button-prev-custom absolute! max-sm:hidden cursor-pointer -left-[16px] top-1/2! transform! -translate-y-1/2! z-20! rounded-full! transition-all! duration-300!">
            <ChevronLeft className="w-[32px] h-[32px] text-white!" />
          </button>

          <button className="swiper-button-next-custom absolute! max-sm:hidden cursor-pointer -right-[16px] top-1/2! transform! -translate-y-1/2! z-20! rounded-full! transition-all! duration-300!">
            <ChevronRight className="w-[32px] h-[32px] text-white!" />
          </button>

          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={24} // Corresponds to gap-12 (3rem = 48px)
            slidesPerView={1} // Show 1 slide on smaller screens
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            breakpoints={{
              // When window width is >= 768px (md)
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: true, // Often looks better with 2 slides
              },
            }}
            className="!pb-8" // Add some padding bottom if slides get cut off or for pagination
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="flex! justify-center! items-center!"
              >
                {(
                  { isActive } // isActive prop tells if the slide is the active (centered) one
                ) => (
                  <div
                    className={`relative! cursor-pointer! transition-all! duration-500! ${
                      isActive && "!z-10"
                    }`}
                  >
                    {" "}
                    {/* Apply z-index when active for stacking */}
                    <div
                      className={`bg-white! rounded-3xl! px-[8px] py-[16px] md:aspect-[328/384] shadow-lg! border! border-gray-200! relative! flex! flex-col! hover:shadow-xl! transition-all! duration-300! ${
                        // Adjusted width for responsiveness
                        isActive
                          ? "transform! scale-100!"
                          : "transform! scale-90" // Scale active, slightly shrink/fade others on larger screens
                      }`}
                    >
                      {/* Profile Image */}
                      <div className="flex! justify-center! sm:mb-[16px] mb-[12px]">
                        <div className="w-[157px] aspect-square rounded-full! overflow-hidden!">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full! h-full! object-cover!"
                          />
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="justify-center flex sm:mb-[16px] mb-[12px] md:gap-[6px] gap-[5px] items-center">
                        <div className="flex! justify-center! md:gap-[10px] gap-[8px] h-fit">
                          {renderStars(testimonial.rating)}
                        </div>
                        <div className="text-[20px] font-medium text-gray-800!">
                          {testimonial.rating}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center mb-[32px] flex-grow">
                        <p className="text-black text-[12px] md:text-[16px]">
                          {testimonial.content}
                        </p>
                      </div>

                      {/* Name and Username */}
                      <div className="text-center! mt-auto!">
                        <h3 className="font-bold! md:text-[24px] text-[20px] text-teal-500! mb-[6px]">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#8787] text-[16px]">
                          {testimonial.username}
                        </p>
                      </div>

                      {/* Speech Bubble Tail */}
                      <div className="absolute! -bottom-4! left-1/2! transform! -translate-x-1/2!">
                        <div
                          className="w-0! h-0!"
                          style={{
                            borderLeft: "20px solid transparent!",
                            borderRight: "20px solid transparent!",
                            borderTop: "20px solid white!",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
