const bannerConfig = {
	moduleName: "Banners",
	moduleKey: "banner",
	moduleDesc:
		"Eu commodo consectetur amet id sit labore adipisicing consequat. Dolor elit elit labore ut irure qui nostrud proident sit proident qui Lorem ut qui. Tempor ad occaecat et minim aute sunt amet occaecat.",
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
