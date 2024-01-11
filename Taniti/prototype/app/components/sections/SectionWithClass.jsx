import React from "react";

const SectionWithClass = ({ title, body, classes, containerClass = "" }) => {
	return (
		<div className={containerClass}>
			<h3 className="ms-5 mb-10">{title}</h3>
			<div className={classes}>{body}</div>
		</div>
	);
};

export default SectionWithClass;
