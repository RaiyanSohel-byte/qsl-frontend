import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { Epilogue } from "next/font/google";
import JobCard from "../cards/JobCard";
import Title from "../shared/Title";

const epilogue = Epilogue({ subsets: ["latin"], display: "swap" });

const jobData = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    type: "Full-Time",
    tags: ["Marketing", "Design"],
    logo: "/logos/nomad.png",
  },
  {
    id: 2,
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    type: "Full-Time",
    tags: ["Marketing", "Design"],
    logo: "/logos/netlify.png",
  },
  {
    id: 3,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
    type: "Full-Time",
    tags: ["Marketing", "Design"],
    logo: "/logos/dropbox.png",
  },
  {
    id: 4,
    title: "Brand Designer",
    company: "Maze",
    location: "San Fransisco, USA",
    type: "Full-Time",
    tags: ["Marketing", "Design"],
    logo: "/logos/maze.png",
  },
  {
    id: 5,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    type: "Full-Time",
    tags: ["Marketing", "Design"],
    logo: "/logos/terraform.png",
  },
  {
    id: 6,
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    type: "Full-Time",
    tags: ["Marketing", "Design"],
    logo: "/logos/udacity.png",
  },
  {
    id: 7,
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    type: "Full-Time",
    tags: ["Marketing", "Design"],
    logo: "/logos/packer.png",
  },
  {
    id: 8,
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    type: "Full-Time",
    tags: ["Marketing", "Design"],
    logo: "/logos/webflow.png",
  },
];

const LatestJobs = () => {
  return (
    <section
      className={`px-6 lg:px-0 py-16 lg:py-[72px] bg-primary/5 relative w-full overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        {" "}
        {/* Header */}
        <div className="flex items-center justify-between mb-10 ">
          <Title normalText="Latest" highlightText="jobs" />
          <Link
            href="/"
            className={`${epilogue.className} hidden lg:flex items-center gap-2 text-[#4640de] font-semibold text-sm hover:gap-3 transition-all duration-200`}
          >
            Show all jobs <FaArrowRight />
          </Link>
        </div>
        {/* Grid */}
        <div
          className={`${epilogue.className} grid grid-cols-1 md:grid-cols-2 gap-4`}
        >
          {jobData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
