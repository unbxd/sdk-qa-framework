import React, { useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { darculaInit } from "@uiw/codemirror-theme-darcula";
import { tags as t } from "@lezer/highlight";
import { javascript } from "@codemirror/lang-javascript";

import { getConfig } from "../../utils/configUtils";
import CustomDrop from "./formElements/CustomDrop";
import CustomInput from "./formElements/CustomInput";
import CustomRadio from "./formElements/CustomRadio";
import CustomCheck from "./formElements/CustomCheck";
import FormWrapperPreloader from "./FormWrapperPreloader";
import { Modal, Button } from "unbxd-react-components";

const FormConfigWrapper = (props = {}) => {
	const {
		attrConfig: { dataType = "", required = false, name = "", options } = {},
		delayChange,
		onCodeChange,
		docLink,
		formData,
		moduleKey,
		setFSCodeEditorData,
		fsCodeEditorData,
	} = props;

	const viewCodeEditorRef = useRef();

	switch (dataType) {
		case "number": //text type(number)
			return (
				<div className="config">
					{/* <FormWrapperPreloader
						name={name}
						dataType={dataType}
						required={required}
						docLink={docLink}
					/> */}
					<div className="doclinkWrapper">
						<a
							className="doclink"
							href={docLink + "#" + name.toLowerCase()}
							target="_blank"
						></a>
					</div>
					<CustomInput
						label={name}
						type="number"
						name={name}
						defaultValue={
							parseInt(formData[name]) ? parseInt(formData[name]) : ""
						}
					/>
				</div>
			);

		case "object":
		case "function":
		case "array": //code
			return (
				<div className="config">
					{/* <FormWrapperPreloader
						name={name}
						dataType={dataType}
						required={required}
						docLink={docLink}
					/> */}
					<Modal
						title={`${moduleKey} > ${name}`}
						ref={viewCodeEditorRef}
						showClose={true}
						className="editorModal"
					>
						<div className="confirm-modal-body">
							<CodeMirror
								id="fsCodeEditor"
								className="fsCodeEditor"
								value={fsCodeEditorData}
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
									console.log("onCodeChange");
									// onCodeChange(name, code);
									delayChange(name, code);
									// setJsonData(eval("(" + code + ")"));
								}}
							/>
						</div>
						<div className="modal-footer">
							<Button
								appearance="primary"
								className="closeEditorModal"
								onClick={() => {
									setFSCodeEditorData(null);
									viewCodeEditorRef.current.hideModal();
								}}
							>
								Update
							</Button>
						</div>
					</Modal>
					<div className="doclinkWrapper">
						<a
							className="doclink"
							href={docLink + "#" + name.toLowerCase()}
							target="_blank"
						></a>
					</div>
					<div className="codeMirrorComponent">
						<label className="RCB-form-el-label" htmlFor={name}>
							{name}
						</label>
						<div className="editorComponent">
							<div
								className="enableFullScreen"
								onClick={() => {
									setFSCodeEditorData(
										JSON.parse(JSON.stringify(formData[name], null, 4))
									);
									viewCodeEditorRef.current.showModal();
								}}
							></div>
							<CodeMirror
								name={name}
								className="editor"
								value={
									formData[name]
										? JSON.parse(JSON.stringify(formData[name], null, 4))
										: ""
								}
								placeholder="Insert code here..."
								height="200px"
								width="100%"
								extensions={[javascript({ jsx: true })]}
								onChange={(code) => delayChange(name, code)}
							/>
						</div>
					</div>
				</div>
			);
		case "boolean": {
			// let defaultVal;
			// try {
			// 	const config = getConfig(moduleKey, name);
			// 	let options = config.options;
			// 	for (let option of options) {
			// 		if (option.value === formData[name]) {
			// 			defaultVal = option;
			// 			break;
			// 		}
			// 	}
			// } catch (err) {}

			return (
				<div className="config">
					{/* <FormWrapperPreloader
						name={name}
						dataType={dataType}
						required={required}
						docLink={docLink}
					/> */}
					{/* <CustomRadio
						label={name}
						name={name}
						appearance="block"
						defaultValue={defaultVal ? defaultVal.id : null}
						options={options}
					/> */}
					<div className="doclinkWrapper">
						<a
							className="doclink"
							href={docLink + "#" + name.toLowerCase()}
							target="_blank"
						></a>
					</div>
					<CustomCheck
						label={name}
						appearance="inline"
						name={name}
						defaultValue={eval(formData[name])}
					/>
				</div>
			);
		}

		case "string":
		case "element":
		default: {
			if (options === undefined) {
				return (
					<div className="config">
						{/* <FormWrapperPreloader
							name={name}
							dataType={dataType}
							required={required}
							docLink={docLink}
						/> */}
						<div className="doclinkWrapper">
							<a
								className="doclink"
								href={docLink + "#" + name.toLowerCase()}
								target="_blank"
							></a>
						</div>
						<CustomInput
							label={name}
							name={name}
							type="text"
							defaultValue={formData[name] ? formData[name] : ""}
							value={formData[name]}
						/>
					</div>
				);
			} else {
				const config = getConfig(moduleKey, name);
				let defaultVal;
				for (let option of config.options) {
					if (option.value === formData[name]) {
						defaultVal = option;
						break;
					}
				}
				return (
					<div className="config">
						{/* <FormWrapperPreloader
							name={name}
							dataType={dataType}
							required={required}
							docLink={docLink}
						/> */}
						<div className="doclinkWrapper">
							<a
								className="doclink"
								href={docLink + "#" + name.toLowerCase()}
								target="_blank"
							></a>
						</div>
						<CustomDrop
							name={name}
							label={name}
							appearance="block"
							className=""
							options={options}
							defaultValue={defaultVal}
						/>
					</div>
				);
			}
		}
	}
};

export default FormConfigWrapper;
