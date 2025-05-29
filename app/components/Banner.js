"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  '/images/banner/Rectangle 19.png',
  '/images/banner/Rectangle 19.png',
  '/images/banner/Rectangle 19.png',
  '/images/banner/Rectangle 19.png',
  '/images/banner/Rectangle 19.png',
  '/images/banner/Rectangle 19.png',
  '/images/banner/Rectangle 19.png',
  '/images/banner/Rectangle 19.png',
  '/images/banner/Rectangle 19.png',
  '/images/banner/Rectangle 19.png',
  '/images/banner/Rectangle 19.png',
  '/images/banner/Rectangle 19.png',
  '/images/banner/Rectangle 19.png',
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
      
      <div className="container">
        <div className="relative mx-auto!">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000}
            navigation={{
              nextEl: '.partners-next',
              prevEl: '.partners-prev',
            }}
            breakpoints={{
              620:{
                slidesPerView: 5,
              },
              768:{
                slidesPerView: 6,
              },
            }}
            className='brand-linear'
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center w-full p-[24px] aspect-square border-[1px] md:rounded-[30px] rounded-[12px]">
                  <img
                    src={image}
                    alt={`Partner ${index + 1}`}
                    className="max-h-full max-w-full object-cover"
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