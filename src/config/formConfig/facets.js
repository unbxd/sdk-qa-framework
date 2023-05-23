const facetsConfig = {
	moduleName: "Facets",
	moduleKey: "facet",
	moduleDesc:
		"Product filters provided on your webpage which allows customers to narrow down the search result set.",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/FacetsConfig.html",
	config: [
		{
			name: "facetsEl",
			dataType: "element",
			required: "true",
		},
		{
			name: "facetTemplate",
			dataType: "function",
		},
		{
			name: "facetItemTemplate",
			dataType: "function",
		},
		{
			name: "facetMultiSelect",
			dataType: "boolean",
			label: "Select Multiple Facets",
		},
		{
			name: "facetClass",
			dataType: "string",
		},
		{
			name: "facetAction",
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
			name: "selectedFacetClass",
			dataType: "string",
		},
		{
			name: "selectedFacetsEl",
			dataType: "element",
		},
		{
			name: "selectedFacetTemplate",
			dataType: "function",
		},
		{
			name: "selectedFacetItemTemplate",
			dataType: "function",
		},
		{
			name: "selectedFacetConfig",
			dataType: "object",
		},
		{
			name: "clearAllText",
			dataType: "string",
		},
		{
			name: "rangeTemplate",
			dataType: "function",
		},
		{
			name: "rangeWidgetConfig",
			dataType: "object",
		},
		{
			name: "facetMultilevel",
			dataType: "boolean",
			label: "Enable Multi Level Facets",
		},
		{
			name: "facetMultilevelName",
			dataType: "string",
			displayIf: function (facet) {
				return facet.facetMultilevel === true;
			},
		},
		{
			name: "multiLevelFacetSelectorClass",
			dataType: "string",
			displayIf: function (facet) {
				return facet.facetMultilevel === true;
			},
		},
		{
			name: "multiLevelFacetTemplate",
			dataType: "function",
			displayIf: function (facet) {
				return facet.facetMultilevel === true;
			},
		},
		{
			name: "facetDepth",
			dataType: "number",
			displayIf: function (facet) {
				return facet.facetMultilevel === true;
			},
		},
		{
			name: "clearFacetsSelectorClass",
			dataType: "string",
		},
		{
			name: "removeFacetsSelectorClass",
			dataType: "string",
		},
		{
			name: "onFacetLoad",
			dataType: "function",
		},
		{
			name: "applyMultipleFilters",
			dataType: "boolean",
			label: "Apply Multiple Filters",
		},
		{
			name: "applyButtonText",
			dataType: "string",
			displayIf: function (facet) {
				return facet.applyMultipleFilters === true;
			},
		},
		{
			name: "clearButtonText",
			dataType: "string",
			displayIf: function (facet) {
				return facet.applyMultipleFilters === true;
			},
		},
		{
			name: "isCollapsible",
			dataType: "boolean",
			label: "Make Facet Collapsible",
		},
		{
			name: "defaultOpen",
			dataType: "string",
		},
		{
			name: "isSearchable",
			dataType: "boolean",
			label: "Make Facet Searchable",
		},
		{
			name: "searchPlaceHolder",
			dataType: "string",
			displayIf: function (facet) {
				return facet.isSearchable === true;
			},
		},
		{
			name: "enableViewMore",
			dataType: "boolean",
			label: "Enable View More",
		},
		{
			name: "viewMoreText",
			dataType: "array",
			displayIf: function (facet) {
				return facet.enableViewMore === true;
			},
		},
		{
			name: "viewMoreLimit",
			dataType: "number",
			displayIf: function (facet) {
				return facet.enableViewMore === true;
			},
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
			name: "Range Sliders",
			key: "facetsRangeSlider",
			icon: "rangeSlider",
			desc: "Click to apply configurations of Range Sliders.",
			configData:
				"https://libraries.unbxdapi.com/search-sdk/qa-framework/demo-unbxd700181503576558/fb853e3332f2645fac9d71dc63e09ec1.json",
		},
		{
			name: "Checkable Range Facets",
			key: "facetsCheckable",
			icon: "checkableFacets",
			desc: "Click to apply configurations of Checkable Range Facets.",
			configData:
				"https://libraries.unbxdapi.com/search-sdk/qa-framework/demo-unbxd700181503576558/fb853e3332f2645fac9d71dc63e09ec1.json",
		},
		{
			name: "Facets w/ Color Swatches",
			key: "facetsSwathes",
			icon: "swatchesFacets",
			desc: "Click to apply configurations of Facets with Color Swatches.",
			configData:
				"https://libraries.unbxdapi.com/search-sdk/qa-framework/demo-unbxd700181503576558/fb853e3332f2645fac9d71dc63e09ec1.json",
		},
	],
};

export default facetsConfig;
