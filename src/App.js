import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import "unbxd-react-components/components/theme.css";
import "unbxd-react-components/components/core.css";
import "../public/styles/components/form/form.scss";
// import "../public/styles/components/vanilla2/vanilla2.scss";
// import "../public/styles/components/dashboard/header.scss";
import "../public/styles/components/general.scss";
// import "../public/styles/components/vanilla2.scss";

import DashboardWrapper from "./components/dashboardComponents/DashboardWrapper";
import Lander from "./components/landerComponents/Lander";
import LanderUseCases from "./components/landerComponents/LanderUseCases";

const App = (props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="" element={<Lander />} />
				<Route path="/usecases" element={<LanderUseCases />} />
				<Route
					path="builder"
					// Component={DashboardWrapper}
					element={
						<DashboardWrapper viewConfigOption={true} reloadWarning={true} />
					}
				/>
				<Route
					exact
					path="builder/:siteKey/:configKey"
					element={
						<DashboardWrapper viewConfigOption={true} reloadWarning={true} />
					}
				/>
				<Route
					path="preview"
					element={
						<DashboardWrapper viewConfigOption={false} reloadWarning={false} />
					}
				/>
				<Route
					exact
					path="preview/:siteKey/:configKey"
					element={
						<DashboardWrapper viewConfigOption={false} reloadWarning={false} />
					}
				/>
				{/* <Route exact path="/" Component={Lander} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
