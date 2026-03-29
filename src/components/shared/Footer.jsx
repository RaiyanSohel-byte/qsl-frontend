import Link from "next/link";
import { Epilogue } from "next/font/google";
import {
  FaFacebookF,
  FaInstagram,
  FaDribbble,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import logo from "../../app/images/logos/Logo 2.png";
const epilogue = Epilogue({ subsets: ["latin"], display: "swap" });

const aboutLinks = [
  "Companies",
  "Pricing",
  "Terms",
  "Advice",
  "Privacy Policy",
];
const resourceLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];

const socialLinks = [
  { icon: <FaFacebookF size={14} />, href: "/" },
  { icon: <FaInstagram size={14} />, href: "/" },
  { icon: <FaDribbble size={14} />, href: "/" },
  { icon: <FaLinkedinIn size={14} />, href: "/" },
  { icon: <FaTwitter size={14} />, href: "/" },
];

const Footer = () => {
  return (
    <footer className={`${epilogue.className} bg-[#202430] text-white w-full`}>
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 w-fit">
              <Image src={logo} alt="logo" />
            </Link>

            {/* Tagline */}
            <p className="text-[#d6ddeb] text-sm leading-relaxed max-w-[240px]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* Col 2 — About */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-base">About</h4>
            <ul className="flex flex-col gap-4">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="text-[#d6ddeb] text-sm hover:text-white transition-colors duration-150"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Resources */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-base">Resources</h4>
            <ul className="flex flex-col gap-4">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="text-[#d6ddeb] text-sm hover:text-white transition-colors duration-150"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-base">
              Get job notifications
            </h4>
            <p className="text-[#d6ddeb] text-sm leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex items-stretch gap-0">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-white text-[#25324b] text-sm px-4 py-3 outline-none placeholder:text-[#a8adb7] min-w-0"
              />
              <button className="bg-[#4640de] hover:bg-[#3b36c4] text-white text-sm font-semibold px-5 py-3 transition-colors duration-150 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#ffffff1a] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-[#d6ddeb] text-sm">
            2021 @ QuickHire. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon, href }, i) => (
              <Link
                key={i}
                href={href}
                className="w-9 h-9 rounded-full bg-[#ffffff14] hover:bg-[#4640de] flex items-center justify-center text-[#d6ddeb] hover:text-white transition-all duration-200"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
