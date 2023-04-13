import React, { useRef, useState } from "react";
import FormWrapper from "./FormWrapper";

import authConfig from "../../config/formConfig/authentication.json";
import searchBoxConfig from "../../config/formConfig/searchBox.json";
import productsConfig from "../../config/formConfig/products.json";
import facetsConfig from "../../config/formConfig/facets.json";
import paginationConfig from "../../config/formConfig/pagination.json";
import pageSizeConfig from "../../config/formConfig/pageSize.json";
import sortingConfig from "../../config/formConfig/sorting.json";
import productViewConfig from "../../config/formConfig/productView.json";
import breadcrumbsConfig from "../../config/formConfig/breadcrumbs.json";
import spellCheckConfig from "../../config/formConfig/spellCheck.json";
import bannerConfig from "../../config/formConfig/banners.json";
import variantsConfig from "../../config/formConfig/variants.json";
import swatchesConfig from "../../config/formConfig/swatches.json";
import noResultsConfig from "../../config/formConfig/noResults.json";
import loaderConfig from "../../config/formConfig/loader.json";

// import { getAllConfig } from "../../utils/getConfig";

import CodeMirror from "@uiw/react-codemirror";
import { darculaInit } from "@uiw/codemirror-theme-darcula";
import { tags as t } from "@lezer/highlight";
import { javascript } from "@codemirror/lang-javascript";

// import defaultConfig from "../../inputJson/dummy.json";
// import defaultConfig from "../../inputJson/dummyMadrasLink.json";
import defaultConfig from "../../inputJson/dummyMadrasLinkOld.json";
import { Button, Modal } from "unbxd-react-components";
// import defaultConfig from "../inputJson/empty.json";

const FormBuilder = (props = {}) => {
	const { viewConfigTab, setValidatedConfig, hideConfigTab, showConfigTab } =
		props;
	let masterConfig = {};
	let validatedData = {};
	const [formData, setFormData] = useState(defaultConfig);
	const [selectedAcc, setSelectedAcc] = useState(null);
	const confirmModalRef = useRef();

	let [publishPopUp, setPublishPopUp] = useState(false);
	let [publishStatus, setPublishStatus] = useState(false);

	const formConfigs = [
		authConfig,
		searchBoxConfig,
		productsConfig,
		facetsConfig,
		pageSizeConfig,
		sortingConfig,
		productViewConfig,
		spellCheckConfig,
		loaderConfig,
		swatchesConfig,
		noResultsConfig,
		variantsConfig,
		paginationConfig,
		breadcrumbsConfig,
		bannerConfig,
	];

	// const formConfigs = getAllConfig();

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
	updateMasterConfig(formConfigs);

	const updateFormData = (data = {}, moduleKey = null) => {
		if (moduleKey) {
			setFormData({
				...formData,
				[moduleKey]: { ...formData[moduleKey], ...data },
			});
		} else {
			setFormData({ ...formData, ...data });
		}
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
						validatedData = {
							...validatedData,
							[moduleKey]: { ...formConfig },
						};

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
		let formComponent = document.getElementById("formComponents");
		let formConfig = document.getElementById("formjson");
		formComponent.classList.toggle("hidden");
		formConfig.classList.toggle("hidden");
	};

	const handlePublisStatus = () => {
		setPublishPopUp(false);
		setPublishStatus(true);
	};

	const handlePublish = () => {
		setPublishPopUp(true);
		setTimeout(handlePublisStatus, 2000);
	};

	return (
		<div
			className="formBuilder"
			style={viewConfigTab ? { display: "inline-block" } : { display: "none" }}
			// style={viewConfigTab ? { display: "inline-block" } : { display: "none" }}
		>
			<div className="formDescription">
				<div className="hideConfigTab">
					<div className="showArrowLeft" onClick={() => hideConfigTab()}>
						<span></span>
					</div>
					Hide Configuration Tab
				</div>
				<div className="formDescriptionHeader">
					<h1>SDK Configuration</h1>{" "}
					<Button appearance="link" onClick={() => toggleConfig()}>
						View JSON
					</Button>
				</div>
				{/* <p>
						Use the below form to configure the Unbxd SDK features and click on
						"Apply" button to apply those changes to the website visible on the
						LHS. Clicking on "Publish" will generate a new URL to the site
						containing these configurations.
					</p> */}
			</div>
			<div className="formComponents" id="formComponents">
				<div className="accordianWrapper">
					<div className="accordian">
						{formConfigs.map((formConfig = {}, i) => {
							return (
								<div className="formWrapper" key={i}>
									<div className="accordianMeta" onClick={() => showContent(i)}>
										<div className="accordianTitle">
											<h1 className="moduleName">{formConfig.moduleName}</h1>
											{/* <p className="moduleDesc">{moduleDesc}</p> */}
										</div>
										<span
											className={`accordianDrop ${
												selectedAcc == i ? "up" : "down"
											}`}
										></span>
										{/* // {selectedAcc == i ? (
										// 	<span className="accordianDrop up"></span>
										// ) : (
										// 	<span className="accordianDrop down"></span>
										// )} */}
									</div>
									{selectedAcc == i && (
										<div className={"accordianContent"}>
											{/* <div className="accordianDesc">
											{formConfig.moduleDesc}
												<br />
												<a
													className="moduleLink"
													href={formConfig.docLink}
													target="_blank"
												>
													Click Here
												</a>{" "}
												to know more about {formConfig.moduleName}.
											</div> */}
											<FormWrapper
												key={i}
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
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="btnSection">
				<button
					id="applyBtn"
					onClick={() => validator()}
					className="RCB-btn-secondary"
					// disabled={true}
				>
					Apply
				</button>
				<button
					id="publishBtn"
					className="RCB-btn-primary"
					// disabled={true}
					onClick={() => {
						confirmModalRef.current.showModal();
					}}
				>
					Publish
				</button>
			</div>
			<div className="formjson hidden" id="formjson">
				<CodeMirror
					className="jsonCode"
					value={JSON.stringify(formData, null, 4)}
					theme={darculaInit({
						settings: {
							caret: "#c6c6c6",
							fontFamily: "monospace",
						},
						styles: [{ tag: t.comment, color: "#6272a4" }],
					})}
					placeholder="Insert code here..."
					height="490px"
					width="500px"
					extensions={[javascript({ json: true })]}
				/>
			</div>
			<div className="confirm-modal">
				<Modal
					// title={
					// 	<div className="modal-title">
					// 		<h3>Confirm</h3>
					// 		<div
					// 			className="cancel"
					// 			onClick={() => {
					// 				setPublishPopUp(false);
					// 				setPublishStatus(false);
					// 				confirmModalRef.current.hideModal();
					// 			}}
					// 		></div>
					// 	</div>
					// }
					title="Confirm"
					ref={confirmModalRef}
					showClose={true}
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
						<div>
							<div className="confirm-modal-body">
								Publishing...
								<div>
									<img src="loading.gif" alt="Loading"></img>
								</div>
							</div>
						</div>
					)}
					{publishStatus && (
						<div>
							<div>
								<div className="confirm-modal-body">
									Your configurations have been published to the below link:
									<input readOnly value="www.google.com" />
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
						</div>
					)}
				</Modal>
			</div>
		</div>
	);
};

export default FormBuilder;
