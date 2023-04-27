import authConfig from "../config/formConfig/authentication.json";
import searchBoxConfig from "../config/formConfig/searchBox.json";
import productsConfig from "../config/formConfig/products.json";
import facetsConfig from "../config/formConfig/facets.json";
import paginationConfig from "../config/formConfig/pagination.json";
import pageSizeConfig from "../config/formConfig/pageSize.json";
import sortingConfig from "../config/formConfig/sorting.json";
import productViewConfig from "../config/formConfig/productView.json";
import breadcrumbsConfig from "../config/formConfig/breadcrumbs.json";
import spellCheckConfig from "../config/formConfig/spellCheck.json";
import bannerConfig from "../config/formConfig/banners.json";
import variantsConfig from "../config/formConfig/variants.json";
import swatchesConfig from "../config/formConfig/swatches.json";
import noResultsConfig from "../config/formConfig/noResults.json";
import loaderConfig from "../config/formConfig/loader.json";

const masterConfig = {
	[authConfig["moduleKey"]]: authConfig["config"],
	[searchBoxConfig["moduleKey"]]: searchBoxConfig["config"],
	[productsConfig["moduleKey"]]: productsConfig["config"],
	[facetsConfig["moduleKey"]]: facetsConfig["config"],
	[paginationConfig["moduleKey"]]: paginationConfig["config"],
	[pageSizeConfig["moduleKey"]]: pageSizeConfig["config"],
	[sortingConfig["moduleKey"]]: sortingConfig["config"],
	[productViewConfig["moduleKey"]]: productViewConfig["config"],
	[breadcrumbsConfig["moduleKey"]]: breadcrumbsConfig["config"],
	[spellCheckConfig["moduleKey"]]: spellCheckConfig["config"],
	[bannerConfig["moduleKey"]]: bannerConfig["config"],
	[variantsConfig["moduleKey"]]: variantsConfig["config"],
	[swatchesConfig["moduleKey"]]: swatchesConfig["config"],
	[noResultsConfig["moduleKey"]]: noResultsConfig["config"],
	[loaderConfig["moduleKey"]]: loaderConfig["config"],
};

const masterData = {
	[authConfig["moduleName"]]: authConfig,
	[searchBoxConfig["moduleName"]]: searchBoxConfig,
	[productsConfig["moduleKey"]]: productsConfig,
	[facetsConfig["moduleKey"]]: facetsConfig,
	[paginationConfig["moduleKey"]]: paginationConfig,
	[pageSizeConfig["moduleKey"]]: pageSizeConfig,
	[sortingConfig["moduleKey"]]: sortingConfig,
	[productViewConfig["moduleKey"]]: productViewConfig,
	[breadcrumbsConfig["moduleKey"]]: breadcrumbsConfig,
	[spellCheckConfig["moduleKey"]]: spellCheckConfig,
	[bannerConfig["moduleKey"]]: bannerConfig,
	[variantsConfig["moduleKey"]]: variantsConfig,
	[swatchesConfig["moduleKey"]]: swatchesConfig,
	[noResultsConfig["moduleKey"]]: noResultsConfig,
	[loaderConfig["moduleKey"]]: loaderConfig,
};

// console.log("masterData:", masterData);

export const getAllConfigs = () => {
	let allConfigs = {};
	for (let key in masterData) {
		const config = masterData[key]["config"];
		allConfigs[key] = config;
	}
	console.log("getAllConfigs:", allConfigs);
	return allConfigs;
};

export const getAllConfigsList = () => {
	let allConfigs = [];
	for (let key in masterData) {
		allConfigs.push(masterData[key]);
	}
	return allConfigs;
};
// getAllConfigsList();

export const getModuleConfigs = (moduleKey) => {
	try {
		// console.log(
		// 	`getModuleConfigs:`,
		// 	moduleKey,
		// 	masterData[moduleKey]["config"]
		// );
		return masterData[moduleKey]["config"];
	} catch (err) {
		return;
	}
};

export const getEleDataType = (moduleName, eleName) => {
	const moduleConfigs = getModuleConfigs(moduleName);
	for (let key of moduleConfigs) {
		if (key.name === eleName) {
			// if (moduleName == "facet") {
			// 	console.log(
			// 		"getDataType:",
			// 		moduleName,
			// 		eleName,
			// 		key.name,
			// 		key.dataType
			// 	);
			// }
			return key.dataType;
		}
	}
};

export const getModuleDesc = (moduleName) => {
	console.log("getModuleDesc:", masterData[moduleName]["moduleDesc"]);
	return masterData[moduleName]["moduleDesc"];
};

export const getModuleLink = (moduleName) => {
	console.log("getModuleLink:", masterData[moduleName]["docLink"]);
	return masterData[moduleName]["docLink"];
};

export const getModuleKey = (moduleName) => {
	console.log("getModuleKey:", masterData[moduleName]["moduleKey"]);
	return masterData[moduleName]["moduleKey"];
};

export const getUseCases = () => {
	let usecases = {};
	for (let key of Object.keys(masterData)) {
		if (masterData[key]["usecases"] != undefined) {
			usecases[key] = masterData[key]["usecases"];
			// let usecase = masterData[key]["usecases"];
			// usecases.push({ ["key"]: key, ["usecases"]: { ...usecase } });
		}
	}
	console.log("Usecases:", usecases);
	return usecases;
};

// getAllConfigs();
// getModuleConfigs("SearchBox");
// getEleDataType("Auth", "siteKey");
// getModuleDesc("Auth");
// getModuleLink("Auth");
// getModuleKey("Pagination");
// getUseCases();

export const getConfig = (moduleKey, key) => {
	if (key) {
		const moduleConfig = masterConfig[moduleKey];
		return moduleConfig.find((c) => c.name === key);
	}
	return masterConfig[moduleKey];
};

// export { getConfig, getAllConfigs, getUseCases };
