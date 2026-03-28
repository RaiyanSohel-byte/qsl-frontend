import React from "react";
import Title from "../shared/Title";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
});
const ExploreByCategories = () => {
  return (
    <div className="lg:py-18 px-4 lg:px-0">
      {/* texts */}
      <div className="lg:flex justify-between items-center">
        <Title normalText={`Explore by`} highlightText={`category`} />
        <Link
          href="/"
          className={`${epilogue.className} hidden lg:flex items-center text-primary font-semibold gap-1`}
        >
          Show all jobs <FaArrowRight />
        </Link>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8"></div>
    </div>
  );
};

export default ExploreByCategories;
