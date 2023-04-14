import React from "react";
import { useNavigate } from "react-router-dom";

const LanderHeader = () => {
	const navigate = useNavigate();
	const navigateHome = () => {
		navigate("/");
	};
	return (
		<div className="landerHeader">
			<div className="logo">
				<img
					src="netcore-unbxd-logo.png"
					className="header-logo"
					onClick={navigateHome}
				/>
			</div>
			<div className="userConfigsLander">
				<a href="/">Home</a>
				<a href="/usecases">Use Cases</a>
				<a href="/builder">Builder</a>
				<a href="/qa">Preview</a>
				<a href="https://unbxd.github.io/search-JS-library/" target="_blank">
					Documentation
				</a>
			</div>
		</div>
	);
};

export default LanderHeader;
