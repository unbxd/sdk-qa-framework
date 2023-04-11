import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { darculaInit } from "@uiw/codemirror-theme-darcula";
import { tags as t } from "@lezer/highlight";
import { javascript } from "@codemirror/lang-javascript";

import { getConfig } from "../../utils/getConfig";
import CustomDrop from "./formElements/CustomDrop";
import CustomInput from "./formElements/CustomInput";
import CustomRadio from "./formElements/CustomRadio";
import FormWrapperPreloader from "./FormWrapperPreloader";

const FormConfigWrapper = (props = {}) => {
	const {
		attrConfig: { dataType = "", required = false, name = "", options } = {},
		onChange,
		onCodeChange,
		docLink,
		formData,
		moduleKey,
	} = props;

	switch (dataType) {
		case "number": //text type(number)
			return (
				<div className="wrapper">
					<FormWrapperPreloader
						name={name}
						dataType={dataType}
						required={required}
						docLink={docLink}
					/>
					<CustomInput
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
				<div className="wrapper">
					<FormWrapperPreloader
						name={name}
						dataType={dataType}
						required={required}
						docLink={docLink}
					/>
					<CodeMirror
						className="codeMirrorComponent"
						value={
							formData[name]
								? JSON.parse(JSON.stringify(formData[name], null, 4))
								: ""
						}
						placeholder="Insert code here..."
						height="200px"
						width="100%"
						name={name}
						extensions={[javascript({ jsx: true })]}
						onChange={(code) => onCodeChange(name, code)}
					/>
				</div>
			);

		case "boolean": {
			let defaultVal;
			try {
				const config = getConfig(moduleKey, name);
				let options = config.options;
				for (let option of options) {
					if (option.value === formData[name]) {
						defaultVal = option;
						break;
					}
				}
			} catch (err) {}

			return (
				<div className="wrapper">
					<FormWrapperPreloader
						name={name}
						dataType={dataType}
						required={required}
						docLink={docLink}
					/>
					<CustomRadio
						name={name}
						appearance="block"
						defaultValue={defaultVal ? defaultVal.id : null}
						options={options}
					/>
				</div>
			);
		}

		case "string":
		case "element":
		default: {
			if (options === undefined) {
				return (
					<div className="wrapper">
						<FormWrapperPreloader
							name={name}
							dataType={dataType}
							required={required}
							docLink={docLink}
						/>
						<CustomInput
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
					<div className="wrapper">
						<FormWrapperPreloader
							name={name}
							dataType={dataType}
							required={required}
							docLink={docLink}
						/>
						<CustomDrop
							name={name}
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
