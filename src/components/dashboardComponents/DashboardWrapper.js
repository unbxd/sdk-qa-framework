import React from "react";
import DashboardHeader from "./DashboadHeader";
import DashboardContent from "./DashboardContent";

const DashboardWrapper = (props) => {
	const { viewConfigOption = false, routePath } = props;
	const defaultURL = `http://localhost:3030/${routePath}`;
	if (window.location.href === defaultURL) {
		window.location.replace(
			`http://localhost:3030/${routePath}?q=*&rows=12&start=0`
		);
	}

	return (
		<div className="dashboardWrapper">
			<DashboardHeader viewConfigOption={viewConfigOption} />
			<DashboardContent viewConfigOption={viewConfigOption} />
		</div>
	);
};

export default DashboardWrapper;
