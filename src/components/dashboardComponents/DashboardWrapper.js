import React, { useState } from "react";
import DashboardHeader from "./DashboadHeader";
import DashboardContent from "./DashboardContent";

const DashboardWrapper = (props) => {
	const {
		viewConfigOption = false,
		reloadWarning = true,
		displayMessage,
	} = props;

	const [sdkversion, setSdkVersion] = useState();

	return (
		<div className="dashboardWrapper">
			{viewConfigOption && (
				<DashboardHeader
					viewConfigOption={viewConfigOption}
					setSdkVersion={setSdkVersion}
				/>
			)}
			<DashboardContent
				displayMessage={displayMessage}
				viewConfigOption={viewConfigOption}
				reloadWarning={reloadWarning}
			/>
		</div>
	);
};

export default DashboardWrapper;
