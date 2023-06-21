import React from "react";

import "../../../public/styles/components/dashboard/header.scss";
import CustomDrop from "../formComponents/formElements/CustomDrop";

const DashboardHeader = (props) => {
	// const { setSdkVersion } = props;

	return (
		<div className="dashHead">
			<div className="desc">
				<a className="logoWrapper" href="/">
					<div className="logo"></div>
				</a>
				<h1>SDK WORKBENCH</h1>
			</div>
			<div className="userConfigs">
				<a href="https://unbxd.github.io/search-JS-library/" target="_blank">
					View Documentation
				</a>
				{/* <CustomDrop
					appearance="block"
					halign="left"
					className="version"
					name="version"
					options={[
						{
							id: 1,
							name: "v2.0.38",
						},
						{
							id: 2,
							name: "v2.0.37",
						},
						{
							id: 3,
							name: "v2.0.36",
						},
					]}
					onChange={(id) => setSdkVersion(id.name)}
				/> */}
			</div>
		</div>
	);
};

export default DashboardHeader;
