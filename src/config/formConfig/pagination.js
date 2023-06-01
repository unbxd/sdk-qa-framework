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
			displayIf: function (pagination) {
				return pagination.enabled === true;
			},
		},
		{
			name: "el",
			dataType: "element",
			displayIf: function (pagination) {
				return (
					pagination.type !== "INFINITE_SCROLL" && pagination.enabled === true
				);
			},
		},
		{
			name: "template",
			dataType: "function",
			displayIf: function (pagination) {
				return (
					pagination.type !== "INFINITE_SCROLL" && pagination.enabled === true
				);
			},
			codeTemplate: function (pagination) {
				if (pagination.type === "FIXED_PAGINATION") {
					return `function (paginationData, pagination = this.options.pagination) {
	if (!paginationData) {
		return '';
	}
	const {
		currentPage,
		isNext,
		isPrev,
		noOfPages,
		productsLn,
		numberOfProducts,
		rows,
	} = paginationData;
	const { pageClass, selectedPageClass, pageLimit } = pagination;
	const { UNX_pageNumber } = this.testIds;
	if (numberOfProducts <= productsLn) {
		return '';
	}
	let nextBtn = \`<button class="UNX-next-btn UNX-page-next \${pageClass}" data-page-action="next">></button>\`;
	let prevBtn = \`<button class="UNX-prev-btn UNX-page-prev \${pageClass}" data-page-action="prev"><</button>\`;
	let pageNumbers = '';
	let pages = noOfPages < pageLimit ? noOfPages : pageLimit;
	let startPoint = 1;
	let r = Math.ceil(pageLimit / 2);
	let point = currentPage - r;
	if (point > 0) {
		startPoint = point;
		pages = currentPage + r;
	}
	const ls = currentPage + r;
	if (ls >= noOfPages) {
		const diff = ls - noOfPages;
		startPoint = startPoint - diff;
		if (startPoint <= 0) {
			startPoint = 1;
		}
		pages = noOfPages;
	}

	for (let i = startPoint; i <= pages; i++) {
		const tId = \`\${UNX_pageNumber}\${i}\`;
		const pageClassSelected = i === currentPage ? selectedPageClass : "";
		pageNumbers += \`<button data-test-id="\${tId}" data-page-action="paginate" data-page-no="\${(i - 1) * rows}" class="UNX-page-button \${pageClass} \${pageClassSelected}">\${i}</button>\`;
	}
	if (!isNext) {
		nextBtn = '<button disabled class="UNX-next-btn UNX-page-next">></button>';
	}
	if (!isPrev) {
		prevBtn = '<button disabled class="UNX-prev-btn UNX-page-prev"><</button>';
	}
	return [
		'<div class="UNX-pagination-block">',
		prevBtn,
		\`<div class="UNX-page-no-block">\${pageNumbers}</div>\`,
		nextBtn,
		'</div>',
	].join("");
}`;
				} else if (pagination.type === "CLICK_N_SCROLL") {
					return `function(pageData, pagination={}) {
	const {
		pageClass = ""
	} = pagination;
	return '<div class="UNX-click-scroll"><button data-test-id="\${this.testIds.UNX_loadMore}" class="UNX-click-n-scroll \${pageClass}">Load More</button></div>'
}`;
				} else if (pagination.type === "INFINITE_SCROLL") {
					return "";
				}
			},
		},
		{
			name: "pageClass",
			dataType: "string",
			displayIf: function (pagination) {
				return (
					pagination.enabled === true && pagination.type !== "INFINITE_SCROLL"
				);
			},
		},
		{
			name: "selectedPageClass",
			dataType: "string",
			displayIf: function (pagination) {
				return (
					pagination.enabled === true && pagination.type === "FIXED_PAGINATION"
				);
			},
		},
		{
			name: "onPaginate",
			dataType: "function",
			displayIf: function (pagination) {
				return pagination.enabled === true;
			},
		},
		{
			name: "pageLimit",
			dataType: "number",
			displayIf: function (pagination) {
				return (
					pagination.enabled === true && pagination.type === "FIXED_PAGINATION"
				);
			},
		},
		{
			name: "infiniteScrollTriggerEl",
			dataType: "element",
			displayIf: function (pagination) {
				return (
					pagination.enabled === true && pagination.type === "INFINITE_SCROLL"
				);
			},
		},
		{
			name: "heightDiffToTriggerNextPage",
			dataType: "number",
			displayIf: function (pagination) {
				return (
					pagination.enabled === true && pagination.type === "INFINITE_SCROLL"
				);
			},
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
			displayIf: function (pagination) {
				return pagination.enabled === true;
			},
		},
		{
			name: "tagName",
			dataType: "string",
			displayIf: function (pagination) {
				return (
					pagination.enabled === true && pagination.type !== "INFINITE_SCROLL"
				);
			},
		},
		{
			name: "htmlAttributes",
			dataType: "object",
			displayIf: function (pagination) {
				return (
					pagination.enabled === true && pagination.type !== "INFINITE_SCROLL"
				);
			},
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
