import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "unbxd-react-components/components/theme.css";
import "unbxd-react-components/components/core.css";
import "../public/styles/components/general.scss";

import DashboardWrapper from "./components/dashboardComponents/DashboardWrapper";
import Lander from "./components/landerComponents/Lander";
import LanderUseCases from "./components/landerComponents/LanderUseCases";

const App = (props) => {
	const displayMessage = (type, message, module) => {
		if (type === "error") {
			if (module === undefined) {
				toast.error(message, {
					position: "top-right",
				});
			} else {
				toast.error(`${module}: ${message}`, {
					position: "top-right",
				});
			}
		} else if (type === "success") {
			toast.success(message, {
				position: "top-right",
			});
		} else if (type === "info") {
			toast.warning(message, {
				position: "top-right",
			});
		}
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
							displayMessage={displayMessage}
							viewConfigOption={true}
							reloadWarning={true}
						/>
					}
				/>
				<Route
					path="preview/:siteKey?/:configKey?"
					element={
						<DashboardWrapper
							displayMessage={displayMessage}
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
