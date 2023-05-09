import React, { useState } from "react";
import { Form } from "unbxd-react-components";
import FormConfigWrapper from "./FormConfigWrapper";
import { getConfig } from "../../utils/configUtils";

const FormWrapper = (props = {}) => {
	const DEBOUNCE_DELAY = 400;

	const {
		moduleConfig: {
			config = [],
			docLink = "",
			moduleName = "",
			moduleDesc = "",
			moduleKey = "",
		} = {},
		updateFormData,
		formData = {},
		setFSCodeEditorData,
		fsCodeEditorData,
	} = props;

	// console.log("formData:", JSON.stringify(formData, null, 4));

	const debounce = (callback, wait) => {
		let timeoutId = null;
		return (...args) => {
			window.clearTimeout(timeoutId);
			timeoutId = window.setTimeout(() => {
				callback.apply(null, args);
			}, wait);
		};
	};

	const onChange = (obj = {}) => {
		// console.log("data:", obj.data);
		let objData = obj.data || {};
		try {
			for (let key in objData) {
				if (objData[key] !== formData[key]) {
					if (objData[key] !== undefined || formData[key] !== undefined) {
						const config = getConfig(moduleKey, key);
						if (config !== undefined) {
							let { dataType, name } = config;
							let selectedVal = "";
							if (dataType === "string") {
								selectedVal = objData[name].value;
							} else if (dataType === "boolean") {
								selectedVal = objData[name];
							} else if (dataType === "number") {
								selectedVal = objData[name].toString();
							}
							objData = { ...objData, [name]: selectedVal };
						} else {
							objData = { ...objData, [key]: objData[key].toString() };
						}
					} else {
						console.log(
							"objData[key]:",
							key,
							objData[key],
							"formData[key]:",
							key,
							formData[key]
						);
					}
				}
			}
		} catch (err) {
			console.log("error:", objData, err);
		}

		// handle obj.errors later on
		if (objData) {
			// console.log("objData:", objData);
			updateFormData(objData, moduleKey);
		}
		// if (obj.data) {
		// 	updateFormData(obj.data, moduleKey);
		// }
	};

	const onCodeChange = (field, code) => {
		updateFormData({ [field]: code }, moduleKey);
	};

	const delayChange = debounce(function (element, code) {
		if (code === undefined) {
			onChange(element);
		} else {
			onCodeChange(element, code);
		}
	}, DEBOUNCE_DELAY);

	return (
		<Form onChange={delayChange}>
			{config.map((conf, index) => {
				let display = true;
				if (conf["displayIf"] && typeof conf["displayIf"] === "function") {
					display = conf["displayIf"](formData);
				}
				if (display) {
					return (
						<FormConfigWrapper
							fsCodeEditorData={fsCodeEditorData}
							setFSCodeEditorData={setFSCodeEditorData}
							moduleKey={moduleKey}
							formData={formData}
							key={index}
							docLink={docLink}
							attrConfig={conf}
							delayChange={delayChange}
							// onChange={delayChange}
							onCodeChange={delayChange}
						/>
					);
				}
			})}
		</Form>
	);
};

export default FormWrapper;
