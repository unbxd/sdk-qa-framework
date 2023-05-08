import React from "react";
import DashboardHeader from "./DashboadHeader";
import DashboardContent from "./DashboardContent";

const DashboardWrapper = (props) => {
	const { viewConfigOption = false, reloadWarning = true } = props;

	return (
		<div className="dashboardWrapper">
			{viewConfigOption && (
				<DashboardHeader viewConfigOption={viewConfigOption} />
			)}
			<DashboardContent
				viewConfigOption={viewConfigOption}
				reloadWarning={reloadWarning}
			/>
		</div>
	);
};

export default DashboardWrapper;
