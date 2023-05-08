const bannerConfig = {
	moduleName: "Banners",
	moduleKey: "banner",
	moduleDesc:
		"Promote a product or service, or to direct visitors to a specific landing page.",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/BannerConfig.html",
	config: [
		{
			name: "enabled",
			label: "Enable Banners",
			dataType: "boolean",
		},
		{
			name: "el",
			dataType: "element",
		},
		{
			name: "template",
			dataType: "function",
		},
		{
			name: "tagname",
			dataType: "string",
		},
		{
			name: "htmlattributes",
			dataType: "object",
		},
		{
			name: "openNewTab",
			dataType: "boolean",
			label: "Open In New Tab",
		},
	],
};

export default bannerConfig;
