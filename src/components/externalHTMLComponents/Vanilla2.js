import React, { useEffect, useState } from "react";

// import UnbxdSearch from  '@unbxd-ui/vanilla-search-library';
import UnbxdSearch from "../../../../search-JS-library/src/index";
// import UnbxdSearch from "../../../../../search-JS-library/src/index";
import useDeepCompareEffect from "use-deep-compare-effect";

export default function Vanilla2(props) {
	let { validatedConfig, filename, reloadWarning } = props;

	// const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
	// 	JSON.stringify(validatedConfig)
	// )}`;
	// const link = document.createElement("a");
	// link.href = jsonString;
	// link.download = "validatedConfig.json";
	// link.click();

	console.log("validatedConfig:", validatedConfig);

	useEffect(() => {
		// window.unbxdSearch.resetAll();
		// window.unbxdSearch = null;
		if (Object.keys(validatedConfig).length) {
			if (UnbxdSearch) {
				window.unbxdSearch = new UnbxdSearch({
					hashMode: false,
					updateUrls: true,
					onEvent: function (instance, type, state) {
						if (type === "AFTER_RENDER") {
							if (
								localStorage.getItem("unx_product_clicked") &&
								document.getElementById(
									localStorage.getItem("unx_product_clicked")
								)
							) {
								document
									.getElementById(localStorage.getItem("unx_product_clicked"))
									.scrollIntoView();
								localStorage.removeItem("unx_product_clicked");
							}
						}
					},
					onError: function (err) {
						console.log(err);
					},
					searchTrigger: "click",
					...validatedConfig,
					// products: {
					// 	el: document.getElementById("searchResultsWrapper"),
					// 	productType: "SEARCH",
					// },
					pageSize: validatedConfig.pagesize.pageSize,
					// siteKey: validatedConfig.siteKey,
					// apiKey: validatedConfig.apiKey,
					// searchBoxEl: validatedConfig.searchBoxEl,
					// searchButtonEl: validatedConfig.searchButtonEl,
					// products: validatedConfig.products,
					// facet: validatedConfig.facet,
					// pagesize: validatedConfig.pagesize,
					// sort: validatedConfig.sort,
					// productView: validatedConfig.productView,
					// spellCheck: validatedConfig.spellCheck,
					// // spellCheck: {
					// // 	enabled: true,
					// // 	el: document.getElementById("didYouMeanWrapper"),
					// // },
					// loader: validatedConfig.loader,
					// swatches: validatedConfig.swatches,
					// noResults: validatedConfig.noResults,
					// // noResults: {
					// // 	el: document.getElementById("noResultWrapper"),
					// // },
					// pagination: validatedConfig.pagination,
					// breadcrumb: validatedConfig.breadcrumb,
					// banner: validatedConfig.banner,
					// variants: validatedConfig.variants,
				});
				console.log("Applied changes");

				// if (reloadWarning) {
				// 	window.addEventListener("beforeunload", (event) => {
				// 		event.preventDefault();
				// 		event.returnValue = "";
				// 		return "";
				// 	});
				// }
				// return () => window.removeEventListener("beforeunload", unloadCallback);
				// window.onbeforeunload = function () {
				// 	return "Data will be lost if you leave the page, are you sure?";
				// };
			}
		} else {
			if (UnbxdSearch) {
				window.unbxdSearch = new UnbxdSearch({
					siteKey: "demo-unbxd700181503576558",
					apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
					hashMode: false,
					updateUrls: true,
					onEvent: function (instance, type, state) {
						if (type === "AFTER_RENDER") {
							if (
								localStorage.getItem("unx_product_clicked") &&
								document.getElementById(
									localStorage.getItem("unx_product_clicked")
								)
							) {
								document
									.getElementById(localStorage.getItem("unx_product_clicked"))
									.scrollIntoView();
								localStorage.removeItem("unx_product_clicked");
							}
						}
					},
					// searchTrigger: "click",
					// products: {
					// 	productType: "SEARCH",
					// },
					searchBoxEl: document.getElementById("unbxdInput"),
					searchTrigger: "click",
					searchButtonEl: document.getElementById("searchBtn"),
					products: {
						el: document.getElementById("searchResultsWrapper"),
						productType: "SEARCH",
					},
					spellCheck: {
						enabled: true,
						el: document.getElementById("didYouMeanWrapper"),
					},
					noResults: {
						el: document.getElementById("noResultWrapper"),
					},
					facet: {
						facetsEl: document.getElementById("facetsWrapper"),
						selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
					},
					pagination: {
						el: document.querySelector(".unxPagination"),
						type: "FIXED_PAGINATION",
						pageLimit: 4,
					},
					breadcrumb: {
						el: document.getElementById("breadcrumpContainer"),
					},
					pagesize: {
						el: document.getElementById("changeNoOfProducts"),
					},

					sort: {
						el: document.getElementById("sortWrapper"),
						options: [
							{
								value: "sortPrice desc",
								text: "Price High to Low",
							},
							{
								value: "sortPrice asc",
								text: " Price Low to High",
							},
						],
					},
					loader: {
						el: document.getElementById("loaderEl"),
					},
					productView: {
						el: document.getElementById("productViewTypeContainer"),
						viewTypes: "GRID",
					},
					banner: {
						el: document.getElementById("bannerContainer"),
						count: 1,
					},
					swatches: {
						enabled: true,
						attributesMap: {
							swatchList: "color",
							swatchImgs: "unbxd_color_mapping",
							swatchColors: "color",
						},
					},
				});
				window.unbxdSearch.getResults("*");

				// if (reloadWarning) {
				// 	window.addEventListener("beforeunload", (event) => {
				// 		event.preventDefault();
				// 		event.returnValue = "";
				// 		return "";
				// 	});
				// }
				// return () => window.removeEventListener("beforeunload", unloadCallback);
				// window.onbeforeunload = function () {
				// 	return "Data will be lost if you leave the page, are you sure?";
				// };
			}
		}
	});
	// useEffect(() => {
	// 	if (window.UnbxdSearch) {
	// 		window.unbxdSearch = new window.UnbxdSearch({
	// 			siteKey: "demo-unbxd700181503576558",
	// 			apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
	// 			// siteKey: "ss-unbxd-betta-pre-prod35741675334517",
	// 			// apiKey: "b1b5f033416fbf18f301aee3dab41934",
	// 			hashMode: false,
	// 			updateUrls: true,
	// 			extraParams: {
	// 				stats: "price",
	// 			},
	// 			// searchTrigger: "click",
	// 			products: {
	// 				productType: "SEARCH",
	// 			},
	// 			searchBoxEl: document.getElementById("unbxdInput"),
	// 			searchTrigger: "click",
	// 			searchButtonEl: document.getElementById("searchBtn"),
	// 			products: {
	// 				el: document.getElementById("searchResultsWrapper"),
	// 				productType: "SEARCH",
	// 			},
	// 			spellCheck: {
	// 				enabled: true,
	// 				el: document.getElementById("didYouMeanWrapper"),
	// 			},
	// 			noResults: {
	// 				el: document.getElementById("noResultWrapper"),
	// 			},
	// 			facet: {
	// 				facetsEl: document.getElementById("facetsWrapper"),
	// 				selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
	// 			},
	// 			pagination: {
	// 				el: document.querySelectorAll(".unxPagination"),
	// 				type: "FIXED_PAGINATION",
	// 				pageLimit: 4,
	// 			},
	// 			breadcrumb: {
	// 				el: document.getElementById("breadcrumpContainer"),
	// 			},
	// 			pagesize: {
	// 				el: document.getElementById("changeNoOfProducts"),
	// 			},

	// 			sort: {
	// 				el: document.getElementById("sortWrapper"),
	// 				options: [
	// 					{
	// 						value: "sortPrice desc",
	// 						text: "Price High to Low",
	// 					},
	// 					{
	// 						value: "sortPrice asc",
	// 						text: " Price Low to High",
	// 					},
	// 				],
	// 			},
	// 			loader: {
	// 				el: document.getElementById("loaderEl"),
	// 			},
	// 			productView: {
	// 				el: document.getElementById("productViewTypeContainer"),
	// 				viewTypes: "GRID",
	// 			},
	// 			banner: {
	// 				el: document.getElementById("bannerContainer"),
	// 				count: 1,
	// 			},
	// 			swatches: {
	// 				enabled: true,
	// 				attributesMap: {
	// 					swatchList: "color",
	// 					swatchImgs: "unbxd_color_mapping",
	// 					swatchColors: "color",
	// 				},
	// 			},
	// 		});
	// 	}

	// 	// if (reloadWarning) {
	// 	// 	window.addEventListener("beforeunload", (event) => {
	// 	// 		event.preventDefault();
	// 	// 		event.returnValue = "";
	// 	// 		return "";
	// 	// 	});
	// 	// }
	// 	// return () => window.removeEventListener("beforeunload", unloadCallback);

	// 	// window.onbeforeunload = function () {
	// 	// 	return "Data will be lost if you leave the page, are you sure?";
	// 	// };
	// }, []);

	// const [htmlContent, setHtmlContent] = useState("");

	// useEffect(() => {
	// 	fetch(`/path/to/external/${filename}`)
	// 		.then((response) => response.text())
	// 		.then((html) => setHtmlContent(html))
	// 		.catch((error) => console.log(error));
	// }, []);

	const createMarkup = function () {
		return {
			__html:
				"<!DOCTYPE html>" +
				"<head>" +
				"<meta charset='UTF-8'>" +
				"<meta name='viewport' content='width=device-width, initial-scale=1.0' />" +
				"<link rel='preconnect' href='https://fonts.gstatic.com'>" +
				"<link href='https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&display=swap' rel='stylesheet'>" +
				"<!-- Dependency library stylesheets -->" +
				"<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.5.0/nouislider.min.css'/>" +
				"<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.theme.min.css'/>" +
				"<link rel='stylesheet' href='https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css' />" +
				"<!-- <link rel='stylesheet' href='https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css' /> -->" +
				"<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css'/>" +
				"<!-- End dependency library stylesheets -->" +
				"<!-- Custom stylesheet for Unbxd default theme, update this if you want to change the look & feel -->" +
				"<link rel='stylesheet' href='https://libraries.unbxdapi.com/search-sdk/v2.0.5/vanillaSearch.min.css'/>" +
				"<link rel='stylesheet' type='text/css' href='unbxdStyle.css' />" +
				"</head>" +
				"  <body>" +
				"    <div class='UNX-header'>" +
				"      <div class='UNX-header-inner'>" +
				"        <div class='UNX-logo'>" +
				"        </div>" +
				"        <div class='UNX-input-wrapper'>" +
				"          <input id='unbxdInput' class='UNX-input' autocomplete='off'/>" +
				"          <button id='searchBtn' class='fa fa-search UNX-search-btn'></button>" +
				"        </div>" +
				"      </div>" +
				"    </div>" +
				"    <div class='UNX-results-container'>" +
				"      <div class='UNX-head-wrapper'>" +
				"        <div class='UNX-selected-actions'>" +
				"          <div class='UNX-bread-wrapper' id='breadcrumpContainer'></div>" +
				"          <div" +
				"            class='UNX-selected-facet-wrapper'" +
				"            id='selectedFacetWrapper'" +
				"          ></div>" +
				"        </div>" +
				// "        <div class='UNX-product-type-block' id='productViewTypeContainer'></div>" +
				"      </div>" +
				"      <div class='UNX-product-results'>" +
				"        <div class='UNX-facet-wrapper'>" +
				"          <h2 class='UNX-filter-header'>Filter By</h2>" +
				"          <div class='UNX-fxd-facet'>" +
				"            <div" +
				"              class='UNX-selected-facet-wrapper UNX-selected-f-m'" +
				"              id='selectedMFacetWrapper'" +
				"            ></div>" +
				"            <div class='UNX-multilevel-block' id='bucketedFacetWrapper'></div>" +
				"            <div class='UNX-text-facet-block' id='facetsWrapper'></div>" +
				"            <div class='UNX-range-block' id='rangeFacetWrapper'></div>" +
				"            <div class='UNX-m-facet-row'>" +
				"              <button" +
				"                data-action='applyFacets'" +
				"                class='UNX-primary-btn UNX-facet-trigger'" +
				"              >" +
				"                Apply" +
				"              </button>" +
				"              <button" +
				"                data-action='clearFacets'" +
				"                class='UNX-default-btn UNX-facet-trigger'" +
				"              >" +
				"                Clear" +
				"              </button>" +
				"            </div>" +
				"          </div>" +
				"          <div class='UNX-m-facet-row'>" +
				"            <button" +
				"              class='UNX-m-facet-btn UNX-facet-trigger fa fa-filter'" +
				"            ></button>" +
				"          </div>" +
				"        </div>" +
				"        <div class='UNX-product-list'>" +
				"          <div class='UNX-result-header'>" +
				"            <div id='didYouMeanWrapper'></div>" +
				"            <div class='UNX-result-right'>" +
				"              <div class='UNX-change-products' id='changeNoOfProducts'></div>" +
				"              <div class='UNX-sort-wrapper' id='sortWrapper'></div>" +
				"              <div id='' class='UNX-change-pagination-wrap unxPagination'></div>" +
				"        <div class='UNX-product-type-block' id='productViewTypeContainer'></div>" +
				"            </div>" +
				"          </div>" +
				"          <div id='bannerContainer'></div>" +
				"          <div class='UNX-product-wrapper' id='searchResultsWrapper'></div>" +
				"          <div" +
				"            id=''" +
				"            class='UNX-change-pagination-wrap UNX-m-page unxPagination'" +
				"          ></div>" +
				"        </div>" +
				"      </div>" +
				"      <div class='UNX-loader-container' id='loaderEl'></div>" +
				"      <div id='noResultWrapper'></div>" +
				"      <div id='clickScrollContainer'></div>" +
				"<div class='UNX-footer-main'>" +
				"<div class='UNX-footer-container'>" +
				"<div class='UNX-footer-features'>" +
				"<div class='UNX-feature-item'>" +
				"<span class='UNX-footer-icon UNX-icons UNX-icon-truck'></span>" +
				"<label class='UNX-footer-label'>We ship worldwide</label>" +
				"</div>" +
				"<div class='UNX-feature-item UNX-money'>" +
				"<span class='UNX-icons UNX-icon-call'></span>" +
				"<label class='UNX-footer-label'>Call +18000 765 00000</label>" +
				"</div>" +
				"<div class='UNX-feature-item UNX-money'>" +
				"<span class='UNX-icons UNX-icon-money-back'></span>" +
				"<label class='UNX-footer-label'>Money Back Guarantee</label>" +
				"</div>" +
				"<div class='UNX-feature-item UNX-money'>" +
				"<span class='UNX-icons UNX-icon-return'></span>" +
				"<label class='UNX-footer-label'>30 Days Return</label>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"<div class='UNX-company-footer'>" +
				"<div class='UNX-footer-container UNX-company-footer-wrap'>" +
				"<div class='UNX-footer-info-column'>" +
				"<h6 class='UNX-footer-info-head'>Online Shopping</h6>" +
				"<div class='UNX-link-wrapper'>" +
				"<a href='#'>Men</a>" +
				"<a href='#'>Women</a>" +
				"<a href='#'>Kids</a>" +
				"<a href='#'>Home & Living</a>" +
				"<a href='#'>Discover</a>" +
				"<a href='#'>Gift Cards</a>" +
				"</div>" +
				"</div>" +
				"<div class='UNX-footer-info-column'>" +
				"<h6 class='UNX-footer-info-head'>Policy</h6>" +
				"<div class='UNX-link-wrapper'>" +
				"<a href='#'>Contact Us</a>" +
				"<a href='#'>FAQ</a>" +
				"<a href='#'>T&C</a>" +
				"<a href='#'>Track Orders</a>" +
				"<a href='#'>Shipping</a>" +
				"<a href='#'>Cancellation</a>" +
				"</div>" +
				"</div>" +
				"<div class='UNX-footer-info-column'>" +
				"<h6 class='UNX-footer-info-head'>About</h6>" +
				"<div class='UNX-link-wrapper'>" +
				"<a href='#'>Contact Us</a>" +
				"<a href='#'>About Us</a>" +
				"<a href='#'>Press</a>" +
				"</div>" +
				"</div>" +
				"<div class='UNX-footer-info-column'>" +
				"<h6 class='UNX-footer-info-head'>Registered Office Address</h6>" +
				"<div class='UNX-link-wrapper'>" +
				"<a href='#'>Company</a>" +
				"<a href='#'>Careers</a>" +
				"<a href='#'>Contact Us</a>" +
				"</div>" +
				"</div>" +
				"<div class='UNX-footer-info-column'>" +
				"<h6 class='UNX-footer-info-head'>Keep in Touch</h6>" +
				"<div class='UNX-link-wrapper UNX-keep-touch'>" +
				"<a class='UNX-link-icon UNX-icons UNX-icon-linkedin' href='#'></a>" +
				"<a class='UNX-link-icon UNX-icons UNX-icon-twitter' href='#'></a>" +
				"<a class='UNX-link-icon UNX-icons UNX-icon-youtube' href='#'></a>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"<div class='UNX-privacy-footer-wrap'>" +
				"<div class='UNX-footer-container'>" +
				"<p>In case of any concern, <a class='UNX-contact-link' href='#'>Contact Us</a></p>" +
				"</div>" +
				"</div>" +
				"    </div>" +
				"  </body>" +
				"<!-- Unbxd SDK dependency libraries: jQuery, jQuery UI & Handlebars -->" +
				"<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>" +
				"<script type='text/javascript' src='https://libraries.unbxdapi.com/sdk-assets/jquery.ui.widget.js'></script>" +
				"<script type='text/javascript' src='https://libraries.unbxdapi.com/sdk-assets/jquery.ui.mouse.js'></script>" +
				"<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.5.3/handlebars.min.js'></script>" +
				"<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.5.0/nouislider.min.js'></script>" +
				"<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/choices.js@9.0.1/public/assets/scripts/choices.min.js'></script>" +
				"<!-- Unbxd Search JS SDK -->" +
				"<script type='text/javascript' src='https://libraries.unbxdapi.com/search-sdk/v2.0.20/vanillaSearch.min.js'></script>" +
				"<!-- Unbxd Autosuggest SDK -->" +
				"<script type='text/javascript' src='https://libraries.unbxdapi.com/unbxdAutosuggest_v1.1.js'></script>" +
				"<!-- Unbxd SDK trigger script for default template -->" +
				"<script type='text/javascript' src='./unbxdInit.js'></script>" +
				"</html>",
		};
	};

	return (
		<div className="vanilla2">
			<div dangerouslySetInnerHTML={createMarkup()}></div>
		</div>
	);
	// return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
