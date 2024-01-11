import React from 'react';

const PlaceholderSVG = () => (
  <figure className="border-2 border-black">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 350"
      width="100%"
      height="auto"
      style={{ maxWidth: "100%", height: "auto" }}
    >
      <rect width="200" height="350" fill="#cccccc"></rect>
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-family="monospace"
        font-size="26px"
        fill="#333333"
      >
        Image
      </text>
    </svg>
  </figure>
);

export default PlaceholderSVG;