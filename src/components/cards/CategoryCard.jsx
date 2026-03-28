import { Epilogue } from "next/font/google";
import Link from "next/link";
import React from "react";
import { LuArrowRight } from "react-icons/lu";

const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
});

const CategoryCard = ({ category }) => {
  const Icon = category.icon;
  return (
    <div className="flex lg:block items-center justify-between group border border-gray-300 p-4 lg:p-8 hover:bg-primary transition-all duration-300 cursor-pointer">
      <Icon className="text-4xl text-primary group-hover:text-white transition-colors duration-300" />

      <div>
        <h3 className="lg:mt-8 lg:mb-3 font-semibold text-2xl group-hover:text-white transition-colors">
          {category.name}
        </h3>

        <Link
          href="/"
          className={`${epilogue.className} flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors duration-300`}
        >
          {category.available} jobs available{" "}
          <LuArrowRight className="text-black group-hover:text-white transition-colors" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
