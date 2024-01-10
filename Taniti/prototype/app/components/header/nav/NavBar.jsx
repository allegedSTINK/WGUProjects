import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";

const NavBar = () => {
	return (
		<div className="flex bg-slate-300 justify-between mb-10 pb-2 nav-shadow sticky top-0 z-50 w-full">
			<Logo />
			<Nav />
		</div>
	);
};

export default NavBar;
