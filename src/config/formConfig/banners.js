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
			displayIf: function (banner) {
				return banner.enabled === true;
			},
		},
		{
			name: "template",
			dataType: "function",
			displayIf: function (banner) {
				return banner.enabled === true;
			},
		},
		{
			name: "tagname",
			dataType: "string",
			displayIf: function (banner) {
				return banner.enabled === true;
			},
		},
		{
			name: "htmlattributes",
			dataType: "object",
			displayIf: function (banner) {
				return banner.enabled === true;
			},
		},
		{
			name: "openNewTab",
			dataType: "boolean",
			label: "Open In New Tab",
			displayIf: function (banner) {
				return banner.enabled === true;
			},
		},
	],
};

export default bannerConfig;
