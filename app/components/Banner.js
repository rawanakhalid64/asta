"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  '/images/banner/Group 104.png',
  '/images/banner/Group 105.png',
  '/images/banner/Group 106.png',
  '/images/banner/Group 107.png',
  '/images/banner/Group 108.png',
  '/images/banner/Group 109.png',
];

export default function PartnersBanner() {
  return (
    <div className="bg-white py-8">
      <div className="w-full h-full xs:mb-1! sm:mb-4! lg:mb-8! text-center">
        <h2
          className="py-2!  lg:text-2xl md:text-3xl font-bold text-white mx-auto"
          style={{
            background: 'linear-gradient(to right, #202C5B 0%, #226796 20%, #23A0D0 50%, #30AFC1 80%, #3CBEB3 100%)',
            display: 'block',
          }}
        >
          شركاؤنا
        </h2>
      </div>
      
      <div className="container mx-auto!">
        <div className="relative w-[70%] mx-auto!">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={8} 
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            navigation={{
              nextEl: '.partners-next',
              prevEl: '.partners-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            centeredSlides={true}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-24">
                  <img
                    src={image}
                    alt={`Partner ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="partners-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-0 h-0 border-t-[15px] border-b-[15px] border-r-[20px] border-t-transparent border-b-transparent border-r-blue-900"></button>
          <button className="partners-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-0 h-0 border-t-[15px] border-b-[15px] border-l-[20px] border-t-transparent border-b-transparent border-l-blue-900"></button>
        </div>
      </div>
    </div>
  );
}