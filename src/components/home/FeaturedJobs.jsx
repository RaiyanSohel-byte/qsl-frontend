"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../../app/styles.css";
import Title from "../shared/Title";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Epilogue } from "next/font/google";
import FeaturedJobCards from "../cards/FeaturedJobCards";
const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
});

const FeaturedJobs = () => {
  const jobData = [
    {
      id: 1,
      title: "Email Marketing",
      company: "Revolut",
      location: "Madrid, Spain",
      type: "Full Time",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      tags: ["Marketing", "Design"],
      logo: "/logos/revolut.png",
    },
    {
      id: 2,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, US",
      type: "Full Time",
      description:
        "Dropbox is looking for Brand Designer to help the team t ...",
      tags: ["Design", "Business"],
      logo: "/logos/dropbox.png",
    },
    {
      id: 3,
      title: "Email Marketing",
      company: "Pitch",
      location: "Berlin, Germany",
      type: "Full Time",
      description:
        "Pitch is looking for Customer Manager to join marketing t ...",
      tags: ["Marketing"],
      logo: "/logos/pitch.png",
    },
    {
      id: 4,
      title: "Visual Designer",
      company: "Blinklist",
      location: "Granada, Spain",
      type: "Full Time",
      description:
        "Blinklist is looking for Visual Designer to help team desi ...",
      tags: ["Design"],
      logo: "/logos/blinklist.png",
    },
    {
      id: 5,
      title: "Product Designer",
      company: "ClassPass",
      location: "Manchester, UK",
      type: "Full Time",
      description: "ClassPass is looking for Product Designer to help us...",
      tags: ["Marketing", "Design"],
      logo: "/logos/classpass.png",
    },
    {
      id: 6,
      title: "Lead Designer",
      company: "Canva",
      location: "Ontario, Canada",
      type: "Full Time",
      description: "Canva is looking for Lead Engineer to help develop n ...",
      tags: ["Design", "Business"],
      logo: "/logos/canva.png",
    },
    {
      id: 7,
      title: "Brand Strategist",
      company: "GoDaddy",
      location: "Marseille, France",
      type: "Full Time",
      description:
        "GoDaddy is looking for Brand Strategist to join the team...",
      tags: ["Marketing"],
      logo: "/logos/godaddy.png",
    },
    {
      id: 8,
      title: "Data Analyst",
      company: "Twitter",
      location: "San Diego, US",
      type: "Full Time",
      description: "Twitter is looking for Data Analyst to help team desi ...",
      tags: ["Technology"],
      logo: "/logos/twitter.png",
    },
  ];
  return (
    <div>
      <div className="lg:flex justify-between items-center">
        <Title normalText="Featured" highlightText="jobs" />
        <Link
          href="/"
          className={`${epilogue.className} hidden lg:flex items-center text-primary font-semibold gap-1`}
        >
          Show all jobs <FaArrowRight />
        </Link>
      </div>
      <div className="lg:grid grid-cols-4 my-12 gap-4 hidden">
        {jobData.map((job) => (
          <FeaturedJobCards key={job.id} job={job} />
        ))}
      </div>
      <div className="lg:hidden">
        <Swiper className="mySwiper">
          {jobData.map((job, i) => (
            <SwiperSlide key={i + 1} className="px-4 my-10">
              <FeaturedJobCards job={job} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedJobs;
