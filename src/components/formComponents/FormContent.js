import React, { useRef, useState } from "react";
import FormWrapper from "./FormWrapper";

import CodeMirror from "@uiw/react-codemirror";
import { darculaInit } from "@uiw/codemirror-theme-darcula";
import { tags as t } from "@lezer/highlight";
import { javascript } from "@codemirror/lang-javascript";

import { getModuleConfigs } from "../../utils/configUtils";
import defaultConfig from "../../inputJson/dummyMadrasLinkOld.json";
import { Button, Modal, Input } from "unbxd-react-components";
import CustomDrop from "./formElements/CustomDrop";

const FormContent = (props = {}) => {
	const {
		viewConfigTab,
		setValidatedConfig,
		hideConfigTab,
		selectedAcc,
		setSelectedAcc,
		formConfigs,
	} = props;

	let masterConfig = {};
	let validatedData = {};
	const [formData, setFormData] = useState(defaultConfig);
	const [jsonData, setJsonData] = useState(JSON.stringify(formData, null, 4));
	const [fsCodeEditorData, setFSCodeEditorData] = useState(null);

	const confirmModalRef = useRef();
	const viewJSONModalRef = useRef();

	let [publishPopUp, setPublishPopUp] = useState(false);
	let [publishStatus, setPublishStatus] = useState(false);

	const inputJSONFile = useRef(null);

	const updateMasterConfig = (formConfigs) => {
		formConfigs.map((formConfig = {}, i) => {
			if (formConfig.moduleKey) {
				masterConfig = {
					...masterConfig,
					[formConfig.moduleKey]: { ...formConfig.config },
				};
			}
		});
	};
	updateMasterConfig(formConfigs); // this should be inside a hooks

	document.onclick = myClickHandler;

	function myClickHandler(e) {
		const moreOptionsDropdown = document.getElementById("moreOptionsDropdown");
		const classNames = [
			"downloadJSON",
			"uploadJSON",
			"copyJSON",
			"uploadToCDN",
			"resetJSON",
		];
		if (
			e.target.id != "viewMoreOption" &&
			!classNames.includes(e.target.className)
		) {
			moreOptionsDropdown.style.display = "none";
		}
	}

	const updateFormData = (data = {}, moduleKey = null) => {
		if (moduleKey) {
			setFormData({
				...formData,
				[moduleKey]: { ...formData[moduleKey], ...data },
			});
			setJsonData(
				JSON.stringify(
					{
						...formData,
						[moduleKey]: { ...formData[moduleKey], ...data },
					},
					null,
					4
				)
			);
		} else {
			setFormData({ ...formData, ...data });
			setJsonData(JSON.stringify({ ...formData, ...data }), null, 4);
		}
	};

	let newValidator = () => {
		JSON.stringify(
			{ ...formData },
			function (index, value) {
				let validatedData = {};
				for (let moduleKey in value) {
					let moduleConfig = getModuleConfigs(moduleKey);
					let formConfig = formData[moduleKey];
					// console.log(`${moduleKey}:`, moduleConfig);
					// console.log(validatedData);

					if (!moduleConfig) {
						console.log(moduleKey, "has no config.");
						try {
							let evaluatedVal = eval(formConfig);
							validatedData[moduleKey] = evaluatedVal;
						} catch (err) {
							validatedData[moduleKey] = formConfig;
						}
					} else {
						// console.log(moduleKey, ":", moduleConfig);
						console.log(formConfig);
						for (let element in formConfig) {
							console.log(moduleKey, element);
						}
					}
				}
			},
			4
		);
	};

	let validator = () => {
		return JSON.stringify(
			{ ...formData },
			function (idx, value) {
				for (let moduleKey in value) {
					let moduleConfig = masterConfig[moduleKey];
					let formConfig = formData[moduleKey];

					if (!moduleConfig) {
						try {
							let evaluatedVal = eval(formConfig);
							validatedData = {
								...validatedData,
								[moduleKey]: evaluatedVal,
							};
						} catch (err) {
							validatedData = {
								...validatedData,
								[moduleKey]: formConfig,
							};
						}
					} else {
						// validatedData = {
						// 	...validatedData,
						// 	[moduleKey]: { ...formConfig },
						// };
						validatedData[moduleKey] = { ...formConfig }; // need not mutate - check

						for (let element in formConfig) {
							for (let index in moduleConfig) {
								const eleConfig = moduleConfig[index];

								if (eleConfig["name"] === element) {
									const eleDataType = eleConfig["dataType"];

									// based on dataType do the required
									if (eleDataType === "element" || eleDataType === "array") {
										try {
											const eleVal = formConfig[element];
											if (eleVal) {
												let valModuleConfig = {
													...validatedData[moduleKey],
													[element]: eval(eleVal),
												};
												validatedData = {
													...validatedData,
													[moduleKey]: { ...valModuleConfig },
												};
											}
										} catch (error) {
											console.log("element:", moduleKey, element, error);
										}
									} else if (eleDataType === "boolean") {
										try {
											const eleVal = formConfig[element];
											if (eleVal) {
												let valModuleConfig = {
													...validatedData[moduleKey],
													[element]: eval(eleVal),
												};
												validatedData = {
													...validatedData,
													[moduleKey]: { ...valModuleConfig },
												};
											}
										} catch (error) {
											console.log("boolean:", moduleKey, element, error);
										}
									} else if (eleDataType === "number") {
										const eleVal = formConfig[element];
										if (eleVal) {
											let valModuleConfig = {
												...validatedData[moduleKey],
												[element]: parseInt(eleVal),
											};
											validatedData = {
												...validatedData,
												[moduleKey]: { ...valModuleConfig },
											};
										}
									} else if (eleDataType === "object") {
										try {
											const eleVal = formConfig[element];
											if (eleVal) {
												let valModuleConfig = {
													...validatedData[moduleKey],
													[element]: JSON.parse(eleVal),
												};
												validatedData = {
													...validatedData,
													[moduleKey]: { ...valModuleConfig },
												};
											}
										} catch (error) {
											console.log("object:", moduleKey, element, error);
										}
									} else if (eleDataType === "function") {
										try {
											let evaluatedVal = eval("(" + formConfig[element] + ")");
											let valModuleConfig = {
												...validatedData[moduleKey],
												[element]: evaluatedVal,
											};
											validatedData = {
												...validatedData,
												[moduleKey]: { ...valModuleConfig },
											};
										} catch (error) {
											console.log("function:", moduleKey, element, error);
										}
									}
								}
							}
						}
					}
				}
				setValidatedConfig({ ...validatedData });
				console.log("validatedData:", validatedData);
			},
			4
		);
	};

	let showContent = (i) => {
		if (selectedAcc == i) {
			return setSelectedAcc(null);
		}
		setSelectedAcc(i);
	};

	let toggleConfig = () => {
		viewJSONModalRef.current.showModal();
	};

	const handlePublisStatus = () => {
		setPublishPopUp(false);
		setPublishStatus(true);
	};

	const handlePublish = () => {
		setPublishPopUp(true);
		setTimeout(handlePublisStatus, 2000);
	};

	const copyJSON = () => {
		navigator.clipboard.writeText(JSON.stringify(formData));
		const moreOptionsDropdown = (document.querySelector(
			".moreOptionsDropdown"
		).style.display = "none");

		// const copyIcon = document.getElementById("copyJSON");
		// copyIcon.style.backgroundImage =
		// 	"url('https://assets.stickpng.com/images/5aa78e207603fc558cffbf19.png')";
		// copyIcon.style.backgroundSize = "100% 100%";
		// copyIcon.style.width = "25px";
		// copyIcon.style.height = "25px";
		// copyIcon.style.margin = "7.5px";

		console.log("Copied JSON!");
	};

	const copyPublishedLink = (inputID, copyIconID) => {
		const copyIcon = document.getElementById(copyIconID);
		copyIcon.style.backgroundImage =
			"url('https://png.pngtree.com/png-clipart/20190516/original/pngtree-check-mark-icon-design-template-vector-isolated-png-image_4085369.jpg')";
		copyIcon.style.pointerEvents = "none";

		const inputEl = document.getElementById(inputID);
		inputEl.select();
		navigator.clipboard.writeText(inputEl.value);

		console.log("Copied text:", inputEl.value);
	};

	const downloadJSON = () => {
		document.getElementById("moreOptionsDropdown").style.display = "none";
		const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
			JSON.stringify(formData)
		)}`;
		const link = document.createElement("a");
		link.href = jsonString;
		link.download = "configurations.json";
		link.click();
	};

	const resetJSON = () => {
		console.log("Configurations have been reset.");
		document.getElementById("moreOptionsDropdown").style.display = "none";
		setSelectedAcc(null);
		setFormData(defaultConfig);
	};

	const viewOptionsDropdown = () => {
		const moreOptionsDropdown = document.querySelector(".moreOptionsDropdown");
		if (moreOptionsDropdown.style.display == "none") {
			moreOptionsDropdown.style.display = "flex";
		} else {
			moreOptionsDropdown.style.display = "none";
		}
	};

	const inputFileChange = (e) => {
		const jsonFile = e.target.files[0];
		let encodedData;
		let fileReader = new FileReader();
		fileReader.readAsDataURL(jsonFile);
		fileReader.onload = (e) => {
			encodedData = e.target.result.replace(
				"data:application/json;base64,",
				""
			);
			setJsonData(window.atob(encodedData));
			// setJsonData(JSON.parse(window.atob(encodedData)));
			setFormData(JSON.parse(window.atob(encodedData)));
			setSelectedAcc(null);
		};
	};

	return (
		<div
			className="formContent"
			style={viewConfigTab ? { display: "flex" } : { display: "none" }}
		>
			<div className="hideConfigTab">
				<div className="showArrowLeft" onClick={() => hideConfigTab()}>
					<span></span>
				</div>
			</div>
			<div className="components" id="components">
				{selectedAcc == null && (
					<div className="notSelected">
						<span className="logo"></span>Select any configuration and edit the
						values. Click on 'Apply Changes' to update the demo site with the
						new values.
					</div>
				)}

				{formConfigs.map((formConfig = {}, i) => {
					return (
						<>
							{selectedAcc === i && (
								<div className="component" key={i}>
									<div className="header">{formConfig.moduleName}</div>

									<FormWrapper
										key={i}
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
				<div
					className="moreOptionsDropdown"
					style={{ display: "none" }}
					id="moreOptionsDropdown"
				>
					<div
						className="viewCode"
						onClick={() => {
							setSelectedAcc(null);
							viewJSONModalRef.current.showModal();
						}}
					>
						<span></span>
						View Code
					</div>
					<div className="downloadJSON" onClick={() => downloadJSON()}>
						<span></span>
						Download Code
					</div>
					<div
						className="uploadJSON"
						onClick={() => inputJSONFile.current.click()}
					>
						<span></span>
						Upload File
					</div>
					<input
						type="file"
						onChange={inputFileChange}
						ref={inputJSONFile}
						style={{ display: "none" }}
					/>
					<div
						className="uploadToCDN"
						onClick={() => {
							document.getElementById("moreOptionsDropdown").style.display =
								"none";
							confirmModalRef.current.showModal();
						}}
					>
						<span></span>
						Upload to CDN
					</div>
					<div className="copyJSON" onClick={() => copyJSON()}>
						<span></span>
						Copy Code
					</div>
					<div className="resetJSON" onClick={() => resetJSON()}>
						<span></span>
						Reset Config
					</div>
				</div>
				<div className="btnSection">
					{/* <CustomDrop appearance="block" options={[{"id": 1, "name"}]}/> */}
					<button
						id="viewMoreOption"
						className="RCB-btn-secondary"
						onClick={() => viewOptionsDropdown()}
					>
						{/* <div id="viewMoreOption" className="moreOptionsIcon"></div> */}
						More Options
					</button>
					<button
						id="applyBtn"
						onClick={() => {
							// newValidator();
							validator();
						}}
						className="RCB-btn-primary"
						// disabled={true}
					>
						Apply Changes
					</button>
				</div>
			</div>

			<Modal
				title="Confirm"
				ref={confirmModalRef}
				showClose={true}
				className="confirmModal"
			>
				{!publishPopUp && !publishStatus && (
					<div>
						<div className="confirm-modal-body">
							Are you sure you want to publish these configurations?
						</div>
						<div className="modal-footer">
							<Button
								appearance="link"
								className="cancel"
								onClick={() => {
									setPublishPopUp(false);
									setJsonData(JSON.stringify(formData, null, 4));
									// setJsonData(formData);
									confirmModalRef.current.hideModal();
								}}
							>
								Cancel
							</Button>
							<Button
								appearance="primary"
								className="publish-configs"
								onClick={() => {
									handlePublish();
								}}
							>
								Publish
							</Button>
						</div>
					</div>
				)}
				{publishPopUp && (
					<div className="confirm-modal-body">
						Publishing...
						<div>
							<img src="loading.gif" alt="Loading"></img>
						</div>
					</div>
				)}
				{publishStatus && (
					<div>
						<div className="confirm-modal-body">
							Your configurations have been published to the below link:
							<div className="link">
								<Input
									id="cdn-link"
									name="cdn-link"
									readOnly
									defaultValue="http://js-sdk.unbxd.com/builder/456787654334567"
								/>
								<div
									id="copyIcon"
									className="copyIcon"
									onClick={() => {
										copyPublishedLink("cdn-link", "copyIcon");
									}}
								></div>
							</div>
						</div>
						<div className="modal-footer">
							<Button
								appearance="link"
								className="cancel"
								onClick={() => {
									setPublishStatus(false);
									confirmModalRef.current.hideModal();
								}}
							>
								Close
							</Button>
						</div>
					</div>
				)}
			</Modal>
			<Modal
				title="Configurations Code"
				ref={viewJSONModalRef}
				showClose={true}
				className="configModal"
			>
				<div className="confirm-modal-body">
					<div className="formjson" id="formjson">
						<CodeMirror
							id="jsonCode"
							className="jsonCode"
							// value={JSON.stringify(jsonData, null, 4)}
							// value={jsonData}
							// value={jsonData.replace(/\\t|\\n/gim, "").replace(/\\"/gim, "'")}
							value={jsonData.replace(/\\t|\\n/gim, "").replace(/\\"/gim, "'")}
							// theme={darculaInit({
							// 	settings: {
							// 		caret: "#c6c6c6",
							// 		fontFamily: "monospace",
							// 	},
							// 	styles: [{ tag: t.comment, color: "#6272a4" }],
							// })}
							placeholder="Insert code here..."
							height="300px"
							width="100%"
							extensions={[javascript({ json: true })]}
							onChange={(code) => {
								try {
									console.log(code);
									setJsonData(code);
									// setJsonData(eval("(" + code + ")"));
								} catch (err) {
									console.log("onCodeChange:", err);
								}
							}}
						/>
					</div>
				</div>
				<div className="modal-footer">
					<Button
						appearance="link"
						className="cancel"
						onClick={() => {
							setJsonData(JSON.stringify(formData, null, 4));
							viewJSONModalRef.current.hideModal();
						}}
					>
						Cancel
					</Button>
					{/* <Button
						appearance="primary"
						className="upload"
						onClick={() => inputJSONFile.current.click()}
					>
						<div className="jsonUpload">Upload File</div>

						<input
							className="byModal"
							type="file"
							onChange={inputFileChange}
							ref={inputJSONFile}
							style={{ display: "none" }}
						/>
					</Button> */}
					<Button
						appearance="secondary"
						className="download"
						onClick={() => downloadJSON()}
					>
						Download
					</Button>
					<Button
						appearance="secondary"
						className="copy"
						onClick={() => copyJSON()}
					>
						Copy
					</Button>
					<Button
						appearance="primary"
						className="update-json"
						onClick={() => {
							try {
								setSelectedAcc(null);
								setFormData(JSON.parse(jsonData));
								viewJSONModalRef.current.hideModal();
							} catch (err) {
								alert(
									"Seems like the format of the input configurations is not correct."
								);
							}
						}}
					>
						Update
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default FormContent;
