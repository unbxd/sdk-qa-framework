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
		},
		{
			name: "options",
			dataType: "array",
		},
		{
			name: "sortClass",
			dataType: "string",
		},
		{
			name: "selectedSortClass",
			dataType: "string",
		},
		{
			name: "template",
			dataType: "function",
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
			name: "tagName",
			dataType: "string",
		},
		{
			name: "htmlAttributes",
			dataType: "object",
		},
	],
};

export default sortingConfig;
