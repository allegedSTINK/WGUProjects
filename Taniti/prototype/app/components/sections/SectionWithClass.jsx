import React from "react";

const SectionWithClass = ({ title, body, classes, containerClass = "" }) => {
	return (
		<div className={containerClass}>
			<h2 className="ms-5 mb-10">{title}</h2>
			<div className={classes}>{body}</div>
		</div>
	);
};

export default SectionWithClass;
