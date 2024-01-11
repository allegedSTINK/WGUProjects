import React from "react";

const Hero = () => {
	return (
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" height="100%">
				<rect width="100%" height="100%" fill="#cccccc"></rect>
				<text
					x="50%"
					y="50%"
					dominant-baseline="middle"
					text-anchor="middle"
					font-family="monospace"
					font-size="26px"
					fill="#333333">
					Hero Image
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
