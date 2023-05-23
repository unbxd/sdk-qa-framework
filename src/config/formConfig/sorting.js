const sortingConfig = {
	moduleName: "Sorting",
	moduleKey: "sort",
	moduleDesc:
		"Rearrange the search results based on certain fields in a particular order.",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/SortConfig.html",
	config: [
		{
			name: "enabled",
			dataType: "boolean",
			label: "Enable Sort",
		},
		{
			name: "el",
			dataType: "element",
			displayIf: function (sort) {
				return sort.enabled === true;
			},
		},
		{
			name: "options",
			dataType: "array",
			displayIf: function (sort) {
				return sort.enabled === true;
			},
		},
		{
			name: "sortClass",
			dataType: "string",
			displayIf: function (sort) {
				return sort.enabled === true;
			},
		},
		{
			name: "selectedSortClass",
			dataType: "string",
			displayIf: function (sort) {
				return sort.enabled === true;
			},
		},
		{
			name: "template",
			dataType: "function",
			displayIf: function (sort) {
				return sort.enabled === true;
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
			displayIf: function (sort) {
				return sort.enabled === true;
			},
		},
		{
			name: "tagName",
			dataType: "string",
			displayIf: function (sort) {
				return sort.enabled === true;
			},
		},
		{
			name: "htmlAttributes",
			dataType: "object",
			displayIf: function (sort) {
				return sort.enabled === true;
			},
		},
	],
};

export default sortingConfig;
