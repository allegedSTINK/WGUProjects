"use client";
import React from "react";
import NavBar from "@/app/components/header/nav/NavBar";
import SingleParagraphSection from "@/app/components/sections/SingleParagraphSection";
import SectionWithClass from "@/app/components/sections/SectionWithClass";
import MediumCard from "@/app/components/cards/MediumCard";
import Footer from "@/app/components/footer/Footer";

const placeholderSVG = (
	<div className="border-2 border-black">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 350" width="200" height="350">
			<rect width="200" height="350" fill="#cccccc"></rect>
			<text
				x="50%"
				y="50%"
				dominant-baseline="middle"
				text-anchor="middle"
				font-family="monospace"
				font-size="26px"
				fill="#333333">
				Image
			</text>
		</svg>
	</div>
);

const BedAndBreakfastList = [
	{
		title: "BnB 1",
		body: placeholderSVG,
		buttonText: "Info",
	},
	{
		title: "BnB 2",
		body: placeholderSVG,
		buttonText: "Info",
	},
	{
		title: "BnB 3",
		body: placeholderSVG,
		buttonText: "Info",
	},
];

const FamilyOwnedInnList = [
	{
		title: "Inn 1",
		body: placeholderSVG,
		buttonText: "Info",
	},
	{
		title: "Inn 2",
		body: placeholderSVG,
		buttonText: "Info",
	},
	{
		title: "Inn 3",
		body: placeholderSVG,
		buttonText: "Info",
	},
];

const AffordableHostelList = [
	{
		title: "Hostel 1",
		body: placeholderSVG,
		buttonText: "Info",
	},
	{
		title: "Hostel 2",
		body: placeholderSVG,
		buttonText: "Info",
	},
	{
		title: "Hostel 3",
		body: placeholderSVG,
		buttonText: "Info",
	},
];

const Lodging = () => {
	return (
		<div className="">
			<NavBar />
			<div className="container flex flex-col mx-auto">
				<SingleParagraphSection
					title={"4-Star Resort"}
					body={
						"Taniti has a wide variety of lading that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government."
					}
				/>
				<br />
				<SectionWithClass //prettier-ignore
					title={"Bed and Breakfast"}
					body={BedAndBreakfastList.map(({ title, body, buttonText }) => (
						<MediumCard key={title} title={title} body={body} buttonText={buttonText} />
					))}
					classes={"flex flex-wrap justify-between"}
				/>
				<br />
				<SectionWithClass //prettier-ignore
					title={"Family Owned Inns"}
					body={FamilyOwnedInnList.map(({ title, body, buttonText }) => (
						<MediumCard key={title} title={title} body={body} buttonText={buttonText} />
					))}
					classes={"flex flex-wrap justify-between"}
				/>
				<br />
				<SectionWithClass //prettier-ignore
					title={"Affordable Hostels"}
					body={AffordableHostelList.map(({ title, body, buttonText }) => (
						<MediumCard key={title} title={title} body={body} buttonText={buttonText} />
					))}
					classes={"flex flex-wrap justify-between"}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Lodging;
