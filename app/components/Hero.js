import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='relative! py-[64px]!'>
      <div className='absolute! left-0! top-0! z-0! w-full! h-full!'>
        <img className='w-full! h-full!' src="/images/bg/Rectangle 58.png" alt="" />
      </div>
      <div className="container! relative! z-10! flex! flex-col! md:flex-row! items-center! justify-between!">
        {/* Left: Content */}
        <div className="flex! flex-col! items-center! md:items-start! text-center! md:text-right! w-full! md:w-1/2!">
          <h1 className='lg:text-[56px]! md:text-[42px]! text-[32px]! font-medium! mb-2!'>
            أكاديمية المهارات<br/>التطبيقية للتدريب
          </h1>
          <p className='md:text-[16px]! text-[12px]! font-medium! md:mt-[10px]! md:mb-[32px]! my-[24px]! max-w-xl!'>
            أكاديمية العلم التطبيقي للتدريب أكاديمية العلم التطبيقي للتدريب أكاديمية العلم التطبيقي للتدريب أكاديمية العلم التطبيقي للتدريب.
          </p>
          <div className="flex! flex-col! items-center! md:items-start! gap-6! w-full!">
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
            <div className="flex! flex-col! sm:flex-row! gap-4! w-full! justify-center! md:justify-start! items-center!">
              <button className="w-[138px] md:w-[180px] lg:2-[240px] py-3! rounded-full! text-white! text-base! font-medium! bg-gradient-to-r! from-cyan-500! to-emerald-400! focus:outline-none! shadow-md! transition! hover:opacity-90! min-w-[160px]!">
                اشترك الآن مجانا
              </button>
              <button className="px-8! py-3! rounded-full! text-white! text-base! font-medium! bg-[#1A2555]! focus:outline-none! shadow-md! transition! hover:opacity-90! min-w-[160px]!">
                تصفح الدورات
              </button>
            </div>
          </div>
        </div>
        {/* Right: Hero Image */}
        <div className='flex-[80%]! max-w-[50%]! flex! justify-center! mt-8! md:mt-0! w-full! md:w-auto!'>
          <img className='flex-[80%]! max-w-[220px]! sm:max-w-xs! md:max-w-md! lg:max-w-lg!' src="/images/bg/Rectangle 3.png" alt="" />
        </div>
      </div>
    </div>
  )
}
