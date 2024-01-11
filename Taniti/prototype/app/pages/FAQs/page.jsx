"use client";
import React from "react";
import NavBar from "@/app/components/header/nav/NavBar";
import Footer from "@/app/components/footer/Footer";
import SectionWithClass from "@/app/components/sections/SectionWithClass";
import MediumCard from "@/app/components/cards/MediumCard";
import PlaceholderSVG from "@/app/resources/placeholderSVG";
import { QAList as faqs } from "./QA";

const placeholderSVG = <PlaceholderSVG />;
const FAQ = () => {
	return (
		<div>
			<NavBar />
			<div className="container flex flex-col mx-auto my-10 p-10">
				<h1>FAQs</h1>
				<SectionWithClass //prettier-ignore
					title={""}
					body={
						"Welcome to the FAQs page for Taniti! We understand that planning your trip can bring up a lot of questions, and we're here to provide you with all the information you need to make your journey to our beautiful island a seamless and unforgettable experience."
					}
					classes={"font-bold mt-10"}
				/>
				<hr />
				{faqs.map(({ question, answer }, index) => (
					<SectionWithClass key={index} title={question} body={answer} classes={"font-bold my-5"} />
				))}
			</div>
			<Footer />
		</div>
	);
};

export default FAQ;
