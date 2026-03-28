import React from "react";
import vodafone from "../../app/images/logos/vodafone.png";
import intel from "../../app/images/logos/intel.png";
import tesla from "../../app/images/logos/tesla.png";
import amd from "../../app/images/logos/amd.png";
import talkit from "../../app/images/logos/talkit.png";
import { Epilogue } from "next/font/google";
import Image from "next/image";

const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
});
const Companies = () => {
  const logos = [vodafone, intel, tesla, amd, talkit];
  return (
    <div className="px-4 lg:px-0 py-12 max-w-7xl mx-auto">
      <h3 className={`${epilogue.className} text-gray-400 text-md mb-8`}>
        Companies we helped grow
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-18 items-center">
        {logos.map((logo, i) => (
          <Image key={i + 1} src={logo} alt="company logo" />
        ))}
      </div>
    </div>
  );
};

export default Companies;
