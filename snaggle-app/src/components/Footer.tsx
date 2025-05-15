"use client";

import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
// import FiverrLogo from "./FiverrLogo";
// import { categories } from "../utils/categories";

type SocialLink = {
  name: string;
  icon: React.ReactNode;
  link: string;
};

type FooterLink = {
  name: string;
  link: string;
};

type FooterSection = {
  headerName: string;
  links: FooterLink[];
};

const socialLinks: SocialLink[] = [
  { name: "Github", icon: <FiGithub />, link: "https://www.github.com" },
  {
    name: "Youtube",
    icon: <FiYoutube />,
    link: "https://www.youtube.com/",
  },
  {
    name: "LinkedIn",
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Instagram",
    icon: <FiInstagram />,
    link: "https://instagram.com/",
  },
  {
    name: "Twitter",
    icon: <FiTwitter />,
    link: "https://twitter.com/",
  },
];

const data: FooterSection[] = [
  {
    headerName: "Digital Services",
    links: [
      { name: "Graphic Design", link: "/search?category=graphic-design" },
      { name: "Web Development", link: "/search?category=web-development" },
      { name: "AI Solutions", link: "/search?category=ai-solutions" },
      { name: "Copywriting", link: "/search?category=copywriting" },
      {
        name: "Social Media Management",
        link: "/search?category=social-media",
      },
      { name: "SEO Optimization", link: "/search?category=seo-optimization" },
      { name: "Voice Over", link: "/search?category=voice-over" },
      { name: "Video Editing", link: "/search?category=video-editing" },
    ],
  },
  {
    headerName: "Home Services",
    links: [
      { name: "Home Cleaning", link: "/search?category=home-cleaning" },
      { name: "Moving Help", link: "/search?category=moving-help" },
      { name: "HandyMan Services", link: "/search?category=handyman-services" },
      { name: "Painting", link: "/search?category=painting" },
      {
        name: "Furniture Assembly",
        link: "/search?category=furniture-assembly",
      },
      { name: "TV & Tech Setup", link: "/search?category=tv-and-tech-setup" },
      { name: "Yard Work", link: "/search?category=yard-work" },
      { name: "Junk Removal", link: "/search?category=junk-removal" },
    ],
  },
  {
    headerName: "About",
    links: [
      { name: "Press & News", link: "#" },
      { name: "Partnership", link: "#" },
      { name: "Privacy Policy", link: "#" },
      { name: "Terms of Service", link: "#" },
    ],
  },
  {
    headerName: "Support",
    links: [
      { name: "Help & Support", link: "#" },
      { name: "Trust & Safety", link: "#" },
      { name: "Selling on Snaggle", link: "#" },
      { name: "Buying on Snaggle", link: "#" },
    ],
  },
  {
    headerName: "Community",
    links: [
      { name: "Community Success Stories", link: "#" },
      { name: "Community Hub", link: "#" },
      { name: "Forum", link: "#" },
      { name: "Events", link: "#" },
      { name: "Blog", link: "#" },
      { name: "Affiliates", link: "#" },
      { name: "Invite a Friend", link: "#" },
      { name: "Become a Seller", link: "#" },
      { name: "Community Standards", link: "#" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-32 py-12 border-t border-gray-200 bg-gray-100">
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {data.map(({ headerName, links }) => (
          <li key={headerName}>
            <h3 className="font-semibold text-gray-800 mb-2">{headerName}</h3>
            <ul className="space-y-1">
              {links.map(({ name, link }) => (
                <li key={name}>
                  <Link
                    href={link}
                    className="text-sm text-gray-600 hover:text-black transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* <FiverrLogo fillColor="#404145" /> */}
        <ul className="flex gap-5">
          {socialLinks.map(({ icon, link, name }) => (
            <li
              key={name}
              className="text-2xl text-gray-600 hover:text-[#1DBF73] transition-all"
            >
              <Link href={link} target="_blank" rel="noopener noreferrer">
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
