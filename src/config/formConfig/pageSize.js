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
		},
		{
			name: "pageSize",
			dataType: "number",
		},
		{
			name: "options",
			dataType: "array",
		},
		{
			name: "pageSizeClass",
			dataType: "string",
		},
		{
			name: "selectedPageSizeClass",
			dataType: "string",
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
		},
		{
			name: "template",
			dataType: "function",
		},
		{
			name: "tagName",
			dataType: "string",
		},
		{
			name: "htmlAttributes",
			dataType: "object",
		},
	],
};

export default pageSizeConfig;
