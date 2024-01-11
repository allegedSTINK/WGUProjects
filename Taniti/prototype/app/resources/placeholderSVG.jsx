import React from 'react';

const PlaceholderSVG = () => (
  <figure className="border-2 border-black">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 750" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#cccccc"></rect>
  
  {/* Diagonal lines from top-left to bottom-right */}
  <line x1="0" y1="0" x2="100%" y2="100%" stroke="#333333" strokeWidth="2" />

  {/* Diagonal lines from top-right to bottom-left */}
  <line x1="100%" y1="0" x2="0" y2="100%" stroke="#333333" strokeWidth="2" />

  <text
    x="50%"
    y="50%"
    dominantBaseline="middle"
    textAnchor="middle"
    fontFamily="monospace"
    fontSize="26px"
    fill="#333333"
  >
    Placeholder SVG
  </text>
</svg>

  </figure>
);

export default PlaceholderSVG;