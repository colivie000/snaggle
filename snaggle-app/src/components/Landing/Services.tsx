"use client";

import {
  FaPaintRoller,
  FaTools,
  FaTruck,
  FaBroom,
  FaCode,
  FaPenNib,
  FaChartLine,
  FaComments,
  FaSearchDollar,
  FaChalkboardTeacher,
  FaRobot,
  FaVideo,
  FaBullhorn,
  FaCouch,
  FaTv,
  FaTrash,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";

interface Service {
  name: string;
  tagline: string;
  icon: React.ReactElement;
  onClick: () => void;
}

const Services: React.FC = () => {
  const router = useRouter();

  const digitalServices: Service[] = [
    {
      name: "Graphic Design",
      tagline: "Craft a brand that stands out.",
      icon: <MdDesignServices className="text-3xl text-pink-500" />,
      onClick: () => router.push(`/search?category=graphic-design`),
    },
    {
      name: "Web Development",
      tagline: "Launch your website with pro-level code.",
      icon: <FaCode className="text-3xl text-indigo-500" />,
      onClick: () => router.push(`/search?category=web-development`),
    },
    {
      name: "AI Solutions",
      tagline: "Boost productivity with smart tools.",
      icon: <FaRobot className="text-3xl text-purple-500" />,
      onClick: () => router.push(`/search?category=ai-solutions`),
    },
    {
      name: "Copywriting",
      tagline: "Words that sell, connect, and convert.",
      icon: <FaPenNib className="text-3xl text-yellow-500" />,
      onClick: () => router.push(`/search?category=copywriting`),
    },
    {
      name: "Social Media Management",
      tagline: "Build a scroll-stopping online presence.",
      icon: <FaBullhorn className="text-3xl text-red-400" />,
      onClick: () => router.push(`/search?category=social-media`),
    },
    {
      name: "SEO Optimization",
      tagline: "Climb to the top of search results.",
      icon: <FaSearchDollar className="text-3xl text-green-600" />,
      onClick: () => router.push(`/search?category=seo-optimization`),
    },
    {
      name: "Voice Over",
      tagline: "Bring your message to life.",
      icon: <FaComments className="text-3xl text-red-500" />,
      onClick: () => router.push(`/search?category=voice-over`),
    },
    {
      name: "Video Editing",
      tagline: "Transform raw clips into polished content.",
      icon: <FaVideo className="text-3xl text-blue-500" />,
      onClick: () => router.push(`/search?category=video-editing`),
    },
  ];

  const homeServices: Service[] = [
    {
      name: "Home Cleaning",
      tagline: "A sparkling home, without the hassle.",
      icon: <FaBroom className="text-3xl text-emerald-500" />,
      onClick: () => router.push(`/search?category=home-cleaning`),
    },
    {
      name: "Moving Help",
      tagline: "Stress-free moves, big or small.",
      icon: <FaTruck className="text-3xl text-red-400" />,
      onClick: () => router.push(`/search?category=moving-help`),
    },
    {
      name: "Handyman Services",
      tagline: "Fix it fast. Fix it right.",
      icon: <FaTools className="text-3xl text-gray-600" />,
      onClick: () => router.push(`/search?category=handyman-services`),
    },
    {
      name: "Painting",
      tagline: "Fresh coats, fresh starts.",
      icon: <FaPaintRoller className="text-3xl text-purple-500" />,
      onClick: () => router.push(`/search?category=painting`),
    },
    {
      name: "Furniture Assembly",
      tagline: "No tools? No problem.",
      icon: <FaCouch className="text-3xl text-blue-500" />,
      onClick: () => router.push(`/search?category=furniture-assembly`),
    },
    {
      name: "TV & Tech Setup",
      tagline: "Smart tech, set up and ready to go.",
      icon: <FaTv className="text-3xl text-orange-400" />,
      onClick: () => router.push(`/search?category=tv-and-tech-setup`),
    },
    {
      name: "Yard Work",
      tagline: "Curb appeal made easy.",
      icon: <FaBroom className="text-3xl text-lime-600" />,
      onClick: () => router.push(`/search?category=yard-work`),
    },
    {
      name: "Junk Removal",
      tagline: "Declutter your space in no time.",
      icon: <FaTrash className="text-3xl text-red-600" />,
      onClick: () => router.push(`/search?category=junk-removal`),
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  const Section = ({
    title,
    services,
  }: {
    title: string;
    services: Service[];
  }) => (
    <div className="mb-12">
      <h3 className="text-3xl font-semibold text-gray-700 mb-6">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            onClick={service.onClick}
          >
            <div className="mb-4">{service.icon}</div>
            <h4 className="text-2xl font-semibold mb-1">{service.name}</h4>
            <p className="text-gray-500 text-md">{service.tagline}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="px-4 sm:px-8 lg:px-20 mt-16 mb-8">
      <h2 className="text-3xl lg:text-5xl sm:text-3xl font-bold text-center text-teal-600 mb-12">
        For every "uh oh," there's a Snaggle Pro
      </h2>
      <Section title="Digital Services" services={digitalServices} />
      <Section title="Home Services" services={homeServices} />
    </div>
  );
};

export default Services;
