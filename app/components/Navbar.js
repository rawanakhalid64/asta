
                'use client'
import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [trainersDropdown, setTrainersDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const trainersRef = useRef(null);
  const aboutRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (trainersRef.current && !trainersRef.current.contains(event.target)) {
        setTrainersDropdown(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full">
      {/* Top bar with contact info - Desktop only */}
      <div className="hidden md:block bg-gradient-to-r from-blue-900 via-blue-700 via-cyan-400 via-teal-400 to-emerald-400 text-white">
        <div className="h-[40px] max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-full">
            <div className="flex gap-4 items-center text-lg mr-44!">
              <div className="flex gap-1 items-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href="https://wa.me/+996558919492" target="_blank" className="hover:opacity-80 transition-opacity">
                  +996-55 8919492
                </a>
              </div>
              <div className="flex gap-1 items-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:info@ASTA.EDU.SA" target="_blank" className="hover:opacity-80 transition-opacity">
                  INFO@ASTA.EDU.SA
                </a>
              </div>
            </div>
            <div className="font-medium text-lg">
              أكاديمية المهارات التطبيقية للتدريب
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white mt-8!">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between py-3 p-4!">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent">
                ASTA
              </div>
            </div>

            {/* Center section with language and search */}
            <div className="flex items-center  gap-4">
              {/* Language selector */}
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-base font-medium text-blue-900">English</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-900">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>

              {/* Search bar */}
              <div className="relative ">
                <input
                  type="text"
                  placeholder="عن ماذا تبحث؟"
                  className="w-72  lg:text-3xl px-5! py-2! placeholder:text-gray-400 text-blue-900 border-2 border-blue-900 rounded-full py-2 px-4 pr-10 focus:outline-none focus:border-cyan-500 transition-colors"
                  dir="rtl"
                />
                <svg 
                  className="absolute  lg:text-3xl left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Certificate check button */}
              <a
                href="#"
                className="px-5! py-2!  lg:text-3xl font-medium rounded-full text-white bg-gradient-to-r from-cyan-500 to-emerald-400 hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                فحص شهادة
              </a>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-3">
              {/* Login */}
              <a
                href="#"
                className="px-5! py-2!  lg:text-3xl font-medium text-blue-900 border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors"
              >
                تسجيل الدخول
              </a>

              {/* Sign up */}
              <a
                href="#"
                className="px-5! py-2!  lg:text-3xl font-medium rounded-full text-white bg-blue-900 hover:opacity-90 transition-opacity"
              >
                إنشاء حساب
              </a>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden py-4">
            <div className="flex items-center justify-between">
              {/* Mobile menu button */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-cyan-500 cursor-pointer"
                  onClick={() => setOpen(true)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                
                {/* Mobile search icon */}
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Mobile Logo */}
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent">
                ASTA
              </div>
            </div>
          </div>

          {/* Navigation links - Desktop only */}
          <div className="hidden md:flex justify-center items-center py-3  border-gray-200">
            <div className="flex items-center gap-7 p-3 mb-4!">
              <a 
                href="#" 
                className=" lg:text-3xl px-6 py-1 pl-[12px]! text-cyan-500 font-medium border-l-2 border-blue-900 hover:text-cyan-600 transition-colors"
              >
                الدورات
              </a>
              <a 
                href="#" 
                className=" lg:text-3xl px-6 py-1 pl-[12px]! text-blue-900 font-medium border-l-2 border-blue-900 hover:text-cyan-500 transition-colors"
              >
                المسارات
              </a>
              
              {/* Trainers dropdown */}
              <div className="relative" ref={trainersRef}>
                <button
                  onClick={() => {
                    setTrainersDropdown(!trainersDropdown);
                    setAboutDropdown(false);
                  }}
                  className="flex items-center cursor-pointer gap-1 lg:text-3xl pl-[12px]! py-1 text-blue-900 font-medium border-l-2   border-blue-900 hover:text-cyan-500 transition-colors"
                >
                  المدربين
                  <svg className={`w-3 pl-4 h-3 transition-transform ${trainersDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {trainersDropdown && (
                  <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-lg shadow-lg border z-50">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-xl   text-blue-900 hover:bg-gray-50 hover:text-cyan-500 transition-colors">
                        جميع المدربين
                      </a>
                      <a href="#" className="block px-4 py-2 text-xl text-blue-900 hover:bg-gray-50 hover:text-cyan-500 transition-colors">
                        المدربين المعتمدين
                      </a>
                      <a href="#" className="block px-4 py-2 text-xl text-blue-900 hover:bg-gray-50 hover:text-cyan-500 transition-colors">
                        أفضل المدربين
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* About dropdown */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => {
                    setAboutDropdown(!aboutDropdown);
                    setTrainersDropdown(false);
                  }}
                  className="flex items-center cursor-pointer gap-1 lg:text-3xl px-6 py-1 text-blue-900 font-medium hover:text-cyan-500 transition-colors"
                >
                  من نحن
                  <svg className={`w-3 h-3 transition-transform ${aboutDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {aboutDropdown && (
                  <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-lg shadow-lg border z-50">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-lg text-blue-900 hover:bg-gray-50 hover:text-cyan-500 transition-colors">
                        عن الأكاديمية
                      </a>
                      <a href="#" className="block px-4 py-2 text-lg text-blue-900 hover:bg-gray-50 hover:text-cyan-500 transition-colors">
                        رؤيتنا ورسالتنا
                      </a>
                      <a href="#" className="block px-4 py-2 text-lg text-blue-900 hover:bg-gray-50 hover:text-cyan-500 transition-colors">
                        فريق العمل
                      </a>
                      <a href="#" className="block px-4 py-2 text-lg text-blue-900 hover:bg-gray-50 hover:text-cyan-500 transition-colors">
                        اتصل بنا
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)}></div>
          
          <div className="fixed inset-y-0 right-0 w-80 bg-gray-100">
            {/* Mobile menu header */}
            <div className="bg-white p-3 flex justify-between items-center border-b">
              <div className="flex gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="text-blue-900 text-lg font-medium border border-blue-900 rounded-lg px-3 py-2"
                >
                  تسجيل الدخول
                </button>
                <button className="text-white bg-blue-900 text-lg font-medium rounded-lg px-3 py-2">
                  إنشاء حساب
                </button>
              </div>
            </div>

            {/* Mobile menu content */}
            <div className="p-3 space-y-3">
              {/* Profile section */}
              <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="text-blue-900 font-medium text-lg">إعدادات الحساب</div>
              </div>

              {/* Menu items */}
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-blue-900 font-medium text-lg">تسجيل الدخول</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-blue-900 font-medium text-lg">الدورات</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    <span className="text-blue-900 font-medium text-lg">المسارات</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.002 2.002 0 0 0 18.06 7c-.8 0-1.54.5-1.85 1.26l-1.92 5.79A2 2 0 0 0 16.24 16H16v6h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zm1.5 1H11c-.83 0-1.5.67-1.5 1.5v6h2v7h2v-7h2v-6c0-.83-.67-1.5-1.5-1.5zm-6.5-1c.83 0 1.5-.67 1.5-1.5S8.33 8.5 7.5 8.5 6 9.17 6 10s.67 1.5 1.5 1.5zm1.5 1H6c-.83 0-1.5.67-1.5 1.5v6h2v7h2v-7h2v-6c0-.83-.67-1.5-1.5-1.5z"/>
                    </svg>
                    <span className="text-blue-900 font-medium text-lg">المدربين</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <span className="text-blue-900 font-medium text-lg">الانضمام كمدرب</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-blue-900 font-medium text-lg">من نحن</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.75-6.78l-.79-.95c-.25-.3-.59-.48-.96-.48H7.49c-.37 0-.71.18-.96.48l-.79.95c-1.26 2.13-.99 4.84.75 6.78l.03.03-2.54 2.51c-.48.48-.48 1.26 0 1.74l.75.75c.48.48 1.26.48 1.74 0l2.05-2.05c.39.39.9.61 1.43.61s1.04-.22 1.43-.61l2.05 2.05c.48.48 1.26.48 1.74 0l.75-.75c.48-.48.48-1.26 0-1.74zM12 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                    </svg>
                    <span className="text-blue-900 font-medium text-lg">تغيير اللغة</span>
                  </div>
                </div>
              </div>

              {/* Bottom section */}
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-blue-900 font-medium mb-3 text-lg">أكاديمية المهارات التطبيقية للتدريب</div>
                <div className="flex justify-center gap-3">
                  <svg className="w-6 h-6 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <svg className="w-6 h-6 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
