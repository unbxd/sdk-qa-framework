import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Vanilla2 from "../externalHTMLComponents/Vanilla2";
import FormBuilder from "../formComponents/FormBuilder";
import { getModuleConfigs, getEleDataType } from "../../utils/configUtils";

import defaultConfig from "../../inputJson/defaultConfig.json";

const DashboardContent = (props) => {
	const { viewConfigOption, reloadWarning = true, displayMessage } = props;

	const [validatedConfig, setValidatedConfig] = useState({});

	const { siteKey, configKey } = useParams();

	let validator = (formData) => {
		JSON.stringify(
			{ ...formData },
			function (index, value) {
				let validatedData = {};
				for (let moduleKey in value) {
					let moduleConfig = getModuleConfigs(moduleKey);
					let formConfig = formData[moduleKey];
					if (!moduleConfig) {
						if (formConfig !== undefined) {
							if (formConfig !== undefined) {
								if (formConfig.length) {
									try {
										let evaluatedVal = eval(formConfig);
										validatedData[moduleKey] = evaluatedVal;
									} catch (err) {
										if (
											moduleKey === "searchBoxEl" ||
											moduleKey === "searchButtonEl"
										) {
											displayMessage(
												"error",
												`${moduleKey} produced an error.\n${err.name}: ${err.message}`
											);
											return;
										} else {
											validatedData[moduleKey] = formConfig;
										}
									}
								}
							}
						}
					} else {
						validatedData[moduleKey] = {};
						for (let element in formConfig) {
							if (formConfig[element] !== undefined) {
								if (formConfig[element].toString().length) {
									const dataType = getEleDataType(moduleKey, element);
									switch (dataType) {
										case "element":
											try {
												validatedData[moduleKey][element] = eval(
													formConfig[element]
												);
											} catch (err) {
												displayMessage(
													"error",
													`${moduleKey} > ${element} produced the error: \n${err.name}: ${err.message}`
												);
												return;
											}
											break;
										case "function":
											try {
												validatedData[moduleKey][element] = eval(
													"(" + formConfig[element] + ")"
												);
											} catch (err) {
												displayMessage(
													"error",
													`${moduleKey} > ${element} produced the error: \n${err.name}: ${err.message}`
												);
												return;
											}
											break;
										case "number":
											try {
												validatedData[moduleKey][element] = parseInt(
													formConfig[element]
												);
											} catch (err) {
												displayMessage(
													"error",
													`${moduleKey} > ${element} produced the error: \n${err.name}: ${err.message}`
												);
												return;
											}
											break;
										case "object":
											try {
												validatedData[moduleKey][element] = JSON.parse(
													formConfig[element]
												);
											} catch (err) {
												displayMessage(
													"error",
													`${moduleKey} > ${element} produced the error: \n${err.name}: ${err.message}`
												);
												return;
											}
											break;
										case "array":
											try {
												validatedData[moduleKey][element] = eval(
													formConfig[element]
												);
											} catch (err) {
												displayMessage(
													"error",
													`${moduleKey} > ${element} produced the error: \n${err.name}: ${err.message}`
												);
												return;
											}
											break;
										case "boolean":
											try {
												validatedData[moduleKey][element] = eval(
													formConfig[element]
												);
											} catch (err) {
												displayMessage(
													"error",
													`${moduleKey} > ${element} produced the error: \n${err.name}: ${err.message}`
												);
												return;
											}
											break;
										default:
											validatedData[moduleKey][element] = formConfig[element];
											break;
									}
								}
							}
						}
					}
				}
				if (Object.keys(validatedData).length > 0) {
					setValidatedConfig(validatedData);
					localStorage.setItem(
						configKey !== undefined && configKey.length > 0
							? `config-${siteKey}-${configKey}`
							: `config`,
						JSON.stringify(formData, null, 4)
					);
					displayMessage(
						"success",
						"Configurations validated successfully. No errors."
					);
				}
			},
			4
		);
	};

	const hideConfigTab = () => {
		document.querySelector(".dashboardWrapper").style.marginTop = "0";
		document.querySelector(".demoSite").style.padding = "0px";
		document.querySelector(".dashHead").style.display = "none";
		document.querySelector(".hideConfigTab").style.display = "none";
		document.querySelector(".viewConfigTab").style.display = "flex";
		document.querySelector(".formBuilder").style.display = "none";
		document.querySelector(".demoSite").style.width = "100%";
		document.querySelector(".demoSite").style.height = "unset";
	};

	const showConfigTab = () => {
		document.querySelector(".dashboardWrapper").style.marginTop = "50px";
		document.querySelector(".demoSite").style.padding = "15px";
		document.querySelector(".dashHead").style.display = "flex";
		document.querySelector(".viewConfigTab").style.display = "none";
		document.querySelector(".hideConfigTab").style.display = "flex";
		document.querySelector(".formBuilder").style.display = "flex";
		document.querySelector(".demoSite").style.width = "70%";
		document.querySelector(".demoSite").style.height = "calc(100vh - 95px)";
	};

	useEffect(() => {
		// console.log("siteKey:", siteKey, "configKey:", configKey);
		if (siteKey !== undefined && configKey !== undefined) {
			if (localStorage.getItem(`config-${siteKey}-${configKey}`) !== null) {
				let config = localStorage.getItem(`config-${siteKey}-${configKey}`);
				validator(JSON.parse(config));
			} else {
				axios
					.get("http://localhost:5000/retrieve", {
						params: { siteKey: siteKey, configKey: configKey },
					})
					.then((response) => {
						if (response.data.status === "error") {
							validator(defaultConfig);
							displayMessage(
								"error",
								`No saved configurations found. Applying default configurations.`
							);
							return;
						}
						validator(response.data.config);
					})
					.catch((error) => {
						validator(defaultConfig);
						displayMessage(
							"error",
							`${error.message}: Server is down. Could not retrieve configurations.`
						);
					});
			}
		} else {
			if (localStorage.getItem("config") === null) {
				validator(defaultConfig);
				displayMessage("success", "Default configurations have been applied.");
			} else {
				let config = localStorage.getItem("config");
				validator(JSON.parse(config));
			}
		}
	}, []);

	return (
		<div className="formMaster">
			{viewConfigOption && (
				<FormBuilder
					viewConfigOption={viewConfigOption}
					setValidatedConfig={setValidatedConfig}
					hideConfigTab={hideConfigTab}
					validatedConfig={validatedConfig}
					validator={validator}
					configKey={configKey}
					siteKey={siteKey}
					displayMessage={displayMessage}
				/>
			)}
			<div className={viewConfigOption ? "demoSite" : "demoSite preview"}>
				<Vanilla2
					key="abcd"
					validatedConfig={validatedConfig}
					reloadWarning={reloadWarning}
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
