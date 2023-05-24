import React, { useState } from "react";
import Vanilla2 from "../externalHTMLComponents/Vanilla2";
import FormBuilder from "../formComponents/FormBuilder";

const DashboardContent = (props) => {
	const {
		viewConfigOption,
		reloadWarning = true,
		displayError,
		displaySuccess,
		displayInfo,
	} = props;

	const [validatedConfig, setValidatedConfig] = useState({});

	const hideConfigTab = () => {
		document.querySelector(".hideConfigTab").style.display = "none";
		document.querySelector(".viewConfigTab").style.display = "flex";
		document.querySelector(".formBuilder").style.display = "none";
		document.querySelector(".demoSite").style.width = "100%";
	};
	const showConfigTab = () => {
		document.querySelector(".viewConfigTab").style.display = "none";
		document.querySelector(".hideConfigTab").style.display = "flex";
		document.querySelector(".formBuilder").style.display = "flex";
		document.querySelector(".demoSite").style.width = "70%";
	};

	return (
		<div className="formMaster">
			<FormBuilder
				viewConfigOption={viewConfigOption}
				setValidatedConfig={setValidatedConfig}
				hideConfigTab={hideConfigTab}
				validatedConfig={validatedConfig}
				displayError={displayError}
				displaySuccess={displaySuccess}
				displayInfo={displayInfo}
			/>
			<div className={viewConfigOption ? "demoSite" : "demoSite preview"}>
				<Vanilla2
					validatedConfig={validatedConfig}
					reloadWarning={reloadWarning}
					displayError={displayError}
				/>
				{viewConfigOption && (
					<div
						className="viewConfigTab"
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
