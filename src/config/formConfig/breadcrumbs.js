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
			displayIf: function (breadcrumb) {
				return breadcrumb.enabled === true;
			},
		},
		{
			name: "template",
			dataType: "function",
			displayIf: function (breadcrumb) {
				return breadcrumb.enabled === true;
			},
		},
		{
			name: "selectorClass",
			dataType: "string",
			displayIf: function (breadcrumb) {
				return breadcrumb.enabled === true;
			},
		},
		{
			name: "tagName",
			dataType: "string",
			displayIf: function (breadcrumb) {
				return breadcrumb.enabled === true;
			},
		},
		{
			name: "htmlAttributes",
			dataType: "object",
			displayIf: function (breadcrumb) {
				return breadcrumb.enabled === true;
			},
		},
	],
};

export default breadcrumbsConfig;
