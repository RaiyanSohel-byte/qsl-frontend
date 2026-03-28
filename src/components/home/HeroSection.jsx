import React from "react";
import Image from "next/image";
import heroUnderline from "../../app/images/hero-title-underline.png";
import heroImage from "../../app/images/Hero/hero-image.png";
import rectangle1 from "../../app/images/Hero/rectangle-1.png";
import rectangle2 from "../../app/images/Hero/rectangle-2.png";
import rectangle3 from "../../app/images/Hero/rectangle-3.png";
import rectangle4 from "../../app/images/Hero/rectangle-4.png";
import { Epilogue } from "next/font/google";
import SearchForm from "../shared/SearchForm";

const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
});
const HeroSection = () => {
  return (
    <section className="bg-[#F8F8FD] relative overflow-hidden h-190 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2.5 lg:py-12 px-4 lg:px-0">
        {/* left side */}
        <div>
          <h1 className="font-semibold text-[48px] lg:text-[72px] leading-[110.00000000000001%] mb-6">
            Discover <br /> more than <br />{" "}
            <span className="text-accent">5000+ Jobs</span> <br />
            <Image src={heroUnderline} alt="hero title underline" />
          </h1>
          <p
            className={`${epilogue.className} text-[#515B6F] text-lg lg:text-xl max-w-130 leading-[160%] mb-6`}
          >
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>
          <div className="absolute z-20">
            <SearchForm />
          </div>
          <p
            className={`text-base font-medium leading-[160%] text-[#202430] ${epilogue.className} mt-36 hidden lg:block`}
          >
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>
          <p
            className={`text-base font-medium leading-[160%] text-[#202430] ${epilogue.className} mt-58 lg:hidden`}
          >
            Popular : <br /> UI Designer, UX Researcher, Android, Admin
          </p>
        </div>
        {/* right side */}
        <div className="relative">
          <Image
            src={heroImage}
            alt="hero image"
            className="hidden lg:block h-full"
          />
          <div className="absolute bottom-125 left-20 lg:w-[200px] -z-10">
            <Image src={rectangle1} alt="rectangle1" />
          </div>
          <div className="absolute bottom-74 -z-10 lg:w-[580px] -right-55">
            <Image src={rectangle2} alt="rectangle2" />
          </div>
          <div className="absolute -z-10 top-40 right-50">
            <Image src={rectangle3} alt="rectangle3" />
          </div>
          <div className="absolute top-15 -z-10">
            <Image src={rectangle4} alt="rectangle4" />
          </div>
        </div>
      </div>
      {/* Diagonal Bottom Cutout */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-white"
        style={{
          clipPath: "polygon(1200px 100%, 100% 100%, 100% 0)",
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
