const variantsConfig = {
	moduleName: "Variants",
	moduleKey: "variants",
	moduleDesc: "Offer customers a range of options when purchasing a product.",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/VariantsConfig.html",
	config: [
		{
			name: "enabled",
			dataType: "boolean",
			label: "Enable Variants",
		},
		{
			name: "count",
			dataType: "number",
			displayIf: function (variants) {
				return variants.enabled === true;
			},
		},
		{
			name: "groupBy",
			dataType: "string",
			displayIf: function (variants) {
				return variants.enabled === true;
			},
		},
		{
			name: "attributes",
			dataType: "array",
			displayIf: function (variants) {
				return variants.enabled === true;
			},
		},
		{
			name: "mapping",
			dataType: "object",
			displayIf: function (variants) {
				return variants.enabled === true;
			},
		},
	],
};

export default variantsConfig;
