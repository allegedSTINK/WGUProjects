"use client";
import React from "react";
import NavBar from "./components/header/nav/NavBar";

export default function Home() {
	return (
		<div>
			<NavBar />
			<div className="container flex flex-col mx-auto">
				<h1>This is a page!</h1>
			</div>
		</div>
	);
}
