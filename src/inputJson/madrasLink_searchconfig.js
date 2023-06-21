const madrasLink = {
	siteKey: "ss-unbxd-Madras-Link-Prod35911657589987",
	apiKey: "42bc599c1c8cb8ee9dc64849abe59a07",
	unbxdAnalytics: true,
	allowExternalUrlParams: true,
	searchQueryParam: "q",
	searchBoxEl: document.querySelector(".site-header__search-input"),
	searchButtonEl: document.querySelector(".site-header__search-btn"),
	sanitizeQueryString: function (e) {
		return e.trim();
	},
	extraParams: {
		stats: "price",
	},
	products: {
		el: document.getElementById("searchResultsWrapper"),
		productType: "SEARCH",
		productAttributes: [
			"uniqueId",
			"variant_SKU",
			"imageUrl",
			"brand",
			"variant_SKU",
			"title",
			"price",
			"productUrl",
			"category2",
		],
		attributesMap: {
			brand: "brand",
			unxPrice: "price",
			unxTitle: "title",
			unxBadge: "category2",
			unxProductUrl: "productUrl",
			unxCollections: [
				"categoryPath1",
				"categoryPath2",
				"categoryPath1_fq",
				"categoryPath2_fq",
				"categoryPath",
				"category2",
			],
		},
		template: function template(
			product,
			idx,
			swatchUI,
			productViewType,
			products
		) {
			const { productItemClass } = products;
			var title = product.title;
			price = product.price;
			brand = product.brand;
			unxBadge = product.unxBadge;
			imageUrl = product.imageUrl;
			uniqueId = product.uniqueId;
			variant_SKU = product.variant_SKU;
			unxProductUrl = product.productUrl;
			var unxBadges = "";
			if (unxBadge === "New" || unxBadge === "Outlet" || unxBadge === "Sale") {
				unxBadges =
					'<span class="UNX-badges grid-product__tag grid-product__tag--custom">' +
					unxBadge +
					"</span>";
			}
			return [
				'<div class="UNX-product-item grid__item grid-product" id="' +
					uniqueId +
					'" data-id="' +
					uniqueId +
					'" unbxdattr="product" unbxdparam_sku="' +
					uniqueId +
					'" unbxdparam_prank="' +
					idx +
					'" unbxdparam_requestId="' +
					window.unbxdSearch.state.requestId +
					'" unbxdparam_variant ="' +
					variant_SKU +
					'">',
				'<div class="UNX-product-content grid-product__content">',
				'<div class="UNX-badge">' + unxBadges + "</div>",
				'<a href="' +
					unxProductUrl +
					'" class="UNX-product-link grid-product__link">',
				'<div class="UNX-product-image-mask grid-product__image-mask">',
				'<div class="UNX-images-block grid__image-ratio grid__image-ratio--square" >',
				'<img class="lazyautosizes lazyloaded" src="' +
					imageUrl +
					'" data-widths="[360, 540, 720, 900, 1080]" data-aspectratio="1.0" data-sizes="auto" alt="">',
				"</div>",
				'<div class="UNX-second-img grid-product__secondary-image small--hide">',
				'<img class="lazyautosizes lazyloaded" data-widths="[360, 540, 720, 1000]" data-aspectratio="1.0" data-sizes="auto" alt="" src="' +
					imageUrl +
					'">',
				"</div>",
				"</div>",
				'<div class="UNX-product-meta grid-product__meta">',
				'<div class="UNX-product-title grid-product__title grid-product__title--body">' +
					title +
					"</div>",
				'<div class="UNX-product-brand grid-product__vendor">' +
					brand +
					"</div>",
				'<div class="UNX-price-row grid-product__price">$' + price + "</div>",
				"</div>",
				"</a>",
				"</div>",
				"</div>",
			].join("");
		},
	},
	spellCheck: {
		enabled: true,
		el: document.querySelectorAll("#didYouMeanWrapper"),
		template: function (query, suggestion, pages) {
			const { start, productsLn, numberOfProducts } = pages;
			const { selectorClass } = this.options.spellCheck;
			const { productType } = this.options;
			let newQuery = query.replace("+", " ");
			if (productType !== "SEARCH") {
				const catId = this.getCategoryId() || "";
				const cId = decodeURIComponent(catId).split(">");
				newQuery = cId[cId.length - 1] || cId[0];
			}
			const { UNX_spellCheck } = this.testIds;
			if (suggestion) {
				document.querySelector("#UNX-filter-components").style.display = "flex";
				document.getElementById("paginationContainer").style.display = "block";
				document.getElementById("btn-back-to-top").style.display = "block";
			}
			const noUi = suggestion
				? `<p class="UNX-no-result"> We could not find results for "<strong>${suggestion}</strong>". Showing results for <span data-test-id="${UNX_spellCheck}" data-action="getSuggestion" class="${selectorClass}">${query}</span> instead.</p>`
				: ``;
			let qUi = ``;
			let countUi = ``;
			if (numberOfProducts > 0) {
				countUi = `<span class="UNX-result-info"> ${numberOfProducts} </span>`;
			}
			if (pages && newQuery && numberOfProducts > 0) {
				qUi = `<p class="UNX-suggestion-p"> ${countUi} results found for "${newQuery}"</p> `;
			}
			return ['<div class="UNX-spellcheck-block">', qUi, noUi, "</div>"].join(
				""
			);
		},
	},
	pagination: {
		el: document.querySelectorAll(".UNX-Pagination"),
		type: "CLICK_N_SCROLL",
		pageClass: "UNX_loadMore",
		action: "click",
		template: function (paginationData, pagination) {
			console.log(paginationData);
			console.log(pagination);
			if (!paginationData) {
				return ``;
			}
			const { productsLn, numberOfProducts, rows } = paginationData;
			const { pageClass, selectedPageClass, pageLimit } =
				this.options.pagination;
			const { UNX_pageNumber } = this.testIds;
			if (numberOfProducts < productsLn) {
				return ``;
			}
			if (numberOfProducts > productsLn) {
				console.log("if");
				document.getElementById("paginationContainer").style.display = "block";
				document.getElementById("btn-back-to-top").style.display = "block";
			} else {
				console.log("else");
				document.getElementById("paginationContainer").style.display = "none";
			}
			if (rows <= productsLn) {
				return `<div class="UNX-click-scroll"><button data-test-id="${this.testIds.UNX_loadMore}" class="UNX-click-n-scroll ${pageClass}">View More</button></div>`;
			} else {
				return `<div class="UNX-click-no-scroll"><button data-test-id="${this.testIds.UNX_loadMore}" class="UNX-click-n0-scroll ${pageClass}"></button></div>`;
			}
		},
	},
	pagesize: {
		enabled: true,
		pageSize: 40,
	},
	sort: {
		el: document.querySelectorAll(".UNX-sortby"),
		options: [
			{
				value: "price asc",
				text: "Price Low to High",
			},
			{
				value: "price desc",
				text: "Price High to Low",
			},
			{
				value: "title asc",
				text: "Name : A-Z",
			},
			{
				value: "title desc",
				text: "Name : Z-A",
			},
			{
				value: "score asc",
				text: "Best Sellers",
			},
		],
		template: function (selectedSort, sortConfig) {
			var optionsUI = "";
			var options = sortConfig.options,
				sortClass = sortConfig.sortClass,
				selectedSortClass = sortConfig.selectedSortClass;
			var UNX_unbxdSorter = this.testIds.UNX_unbxdSorter;
			options.forEach(function (item) {
				var value = item.value,
					text = item.text;
				if (value == selectedSort) {
					optionsUI += '<option value="'
						.concat(value, '" class="')
						.concat(selectedSortClass, '" selected>')
						.concat(text, "</option>");
				} else {
					optionsUI += '<option value="'
						.concat(value, '">')
						.concat(text, "</option>");
				}
			});
			return [
				'<div class="UNX-sort-block">',
				'<span class="UNX-sort-header"></span>',
				'<select data-test-id="'
					.concat(
						UNX_unbxdSorter,
						'" data-action="changeSort" id="unbxdSorter" class="'
					)
					.concat(sortClass, '">'),
				'<option style="text-align: center !important" value=""> Relevance</option>',
				optionsUI,
				"</select>",
				"</div>",
			].join("");
		},
	},
	facet: {
		facetsEl: document.querySelector(".UNX-filters"),
		selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
		viewMoreLimit: 6,
		enableViewMore: true,
		facetAction: "click",
		defaultOpen: "",
		facetMultiSelect: true,
		facetMultilevel: true,
		isSearchable: false,
		facetMultilevelName: "Category",
		facetClass: "UNX-facets-block",
		viewMoreText: ["show all", "show less"],
		clearFacetsSelectorClass: "UNX-clear-facet",
		removeFacetsSelectorClass: "UNX-remove-facet",
		selectedFacetClass: "UNX-selected-facet-btn",
		multiLevelFacetSelectorClass: "UNX-multilevel-facet",
		rangeWidgetConfig: {
			minLabel: "0.00",
			maxLabel: "2000.00",
			prefix: "$",
		},
		onFacetLoad: function (facets) {
			console.log("price-slide");
			document.querySelector(".site-header__search-input").value = "";
			let _this = this;
			let self = this;
			let facet = this.options.facet;
			let rangeWidgetConfig = facet.rangeWidgetConfig;
			facets.forEach(function (facetItem) {
				let facetType = facetItem.facetType,
					facetName = facetItem.facetName,
					gap = facetItem.gap;
				let prefix = rangeWidgetConfig.prefix;
				if (facetType === "range") {
					let rangeId = "".concat(facetName, "_slider");
					let sliderElem = document.getElementById(rangeId);
					let end = facetItem.end,
						_gap = facetItem.gap,
						max = facetItem.max,
						min = 0,
						start = facetItem.start;
					let selectedValues = sliderElem.dataset;

					// localStorage.setItem("rangeMaxVal", max)

					if (!localStorage.getItem("prevQuery")) {
						localStorage.setItem(
							"prevQuery",
							window.unbxdSearch.getSearchQuery()
						);
						min = 0;
						max = Math.ceil(max) || 0;
						localStorage.setItem("rangeMaxVal", max);
					} else {
						if (
							localStorage.getItem("prevQuery") ===
							window.unbxdSearch.getSearchQuery()
						) {
							min = 0;
							max =
								Math.ceil(
									localStorage.getItem("rangeMaxVal") != undefined &&
										localStorage.getItem("rangeMaxVal") != null &&
										localStorage.getItem("rangeMaxVal") != ""
										? localStorage.getItem("rangeMaxVal")
										: max
								) || 0;
						} else {
							min = 0;
							max = Math.ceil(max) || 0;
							localStorage.setItem(
								"prevQuery",
								window.unbxdSearch.getSearchQuery()
							);
							localStorage.setItem("rangeMaxVal", max);
						}
					}

					if (selectedValues) {
						start = Number(selectedValues.x);
						end = Number(selectedValues.y);
					}

					_this[rangeId] = noUiSlider.create(sliderElem, {
						start: [start, end],
						tooltips: [
							{
								to: function (value) {
									return `${prefix} ${Math.round(value)}`;
								},
							},
							{
								to: function (value) {
									return `${prefix} ${Math.round(value)}`;
								},
							},
						],
						connect: true,
						range: {
							min: min,
							max: max,
						},
						format: {
							to: function to(value) {
								return Math.round(value);
							},
							from: function from(value) {
								return Math.round(value);
							},
						},
						padding: 0,
						margin: 0,
					});
					function mergeTooltips(slider, threshold, separator) {
						var textIsRtl = getComputedStyle(slider).direction === "rtl";
						var isRtl = slider.noUiSlider.options.direction === "rtl";
						var isVertical =
							slider.noUiSlider.options.orientation === "vertical";
						var tooltips = slider.noUiSlider.getTooltips();
						var origins = slider.noUiSlider.getOrigins();
						// Move tooltips into the origin element. The default stylesheet handles this.
						tooltips.forEach(function (tooltip, index) {
							if (tooltip) {
								origins[index].appendChild(tooltip);
							}
						});
						slider.noUiSlider.on(
							"update",
							function (values, handle, unencoded, tap, positions) {
								var pools = [[]];
								var poolPositions = [[]];
								var poolValues = [[]];
								var atPool = 0;
								// Assign the first tooltip to the first pool, if the tooltip is configured
								if (tooltips[0]) {
									pools[0][0] = 0;
									poolPositions[0][0] = positions[0];
									poolValues[0][0] = values[0];
								}
								for (var i = 1; i < positions.length; i++) {
									if (
										!tooltips[i] ||
										positions[i] - positions[i - 1] > threshold
									) {
										atPool++;
										pools[atPool] = [];
										poolValues[atPool] = [];
										poolPositions[atPool] = [];
									}
									if (tooltips[i]) {
										pools[atPool].push(i);
										poolValues[atPool].push(values[i]);
										poolPositions[atPool].push(positions[i]);
									}
								}
								pools.forEach(function (pool, poolIndex) {
									var handlesInPool = pool.length;
									for (var j = 0; j < handlesInPool; j++) {
										var handleNumber = pool[j];
										if (j === handlesInPool - 1) {
											var offset = 0;
											poolPositions[poolIndex].forEach(function (value) {
												offset += 1000 - value;
											});
											var direction = isVertical ? "bottom" : "right";
											var last = isRtl ? 0 : handlesInPool - 1;
											var lastOffset = 1000 - poolPositions[poolIndex][last];
											offset =
												(textIsRtl && !isVertical ? 100 : 0) +
												offset / handlesInPool -
												lastOffset;
											// Center this tooltip over the affected handles
											tooltips[handleNumber].innerHTML =
												"$" + poolValues[poolIndex].join(separator);
											tooltips[handleNumber].style.display = "block";
											tooltips[handleNumber].style[direction] = offset + "%";
											tooltips[handleNumber].style.left = "-340% !important";
										} else {
											// Hide this tooltip
											tooltips[handleNumber].style.display = "none";
										}
									}
								});
							}
						);
					}
					mergeTooltips(sliderElem, 15, " - $");
					_this[rangeId].on("set", function (data) {
						let newData = {
							start: data[0],
							end: data[1],
							facetName: facetName,
							gap: _gap,
						};
						self.setRangeSlider(newData);
					});
				}
			});
		},
		multiLevelFacetTemplate: function multiLevelFacetTemplate(
			facet,
			selectedCategories,
			facetSearchTxt,
			facetConfig
		) {
			var facetValues = facet.values;
			var ui = "";
			var multiLevelFacetSelectorClass =
					facetConfig.multiLevelFacetSelectorClass,
				facetClass = facetConfig.facetClass;
			var UNX_facetLevel = this.testIds.UNX_facetLevel;
			if (selectedCategories) {
				for (var i = 0; i < facet.values.length; i++) {
					for (var j = 0; j < selectedCategories.length; j++) {
						if (facet.values[i].name == selectedCategories[j].value) {
							facetValues.splice(i, 1);
						}
					}
				}
				selectedCategories.forEach(function (item) {
					var level = item.level,
						filterField = item.filterField,
						value = item.value;
					var lTid = 'data-test-id="'.concat(UNX_facetLevel).concat(level, '"');
					var levelCss = ""
						.concat(multiLevelFacetSelectorClass, "  UNX-category-level-")
						.concat(level);
					ui += [
						"<li "
							.concat(lTid, ' data-parent="')
							.concat(filterField, '" data-level="')
							.concat(level, '" data-name="')
							.concat(value, '"'),
						'class=" '
							.concat(levelCss, " UNX-selected-crumb ")
							.concat(facetClass, '" data-action = "clearCategoryFilter">'),
						'<span class="UNX-category-icon"></span><label class="UNX-facet-text">'.concat(
							decodeURIComponent(value),
							"</label>"
						),
						"</li>",
					].join("");
				});
			}
			var level = facet.level,
				displayName = facet.displayName,
				values = facetValues,
				filterField = facet.filterField;
			var multiLevelField = facet.multiLevelField;
			if (!multiLevelField) {
				multiLevelField = filterField;
			}
			var lTid = 'data-test-id="'.concat(UNX_facetLevel).concat(level, '"');
			var levelCss = "UNX-category-level-".concat(level);
			var valueUI = values.map(function (item) {
				var name = item.name,
					count = item.count;
				if (facetSearchTxt && facetSearchTxt.length > 0) {
					if (name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0) {
						facetClass += " UNX-search-hidden";
					}
				}
				return [
					"<li "
						.concat(lTid, ' data-parent="')
						.concat(multiLevelField, '" data-level="')
						.concat(level, '"'),
					'class="'
						.concat(multiLevelFacetSelectorClass, " ")
						.concat(levelCss, " UNX-unselected-crumb ")
						.concat(facetClass, '" data-name="')
						.concat(name, '" data-action = "setCategoryFilter">'),
					'<label class="UNX-facet-text">'.concat(name, "</label></li>"),
				].join("");
			});
			ui += '<div class="UNX-category-values">'.concat(
				valueUI.join(""),
				"</div>"
			);
			if (ui !== "") {
				return [
					'<div class="UNX-multi-facet-wrap">',
					"".concat(ui, "</div>"),
				].join("");
			} else {
				return "";
			}
		},
		facetItemTemplate: function facetItemTemplate(
			facet,
			value,
			facetSearchTxt
		) {
			var facetName = facet.facetName,
				isSelected = facet.isSelected;
			var name = value.name,
				count = value.count,
				dataId = value.dataId;
			var _this$options$facet = this.options.facet,
				facetClass = _this$options$facet.facetClass,
				selectedFacetClass = _this$options$facet.selectedFacetClass;
			var UNX_uFilter = this.testIds.UNX_uFilter;
			if (facetSearchTxt && facetSearchTxt.length > 0) {
				if (name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0) {
					facetClass += " UNX-search-hidden";
				}
			}
			let action = "changeFacet";
			if (isSelected) {
				facetClass += ` ${selectedFacetClass}`;
				action = "deleteFacetValue";
			}
			if (facetName === "colorTags_uFilter") {
				var cName = name.toLowerCase();
				var fName = cName.replace(" ", "-");
				var facetNames =
					"https://cdn.shopify.com/s/files/1/0727/7773/t/57/assets/".concat(
						fName + "_50x.png"
					);
				return [
					`<button data-test-id="${UNX_uFilter}" data-facet-name="${facetName}" data-facet-action="${action}" class="UNX-change-facet UNX-color-facet ${facetClass}" data-id="${dataId}">`,
					`<span class="UNX-color-swatch">${name}</span><span class="UNX-facet-text color-swatch color-swatch--filter color-swatch" style="background-image: url(` +
						`${facetNames}` +
						`); background-color: ${fName};"></span></button>`,
				].join("");
			} else if (facetName === "brand_uFilter") {
				return [
					`<div title="${
						dataId ? dataId : "None"
					}" data-test-id="${UNX_uFilter}" data-facet-name="${facetName}" data-facet-action="${action}" class="UNX-change-facet ${facetClass} " data-id="${dataId}">`,
					`<span class="UNX-brand ${facetClass}" type="checkbox"></span><div class="UNX-facet-text">${name}</div><span class="UNX-facet-count">(${count})</span></div>`,
				].join("");
			} else {
				return [
					`<button title="${
						dataId ? dataId : "None"
					}" data-test-id="${UNX_uFilter}" data-facet-name="${facetName}" data-facet-action="${action}" class="UNX-change-facet ${facetClass} " data-id="${dataId}">`,
					`<span class="UNX-facet-text">${name}</span></button>`,
				].join("");
			}
		},
		selectedFacetItemTemplate: function selectedFacetItemTemplate(
			selectedFacet,
			selectedFacetItem
		) {
			var facetName = selectedFacet.facetName,
				facetType = selectedFacet.facetType;
			var name = selectedFacetItem.name,
				count = selectedFacetItem.count,
				dataId = selectedFacetItem.dataId;
			var _this$options$facet = this.options.facet,
				facetClass = _this$options$facet.facetClass,
				selectedFacetClass = _this$options$facet.selectedFacetClass,
				removeFacetsSelectorClass =
					_this$options$facet.removeFacetsSelectorClass;
			var UNX_uFilter = this.testIds.UNX_uFilter;
			var action = "deleteSelectedFacetValue";
			if (facetType === "range") {
				action = "deleteSelectedRange";
			}
			var css = " ".concat(facetClass, " ").concat(selectedFacetClass, " ");
			if (facetName === "colorTags_uFilter") {
				return [
					'<li class="UNX-selected-facets-wrap">',
					'<a data-test-id="'
						.concat(UNX_uFilter, '" class="UNX-change-facet')
						.concat(css, '" data-facet-name="')
						.concat(facetName, '" data-facet-action="')
						.concat(action, '" data-id="')
						.concat(dataId, '">'),
					'<span class="UNX-facet-text ">'.concat(name, "</span></a>"),
					'<a class="UNX-delete-facet '
						.concat(removeFacetsSelectorClass, "")
						.concat(css, '" data-id="')
						.concat(dataId, '" data-facet-action="')
						.concat(action, '" data-facet-name="')
						.concat(facetName, '">x</a>'),
					"</li>",
				].join("");
			}
			if (facetName === "price") {
				var currency =
					name.trim().length > 0
						? "$" + name.split("TO ")[0] + "TO " + "$" + name.split("TO ")[1]
						: "&nbsp;&nbsp;&nbsp;";
				return [
					'<li class="UNX-selected-facets-wrap">',
					'<a data-test-id="'
						.concat(UNX_uFilter, '" class="UNX-change-facet')
						.concat(css, '" data-facet-name="')
						.concat(facetName, '" data-facet-action="')
						.concat(action, '" data-id="')
						.concat(dataId, '">'),
					'<span class="UNX-facet-text ">'.concat(currency, "</span></a>"),
					'<a class="UNX-delete-facet '
						.concat(removeFacetsSelectorClass, "")
						.concat(css, '" data-id="')
						.concat(dataId, '" data-facet-action="')
						.concat(action, '" data-facet-name="')
						.concat(facetName, '">x</a>'),
					"</li>",
				].join("");
			} else {
				return [
					'<li class="UNX-selected-facets-wrap">',
					'<a data-test-id="'
						.concat(UNX_uFilter, '" class="UNX-change-facet')
						.concat(css, '" data-facet-name="')
						.concat(facetName, '" data-facet-action="')
						.concat(action, '" data-id="')
						.concat(dataId, '">'),
					'<span class="UNX-facet-text ">'.concat(name, "</span></a>"),
					'<a class="UNX-delete-facet '
						.concat(removeFacetsSelectorClass, "")
						.concat(css, '" data-id="')
						.concat(dataId, '" data-facet-action="')
						.concat(action, '" data-facet-name="')
						.concat(facetName, '">x</a>'),
					"</li>",
				].join("");
			}
		},
		facetTemplate: function facetTemplate(
			facetObj,
			children,
			isExpanded,
			facetSearchTxt,
			facet
		) {
			var displayName = facetObj.displayName,
				facetName = facetObj.facetName,
				multiLevelField = facetObj.multiLevelField,
				facetType = facetObj.facetType,
				values = facetObj.values;
			var facetClass = facet.facetClass,
				applyMultipleFilters = facet.applyMultipleFilters,
				isCollapsible = facet.isCollapsible,
				isSearchable = facet.isSearchable,
				searchPlaceHolder = facet.searchPlaceHolder,
				textFacetWrapper = facet.textFacetWrapper,
				enableViewMore = facet.enableViewMore,
				viewMoreText = facet.viewMoreText,
				viewMoreLimit = facet.viewMoreLimit,
				applyButtonText = facet.applyButtonText,
				clearButtonText = facet.clearButtonText;
			var _this$options = this.options,
				actionBtnClass = _this$options.actionBtnClass,
				actionChangeClass = _this$options.actionChangeClass;
			var _this$cssList = this.cssList,
				openBtn = _this$cssList.openBtn,
				closeBtn = _this$cssList.closeBtn;
			var viewMoreUi = "";
			var viewMoreCss = "";
			var selected = this.getSelectedFacets()[facetName];
			var isFtr = selected && selected.length > 0 ? true : false;
			if (
				enableViewMore &&
				facetType === "text" &&
				values.length > viewMoreLimit
			) {
				viewMoreCss = "UNX-view-more";
				viewMoreUi = '<div class="UNX-view-more-row "><button class="'
					.concat(actionBtnClass, '" data-facet-name="')
					.concat(facetName, '" data-action="viewMore" data-id="')
					.concat(viewMoreText[0], '">')
					.concat(viewMoreText[0], "</button></div>");
			}
			var clearUI = "";
			var applyBtn = "";
			if (isFtr) {
				clearUI = '<button class="UNX-facet-clear '
					.concat(
						facetClass,
						' "data-facet-action="deleteFacet" data-facet-name="'
					)
					.concat(facetName, '">')
					.concat(clearButtonText, "</button>");
			}
			if (applyMultipleFilters && isFtr) {
				applyBtn = '<button class="UNX-facet-primary '
					.concat(facetClass, ' "data-facet-action="applyFacets" >')
					.concat(applyButtonText, "</button>");
			}
			var collapsibleUI = "";
			var searchInput = "";
			if (isCollapsible) {
				if (isExpanded) {
					collapsibleUI = '<div class="UNX-facet-header '
						.concat(actionBtnClass, ' UNX-facet-open"  data-facet-name="')
						.concat(facetName, '" data-facet-action="facetClose"> <h3>')
						.concat(displayName, "</h3></div>");
				} else {
					collapsibleUI = '<div class="UNX-facet-header '
						.concat(actionBtnClass, ' UNX-facet-close"  data-facet-name="')
						.concat(facetName, '" data-facet-action="facetOpen"> <h3>')
						.concat(displayName, "</h3></div>");
				}
			}
			if (isSearchable && facetSearchTxt !== null) {
				searchInput = '<div class="UNX-searchable-facets"><input data-test-id="'
					.concat(this.testIds.UNX_searchFacets, '" class="UNX-facet-search ')
					.concat(actionChangeClass, '" value="')
					.concat(facetSearchTxt, '"  data-facet-name="')
					.concat(
						facetName,
						'" data-facet-action="searchFacets" type="text" placeholder="'
					)
					.concat(searchPlaceHolder, '"/></div>');
			}
			return [
				'<div class="UNX-text-facet-wrap" style="border-top: unset !important"; "border-top-color: unset !important" >',
				collapsibleUI,
				'<div class="UNX-facets-all">',
				'<div class="UNX-facets '
					.concat(textFacetWrapper, " ")
					.concat(viewMoreCss, '">')
					.concat(children, "</div>"),
				"</div>",
				"</div>",
			].join("");
		},
		selectedFacetTemplate: function selectedFacetTemplate(
			selections,
			facet,
			selectedFacetsConfig
		) {
			const { clearAllText, clearFacetsSelectorClass } = facet;
			const selectedFClass = this.selectedFacetClass
				? this.selectedFacetClass
				: selectedFacetsConfig.selectedFacetClass;
			if (selections.length > 0) {
				document.querySelector("#UNX-filter-components").style.display = "flex";
				return [
					'<div class="UNX-facets-selections">',
					'<div class="UNX-selected-facets-inner">'.concat(
						selections,
						"</div>"
					),
					"</div>",
				].join("");
			} else {
				return "";
			}
		},
		rangeTemplate: function (range, selectedRange, facet) {
			const { facetName, start, end } = range;
			let min = start;
			let max = end;
			console.log("Range:", range);
			console.log("SelectedRange:", selectedRange);
			if (selectedRange.length > 0) {
				const sel = selectedRange[0].replace(/[^\w\s]/gi, "").split(" TO ");
				min = sel[0];
				max = sel[1];
			}
			const rangId = `${facetName}_slider`;
			return [
				`<div id="${facetName}"  data-id="${facetName}" class=" UNX-range-slider-wrap">`,
				`<div class="UNX-value-container UNX-range-value-block"></div>`,
				`<div id="${rangId}" data-x="${min}" data-y="${max}" class="UNX-range-slider-wrapper">`,
				`</div>`,
				`</div>`,
			].join("");
		},
	},
	noResults: {
		el: document.getElementById("noResultWrapper"),
		template: function (query) {
			console.log("nore");
			document.querySelector("#UNX-filter-components").style.display = "none";
			document.getElementById("paginationContainer").style.display = "none";
			document.getElementById("btn-back-to-top").style.display = "none";
			return query == "|"
				? '<div class="UNX-no-results"> No Results found for * </div>'
				: '<div class="UNX-no-results"> No Results found for ' +
						query +
						"</div>";
		},
	},
	loader: {
		el: document.getElementById("loaderEl"),
	},
	onEvent: (context, type) => {
		if (type === "AFTER_RENDER") {
			if (!context.viewState.loadagain && localStorage.scrollPos) {
				context.viewState.loadagain = false;
				window.scrollTo(0, localStorage.scrollPos);
				localStorage.removeItem("scrollPos");
			}
		}
	},
};

export default madrasLink;
