import React from "react";
import { Epilogue } from "next/font/google";
const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
});
const FeaturedJobCards = ({ job }) => {
  return (
    <div
      className={`${epilogue.className}  bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        {/* Company Logo Placeholder */}
        <div className="w-12 h-12 flex items-center justify-center bg-white border border-gray-100 rounded-lg">
          <span className="text-3xl font-black text-slate-900 italic transform -skew-x-12">
            R
          </span>
        </div>

        {/* Type Badge */}
        <span className="px-3 py-1 border border-[#4640DE] text-[#4640DE] text-sm font-medium rounded-sm">
          {job.type}
        </span>
      </div>

      {/* Content Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#25324B] mb-2">{job.title}</h3>
        <div className="flex items-center gap-2 text-[#7C8493] text-sm font-medium">
          <span>{job.company}</span>
          <span className="w-1 h-1 bg-[#7C8493] rounded-full" />
          <span>{job.location}</span>
        </div>
      </div>

      {/* Description Snippet */}
      <p className="text-[#7C8493] text-sm leading-relaxed mb-8 line-clamp-2">
        {job.description}
      </p>

      {/* Tags Section */}
      <div className="flex gap-2">
        {job.tags.map((tag, i) => (
          <span
            key={i + 1}
            className="px-4 py-1.5 bg-[#FFB836]/10 text-[#FFB836] text-xs font-bold rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobCards;
