import React, { useState, useEffect } from "react";
import axios from "axios";
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
	// axios.get("http://localhost:5000/upload").then((res) => {
	// 	console.log("default upload data:", res.data);
	// });

	// axios.get("http://localhost:5000/upload/123").then((res) => {
	// 	console.log("custom upload data:", res.data);
	// });
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
					path="builder/:id"
					element={
						<DashboardWrapper viewConfigOption={true} reloadWarning={true} />
					}
				/>
				<Route
					path="qa"
					element={
						<DashboardWrapper viewConfigOption={false} reloadWarning={false} />
					}
				/>
				<Route
					exact
					path="qa/:id"
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
