import React from "react";
import DashboardHeader from "./DashboadHeader";
import DashboardContent from "./DashboardContent";

const DashboardWrapper = (props) => {
	const {
		viewConfigOption = false,
		reloadWarning = true,
		displayError,
	} = props;

	return (
		<div className="dashboardWrapper">
			{viewConfigOption && (
				<DashboardHeader viewConfigOption={viewConfigOption} />
			)}
			<DashboardContent
				displayError={displayError}
				viewConfigOption={viewConfigOption}
				reloadWarning={reloadWarning}
			/>
		</div>
	);
};

export default DashboardWrapper;
