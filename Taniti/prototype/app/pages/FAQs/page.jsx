"use client";
import React from "react";
import NavBar from "@/app/components/header/nav/NavBar";
import Footer from "@/app/components/footer/Footer";
import SectionWithClass from "@/app/components/sections/SectionWithClass";
import MediumCard from "@/app/components/cards/MediumCard";
import PlaceholderSVG from "@/app/resources/placeholderSVG";

const placeholderSVG = <PlaceholderSVG />;

const FAQ = () => {
	return (
		<div>
			<NavBar />
			<div className="container flex flex-col mx-auto my-10 p-10">
				<SectionWithClass //prettier-ignore
					title={"Lodging"}
					body={
						"Almost all visitors arrive in Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the  next few year. "
					}
					classes={"mt-10"}
				/>
				<hr />
				{null}
				<hr />
			</div>
			<Footer />
		</div>
	);
};

export default FAQ;
