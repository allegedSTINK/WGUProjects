"use client";
import React from "react";
import NavBar from "@/app/components/header/nav/NavBar";
import Footer from "@/app/components/footer/Footer";
import SectionWithClass from "@/app/components/sections/SectionWithClass";
import MediumCard from "@/app/components/cards/MediumCard";
import PlaceholderSVG from "@/app/resources/placeholderSVG";

const placeholderSVG = <PlaceholderSVG />;

const Transportation = () => {
	return (
		<div>
			<NavBar />
			<div className="container flex flex-col mx-auto my-10 p-10">
				<SectionWithClass //prettier-ignore
					title={"Transportation"}
					body={
						"Almost all visitors arrive in Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the  next few year. "
					}
					classes={"mt-10"}
				/>
				<hr />
				<SectionWithClass
					title={"Public Transit"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Bus/Taxi ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Private Rentals"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Car/Bike/Bus ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Cruise Liner"}
					body={new Array(1).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`SS Taniti ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Private Jet Charters"}
					body={new Array(2).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Jet Charter ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Private Prop Charters"}
					body={new Array(2).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Prop Charter ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
			</div>
			<Footer />
		</div>
	);
};

export default Transportation;
