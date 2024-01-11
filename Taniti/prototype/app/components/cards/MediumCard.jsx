import React from "react";
import Button from "./Button";

const MediumCard = ({ title, body, buttonText }) => {
	return (
		<div className="card relative my-10">
			<h4 className="ms-3 mb-1 font-bold">{title}</h4>
			{body}
			<div className="absolute right-10 bottom-10">
				<Button label={buttonText} />
			</div>
		</div>
	);
};

export default MediumCard;
