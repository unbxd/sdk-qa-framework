import React, { useEffect, useRef, useState } from "react";
import { Button } from "unbxd-react-components";
import axios from "axios";

import "../../../public/styles/components/form/content.scss";

import FormWrapper from "./FormWrapper";
import defaultConfig from "../../inputJson/defaultConfig.json";
import CreateDemoSite from "./Modal/CreateDemoSite";
import PublishStatus from "./Modal/PublishStatus";
import ViewCode from "./Modal/ViewCode";

const FormContent = (props = {}) => {
	const {
		hideConfigTab,
		selectedAcc,
		setSelectedAcc,
		formConfigs,
		displayMessage,
		validator,
		siteKey,
		configKey,
	} = props;

	const [formData, setFormData] = useState({});
	const [jsonData, setJsonData] = useState();
	const [fsCodeEditorData, setFSCodeEditorData] = useState(null);
	const [publishedBuilderLink, setPublishedBuilderLink] = useState("");
	const [publishedPreviewLink, setPublishedPreviewLink] = useState("");
	const [customFileNameBool, setCustomFileNameBool] = useState("NO");
	const [customFileName, setCustomFileName] = useState(
		configKey !== undefined && configKey.length > 0 ? configKey : ""
	);
	let [publishPopUp, setPublishPopUp] = useState(false);
	let [publishStatus, setPublishStatus] = useState(false);

	const confirmModalRef = useRef();
	const viewJSONModalRef = useRef();
	const publishSuccessModalRef = useRef();
	const inputJSONFile = useRef(null);

	const updateFormData = (data = {}, moduleKey = null) => {
		if (moduleKey) {
			setFormData({
				...formData,
				[moduleKey]: { ...formData[moduleKey], ...data },
			});
			setJsonData(
				exportAllJS("import", {
					...formData,
					[moduleKey]: { ...formData[moduleKey], ...data },
				})
			);
		} else {
			setFormData({ ...formData, ...data });
			setJsonData(exportAllJS("import", { ...formData, ...data }));
		}
	};

	useEffect(() => {
		if (siteKey !== undefined && configKey !== undefined) {
			if (localStorage.getItem(`config-${siteKey}-${configKey}`) !== null) {
				let config = localStorage.getItem(`config-${siteKey}-${configKey}`);
				setFormData(JSON.parse(config));
				setJsonData(exportAllJS("import", JSON.parse(config)));
			} else {
				axios
					.get("http://localhost:5000/retrieve", {
						params: { siteKey: siteKey, configKey: configKey },
					})
					.then((response) => {
						if (response.data.status === "error") {
							setFormData(defaultConfig);
							setJsonData(exportAllJS("import", defaultConfig));
							displayMessage(
								"error",
								`No saved configurations found. Applying default configurations.`
							);
							return;
						}
						setFormData(response.data.config);
						setJsonData(exportAllJS("import", response.data.config));
					})
					.catch((error) => {
						setFormData(defaultConfig);
						setJsonData(exportAllJS("import", defaultConfig));
						displayMessage(
							"error",
							`${error.message}: Server is down. Could not retrieve configurations.`
						);
					});
			}
		} else {
			if (localStorage.getItem("config") === null) {
				setFormData(defaultConfig);
				setJsonData(exportAllJS("import", defaultConfig));
			} else {
				let config = localStorage.getItem("config");
				setFormData(JSON.parse(config));
				setJsonData(exportAllJS("import", JSON.parse(config)));
			}
		}
	}, []);

	const handlePublishStatus = () => {
		setPublishPopUp(false);
		confirmModalRef.current.hideModal();
		publishSuccessModalRef.current.showModal();
	};

	const handlePublish = () => {
		setPublishPopUp(true);
		if (siteKey !== undefined && configKey !== undefined) {
			const customConfig = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
				JSON.stringify(formData, null, 4)
			)}`;
			const link = document.createElement("a");
			link.href = jsonString;
			link.download = `${formData.siteKey}${
				configKey !== undefined && configKey.length > 0 ? `-${configKey}` : ""
			}.json`;
			link.click();
			axios
				.post(
					"http://localhost:5000/upload",
					JSON.stringify(
						{
							data: "Hello backend defined",
							config: formData,
							siteKey: siteKey,
							configKey:
								customFileNameBool === "NO" ? configKey : customFileName,
						},
						null,
						4
					),
					customConfig
				)
				.then((res) => {
					setPublishStatus(true);
					setPublishedBuilderLink(
						`http://localhost:3030/builder/${siteKey}/${
							customFileNameBool === "NO" ? configKey : customFileName
						}`
					);
					setPublishedPreviewLink(
						`http://localhost:3030/preview/${siteKey}/${
							customFileNameBool === "NO" ? configKey : customFileName
						}`
					);
				})
				.catch((err) => {
					setPublishStatus(false);
				});
		} else {
			let { siteKey } = formData;
			let configKey = customFileName;
			const customConfig = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
				JSON.stringify(formData, null, 4)
			)}`;
			const link = document.createElement("a");
			link.href = jsonString;
			link.download = `${formData.siteKey}${
				configKey !== undefined && configKey.length > 0 ? `-${configKey}` : ""
			}.json`;
			link.click();
			axios
				.post(
					"http://localhost:5000/upload",
					JSON.stringify(
						{
							data: "Hello backend undefined",
							config: formData,
							siteKey: siteKey,
							configKey: configKey,
						},
						null,
						4
					),
					customConfig
				)
				.then((res) => {
					setPublishStatus(true);
					setPublishedBuilderLink(
						`http://localhost:3030/builder/${siteKey}/${configKey}`
					);
					setPublishedPreviewLink(
						`http://localhost:3030/preview/${siteKey}/${configKey}`
					);
				})
				.catch((err) => {
					setPublishStatus(false);
				});
		}
		setTimeout(handlePublishStatus, 2000);
	};

	const copyJSON = () => {
		navigator.clipboard.writeText(JSON.stringify(formData, null, 4));
		viewJSONModalRef.current.hideModal();
		displayMessage("success", "Copied JSON!");
	};

	const copyPublishedLink = (inputID, copyIconID) => {
		const copyIcon = document.getElementById(copyIconID);
		copyIcon.style.backgroundImage =
			"url('https://png.pngtree.com/png-clipart/20190516/original/pngtree-check-mark-icon-design-template-vector-isolated-png-image_4085369.jpg')";
		copyIcon.style.pointerEvents = "none";

		const inputEl = document.getElementById(inputID);
		inputEl.select();
		navigator.clipboard.writeText(inputEl.value);
		displayMessage("success", "Copied code!");
	};

	const exportIndividualJS = (code) => {
		let configObjInner = "\t{\n";
		for (let key of Object.keys(code)) {
			if (typeof code[key] === "string") {
				try {
					const ele = JSON.parse(code[key]);
					configObjInner += `\t\t${key}: ${code[key]}, \n`;
				} catch (arrErr) {
					try {
						//element
						const ele = eval(code[key]);
						configObjInner += `\t\t${key}: \`${code[key]}\`, \n`;
					} catch (eleErr) {
						try {
							//function
							const ele = eval("(" + code[key] + ")");
							configObjInner += `\t\t${key}: ${code[key]}, \n`;
						} catch (funcErr) {
							configObjInner += `\t\t${key}: \`${code[key]}\`, \n`;
						}
					}
				}
			} else if (typeof code[key] === "number") {
				configObjInner += `\t\t${key}: ${code[key].toString()}, \n`;
			} else if (typeof code[key] === "boolean") {
				configObjInner += `\t\t${key}: ${code[key].toString()}, \n`;
			}
		}
		configObjInner += "\t}";
		return configObjInner;
	};

	const exportAllJS = (cond, code) => {
		if (cond === "export") {
			let configObj = `{\n`;
			for (let key of Object.keys(formData)) {
				if (typeof formData[key] === "string") {
					try {
						//element
						const ele = eval(formData[key]);
						configObj += `\t${key}: \`${formData[key]}\`, \n`;
					} catch (eleErr) {
						configObj += `\t${key}: \`${formData[key]}\`, \n`;
					}
				} else if (typeof formData[key] === "object") {
					configObj += `\t${key}: ${exportIndividualJS(formData[key])}, \n`;
				}
			}
			configObj += "}";
			const exportString = `const config = ${configObj}`;
			const jsonString = `data:text/javascript;chatset=utf-8,${encodeURIComponent(
				exportString
			)}`;
			const link = document.createElement("a");
			link.href = jsonString;
			link.download = `${formData.siteKey}${
				configKey !== undefined && configKey.length > 0 ? `-${configKey}` : ""
			}.js`;
			link.click();
		} else {
			let configObj = `{\n`;
			for (let key of Object.keys(code)) {
				if (typeof code[key] === "string") {
					try {
						//element
						const ele = eval(code[key]);
						configObj += `\t${key}: \`${code[key]}\`, \n`;
					} catch (eleErr) {
						configObj += `\t${key}: \`${code[key]}\`, \n`;
					}
				} else if (typeof code[key] === "object") {
					configObj += `\t${key}: ${exportIndividualJS(code[key])}, \n`;
				}
			}
			configObj += "}";
			return configObj;
		}
	};

	const downloadJSON = () => {
		const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
			JSON.stringify(formData, null, 4)
		)}`;
		const link = document.createElement("a");
		link.href = jsonString;
		link.download = `${formData.siteKey}${
			configKey !== undefined && configKey.length > 0 ? `-${configKey}` : ""
		}.json`;
		link.click();
	};

	const resetJSON = () => {
		displayMessage(
			"info",
			"Configurations have been reset. Default configurations have been applied."
		);
		viewJSONModalRef.current.hideModal();
		setSelectedAcc(null);
		setFormData(defaultConfig);
		setJsonData(exportAllJS("import", defaultConfig));
		validator(defaultConfig);
	};

	const evaluateIndividual = (config) => {
		const configString = {};
		for (let conf in config) {
			if (typeof config[conf] === "function") {
				configString[`${conf}`] = config[conf].toString();
			} else if (typeof config[conf] === "boolean") {
				configString[`${conf}`] = config[conf].toString();
			} else if (typeof config[conf] === "number") {
				configString[`${conf}`] = config[conf].toString();
			} else if (typeof config[conf] === "object") {
				if (config[conf]) {
					configString[`${conf}`] = JSON.stringify(config[conf]);
				}
			} else if (typeof config[conf] === "string") {
				configString[`${conf}`] = config[conf];
			}
		}
		return configString;
	};

	const evaluateAll = (configs) => {
		const stringifiedConfig = {};
		for (let config in configs) {
			if (typeof configs[config] === "string") {
				stringifiedConfig[`${config}`] = configs[config];
			} else if (typeof configs[config] === "object") {
				stringifiedConfig[`${config}`] = evaluateIndividual(configs[config]);
			}
		}
		return JSON.stringify(stringifiedConfig, null, 4);
	};

	const applyImportedCode = (code) => {
		try {
			const parsedCode = JSON.parse(code);
			setFormData(parsedCode);
			validator(parsedCode);
			setSelectedAcc(null);
		} catch (err) {
			const validatedCode = eval(`(${code})`);
			const parsedCode = evaluateAll(validatedCode);
			setFormData(JSON.parse(parsedCode));
			validator(JSON.parse(parsedCode));
			setSelectedAcc(null);
		}
	};

	const inputFileChange = (e) => {
		const jsonFile = e.target.files[0];
		let encodedData;
		let fileReader = new FileReader();
		fileReader.readAsDataURL(jsonFile);
		fileReader.onload = (e) => {
			try {
				encodedData = e.target.result.replace(
					"data:application/json;base64,",
					""
				);
				setJsonData(
					exportAllJS("import", JSON.parse(window.atob(encodedData)))
				);
				setSelectedAcc(null);
			} catch (err) {
				displayMessage(
					"error",
					"File Type does not seem to be in the form of .json"
				);
				e.target.value = "";
				return;
			}
		};
		e.target.value = "";
	};

	return (
		<div className="formContent">
			<Button
				className="uploadToCDN"
				onClick={() => {
					confirmModalRef.current.showModal();
				}}
				appearance="primary"
			>
				<span></span>
				Create Demo Site
			</Button>
			<div className="hideConfigTab" onClick={() => hideConfigTab()}>
				<div className="showArrowLeft">
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="components" id="components">
				{selectedAcc == null && (
					<div className="notSelected">
						<span className="logo"></span>Select any configuration and edit the
						values. Click on 'Apply Changes' to update the demo site with the
						new values.
						<div className="instructions">
							Instructions:
							<ol>
								<li>Click on any of the icons to view the configurations.</li>
								<li>
									To apply custom configurations, change any of the
									configuration.
								</li>
								<li>
									Click on "Apply Changes" button to apply the configurations to
									the RHS.
								</li>
								<li>
									To publish the configurations, click on "More Options" -
									"Upload to CDN", and get two unique URLs - one to the Builder
									site and one to the Preview site.
								</li>
							</ol>
						</div>
					</div>
				)}

				{formConfigs.map((formConfig = {}, i) => {
					return (
						<>
							{selectedAcc === i && (
								<div className="component" key={i}>
									<div className="header">
										<div className="name">{formConfig.moduleName}</div>
										<div className="desc">{formConfig.moduleDesc}</div>
									</div>
									<FormWrapper
										fsCodeEditorData={fsCodeEditorData}
										setFSCodeEditorData={setFSCodeEditorData}
										updateFormData={updateFormData}
										moduleConfig={formConfig}
										formData={
											formConfig.moduleKey
												? formData[formConfig.moduleKey]
												: formData
										}
									/>
								</div>
							)}
						</>
					);
				})}
				<div className="btnSection">
					<Button
						className="viewCode"
						onClick={() => {
							setSelectedAcc(null);
							viewJSONModalRef.current.showModal();
						}}
						appearance="secondary"
					>
						<span></span>
						View Code
					</Button>
					<button
						id="applyBtn"
						onClick={() => {
							validator(formData);
						}}
						className="RCB-btn-primary"
					>
						Apply Changes
					</button>
				</div>
			</div>
			<CreateDemoSite
				formData={formData}
				confirmModalRef={confirmModalRef}
				setPublishPopUp={setPublishPopUp}
				customFileName={customFileName}
				setCustomFileName={setCustomFileName}
				customFileNameBool={customFileNameBool}
				setCustomFileNameBool={setCustomFileNameBool}
				publishPopUp={publishPopUp}
				handlePublish={handlePublish}
				displayMessage={displayMessage}
				siteKey={siteKey}
				configKey={configKey}
			/>

			<PublishStatus
				publishStatus={publishStatus}
				setPublishStatus={setPublishStatus}
				publishSuccessModalRef={publishSuccessModalRef}
				publishedBuilderLink={publishedBuilderLink}
				copyPublishedLink={copyPublishedLink}
				publishedPreviewLink={publishedPreviewLink}
			/>

			<ViewCode
				viewJSONModalRef={viewJSONModalRef}
				applyImportedCode={applyImportedCode}
				inputJSONFile={inputJSONFile}
				inputFileChange={inputFileChange}
				exportAllJS={exportAllJS}
				downloadJSON={downloadJSON}
				copyJSON={copyJSON}
				resetJSON={resetJSON}
				jsonData={jsonData}
				setJsonData={setJsonData}
			/>
		</div>
	);
};

export default FormContent;
