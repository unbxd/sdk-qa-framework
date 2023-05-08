const loaderConfig = {
	moduleName: "Loader",
	moduleKey: "loader",
	moduleDesc: "Page loader to be shown when fetching search API results.",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/LoaderConfig.html",
	config: [
		{
			name: "el",
			dataType: "element",
		},
		{
			name: "template",
			dataType: "function",
		},
	],
};

export default loaderConfig;
