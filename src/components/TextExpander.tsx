import React, { useState } from "react";

const TextExpander: React.FC<{ children: string }> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  
  const text = isExpanded
    ? children
    : `${children.split(" ").slice(0, 60).join(" ")}...`;

  return (
    <div className="leading-relaxed">
      <p className="text-sm sm:text-base md:text-lg">{text}</p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 text-xs sm:text-sm md:text-base"
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default TextExpander;
