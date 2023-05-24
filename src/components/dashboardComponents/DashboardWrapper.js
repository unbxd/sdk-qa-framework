import React from "react";
import DashboardHeader from "./DashboadHeader";
import DashboardContent from "./DashboardContent";

const DashboardWrapper = (props) => {
	const {
		viewConfigOption = false,
		reloadWarning = true,
		displayError,
		displaySuccess,
		displayInfo,
	} = props;

	return (
		<div className="dashboardWrapper">
			{viewConfigOption && (
				<DashboardHeader viewConfigOption={viewConfigOption} />
			)}
			<DashboardContent
				displayError={displayError}
				displaySuccess={displaySuccess}
				displayInfo={displayInfo}
				viewConfigOption={viewConfigOption}
				reloadWarning={reloadWarning}
			/>
		</div>
	);
};

export default DashboardWrapper;
