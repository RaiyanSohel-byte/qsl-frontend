import Image from "next/image";
import React from "react";

const JobCard = ({ job }) => {
  const TAG_STYLES = {
    "Full-Time": "bg-[#eb85331a] text-[#eb8533]",
    Marketing: "bg-[#56cdad1a] text-[#56cdad]",
    Design: "bg-[#4640de1a] text-[#4640de]",
    Technology: "bg-[#ff61611a] text-[#ff6161]",
    Business: "bg-[#ffb8001a] text-[#ffb800]",
  };
  return (
    <div
      className={`flex items-start gap-4 bg-white rounded-[8px] p-6 hover:border-[#4640de] hover:shadow-sm transition-all duration-200 cursor-pointer`}
    >
      {/* Logo */}
      <div className="w-12 h-12 relative flex-shrink-0">
        <Image
          src={job.logo}
          alt={job.company}
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 min-w-0">
        <h3 className="text-[#25324b] font-semibold text-base leading-snug">
          {job.title}
        </h3>
        <p className="text-[#515b6f] text-sm">
          {job.company}
          <span className="mx-2 text-[#d6ddeb]">•</span>
          {job.location}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${TAG_STYLES["Full-Time"]}`}
            style={{ borderColor: "#eb853333" }}
          >
            {job.type}
          </span>

          {/* Divider */}
          <span className="w-px h-4 bg-[#d6ddeb]" />

          {job.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-semibold px-3 py-1 rounded-full ${TAG_STYLES[tag] ?? "bg-gray-100 text-gray-600"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
