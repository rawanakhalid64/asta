'use client';
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    'الدرجات الاكاديمية',
    'الدورات المتقدمة حديثاً',
    'الدورات الاعلى تقييماً',
    'أفضل الدورات المجانية'
  ];

  // Different course data for each category
  const coursesByCategory = {
    0: [ // الدرجات الاكاديمية
      {
        id: 1,
        title: 'بكالوريوس إدارة الأعمال',
        level: 'متقدم',
        provider: 'جامعة الملك سعود 🏛️',
        rating: 4.8,
        price: '1500 ر.س',
        category: 0
      },
      {
        id: 2,
        title: 'ماجستير الهندسة',
        level: 'متقدم',
        provider: 'جامعة القاهرة 🏛️',
        rating: 4.7,
        price: '2000 ر.س',
        category: 0
      },
      {
        id: 3,
        title: 'دبلوم التسويق',
        level: 'متوسط',
        provider: 'الجامعة الأمريكية 🏛️',
        rating: 4.5,
        price: '800 ر.س',
        category: 0
      }
    ],
    1: [ // الدورات المتقدمة حديثاً
      {
        id: 4,
        title: 'الذكاء الاصطناعي',
        level: 'متقدم',
        provider: 'Google 🏢',
        rating: 4.9,
        price: '400 ر.س',
        category: 1
      },
      {
        id: 5,
        title: 'البلوك تشين',
        level: 'متقدم',
        provider: 'IBM 🏢',
        rating: 4.6,
        price: '350 ر.س',
        category: 1
      },
      {
        id: 6,
        title: 'الأمن السيبراني',
        level: 'متوسط',
        provider: 'Cisco 🏢',
        rating: 4.4,
        price: '300 ر.س',
        category: 1
      }
    ],
    2: [ // الدورات الاعلى تقييماً
      {
        id: 7,
        title: 'تحليل البيانات',
        level: 'متوسط',
        provider: 'Microsoft Corp 🏢',
        rating: 4.9,
        price: '250 ر.س',
        category: 2
      },
      {
        id: 8,
        title: 'البرمجة بـ Python',
        level: 'مبتدئ',
        provider: 'Meta 🏢',
        rating: 4.8,
        price: '200 ر.س',
        category: 2
      },
      {
        id: 9,
        title: 'تطوير المواقع',
        level: 'متوسط',
        provider: 'Amazon 🏢',
        rating: 4.7,
        price: '300 ر.س',
        category: 2
      }
    ],
    3: [ // أفضل الدورات المجانية
      {
        id: 10,
        title: 'مقدمة في البرمجة',
        level: 'مبتدئ',
        provider: 'freeCodeCamp 🆓',
        rating: 4.3,
        price: 'مجاني',
        category: 3
      },
      {
        id: 11,
        title: 'أساسيات التسويق',
        level: 'مبتدئ',
        provider: 'Coursera 🆓',
        rating: 4.1,
        price: 'مجاني',
        category: 3
      },
      {
        id: 12,
        title: 'التصميم الجرافيكي',
        level: 'مبتدئ',
        provider: 'Khan Academy 🆓',
        rating: 4.0,
        price: 'مجاني',
        category: 3
      }
    ]
  };

  const getCurrentCourses = () => {
    return coursesByCategory[activeTab] || [];
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
    setCurrentSlide(0); // Reset slide when changing tabs
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={`w-4! h-4! ${
          i < Math.floor(rating) 
            ? 'fill-yellow-400! text-yellow-400!' 
            : 'text-gray-300!'
        }`}
      />
    ));
  };

  return (
    <div className="w-full! max-w-7xl! mx-auto! p-6!" dir="rtl">
      {/* Navigation Header - Matching the design */}
      <div className="bg-gradient-to-r! from-teal-400! to-cyan-400! rounded-lg! mb-8! p-1!">
        <div className="flex!">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`flex-1! px-4! py-3! text-sm! font-medium! transition-all! duration-300! cursor-pointer! ${
                index === 0 ? 'rounded-r-lg!' : 
                index === tabs.length - 1 ? 'rounded-l-lg!' : ''
              } ${
                activeTab === index
                  ? 'bg-white! text-gray-800! shadow-sm!'
                  : 'text-white! hover:text-gray-900! hover:bg-white! hover:bg-opacity-10!'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Course Cards Container */}
      <div className="grid! grid-cols-1! md:grid-cols-2! lg:grid-cols-3! gap-6!">
        {getCurrentCourses().map((course) => (
          <div key={course.id} className="bg-white! rounded-lg! shadow-md! overflow-hidden! hover:shadow-lg! transition-shadow! duration-300!">
            {/* Course Image */}
            <div className="relative! h-48! bg-gradient-to-br! from-blue-500! to-blue-700!">
              <div className="absolute! inset-0! flex! items-center! justify-center!">
                <div className="text-white! text-center!">
                  <div className="flex! items-center! justify-center! space-x-4! mb-4!">
                    <div className="w-8! h-8! bg-white! bg-opacity-20! rounded-full! flex! items-center! justify-center!">
                      <span className="text-sm!">@</span>
                    </div>
                    <div className="w-8! h-8! bg-white! bg-opacity-20! rounded-full! flex! items-center! justify-center!">
                      <span className="text-sm!">○</span>
                    </div>
                  </div>
                  <div className="text-xl! font-bold! mb-2!">DATA</div>
                  <div className="text-sm!">ANALYSIS</div>
                  <div className="flex! items-center! justify-center! mt-4! space-x-2!">
                    <div className="w-6! h-6! bg-white! bg-opacity-20! rounded!">
                      <svg className="w-full! h-full! p-1!" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </div>
                    <div className="w-6! h-6! bg-white! bg-opacity-20! rounded!">
                      <svg className="w-full! h-full! p-1!" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div className="p-4!">
              <div className="text-xs! text-gray-500! mb-1!">{course.provider}</div>
              <h3 className="font-bold! text-lg! mb-1!">{course.title}</h3>
              <div className="text-sm! text-teal-500! mb-3!">{course.level}</div>
              
              {/* Rating */}
              <div className="flex! items-center! gap-2! mb-4!">
                <span className="text-sm! font-medium!">{course.rating}</span>
                <div className="flex! gap-1!">
                  {renderStars(course.rating)}
                </div>
              </div>

              {/* Price and Button */}
              <div className="flex! items-center! justify-between!">
                <span className="text-lg! font-bold!">{course.price}</span>
                <button className="bg-teal-500! text-white! px-4! py-2! rounded-lg! text-sm! hover:bg-teal-600! transition-colors! cursor-pointer!">
                  تسجيل الدورة
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex! justify-center! mt-8!">
        <button className="bg-blue-900! text-white! px-8! py-3! rounded-lg! hover:bg-blue-800! transition-colors! cursor-pointer!">
          تصفح الدورات
        </button>
      </div>
    </div>
  );
};

export default CourseSection;