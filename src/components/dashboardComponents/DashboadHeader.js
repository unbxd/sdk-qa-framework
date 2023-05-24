import React from "react";

import "../../../public/styles/components/dashboard/header.scss";

const DashboardHeader = (props) => {
	return (
		<div className="dashHead">
			<div className="desc">
				<a className="logoWrapper" href="/">
					<div className="logo"></div>
				</a>
				<h1>SDK WORKBENCH</h1>
			</div>
			<div className="userConfigs">
				<a
					className="version"
					href="https://unbxd.github.io/search-JS-library/docs/CHANGELOG.html#v2030"
					target="_blank"
				>
					v2.0.30
				</a>
				<a href="https://unbxd.github.io/search-JS-library/" target="_blank">
					Documentation
				</a>
			</div>
		</div>
	);
};

export default DashboardHeader;
