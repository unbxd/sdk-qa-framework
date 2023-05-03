import React, { useEffect, useState } from "react";
import Vanilla2 from "../externalHTMLComponents/Vanilla2";
import FormBuilder from "../formComponents/FormBuilder";
import { useParams } from "react-router-dom";
import axios from "axios";

const DashboardContent = (props) => {
	const { viewConfigOption, reloadWarning = true } = props;

	const [validatedConfig, setValidatedConfig] = useState({});
	const [viewConfigTab, setViewConfigTab] = useState(true);

	const { id } = useParams();

	// useEffect(() => {
	// 	if (id !== undefined) {

	// 		setValidatedConfig(data);
	// 	// 	axios
	// 	// 		.get(
	// 	// 			"https://libraries.unbxdapi.com/search-sdk/qa-framework/demo-unbxd700181503576558/fb853e3332f2645fac9d71dc63e09ec1.json"
	// 	// 		)
	// 	// 		.then((res) => {
	// 	// 			console.log("res.data:", res.data);
	// 	// 			// validatedConfig = res.data;
	// 	// 			const data = res.data;
	// 	// 			setValidatedConfig(data);
	// 	// 		});
	// 	// }
	// }, []);

	const hideConfigTab = () => {
		setViewConfigTab(false);
		// document.querySelector(".formBuilder").style.display = "none";
		// document.querySelector(".demoSite").style.width = "100%";
	};
	const showConfigTab = () => {
		setViewConfigTab(true);
	};

	return (
		<div className="formMaster">
			{viewConfigOption && (
				<FormBuilder
					viewConfigTab={viewConfigTab}
					setValidatedConfig={setValidatedConfig}
					hideConfigTab={hideConfigTab}
				/>
			)}
			<div
				className="demoSite"
				style={
					viewConfigOption
						? viewConfigTab
							? { width: "75%" }
							: { width: "100%" }
						: { width: "100%" }
				}
			>
				<Vanilla2
					validatedConfig={validatedConfig}
					reloadWarning={reloadWarning}
				/>
				{/* <Vanilla2 validatedConfig={validatedConfig} filename="Vanilla2.html" /> */}
				{viewConfigOption && (
					<div
						className="viewConfigTab"
						style={viewConfigTab ? { display: "none" } : { display: "flex" }}
						onClick={() => {
							showConfigTab();
						}}
					>
						<div className="showArrowRight"></div>
					</div>
				)}
			</div>
		</div>
	);
};

export default DashboardContent;
