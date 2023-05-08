const breadcrumbsConfig = {
	moduleName: "Breadcrumbs",
	moduleKey: "breadcrumb",
	moduleDesc:
		"Navigation element that allows users to see the hierarchical structure of the website.",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/BreadCrumbConfig.html",
	config: [
		{
			name: "enabled",
			dataType: "boolean",
			label: "Enable Breadcrumbs",
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
			name: "selectorClass",
			dataType: "string",
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

export default breadcrumbsConfig;
