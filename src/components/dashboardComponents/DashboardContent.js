import React, { useEffect, useState } from "react";
import Vanilla2 from "../externalHTMLComponents/Vanilla2";
import FormBuilder from "../formComponents/FormBuilder";
import useDeepCompareEffect from "use-deep-compare-effect";
import { useParams } from "react-router-dom";
import axios from "axios";

const DashboardContent = (props) => {
	const { viewConfigOption, reloadWarning = true, displayError } = props;

	const [validatedConfig, setValidatedConfig] = useState({});
	// let retreivedConfig = {};
	// let [refreshCount, setRefreshCount] = useState(0);
	// const [errorSet, setErrorSet] = useState(new Set());

	// const { siteKey, configKey } = useParams();
	// console.log("errorSet:", errorSet);

	const hideConfigTab = () => {
		// setViewConfigTab(false);
		document.querySelector(".hideConfigTab").style.display = "none";
		document.querySelector(".viewConfigTab").style.display = "flex";
		document.querySelector(".formBuilder").style.display = "none";
		document.querySelector(".demoSite").style.width = "100%";
	};
	const showConfigTab = () => {
		// setViewConfigTab(true);
		document.querySelector(".viewConfigTab").style.display = "none";
		document.querySelector(".hideConfigTab").style.display = "flex";
		document.querySelector(".formBuilder").style.display = "flex";
		document.querySelector(".demoSite").style.width = "70%";
	};
	// displayError("Test");

	// useDeepCompareEffect(() => {
	// 	setRefreshCount(++refreshCount);
	// }, [validatedConfig]);

	// useEffect(() => {
	// 	console.log("siteKey:", siteKey, "configKey:", configKey);
	// 	if (siteKey !== undefined && configKey !== undefined) {
	// 		console.log("retrieving configs");
	// 		// debugger;
	// 		axios
	// 			.get("http://localhost:5000/retrieve", {
	// 				params: { siteKey: siteKey, configKey: configKey },
	// 			})
	// 			.then((response) => {
	// 				// handle success
	// 				if (response.data.status === "error") {
	// 					console.log(
	// 						"No saved configurations found. Applying default configurations."
	// 					);
	// 					return;
	// 				}

	// 				console.log("No error, continuing.");
	// 				// console.log("config:", response.data.config);
	// 				// setFormData(response.data.config);
	// 				// validator(response.data.config);
	// 				// setValidatedConfig(response.data.config);
	// 				retreivedConfig = response.data.config;
	// 				console.log("retreivedConfig:", retreivedConfig);
	// 			})
	// 			.catch((error) => {
	// 				// handle error
	// 				console.error(
	// 					"Could not retrieve the configurations as server is down."
	// 				);
	// 				// console.log(error);
	// 			});
	// 	}
	// 	// } else {
	// 	// 	if (localStorage.getItem("config")) {
	// 	// 		console.log("config:", JSON.parse(localStorage.getItem("config")));
	// 	// 		setFormData(JSON.parse(localStorage.getItem("config")));
	// 	// 	}
	// 	// }
	// }, []);

	return (
		<div className="formMaster">
			{/* {viewConfigOption && (
				<FormBuilder
					setValidatedConfig={setValidatedConfig}
					hideConfigTab={hideConfigTab}
				/>
			)} */}
			<FormBuilder
				viewConfigOption={viewConfigOption}
				setValidatedConfig={setValidatedConfig}
				hideConfigTab={hideConfigTab}
				validatedConfig={validatedConfig}
				// setErrorSet={setErrorSet}
				// errorSet={errorSet}
				displayError={displayError}
				// retreivedConfig={retreivedConfig}
			/>
			<div
				className={viewConfigOption ? "demoSite" : "demoSite preview"}
				// style={
				// 	viewConfigOption
				// 		? viewConfigTab
				// 			? { width: "75%" }
				// 			: { width: "100%" }
				// 		: { width: "100%" }
				// }
			>
				{/* {errorSet.forEach((error) => {
					console.log(error);
				})} */}
				<Vanilla2
					// key={refreshCount}
					validatedConfig={validatedConfig}
					reloadWarning={reloadWarning}
					// setErrorSet={setErrorSet}
					// errorSet={errorSet}
					displayError={displayError}
				/>
				{/* <Vanilla2 validatedConfig={validatedConfig} filename="Vanilla2.html" /> */}
				{viewConfigOption && (
					<div
						className="viewConfigTab"
						// style={viewConfigTab ? { display: "none" } : { display: "flex" }}
						onClick={() => {
							showConfigTab();
						}}
					>
						<div className="showArrowRight"></div>
						<div className="showArrowRight"></div>
					</div>
				)}
			</div>
		</div>
	);
};

export default DashboardContent;
