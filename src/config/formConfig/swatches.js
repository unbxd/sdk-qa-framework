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
			displayIf: function (swatches) {
				return swatches.enabled === true;
			},
		},
		{
			name: "swatchClass",
			dataType: "string",
			displayIf: function (swatches) {
				return swatches.enabled === true;
			},
		},
		{
			name: "template",
			dataType: "function",
			displayIf: function (swatches) {
				return swatches.enabled === true;
			},
		},
	],
};

export default swatchesConfig;
