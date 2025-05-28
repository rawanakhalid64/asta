import React from 'react'

export default function Hero() {
  return (
    <div className='relative py-[64px]'>
        <div className='absolute left-0 top-0 z-0 w-full h-full'>
            <img className='w-full h-full' src="/images/bg/Rectangle 58.png" alt="" />
        </div>
        <div className="container relative">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='lg:text-[56px] md:text-[42px] text-[32px] font-medium'>
                        أكاديمية المهارات<br/>التطبيقية للتدريب
                    </h1>
                    <p className='md:text-[16px] text-[12px] font-medium md:mt-[10px] md:mb-[32px] my-[24px]'>
                        أكاديمية العلم التطبيقي للتدريب أكاديمية العلم التطبيقي للتدريب أكاديمية العلم التطبيقي للتدريب أكاديمية العلم التطبيقي للتدريب.
                    </p>
                </div>
                <div className='flex-[80%] max-w-[50%] flex max-md:hidden'>
                    <img className='flex-[80%]' src="/images/bg/Rectangle 3.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
