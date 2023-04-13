import React, { useRef, useState, useEffect } from "react";
import Vanilla2 from "../externalHTMLComponents/Vanilla2";
import FormBuilder from "../formComponents/FormBuilder";

const DashboardContent = (props) => {
	const { viewConfigOption, reloadWarning = true } = props;

	const [validatedConfig, setValidatedConfig] = useState({});
	const [viewConfigTab, setViewConfigTab] = useState(true);

	const hideConfigTab = () => {
		setViewConfigTab(false);
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
				className="vanilla2"
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
