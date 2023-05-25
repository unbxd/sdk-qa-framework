import React, { useEffect, useRef, useState } from "react";
import FormWrapper from "./FormWrapper";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../../../public/styles/components/form/content.scss";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import { getEleDataType, getModuleConfigs } from "../../utils/configUtils";
import defaultConfig from "../../inputJson/dummyMadrasLinkOld.json";
import {
	Button,
	Modal,
	Input,
	InlineModal,
	InlineModalActivator,
	InlineModalBody,
} from "unbxd-react-components";
import EditorAce from "./formElements/EditorAce";
import CustomInput from "./formElements/CustomInput";
import CustomCheck from "./formElements/CustomCheck";

const FormContent = (props = {}) => {
	const {
		setValidatedConfig,
		validatedConfig,
		hideConfigTab,
		selectedAcc,
		setSelectedAcc,
		formConfigs,
		displayError,
		displaySuccess,
		displayInfo,
	} = props;

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
										if (err.name === "SyntaxError") {
											console.error(moduleKey, "producted this error. \n", err);
											displayError(
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
												displayError(
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
												displayError(
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
												displayError(
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
												displayError(
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
												displayError(
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
												displayError(
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
				}
			},
			4
		);
	};

	const { siteKey, configKey } = useParams();

	let masterConfig = {};
	const [formData, setFormData] = useState({});
	const [jsonData, setJsonData] = useState();
	const [fsCodeEditorData, setFSCodeEditorData] = useState(null);
	const [publishedBuilderLink, setPublishedBuilderLink] = useState("");
	const [publishedPreviewLink, setPublishedPreviewLink] = useState("");
	const [customFileNameBool, setCustomFileNameBool] = useState(false);
	const [customFileName, setCustomFileName] = useState(
		configKey !== undefined && configKey.length > 0 ? configKey : ""
	);

	const confirmModalRef = useRef();
	const viewJSONModalRef = useRef();
	const publishSuccessModalRef = useRef();

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
	const updateFormData = (data = {}, moduleKey = null) => {
		// setCodeChangeStatus(true);
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
			setJsonData(JSON.stringify({ ...formData, ...data }, null, 4));
		}
	};

	useEffect(() => {
		console.log("siteKey:", siteKey, "configKey:", configKey);
		if (siteKey !== undefined && configKey !== undefined) {
			console.log("retrieving configs");
			// debugger;
			axios
				.get("http://localhost:5000/retrieve", {
					params: { siteKey: siteKey, configKey: configKey },
				})
				.then((response) => {
					// handle success
					if (response.data.status === "error") {
						console.log(
							"No saved configurations found. Applying default configurations."
						);
						setFormData(defaultConfig);
						setJsonData(JSON.stringify(defaultConfig, null, 4));
						validator(defaultConfig);
						displayError(
							`No saved configurations found. Applying default configurations.`
						);
						return;
					}

					console.log("No error, continuing.");
					setFormData(response.data.config);
					setJsonData(JSON.stringify(response.data.config, null, 4));
					validator(response.data.config);
					displaySuccess("Retrieved and applied configurations.");
				})
				.catch((error) => {
					// handle error
					console.error(
						"Could not retrieve the configurations as server is down."
					);
					console.log(error.message);
					setFormData(defaultConfig);
					setJsonData(JSON.stringify(defaultConfig, null, 4));
					validator(defaultConfig);
					displayError(
						`${error.message}: Server is down. Could not retrieve configurations.`
					);
				});
		} else {
			// console.log(localStorage.getItem("config"));
			if (localStorage.getItem("config") === null) {
				setFormData(defaultConfig);
				setJsonData(JSON.stringify(defaultConfig, null, 4));
				validator(defaultConfig);
				displayInfo("Default configurations have been applied.");
			} else {
				let config = localStorage.getItem("config");
				setFormData(JSON.parse(config));
				setJsonData(config);
				validator(JSON.parse(config));
				displaySuccess("Retrieved and applied saved changes.");
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
				JSON.stringify(formData)
			)}`;
			const link = document.createElement("a");
			link.href = jsonString;
			link.download = "configurations.json";
			link.click();
			axios
				.post(
					"http://localhost:5000/upload",
					JSON.stringify({
						data: "Hello backend defined",
						config: formData,
						siteKey: siteKey,
						configKey:
							customFileNameBool === false ? configKey : customFileName,
					}),
					customConfig
				)
				.then((res) => {
					setPublishStatus(true);
					// setCodeChangeStatus(false);
					setPublishedBuilderLink(
						`http://localhost:3030/builder/${siteKey}/${
							customFileNameBool === false ? configKey : customFileName
						}`
					);
					setPublishedPreviewLink(
						`http://localhost:3030/preview/${siteKey}/${
							customFileNameBool === false ? configKey : customFileName
						}`
					);
				})
				.catch((err) => {
					setPublishStatus(false);
					console.error("Error:", err.message);
				});
		} else {
			let { siteKey } = formData;
			let configKey = customFileName;
			// let configKey = Date.now().toString();
			const customConfig = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
				JSON.stringify(formData)
			)}`;
			const link = document.createElement("a");
			link.href = jsonString;
			link.download = "configurations.json";
			link.click();
			axios
				.post(
					"http://localhost:5000/upload",
					JSON.stringify({
						data: "Hello backend undefined",
						config: formData,
						siteKey: siteKey,
						configKey: configKey,
					}),
					customConfig
				)
				.then((res) => {
					setPublishStatus(true);
					console.log(res.data);
					// setCodeChangeStatus(false);
					setPublishedBuilderLink(
						`http://localhost:3030/builder/${siteKey}/${configKey}`
					);
					setPublishedPreviewLink(
						`http://localhost:3030/preview/${siteKey}/${configKey}`
					);
				})
				.catch((err) => {
					setPublishStatus(false);
					console.error("Error:", err.message);
				});
		}
		setTimeout(handlePublishStatus, 2000);
	};

	const copyJSON = () => {
		navigator.clipboard.writeText(JSON.stringify(formData));
		// document.querySelector(".viewMoreDropdown").style.display = "none";
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
		// document.getElementById("viewMoreDropdown").style.display = "none";
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
		// document.getElementById("viewMoreDropdown").style.display = "none";
		setSelectedAcc(null);
		setFormData(defaultConfig);
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
		<div className="formContent">
			{/* <EditorAce formData={formData} /> */}
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
									{/* {console.log(
										formConfig.moduleKey
											? formData[formConfig.moduleKey]
											: formData
									)} */}
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
					<InlineModal
						activatorAction="click"
						className="viewMoreDropdown"
						halign="left"
						isModalOpen={false}
						onModalStateChange={function noRefCheck() {}}
					>
						<InlineModalActivator>
							<div>More Options</div>
						</InlineModalActivator>
						<InlineModalBody>
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
									// document.getElementById("viewMoreDropdown").style.display =
									// 	"none";
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
						</InlineModalBody>
					</InlineModal>
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

			<Modal
				title="Confirm"
				ref={confirmModalRef}
				showClose={true}
				className="confirmModal"
				onClose={() => {
					setPublishPopUp(false);
					setCustomFileNameBool(false);
					// setCustomFileName(configKey.length > 0 ? configKey : "");
				}}
			>
				{!publishPopUp && (
					<div>
						<div className="confirm-modal-body">
							Are you sure you want to publish these configurations?
							<div className="warning">
								<div className="iconWrapper">
									<div className="icon"></div>
								</div>
								<div className="message">
									If a file with the same name exists, the content of this file
									will be overwritten with these configurations.
								</div>
							</div>
							{siteKey !== undefined && configKey !== undefined ? (
								<>
									<CustomCheck
										appearance="inline"
										className="fileSaveName"
										label="Save under different filename?"
										name="fileSaveName"
										onChange={(val) => {
											setCustomFileNameBool(val);
										}}
									/>
									<CustomInput
										name="customFileName"
										label="Enter the filename:"
										className="customFileName"
										defaultValue={
											customFileNameBool === false ? `${configKey}` : ""
										}
										onChange={(val) => {
											setCustomFileName(val);
										}}
										readOnly={customFileNameBool === false ? true : false}
									/>
								</>
							) : (
								<CustomInput
									name="customFileName"
									label="Enter the filename:"
									onChange={(val) => {
										setCustomFileName(val);
									}}
									defaultValue={customFileName}
								/>
							)}
							<div className="confirmFileName">
								<div>
									The name of your file would be: <br />
								</div>
								<div>
									<span className="icon"></span>
									<span>
										{formData.siteKey}/{customFileName}
									</span>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<Button
								appearance="link"
								className="cancel"
								onClick={() => {
									setPublishPopUp(false);
									setJsonData(JSON.stringify(formData, null, 4));
									confirmModalRef.current.hideModal();
									setCustomFileName(configKey.length > 0 ? configKey : "");
								}}
							>
								Cancel
							</Button>
							<Button
								appearance="primary"
								className="publish-configs"
								onClick={() => {
									if (customFileName.length > 0) {
										handlePublish();
									} else {
										displayError("Filename must have 1 or more characters.");
										return;
									}
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
						<div className="loading">
							<img
								src="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif"
								alt="Loading"
							></img>
						</div>
					</div>
				)}
			</Modal>
			<Modal
				title={
					publishStatus == "true"
						? "Publish Successful"
						: "Publish Unsuccessful"
				}
				ref={publishSuccessModalRef}
				showClose={true}
				className="publishSuccess"
				onClose={() => {
					setPublishStatus(false);
				}}
			>
				{publishStatus == true ? (
					<div>
						<div className="confirm-modal-body">
							The demo site with these configurations can now be visited at:
							<div className="links">
								<div className="builder">
									<Input
										id="builder-cdn-link"
										name="builder-cdn-link"
										readOnly
										label="Link to Builder site:"
										defaultValue={publishedBuilderLink}
									/>
									<div
										id="copyIcon-builder"
										className="copyIcon"
										onClick={() => {
											copyPublishedLink("builder-cdn-link", "copyIcon-builder");
										}}
									></div>
									<a
										id="openNewTab"
										className="openNewTab"
										href={publishedBuilderLink}
										target="_blank"
									></a>
								</div>
								<div className="preview">
									<Input
										id="preview-cdn-link"
										name="preview-cdn-link"
										readOnly
										label="Link to Preview Site:"
										defaultValue={publishedPreviewLink}
									/>
									<div
										id="copyIcon-preview"
										className="copyIcon"
										onClick={() => {
											copyPublishedLink("preview-cdn-link", "copyIcon-preview");
										}}
									></div>
									<a
										id="openNewTab"
										className="openNewTab"
										href={publishedPreviewLink}
										target="_blank"
									></a>
								</div>
							</div>
							<div className="info">
								Validation of the configs might take upto 5 minutes in the
								server. So if the configurations don't seem to be applied, try
								again after some time.
							</div>
						</div>
						<div className="modal-footer">
							<Button
								appearance="link"
								className="cancel"
								onClick={() => {
									setPublishStatus(false);
									publishSuccessModalRef.current.hideModal();
								}}
							>
								Close
							</Button>
						</div>
					</div>
				) : (
					<div>
						<div className="confirm-modal-body">
							Could not publish the configurations. Please try again later.
						</div>
						<div className="modal-footer">
							<Button
								appearance="link"
								className="cancel"
								onClick={() => {
									setPublishStatus(false);
									publishSuccessModalRef.current.hideModal();
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
				onClose={() => {}}
			>
				<div className="confirm-modal-body">
					<div className="formjson" id="formjson">
						<CodeMirror
							readOnly={true}
							id="jsonCode"
							className="jsonCode"
							value={jsonData}
							placeholder="Insert code here..."
							height="100%"
							width="100%"
							extensions={[javascript({ json: true })]}
							onChange={(code) => {
								try {
									console.log(typeof code, code);
									setJsonData(code);
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
					<Button
						appearance="secondary"
						className="download"
						onClick={() => downloadJSON()}
					>
						<span></span>Download
					</Button>
					<Button
						appearance="secondary"
						className="copy"
						onClick={() => copyJSON()}
					>
						<span></span>Copy
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
