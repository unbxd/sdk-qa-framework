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
	[productsConfig["moduleName"]]: productsConfig,
	[facetsConfig["moduleName"]]: facetsConfig,
	[paginationConfig["moduleName"]]: paginationConfig,
	[pageSizeConfig["moduleName"]]: pageSizeConfig,
	[sortingConfig["moduleName"]]: sortingConfig,
	[productViewConfig["moduleName"]]: productViewConfig,
	[breadcrumbsConfig["moduleName"]]: breadcrumbsConfig,
	[spellCheckConfig["moduleName"]]: spellCheckConfig,
	[bannerConfig["moduleName"]]: bannerConfig,
	[variantsConfig["moduleName"]]: variantsConfig,
	[swatchesConfig["moduleName"]]: swatchesConfig,
	[noResultsConfig["moduleName"]]: noResultsConfig,
	[loaderConfig["moduleName"]]: loaderConfig,
};

const getConfig = (moduleKey, key) => {
	console.log(masterData);
	if (key) {
		const moduleConfig = masterConfig[moduleKey];
		return moduleConfig.find((c) => c.name === key);
	}
	return masterConfig[moduleKey];
};

const getUseCases = () => {
	let usecases = {};
	for (let key of Object.keys(masterData)) {
		if (masterData[key]["usecases"] != undefined) {
			usecases[key] = masterData[key]["usecases"];
			// let usecase = masterData[key]["usecases"];
			// usecases.push({ ["key"]: key, ["usecases"]: { ...usecase } });
		}
	}
	return usecases;
};

const getAllConfig = () => {
	return masterConfig;
};

export { getConfig, getAllConfig, getUseCases };
