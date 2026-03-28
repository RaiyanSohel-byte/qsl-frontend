import React from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { Epilogue } from "next/font/google";
import PrimaryButton from "../buttons/PrimaryButton";

const epilogue = Epilogue({ subsets: ["latin"] });

const SearchForm = () => {
  return (
    <form
      className={`${epilogue.className} bg-white p-6 lg:p-4 shadow-xl lg:flex items-center gap-6 lg:w-5xl lg:z-20`}
    >
      {/* 1. Job Title Section */}
      <div className="flex items-start gap-4 flex-1">
        <Search className="text-[#202430] w-6 h-6" strokeWidth={2.5} />
        <div className="flex flex-col flex-1 border-b border-[#D6DDEB] pb-2">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="bg-transparent border-none outline-none text-[#202430] placeholder:text-[#A8ADB7] text-lg w-full"
          />
        </div>
      </div>

      {/* 2. Location Dropdown Section */}
      <div className="flex items-start gap-4 flex-1">
        <MapPin className="text-[#202430] w-6 h-6" strokeWidth={2.5} />
        <div className="flex items-center justify-between flex-1 border-b border-[#D6DDEB] pb-2 relative">
          <select
            defaultValue=""
            className="appearance-none bg-transparent border-none outline-none text-[#202430] text-lg w-full cursor-pointer z-10 pr-8"
          >
            <option value="" disabled>
              Florence, Italy
            </option>
            <option value="florence">Florence, Italy</option>
            <option value="london">London, UK</option>
            <option value="new-york">New York, USA</option>
            <option value="dhaka">Dhaka, Bangladesh</option>
          </select>

          <ChevronDown className="text-[#7C8493] w-5 h-5 absolute right-0 pointer-events-none" />
        </div>
      </div>

      {/* 3. Search Button */}
      <PrimaryButton>Search my job</PrimaryButton>
    </form>
  );
};

export default SearchForm;
