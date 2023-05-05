const productsConfig = {
	moduleName: "Products",
	moduleKey: "products",
	moduleDesc:
		"Ea laboris deserunt laborum pariatur tempor Lorem reprehenderit proident. Cupidatat minim adipisicing enim voluptate minim proident. Ut aliqua ea nulla amet nostrud pariatur voluptate laborum. Deserunt culpa adipisicing qui exercitation tempor velit tempor laboris exercitation.",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/ProductsConfig.html",
	config: [
		{
			name: "productType",
			dataType: "string",
			required: true,
			options: [
				{
					id: 1,
					name: "SEARCH",
					value: "SEARCH",
				},
				{
					id: 2,
					name: "CATEGORY",
					value: "CATEGORY",
				},
			],
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
			name: "productAttributes",
			dataType: "array",
		},
		{
			name: "attributesMap",
			dataType: "object",
		},
		{
			name: "gridCount",
			dataType: "number",
		},
		{
			name: "productItemClass",
			dataType: "string",
		},
		{
			name: "onProductClick",
			dataType: "function",
		},
		{
			name: "defaultImage",
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

export default productsConfig;
