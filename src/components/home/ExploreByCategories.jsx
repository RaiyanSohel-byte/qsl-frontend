import React from "react";
import Title from "../shared/Title";
import Link from "next/link";
import { FaArrowRight, FaUsers } from "react-icons/fa6";
import { LuPencilRuler } from "react-icons/lu";
import { GiNetworkBars } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";
import { PiWallet } from "react-icons/pi";
import { FiMonitor } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { Epilogue } from "next/font/google";
import CategoryCard from "../cards/CategoryCard";

const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
});
const ExploreByCategories = () => {
  const categories = [
    {
      name: "Design",
      available: 235,
      icon: LuPencilRuler,
    },
    {
      name: "Sales",
      available: 235,
      icon: GiNetworkBars,
    },
    {
      name: "Marketing",
      available: 235,
      icon: GrAnnounce,
    },
    {
      name: "Finance",
      available: 235,
      icon: PiWallet,
    },
    {
      name: "Technology",
      available: 235,
      icon: FiMonitor,
    },
    {
      name: "Engineering",
      available: 235,
      icon: IoCodeSlash,
    },
    {
      name: "Business",
      available: 235,
      icon: PiSuitcaseSimpleBold,
    },
    {
      name: "Human Resource",
      available: 235,
      icon: FaUsers,
    },
  ];
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 mt-12">
        {categories.map((category, i) => (
          <CategoryCard key={i + 1} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ExploreByCategories;
