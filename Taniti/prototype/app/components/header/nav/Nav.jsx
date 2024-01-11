"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
	const pathname = usePathname();

	return (
		<div className="w-1/2 flex justify-between items-end pe-10 text-xl font-semibold">
			<div className="block">
				<Link //prettier-ignore
					className={pathname === "/" ? "active" : ""}
					style={{ fontVariant: "small-caps" }}
					href="/">
					Home
				</Link>
			</div>
			<div className="block">
				<Link //prettier-ignore
					className={pathname === "/pages/Lodging" ? "active" : ""}
					style={{ fontVariant: "small-caps" }}
					href="/pages/Lodging">
					Lodging
				</Link>
			</div>
			<div className="block">
				<Link //prettier-ignore
					className={pathname === "/pages/Transportation" ? "active" : ""}
					style={{ fontVariant: "small-caps" }}
					href="/pages/Transportation">
					Transportation
				</Link>
			</div>
			<div className="block">
				<Link //prettier-ignore
					className={pathname === "/pages/Food" ? "active" : ""}
					style={{ fontVariant: "small-caps" }}
					href="/pages/Food">
					Food
				</Link>
			</div>
			<div className="block">
				<Link //prettier-ignore
					className={pathname === "/pages/Attractions" ? "active" : ""}
					style={{ fontVariant: "small-caps" }}
					href="/pages/Attractions">
					Attractions
				</Link>
			</div>
			<div className="block">
				<Link //prettier-ignore
					className={pathname === "/pages/FAQs" ? "active" : ""}
					style={{ fontVariant: "small-caps" }}
					href="/pages/FAQs">
					FAQs
				</Link>
			</div>
		</div>
	);
};

export default Nav;
