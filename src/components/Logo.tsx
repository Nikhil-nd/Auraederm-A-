import React from 'react';

interface LogoProps {
  className?: string;
  iconSize?: number;
  textColor?: string;
  subColor?: string;
}

export default function Logo({
  className = '',
  iconSize = 34,
  textColor = 'text-[#8c1d5c]',
  subColor = 'text-[#8c1d5c]'
}: LogoProps) {
  return (
    <div id="clinic-logo" className={`flex items-center select-none ${className}`}>
      {/* Hand-crafted, pixel-perfect SVG that represents the customized Auraederm logo */}
      {/* Specifically, the bird icon is integrated as the left side of the letter "A" */}
      <svg
        width={iconSize * 1.2}
        height={iconSize}
        viewBox="0 0 80 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 -mr-1"
      >
        {/* Bird-A Logo Silhouette */}
        {/* Head of the bird */}
        <circle cx="43.5" cy="19.5" r="1.5" fill="currentColor" className="text-[#8c1d5c]" />
        
        {/* Bird beak */}
        <path
          d="M45.5 18C47 18 48.5 17 50 15.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#8c1d5c]"
        />

        {/* Bird Wings (Swooping elegantly to the left) */}
        {/* Upper wing feather */}
        <path
          d="M39 21.5C28 14.5 14.5 17 5 24C12.5 23.5 23.5 22.5 32 24.5"
          fill="currentColor"
          className="text-[#8c1d5c]"
        />
        {/* Middle wing feather */}
        <path
          d="M34.5 28.5C23.5 24.5 11 31.5 3 41C10.5 37.5 21 32 28.5 31"
          fill="currentColor"
          className="text-[#8c1d5c]"
        />
        {/* Lower wing feather */}
        <path
          d="M31.5 34.5C22.5 33.5 11.5 43.5 6.5 54.5C13 48.5 21 41.5 26.5 37.5"
          fill="currentColor"
          className="text-[#8c1d5c]"
        />

        {/* Bird Body & Tail / forms the left-hand swoop leg of "A" */}
        <path
          d="M44 24.5C38 31 32 40 27 50C23 58 20.5 64.5 21 66.5C21.5 68.5 24 69 26.5 68.5C29 68 32.5 64.5 35 60.5C37.5 56.5 39.5 51 41 46"
          fill="currentColor"
          className="text-[#8c1d5c]"
        />

        {/* Right leg of "A" (Elegant diagonal serif leg) */}
        <path
          d="M43 23L56.5 66"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          className="text-[#8c1d5c]"
        />
        {/* Right leg serif foot */}
        <path
          d="M52 66.5H61"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="text-[#8c1d5c]"
        />

        {/* Crossbar of the "A" */}
        <path
          d="M31.5 48.5H48"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="text-[#8c1d5c]"
        />
      </svg>

      <div className="flex items-center">
        {/* Remaining letters "uraederm" in elegant Playfair Display Serif font */}
        <span 
          className={`font-serif text-2xl font-semibold tracking-tight leading-none -ml-1 ${textColor}`}
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          uraederm
        </span>
        
        {/* Spacer / Divider */}
        <div className="h-8 w-[1.5px] bg-[#8c1d5c]/20 mx-3"></div>
        
        {/* "SKIN SOLUTIONS" text in smaller all-caps Montserrat sans-serif */}
        <div className={`flex flex-col justify-center leading-[0.95] tracking-[0.06em] font-display ${subColor}`}>
          <span className="text-[10px] font-bold">SKIN</span>
          <span className="text-[10px] font-extrabold">SOLUTIONS</span>
        </div>
      </div>
    </div>
  );
}

