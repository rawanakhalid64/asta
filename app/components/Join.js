import React from 'react';
import Image from 'next/image';
const AsiaHeroSection = () => {
  return (
    <section className="!relative !w-full m-y[64px]! !min-h-screen !overflow-hidden">

      <div 
        className="!absolute !inset-0 !w-full !h-full !bg-cover !bg-center !bg-no-repeat"
        style={{
          backgroundImage: `url('./images/bg/join.png')`
        }}
      >
       
      </div>

    

      <div className="relative  z-10! w-[545px]! h-[354px]! !min-h-screen !flex items-center! justify-end!">
        <div className="container! !mx-auto !px-6 sm:!px-8 lg:!px-12">
          <div className="!max-w-2xl">
            
            {/* Arabic Heading */}
            <div className="!text-right !space-y-4 sm:!space-y-6 lg:!space-y-8" dir="rtl">
              <h1 className="!text-4xl sm:!text-5xl lg:!text-6xl xl:!text-7xl !font-bold !text-gray-800 !leading-tight">
                انضم إلى
              </h1>
              
              {/* ASIA Logo */}
              <div className="!flex !justify-end !items-center !space-x-reverse !space-x-2">
                <div className="!relative">
                  <div className="flex-shrink-0! mb-2!">
                                <Image
                                  src="/images/logo.svg"
                                  alt="ASTA Logo"
                                  width={410}
                                  height={113}
                                  priority
                                  className="h-auto! w-[120px]! sm:w-[160px]! md:w-[180px]! lg:w-[410px]! mx-auto! md:mx-0!"
                                />
                              </div>
                  
                  
                </div>
              </div>
              
            
              <p className="!text-3xl sm:!text-4xl lg:!text-5xl !text-gray-800 !font-bold !leading-tight">
                الآن...!
              </p>
            </div>

        
            <div className="!flex !justify-end !mt-8 sm:!mt-10 lg:!mt-12" dir="rtl">
              <button className="!bg-gradient-to-r !from-teal-500 !to-cyan-500 hover:!from-teal-600 hover:!to-cyan-600 !text-white !px-8 sm:!px-10 lg:!px-12 !py-4 sm:!py-5 !rounded-full !text-lg sm:!text-xl !font-bold !transition-all !duration-300 !transform hover:!scale-105 !shadow-xl hover:!shadow-2xl !border-2 !border-white/30">
                تصفح الدورات
              </button>
            </div>
          </div>
        </div>
      </div>

     
     
    </section>
  );
};

export default AsiaHeroSection;