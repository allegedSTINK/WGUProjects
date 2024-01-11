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
				<h1>Attractions</h1>
				<SectionWithClass //prettier-ignore
					title={""}
					body={
						"Most people visit Taniti to enjoy the beaches, explore the rainforest, and visit the volcano., However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the  rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow leaf Bay. Most Tourist spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay. "
					}
					classes={"font-bold mt-10"}
				/>
				<hr />
				<h2>Nature</h2>
				<SectionWithClass
					title={"Beaches"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Beach ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Rainforest Destinations"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Destination ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Volcanic Lookouts"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Lookout ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<h2>Culture</h2>
				<SectionWithClass
					title={"History and Architecture"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Location ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Art and Mueseums"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Art/ Museum ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Tours and Festivals"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Tour/ Festival ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<h2>Recreation</h2>
				<SectionWithClass
					title={"Golf"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Golf/ Countryclub ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Helicopter Rides"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Company ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Arcades and Bowling"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Arcade/ Alley ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<h2>Pubs and Clubs</h2>
				<SectionWithClass
					title={"Pubs"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Pub/ Microbrewery ${index + 1}`}
							body={placeholderSVG}
							buttonText={"Info"}
						/>
					))}
					classes={"flex flex-wrap justify-around mb-5"}
				/>
				<hr />
				<SectionWithClass
					title={"Clubs"}
					body={new Array(3).fill(undefined).map((_, index) => (
						<MediumCard
							key={index}
							title={`Club ${index + 1}`}
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
