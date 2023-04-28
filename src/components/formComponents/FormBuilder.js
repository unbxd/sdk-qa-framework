import React, { useState } from "react";

import FormIcons from "../formComponents/formElements/FormIcons";
import FormContent from "../formComponents/FormContent";

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
import othersConfig from "../../config/formConfig/others.json";

const FormBuilder = (props) => {
	const { viewConfigTab, setValidatedConfig, hideConfigTab } = props;
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

	let showContent = (i) => {
		if (selectedAcc == i) {
			return setSelectedAcc(null);
		}
		setSelectedAcc(i);
	};
	return (
		<div
			className="formBuilder"
			style={viewConfigTab ? { display: "flex" } : { display: "none" }}
		>
			<FormIcons
				formConfigs={formConfigs}
				showContent={showContent}
				selectedAcc={selectedAcc}
			/>
			<FormContent
				formConfigs={formConfigs}
				selectedAcc={selectedAcc}
				setSelectedAcc={setSelectedAcc}
				viewConfigTab={viewConfigTab}
				setValidatedConfig={setValidatedConfig}
				hideConfigTab={hideConfigTab}
			/>
		</div>
	);
};

export default FormBuilder;
