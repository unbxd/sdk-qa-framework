const pageSizeConfig = {
	moduleName: "Page Size",
	moduleKey: "pagesize",
	moduleDesc: "Configure the number of products shown on each page.",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/PageSizeConfig.html",
	config: [
		{
			name: "enabled",
			dataType: "boolean",
			label: "Enable Page Size",
		},
		{
			name: "el",
			dataType: "element",
			displayIf: function (pagesize) {
				return pagesize.enabled === true;
			},
		},
		{
			name: "pageSize",
			dataType: "number",
			displayIf: function (pagesize) {
				return pagesize.enabled === true;
			},
		},
		{
			name: "options",
			dataType: "array",
			displayIf: function (pagesize) {
				return pagesize.enabled === true;
			},
		},
		{
			name: "pageSizeClass",
			dataType: "string",
			displayIf: function (pagesize) {
				return pagesize.enabled === true;
			},
		},
		{
			name: "selectedPageSizeClass",
			dataType: "string",
			displayIf: function (pagesize) {
				return pagesize.enabled === true;
			},
		},
		{
			name: "action",
			dataType: "string",
			options: [
				{
					id: 1,
					name: "Change",
					value: "change",
				},
				{
					id: 2,
					name: "Click",
					value: "click",
				},
			],
			displayIf: function (pagesize) {
				return pagesize.enabled === true;
			},
		},
		{
			name: "template",
			dataType: "function",
			displayIf: function (pagesize) {
				return pagesize.enabled === true;
			},
		},
		{
			name: "tagName",
			dataType: "string",
			displayIf: function (pagesize) {
				return pagesize.enabled === true;
			},
		},
		{
			name: "htmlAttributes",
			dataType: "object",
			displayIf: function (pagesize) {
				return pagesize.enabled === true;
			},
		},
	],
};

export default pageSizeConfig;
