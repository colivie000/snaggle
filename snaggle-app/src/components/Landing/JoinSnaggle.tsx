import Image from "next/image";
import React from "react";

const JoinSnaggle: React.FC = () => {
  return (
    <div className="relative my-16 px-4 sm:px-8 lg:px-32">
      <div className="relative w-full h-60 rounded-3xl overflow-hidden">
        {/* Background color layer */}
        <div className="absolute inset-0 bg-[#4d1727]" />

        {/* Centered content with no wrapping */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <h4 className="text-white text-4xl sm:text-4xl lg:text-7xl font-semibold mb-6 whitespace-nowrap">
            The hard part just got <i className="text-[#ff7745]">easy</i>.
          </h4>
          <button
            type="button"
            className="bg-white hover:bg-[#E2D9CA] transition-colors text-[#362723] px-6 py-3 lg:text-xl sm:text-base font-semibold rounded-md"
          >
            Join Snaggle
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinSnaggle;
