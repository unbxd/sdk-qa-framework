const paginationConfig = {
	moduleName: "Pagination",
	moduleKey: "pagination",
	moduleDesc:
		"Control the number of products displayed on the page and the type of pagination to display.",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/PaginationConfig.html",
	config: [
		{
			name: "enabled",
			dataType: "boolean",
			label: "Enable Pagination",
		},
		{
			name: "type",
			dataType: "string",
			options: [
				{
					id: 1,
					name: "CLICK_N_SCROLL",
					value: "CLICK_N_SCROLL",
				},
				{
					id: 2,
					name: "FIXED_PAGINATION",
					value: "FIXED_PAGINATION",
				},
				{
					id: 3,
					name: "INFINITE_SCROLL",
					value: "INFINITE_SCROLL",
				},
			],
		},
		{
			name: "el",
			dataType: "element",
			displayIf: function (pagination) {
				return pagination.type !== "INFINITE_SCROLL";
			},
		},
		{
			name: "template",
			dataType: "function",
		},
		{
			name: "pageClass",
			dataType: "string",
		},
		{
			name: "selectedPageClass",
			dataType: "string",
		},
		{
			name: "onPaginate",
			dataType: "function",
		},
		{
			name: "pageLimit",
			dataType: "number",
		},
		{
			name: "infiniteScrollTriggerEl",
			dataType: "element",
		},
		{
			name: "heightDiffToTriggerNextPage",
			dataType: "number",
		},
		{
			name: "action",
			dataType: "string",
			options: [
				{
					id: 1,
					name: "Click",
					value: "click",
				},
				{
					id: 2,
					name: "Change",
					value: "change",
				},
			],
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
	usecases: [
		{
			name: "Infinite Scroll",
			key: "paginationInfinite",
			icon: "infiniteScroll",
			desc: "Click to apply configurations of Infinite Scroll.",
			configData:
				"https://libraries.unbxdapi.com/search-sdk/qa-framework/demo-unbxd700181503576558/fb853e3332f2645fac9d71dc63e09ec1.json",
		},
		{
			name: "Fixed Pagination",
			key: "paginationFixed",
			icon: "fixedPagination",
			desc: "Click to apply configurations of Fixed Pagination.",
			configData:
				"https://libraries.unbxdapi.com/search-sdk/qa-framework/demo-unbxd700181503576558/fb853e3332f2645fac9d71dc63e09ec1.json",
		},
		{
			name: "Click & Scroll",
			key: "paginationClick",
			icon: "clickScroll",
			desc: "Click to apply configurations of Click & Scroll.",
			configData:
				"https://libraries.unbxdapi.com/search-sdk/qa-framework/demo-unbxd700181503576558/fb853e3332f2645fac9d71dc63e09ec1.json",
		},
	],
};

export default paginationConfig;
