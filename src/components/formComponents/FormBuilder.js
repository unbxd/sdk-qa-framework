import React, { useState } from "react";

import "../../../public/styles/components/form/builder.scss";
import FormIcons from "../formComponents/formElements/FormIcons";
import FormContent from "../formComponents/FormContent";

import authConfig from "../../config/formConfig/authentication";
import searchBoxConfig from "../../config/formConfig/searchBox";
import productsConfig from "../../config/formConfig/products";
import facetsConfig from "../../config/formConfig/facets";
import paginationConfig from "../../config/formConfig/pagination";
import pageSizeConfig from "../../config/formConfig/pageSize";
import sortingConfig from "../../config/formConfig/sorting";
import productViewConfig from "../../config/formConfig/productView";
import breadcrumbsConfig from "../../config/formConfig/breadcrumbs";
import spellCheckConfig from "../../config/formConfig/spellCheck";
import bannerConfig from "../../config/formConfig/banners";
import variantsConfig from "../../config/formConfig/variants";
import swatchesConfig from "../../config/formConfig/swatches";
import noResultsConfig from "../../config/formConfig/noResults";
import loaderConfig from "../../config/formConfig/loader";
import othersConfig from "../../config/formConfig/others";

const FormBuilder = (props) => {
	const {
		setValidatedConfig,
		hideConfigTab,
		viewConfigOption,
		validatedConfig,
		// setErrorSet,
		// errorSet,
		displayError,
		// retreivedConfig,
	} = props;
	const [selectedAcc, setSelectedAcc] = useState(null);
	const formConfigs = [
		authConfig,
		searchBoxConfig,
		productsConfig,
		facetsConfig,
		paginationConfig,
		pageSizeConfig,
		sortingConfig,
		productViewConfig,
		breadcrumbsConfig,
		spellCheckConfig,
		bannerConfig,
		// variantsConfig,
		swatchesConfig,
		noResultsConfig,
		loaderConfig,
		othersConfig,
	];

	// console.log("retreivedConfig:", retreivedConfig);

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
				displayError={displayError}
			/>
		</div>
	);
};

export default FormBuilder;
