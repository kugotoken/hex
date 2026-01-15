import React from 'react';

interface HexLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const HexLogo: React.FC<HexLogoProps> = ({ className = "", width = 200, height = 200 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="100" cy="100" r="95" fill="#1E2329"/>
      
      <circle cx="100" cy="100" r="85" fill="none" stroke="#F0B90B" strokeWidth="10"/>
      
      <path d="M100 55 L139 77.5 V122.5 L100 145 L61 122.5 V77.5 L100 55 Z" 
            fill="none" 
            stroke="#F0B90B" 
            strokeWidth="10" 
            strokeLinejoin="round"/>
            
      <path d="M100 55 V145 M61 77.5 L139 122.5 M139 77.5 L61 122.5" 
            fill="none" 
            stroke="#F0B90B" 
            strokeWidth="6" 
            strokeLinecap="round"/>
            
      <circle cx="100" cy="100" r="15" fill="#F0B90B"/>
    </svg>
  );
};