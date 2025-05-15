"use client";

import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const HomeBanner: React.FC = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [searchData, setSearchData] = useState<string>("");
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const handleSearch = () => {
    router.push(`/search?q=${searchData}`);
  };

  const handleTagClick = (query: string) => {
    router.push(`/search?q=${query}`);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (video && window.scrollY > window.innerHeight * 0.5) {
        video.muted = true;
        setIsMuted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[600px] sm:h-[680px] lg:h-screen overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/home-banner-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Video controls - bottom right */}
      <div className="absolute bottom-5 right-5 z-20 flex gap-4">
        <button onClick={togglePlay} className="text-white text-xl hover:text-teal-400 transition">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={toggleMute} className="text-white text-xl hover:text-teal-400 transition">
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-10 lg:px-20">
        <div className="w-full max-w-3xl space-y-5 text-white">
          <h1 className="text-4xl sm:text-4xl lg:text-7xl font-bold leading-snug">
            Hire expert <i className="text-teal-400 font-semibold">freelancers</i>
            <br />
            to bring your ideas to life
          </h1>

          {/* Search bar */}
          <div className="relative w-full bg-white rounded-full shadow-md">
            <input
              placeholder={placeholderVisible ? "Search for any service..." : ""}
              onFocus={() => setPlaceholderVisible(false)}
              onBlur={() => {
                if (searchData.trim() === "") {
                  setPlaceholderVisible(true);
                }
              }}
              className="w-full h-14 sm:h-16 bg-transparent py-2 pl-6 pr-32 rounded-full outline-none border-2 border-gray-100 focus:ring-teal-200 focus:border-teal-200 text-black"
              value={searchData}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 px-4 sm:px-6 h-10 sm:h-12 rounded-full bg-teal-600 text-white text-sm sm:text-base hover:bg-teal-700 focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Tags */}
          <div className="text-white flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="text-sm sm:text-base font-medium">Popular:</span>
            <ul className="flex flex-wrap gap-3">
              {["Website Design", "Graphic Design", "Home Cleaning", "Social Media Management", "Handyman"].map((tag) => (
                <li
                  key={tag}
                  className="text-xs lg:text-md sm:text-xs py-1 px-3 border rounded-full cursor-pointer hover:bg-white hover:text-black transition-all"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
