import React, { useEffect, useState } from "react";
import Vanilla2 from "../externalHTMLComponents/Vanilla2";
import FormBuilder from "../formComponents/FormBuilder";

const DashboardContent = (props) => {
	const { viewConfigOption, reloadWarning = true } = props;

	const [validatedConfig, setValidatedConfig] = useState({});

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
				<Vanilla2
					// key={new Date().getTime()}
					validatedConfig={validatedConfig}
					reloadWarning={reloadWarning}
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
