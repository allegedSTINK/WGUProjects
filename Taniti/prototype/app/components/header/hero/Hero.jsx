import React from "react";

const Hero = () => {
	return (
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" width="100%" height="100%">
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
    Placeholder Hero SVG
  </text>
</svg>

			<div className="container absolute top-1/3 left-1/2 -translate-x-1/2">
				<span className="block leading-loose text-5xl text-black font-semibold">
					Dive into Taniti&apos;s Paradise! Subscribe now for exclusive travel tips, insider guides, and special offers - your passport to the hidden gems of this tropical haven awaits with just a single click!
				</span>

				<div className="button absolute text-5xl -bottom-1/3 right-1/4">Subscribe</div>
			</div>
		</div>
	);
};

export default Hero;
