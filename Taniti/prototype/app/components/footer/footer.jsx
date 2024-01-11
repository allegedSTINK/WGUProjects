"use client";
import React from "react";

const handleSubmit = (event) => {
	event.preventDefault();
};

const subscribeAlert = () => {
	const input = alert("Subscribed!");
};

const Footer = () => {
	return (
		<div className="w-full h-auto bg-slate-300 flex flex-col items-center px-5 py-3 footer-shadow">
			<div className="flex flex-col items-center">
				<h3 className="mb-3">Subscribe to our Newsletter!</h3>
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">
						<input
							className="px-3 py-1 rounded-s-md input-field"
							style={{}}
							id="email"
							name="email"
							value={null}
							placeholder="email@email.com"></input>
					</label>
					<button
						className="px-3 py-1 rounded-e-md font-bold submit-button"
						onClick={subscribeAlert}>
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
};

export default Footer;
