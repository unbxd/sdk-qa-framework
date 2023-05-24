import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "unbxd-react-components/components/theme.css";
import "unbxd-react-components/components/core.css";
import "../public/styles/components/general.scss";

import DashboardWrapper from "./components/dashboardComponents/DashboardWrapper";
import Lander from "./components/landerComponents/Lander";
import LanderUseCases from "./components/landerComponents/LanderUseCases";

const App = (props) => {
	const displayError = (message, module) => {
		if (module === undefined) {
			toast.error(message, {
				position: "top-right",
			});
		} else {
			toast.error(`${module}: ${message}`, {
				position: "top-right",
			});
		}
	};

	const displaySuccess = (message) => {
		toast.success(message, {
			position: "top-right",
		});
	};

	const displayInfo = (message) => {
		toast.warning(message, {
			position: "top-right",
		});
	};

	return (
		<BrowserRouter>
			<ToastContainer />
			<Routes>
				<Route exact path="" element={<Lander />} />
				<Route path="/usecases" element={<LanderUseCases />} />
				<Route
					path="builder/:siteKey?/:configKey?"
					element={
						<DashboardWrapper
							displayError={displayError}
							displaySuccess={displaySuccess}
							displayInfo={displayInfo}
							viewConfigOption={true}
							reloadWarning={true}
						/>
					}
				/>
				<Route
					path="preview/:siteKey?/:configKey?"
					element={
						<DashboardWrapper
							displayError={displayError}
							displaySuccess={displaySuccess}
							viewConfigOption={false}
							reloadWarning={false}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
