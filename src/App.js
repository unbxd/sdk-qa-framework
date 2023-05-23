import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import "unbxd-react-components/components/theme.css";
import "unbxd-react-components/components/core.css";
// import "../public/unbxdStyle.css";
// import "../public/styles/components/vanilla2/vanilla2.scss";
// import "../public/styles/components/dashboard/header.scss";
import "../public/styles/components/general.scss";
// import "../public/styles/components/vanilla2.scss";

import DashboardWrapper from "./components/dashboardComponents/DashboardWrapper";
import Lander from "./components/landerComponents/Lander";
import LanderUseCases from "./components/landerComponents/LanderUseCases";

const App = (props) => {
	const displayError = (message) => {
		// toast.configure();
		console.log(message);
		toast.error(message, {
			position: "top-right",
		});
	};
	return (
		<BrowserRouter>
			<ToastContainer />
			<Routes>
				<Route exact path="" element={<Lander />} />
				<Route path="/usecases" element={<LanderUseCases />} />
				{/* <Route
					path="builder"
					// Component={DashboardWrapper}
					element={
						<DashboardWrapper viewConfigOption={true} reloadWarning={true} />
					}
				/> */}
				<Route
					path="builder/:siteKey?/:configKey?"
					element={
						<DashboardWrapper
							displayError={displayError}
							viewConfigOption={true}
							reloadWarning={true}
						/>
					}
				/>
				{/* <Route
					path="preview"
					element={
						<DashboardWrapper viewConfigOption={false} reloadWarning={false} />
					}
				/> */}
				<Route
					path="preview/:siteKey?/:configKey?"
					element={
						<DashboardWrapper
							displayError={displayError}
							viewConfigOption={false}
							reloadWarning={false}
						/>
					}
				/>
				{/* <Route exact path="/" Component={Lander} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
