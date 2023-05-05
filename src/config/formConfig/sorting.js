const sortingConfig = {
	moduleName: "Sorting",
	moduleKey: "sort",
	moduleDesc:
		"Occaecat aute consectetur culpa consectetur adipisicing reprehenderit esse. Enim ut esse incididunt quis eiusmod eiusmod. Dolore consectetur cupidatat ut aliquip cillum sunt duis Lorem aute amet aliqua laborum amet incididunt. Cillum nostrud sunt consectetur nostrud non laboris consectetur adipisicing.",
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
