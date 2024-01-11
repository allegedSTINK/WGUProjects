"use client";
import React from "react";
import NavBar from "./components/header/nav/NavBar";
import Footer from "./components/footer/Footer";
import Hero from "./components/header/hero/Hero";

export default function Home() {
	return (
		<div className="flex flex-col absolute w-screen">
			<NavBar />
			<div className="min-h-screen">
				<Hero />
			</div>
			<Footer />
		</div>
	);
}
