import React, { useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import { getConfig } from "../../utils/configUtils";
import CustomDrop from "./formElements/CustomDrop";
import CustomInput from "./formElements/CustomInput";
import CustomCheck from "./formElements/CustomCheck";
import { Modal, Button } from "unbxd-react-components";

const FormConfigWrapper = (props = {}) => {
	const {
		attrConfig: {
			dataType = "",
			required = false,
			name = "",
			options,
			label,
		} = {},
		delayChange,
		onCodeChange,
		docLink,
		formData,
		moduleKey,
		setFSCodeEditorData,
		fsCodeEditorData,
		codeTemplate,
	} = props;

	const viewCodeEditorRef = useRef();

	switch (dataType) {
		case "number": //text type(number)
			return (
				<div className="config">
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
		case "array": {
			// console.log("obj/func/arr:", name, formData[name], codeTemplate);
			return (
				<div className="config">
					<Modal
						title={`${moduleKey} > ${name}`}
						ref={viewCodeEditorRef}
						showClose={true}
						className="editorModal"
						onClose={() => {
							console.log("viewCodeEditorRef closed");
						}}
					>
						<div className="confirm-modal-body">
							<CodeMirror
								id="fsCodeEditor"
								className="fsCodeEditor"
								value={fsCodeEditorData}
								placeholder="Insert code here..."
								height="100%"
								width="100%"
								extensions={[javascript({ json: true })]}
								onChange={(code) => {
									delayChange(name, code);
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
									// console.log("enableFullScreen:", formData[name]);
									setFSCodeEditorData(
										formData[name] !== undefined
											? JSON.parse(JSON.stringify(formData[name], null, 4))
											: codeTemplate.length > 0
											? codeTemplate
											: ""
									);
									// setFSCodeEditorData(
									// 	JSON.parse(JSON.stringify(formData[name], null, 4))
									// );
									viewCodeEditorRef.current.showModal();
								}}
							>
								<div className="icon"></div>
							</div>
							<CodeMirror
								name={name}
								className="editor"
								value={
									formData[name] !== undefined
										? JSON.parse(JSON.stringify(formData[name], null, 4))
										: codeTemplate.length > 0
										? codeTemplate
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
		}
		case "boolean": {
			return (
				<div className="config">
					<div className="doclinkWrapper">
						<a
							className="doclink"
							href={docLink + "#" + name.toLowerCase()}
							target="_blank"
						></a>
					</div>
					<CustomCheck
						label={label}
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
