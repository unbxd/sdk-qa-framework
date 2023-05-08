const swatchesConfig = {
	moduleName: "Swatches",
	moduleKey: "swatches",
	moduleDesc:
		"Indicate the available options for a certain variant of a product.",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/SwatchesConfig.html",
	config: [
		{
			name: "enabled",
			dataType: "boolean",
			label: "Enable Swatches",
		},
		{
			name: "attributesMap",
			dataType: "object",
		},
		{
			name: "swatchClass",
			dataType: "string",
		},
		{
			name: "template",
			dataType: "function",
		},
	],
};

export default swatchesConfig;
