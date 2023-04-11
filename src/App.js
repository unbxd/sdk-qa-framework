import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "unbxd-react-components/components/theme.css";
import "unbxd-react-components/components/core.css";
import "../public/styles/components/form/form.scss";
import "../public/styles/components/vanilla2/vanilla2.scss";
import "../public/styles/components/general.scss";
// import "../public/styles/components/vanilla2.scss";

import DashboardWrapper from "./components/dashboardComponents/DashboardWrapper";
import Lander from "./components/landerComponents/Lander";

const App = (props) => {
	return (
		<Routes>
			<Route
				exact
				path="builder"
				element={
					<DashboardWrapper viewConfigOption={true} routePath="builder" />
				}

				// Component={<DashboardWrapper viewConfigOption={true} />}
			/>
			<Route
				exact
				path="qa"
				element={<DashboardWrapper viewConfigOption={false} routePath="qa" />}
			/>
			<Route exact path="" element={<Lander />} />
			{/* <Route path="/builder" element={<h1>Builder Page</h1>} /> */}
		</Routes>
	);
};
// const App = (props) => {
// 	return <DashboardWrapper />;
// };

export default App;
