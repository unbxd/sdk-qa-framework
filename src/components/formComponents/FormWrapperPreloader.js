import React from "react";

const FormWrapperPreloader = (props = {}) => {
	const { name = "", dataType = "", required = false, docLink = "" } = props;
	return (
		<div className="preloader">
			<div className="metadata">
				<h1 className="title">{name}</h1>
				<span className="datatype">{dataType}</span>
				{required && <span className="required">required</span>}
			</div>
			<div className="link">
				<a
					className="doclink"
					href={docLink + "#" + name.toLowerCase()}
					target="_blank"
				></a>
			</div>
		</div>
	);
};

export default FormWrapperPreloader;
