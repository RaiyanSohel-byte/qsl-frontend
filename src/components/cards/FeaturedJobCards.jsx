import React from "react";
import { Epilogue } from "next/font/google";
const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
});
const FeaturedJobCards = () => {
  return (
    <div
      className={`${epilogue.className}  bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        {/* Company Logo Placeholder */}
        <div className="w-12 h-12 flex items-center justify-center bg-white border border-gray-100 rounded-lg">
          {/* Mocking the Revolut 'R' logo from the image */}
          <span className="text-3xl font-black text-slate-900 italic transform -skew-x-12">
            R
          </span>
        </div>

        {/* Type Badge */}
        <span className="px-3 py-1 border border-[#4640DE] text-[#4640DE] text-sm font-medium rounded-sm">
          Full Time
        </span>
      </div>

      {/* Content Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#25324B] mb-2">
          Email Marketing
        </h3>
        <div className="flex items-center gap-2 text-[#7C8493] text-sm font-medium">
          <span>Revolut</span>
          <span className="w-1 h-1 bg-[#7C8493] rounded-full" />
          <span>Madrid, Spain</span>
        </div>
      </div>

      {/* Description Snippet */}
      <p className="text-[#7C8493] text-sm leading-relaxed mb-8 line-clamp-2">
        Revolut is looking for Email Marketing to help team ma ...
      </p>

      {/* Tags Section */}
      <div className="flex gap-2">
        <span className="px-4 py-1.5 bg-[#FFB836]/10 text-[#FFB836] text-xs font-bold rounded-full">
          Marketing
        </span>
        <span className="px-4 py-1.5 bg-[#56CDAD]/10 text-[#56CDAD] text-xs font-bold rounded-full border border-[#56CDAD]/20">
          Design
        </span>
      </div>
    </div>
  );
};

export default FeaturedJobCards;
