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
		},
		{
			name: "groupBy",
			dataType: "string",
		},
		{
			name: "attributes",
			dataType: "array",
		},
		{
			name: "mapping",
			dataType: "object",
		},
	],
};

export default variantsConfig;
