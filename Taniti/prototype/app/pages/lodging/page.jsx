"use client";
import React from "react";
import NavBar from "@/app/components/header/nav/NavBar";
import SectionWithClass from "@/app/components/sections/SectionWithClass";
import MediumCard from "@/app/components/cards/MediumCard";
import Footer from "@/app/components/footer/Footer";
import PlaceholderSVG from "@/app/resources/placeholderSVG";

const placeholderSVG = <PlaceholderSVG />;

const Lodging = () => {
	return (
		<div className="">
			<NavBar />
			<div className="container flex flex-col mx-auto my-10 p-10 min-h-screen">
				<SectionWithClass //prettier-ignore
					title={"Lodging"}
					body={
						"Taniti has a wide variety of lading that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government."
					}
					classes={"mt-10"}
				/>
				<hr />
				<SectionWithClass
					title={"4-Star Resort"}
					body={new Array(1).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Resort ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				
				<hr />
				<SectionWithClass
					title={"Bed and Breakfasts"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Bed and Breakfast ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Family Owned Inns"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Inn ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Affordable Hostels"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Hostel ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Lodging;
