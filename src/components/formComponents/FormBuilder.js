import React, { useState } from "react";

import "../../../public/styles/components/form/builder.scss";
import FormIcons from "../formComponents/formElements/FormIcons";
import FormContent from "../formComponents/FormContent";
import { getNativeConfigs } from "../../utils/configUtils";

const FormBuilder = (props) => {
	const {
		setValidatedConfig,
		hideConfigTab,
		viewConfigOption,
		validatedConfig,
		displayMessage,
		validator,
		configKey,
		siteKey,
	} = props;

	const [selectedAcc, setSelectedAcc] = useState(null);

	const formConfigs = getNativeConfigs();

	let showContent = (i) => {
		if (selectedAcc == i) {
			return setSelectedAcc(null);
		}
		setSelectedAcc(i);
	};

	return (
		<div className={viewConfigOption ? "formBuilder" : "formBuilder preview"}>
			<FormIcons
				formConfigs={formConfigs}
				showContent={showContent}
				selectedAcc={selectedAcc}
			/>
			<FormContent
				formConfigs={formConfigs}
				selectedAcc={selectedAcc}
				setSelectedAcc={setSelectedAcc}
				setValidatedConfig={setValidatedConfig}
				hideConfigTab={hideConfigTab}
				validatedConfig={validatedConfig}
				displayMessage={displayMessage}
				validator={validator}
				siteKey={siteKey}
				configKey={configKey}
			/>
		</div>
	);
};

export default FormBuilder;
