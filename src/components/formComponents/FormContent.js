import React, { useEffect, useRef, useState } from "react";
import FormWrapper from "./FormWrapper";
import axios from "axios";
import { useParams } from "react-router-dom";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import { getEleDataType, getModuleConfigs } from "../../utils/configUtils";
import defaultConfig from "../../inputJson/dummyMadrasLinkOld.json";
import { Button, Modal, Input } from "unbxd-react-components";

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
	// let validatedData = {};
	const [formData, setFormData] = useState(defaultConfig);
	const [jsonData, setJsonData] = useState(JSON.stringify(formData, null, 4));
	const [fsCodeEditorData, setFSCodeEditorData] = useState(null);

	const confirmModalRef = useRef();
	const viewJSONModalRef = useRef();

	let [publishPopUp, setPublishPopUp] = useState(false);
	let [publishStatus, setPublishStatus] = useState(false);

	const inputJSONFile = useRef(null);

	const { id } = useParams();

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

	let validator = (formData) => {
		JSON.stringify(
			{ ...formData },
			function (index, value) {
				// console.log("value in validator:", value);
				let validatedData = {};
				for (let moduleKey in value) {
					let moduleConfig = getModuleConfigs(moduleKey);
					let formConfig = formData[moduleKey];
					// console.log(`${moduleKey}:`, moduleConfig);

					if (!moduleConfig) {
						if (formConfig.length) {
							// console.log(moduleKey, "has no config.");
							try {
								let evaluatedVal = eval(formConfig);
								validatedData[moduleKey] = evaluatedVal;
							} catch (err) {
								validatedData[moduleKey] = formConfig;
							}
						}
					} else {
						// console.log(moduleKey, ":", moduleConfig);
						// console.log(formConfig);
						validatedData[moduleKey] = {};
						for (let element in formConfig) {
							if (formConfig[element] !== undefined) {
								if (formConfig[element].toString().length) {
									const dataType = getEleDataType(moduleKey, element);
									switch (dataType) {
										case "element":
											// console.log("The element is of type(element).");
											try {
												validatedData[moduleKey][element] = eval(
													formConfig[element]
												);
											} catch (err) {
												console.error(
													moduleKey,
													">",
													element,
													"producted this error. \n",
													err
												);
												return;
											}
											break;
										case "function":
											// console.log("The element is of type(function).");
											try {
												validatedData[moduleKey][element] = eval(
													"(" + formConfig[element] + ")"
												);
											} catch (err) {
												console.error(
													moduleKey,
													">",
													element,
													"producted this error. \n",
													err
												);
												return;
											}
											break;
										case "number":
											// console.log("The element is of type(number).");
											try {
												validatedData[moduleKey][element] = parseInt(
													formConfig[element]
												);
											} catch (err) {
												console.error(
													moduleKey,
													">",
													element,
													"producted this error. \n",
													err
												);
												return;
											}
											break;
										case "object":
											// console.log("The element is of type(object).");
											try {
												validatedData[moduleKey][element] = JSON.parse(
													formConfig[element]
												);
											} catch (err) {
												console.error(
													moduleKey,
													">",
													element,
													"producted this error. \n",
													err
												);
												return;
											}
											break;
										case "array":
											// console.log("The element is of type(array).");
											try {
												validatedData[moduleKey][element] = eval(
													formConfig[element]
												);
											} catch (err) {
												console.error(
													moduleKey,
													">",
													element,
													"producted this error.\n",
													err
												);
												return;
											}
											break;
										case "boolean":
											// console.log("The element is of type(boolean).");
											try {
												validatedData[moduleKey][element] = eval(
													formConfig[element]
												);
											} catch (err) {
												console.error(
													moduleKey,
													">",
													element,
													"producted this error. \n",
													err
												);
												return;
											}
											// console.log(
											// 	moduleKey,
											// 	element,
											// 	eval(formConfig[element]),
											// 	validatedData
											// );
											break;
										default:
											// console.log("The element is of type(string).");
											validatedData[moduleKey][element] = formConfig[element];
											break;
									}
								}
							}
						}
					}
				}
				// console.log("validatedData after validation:", validatedData);
				if (Object.keys(validatedData).length > 0) {
					setValidatedConfig(validatedData);
				} else {
					console.error(
						"Form data was empty. Nothing to validate! \nPrevious config is still applied since there is no change."
					);
				}
			},
			4
		);
	};

	useEffect(() => {
		if (id !== undefined) {
			// console.log("id:", id);
			axios
				.get(
					"https://libraries.unbxdapi.com/search-sdk/qa-framework/demo-unbxd700181503576558/fb853e3332f2645fac9d71dc63e09ec1.json"
				)
				.then((res) => {
					console.log("res.data:", res.data);
					const data = res.data;
					setFormData(data);
					validator(data);
				});
			// setFormData(inputConfig);
			// validator(inputConfig);
		}
	}, []);

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
		document.querySelector(".moreOptionsDropdown").style.display = "none";
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
							validator(formData);
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
							value={jsonData}
							// value={jsonData.replace(/\\t|\\n/gim, "")}
							// value={jsonData.replace(/\\t|\\n/gim, "").replace(/\\"/gim, "'")}
							placeholder="Insert code here..."
							height="300px"
							width="100%"
							extensions={[javascript({ json: true })]}
							onChange={(code) => {
								try {
									setJsonData(code);
								} catch (err) {
									console.log("onCodeChange:", err);
								}
							}}
							// readOnly={true}
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
