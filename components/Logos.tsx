import React from "react";

const Logos: React.FC = () => {
  return (
    <div className="flex items-center gap-8 opacity-60 grayscale mix-blend-screen">
      <LogoItem text="React" />
      <LogoItem text="Three.js" />
      <LogoItem text="TypeScript" />
    </div>
  );
};

const LogoItem: React.FC<{text: string}> = ({text}) => (
  <svg
    width="100"
    height="30"
    viewBox="0 0 100 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-auto text-[#7c73ff]"
  >
     {/* Abstract Script Representation */}
    <path
      d="M14.5 5L9 15L3.5 5H0.5L7.5 18L17.5 0L20 5H14.5Z"
      fill="currentColor"
    />
     <circle cx="8" cy="10" r="8" fill="currentColor" fillOpacity="0.5"/>
     <text x="25" y="20" fill="currentColor" fontFamily="Inter" fontWeight="bold" fontSize="16">{text}</text>
  </svg>
);

export default Logos;
