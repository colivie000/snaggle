import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";

// Define a type for the data
interface FeatureItem {
  title: string;
  subtitle: string;
}

const FeatureSection: React.FC = () => {
  const featureData: FeatureItem[] = [
    {
      title: "Affordable by Design",
      subtitle:
        "Services that fit every budget. Transparent, project-based pricing—no hourly guesswork.",
    },
    {
      title: "Speed Meets Skill",
      subtitle:
        "Get it done fast—and done right. From creatives to handymen, hire experts in minutes.",
    },
    {
      title: "Only Pay for Results",
      subtitle:
        "You’re in control. Approve the work, then release payment—simple and secure.",
    },
    {
      title: "Built to Empower You",
      subtitle:
        "Track projects, communicate seamlessly, and manage everything in one sleek platform.",
    },
  ];

  return (
    <div className="bg-[#f1fdf7] flex flex-col lg:flex-row py-20 px-4 lg:px-24 justify-between w-full lg:w-9/10 mx-auto">
      <div className="lg:w-1/2">
        <h2 className="text-4xl mb-5 text-[#404145] font-bold">
          🚀 Why Snaggle?
        </h2>
        <ul className="flex flex-col gap-10">
          {featureData.map(({ title, subtitle }) => (
            <li key={title}>
              <div className="flex gap-2 items-center text-xl">
                <BsCheckCircle className="text-[#62646a]" />
                <h4>{title}</h4>
              </div>
              <p className="text-[#62646a]">{subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-64 lg:h-96 w-full lg:w-2/4 mt-10 lg:mt-10">
        <Image src="/feature-section.jpg" fill alt="Feature" />
      </div>
    </div>
  );
};

export default FeatureSection;
