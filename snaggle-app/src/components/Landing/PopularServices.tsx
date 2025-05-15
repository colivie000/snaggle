"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // You can also use your own icons

interface Service {
  name: string;
  label: string;
  image: string;
}

const popularServicesData: Service[] = [
  { name: "Web Development", label: "Websites that delivers", image: "/webdesign-service.jpg" },
  { name: "Graphic Design", label: "Build your brand", image: "/graphicdesign-service.jpg" },
  { name: "HandyMan", label: "Home repairs on demand", image: "/handyman-service.jpg" },
  {
    name: "Social Media",
    label: "Reach more customers",
    image: "/socialmedia-service.jpg",
  },
  { name: "Home Cleaning", label: "A cleaner home, a happier you", image: "/homecleaning-service.jpg" },
  { name: "Painting", label: "Refresh your space", image: "/painting-service.jpg" },
  { name: "Video Editing", label: "From clips to masterpieces", image: "/videoediting-service.jpg" },
  { name: "Moving Help", label: "Moving made effortless", image: "/moving-service.jpg" },
];

const PopularServices: React.FC = () => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-4 sm:px-8 lg:px-20 my-16 relative">
      <h2 className="text-3xl sm:text-4xl mb-6 text-[#404145] font-bold">
        Popular Services
      </h2>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="items-center justify-center absolute top-1/2 left-0 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2"
        aria-label="Scroll left"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="items-center justify-center absolute top-1/2 right-0 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2"
        aria-label="Scroll right"
      >
        <ChevronRight />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-2"
      >
        {popularServicesData.map(({ name, label, image }) => (
          <div
            key={name}
            className="relative min-w-[260px] sm:min-w-[300px] aspect-[9/12] rounded-xl overflow-hidden shadow-lg snap-start cursor-pointer"
            onClick={() => router.push(`/search?q=${name.toLowerCase()}`)}
          >
            <div className="absolute z-10 text-white left-5 top-4">
              <i className="text-md">{label}</i>
              <h6 className="font-extrabold text-2xl lg:text-3xl sm:text-2xl">{name}</h6>
            </div>
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 300px"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
