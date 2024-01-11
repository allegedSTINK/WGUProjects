"use client";
import React from "react";
import NavBar from "@/app/components/header/nav/NavBar";
import Footer from "@/app/components/footer/Footer";
import SectionWithClass from "@/app/components/sections/SectionWithClass";
import MediumCard from "@/app/components/cards/MediumCard";
import PlaceholderSVG from "@/app/resources/placeholderSVG";

const placeholderSVG = <PlaceholderSVG />;

const Attractions = () => {
	return (
		<div>
			<NavBar />
			<div className="container flex flex-col mx-auto my-10 p-10">
				<SectionWithClass //prettier-ignore
					title={"Attractions"}
					body={
						"Most people visit Taniti to enjoy the beaches, explore the rainforest, and visit the volcano., However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the  rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course shou7ld be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow leaf Bay. Most Tourist spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay. "
					}
					classes={"mt-10"}
				/>
				<hr />
				<SectionWithClass
					title={"undefined"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`undefined ${index + 1}`}
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

export default Attractions;
