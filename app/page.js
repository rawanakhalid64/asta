
import Image from "next/image";
import Hero from "@/app/components/Hero"
import Banner from "@/app/components/Banner";
import Slider from "@/app/components/Slider";
import PopularCoursesSection from "@/app/components/PopularCoursesSection";
import CourseSection from "@/app/components/CourseSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import Footer from "@/app/components/Footer";
import Footer2 from "@/app/components/Footer2";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <Hero></Hero>
        <Banner />
        <Slider />
        <PopularCoursesSection/>
        <CourseSection/>
        <TestimonialsSection/>
        <Footer/>
        <Footer2/>
      </main>
    </div>
  );
}
