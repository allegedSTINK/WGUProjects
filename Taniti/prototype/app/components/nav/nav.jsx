"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Nav = () => {
	const router = useRouter();

	return (
		<div>
			<Link //prettier-ignore
				className={router.pathname === "/" ? "active" : ""}
				style={{ fontVariant: "small-caps" }}
				href="/">
				Home
			</Link>
			<Link //prettier-ignore
				className={router.pathname === "/lodging" ? "active" : ""}
				style={{ fontVariant: "small-caps" }}
				href="/pages/lodging">
				Lodging
			</Link>
			<Link //prettier-ignore
				className={router.pathname === "/transportation" ? "active" : ""}
				style={{ fontVariant: "small-caps" }}
				href="/pages/transportation">
				Transportation
			</Link>
			<Link //prettier-ignore
				className={router.pathname === "/food" ? "active" : ""}
				style={{ fontVariant: "small-caps" }}
				href="/pages/food">
				Food
			</Link>
			<Link //prettier-ignore
				className={router.pathname === "/attractions" ? "active" : ""}
				style={{ fontVariant: "small-caps" }}
				href="/pages/attractions">
				Attractions
			</Link>
			<Link //prettier-ignore
				className={router.pathname === "/faq" ? "active" : ""}
				style={{ fontVariant: "small-caps" }}
				href="/pages/faq">
				FAQs
			</Link>
		</div>
	);
};

export default Nav;
