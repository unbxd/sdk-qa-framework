import React, { useState } from "react";
import { Input, Button } from "unbxd-react-components";

import "../../../public/styles/components/dashboard/header.scss";

const DashboardHeader = (props) => {
	const { viewConfigOption } = props;
	return viewConfigOption ? (
		<div className="dashHead">
			<div className="desc">
				<a className="logoWrapper" href="/">
					<div className="logo"></div>
				</a>
				<h1>SDK WORKBENCH</h1>
			</div>
			{/* <img
				src="https://thenounproject.com/api/private/icons/3883374/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%233B6BF9&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkUjCBv0Vz_FnXV993LNTF_MmPVNg0rNcguenxV_FWELC3ZhcFMi5ew9JFLNXHS5uloKkrHnclx8YlVD11iCRTVWpblA%3D%3D"
				style={{ width: "30px", height: "30px" }}
			/> */}
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
	) : (
		""
	);
};

export default DashboardHeader;
