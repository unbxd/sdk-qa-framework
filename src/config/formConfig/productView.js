const productViewConfig = {
	moduleName: "Product View",
	moduleKey: "productView",
	moduleDesc:
		"Proident sint mollit veniam velit. Cillum esse eu sint culpa et enim tempor culpa laborum magna reprehenderit aliquip cillum incididunt. In cupidatat incididunt officia aute ut dolore exercitation. Ex sint est consectetur eu non duis esse est aliquip. Lorem excepteur nostrud enim ut.",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/ProductViewConfig.html",
	config: [
		{
			name: "enabled",
			dataType: "boolean",
			label: "Enable Product View",
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
			name: "defaultViewType",
			dataType: "string",
			options: [
				{
					id: 1,
					name: "GRID",
					value: "GRID",
				},
				{
					id: 2,
					name: "LIST",
					value: "LIST",
				},
			],
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
			name: "viewTypeClass",
			dataType: "string",
		},
		{
			name: "selectedViewTypeClass",
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
	usecases: [
		{
			name: "List View",
			key: "productViewList",
			icon: "listProductView",
			desc: "Click to apply configurations of List View.",
			configData:
				"https://libraries.unbxdapi.com/search-sdk/qa-framework/demo-unbxd700181503576558/fb853e3332f2645fac9d71dc63e09ec1.json",
		},
		{
			name: "Grid View",
			key: "productViewGrid",
			icon: "gridProductView",
			desc: "Click to apply configurations of Grid View.",
			configData:
				"https://libraries.unbxdapi.com/search-sdk/qa-framework/demo-unbxd700181503576558/fb853e3332f2645fac9d71dc63e09ec1.json",
		},
	],
};

export default productViewConfig;
