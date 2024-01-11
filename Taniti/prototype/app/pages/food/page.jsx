"use client";
import React from "react";
import NavBar from "@/app/components/header/nav/NavBar";
import Footer from "@/app/components/footer/Footer";
import SectionWithClass from "@/app/components/sections/SectionWithClass";
import MediumCard from "@/app/components/cards/MediumCard";
import PlaceholderSVG from "@/app/resources/placeholderSVG";

const placeholderSVG = <PlaceholderSVG />;

const Food = () => {
	return (
		<div>
			<NavBar />
			<div className="container flex flex-col mx-auto my-10 p-10">
				<SectionWithClass //prettier-ignore
					title={"Food"}
					body={
						"Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine. Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day. "
					}
					classes={"mt-10"}
				/>
				<hr />
				<SectionWithClass
					title={"Local Fish and Rice"}
					body={new Array(5).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Restaurant ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"American-style"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Restaurant ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Pan-Asian Cuisine"}
					body={new Array(2).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Restaurant ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Supermarkets"}
					body={new Array(2).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Supermarket ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Small Grocery Stores"}
					body={new Array(5).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Grocery Store ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Convenience"}
					body={new Array(5).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Convenience Store ${index + 1}`}
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

export default Food;
