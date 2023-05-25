import React, { useEffect, useState } from "react";

// import UnbxdSearch from  '@unbxd-ui/vanilla-search-library';
import UnbxdSearch from "../../../../search-JS-library/src/index";

// import template from "./skJewellery.html";
// import UnbxdSearch from "../../../../../search-JS-library/src/index";
// import useDeepCompareEffect from "use-deep-compare-effect";
// import "../../../public/unbxdStyle.css";
// import "../../../public/styles/components/vanilla2/unbxdStyles.scss";

const Vanilla2 = React.memo((props) => {
	let {
		validatedConfig = {},
		filename,
		reloadWarning,
		// setErrorSet,
		// errorSet,
		displayError,
	} = props;

	// console.log("template:", template, typeof template);

	// const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
	// 	JSON.stringify(validatedConfig)
	// )}`;
	// const link = document.createElement("a");
	// link.href = jsonString;
	// link.download = "validatedConfig.json";
	// link.click();
	// debugger;
	useEffect(() => {
		// window.unbxdSearch.resetAll();
		// window.unbxdSearch = null;
		if (Object.keys(validatedConfig).length) {
			if (validatedConfig.pagesize.pageSize !== undefined) {
				validatedConfig = {
					...validatedConfig,
					pageSize: validatedConfig.pagesize.pageSize,
				};
			}
			console.log("validatedConfig:", validatedConfig);
			debugger;

			// let errors = new Set();

			if (UnbxdSearch) {
				if (location.href.includes("?")) {
					history.pushState({}, null, location.href.split("?")[0]);
				}
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
					onError: function (module, err) {
						// console.log(err, module);
						displayError(err, module);
						return;
					},
					searchTrigger: "click",
					...validatedConfig,
					// products: {
					// 	el: document.getElementById("searchResultsWrapper"),
					// 	productType: "SEARCH",
					// },
					pageSize: validatedConfig.pagesize.pageSize,
				});
				console.log("Applied changes");
				window.unbxdSearch.getResults("*");
				// window.unbxdSearch.setUrl(false);

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
				// errors.forEach((error) => console.log("error:", error));
				// setErrorSet(errors);
			}
		}
		// else {
		// 	if (UnbxdSearch) {
		// 		window.unbxdSearch = new UnbxdSearch({
		// 			siteKey: "demo-unbxd700181503576558",
		// 			apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
		// 			hashMode: false,
		// 			updateUrls: true,
		// 			onEvent: function (instance, type, state) {
		// 				if (type === "AFTER_RENDER") {
		// 					if (
		// 						localStorage.getItem("unx_product_clicked") &&
		// 						document.getElementById(
		// 							localStorage.getItem("unx_product_clicked")
		// 						)
		// 					) {
		// 						document
		// 							.getElementById(localStorage.getItem("unx_product_clicked"))
		// 							.scrollIntoView();
		// 						localStorage.removeItem("unx_product_clicked");
		// 					}
		// 				}
		// 			},
		// 			// searchTrigger: "click",
		// 			// products: {
		// 			// 	productType: "SEARCH",
		// 			// },
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
		// 				el: document.querySelector(".unxPagination"),
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
		// 				// enabled: false,
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
		// 		window.unbxdSearch.getResults("*");
		// 		// window.unbxdSearch.setUrl(false);

		// 		// if (reloadWarning) {
		// 		// 	window.addEventListener("beforeunload", (event) => {
		// 		// 		event.preventDefault();
		// 		// 		event.returnValue = "";
		// 		// 		return "";
		// 		// 	});
		// 		// }
		// 		// return () => window.removeEventListener("beforeunload", unloadCallback);
		// 		// window.onbeforeunload = function () {
		// 		// 	return "Data will be lost if you leave the page, are you sure?";
		// 		// };
		// 	}
		// }
	});
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
				// "<link rel='stylesheet' href='https://libraries.unbxdapi.com/search-sdk/v2.0.5/vanillaSearch.min.css'/>" +
				// "<link rel='stylesheet' type='text/css' href='unbxdStyle.css' />" +
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
				// `<link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/base-grid.css?v=71268308520810431211676321311'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/base.css?v=138345686330947006061676321312'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/custom.css?v=106461103553586307951680031911'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/component-newsletter.css?v=161725672533910442531676321311'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/section-footer.css?v=27985602963307417511676321314'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/nine15-section--accordion.css?v=124109217032821631561676321312'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/base-custom.css?v=34226551080132056461677087394&enable_css_minification=1'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/component-list-menu.css?v=179266631784036741811676321313'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/component-search.css?v=92716746666230468691676321311'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/component-menu-drawer.css?v=98551097239687612411676321311'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/component-cart-notification.css?v=176034334239645848661676321311'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/component-cart-items.css?v=48748705938794903491676321314'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/component-cart-items.css?v=48748705938794903491676321314'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/nine15-section--mega-menu.css?v=170104212833839055861676321312'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://pintoranch.com/cdn/shop/t/65/assets/component--ajax-cart.css?v=95745722602544677401676321308'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://staticw2.yotpo.com/i8iVycF1PCLmXqNweqROWphwnoyYsXaMgD9yTKDB/widget.css?widget_version=2022-07-03_07-28-28'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://fonts.googleapis.com/css?family=Noto+Sans:500%7CNoto+Sans:400regular%7CNoto+Sans:700%7CNoto+Sans:300'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://app.amped.io/snippet/account_tpssz7f/fonts.css'
				// 	rel='stylesheet'
				// />
				// <link
				// 	href='https://fonts.googleapis.com/css?family=Open+Sans&display=swap'
				// 	rel='stylesheet'
				// />` +
				"  </body>" +
				"<!-- Unbxd SDK dependency libraries: jQuery, jQuery UI & Handlebars -->" +
				"<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>" +
				"<script type='text/javascript' src='https://libraries.unbxdapi.com/sdk-assets/jquery.ui.widget.js'></script>" +
				"<script type='text/javascript' src='https://libraries.unbxdapi.com/sdk-assets/jquery.ui.mouse.js'></script>" +
				"<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.5.3/handlebars.min.js'></script>" +
				"<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.5.0/nouislider.min.js'></script>" +
				"<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/choices.js@9.0.1/public/assets/scripts/choices.min.js'></script>" +
				"<!-- Unbxd Search JS SDK -->" +
				// "<script type='text/javascript' src='https://libraries.unbxdapi.com/search-sdk/v2.0.20/vanillaSearch.min.js'></script>" +
				"<!-- Unbxd Autosuggest SDK -->" +
				// "<script type='text/javascript' src='https://libraries.unbxdapi.com/unbxdAutosuggest_v1.1.js'></script>" +
				"<!-- Unbxd SDK trigger script for default template -->" +
				// "<script type='text/javascript' src='./unbxdInit.js'></script>" +
				"</html>",
		};

		// 		return {
		// 			__html: `<html lang="en-US">
		// 	<head>
		// 		<meta charset="UTF-8" />
		// 		<meta
		// 			name="viewport"
		// 			content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
		// 		/>
		// 		<!-- SEO Scripts header -->
		// 		<!-- End SEO SCripts header -->
		// 		<style>
		// 			.footer-facebook {
		// 				background-image: url("https://www.skjewellery.com/wp-content/uploads/2023/02/Icons-FB.png");
		// 				background-size: contain;
		// 				opacity: 0.5;
		// 			}
		// 			.footer-facebook:hover {
		// 				opacity: 1;
		// 			}
		// 			.footer-tiktok {
		// 				background-image: url("https://www.skjewellery.com/wp-content/uploads/2023/02/Icons-TT.png");
		// 				background-size: contain;
		// 				opacity: 0.5;
		// 			}
		// 			.footer-tiktok:hover {
		// 				opacity: 1;
		// 			}
		// 			.footer-youtube {
		// 				background-image: url("https://www.skjewellery.com/wp-content/uploads/2023/02/Icons-IG.png");
		// 				background-size: contain;
		// 				opacity: 0.5;
		// 			}
		// 			.footer-youtube:hover {
		// 				opacity: 1;
		// 			}
		// 			.footer-instagram {
		// 				background-image: url("https://www.skjewellery.com/wp-content/uploads/2023/02/Icons-YT.png");
		// 				background-size: contain;
		// 				opacity: 0.5;
		// 			}
		// 			.footer-instagram:hover {
		// 				opacity: 1;
		// 			}
		// 		</style>
		// 		<title>"necklace" | SK Jewellery</title>

		// 		<!-- Google Tag Manager for WordPress by gtm4wp.com -->
		// 		<script async="" src="//static.trackedweb.net/js/_dmptv4.js"></script>
		// 		<script
		// 			type="text/javascript"
		// 			async=""
		// 			src="https://avd.innity.net/lib/dc.js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			async=""
		// 			src="https://data.skjewellery.com/gtag/js?id=G-84NEJGHZSK&amp;l=dataLayer&amp;cx=c"
		// 		></script>
		// 		<script
		// 			src="https://connect.facebook.net/signals/config/249615639514974?v=2.9.104&amp;r=stable"
		// 			async=""
		// 		></script>
		// 		<script
		// 			async=""
		// 			src="https://connect.facebook.net/en_US/fbevents.js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			async=""
		// 			src="https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=C81VC5T0NM9PPK6KF37G&amp;lib=ttq"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			async=""
		// 			src="https://www.google-analytics.com/analytics.js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			async=""
		// 			src="https://avd.innity.net/801/container_5fae026e47e704500b000001.js"
		// 		></script>
		// 		<script
		// 			async=""
		// 			src="https://data.skjewellery.com/gtm.js?id=GTM-KMT5CP"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			async=""
		// 			src="//cdn1.stamped.io/files/widget.min.js"
		// 		></script>
		// 		<script data-cfasync="false" data-pagespeed-no-defer="">
		// 			var gtm4wp_datalayer_name = "dataLayer";
		// 			var dataLayer = dataLayer || [];
		// 			const gtm4wp_use_sku_instead = false;
		// 			const gtm4wp_id_prefix = "";
		// 			const gtm4wp_remarketing = false;
		// 			const gtm4wp_eec = true;
		// 			const gtm4wp_classicec = false;
		// 			const gtm4wp_currency = "SGD";
		// 			const gtm4wp_product_per_impression = 50;
		// 			const gtm4wp_needs_shipping_address = false;
		// 			const gtm4wp_business_vertical = "retail";
		// 			const gtm4wp_business_vertical_id = "id";
		// 		</script>
		// 		<!-- End Google Tag Manager for WordPress by gtm4wp.com -->
		// 		<meta
		// 			property="article:published_time"
		// 			content="2023-05-23T11:18:08+08:00"
		// 		/>
		// 		<meta
		// 			property="article:modified_time"
		// 			content="2023-05-23T11:18:08+08:00"
		// 		/>
		// 		<meta property="og:updated_time" content="2023-05-23T11:18:08+08:00" />
		// 		<meta
		// 			name="robots"
		// 			content="noindex, nofollow, noodp, noarchive, nosnippet"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			href="//cdn1.stamped.io/files/widget.min.css"
		// 			type="text/css"
		// 		/>
		// 		<link rel="canonical" href="https://www.skjewellery.com/search/necklace" />
		// 		<meta
		// 			property="og:url"
		// 			content="https://www.skjewellery.com/search/necklace"
		// 		/>
		// 		<meta property="og:site_name" content="SK Jewellery" />
		// 		<meta property="og:locale" content="en_US" />
		// 		<meta property="og:type" content="object" />
		// 		<meta property="og:title" content='"necklace" | SK Jewellery' />
		// 		<meta property="og:image" content="" />
		// 		<meta property="og:image:secure_url" content="" />
		// 		<meta property="fb:pages" content="" />
		// 		<meta property="fb:admins" content="" />
		// 		<meta property="fb:app_id" content="" />
		// 		<meta name="twitter:card" content="summary" />
		// 		<meta name="twitter:site" content="" />
		// 		<meta name="twitter:creator" content="" />
		// 		<meta name="twitter:title" content='"necklace" | SK Jewellery' />
		// 		<link rel="dns-prefetch" href="//www.skjewellery.com" />
		// 		<link rel="dns-prefetch" href="//r1-t.trackedlink.net" />
		// 		<link rel="dns-prefetch" href="//code.jquery.com" />
		// 		<link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
		// 		<link rel="dns-prefetch" href="//use.typekit.net" />
		// 		<link rel="dns-prefetch" href="//r3.dotdigital-pages.com" />
		// 		<link
		// 			rel="stylesheet"
		// 			id="sbi_styles-css"
		// 			href="https://www.skjewellery.com/wp-content/plugins/instagram-feed-pro/css/sbi-styles.min.css?ver=5.12.5"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="wp-block-library-css"
		// 			href="https://www.skjewellery.com/wp-includes/css/dist/block-library/style.css?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="wc-blocks-vendors-style-css"
		// 			href="https://www.skjewellery.com/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-vendors-style.css?ver=1683607421"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="wc-blocks-style-css"
		// 			href="https://www.skjewellery.com/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-style.css?ver=1683607421"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<style id="wpseopress-local-business-style-inline-css" type="text/css">
		// 			span.wp-block-wpseopress-local-business-field {
		// 				margin-right: 8px;
		// 			}
		// 		</style>
		// 		<link
		// 			rel="stylesheet"
		// 			id="classic-theme-styles-css"
		// 			href="https://www.skjewellery.com/wp-includes/css/classic-themes.css?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<style id="global-styles-inline-css" type="text/css">
		// 			body {
		// 				--wp--preset--color--black: #000000;
		// 				--wp--preset--color--cyan-bluish-gray: #abb8c3;
		// 				--wp--preset--color--white: #ffffff;
		// 				--wp--preset--color--pale-pink: #f78da7;
		// 				--wp--preset--color--vivid-red: #cf2e2e;
		// 				--wp--preset--color--luminous-vivid-orange: #ff6900;
		// 				--wp--preset--color--luminous-vivid-amber: #fcb900;
		// 				--wp--preset--color--light-green-cyan: #7bdcb5;
		// 				--wp--preset--color--vivid-green-cyan: #00d084;
		// 				--wp--preset--color--pale-cyan-blue: #8ed1fc;
		// 				--wp--preset--color--vivid-cyan-blue: #0693e3;
		// 				--wp--preset--color--vivid-purple: #9b51e0;
		// 				--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(
		// 					135deg,
		// 					rgba(6, 147, 227, 1) 0%,
		// 					rgb(155, 81, 224) 100%
		// 				);
		// 				--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(
		// 					135deg,
		// 					rgb(122, 220, 180) 0%,
		// 					rgb(0, 208, 130) 100%
		// 				);
		// 				--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(
		// 					135deg,
		// 					rgba(252, 185, 0, 1) 0%,
		// 					rgba(255, 105, 0, 1) 100%
		// 				);
		// 				--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(
		// 					135deg,
		// 					rgba(255, 105, 0, 1) 0%,
		// 					rgb(207, 46, 46) 100%
		// 				);
		// 				--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(
		// 					135deg,
		// 					rgb(238, 238, 238) 0%,
		// 					rgb(169, 184, 195) 100%
		// 				);
		// 				--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(
		// 					135deg,
		// 					rgb(74, 234, 220) 0%,
		// 					rgb(151, 120, 209) 20%,
		// 					rgb(207, 42, 186) 40%,
		// 					rgb(238, 44, 130) 60%,
		// 					rgb(251, 105, 98) 80%,
		// 					rgb(254, 248, 76) 100%
		// 				);
		// 				--wp--preset--gradient--blush-light-purple: linear-gradient(
		// 					135deg,
		// 					rgb(255, 206, 236) 0%,
		// 					rgb(152, 150, 240) 100%
		// 				);
		// 				--wp--preset--gradient--blush-bordeaux: linear-gradient(
		// 					135deg,
		// 					rgb(254, 205, 165) 0%,
		// 					rgb(254, 45, 45) 50%,
		// 					rgb(107, 0, 62) 100%
		// 				);
		// 				--wp--preset--gradient--luminous-dusk: linear-gradient(
		// 					135deg,
		// 					rgb(255, 203, 112) 0%,
		// 					rgb(199, 81, 192) 50%,
		// 					rgb(65, 88, 208) 100%
		// 				);
		// 				--wp--preset--gradient--pale-ocean: linear-gradient(
		// 					135deg,
		// 					rgb(255, 245, 203) 0%,
		// 					rgb(182, 227, 212) 50%,
		// 					rgb(51, 167, 181) 100%
		// 				);
		// 				--wp--preset--gradient--electric-grass: linear-gradient(
		// 					135deg,
		// 					rgb(202, 248, 128) 0%,
		// 					rgb(113, 206, 126) 100%
		// 				);
		// 				--wp--preset--gradient--midnight: linear-gradient(
		// 					135deg,
		// 					rgb(2, 3, 129) 0%,
		// 					rgb(40, 116, 252) 100%
		// 				);
		// 				--wp--preset--duotone--dark-grayscale: url("#wp-duotone-dark-grayscale");
		// 				--wp--preset--duotone--grayscale: url("#wp-duotone-grayscale");
		// 				--wp--preset--duotone--purple-yellow: url("#wp-duotone-purple-yellow");
		// 				--wp--preset--duotone--blue-red: url("#wp-duotone-blue-red");
		// 				--wp--preset--duotone--midnight: url("#wp-duotone-midnight");
		// 				--wp--preset--duotone--magenta-yellow: url("#wp-duotone-magenta-yellow");
		// 				--wp--preset--duotone--purple-green: url("#wp-duotone-purple-green");
		// 				--wp--preset--duotone--blue-orange: url("#wp-duotone-blue-orange");
		// 				--wp--preset--font-size--small: 13px;
		// 				--wp--preset--font-size--medium: 20px;
		// 				--wp--preset--font-size--large: 36px;
		// 				--wp--preset--font-size--x-large: 42px;
		// 				--wp--preset--spacing--20: 0.44rem;
		// 				--wp--preset--spacing--30: 0.67rem;
		// 				--wp--preset--spacing--40: 1rem;
		// 				--wp--preset--spacing--50: 1.5rem;
		// 				--wp--preset--spacing--60: 2.25rem;
		// 				--wp--preset--spacing--70: 3.38rem;
		// 				--wp--preset--spacing--80: 5.06rem;
		// 				--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
		// 				--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
		// 				--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
		// 				--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1),
		// 					6px 6px rgba(0, 0, 0, 1);
		// 				--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
		// 			}
		// 			:where(.is-layout-flex) {
		// 				gap: 0.5em;
		// 			}
		// 			body .is-layout-flow > .alignleft {
		// 				float: left;
		// 				margin-inline-start: 0;
		// 				margin-inline-end: 2em;
		// 			}
		// 			body .is-layout-flow > .alignright {
		// 				float: right;
		// 				margin-inline-start: 2em;
		// 				margin-inline-end: 0;
		// 			}
		// 			body .is-layout-flow > .aligncenter {
		// 				margin-left: auto !important;
		// 				margin-right: auto !important;
		// 			}
		// 			body .is-layout-constrained > .alignleft {
		// 				float: left;
		// 				margin-inline-start: 0;
		// 				margin-inline-end: 2em;
		// 			}
		// 			body .is-layout-constrained > .alignright {
		// 				float: right;
		// 				margin-inline-start: 2em;
		// 				margin-inline-end: 0;
		// 			}
		// 			body .is-layout-constrained > .aligncenter {
		// 				margin-left: auto !important;
		// 				margin-right: auto !important;
		// 			}
		// 			body
		// 				.is-layout-constrained
		// 				> :where(:not(.alignleft):not(.alignright):not(.alignfull)) {
		// 				max-width: var(--wp--style--global--content-size);
		// 				margin-left: auto !important;
		// 				margin-right: auto !important;
		// 			}
		// 			body .is-layout-constrained > .alignwide {
		// 				max-width: var(--wp--style--global--wide-size);
		// 			}
		// 			body .is-layout-flex {
		// 				display: flex;
		// 			}
		// 			body .is-layout-flex {
		// 				flex-wrap: wrap;
		// 				align-items: center;
		// 			}
		// 			body .is-layout-flex > * {
		// 				margin: 0;
		// 			}
		// 			:where(.wp-block-columns.is-layout-flex) {
		// 				gap: 2em;
		// 			}
		// 			.has-black-color {
		// 				color: var(--wp--preset--color--black) !important;
		// 			}
		// 			.has-cyan-bluish-gray-color {
		// 				color: var(--wp--preset--color--cyan-bluish-gray) !important;
		// 			}
		// 			.has-white-color {
		// 				color: var(--wp--preset--color--white) !important;
		// 			}
		// 			.has-pale-pink-color {
		// 				color: var(--wp--preset--color--pale-pink) !important;
		// 			}
		// 			.has-vivid-red-color {
		// 				color: var(--wp--preset--color--vivid-red) !important;
		// 			}
		// 			.has-luminous-vivid-orange-color {
		// 				color: var(--wp--preset--color--luminous-vivid-orange) !important;
		// 			}
		// 			.has-luminous-vivid-amber-color {
		// 				color: var(--wp--preset--color--luminous-vivid-amber) !important;
		// 			}
		// 			.has-light-green-cyan-color {
		// 				color: var(--wp--preset--color--light-green-cyan) !important;
		// 			}
		// 			.has-vivid-green-cyan-color {
		// 				color: var(--wp--preset--color--vivid-green-cyan) !important;
		// 			}
		// 			.has-pale-cyan-blue-color {
		// 				color: var(--wp--preset--color--pale-cyan-blue) !important;
		// 			}
		// 			.has-vivid-cyan-blue-color {
		// 				color: var(--wp--preset--color--vivid-cyan-blue) !important;
		// 			}
		// 			.has-vivid-purple-color {
		// 				color: var(--wp--preset--color--vivid-purple) !important;
		// 			}
		// 			.has-black-background-color {
		// 				background-color: var(--wp--preset--color--black) !important;
		// 			}
		// 			.has-cyan-bluish-gray-background-color {
		// 				background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
		// 			}
		// 			.has-white-background-color {
		// 				background-color: var(--wp--preset--color--white) !important;
		// 			}
		// 			.has-pale-pink-background-color {
		// 				background-color: var(--wp--preset--color--pale-pink) !important;
		// 			}
		// 			.has-vivid-red-background-color {
		// 				background-color: var(--wp--preset--color--vivid-red) !important;
		// 			}
		// 			.has-luminous-vivid-orange-background-color {
		// 				background-color: var(
		// 					--wp--preset--color--luminous-vivid-orange
		// 				) !important;
		// 			}
		// 			.has-luminous-vivid-amber-background-color {
		// 				background-color: var(
		// 					--wp--preset--color--luminous-vivid-amber
		// 				) !important;
		// 			}
		// 			.has-light-green-cyan-background-color {
		// 				background-color: var(--wp--preset--color--light-green-cyan) !important;
		// 			}
		// 			.has-vivid-green-cyan-background-color {
		// 				background-color: var(--wp--preset--color--vivid-green-cyan) !important;
		// 			}
		// 			.has-pale-cyan-blue-background-color {
		// 				background-color: var(--wp--preset--color--pale-cyan-blue) !important;
		// 			}
		// 			.has-vivid-cyan-blue-background-color {
		// 				background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
		// 			}
		// 			.has-vivid-purple-background-color {
		// 				background-color: var(--wp--preset--color--vivid-purple) !important;
		// 			}
		// 			.has-black-border-color {
		// 				border-color: var(--wp--preset--color--black) !important;
		// 			}
		// 			.has-cyan-bluish-gray-border-color {
		// 				border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
		// 			}
		// 			.has-white-border-color {
		// 				border-color: var(--wp--preset--color--white) !important;
		// 			}
		// 			.has-pale-pink-border-color {
		// 				border-color: var(--wp--preset--color--pale-pink) !important;
		// 			}
		// 			.has-vivid-red-border-color {
		// 				border-color: var(--wp--preset--color--vivid-red) !important;
		// 			}
		// 			.has-luminous-vivid-orange-border-color {
		// 				border-color: var(
		// 					--wp--preset--color--luminous-vivid-orange
		// 				) !important;
		// 			}
		// 			.has-luminous-vivid-amber-border-color {
		// 				border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
		// 			}
		// 			.has-light-green-cyan-border-color {
		// 				border-color: var(--wp--preset--color--light-green-cyan) !important;
		// 			}
		// 			.has-vivid-green-cyan-border-color {
		// 				border-color: var(--wp--preset--color--vivid-green-cyan) !important;
		// 			}
		// 			.has-pale-cyan-blue-border-color {
		// 				border-color: var(--wp--preset--color--pale-cyan-blue) !important;
		// 			}
		// 			.has-vivid-cyan-blue-border-color {
		// 				border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
		// 			}
		// 			.has-vivid-purple-border-color {
		// 				border-color: var(--wp--preset--color--vivid-purple) !important;
		// 			}
		// 			.has-vivid-cyan-blue-to-vivid-purple-gradient-background {
		// 				background: var(
		// 					--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple
		// 				) !important;
		// 			}
		// 			.has-light-green-cyan-to-vivid-green-cyan-gradient-background {
		// 				background: var(
		// 					--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan
		// 				) !important;
		// 			}
		// 			.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
		// 				background: var(
		// 					--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange
		// 				) !important;
		// 			}
		// 			.has-luminous-vivid-orange-to-vivid-red-gradient-background {
		// 				background: var(
		// 					--wp--preset--gradient--luminous-vivid-orange-to-vivid-red
		// 				) !important;
		// 			}
		// 			.has-very-light-gray-to-cyan-bluish-gray-gradient-background {
		// 				background: var(
		// 					--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray
		// 				) !important;
		// 			}
		// 			.has-cool-to-warm-spectrum-gradient-background {
		// 				background: var(
		// 					--wp--preset--gradient--cool-to-warm-spectrum
		// 				) !important;
		// 			}
		// 			.has-blush-light-purple-gradient-background {
		// 				background: var(--wp--preset--gradient--blush-light-purple) !important;
		// 			}
		// 			.has-blush-bordeaux-gradient-background {
		// 				background: var(--wp--preset--gradient--blush-bordeaux) !important;
		// 			}
		// 			.has-luminous-dusk-gradient-background {
		// 				background: var(--wp--preset--gradient--luminous-dusk) !important;
		// 			}
		// 			.has-pale-ocean-gradient-background {
		// 				background: var(--wp--preset--gradient--pale-ocean) !important;
		// 			}
		// 			.has-electric-grass-gradient-background {
		// 				background: var(--wp--preset--gradient--electric-grass) !important;
		// 			}
		// 			.has-midnight-gradient-background {
		// 				background: var(--wp--preset--gradient--midnight) !important;
		// 			}
		// 			.has-small-font-size {
		// 				font-size: var(--wp--preset--font-size--small) !important;
		// 			}
		// 			.has-medium-font-size {
		// 				font-size: var(--wp--preset--font-size--medium) !important;
		// 			}
		// 			.has-large-font-size {
		// 				font-size: var(--wp--preset--font-size--large) !important;
		// 			}
		// 			.has-x-large-font-size {
		// 				font-size: var(--wp--preset--font-size--x-large) !important;
		// 			}
		// 			.wp-block-navigation a:where(:not(.wp-element-button)) {
		// 				color: inherit;
		// 			}
		// 			:where(.wp-block-columns.is-layout-flex) {
		// 				gap: 2em;
		// 			}
		// 			.wp-block-pullquote {
		// 				font-size: 1.5em;
		// 				line-height: 1.6;
		// 			}
		// 		</style>
		// 		<link
		// 			rel="stylesheet"
		// 			id="dotdigital-for-woocommerce-css"
		// 			href="https://www.skjewellery.com/wp-content/plugins/dotdigital-for-woocommerce/public/css/dotdigital-woocommerce-public.css?ver=1.3.4"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="woocommerce-layout-css"
		// 			href="https://www.skjewellery.com/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=7.6.1"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="woocommerce-smallscreen-css"
		// 			href="https://www.skjewellery.com/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=7.6.1"
		// 			type="text/css"
		// 			media="only screen and (max-width: 768px)"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="woocommerce-general-css"
		// 			href="https://www.skjewellery.com/wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=7.6.1"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<style id="woocommerce-inline-inline-css" type="text/css">
		// 			.woocommerce form .form-row .required {
		// 				visibility: visible;
		// 			}
		// 		</style>
		// 		<link
		// 			rel="stylesheet"
		// 			id="megamenu-css"
		// 			href="https://www.skjewellery.com/wp-content/uploads/maxmegamenu/style.css?ver=7d5b5f"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="dashicons-css"
		// 			href="https://www.skjewellery.com/wp-includes/css/dashicons.css?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<style id="dashicons-inline-css" type="text/css">
		// 			[data-font="Dashicons"]:before {
		// 				font-family: "Dashicons" !important;
		// 				content: attr(data-icon) !important;
		// 				speak: none !important;
		// 				font-weight: normal !important;
		// 				font-variant: normal !important;
		// 				text-transform: none !important;
		// 				line-height: 1 !important;
		// 				font-style: normal !important;
		// 				-webkit-font-smoothing: antialiased !important;
		// 				-moz-osx-font-smoothing: grayscale !important;
		// 			}
		// 		</style>
		// 		<link
		// 			rel="stylesheet"
		// 			id="tinvwl-webfont-css"
		// 			href="https://www.skjewellery.com/wp-content/plugins/ti-woocommerce-wishlist/assets/css/webfont.min.css?ver=2.4.4"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="tinvwl-css"
		// 			href="https://www.skjewellery.com/wp-content/plugins/ti-woocommerce-wishlist/assets/css/public.min.css?ver=2.4.4"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="kst_customise_review_frontend-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/modules/stamped-io/public/assets/kts-stamped-review.css?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="oa_skj-style-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/style.css?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="bootstrap-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/css/bootstrap.min.css?ver=23052403:26:17"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="glide-core-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/css/glide.core.css?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="delvify-custom-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/assets/delvify-custom.css?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="jquery-ui-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/jqueryui/jquery-ui.css?ver=23052403:26:17"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="jquery-ui.structure-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/jqueryui/jquery-ui.structure.css?ver=23052403:26:17"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="font-css-css"
		// 			href="https://use.typekit.net/hdb2elw.css?ver=03:26:17"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="theme-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/css/theme.css?ver=03:26:17"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="theme-strap-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/css/themestrap.css?ver=03:26:17"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="custom-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/css/ecustom.css?ver=23052403:26:17"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="font-css-cus-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/css/fonts/font.css?ver=03:26:17"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="charm-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/assets/style.css?ver=03:05:26"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="custom1-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/css/custom1.css?ver=03:26:17"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="fontawesome-css"
		// 			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="slick-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/css/slick.css?ver=1"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="timepicker-css-css"
		// 			href="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css?ver=23052403:26:17"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="sdj-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/woo-custom/sidianjin/sdj-css.css?ver=23052403:26:17"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="responsive-css-css"
		// 			href="https://www.skjewellery.com/wp-content/themes/SK6.5.0/woo-custom/sidianjin/responsive.css?ver=23052403:26:17"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			id="oaps-frontend-css-css"
		// 			href="https://www.skjewellery.com/wp-content/plugins/oa-promo-system/build/oaps-frontend.css?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			type="text/css"
		// 			media="all"
		// 		/>
		// 		<script type="text/javascript">
		// 			window._nslDOMReady = function (callback) {
		// 				if (
		// 					document.readyState === "complete" ||
		// 					document.readyState === "interactive"
		// 				) {
		// 					callback();
		// 				} else {
		// 					document.addEventListener("DOMContentLoaded", callback);
		// 				}
		// 			};
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-includes/js/jquery/jquery.js?ver=3.6.4"
		// 			id="jquery-core-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-includes/js/jquery/jquery-migrate.js?ver=3.4.0"
		// 			id="jquery-migrate-js"
		// 		></script>
		// 		<script type="text/javascript" id="woo-stamped-io-public-custom-js-extra">
		// 			/* <![CDATA[ */
		// 			var Woo_stamped = {
		// 				pub_key: "pubkey-oJ7Nw9v4HP3M976Bu62qbX9qm3Y7m2",
		// 				store_hash: "",
		// 				url: "210582",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/stampedio-product-reviews/assets/js/woo-stamped.io-public.js?ver=1.9.1"
		// 			id="woo-stamped-io-public-custom-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/duracelltomi-google-tag-manager/js/gtm4wp-woocommerce-enhanced.js?ver=1.16.2"
		// 			id="gtm4wp-woocommerce-enhanced-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/bootstrap.js?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			id="bootstrap-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/theme.js?ver=03:26:17"
		// 			id="theme-js-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/glide.js?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			id="glide-js"
		// 		></script>
		// 		<script type="text/javascript" id="glide-initializers-js-extra">
		// 			/* <![CDATA[ */
		// 			var alt_ajax_params = {
		// 				ajax_url: "https:\/\/www.skjewellery.com\/wp-admin\/admin-ajax.php",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/glide-initializers.js?ver=03:26:17"
		// 			id="glide-initializers-js"
		// 		></script>
		// 		<script type="text/javascript" id="sdj-js-js-extra">
		// 			/* <![CDATA[ */
		// 			var ajax_sdj_genre_params = {
		// 				ajax_url: "https:\/\/www.skjewellery.com\/wp-admin\/admin-ajax.php",
		// 				home_url: "https:\/\/www.skjewellery.com",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			data-cfasync="true"
		// 			defer=""
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/woo-custom/sidianjin/sdj-js.js?ver=23052403:26:17"
		// 			id="sdj-js-js"
		// 		></script>
		// 		<!-- Google Tag Manager -->
		// 		<script>
		// 			(function (w, d, s, l, i) {
		// 				w[l] = w[l] || [];
		// 				w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
		// 				var f = d.getElementsByTagName(s)[0],
		// 					j = d.createElement(s),
		// 					dl = l != "dataLayer" ? "&l=" + l : "";
		// 				j.async = true;
		// 				j.src = "https://data.skjewellery.com/gtm.js?id=" + i + dl;
		// 				f.parentNode.insertBefore(j, f);
		// 			})(window, document, "script", "dataLayer", "GTM-KMT5CP");
		// 		</script>
		// 		<!-- End Google Tag Manager -->

		// 		<!-- Global site tag (gtag.js) - Google Analytics -->
		// 		<script
		// 			async=""
		// 			src="https://www.googletagmanager.com/gtag/js?id=UA-39972894-1"
		// 		></script>
		// 		<script>
		// 			window.dataLayer = window.dataLayer || [];
		// 			function gtag() {
		// 				dataLayer.push(arguments);
		// 			}
		// 			gtag("js", new Date());

		// 			gtag("config", "UA-39972894-1");
		// 		</script>

		// 		<script type="application/ld+json">
		// 			{
		// 				"@context": "https://schema.org",
		// 				"@type": "Store",
		// 				"name": "SK Jewellery",
		// 				"image": "https://www.skjewellery.com/wp-content/uploads/2022/02/SKJ_logo-2.png",
		// 				"@id": "",
		// 				"url": "https://www.skjewellery.com/",
		// 				"telephone": "1800-7553935",
		// 				"priceRange": "$$",
		// 				"address": {
		// 					"@type": "PostalAddress",
		// 					"streetAddress": "7 Changi Business Park Vista #01-01",
		// 					"addressLocality": "Singapore",
		// 					"postalCode": "486042",
		// 					"addressCountry": "SG"
		// 				},
		// 				"openingHoursSpecification": {
		// 					"@type": "OpeningHoursSpecification",
		// 					"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
		// 					"opens": "09:00",
		// 					"closes": "18:00"
		// 				},
		// 				"sameAs": [
		// 					"https://www.facebook.com/SKJewellerySG/",
		// 					"https://www.instagram.com/skjewellery/?hl=en",
		// 					"https://www.youtube.com/user/SKJewellerySG"
		// 				]
		// 			}
		// 		</script>
		// 		<link rel="next" href="https://www.skjewellery.com/page/2/?s=necklace" />
		// 		<link
		// 			rel="https://api.w.org/"
		// 			href="https://www.skjewellery.com/wp-json/"
		// 		/>
		// 		<link
		// 			rel="EditURI"
		// 			type="application/rsd+xml"
		// 			title="RSD"
		// 			href="https://www.skjewellery.com/xmlrpc.php?rsd"
		// 		/>
		// 		<link
		// 			rel="wlwmanifest"
		// 			type="application/wlwmanifest+xml"
		// 			href="https://www.skjewellery.com/wp-includes/wlwmanifest.xml"
		// 		/>

		// 		<meta name="generator" content="hoolah 2.3.65" />
		// 		<script src="https://merchant.cdn.hoolah.co/674cb337-652d-55e4-938a-abd3f382e7c3/hoolah-library.js"></script>
		// 		<link
		// 			rel="stylesheet"
		// 			href="https://merchant.cdn.hoolah.co/674cb337-652d-55e4-938a-abd3f382e7c3/hoolah-library.css"
		// 		/>
		// 		<script type="text/javascript">
		// 			window.atomePaymentPluginPriceDividerOptions = {
		// 				is_atome_enabled: true,
		// 				country: "sg",
		// 				language: "en",
		// 				api_environment: "production",
		// 				price_divider: "yes",
		// 				price_divider_applied_on: "product",
		// 				sku_permission: "yes",
		// 				max_spend: "0",
		// 				min_spend: 1.5,
		// 				cancel_timeout: "720",
		// 				debug_mode: "yes",
		// 				version: "5.0.1",
		// 				platform: "WOOCOMMERCE",
		// 			};
		// 		</script>
		// 		<script
		// 			id="atome-price-divider-js"
		// 			src="https://gateway.apaylater.com/plugins/price_divider/main.js"
		// 			defer=""
		// 		></script>
		// 		<!-- Google Tag Manager for WordPress by gtm4wp.com -->
		// 		<!-- GTM Container placement set to off -->
		// 		<script
		// 			data-cfasync="false"
		// 			data-pagespeed-no-defer=""
		// 			type="text/javascript"
		// 		>
		// 			var dataLayer_content = {
		// 				visitorLoginState: "logged-out",
		// 				pagePostType: "search-results",
		// 				siteSearchTerm: "necklace",
		// 				siteSearchFrom: "https:\/\/www.skjewellery.com\/",
		// 				siteSearchResults: 12,
		// 				customerTotalOrders: 0,
		// 				customerTotalOrderValue: "0.00",
		// 				customerFirstName: "",
		// 				customerLastName: "",
		// 				customerBillingFirstName: "",
		// 				customerBillingLastName: "",
		// 				customerBillingCompany: "",
		// 				customerBillingAddress1: "",
		// 				customerBillingAddress2: "",
		// 				customerBillingCity: "",
		// 				customerBillingPostcode: "",
		// 				customerBillingCountry: "",
		// 				customerBillingEmail: "",
		// 				customerBillingEmailHash:
		// 					"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
		// 				customerBillingPhone: "",
		// 				customerShippingFirstName: "",
		// 				customerShippingLastName: "",
		// 				customerShippingCompany: "",
		// 				customerShippingAddress1: "",
		// 				customerShippingAddress2: "",
		// 				customerShippingCity: "",
		// 				customerShippingPostcode: "",
		// 				customerShippingCountry: "",
		// 				cartContent: {
		// 					totals: {
		// 						applied_coupons: [],
		// 						discount_total: 0,
		// 						subtotal: 0,
		// 						total: "0",
		// 					},
		// 					items: [],
		// 				},
		// 			};
		// 			dataLayer.push(dataLayer_content);
		// 		</script>
		// 		<script>
		// 			console.warn &&
		// 				console.warn(
		// 					"[GTM4WP] Google Tag Manager container code placement set to OFF !!!"
		// 				);
		// 			console.warn &&
		// 				console.warn(
		// 					"[GTM4WP] Data layer codes are active but GTM container must be loaded using custom coding !!!"
		// 				);
		// 		</script>
		// 		<!-- End Google Tag Manager for WordPress by gtm4wp.com -->
		// 		<link rel="icon" sizes="192x192" href="" />
		// 		<link rel="apple-touch-icon-precomposed" sizes="152x152" href="" />
		// 		<link rel="icon" href="" />
		// 		<script>
		// 			var alt_country_phonecode = 65;
		// 			var alt_country_code = "SG";
		// 		</script>
		// 		<noscript
		// 			><style>
		// 				.woocommerce-product-gallery {
		// 					opacity: 1 !important;
		// 				}
		// 			</style></noscript
		// 		>
		// 		<link
		// 			rel="icon"
		// 			href="https://www.skjewellery.com/wp-content/uploads/2022/02/cropped-cropped-sk_logo_512-1-32x32.png"
		// 			sizes="32x32"
		// 		/>
		// 		<link
		// 			rel="icon"
		// 			href="https://www.skjewellery.com/wp-content/uploads/2022/02/cropped-cropped-sk_logo_512-1-192x192.png"
		// 			sizes="192x192"
		// 		/>
		// 		<link
		// 			rel="apple-touch-icon"
		// 			href="https://www.skjewellery.com/wp-content/uploads/2022/02/cropped-cropped-sk_logo_512-1-180x180.png"
		// 		/>
		// 		<meta
		// 			name="msapplication-TileImage"
		// 			content="https://www.skjewellery.com/wp-content/uploads/2022/02/cropped-cropped-sk_logo_512-1-270x270.png"
		// 		/>
		// 		<style type="text/css">
		// 			div.nsl-container[data-align="left"] {
		// 				text-align: left;
		// 			}

		// 			div.nsl-container[data-align="center"] {
		// 				text-align: center;
		// 			}

		// 			div.nsl-container[data-align="right"] {
		// 				text-align: right;
		// 			}

		// 			div.nsl-container div.nsl-container-buttons a[data-plugin="nsl"] {
		// 				text-decoration: none;
		// 				box-shadow: none;
		// 				border: 0;
		// 			}

		// 			div.nsl-container .nsl-container-buttons {
		// 				display: flex;
		// 				padding: 5px 0;
		// 			}

		// 			div.nsl-container.nsl-container-block .nsl-container-buttons {
		// 				display: inline-grid;
		// 				grid-template-columns: minmax(145px, auto);
		// 			}

		// 			div.nsl-container-block-fullwidth .nsl-container-buttons {
		// 				flex-flow: column;
		// 				align-items: center;
		// 			}

		// 			div.nsl-container-block-fullwidth .nsl-container-buttons a,
		// 			div.nsl-container-block .nsl-container-buttons a {
		// 				flex: 1 1 auto;
		// 				display: block;
		// 				margin: 5px 0;
		// 				width: 100%;
		// 			}

		// 			div.nsl-container-inline {
		// 				margin: -5px;
		// 				text-align: left;
		// 			}

		// 			div.nsl-container-inline .nsl-container-buttons {
		// 				justify-content: center;
		// 				flex-wrap: wrap;
		// 			}

		// 			div.nsl-container-inline .nsl-container-buttons a {
		// 				margin: 5px;
		// 				display: inline-block;
		// 			}

		// 			div.nsl-container-grid .nsl-container-buttons {
		// 				flex-flow: row;
		// 				align-items: center;
		// 				flex-wrap: wrap;
		// 			}

		// 			div.nsl-container-grid .nsl-container-buttons a {
		// 				flex: 1 1 auto;
		// 				display: block;
		// 				margin: 5px;
		// 				max-width: 280px;
		// 				width: 100%;
		// 			}

		// 			@media only screen and (min-width: 650px) {
		// 				div.nsl-container-grid .nsl-container-buttons a {
		// 					width: auto;
		// 				}
		// 			}

		// 			div.nsl-container .nsl-button {
		// 				cursor: pointer;
		// 				vertical-align: top;
		// 				border-radius: 4px;
		// 			}

		// 			div.nsl-container .nsl-button-default {
		// 				color: #fff;
		// 				display: flex;
		// 			}

		// 			div.nsl-container .nsl-button-icon {
		// 				display: inline-block;
		// 			}

		// 			div.nsl-container .nsl-button-svg-container {
		// 				flex: 0 0 auto;
		// 				padding: 8px;
		// 				display: flex;
		// 				align-items: center;
		// 			}

		// 			div.nsl-container svg {
		// 				height: 24px;
		// 				width: 24px;
		// 				vertical-align: top;
		// 			}

		// 			div.nsl-container .nsl-button-default div.nsl-button-label-container {
		// 				margin: 0 24px 0 12px;
		// 				padding: 10px 0;
		// 				font-family: Helvetica, Arial, sans-serif;
		// 				font-size: 16px;
		// 				line-height: 20px;
		// 				letter-spacing: 0.25px;
		// 				overflow: hidden;
		// 				text-align: center;
		// 				text-overflow: clip;
		// 				white-space: nowrap;
		// 				flex: 1 1 auto;
		// 				-webkit-font-smoothing: antialiased;
		// 				-moz-osx-font-smoothing: grayscale;
		// 				text-transform: none;
		// 				display: inline-block;
		// 			}

		// 			div.nsl-container
		// 				.nsl-button-google[data-skin="dark"]
		// 				.nsl-button-svg-container {
		// 				margin: 1px;
		// 				padding: 7px;
		// 				border-radius: 3px;
		// 				background: #fff;
		// 			}

		// 			div.nsl-container .nsl-button-google[data-skin="light"] {
		// 				border-radius: 1px;
		// 				box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
		// 				color: RGBA(0, 0, 0, 0.54);
		// 			}

		// 			div.nsl-container .nsl-button-apple .nsl-button-svg-container {
		// 				padding: 0 6px;
		// 			}

		// 			div.nsl-container .nsl-button-apple .nsl-button-svg-container svg {
		// 				height: 40px;
		// 				width: auto;
		// 			}

		// 			div.nsl-container .nsl-button-apple[data-skin="light"] {
		// 				color: #000;
		// 				box-shadow: 0 0 0 1px #000;
		// 			}

		// 			div.nsl-container .nsl-button-facebook[data-skin="white"] {
		// 				color: #000;
		// 				box-shadow: inset 0 0 0 1px #000;
		// 			}

		// 			div.nsl-container .nsl-button-facebook[data-skin="light"] {
		// 				color: #1877f2;
		// 				box-shadow: inset 0 0 0 1px #1877f2;
		// 			}

		// 			div.nsl-container .nsl-button-apple div.nsl-button-label-container {
		// 				font-size: 17px;
		// 				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		// 					Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
		// 					"Segoe UI Symbol";
		// 			}

		// 			div.nsl-container .nsl-button-slack div.nsl-button-label-container {
		// 				font-size: 17px;
		// 				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		// 					Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
		// 					"Segoe UI Symbol";
		// 			}

		// 			div.nsl-container .nsl-button-slack[data-skin="light"] {
		// 				color: #000000;
		// 				box-shadow: inset 0 0 0 1px #dddddd;
		// 			}

		// 			div.nsl-container .nsl-button-tiktok[data-skin="light"] {
		// 				color: #161823;
		// 				box-shadow: 0 0 0 1px rgba(22, 24, 35, 0.12);
		// 			}

		// 			.nsl-clear {
		// 				clear: both;
		// 			}

		// 			.nsl-container {
		// 				clear: both;
		// 			}

		// 			/*Button align start*/

		// 			div.nsl-container-inline[data-align="left"] .nsl-container-buttons {
		// 				justify-content: flex-start;
		// 			}

		// 			div.nsl-container-inline[data-align="center"] .nsl-container-buttons {
		// 				justify-content: center;
		// 			}

		// 			div.nsl-container-inline[data-align="right"] .nsl-container-buttons {
		// 				justify-content: flex-end;
		// 			}

		// 			div.nsl-container-grid[data-align="left"] .nsl-container-buttons {
		// 				justify-content: flex-start;
		// 			}

		// 			div.nsl-container-grid[data-align="center"] .nsl-container-buttons {
		// 				justify-content: center;
		// 			}

		// 			div.nsl-container-grid[data-align="right"] .nsl-container-buttons {
		// 				justify-content: flex-end;
		// 			}

		// 			div.nsl-container-grid[data-align="space-around"] .nsl-container-buttons {
		// 				justify-content: space-around;
		// 			}

		// 			div.nsl-container-grid[data-align="space-between"]
		// 				.nsl-container-buttons {
		// 				justify-content: space-between;
		// 			}

		// 			/* Button align end*/

		// 			/* Redirect */

		// 			#nsl-redirect-overlay {
		// 				display: flex;
		// 				flex-direction: column;
		// 				justify-content: center;
		// 				align-items: center;
		// 				position: fixed;
		// 				z-index: 1000000;
		// 				left: 0;
		// 				top: 0;
		// 				width: 100%;
		// 				height: 100%;
		// 				backdrop-filter: blur(1px);
		// 				background-color: RGBA(0, 0, 0, 0.32);
		// 			}

		// 			#nsl-redirect-overlay-container {
		// 				display: flex;
		// 				flex-direction: column;
		// 				justify-content: center;
		// 				align-items: center;
		// 				background-color: white;
		// 				padding: 30px;
		// 				border-radius: 10px;
		// 			}

		// 			#nsl-redirect-overlay-spinner {
		// 				content: "";
		// 				display: block;
		// 				margin: 20px;
		// 				border: 9px solid RGBA(0, 0, 0, 0.6);
		// 				border-top: 9px solid #fff;
		// 				border-radius: 50%;
		// 				box-shadow: inset 0 0 0 1px RGBA(0, 0, 0, 0.6),
		// 					0 0 0 1px RGBA(0, 0, 0, 0.6);
		// 				width: 40px;
		// 				height: 40px;
		// 				animation: nsl-loader-spin 2s linear infinite;
		// 			}

		// 			@keyframes nsl-loader-spin {
		// 				0% {
		// 					transform: rotate(0deg);
		// 				}
		// 				to {
		// 					transform: rotate(360deg);
		// 				}
		// 			}

		// 			#nsl-redirect-overlay-title {
		// 				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		// 					Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
		// 				font-size: 18px;
		// 				font-weight: bold;
		// 				color: #3c434a;
		// 			}

		// 			#nsl-redirect-overlay-text {
		// 				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		// 					Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
		// 				text-align: center;
		// 				font-size: 14px;
		// 				color: #3c434a;
		// 			}

		// 			/* Redirect END*/
		// 		</style>
		// 		<!-- Innity Site Tag - SK Jewellery Website -->
		// 		<script type="text/javascript" charset="UTF-8">
		// 			(function (w, d, s, i, c) {
		// 				var f = d.createElement(s);
		// 				f.type = "text/javascript";
		// 				f.async = true;
		// 				f.src = "https://avd.innity.net/" + i + "/container_" + c + ".js";
		// 				var g = d.getElementsByTagName(s)[0];
		// 				g.parentNode.insertBefore(f, g);
		// 			})(window, document, "script", "801", "5fae026e47e704500b000001");
		// 		</script>
		// 		<!-- End Innity Site Tag -->

		// 		<!-- mediacorp ads -->
		// 		<script>
		// 			(function () {
		// 				var a = String(Math.random()) * 10000000000000;
		// 				new Image().src =
		// 					"https://pubads.g.doubleclick.net/activity;dc_iu=/4654/DFPAudiencePixel;ord=" +
		// 					a +
		// 					";dc_seg=6523545935?";
		// 			})();
		// 		</script>
		// 		<noscript>
		// 			<img
		// 				style="display: none"
		// 				src="https://pubads.g.doubleclick.net/activity;dc_iu=/4654/DFPAudiencePixel;ord=1;dc_seg=6523545935?"
		// 				width="1"
		// 				height="1"
		// 				border="0"
		// 			/>
		// 		</noscript>

		// 		<!-- Activity name for this tag: SKJ_StarCaratDiamond_LandingPage_Count -->
		// 		<script>
		// 			(function () {
		// 				var a = String(Math.random()) * 10000000000000;
		// 				new Image().src =
		// 					"https://pubads.g.doubleclick.net/activity;xsp=4726669;ord=" +
		// 					a +
		// 					"?";
		// 			})();
		// 		</script>
		// 		<noscript>
		// 			<img
		// 				src="https://pubads.g.doubleclick.net/activity;xsp=4726669;ord=1?"
		// 				width="1"
		// 				height="1"
		// 				border="0"
		// 			/>
		// 		</noscript>
		// 		<!-- end mediacorp ads -->

		// 		<!-- Hotjar Tracking Code for www.skjewellery.com -->
		// 		<script>
		// 			(function (h, o, t, j, a, r) {
		// 				h.hj =
		// 					h.hj ||
		// 					function () {
		// 						(h.hj.q = h.hj.q || []).push(arguments);
		// 					};
		// 				h._hjSettings = { hjid: 2534830, hjsv: 6 };
		// 				a = o.getElementsByTagName("head")[0];
		// 				r = o.createElement("script");
		// 				r.async = 1;
		// 				r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
		// 				a.appendChild(r);
		// 			})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
		// 		</script>
		// 		<script
		// 			async=""
		// 			src="https://static.hotjar.com/c/hotjar-2534830.js?sv=6"
		// 		></script>
		// 		<style type="text/css">
		// 			/** Mega Menu CSS: fs **/
		// 		</style>
		// 		<script
		// 			async=""
		// 			src="https://script.hotjar.com/modules.bd615e91f206bba6c106.js"
		// 			charset="utf-8"
		// 		></script>
		// 		<link
		// 			rel="stylesheet"
		// 			href="//fonts.googleapis.com/css?family=Open+Sans:400,600&amp;display=swap"
		// 			type="text/css"
		// 		/>
		// 		<script
		// 			async=""
		// 			type="text/javascript"
		// 			src="https://cdn.livechatinc.com/tracking.js"
		// 		></script>
		// 		<meta
		// 			http-equiv="origin-trial"
		// 			content="AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
		// 		/>
		// 		<script
		// 			type="text/javascript"
		// 			async=""
		// 			src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/783266989/?random=1684941989341&amp;cv=11&amp;fst=1684941989341&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45He35m0&amp;u_w=1440&amp;u_h=900&amp;url=https%3A%2F%2Fwww.skjewellery.com%2F%3Fs%3Dnecklace&amp;ref=https%3A%2F%2Fwww.skjewellery.com%2F&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=%22necklace%22%20%7C%20SK%20Jewellery&amp;auid=1866114210.1684923473&amp;uaa=arm&amp;uab=64&amp;uafvl=Google%2520Chrome%3B113.0.5672.126%7CChromium%3B113.0.5672.126%7CNot-A.Brand%3B24.0.0.0&amp;uamb=0&amp;uap=macOS&amp;uapv=13.3.1&amp;uaw=0&amp;data=event%3Dview_item_list%3Bgoogle_business_vertical%3Dretail%3Bid%3D78185%2C78179%2C410515%2C87111%2C74607%2C5296%2C420225%2C411709%2C4074%2C4041%2C3711%2C366989%2C365956%2C365770%2C358823%2C358822%2C358808%2C358801%2C357584%2C357583%2C357582%2C357576%2C357495%2C357448%2C357447%2C357446%2C357445%2C357444%2C357443%2C357442%2C332750%2C332704%2C332628%2C329618%2C329616%2C329607%2C329561%2C329552%2C329535%2C329520&amp;rfmt=3&amp;fmt=4"
		// 		></script>
		// 		<script
		// 			async=""
		// 			type="text/javascript"
		// 			src="https://cdn.livechatinc.com/tracking.js"
		// 		></script>
		// 		<script src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/delvify-widget.min.js"></script>
		// 		<script src="https://smart-tag.s3.ap-southeast-1.amazonaws.com/sk-jewellery-script.js"></script>

		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiGyp8kv8JHgFVrLPTed3FBGPaTSQ.ttf")
		// 					format("opentype");
		// 				font-weight: 100;
		// 				font-style: normal;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiAyp8kv8JHgFVrJJLmE3tFOvODSVFF.ttf")
		// 					format("opentype");
		// 				font-weight: 100;
		// 				font-style: italic;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLFj_V1tvFP-KUEg.ttf")
		// 					format("opentype");
		// 				font-weight: 200;
		// 				font-style: normal;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiDyp8kv8JHgFVrJJLmv1plEN2PQEhcqw.ttf")
		// 					format("opentype");
		// 				font-weight: 200;
		// 				font-style: italic;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf")
		// 					format("opentype");
		// 				font-weight: 300;
		// 				font-style: normal;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiDyp8kv8JHgFVrJJLm21llEN2PQEhcqw.ttf")
		// 					format("opentype");
		// 				font-weight: 300;
		// 				font-style: italic;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf")
		// 					format("opentype");
		// 				font-weight: 400;
		// 				font-style: normal;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiGyp8kv8JHgFVrJJLed3FBGPaTSQ.ttf")
		// 					format("opentype");
		// 				font-weight: 400;
		// 				font-style: italic;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf")
		// 					format("opentype");
		// 				font-weight: 500;
		// 				font-style: normal;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiDyp8kv8JHgFVrJJLmg1hlEN2PQEhcqw.ttf")
		// 					format("opentype");
		// 				font-weight: 500;
		// 				font-style: italic;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf")
		// 					format("opentype");
		// 				font-weight: 600;
		// 				font-style: normal;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiDyp8kv8JHgFVrJJLmr19lEN2PQEhcqw.ttf")
		// 					format("opentype");
		// 				font-weight: 600;
		// 				font-style: italic;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf")
		// 					format("opentype");
		// 				font-weight: 700;
		// 				font-style: normal;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiDyp8kv8JHgFVrJJLmy15lEN2PQEhcqw.ttf")
		// 					format("opentype");
		// 				font-weight: 700;
		// 				font-style: italic;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLDD4V1tvFP-KUEg.ttf")
		// 					format("opentype");
		// 				font-weight: 800;
		// 				font-style: normal;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiDyp8kv8JHgFVrJJLm111lEN2PQEhcqw.ttf")
		// 					format("opentype");
		// 				font-weight: 800;
		// 				font-style: italic;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLBT5V1tvFP-KUEg.ttf")
		// 					format("opentype");
		// 				font-weight: 900;
		// 				font-style: normal;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style>
		// 			@font-face {
		// 				font-family: "Poppins";
		// 				src: url("https://fonts.gstatic.com/s/poppins/v19/pxiDyp8kv8JHgFVrJJLm81xlEN2PQEhcqw.ttf")
		// 					format("opentype");
		// 				font-weight: 900;
		// 				font-style: italic;
		// 				font-display: swap;
		// 			}
		// 		</style>
		// 		<style id="dv-overwrite-style">
		// 			.dv-dialog,
		// 			.dv-dialog * {
		// 				font-family: Poppins !important;
		// 			}
		// 		</style>
		// 		<script
		// 			type="text/javascript"
		// 			id="delvify-cropperjs"
		// 			src="https://smart-tag.s3.ap-southeast-1.amazonaws.com/widget-assets/cropper.min.js"
		// 		></script>
		// 		<link
		// 			rel="stylesheet"
		// 			id="delvify-croppercss"
		// 			href="https://smart-tag.s3.ap-southeast-1.amazonaws.com/widget-assets/cropper.min.css"
		// 		/>
		// 	</head>

		// 	<body
		// 		class="
		// 			search search-results
		// 			woocommerce-page
		// 			theme-SK6.5.0
		// 			woocommerce-js
		// 			mega-menu-main-navigation-1
		// 			tinvwl-theme-style
		// 			hfeed
		// 			Mac-iOS
		// 			noSupportsTouch
		// 		"
		// 		data-user=""
		// 	>
		// 		<div class="emm_minicart_wrapper navbar-icons">
		// 			<ul class="_submenu wc-minicart" style="">
		// 				<div class="widget_shopping_cart_content">
		// 					<div class="oaps-gwp-overlay-loading">
		// 						<div class="oaps-spinner oaps-spinner--volumn"></div>
		// 					</div>
		// 					<div class="minicart-close x-btn"></div>
		// 					<div class="minicart-head">
		// 						<div class="bar"><h4 class="title">Your cart (0 items)</h4></div>
		// 					</div>
		// 					<div class="minicart-main">
		// 						<div class="mini-cart-empty">No products in the cart.</div>
		// 					</div>
		// 					<div class="minicart-bottom">
		// 						<div class="minicart-bottom__item old-cart-savings">
		// 							<div class="minicart-bottom__item-start">Savings:</div>
		// 							<div class="minicart-bottom__item-middle"></div>
		// 							<div class="minicart-bottom__item-end">
		// 								<span class="woocommerce-Price-amount amount"
		// 									><bdi
		// 										><span class="woocommerce-Price-currencySymbol">$</span
		// 										>0</bdi
		// 									></span
		// 								>
		// 							</div>
		// 						</div>
		// 						<div class="minicart-bottom__item">
		// 							<div class="minicart-bottom__item-start">Total:</div>
		// 							<div class="minicart-bottom__item-middle"></div>
		// 							<div class="minicart-bottom__item-end">
		// 								<span class="woocommerce-Price-amount amount"
		// 									><bdi
		// 										><span class="woocommerce-Price-currencySymbol">$</span
		// 										>0</bdi
		// 									></span
		// 								>
		// 							</div>
		// 						</div>
		// 						<p class="woocommerce-mini-cart__buttons buttons button-continue">
		// 							<a
		// 								class="button continue-shopping"
		// 								href="https://www.skjewellery.com/shop/"
		// 								>Continue Shopping</a
		// 							>
		// 						</p>
		// 						<div class="we-accept">
		// 							<p>We Accept</p>
		// 							<ul>
		// 								<li>
		// 									<img
		// 										src="https://www.skjewellery.com/wp-content/uploads/2022/02/mastercard_logo-e1643179414332.jpg.webp"
		// 										alt="Mastercard logo"
		// 									/>
		// 								</li>
		// 								<li>
		// 									<img
		// 										src="https://www.skjewellery.com/wp-content/uploads/2022/02/visa_logo-e1643179400798.jpg.webp"
		// 										alt="Visa logo"
		// 									/>
		// 								</li>
		// 								<li>
		// 									<img
		// 										src="https://www.skjewellery.com/wp-content/uploads/2022/02/grab-e1643179390220.jpg.webp"
		// 										alt="Grab logo"
		// 									/>
		// 								</li>
		// 								<li>
		// 									<img
		// 										src="https://www.skjewellery.com/wp-content/uploads/2022/03/atome-logo-cart-e1647505432590.jpg.webp"
		// 										alt="Atome logo"
		// 									/>
		// 								</li>
		// 								<li>
		// 									<img
		// 										src="https://www.skjewellery.com/wp-content/uploads/2023/05/04-shopback-1.webp"
		// 										alt=""
		// 									/>
		// 								</li>
		// 							</ul>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</ul>
		// 		</div>
		// 		<!-- SEO Scripts body  -->
		// 		<!-- End SEO SCripts body -->
		// 		<style>
		// 			.announcement-bar.is-loading {
		// 				text-align: center;
		// 				padding-top: 12px;
		// 				padding-bottom: 12px;
		// 			}
		// 			.announcement-bar.is-loading a {
		// 				color: #fff;
		// 				font-size: 13px;
		// 			}
		// 			.header-nav__wrapper.is-loading .header-search form {
		// 				display: inline-block;
		// 			}
		// 			.header-nav__wrapper .delvify-camera {
		// 				z-index: 998;
		// 				position: absolute;
		// 				display: inline-block;
		// 				top: 9px;
		// 				width: 24px;
		// 				height: 24px;
		// 				vertical-align: middle;
		// 				padding: 0px;
		// 				line-height: 0px;
		// 				cursor: pointer;
		// 				right: 10px;
		// 			}
		// 			.alt-header-top.is-loading .navbar-icons-wishlist,
		// 			.alt-header-top.is-loading .navbar-icons-account,
		// 			.alt-header-top.is-loading .navbar-icons-cart {
		// 				background: none;
		// 			}
		// 			.alt-header-top.is-loading .navbar-icons-wishlist img,
		// 			.alt-header-top.is-loading .navbar-icons-account img,
		// 			.alt-header-top.is-loading .navbar-icons-cart img {
		// 				width: auto;
		// 				height: 20px;
		// 			}
		// 			.alt-header-top .arrow-header {
		// 				opacity: 0;
		// 				visibility: hidden;
		// 				width: 0;
		// 			}
		// 			.header-search #delvify-container {
		// 				display: none !important;
		// 			}
		// 		</style>
		// 		<div id="page" class="site">
		// 			<a class="skip-link screen-reader-text" href="#content"
		// 				>Skip to content</a
		// 			>

		// 			<header id="masthead" class="site-header new-header">
		// 				<div class="container-fluid announcement-bar">
		// 					<div class="row">
		// 						<div
		// 							class="
		// 								col-10
		// 								offset-1
		// 								text-center
		// 								announcement-slider
		// 								glide-slider glide--ltr glide--carousel glide--swipeable
		// 							"
		// 						>
		// 							<div class="glide__track" data-glide-el="track">
		// 								<div
		// 									class="glide__slides"
		// 									style="
		// 										transition: transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1)
		// 											0s;
		// 										width: 50px;
		// 										transform: translate3d(-10px, 0px, 0px);
		// 									"
		// 								>
		// 									<a
		// 										class="
		// 											pr-4
		// 											px-md-0
		// 											mb-10px
		// 											mt-10px
		// 											glide__slide
		// 											announcement-text
		// 											agp-light
		// 											fs-13
		// 											glide__slide--clone
		// 										"
		// 										href=""
		// 										style="width: 0px; margin-right: 5px"
		// 									>
		// 										Store pickup is available at checkout page! </a
		// 									><a
		// 										class="
		// 											pr-4
		// 											px-md-0
		// 											mb-10px
		// 											mt-10px
		// 											glide__slide
		// 											announcement-text
		// 											agp-light
		// 											fs-13
		// 											glide__slide--active
		// 										"
		// 										href="https://www.skjewellery.com/gold-price/"
		// 										style="width: 0px; margin-left: 5px; margin-right: 5px"
		// 									>
		// 										24K/999 at $108 Per Gm | 22K/916 at $102 Per Gm
		// 									</a>
		// 									<a
		// 										class="
		// 											pr-4
		// 											px-md-0
		// 											mb-10px
		// 											mt-10px
		// 											glide__slide
		// 											announcement-text
		// 											agp-light
		// 											fs-13
		// 										"
		// 										href=""
		// 										style="width: 0px; margin-left: 5px; margin-right: 5px"
		// 									>
		// 										We just onboarded Shopback Paylater! Purchase now and redeem
		// 										$10 your first Paylater order!
		// 									</a>
		// 									<a
		// 										class="
		// 											pr-4
		// 											px-md-0
		// 											mb-10px
		// 											mt-10px
		// 											glide__slide
		// 											announcement-text
		// 											agp-light
		// 											fs-13
		// 										"
		// 										href="https://www.skjewellery.com/my-account/"
		// 										style="width: 0px; margin-left: 5px; margin-right: 5px"
		// 									>
		// 										Enjoy 5% off nett-price, or 15% off workmanship fees when
		// 										you signup for an account!
		// 									</a>
		// 									<a
		// 										class="
		// 											pr-4
		// 											px-md-0
		// 											mb-10px
		// 											mt-10px
		// 											glide__slide
		// 											announcement-text
		// 											agp-light
		// 											fs-13
		// 										"
		// 										href=""
		// 										style="width: 0px; margin-left: 5px; margin-right: 5px"
		// 									>
		// 										Store pickup is available at checkout page!
		// 									</a>
		// 									<a
		// 										class="
		// 											pr-4
		// 											px-md-0
		// 											mb-10px
		// 											mt-10px
		// 											glide__slide
		// 											announcement-text
		// 											agp-light
		// 											fs-13
		// 											glide__slide--clone
		// 										"
		// 										href="https://www.skjewellery.com/gold-price/"
		// 										style="width: 0px; margin-left: 5px"
		// 									>
		// 										24K/999 at $108 Per Gm | 22K/916 at $102 Per Gm
		// 									</a>
		// 								</div>
		// 							</div>
		// 							<div
		// 								class="
		// 									glide__arrows
		// 									skinny__arrows
		// 									d-none d-md-flex
		// 									justify-content-between
		// 								"
		// 								data-glide-el="controls"
		// 							>
		// 								<button
		// 									class="glide__arrow skinny__arrow glide__arrow--left"
		// 									aria-label="glide__arrow--left"
		// 									data-glide-dir="<"
		// 								>
		// 									<div class="skinny__arrow-top"></div>
		// 									<div class="skinny__arrow-bottom"></div>
		// 								</button>

		// 								<button
		// 									class="glide__arrow skinny__arrow glide__arrow--right"
		// 									aria-label="glide__arrow--right"
		// 									data-glide-dir=">"
		// 								>
		// 									<div class="skinny__arrow-top"></div>
		// 									<div class="skinny__arrow-bottom"></div>
		// 								</button>
		// 							</div>
		// 						</div>
		// 					</div>

		// 					<div class="close">+</div>
		// 				</div>

		// 				<div class="d-none d-lg-block alt-header-top">
		// 					<div class="container-fluid">
		// 						<div class="row pt-15px pb-15px search-parent">
		// 							<div class="col-12">
		// 								<div class="row no-gutters justify-content-between">
		// 									<div class="col-4 d-flex align-items-center">
		// 										<div class="toggle-button" data-toggle="menu">
		// 											<div class="hbg-btn">
		// 												<span></span> <span></span> <span></span>
		// 											</div>
		// 										</div>
		// 										<div class="country-selector">
		// 											<span class="location-icon location-icon--en"></span>
		// 											<span class="agp-light fs-12">SG</span>
		// 											<span class="skinny__arrow">
		// 												<span class="skinny__arrow-top"></span>
		// 												<span class="skinny__arrow-bottom"></span>
		// 											</span>
		// 											<ul class="agp-light fs-12">
		// 												<li><a href="https://www.skjewellery.com/">SG</a></li>
		// 												<li><a href="https://www.skjewellery.com.my">MY</a></li>
		// 											</ul>
		// 										</div>
		// 										<a
		// 											class="store-location"
		// 											href="https://www.skjewellery.com/locate-us"
		// 										>
		// 											<span class="icon-widget">
		// 												<img
		// 													src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/images/pin.webp"
		// 													alt="Pin Icon"
		// 												/>
		// 											</span>
		// 											<span class="text-widget">STORE LOCATOR</span>
		// 										</a>
		// 										<a
		// 											class="cons-url"
		// 											href="https://www.skjewellery.com/consultation"
		// 										>
		// 											<span class="icon-widget">
		// 												<img
		// 													src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/images/notes.webp"
		// 													width="19"
		// 													height="20"
		// 													alt="Book Apointment Icon"
		// 												/>
		// 											</span>
		// 											<span class="text-widget">Book Appointment</span>
		// 										</a>
		// 									</div>
		// 									<div class="col-4 top-header-center">
		// 										<a
		// 											href="https://www.skjewellery.com"
		// 											class="custom-logo-link"
		// 											rel="home"
		// 										>
		// 											<img
		// 												width="110"
		// 												height="85"
		// 												class="custom-logo"
		// 												src="https://www.skjewellery.com/wp-content/uploads/2022/02/SKJ_logo-2.png.webp"
		// 												alt="SK Jewellery Logo"
		// 											/>
		// 										</a>
		// 									</div>
		// 									<div
		// 										class="col-4 d-flex align-items-center justify-content-end"
		// 									>
		// 										<i class="navbar-icons navbar-icon-search"></i>
		// 										<div class="navbar-icons navbar-icons-wishlist">
		// 											<a href="https://www.skjewellery.com/wishlist"> </a>
		// 										</div>
		// 										<div class="navbar-icons navbar-icons-account">
		// 											<a href="https://www.skjewellery.com/my-account"> </a>
		// 										</div>
		// 										<div class="navbar-icons navbar-icons-cart">
		// 											<a href="https://www.skjewellery.com/cart">
		// 												<span class="cart-indicator"></span>
		// 											</a>
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div class="nav-separator"></div>
		// 					<div class="container-fluid header-nav__wrapper">
		// 						<div class="header-nav">
		// 							<div class="col-1 p-0 header-nav__logo">
		// 								<a
		// 									href="https://www.skjewellery.com"
		// 									class="custom-logo-link"
		// 									rel="home"
		// 								>
		// 									<img
		// 										width="110"
		// 										height="85"
		// 										class="custom-logo"
		// 										src="https://www.skjewellery.com/wp-content/uploads/2022/02/SKJ_logo-2.png.webp"
		// 										alt="SK Jewellery Logo"
		// 									/>
		// 								</a>
		// 							</div>
		// 							<nav id="site-navigation" class="row main-navigation">
		// 								<div
		// 									id="mega-menu-wrap-main-navigation-1"
		// 									class="mega-menu-wrap"
		// 								>
		// 									<div class="mega-menu-toggle">
		// 										<div class="mega-toggle-blocks-left"></div>
		// 										<div class="mega-toggle-blocks-center"></div>
		// 										<div class="mega-toggle-blocks-right">
		// 											<div
		// 												class="
		// 													mega-toggle-block
		// 													mega-menu-toggle-animated-block
		// 													mega-toggle-block-0
		// 												"
		// 												id="mega-toggle-block-0"
		// 											>
		// 												<button
		// 													aria-label="Toggle Menu"
		// 													class="
		// 														mega-toggle-animated mega-toggle-animated-slider
		// 													"
		// 													type="button"
		// 													aria-expanded="false"
		// 												>
		// 													<span class="mega-toggle-animated-box">
		// 														<span class="mega-toggle-animated-inner"></span>
		// 													</span>
		// 												</button>
		// 											</div>
		// 										</div>
		// 									</div>
		// 									<ul
		// 										id="mega-menu-main-navigation-1"
		// 										class="mega-menu max-mega-menu mega-menu-horizontal"
		// 										data-event="hover"
		// 										data-effect="disabled"
		// 										data-effect-speed="200"
		// 										data-effect-mobile="disabled"
		// 										data-effect-speed-mobile="0"
		// 										data-mobile-force-width="false"
		// 										data-second-click="go"
		// 										data-document-click="collapse"
		// 										data-vertical-behaviour="standard"
		// 										data-breakpoint="768"
		// 										data-unbind="true"
		// 										data-mobile-state="collapse_all"
		// 										data-hover-intent-timeout="300"
		// 										data-hover-intent-interval="100"
		// 									>
		// 										<li
		// 											class="
		// 												mega-menu-item
		// 												mega-menu-item-type-custom
		// 												mega-menu-item-object-custom
		// 												mega-align-bottom-left
		// 												mega-menu-flyout
		// 												mega-menu-item-417781
		// 											"
		// 											id="mega-menu-item-417781"
		// 										>
		// 											<a
		// 												class="mega-menu-link"
		// 												href="/product-category/new-in/"
		// 												tabindex="0"
		// 												>New Arrivals</a
		// 											>
		// 										</li>
		// 										<li
		// 											class="
		// 												mega-full-width
		// 												mega-menus-jewellery
		// 												mega-alt-has-submenu-toggle
		// 												mega-alt-has-border
		// 												mega-menu-item
		// 												mega-menu-item-type-custom
		// 												mega-menu-item-object-custom
		// 												mega-menu-item-has-children
		// 												mega-menu-megamenu
		// 												mega-align-bottom-left
		// 												mega-menu-megamenu
		// 												mega-menu-item-417783
		// 												full-width
		// 												menus-jewellery
		// 												alt-has-submenu-toggle alt-has-border
		// 											"
		// 											id="mega-menu-item-417783"
		// 										>
		// 											<a
		// 												class="mega-menu-link no-hover"
		// 												href="#"
		// 												aria-haspopup="true"
		// 												aria-expanded="false"
		// 												tabindex="0"
		// 												>Jewellery<span
		// 													class="mega-indicator"
		// 													data-has-click-event="true"
		// 												></span
		// 											></a>
		// 											<ul class="mega-sub-menu">
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-grid-layout
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417784
		// 														no-event
		// 														grid-layout
		// 													"
		// 													id="mega-menu-item-417784"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product-category/rings/"
		// 														>Rings<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span></a
		// 													><a
		// 														class="menu-has-image"
		// 														href="/product-category/rings/"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Rings.webp"
		// 													/></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417785
		// 															"
		// 															id="mega-menu-item-417785"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/diamond-rings/"
		// 																>Diamond Rings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/diamond-rings/"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417786
		// 															"
		// 															id="mega-menu-item-417786"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/gold-rings/"
		// 																>Gold Rings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/gold-rings/"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-menu-item-417787
		// 															"
		// 															id="mega-menu-item-417787"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/everyday-rings"
		// 																>Everyday Rings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/everyday-rings"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Everyday.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-mobile-hide-border
		// 																mega-menu-item
		// 																mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-menu-item-417788
		// 																mobile-hide-border
		// 															"
		// 															id="mega-menu-item-417788"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/gemstone-rings"
		// 																>Gemstone Rings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/gemstone-rings"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstone.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-has-description mega-menu-item-531802
		// 															"
		// 															id="mega-menu-item-531802"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/eternity-rings"
		// 																><span class="mega-description-group"
		// 																	><span class="mega-menu-title"
		// 																		>Eternity Rings</span
		// 																	><span class="mega-menu-description"
		// 																		>Symbolize eternal love and commitment with
		// 																		our exquisite collection of eternity rings.
		// 																		Crafted with precision and adorned with
		// 																		shimmering gemstones or diamonds, our
		// 																		eternity rings are a timeless symbol of
		// 																		everlasting affection. Each ring features a
		// 																		continuous band of stones that wrap around
		// 																		the entire circumference, representing an
		// 																		unending bond.</span
		// 																	></span
		// 																></a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-has-description mega-menu-item-531803
		// 															"
		// 															id="mega-menu-item-531803"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/stacking-rings"
		// 																><span class="mega-description-group"
		// 																	><span class="mega-menu-title"
		// 																		>Stacking Rings</span
		// 																	><span class="mega-menu-description"
		// 																		>Discover the art of stacking rings and
		// 																		express your unique style. Explore our
		// 																		exquisite collection of versatile rings
		// 																		designed to be stacked, mixed, and matched.
		// 																		Create a personalized look that reflects
		// 																		your personality and showcases your
		// 																		individuality.</span
		// 																	></span
		// 																></a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-primary-link
		// 																mega-rings-online-exclusives
		// 																mega-only-desktop
		// 																mega-mobile-hide-border
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-hide-on-mobile
		// 																mega-hide-sub-menu-on-mobile
		// 																mega-menu-item-419040
		// 																primary-link
		// 																rings-online-exclusives
		// 																only-desktop
		// 																mobile-hide-border
		// 															"
		// 															id="mega-menu-item-419040"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/best-sellers"
		// 																>Best Sellers</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/collection/best-sellers"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp"
		// 															/></a>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-only-desktop
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417790
		// 														no-event
		// 														only-desktop
		// 													"
		// 													id="mega-menu-item-417790"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product-category/chains"
		// 														>Chains<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span></a
		// 													><a
		// 														class="menu-has-image"
		// 														href="/product-category/chains"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Chain.webp"
		// 													/></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417791
		// 															"
		// 															id="mega-menu-item-417791"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/chains"
		// 																>Gold Chains</a
		// 															>
		// 														</li>
		// 													</ul>
		// 													<div class="wrapper-second-menu">
		// 														<a
		// 															class="mega-menu-link"
		// 															href="/product-category/pendants-necklaces"
		// 															>Pendants &amp; Necklaces<span
		// 																class="mega-indicator"
		// 																data-has-click-event="true"
		// 															></span></a
		// 														><a
		// 															class="menu-has-image"
		// 															href="/product-category/pendants-necklaces"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2023/03/Pendants-Necklaces-copy.webp"
		// 														/></a>
		// 														<ul class="mega-sub-menu">
		// 															<li
		// 																class="
		// 																	mega-menu-item
		// 																	mega-menu-item-type-custom
		// 																	mega-menu-item-object-custom
		// 																	mega-menu-item-417794
		// 																"
		// 																id="mega-menu-item-417794"
		// 															>
		// 																<a
		// 																	class="mega-menu-link"
		// 																	href="/product-category/diamond-pendants"
		// 																	>Diamond Pendants</a
		// 																><a
		// 																	class="menu-has-image"
		// 																	href="/product-category/diamond-pendants"
		// 																	><img
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamonds.webp"
		// 																/></a>
		// 															</li>
		// 															<li
		// 																class="
		// 																	mega-menu-item
		// 																	mega-menu-item-type-custom
		// 																	mega-menu-item-object-custom
		// 																	mega-menu-item-417795
		// 																"
		// 																id="mega-menu-item-417795"
		// 															>
		// 																<a
		// 																	class="mega-menu-link"
		// 																	href="/product-category/gold-pendants"
		// 																	>Gold Pendants</a
		// 																><a
		// 																	class="menu-has-image"
		// 																	href="/product-category/gold-pendants"
		// 																	><img
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Pendant.webp"
		// 																/></a>
		// 															</li>
		// 															<li
		// 																class="
		// 																	mega-menu-item
		// 																	mega-menu-item-type-custom
		// 																	mega-menu-item-object-custom
		// 																	mega-menu-item-417796
		// 																"
		// 																id="mega-menu-item-417796"
		// 															>
		// 																<a
		// 																	class="mega-menu-link"
		// 																	href="/product-category/silver-pendants"
		// 																	>Silver Pendants</a
		// 																><a
		// 																	class="menu-has-image"
		// 																	href="/product-category/silver-pendants"
		// 																	><img
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/03/Silver.webp"
		// 																/></a>
		// 															</li>
		// 															<li
		// 																class="
		// 																	mega-menu-item mega-menu-item-type-taxonomy
		// 																	mega-menu-item-object-product_cat
		// 																	mega-has-description mega-menu-item-531801
		// 																"
		// 																id="mega-menu-item-531801"
		// 															>
		// 																<a
		// 																	class="mega-menu-link"
		// 																	href="https://www.skjewellery.com/product-category/pearl-pendants"
		// 																	><span class="mega-description-group"
		// 																		><span class="mega-menu-title"
		// 																			>Pearl Pendants</span
		// 																		><span class="mega-menu-description"
		// 																			>Elevate your style with our exquisite
		// 																			collection of pearl pendants. Discover the
		// 																			timeless beauty of pearls and their
		// 																			enchanting luster. Our meticulously
		// 																			crafted pendants feature lustrous pearls
		// 																			in various shapes and sizes, complemented
		// 																			by elegant designs.</span
		// 																		></span
		// 																	></a
		// 																>
		// 															</li>
		// 														</ul>
		// 													</div>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-only-mobile
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417792
		// 														only-mobile
		// 													"
		// 													id="mega-menu-item-417792"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product-category/chains"
		// 														>Chains</a
		// 													><a
		// 														class="menu-has-image"
		// 														href="/product-category/chains"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Chain.webp"
		// 													/></a>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-sub_menu_second
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417793
		// 														no-event
		// 														sub_menu_second
		// 													"
		// 													id="mega-menu-item-417793"
		// 													style="display: none"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product-category/pendants-necklaces"
		// 														>Pendants &amp; Necklaces<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span></a
		// 													><a
		// 														class="menu-has-image"
		// 														href="/product-category/pendants-necklaces"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Pendants-Necklaces-copy.webp"
		// 													/></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417794
		// 															"
		// 															id="mega-menu-item-417794"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/diamond-pendants"
		// 																>Diamond Pendants</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/diamond-pendants"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamonds.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417795
		// 															"
		// 															id="mega-menu-item-417795"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/gold-pendants"
		// 																>Gold Pendants</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/gold-pendants"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Pendant.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417796
		// 															"
		// 															id="mega-menu-item-417796"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/silver-pendants"
		// 																>Silver Pendants</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/silver-pendants"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Silver.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-has-description mega-menu-item-531801
		// 															"
		// 															id="mega-menu-item-531801"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/pearl-pendants"
		// 																><span class="mega-description-group"
		// 																	><span class="mega-menu-title"
		// 																		>Pearl Pendants</span
		// 																	><span class="mega-menu-description"
		// 																		>Elevate your style with our exquisite
		// 																		collection of pearl pendants. Discover the
		// 																		timeless beauty of pearls and their
		// 																		enchanting luster. Our meticulously crafted
		// 																		pendants feature lustrous pearls in various
		// 																		shapes and sizes, complemented by elegant
		// 																		designs.</span
		// 																	></span
		// 																></a
		// 															>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-menu-item
		// 														mega-menu-item-type-taxonomy
		// 														mega-menu-item-object-product_cat
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417797
		// 														no-event
		// 													"
		// 													id="mega-menu-item-417797"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="https://www.skjewellery.com/product-category/bracelets"
		// 														>Bracelets<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span></a
		// 													><a
		// 														class="menu-has-image"
		// 														href="https://www.skjewellery.com/product-category/bracelets"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Bracelets.webp"
		// 													/></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-menu-item-417798
		// 															"
		// 															id="mega-menu-item-417798"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/gold-bracelets"
		// 																>Gold Bracelets</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/gold-bracelets"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-1.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-menu-item-417799
		// 															"
		// 															id="mega-menu-item-417799"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/diamond-bracelets"
		// 																>Diamond Bracelets</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/diamond-bracelets"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-1.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-has-description mega-menu-item-417800
		// 															"
		// 															id="mega-menu-item-417800"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/everyday-bracelets"
		// 																><span class="mega-description-group"
		// 																	><span class="mega-menu-title"
		// 																		>Everyday Bracelets</span
		// 																	><span class="mega-menu-description"
		// 																		>Live your everyday with style! Discover
		// 																		dainty and unique designs perfect for your
		// 																		effortless, everyday styling.</span
		// 																	></span
		// 																></a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/everyday-bracelets"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Everyday-1.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-menu-item-417801
		// 															"
		// 															id="mega-menu-item-417801"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/pixiu-bracelets"
		// 																>Pixiu Bracelets</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/pixiu-bracelets"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Pixiu.webp"
		// 															/></a>
		// 														</li>
		// 													</ul>
		// 													<div class="wrapper-second-menu">
		// 														<a
		// 															class="mega-menu-link"
		// 															href="/product-category/bangles"
		// 															>Bangles<span
		// 																class="mega-indicator"
		// 																data-has-click-event="true"
		// 															></span></a
		// 														><a
		// 															class="menu-has-image"
		// 															href="/product-category/bangles"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2023/03/Bangles.webp"
		// 														/></a>
		// 														<ul class="mega-sub-menu">
		// 															<li
		// 																class="
		// 																	mega-menu-item mega-menu-item-type-taxonomy
		// 																	mega-menu-item-object-product_cat
		// 																	mega-menu-item-417803
		// 																"
		// 																id="mega-menu-item-417803"
		// 															>
		// 																<a
		// 																	class="mega-menu-link"
		// 																	href="https://www.skjewellery.com/product-category/gold-bangles"
		// 																	>Gold Bangles</a
		// 																><a
		// 																	class="menu-has-image"
		// 																	href="https://www.skjewellery.com/product-category/gold-bangles"
		// 																	><img
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bangles.webp"
		// 																/></a>
		// 															</li>
		// 															<li
		// 																class="
		// 																	mega-menu-item mega-menu-item-type-taxonomy
		// 																	mega-menu-item-object-product_cat
		// 																	mega-menu-item-417804
		// 																"
		// 																id="mega-menu-item-417804"
		// 															>
		// 																<a
		// 																	class="mega-menu-link"
		// 																	href="https://www.skjewellery.com/product-category/diamond-bangles"
		// 																	>Diamond Bangles</a
		// 																><a
		// 																	class="menu-has-image"
		// 																	href="https://www.skjewellery.com/product-category/diamond-bangles"
		// 																	><img
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-Bangles.webp"
		// 																/></a>
		// 															</li>
		// 														</ul>
		// 													</div>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-sub_menu_second
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417802
		// 														sub_menu_second
		// 													"
		// 													id="mega-menu-item-417802"
		// 													style="display: none"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product-category/bangles"
		// 														>Bangles<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span></a
		// 													><a
		// 														class="menu-has-image"
		// 														href="/product-category/bangles"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Bangles.webp"
		// 													/></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-menu-item-417803
		// 															"
		// 															id="mega-menu-item-417803"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/gold-bangles"
		// 																>Gold Bangles</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/gold-bangles"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bangles.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-menu-item-417804
		// 															"
		// 															id="mega-menu-item-417804"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/diamond-bangles"
		// 																>Diamond Bangles</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/diamond-bangles"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-Bangles.webp"
		// 															/></a>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-Earrings
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-clear
		// 														mega-menu-item-417805
		// 														no-event
		// 														Earrings
		// 													"
		// 													id="mega-menu-item-417805"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product-category/earrings"
		// 														>Earrings<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span></a
		// 													><a
		// 														class="menu-has-image"
		// 														href="/product-category/earrings"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Earrings.webp"
		// 													/></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417806
		// 															"
		// 															id="mega-menu-item-417806"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/diamond-earrings"
		// 																>Diamond Earrings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/diamond-earrings"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-Earrings.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417807
		// 															"
		// 															id="mega-menu-item-417807"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/gold-earrings"
		// 																>Gold Earrings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/gold-earrings"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Earrings.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-has-description mega-menu-item-417808
		// 															"
		// 															id="mega-menu-item-417808"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/everyday-earrings"
		// 																><span class="mega-description-group"
		// 																	><span class="mega-menu-title"
		// 																		>Everyday Earrings</span
		// 																	><span class="mega-menu-description"
		// 																		>Earrings kept simple and stylish, perfect
		// 																		for your everyday accessorizing.</span
		// 																	></span
		// 																></a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/everyday-earrings"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Everyday-Earrings.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-has-description mega-menu-item-531800
		// 															"
		// 															id="mega-menu-item-531800"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/pearl-earrings"
		// 																><span class="mega-description-group"
		// 																	><span class="mega-menu-title"
		// 																		>Pearl Earrings</span
		// 																	><span class="mega-menu-description"
		// 																		>Our exquisite collection offers a range of
		// 																		stunning designs, each showcasing the
		// 																		natural elegance of pearls. From classic
		// 																		studs to dangle earrings, our pearl pieces
		// 																		are meticulously crafted using high-quality
		// 																		pearls and fine materials.</span
		// 																	></span
		// 																></a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-has-description mega-menu-item-531799
		// 															"
		// 															id="mega-menu-item-531799"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/hoop-earrings"
		// 																><span class="mega-description-group"
		// 																	><span class="mega-menu-title"
		// 																		>Hoop Earrings</span
		// 																	><span class="mega-menu-description"
		// 																		>Explore our diverse range of sizes,
		// 																		materials, and designs, and let our hoop
		// 																		earrings accentuate your natural beauty with
		// 																		their graceful charm. Shop now and embrace
		// 																		the allure of hoop earrings..</span
		// 																	></span
		// 																></a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-has-description mega-menu-item-531798
		// 															"
		// 															id="mega-menu-item-531798"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/dangle-earrings"
		// 																><span class="mega-description-group"
		// 																	><span class="mega-menu-title"
		// 																		>Dangle Earrings</span
		// 																	><span class="mega-menu-description"
		// 																		>Crafted with precision and attention to
		// 																		detail, our dangle earrings showcase an
		// 																		enchanting interplay of movement and grace.
		// 																		Explore our selection of dangling gemstones,
		// 																		pearls, and intricate metalwork, each piece
		// 																		designed to make a statement.</span
		// 																	></span
		// 																></a
		// 															>
		// 														</li>
		// 													</ul>
		// 													<div class="wrapper-second-menu">
		// 														<a
		// 															class="mega-menu-link"
		// 															href="/product-category/anklets"
		// 															>Anklets<span
		// 																class="mega-indicator"
		// 																data-has-click-event="true"
		// 															></span
		// 														></a>
		// 														<ul class="mega-sub-menu">
		// 															<li
		// 																class="
		// 																	mega-menu-item mega-menu-item-type-taxonomy
		// 																	mega-menu-item-object-product_cat
		// 																	mega-has-description mega-menu-item-531797
		// 																"
		// 																id="mega-menu-item-531797"
		// 															>
		// 																<a
		// 																	class="mega-menu-link"
		// 																	href="https://www.skjewellery.com/product-category/gold-anklets"
		// 																	><span class="mega-description-group"
		// 																		><span class="mega-menu-title"
		// 																			>Gold Anklets</span
		// 																		><span class="mega-menu-description"
		// 																			>Our stunning collection features a
		// 																			variety of designs, meticulously crafted
		// 																			with high-quality 916 gold. From delicate
		// 																			and minimalistic chains to intricate and
		// 																			ornate patterns, our gold anklets are a
		// 																			symbol of elegance and luxury.</span
		// 																		></span
		// 																	></a
		// 																>
		// 															</li>
		// 															<li
		// 																class="
		// 																	mega-menu-item mega-menu-item-type-taxonomy
		// 																	mega-menu-item-object-product_cat
		// 																	mega-has-description mega-menu-item-531796
		// 																"
		// 																id="mega-menu-item-531796"
		// 															>
		// 																<a
		// 																	class="mega-menu-link"
		// 																	href="https://www.skjewellery.com/product-category/baby-anklets"
		// 																	><span class="mega-description-group"
		// 																		><span class="mega-menu-title"
		// 																			>Baby Anklets</span
		// 																		><span class="mega-menu-description"
		// 																			>Introducing our adorable collection of
		// 																			baby anklets, designed to add a touch of
		// 																			sweetness to your little one’s ensemble.
		// 																			Each anklet features charming charms or
		// 																			delicate beads, creating a whimsical and
		// 																			delightful accessory for your baby’s tiny
		// 																			feet.</span
		// 																		></span
		// 																	></a
		// 																>
		// 															</li>
		// 														</ul>
		// 													</div>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-Anklets
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-426365
		// 														no-event
		// 														Anklets
		// 													"
		// 													id="mega-menu-item-426365"
		// 													style="display: none"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product-category/anklets"
		// 														>Anklets<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span
		// 													></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-has-description mega-menu-item-531797
		// 															"
		// 															id="mega-menu-item-531797"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/gold-anklets"
		// 																><span class="mega-description-group"
		// 																	><span class="mega-menu-title"
		// 																		>Gold Anklets</span
		// 																	><span class="mega-menu-description"
		// 																		>Our stunning collection features a variety
		// 																		of designs, meticulously crafted with
		// 																		high-quality 916 gold. From delicate and
		// 																		minimalistic chains to intricate and ornate
		// 																		patterns, our gold anklets are a symbol of
		// 																		elegance and luxury.</span
		// 																	></span
		// 																></a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_cat
		// 																mega-has-description mega-menu-item-531796
		// 															"
		// 															id="mega-menu-item-531796"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/baby-anklets"
		// 																><span class="mega-description-group"
		// 																	><span class="mega-menu-title"
		// 																		>Baby Anklets</span
		// 																	><span class="mega-menu-description"
		// 																		>Introducing our adorable collection of baby
		// 																		anklets, designed to add a touch of
		// 																		sweetness to your little one’s ensemble.
		// 																		Each anklet features charming charms or
		// 																		delicate beads, creating a whimsical and
		// 																		delightful accessory for your baby’s tiny
		// 																		feet.</span
		// 																	></span
		// 																></a
		// 															>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417809
		// 														no-event
		// 													"
		// 													id="mega-menu-item-417809"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product-category/charms"
		// 														>Charms<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span></a
		// 													><a
		// 														class="menu-has-image"
		// 														href="/product-category/charms"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Charms.webp"
		// 													/></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417810
		// 															"
		// 															id="mega-menu-item-417810"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/animals"
		// 																>Animals</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/animals"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Animals.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417811
		// 															"
		// 															id="mega-menu-item-417811"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/zodiac"
		// 																>Zodiac</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/zodiac"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Zodiac.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417812
		// 															"
		// 															id="mega-menu-item-417812"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/classic"
		// 																>Classic</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/classic"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Classic.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417813
		// 															"
		// 															id="mega-menu-item-417813"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/blessings"
		// 																>Blessings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/blessings"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Blessings.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-419533
		// 															"
		// 															id="mega-menu-item-419533"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/disney/"
		// 																>Disney</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/disney/"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/04/Mickey.webp"
		// 															/></a>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417814
		// 														no-event
		// 													"
		// 													id="mega-menu-item-417814"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product-category/gold-collectibles"
		// 														>Gold Bars &amp; Figurines<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span></a
		// 													><a
		// 														class="menu-has-image"
		// 														href="/product-category/gold-collectibles"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bars-Figurines.webp"
		// 													/></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417815
		// 															"
		// 															id="mega-menu-item-417815"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/classic-gold-bars"
		// 																>Classic Gold Bars</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/classic-gold-bars"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Classic-GB.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417816
		// 															"
		// 															id="mega-menu-item-417816"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/square-gold-bars"
		// 																>Square Gold Bars</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/square-gold-bars"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Square-GB.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417817
		// 															"
		// 															id="mega-menu-item-417817"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/figurines"
		// 																>Figurines</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/figurines"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Figurines.webp"
		// 															/></a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417818
		// 															"
		// 															id="mega-menu-item-417818"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/coins"
		// 																>Coins</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/coins"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Coins.webp"
		// 															/></a>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-mobile-link
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-531812
		// 														no-event
		// 														mobile-link
		// 													"
		// 													id="mega-menu-item-531812"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/collection/best-sellers"
		// 														>Best Sellers</a
		// 													><a
		// 														class="menu-has-image"
		// 														href="/collection/best-sellers"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp"
		// 													/></a>
		// 												</li>
		// 											</ul>
		// 										</li>
		// 										<li
		// 											class="
		// 												mega-full-width
		// 												mega-menu-collections
		// 												mega-menus-jewellery
		// 												mega-alt-has-submenu-toggle
		// 												mega-alt-has-border
		// 												mega-custom-mega-menu-1
		// 												mega-menu-item
		// 												mega-menu-item-type-custom
		// 												mega-menu-item-object-custom
		// 												mega-menu-item-has-children
		// 												mega-menu-megamenu
		// 												mega-align-bottom-left
		// 												mega-menu-megamenu
		// 												mega-menu-item-417820
		// 												full-width
		// 												menu-collections
		// 												menus-jewellery
		// 												alt-has-submenu-toggle alt-has-border
		// 												custom-mega-menu-1
		// 											"
		// 											id="mega-menu-item-417820"
		// 										>
		// 											<a
		// 												class="mega-menu-link no-hover"
		// 												href="#"
		// 												aria-haspopup="true"
		// 												aria-expanded="false"
		// 												tabindex="0"
		// 												>Collections<span
		// 													class="mega-indicator"
		// 													data-has-click-event="true"
		// 												></span
		// 											></a>
		// 											<ul class="mega-sub-menu">
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-2-of-10
		// 														mega-menu-item-417821
		// 														no-event
		// 													"
		// 													id="mega-menu-item-417821"
		// 												>
		// 													<a class="mega-menu-link"
		// 														>Everyday Collections<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span></a
		// 													><a class="menu-has-image" href=""
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/04/Everyday-Collections.webp"
		// 													/></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417827
		// 															"
		// 															id="mega-menu-item-417827"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/celestial-shine/"
		// 																>Sun, Star &amp; Moon</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417826
		// 															"
		// 															id="mega-menu-item-417826"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/lock-and-key/"
		// 																>Locks &amp; Keys</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417824
		// 															"
		// 															id="mega-menu-item-417824"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/cross-jewellery/"
		// 																>Cross</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417823
		// 															"
		// 															id="mega-menu-item-417823"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/nature-inspired/"
		// 																>Nature-Inspired</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-422645
		// 															"
		// 															id="mega-menu-item-422645"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/animals-pets/"
		// 																>Animals &amp; Pets</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-bottom-space
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417822
		// 																bottom-space
		// 															"
		// 															id="mega-menu-item-417822"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/shima-pearls/"
		// 																>Shima Pearls</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-424206
		// 															"
		// 															id="mega-menu-item-424206"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/collection/starlett-diamonds/"
		// 																>Starlett Lab Diamonds</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-424207
		// 															"
		// 															id="mega-menu-item-424207"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/collection/skarlet-diamonds/"
		// 																>Skarlet Mined Diamonds</a
		// 															>
		// 														</li>
		// 													</ul>
		// 													<div class="wrapper-second-menu">
		// 														<a
		// 															class="mega-menu-link"
		// 															href="/product-category/online-exclusive/"
		// 															>Online Exclusives</a
		// 														><a
		// 															class="menu-has-image"
		// 															href="/product-category/online-exclusive/"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp"
		// 														/></a>
		// 													</div>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-sub_menu_second
		// 														mega-show-mobile
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-columns-1-of-10
		// 														mega-menu-item-424039
		// 														no-event
		// 														sub_menu_second
		// 														show-mobile
		// 													"
		// 													id="mega-menu-item-424039"
		// 													style="display: none"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product-category/online-exclusive/"
		// 														>Online Exclusives</a
		// 													><a
		// 														class="menu-has-image"
		// 														href="/product-category/online-exclusive/"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp"
		// 													/></a>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-2-of-10
		// 														mega-menu-item-417841
		// 														no-event
		// 													"
		// 													id="mega-menu-item-417841"
		// 												>
		// 													<a class="mega-menu-link"
		// 														>Auspicious Collections<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span></a
		// 													><a class="menu-has-image" href=""
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Jade.webp"
		// 													/></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-no-event
		// 																mega-sub_menu_second
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417838
		// 																no-event
		// 																sub_menu_second
		// 															"
		// 															id="mega-menu-item-417838"
		// 															style="display: none"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/pixiu-bracelets/"
		// 																>Pixiu Blessing</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417843
		// 															"
		// 															id="mega-menu-item-417843"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/abacus-abundance/"
		// 																>Abacus Abundance</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-522740
		// 															"
		// 															id="mega-menu-item-522740"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/collection/jade/"
		// 																>Modern Jade</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417839
		// 															"
		// 															id="mega-menu-item-417839"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/four-leaf-clover/"
		// 																>Four Leaf Clover</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417840
		// 															"
		// 															id="mega-menu-item-417840"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/999-pure-gold"
		// 																>999 Pure Gold</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417842
		// 															"
		// 															id="mega-menu-item-417842"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/sk-916/"
		// 																>SK 916 Gold</a
		// 															>
		// 														</li>
		// 													</ul>
		// 													<div class="wrapper-second-menu">
		// 														<a class="mega-menu-link"
		// 															>Past’s Campaigns<span
		// 																class="mega-indicator"
		// 																data-has-click-event="true"
		// 															></span></a
		// 														><a class="menu-has-image" href=""
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2023/03/In-Store-Exclusives.webp"
		// 														/></a>
		// 														<ul class="mega-sub-menu">
		// 															<li
		// 																class="
		// 																	mega-menu-item
		// 																	mega-menu-item-type-custom
		// 																	mega-menu-item-object-custom
		// 																	mega-menu-item-417837
		// 																"
		// 																id="mega-menu-item-417837"
		// 															>
		// 																<a
		// 																	class="mega-menu-link"
		// 																	href="/collection/valentines-day"
		// 																	>Valentine’s Day</a
		// 																>
		// 															</li>
		// 															<li
		// 																class="
		// 																	mega-menu-item mega-menu-item-type-taxonomy
		// 																	mega-menu-item-object-product_occasions
		// 																	mega-has-description mega-menu-item-527932
		// 																"
		// 																id="mega-menu-item-527932"
		// 															>
		// 																<a
		// 																	class="mega-menu-link"
		// 																	href="https://www.skjewellery.com/product_occasions/for-mum"
		// 																	><span class="mega-description-group"
		// 																		><span class="mega-menu-title"
		// 																			>Celebrate Mom's Endless Love</span
		// 																		><span class="mega-menu-description"
		// 																			>Be it jade for the cool, pearls for the
		// 																			wise, diamonds for the stylish and gold
		// 																			for the bold – we’ve got something for
		// 																			every mum in Singapore. Celebrate mum with
		// 																			a meaningful gift, and make everyday
		// 																			Mother’s Day.</span
		// 																		></span
		// 																	></a
		// 																>
		// 															</li>
		// 														</ul>
		// 													</div>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-sub_menu_second
		// 														mega-show-mobile
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-10
		// 														mega-menu-item-417844
		// 														no-event
		// 														sub_menu_second
		// 														show-mobile
		// 													"
		// 													id="mega-menu-item-417844"
		// 													style="display: none"
		// 												>
		// 													<a class="mega-menu-link"
		// 														>Past’s Campaigns<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span></a
		// 													><a class="menu-has-image" href=""
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/In-Store-Exclusives.webp"
		// 													/></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417837
		// 															"
		// 															id="mega-menu-item-417837"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/valentines-day"
		// 																>Valentine’s Day</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item mega-menu-item-type-taxonomy
		// 																mega-menu-item-object-product_occasions
		// 																mega-has-description mega-menu-item-527932
		// 															"
		// 															id="mega-menu-item-527932"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product_occasions/for-mum"
		// 																><span class="mega-description-group"
		// 																	><span class="mega-menu-title"
		// 																		>Celebrate Mom's Endless Love</span
		// 																	><span class="mega-menu-description"
		// 																		>Be it jade for the cool, pearls for the
		// 																		wise, diamonds for the stylish and gold for
		// 																		the bold – we’ve got something for every mum
		// 																		in Singapore. Celebrate mum with a
		// 																		meaningful gift, and make everyday Mother’s
		// 																		Day.</span
		// 																	></span
		// 																></a
		// 															>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-menu-item mega-menu-item-type-widget
		// 														widget_media_gallery
		// 														mega-menu-columns-6-of-10 mega-menu-clear
		// 														mega-menu-item-media_gallery-2
		// 													"
		// 													id="mega-menu-item-media_gallery-2"
		// 												>
		// 													<h4 class="mega-block-title">
		// 														<span>Categories</span>
		// 													</h4>
		// 													<div
		// 														id="gallery-2"
		// 														class="
		// 															gallery
		// 															galleryid-0
		// 															gallery-columns-4 gallery-size-thumbnail
		// 														"
		// 													>
		// 														<figure class="gallery-item">
		// 															<div class="gallery-icon landscape">
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/allstar-diamonds/"
		// 																	><img
		// 																		width="150"
		// 																		height="150"
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-150x150.webp"
		// 																		class="attachment-thumbnail size-thumbnail"
		// 																		alt=""
		// 																		decoding="async"
		// 																		loading="lazy"
		// 																		aria-describedby="gallery-2-424042"
		// 																		srcset="
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-150x150.webp 150w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-300x300.webp 300w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-354x354.webp 354w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-100x100.webp 100w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star.webp         400w
		// 																		"
		// 																		sizes=""
		// 																/></a>
		// 															</div>
		// 															<figcaption
		// 																class="wp-caption-text gallery-caption"
		// 																id="gallery-2-424042"
		// 															>
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/allstar-diamonds/"
		// 																	>Allstar Diamond</a
		// 																>
		// 															</figcaption>
		// 														</figure>
		// 														<figure class="gallery-item">
		// 															<div class="gallery-icon landscape">
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/star-carat-diamonds/"
		// 																	><img
		// 																		width="150"
		// 																		height="150"
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-150x150.webp"
		// 																		class="attachment-thumbnail size-thumbnail"
		// 																		alt=""
		// 																		decoding="async"
		// 																		loading="lazy"
		// 																		aria-describedby="gallery-2-424050"
		// 																		srcset="
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-150x150.webp 150w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-300x300.webp 300w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-354x354.webp 354w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-100x100.webp 100w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat.webp         400w
		// 																		"
		// 																		sizes=""
		// 																/></a>
		// 															</div>
		// 															<figcaption
		// 																class="wp-caption-text gallery-caption"
		// 																id="gallery-2-424050"
		// 															>
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/star-carat-diamonds/"
		// 																	>Star Carat Diamond</a
		// 																>
		// 															</figcaption>
		// 														</figure>
		// 														<figure class="gallery-item">
		// 															<div class="gallery-icon landscape">
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/disney-collection/"
		// 																	><img
		// 																		width="150"
		// 																		height="150"
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-150x150.webp"
		// 																		class="attachment-thumbnail size-thumbnail"
		// 																		alt=""
		// 																		decoding="async"
		// 																		loading="lazy"
		// 																		aria-describedby="gallery-2-424046"
		// 																		srcset="
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-150x150.webp 150w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-300x300.webp 300w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-354x354.webp 354w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-100x100.webp 100w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Disney.webp         400w
		// 																		"
		// 																		sizes=""
		// 																/></a>
		// 															</div>
		// 															<figcaption
		// 																class="wp-caption-text gallery-caption"
		// 																id="gallery-2-424046"
		// 															>
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/disney-collection/"
		// 																	>Disney</a
		// 																>
		// 															</figcaption>
		// 														</figure>
		// 														<figure class="gallery-item">
		// 															<div class="gallery-icon landscape">
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/loca-k-gold/"
		// 																	><img
		// 																		width="150"
		// 																		height="150"
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-150x150.webp"
		// 																		class="attachment-thumbnail size-thumbnail"
		// 																		alt=""
		// 																		decoding="async"
		// 																		loading="lazy"
		// 																		aria-describedby="gallery-2-424047"
		// 																		srcset="
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-150x150.webp  150w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-300x300.webp  300w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-768x768.webp  768w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-354x354.webp  354w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-480x480.webp  480w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-700x700.webp  700w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-100x100.webp  100w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold.webp         1000w
		// 																		"
		// 																		sizes=""
		// 																/></a>
		// 															</div>
		// 															<figcaption
		// 																class="wp-caption-text gallery-caption"
		// 																id="gallery-2-424047"
		// 															>
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/loca-k-gold/"
		// 																	>Loca K-Gold</a
		// 																>
		// 															</figcaption>
		// 														</figure>
		// 														<figure class="gallery-item">
		// 															<div class="gallery-icon landscape">
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/dancing-star/"
		// 																	><img
		// 																		width="150"
		// 																		height="150"
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-150x150.webp"
		// 																		class="attachment-thumbnail size-thumbnail"
		// 																		alt=""
		// 																		decoding="async"
		// 																		loading="lazy"
		// 																		aria-describedby="gallery-2-424044"
		// 																		srcset="
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-150x150.webp 150w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-300x300.webp 300w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-354x354.webp 354w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-100x100.webp 100w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star.webp         400w
		// 																		"
		// 																		sizes=""
		// 																/></a>
		// 															</div>
		// 															<figcaption
		// 																class="wp-caption-text gallery-caption"
		// 																id="gallery-2-424044"
		// 															>
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/dancing-star/"
		// 																	>Dancing Star</a
		// 																>
		// 															</figcaption>
		// 														</figure>
		// 														<figure class="gallery-item">
		// 															<div class="gallery-icon landscape">
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/oro-amare/"
		// 																	><img
		// 																		width="150"
		// 																		height="150"
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-150x150.webp"
		// 																		class="attachment-thumbnail size-thumbnail"
		// 																		alt=""
		// 																		decoding="async"
		// 																		loading="lazy"
		// 																		aria-describedby="gallery-2-424048"
		// 																		srcset="
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-150x150.webp 150w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-300x300.webp 300w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-354x354.webp 354w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-100x100.webp 100w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare.webp         400w
		// 																		"
		// 																		sizes=""
		// 																/></a>
		// 															</div>
		// 															<figcaption
		// 																class="wp-caption-text gallery-caption"
		// 																id="gallery-2-424048"
		// 															>
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/oro-amare/"
		// 																	>Oro Amare</a
		// 																>
		// 															</figcaption>
		// 														</figure>
		// 														<figure class="gallery-item">
		// 															<div class="gallery-icon landscape">
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/si-dian-jin"
		// 																	><img
		// 																		width="150"
		// 																		height="150"
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-150x150.jpg"
		// 																		class="attachment-thumbnail size-thumbnail"
		// 																		alt=""
		// 																		decoding="async"
		// 																		loading="lazy"
		// 																		aria-describedby="gallery-2-424049"
		// 																		srcset="
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-150x150.jpg  150w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-300x300.jpg  300w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-768x768.jpg  768w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-354x354.jpg  354w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-480x480.jpg  480w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-700x700.jpg  700w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-100x100.jpg  100w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu.jpg         1000w
		// 																		"
		// 																		sizes=""
		// 																/></a>
		// 															</div>
		// 															<figcaption
		// 																class="wp-caption-text gallery-caption"
		// 																id="gallery-2-424049"
		// 															>
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/si-dian-jin"
		// 																	>Si Dian Jin</a
		// 																>
		// 															</figcaption>
		// 														</figure>
		// 														<figure class="gallery-item">
		// 															<div class="gallery-icon landscape">
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/gold-legacy/"
		// 																	><img
		// 																		width="150"
		// 																		height="150"
		// 																		src="https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-150x150.jpg"
		// 																		class="attachment-thumbnail size-thumbnail"
		// 																		alt=""
		// 																		decoding="async"
		// 																		loading="lazy"
		// 																		aria-describedby="gallery-2-424043"
		// 																		srcset="
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-150x150.jpg 150w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-300x300.jpg 300w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-354x354.jpg 354w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-100x100.jpg 100w,
		// 																			https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7.jpg         400w
		// 																		"
		// 																		sizes=""
		// 																/></a>
		// 															</div>
		// 															<figcaption
		// 																class="wp-caption-text gallery-caption"
		// 																id="gallery-2-424043"
		// 															>
		// 																<a
		// 																	href="https://www.skjewellery.com/collection/gold-legacy/"
		// 																	>Gold Legacy</a
		// 																>
		// 															</figcaption>
		// 														</figure>
		// 													</div>
		// 												</li>
		// 											</ul>
		// 										</li>
		// 										<li
		// 											class="
		// 												mega-bridal
		// 												mega-menus-jewellery
		// 												mega-alt-has-submenu-toggle
		// 												mega-alt-has-border
		// 												mega-menu-item
		// 												mega-menu-item-type-custom
		// 												mega-menu-item-object-custom
		// 												mega-menu-item-has-children
		// 												mega-menu-megamenu
		// 												mega-align-bottom-left
		// 												mega-menu-megamenu
		// 												mega-menu-item-417847
		// 												bridal
		// 												menus-jewellery
		// 												alt-has-submenu-toggle alt-has-border
		// 											"
		// 											id="mega-menu-item-417847"
		// 										>
		// 											<a
		// 												class="mega-menu-link no-hover"
		// 												href="#"
		// 												aria-haspopup="true"
		// 												aria-expanded="false"
		// 												tabindex="0"
		// 												>Bridal<span
		// 													class="mega-indicator"
		// 													data-has-click-event="true"
		// 												></span
		// 											></a>
		// 											<ul class="mega-sub-menu">
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-only-desktop
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417848
		// 														no-event
		// 														only-desktop
		// 													"
		// 													id="mega-menu-item-417848"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product_bridal/engagement-rings"
		// 														>Engagement Rings<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span
		// 													></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417849
		// 															"
		// 															id="mega-menu-item-417849"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_bridal/engagement-rings"
		// 																>Our Engagement Suite</a
		// 															>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-only-mobile
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-hide-on-desktop
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417850
		// 														only-mobile
		// 													"
		// 													id="mega-menu-item-417850"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product_bridal/engagement-rings"
		// 														>Engagement Rings</a
		// 													>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417851
		// 														no-event
		// 													"
		// 													id="mega-menu-item-417851"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product_bridal/wedding-bands"
		// 														>Wedding Bands<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span
		// 													></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417852
		// 															"
		// 															id="mega-menu-item-417852"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_bridal/men-wedding-bands"
		// 																>Male Wedding Bands</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417853
		// 															"
		// 															id="mega-menu-item-417853"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_bridal/women-wedding-bands"
		// 																>Female Wedding Bands</a
		// 															>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-only-desktop
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417854
		// 														no-event
		// 														only-desktop
		// 													"
		// 													id="mega-menu-item-417854"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/product_bridal/bridal-si-dian-jin"
		// 														>Si Dian Jin<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span
		// 													></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417855
		// 															"
		// 															id="mega-menu-item-417855"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/si-dian-jin/"
		// 																>All Si Dian Jin</a
		// 															>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-only-mobile
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-hide-on-desktop
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417856
		// 														only-mobile
		// 													"
		// 													id="mega-menu-item-417856"
		// 												>
		// 													<a
		// 														class="mega-menu-link"
		// 														href="/collection/si-dian-jin"
		// 														>Si Dian Jin</a
		// 													>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-menu-item mega-menu-item-type-widget
		// 														widget_media_image
		// 														mega-menu-columns-3-of-6 mega-menu-clear
		// 														mega-menu-item-media_image-19
		// 													"
		// 													id="mega-menu-item-media_image-19"
		// 												>
		// 													<h4 class="mega-block-title">
		// 														<span>New Arrival Wedding Bands</span>
		// 													</h4>
		// 													<a href="/product_bridal/women-wedding-bands"
		// 														><img
		// 															width="1386"
		// 															height="756"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image.webp"
		// 															class="
		// 																image
		// 																wp-image-422656
		// 																attachment-full
		// 																size-full
		// 															"
		// 															alt=""
		// 															decoding="async"
		// 															loading="lazy"
		// 															style="max-width: 100%; height: auto"
		// 															title="WEDDING BANDS FOR HER"
		// 															srcset="
		// 																https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image.webp          1386w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image-300x164.webp   300w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image-1024x559.webp 1024w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image-768x419.webp   768w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image-480x262.webp   480w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image-700x382.webp   700w
		// 															"
		// 															sizes=""
		// 													/></a>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-menu-item mega-menu-item-type-widget
		// 														widget_media_image
		// 														mega-menu-columns-2-of-6
		// 														mega-menu-item-media_image-20
		// 													"
		// 													id="mega-menu-item-media_image-20"
		// 												>
		// 													<h4 class="mega-block-title">
		// 														<span>999 Pure Gold Bridal 四点金</span>
		// 													</h4>
		// 													<a href="/collection/si-dian-jin/"
		// 														><img
		// 															width="1386"
		// 															height="756"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image.webp"
		// 															class="
		// 																image
		// 																wp-image-422657
		// 																attachment-full
		// 																size-full
		// 															"
		// 															alt=""
		// 															decoding="async"
		// 															loading="lazy"
		// 															style="max-width: 100%; height: auto"
		// 															title="WEDDING BANDS FOR HIM"
		// 															srcset="
		// 																https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image.webp          1386w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image-300x164.webp   300w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image-1024x559.webp 1024w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image-768x419.webp   768w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image-480x262.webp   480w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image-700x382.webp   700w
		// 															"
		// 															sizes=""
		// 													/></a>
		// 												</li>
		// 											</ul>
		// 										</li>
		// 										<li
		// 											class="
		// 												mega-menu-gifts
		// 												mega-list-layout
		// 												mega-level1
		// 												mega-has-banner
		// 												mega-alt-has-submenu-toggle
		// 												mega-alt-has-border
		// 												mega-menu-item
		// 												mega-menu-item-type-custom
		// 												mega-menu-item-object-custom
		// 												mega-menu-item-has-children
		// 												mega-menu-megamenu
		// 												mega-align-bottom-left
		// 												mega-menu-megamenu
		// 												mega-menu-item-417857
		// 												menu-gifts
		// 												list-layout
		// 												level1
		// 												has-banner
		// 												alt-has-submenu-toggle alt-has-border
		// 											"
		// 											id="mega-menu-item-417857"
		// 										>
		// 											<a
		// 												class="mega-menu-link no-hover"
		// 												href="#"
		// 												aria-haspopup="true"
		// 												aria-expanded="false"
		// 												tabindex="0"
		// 												>Gifts<span
		// 													class="mega-indicator"
		// 													data-has-click-event="true"
		// 												></span
		// 											></a>
		// 											<ul class="mega-sub-menu">
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-oas-no-hover
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417859
		// 														no-event
		// 														oas-no-hover
		// 													"
		// 													id="mega-menu-item-417859"
		// 												>
		// 													<a class="mega-menu-link no-hover" href="#"
		// 														>Recipients<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span
		// 													></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417860
		// 															"
		// 															id="mega-menu-item-417860"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_recipients/for-him"
		// 																>For Him</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417861
		// 															"
		// 															id="mega-menu-item-417861"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_recipients/for-her"
		// 																>For Her</a
		// 															>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-oas-no-hover
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417862
		// 														no-event
		// 														oas-no-hover
		// 													"
		// 													id="mega-menu-item-417862"
		// 												>
		// 													<a class="mega-menu-link no-hover" href="#"
		// 														>Occasions<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span
		// 													></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417863
		// 															"
		// 															id="mega-menu-item-417863"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_occasions/birthdays"
		// 																>Birthdays</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417864
		// 															"
		// 															id="mega-menu-item-417864"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_occasions/anniversaries"
		// 																>Anniversaries</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417865
		// 															"
		// 															id="mega-menu-item-417865"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_occasions/for-mum"
		// 																>For Mum</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417866
		// 															"
		// 															id="mega-menu-item-417866"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_occasions/wedding"
		// 																>Wedding</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417867
		// 															"
		// 															id="mega-menu-item-417867"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_occasions/kids"
		// 																>Kids</a
		// 															>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-oas-no-hover
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417868
		// 														no-event
		// 														oas-no-hover
		// 													"
		// 													id="mega-menu-item-417868"
		// 												>
		// 													<a class="mega-menu-link no-hover" href="#"
		// 														>Price Range<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span
		// 													></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417869
		// 															"
		// 															id="mega-menu-item-417869"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_price-range/gifts-under-200"
		// 																>Gifts under $200</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417870
		// 															"
		// 															id="mega-menu-item-417870"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_price-range/gifts-under-500"
		// 																>Gifts under $500</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417871
		// 															"
		// 															id="mega-menu-item-417871"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_price-range/gifts-under-1000"
		// 																>Gifts under $1000</a
		// 															>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-menu-item mega-menu-item-type-widget
		// 														widget_media_image
		// 														mega-menu-columns-2-of-6
		// 														mega-menu-item-media_image-21
		// 													"
		// 													id="mega-menu-item-media_image-21"
		// 												>
		// 													<h4 class="mega-block-title">
		// 														<span
		// 															>Send a Gift of Smiles, Sparkles and Shine</span
		// 														>
		// 													</h4>
		// 													<a href="/collection/gifts-she-will-love"
		// 														><img
		// 															width="300"
		// 															height="174"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu-300x174.jpg"
		// 															class="
		// 																image
		// 																wp-image-417903
		// 																attachment-medium
		// 																size-medium
		// 															"
		// 															alt=""
		// 															decoding="async"
		// 															loading="lazy"
		// 															style="max-width: 100%; height: auto"
		// 															srcset="
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu-300x174.jpg        300w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu-1024x593.jpg.webp 1024w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu-768x445.jpg        768w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu-480x278.jpg.webp   480w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu-700x406.jpg        700w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu.jpg.webp          1450w
		// 															"
		// 															sizes=""
		// 													/></a>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-menu-item mega-menu-item-type-widget
		// 														widget_media_image
		// 														mega-menu-columns-2-of-6 mega-menu-clear
		// 														mega-menu-item-media_image-22
		// 													"
		// 													id="mega-menu-item-media_image-22"
		// 												>
		// 													<h4 class="mega-block-title">
		// 														<span>Jewellery for Little Ones</span>
		// 													</h4>
		// 													<a href="/product_occasions/kids/"
		// 														><img
		// 															width="300"
		// 															height="280"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/02/mday_menu-300x280.jpg"
		// 															class="
		// 																image
		// 																wp-image-417904
		// 																attachment-medium
		// 																size-medium
		// 															"
		// 															alt=""
		// 															decoding="async"
		// 															loading="lazy"
		// 															style="max-width: 100%; height: auto"
		// 															srcset="
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/mday_menu-300x280.jpg      300w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/mday_menu-768x717.jpg      768w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/mday_menu-480x448.jpg.webp 480w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/mday_menu-700x653.jpg      700w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/mday_menu.jpg.webp         900w
		// 															"
		// 															sizes=""
		// 													/></a>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-banner-mobile
		// 														mega-only-mobile
		// 														mega-only-desktop
		// 														mega-no-text
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-417858
		// 														banner-mobile
		// 														only-mobile only-desktop
		// 														no-text
		// 													"
		// 													id="mega-menu-item-417858"
		// 												>
		// 													<a class="mega-menu-link no-hover" href="#"
		// 														>gift banner</a
		// 													>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-columns-1-of-6
		// 														mega-menu-item-421719
		// 													"
		// 													id="mega-menu-item-421719"
		// 												>
		// 													<a class="mega-menu-link" href="/corporate-gifts/"
		// 														>Corporate Gifts</a
		// 													>
		// 												</li>
		// 											</ul>
		// 										</li>
		// 										<li
		// 											class="
		// 												mega-personalise
		// 												mega-menu-item
		// 												mega-menu-item-type-custom
		// 												mega-menu-item-object-custom
		// 												mega-menu-item-has-children
		// 												mega-menu-megamenu
		// 												mega-align-bottom-left
		// 												mega-menu-grid
		// 												mega-menu-item-417872
		// 												personalise
		// 											"
		// 											id="mega-menu-item-417872"
		// 										>
		// 											<a
		// 												class="mega-menu-link no-hover"
		// 												href="#"
		// 												aria-haspopup="true"
		// 												aria-expanded="false"
		// 												tabindex="0"
		// 												>Personalise<span
		// 													class="mega-indicator"
		// 													data-has-click-event="true"
		// 												></span
		// 											></a>
		// 											<ul class="mega-sub-menu">
		// 												<li
		// 													class="
		// 														mega-menu-row
		// 														mega-emm_element_center
		// 														emm_element_center
		// 													"
		// 													id="mega-menu-417872-0"
		// 												>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="mega-menu-column mega-menu-columns-3-of-12"
		// 															id="mega-menu-417872-0-0"
		// 														>
		// 															<ul class="mega-sub-menu">
		// 																<li
		// 																	class="
		// 																		mega-bg_layout
		// 																		mega-menu-item
		// 																		mega-menu-item-type-custom
		// 																		mega-menu-item-object-custom
		// 																		mega-menu-item-417873
		// 																		bg_layout
		// 																	"
		// 																	id="mega-menu-item-417873"
		// 																>
		// 																	<a
		// 																		class="mega-menu-link"
		// 																		href="/charm-builder/"
		// 																		>Charm Builder</a
		// 																	><a
		// 																		class="menu-has-image"
		// 																		href="/charm-builder/"
		// 																		><img
		// 																			src="https://www.skjewellery.com/wp-content/uploads/2023/03/Zodiac-Charms-Mobile-1.webp"
		// 																	/></a>
		// 																</li>
		// 																<li
		// 																	class="
		// 																		mega-menu-item mega-menu-item-type-widget
		// 																		widget_text
		// 																		mega-menu-item-text-7
		// 																	"
		// 																	id="mega-menu-item-text-7"
		// 																>
		// 																	<h4 class="mega-block-title">
		// 																		<span></span>
		// 																	</h4>
		// 																	<div class="textwidget">
		// 																		<p>
		// 																			Create your own charm bracelet with a
		// 																			curated collection of 999 Pure Gold
		// 																			Charms.
		// 																		</p>
		// 																		<p>&nbsp;</p>
		// 																	</div>
		// 																</li>
		// 																<li
		// 																	class="
		// 																		mega-menu-item mega-menu-item-type-widget
		// 																		widget_custom_html
		// 																		mega-menu-item-custom_html-7
		// 																	"
		// 																	id="mega-menu-item-custom_html-7"
		// 																>
		// 																	<h4 class="mega-block-title">
		// 																		<span></span>
		// 																	</h4>
		// 																	<div class="textwidget custom-html-widget">
		// 																		<a href="/charm-builder/">Let's Go &gt;</a>
		// 																	</div>
		// 																</li>
		// 																<li
		// 																	class="
		// 																		mega-menu-item mega-menu-item-type-widget
		// 																		widget_media_image
		// 																		mega-menu-item-media_image-23
		// 																	"
		// 																	id="mega-menu-item-media_image-23"
		// 																>
		// 																	<h4 class="mega-block-title">
		// 																		<span></span>
		// 																	</h4>
		// 																	<a href="/charm-builder/"
		// 																		><img
		// 																			width="300"
		// 																			height="164"
		// 																			src="https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-300x164.jpg"
		// 																			class="
		// 																				image
		// 																				wp-image-417906
		// 																				attachment-medium
		// 																				size-medium
		// 																			"
		// 																			alt=""
		// 																			decoding="async"
		// 																			loading="lazy"
		// 																			style="max-width: 100%; height: auto"
		// 																			srcset="
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-300x164.jpg        300w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-1024x559.jpg.webp 1024w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-768x419.jpg        768w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-1536x838.jpg      1536w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-480x262.jpg.webp   480w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-700x382.jpg        700w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1.jpg.webp          1540w
		// 																			"
		// 																			sizes=""
		// 																	/></a>
		// 																</li>
		// 															</ul>
		// 														</li>
		// 														<li
		// 															class="mega-menu-column mega-menu-columns-3-of-12"
		// 															id="mega-menu-417872-0-1"
		// 														>
		// 															<ul class="mega-sub-menu">
		// 																<li
		// 																	class="
		// 																		mega-bg_layout
		// 																		mega-menu-item
		// 																		mega-menu-item-type-custom
		// 																		mega-menu-item-object-custom
		// 																		mega-menu-item-417874
		// 																		bg_layout
		// 																	"
		// 																	id="mega-menu-item-417874"
		// 																>
		// 																	<a
		// 																		class="mega-menu-link"
		// 																		href="/gold-bar-customiser/"
		// 																		>Gold Bar Customiser</a
		// 																	><a
		// 																		class="menu-has-image"
		// 																		href="/gold-bar-customiser/"
		// 																		><img
		// 																			src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bar-Banner.webp"
		// 																	/></a>
		// 																</li>
		// 																<li
		// 																	class="
		// 																		mega-menu-item mega-menu-item-type-widget
		// 																		widget_text
		// 																		mega-menu-item-text-5
		// 																	"
		// 																	id="mega-menu-item-text-5"
		// 																>
		// 																	<h4 class="mega-block-title">
		// 																		<span></span>
		// 																	</h4>
		// 																	<div class="textwidget">
		// 																		<p>
		// 																			Capture the perfect moments with your
		// 																			loved ones and customise them into gold
		// 																			bars.
		// 																		</p>
		// 																		<p>Perfect for gifting!</p>
		// 																	</div>
		// 																</li>
		// 																<li
		// 																	class="
		// 																		mega-menu-item mega-menu-item-type-widget
		// 																		widget_custom_html
		// 																		mega-menu-item-custom_html-6
		// 																	"
		// 																	id="mega-menu-item-custom_html-6"
		// 																>
		// 																	<h4 class="mega-block-title">
		// 																		<span></span>
		// 																	</h4>
		// 																	<div class="textwidget custom-html-widget">
		// 																		<a href="/gold-bar-customiser/"
		// 																			>Let's Go &gt;</a
		// 																		>
		// 																	</div>
		// 																</li>
		// 																<li
		// 																	class="
		// 																		mega-menu-item mega-menu-item-type-widget
		// 																		widget_media_image
		// 																		mega-menu-item-media_image-25
		// 																	"
		// 																	id="mega-menu-item-media_image-25"
		// 																>
		// 																	<h4 class="mega-block-title">
		// 																		<span></span>
		// 																	</h4>
		// 																	<a href="/gold-bar-customiser/"
		// 																		><img
		// 																			width="300"
		// 																			height="300"
		// 																			src="https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-300x300.jpg"
		// 																			class="
		// 																				image
		// 																				wp-image-417907
		// 																				attachment-medium
		// 																				size-medium
		// 																			"
		// 																			alt=""
		// 																			decoding="async"
		// 																			loading="lazy"
		// 																			style="max-width: 100%; height: auto"
		// 																			srcset="
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-300x300.jpg         300w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-1024x1024.jpg.webp 1024w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-150x150.jpg         150w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-768x768.jpg         768w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-354x354.jpg         354w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-480x480.jpg.webp    480w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-700x700.jpg.webp    700w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-100x100.jpg         100w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2.jpg.webp           1500w
		// 																			"
		// 																			sizes=""
		// 																	/></a>
		// 																</li>
		// 															</ul>
		// 														</li>
		// 														<li
		// 															class="mega-menu-column mega-menu-columns-3-of-12"
		// 															id="mega-menu-417872-0-2"
		// 														>
		// 															<ul class="mega-sub-menu">
		// 																<li
		// 																	class="
		// 																		mega-bg_layout
		// 																		mega-menu-item
		// 																		mega-menu-item-type-custom
		// 																		mega-menu-item-object-custom
		// 																		mega-menu-item-417875
		// 																		bg_layout
		// 																	"
		// 																	id="mega-menu-item-417875"
		// 																>
		// 																	<a
		// 																		class="mega-menu-link"
		// 																		href="/personalised-name-necklace"
		// 																		>Yours Truly</a
		// 																	><a
		// 																		class="menu-has-image"
		// 																		href="/personalised-name-necklace"
		// 																		><img
		// 																			src="https://www.skjewellery.com/wp-content/uploads/2023/03/04-Personalise-3-1-1.webp"
		// 																	/></a>
		// 																</li>
		// 																<li
		// 																	class="
		// 																		mega-menu-item mega-menu-item-type-widget
		// 																		widget_text
		// 																		mega-menu-item-text-6
		// 																	"
		// 																	id="mega-menu-item-text-6"
		// 																>
		// 																	<h4 class="mega-block-title">
		// 																		<span></span>
		// 																	</h4>
		// 																	<div class="textwidget">
		// 																		<p>
		// 																			Create your very own customised necklace
		// 																			alongside your birthstone.
		// 																		</p>
		// 																		<p>&nbsp;</p>
		// 																	</div>
		// 																</li>
		// 																<li
		// 																	class="
		// 																		mega-menu-item mega-menu-item-type-widget
		// 																		widget_custom_html
		// 																		mega-menu-item-custom_html-5
		// 																	"
		// 																	id="mega-menu-item-custom_html-5"
		// 																>
		// 																	<h4 class="mega-block-title">
		// 																		<span></span>
		// 																	</h4>
		// 																	<div class="textwidget custom-html-widget">
		// 																		<a href="/personalised-name-necklace"
		// 																			>Let's Go &gt;</a
		// 																		>
		// 																	</div>
		// 																</li>
		// 																<li
		// 																	class="
		// 																		mega-menu-item mega-menu-item-type-widget
		// 																		widget_media_image
		// 																		mega-menu-item-media_image-24
		// 																	"
		// 																	id="mega-menu-item-media_image-24"
		// 																>
		// 																	<h4 class="mega-block-title">
		// 																		<span></span>
		// 																	</h4>
		// 																	<a href="/personalised-name-necklace"
		// 																		><img
		// 																			width="300"
		// 																			height="164"
		// 																			src="https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-300x164.jpg"
		// 																			class="
		// 																				image
		// 																				wp-image-417908
		// 																				attachment-medium
		// 																				size-medium
		// 																			"
		// 																			alt=""
		// 																			decoding="async"
		// 																			loading="lazy"
		// 																			style="max-width: 100%; height: auto"
		// 																			srcset="
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-300x164.jpg        300w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-1024x559.jpg.webp 1024w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-768x419.jpg        768w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-1536x838.jpg      1536w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-480x262.jpg.webp   480w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-700x382.jpg        700w,
		// 																				https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3.jpg.webp          1540w
		// 																			"
		// 																			sizes=""
		// 																	/></a>
		// 																</li>
		// 															</ul>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 											</ul>
		// 										</li>
		// 										<li
		// 											class="
		// 												mega-menu-highlights
		// 												mega-menus-jewellery
		// 												mega-alt-has-submenu-toggle
		// 												mega-alt-has-border
		// 												mega-menu-item
		// 												mega-menu-item-type-custom
		// 												mega-menu-item-object-custom
		// 												mega-menu-item-has-children
		// 												mega-menu-megamenu
		// 												mega-align-bottom-left
		// 												mega-menu-megamenu
		// 												mega-menu-item-417876
		// 												menu-highlights
		// 												menus-jewellery
		// 												alt-has-submenu-toggle alt-has-border
		// 											"
		// 											id="mega-menu-item-417876"
		// 										>
		// 											<a
		// 												class="mega-menu-link no-hover"
		// 												href="#"
		// 												aria-haspopup="true"
		// 												aria-expanded="false"
		// 												tabindex="0"
		// 												>Guides<span
		// 													class="mega-indicator"
		// 													data-has-click-event="true"
		// 												></span
		// 											></a>
		// 											<ul class="mega-sub-menu">
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-oas-no-hover
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-4
		// 														mega-menu-item-417877
		// 														no-event
		// 														oas-no-hover
		// 													"
		// 													id="mega-menu-item-417877"
		// 												>
		// 													<a class="mega-menu-link no-hover" href="#"
		// 														>SK's World of Jewellery<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span
		// 													></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417878
		// 															"
		// 															id="mega-menu-item-417878"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/ring-sizer-guide/"
		// 																>Ring Size Guide</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417879
		// 															"
		// 															id="mega-menu-item-417879"
		// 														>
		// 															<a class="mega-menu-link" href="/wedding-bands/"
		// 																>Wedding Bands Guide</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-post_type
		// 																mega-menu-item-object-page mega-menu-item-417880
		// 															"
		// 															id="mega-menu-item-417880"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/jewellery-care-guide/"
		// 																>Jewellery Care Guide</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-post_type
		// 																mega-menu-item-object-page mega-menu-item-417881
		// 															"
		// 															id="mega-menu-item-417881"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/gold-jewellery-guide/"
		// 																>Gold Jewellery Guide</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417882
		// 															"
		// 															id="mega-menu-item-417882"
		// 														>
		// 															<a class="mega-menu-link" href="/sidianjin/"
		// 																>Si Dian Jin (四点金) Guide</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417883
		// 															"
		// 															id="mega-menu-item-417883"
		// 														>
		// 															<a class="mega-menu-link" href="/gold-legacy/"
		// 																>Gold Legacy (古法金)</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417884
		// 															"
		// 															id="mega-menu-item-417884"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/gift-guide-for-kids/"
		// 																>Gift Guide for Kids</a
		// 															>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-oas-no-hover
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-4
		// 														mega-menu-item-417885
		// 														no-event
		// 														oas-no-hover
		// 													"
		// 													id="mega-menu-item-417885"
		// 												>
		// 													<a class="mega-menu-link no-hover" href="#"
		// 														>Specialties<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span
		// 													></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417886
		// 															"
		// 															id="mega-menu-item-417886"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/about-lab-grown-diamonds/"
		// 																>Lab Grown Diamonds</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-post_type
		// 																mega-menu-item-object-page mega-menu-item-417887
		// 															"
		// 															id="mega-menu-item-417887"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/allstar-diamond/"
		// 																>AllStar Diamond</a
		// 															>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-no-event
		// 														mega-oas-no-hover
		// 														mega-menu-item
		// 														mega-menu-item-type-custom
		// 														mega-menu-item-object-custom
		// 														mega-menu-item-has-children
		// 														mega-menu-columns-1-of-4
		// 														mega-menu-item-417888
		// 														no-event
		// 														oas-no-hover
		// 													"
		// 													id="mega-menu-item-417888"
		// 												>
		// 													<a class="mega-menu-link no-hover" href="#"
		// 														>Keeping You Updated<span
		// 															class="mega-indicator"
		// 															data-has-click-event="true"
		// 														></span
		// 													></a>
		// 													<ul class="mega-sub-menu">
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-post_type
		// 																mega-menu-item-object-page mega-menu-item-417889
		// 															"
		// 															id="mega-menu-item-417889"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/to-my-supermom/"
		// 																>SK Mother's Day Campaign</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-post_type
		// 																mega-menu-item-object-page mega-menu-item-417890
		// 															"
		// 															id="mega-menu-item-417890"
		// 														>
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/made-with-passion/"
		// 																>SK Jewellery X Made with Passion</a
		// 															>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417891
		// 															"
		// 															id="mega-menu-item-417891"
		// 														>
		// 															<a class="mega-menu-link" href="/news/">News</a>
		// 														</li>
		// 														<li
		// 															class="
		// 																mega-menu-item
		// 																mega-menu-item-type-custom
		// 																mega-menu-item-object-custom
		// 																mega-menu-item-417892
		// 															"
		// 															id="mega-menu-item-417892"
		// 														>
		// 															<a class="mega-menu-link" href="/blog">Blog</a>
		// 														</li>
		// 													</ul>
		// 												</li>
		// 												<li
		// 													class="
		// 														mega-menu-item mega-menu-item-type-widget
		// 														widget_media_image
		// 														mega-menu-columns-3-of-4 mega-menu-clear
		// 														mega-menu-item-media_image-26
		// 													"
		// 													id="mega-menu-item-media_image-26"
		// 												>
		// 													<h4 class="mega-block-title">
		// 														<span>Discover the World of Disney</span>
		// 													</h4>
		// 													<a href="/celebrate-love-with-disney-collection/"
		// 														><img
		// 															width="300"
		// 															height="280"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/02/Disney_900x840-1-300x280.jpg"
		// 															class="
		// 																image
		// 																wp-image-417909
		// 																attachment-medium
		// 																size-medium
		// 															"
		// 															alt=""
		// 															decoding="async"
		// 															loading="lazy"
		// 															style="max-width: 100%; height: auto"
		// 															srcset="
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/Disney_900x840-1-300x280.jpg      300w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/Disney_900x840-1-768x717.jpg      768w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/Disney_900x840-1-480x448.jpg.webp 480w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/Disney_900x840-1-700x653.jpg      700w,
		// 																https://www.skjewellery.com/wp-content/uploads/2023/02/Disney_900x840-1.jpg.webp         900w
		// 															"
		// 															sizes=""
		// 													/></a>
		// 												</li>
		// 											</ul>
		// 										</li>
		// 										<li
		// 											class="
		// 												mega-menu-locator
		// 												mega-only-desktop
		// 												mega-menu-item
		// 												mega-menu-item-type-custom
		// 												mega-menu-item-object-custom
		// 												mega-align-bottom-left
		// 												mega-menu-flyout
		// 												mega-hide-on-mobile
		// 												mega-menu-item-417893
		// 												menu-locator
		// 												only-desktop
		// 											"
		// 											id="mega-menu-item-417893"
		// 										>
		// 											<a class="mega-menu-link" href="/locate-us" tabindex="0"
		// 												>Store Locator</a
		// 											>
		// 										</li>
		// 										<li
		// 											class="
		// 												mega-menu-shipto
		// 												mega-only-desktop
		// 												mega-menu-item
		// 												mega-menu-item-type-custom
		// 												mega-menu-item-object-custom
		// 												mega-menu-megamenu
		// 												mega-align-bottom-left
		// 												mega-menu-megamenu
		// 												mega-hide-on-mobile
		// 												mega-menu-item-417894
		// 												menu-shipto
		// 												only-desktop
		// 											"
		// 											id="mega-menu-item-417894"
		// 										>
		// 											<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 												>Ship to: Singapore</a
		// 											>
		// 										</li>
		// 									</ul>
		// 								</div>
		// 							</nav>
		// 							<div class="header-search">
		// 								<form
		// 									action="https://www.skjewellery.com"
		// 									method="get"
		// 									autocomplete="off"
		// 								>
		// 									<input
		// 										type="text"
		// 										name="s"
		// 										placeholder="I'm searching for..."
		// 										id="open-search"
		// 									/>
		// 									<span class="search__icon search__icon--loading"></span>
		// 									<span class="search__icon search__icon--glass"></span>
		// 									<input type="submit" value="Search" class="search-submit" />
		// 									<img
		// 										class="delvify-camera"
		// 										width="24"
		// 										height="24"
		// 										margin="0px"
		// 										padding="0px"
		// 										src="https://smart-tag.s3.ap-southeast-1.amazonaws.com/widget-assets/dv-camera.svg?6351"
		// 										alt="default"
		// 									/>
		// 								</form>
		// 								<div
		// 									id="delvify-container"
		// 									style="padding: 0px; margin: 0px; display: flex"
		// 								>
		// 									<div
		// 										id="delvify-wrapper"
		// 										style="
		// 											z-index: 9998;
		// 											position: absolute;
		// 											display: inline-block;
		// 											top: 0px;
		// 											width: 24px;
		// 											height: 24px;
		// 											vertical-align: middle;
		// 											padding: 0px;
		// 											margin: 28px 0px 0px;
		// 											line-height: 0px;
		// 											cursor: pointer;
		// 											right: 30px;
		// 										"
		// 									>
		// 										<img
		// 											class="delvify-camera"
		// 											width="24"
		// 											height="24"
		// 											margin="0px"
		// 											padding="0px"
		// 											src="https://smart-tag.s3.ap-southeast-1.amazonaws.com/widget-assets/dv-camera.svg?4744"
		// 											alt="default"
		// 										/>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<!-- Cached@24/05/2023 12:39 AM -->
		// 				</div>

		// 				<div class="d-block d-lg-none">
		// 					<nav class="navbar mobile-navbar">
		// 						<div class="component-wrapper">
		// 							<div
		// 								class="
		// 									s-form
		// 									mobile-search-form--wrapper
		// 									mobile-search-form--wrapper__hidden
		// 								"
		// 								style="top: 56px"
		// 							>
		// 								<section class="s-popup">
		// 									<div class="with-text" id="form_search_mobile">
		// 										<main>
		// 											<form
		// 												role="search"
		// 												method="get"
		// 												class="search-form"
		// 												action="https://www.skjewellery.com/"
		// 											>
		// 												<label>
		// 													<span class="screen-reader-text">Search for:</span>
		// 													<input
		// 														type="search"
		// 														class="search-field"
		// 														placeholder="Search …"
		// 														value="necklace"
		// 														name="s"
		// 													/>
		// 												</label>
		// 												<input
		// 													type="submit"
		// 													class="search-submit"
		// 													value="Search"
		// 												/>
		// 												<div
		// 													id="delvify-container-mobile"
		// 													style="padding: 0px; margin: 0px; display: flex"
		// 												>
		// 													<div
		// 														id="delvify-wrapper"
		// 														style="
		// 															z-index: 9998;
		// 															position: absolute;
		// 															display: inline-block;
		// 															top: 0px;
		// 															width: 24px;
		// 															height: 24px;
		// 															vertical-align: middle;
		// 															padding: 0px;
		// 															margin: 6.5px 0px 0px;
		// 															line-height: 0px;
		// 															cursor: pointer;
		// 															right: 13px;
		// 														"
		// 													>
		// 														<img
		// 															class="delvify-camera"
		// 															width="24"
		// 															height="24"
		// 															margin="0px"
		// 															padding="0px"
		// 															src="https://smart-tag.s3.ap-southeast-1.amazonaws.com/widget-assets/dv-camera.svg?4744"
		// 															alt="default"
		// 														/>
		// 													</div>
		// 												</div>
		// 											</form>
		// 										</main>
		// 									</div>
		// 								</section>
		// 								<span class="clear-search d-none"></span>
		// 							</div>
		// 							<div class="content-hint"></div>
		// 							<div class="mobile-navbar-left d-flex align-items center">
		// 								<div
		// 									class="navbar-toggler"
		// 									data-toggle="collapse"
		// 									data-target="#navbarNav"
		// 									aria-controls="navbarNav"
		// 									aria-expanded="false"
		// 									aria-label="Toggle navigation"
		// 								>
		// 									<span class="navbar-toggler-icon"></span>
		// 								</div>
		// 								<div class="navbar-appointment">
		// 									<a
		// 										class="cons-url"
		// 										href="https://www.skjewellery.com/consultation"
		// 									>
		// 										<span class="icon-widget">
		// 											<img
		// 												src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/images/notes.webp"
		// 												width="19"
		// 												height="20"
		// 												alt="Book Apointment Icon"
		// 											/>
		// 										</span>
		// 									</a>
		// 								</div>
		// 							</div>
		// 							<div class="mobile-navbar-center">
		// 								<a
		// 									href="https://www.skjewellery.com"
		// 									class="custom-logo-link"
		// 									rel="home"
		// 								>
		// 									<img
		// 										width="110"
		// 										height="85"
		// 										class="custom-logo"
		// 										src="https://www.skjewellery.com/wp-content/uploads/2019/10/logo_navbar_mobile.png"
		// 										alt="SK Jewellery Logo"
		// 									/>
		// 								</a>
		// 							</div>
		// 							<div class="mobile-navbar-right d-flex align-items center">
		// 								<i class="navbar-icons navbar-icon-search"></i>
		// 								<i class="navbar-icons navbar-icons-account"
		// 									><a href="https://www.skjewellery.com/my-account"></a
		// 								></i>
		// 								<div class="navbar-icons navbar-icons-cart">
		// 									<a href="https://www.skjewellery.com/cart">
		// 										<span class="cart-indicator ggfgd"></span>
		// 									</a>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</nav>
		// 				</div>

		// 				<div class="alt-menu-mobile-panel">
		// 					<div id="mega-menu-wrap-main-navigation-1" class="mega-menu-wrap">
		// 						<ul
		// 							id="mega-menu-main-navigation-1"
		// 							class="mega-menu max-mega-menu mega-menu-horizontal"
		// 							data-event="hover"
		// 							data-effect="disabled"
		// 							data-effect-speed="200"
		// 							data-effect-mobile="disabled"
		// 							data-effect-speed-mobile="0"
		// 							data-mobile-force-width="false"
		// 							data-second-click="go"
		// 							data-document-click="collapse"
		// 							data-vertical-behaviour="standard"
		// 							data-breakpoint="768"
		// 							data-unbind="true"
		// 							data-mobile-state="collapse_all"
		// 							data-hover-intent-timeout="300"
		// 							data-hover-intent-interval="100"
		// 						>
		// 							<li
		// 								class="
		// 									alt-li-item
		// 									mega-menu-megamenu
		// 									mega-menu-item
		// 									mega-menu-item-type-custom
		// 									mega-menu-item-object-custom
		// 									mega-menu-item-417781
		// 									mega-alt-depth-0
		// 									mega-abc_0
		// 								"
		// 								id="mega-menu-item-417781"
		// 							>
		// 								<a
		// 									class="mega-menu-link"
		// 									href="/product-category/new-in/"
		// 									tabindex="0"
		// 									>New Arrivals</a
		// 								>
		// 							</li>
		// 							<li
		// 								class="
		// 									alt-li-item
		// 									mega-menu-megamenu
		// 									mega-full-width
		// 									mega-menus-jewellery
		// 									mega-alt-has-submenu-toggle
		// 									mega-alt-has-border
		// 									mega-menu-item
		// 									mega-menu-item-type-custom
		// 									mega-menu-item-object-custom
		// 									mega-menu-item-has-children
		// 									mega-menu-item-417783
		// 									mega-alt-depth-0
		// 									mega-abc_0
		// 									full-width
		// 									menus-jewellery
		// 									alt-has-submenu-toggle alt-has-border
		// 								"
		// 								id="mega-menu-item-417783"
		// 							>
		// 								<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 									>Jewellery<span
		// 										class="mega-indicator alt-mega-indicator"
		// 										data-has-click-event="true"
		// 									></span
		// 								></a>
		// 								<ul class="mega-sub-menu">
		// 									<li class="top-child-menu">
		// 										<div class="menu-back">
		// 											<div class="menu-back__icon"></div>
		// 											<div class="menu-back__text"><a href="#">Menu</a></div>
		// 										</div>
		// 										<div class="banner-item-menu"></div>
		// 									</li>
		// 									<li class="wrapper-li-item">
		// 										<ul class="child-ul">
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-grid-layout
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417784
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													grid-layout
		// 												"
		// 												id="mega-menu-item-417784"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product-category/rings/"
		// 													>Rings<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span></a
		// 												><a
		// 													class="menu-has-image"
		// 													href="/product-category/rings/"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Rings.webp"
		// 												/></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417785
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417785"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/diamond-rings/"
		// 																>Diamond Rings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/diamond-rings/"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417786
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417786"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/gold-rings/"
		// 																>Gold Rings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/gold-rings/"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-417787 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417787"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/everyday-rings"
		// 																>Everyday Rings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/everyday-rings"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Everyday.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-mobile-hide-border
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-417788 mega-alt-depth-2
		// 															mega-abc_2
		// 															mobile-hide-border
		// 														"
		// 														id="mega-menu-item-417788"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/gemstone-rings"
		// 																>Gemstone Rings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/gemstone-rings"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstone.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-531802 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-531802"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/eternity-rings"
		// 																>Eternity Rings</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-531803 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-531803"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/stacking-rings"
		// 																>Stacking Rings</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-primary-link
		// 															mega-rings-online-exclusives
		// 															mega-only-desktop
		// 															mega-mobile-hide-border
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-419040
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 															primary-link
		// 															rings-online-exclusives
		// 															only-desktop
		// 															mobile-hide-border
		// 														"
		// 														id="mega-menu-item-419040"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/best-sellers"
		// 																>Best Sellers</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/collection/best-sellers"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-only-desktop
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417790
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													only-desktop
		// 												"
		// 												id="mega-menu-item-417790"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product-category/chains"
		// 													>Chains<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span></a
		// 												><a
		// 													class="menu-has-image"
		// 													href="/product-category/chains"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Chain.webp"
		// 												/></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417791
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417791"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/chains"
		// 																>Gold Chains</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-only-mobile
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-417792
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													only-mobile
		// 												"
		// 												id="mega-menu-item-417792"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product-category/chains"
		// 													>Chains</a
		// 												><a
		// 													class="menu-has-image"
		// 													href="/product-category/chains"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Chain.webp"
		// 												/></a>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu mega-no-event
		// 													mega-sub_menu_second
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417793
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													sub_menu_second
		// 												"
		// 												id="mega-menu-item-417793"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product-category/pendants-necklaces"
		// 													>Pendants &amp; Necklaces<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span></a
		// 												><a
		// 													class="menu-has-image"
		// 													href="/product-category/pendants-necklaces"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Pendants-Necklaces-copy.webp"
		// 												/></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417794
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417794"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/diamond-pendants"
		// 																>Diamond Pendants</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/diamond-pendants"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamonds.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417795
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417795"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/gold-pendants"
		// 																>Gold Pendants</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/gold-pendants"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Pendant.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417796
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417796"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/silver-pendants"
		// 																>Silver Pendants</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/silver-pendants"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Silver.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-531801 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-531801"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/pearl-pendants"
		// 																>Pearl Pendants</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-menu-item
		// 													mega-menu-item-type-taxonomy
		// 													mega-menu-item-object-product_cat
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417797
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 												"
		// 												id="mega-menu-item-417797"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="https://www.skjewellery.com/product-category/bracelets"
		// 													>Bracelets<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span></a
		// 												><a
		// 													class="menu-has-image"
		// 													href="https://www.skjewellery.com/product-category/bracelets"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Bracelets.webp"
		// 												/></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-417798 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417798"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/gold-bracelets"
		// 																>Gold Bracelets</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/gold-bracelets"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-1.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-417799 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417799"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/diamond-bracelets"
		// 																>Diamond Bracelets</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/diamond-bracelets"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-1.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-417800 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417800"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/everyday-bracelets"
		// 																>Everyday Bracelets</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/everyday-bracelets"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Everyday-1.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-417801 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417801"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/pixiu-bracelets"
		// 																>Pixiu Bracelets</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/pixiu-bracelets"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Pixiu.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-sub_menu_second
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417802
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													sub_menu_second
		// 												"
		// 												id="mega-menu-item-417802"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product-category/bangles"
		// 													>Bangles<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span></a
		// 												><a
		// 													class="menu-has-image"
		// 													href="/product-category/bangles"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Bangles.webp"
		// 												/></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-417803 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417803"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/gold-bangles"
		// 																>Gold Bangles</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/gold-bangles"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bangles.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-417804 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417804"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/diamond-bangles"
		// 																>Diamond Bangles</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/diamond-bangles"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-Bangles.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-Earrings
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417805
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													Earrings
		// 												"
		// 												id="mega-menu-item-417805"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product-category/earrings"
		// 													>Earrings<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span></a
		// 												><a
		// 													class="menu-has-image"
		// 													href="/product-category/earrings"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Earrings.webp"
		// 												/></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417806
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417806"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/diamond-earrings"
		// 																>Diamond Earrings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/diamond-earrings"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-Earrings.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417807
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417807"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/gold-earrings"
		// 																>Gold Earrings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/gold-earrings"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Earrings.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-417808 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417808"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/everyday-earrings"
		// 																>Everyday Earrings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/everyday-earrings"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Everyday-Earrings.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-531800 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-531800"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/pearl-earrings"
		// 																>Pearl Earrings</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-531799 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-531799"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/hoop-earrings"
		// 																>Hoop Earrings</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-531798 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-531798"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/dangle-earrings"
		// 																>Dangle Earrings</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-Anklets
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-426365
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													Anklets
		// 												"
		// 												id="mega-menu-item-426365"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product-category/anklets"
		// 													>Anklets<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span
		// 												></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-531797 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-531797"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/gold-anklets"
		// 																>Gold Anklets</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_cat
		// 															mega-menu-item-531796 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-531796"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/baby-anklets"
		// 																>Baby Anklets</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417809
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 												"
		// 												id="mega-menu-item-417809"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product-category/charms"
		// 													>Charms<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span></a
		// 												><a
		// 													class="menu-has-image"
		// 													href="/product-category/charms"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Charms.webp"
		// 												/></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417810
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417810"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/animals"
		// 																>Animals</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/animals"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Animals.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417811
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417811"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/zodiac"
		// 																>Zodiac</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/zodiac"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Zodiac.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417812
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417812"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/classic"
		// 																>Classic</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/classic"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Classic.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417813
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417813"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/blessings"
		// 																>Blessings</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/blessings"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Blessings.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-419533
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-419533"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/disney/"
		// 																>Disney</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="https://www.skjewellery.com/product-category/disney/"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/04/Mickey.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417814
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 												"
		// 												id="mega-menu-item-417814"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product-category/gold-collectibles"
		// 													>Gold Bars &amp; Figurines<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span></a
		// 												><a
		// 													class="menu-has-image"
		// 													href="/product-category/gold-collectibles"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bars-Figurines.webp"
		// 												/></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417815
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417815"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/classic-gold-bars"
		// 																>Classic Gold Bars</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/classic-gold-bars"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Classic-GB.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417816
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417816"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/square-gold-bars"
		// 																>Square Gold Bars</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/square-gold-bars"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Square-GB.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417817
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417817"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/figurines"
		// 																>Figurines</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/figurines"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Figurines.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417818
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417818"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product-category/coins"
		// 																>Coins</a
		// 															><a
		// 																class="menu-has-image"
		// 																href="/product-category/coins"
		// 																><img
		// 																	src="https://www.skjewellery.com/wp-content/uploads/2023/03/Coins.webp"
		// 															/></a>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-mobile-link
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-531812
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													mobile-link
		// 												"
		// 												id="mega-menu-item-531812"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/collection/best-sellers"
		// 													>Best Sellers</a
		// 												><a
		// 													class="menu-has-image"
		// 													href="/collection/best-sellers"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp"
		// 												/></a>
		// 											</li>
		// 										</ul>
		// 									</li>
		// 									<li class="emm_bottom_menu">
		// 										<ul class="">
		// 											<li
		// 												class="mega-menu-calendar mega-menu-item menu-calendar"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/consultation/"
		// 													tabindex="0"
		// 													>Book Appointment</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-locator mega-menu-item
		// 													menu-locator
		// 												"
		// 											>
		// 												<a class="mega-menu-link" href="/locate-us" tabindex="0"
		// 													>Store Locator</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-shipto mega-menu-item
		// 													menu-shipto
		// 												"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 													>Ship to: Singapore</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-acc mega-menu-item
		// 													menu-acc
		// 												"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/my-account"
		// 													tabindex="0"
		// 													>My Account</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-logout mega-menu-item
		// 													menu-logout
		// 												"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="https://www.skjewellery.com/my-account/customer-logout/?_wpnonce=49fc134358"
		// 													tabindex="0"
		// 													>Logout</a
		// 												>
		// 											</li>
		// 										</ul>
		// 									</li>
		// 								</ul>
		// 							</li>
		// 							<li
		// 								class="
		// 									alt-li-item
		// 									mega-menu-megamenu
		// 									mega-full-width
		// 									mega-menu-collections
		// 									mega-menus-jewellery
		// 									mega-alt-has-submenu-toggle
		// 									mega-alt-has-border
		// 									mega-custom-mega-menu-1
		// 									mega-menu-item
		// 									mega-menu-item-type-custom
		// 									mega-menu-item-object-custom
		// 									mega-menu-item-has-children
		// 									mega-menu-item-417820
		// 									mega-alt-depth-0
		// 									mega-abc_0
		// 									full-width
		// 									menu-collections
		// 									menus-jewellery
		// 									alt-has-submenu-toggle alt-has-border
		// 									custom-mega-menu-1
		// 								"
		// 								id="mega-menu-item-417820"
		// 							>
		// 								<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 									>Collections<span
		// 										class="mega-indicator alt-mega-indicator"
		// 										data-has-click-event="true"
		// 									></span
		// 								></a>
		// 								<ul class="mega-sub-menu">
		// 									<li class="top-child-menu">
		// 										<div class="menu-back">
		// 											<div class="menu-back__icon"></div>
		// 											<div class="menu-back__text"><a href="#">Menu</a></div>
		// 										</div>
		// 										<div class="banner-item-menu"></div>
		// 									</li>
		// 									<li class="wrapper-li-item">
		// 										<ul class="child-ul">
		// 											<div class="twrapper-mobile-menu">
		// 												<h5 class="gallery_title">Categories</h5>
		// 												<div class="gallery-item">
		// 													<a
		// 														href="https://www.skjewellery.com/collection/allstar-diamonds/"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-150x150.webp"
		// 															alt=""
		// 													/></a>
		// 													<p class="caption">
		// 														<a
		// 															href="https://www.skjewellery.com/collection/allstar-diamonds/"
		// 															>Allstar Diamond</a
		// 														>
		// 													</p>
		// 												</div>
		// 												<div class="gallery-item">
		// 													<a
		// 														href="https://www.skjewellery.com/collection/star-carat-diamonds/"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-150x150.webp"
		// 															alt=""
		// 													/></a>
		// 													<p class="caption">
		// 														<a
		// 															href="https://www.skjewellery.com/collection/star-carat-diamonds/"
		// 															>Star Carat Diamond</a
		// 														>
		// 													</p>
		// 												</div>
		// 												<div class="gallery-item">
		// 													<a
		// 														href="https://www.skjewellery.com/collection/disney-collection/"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-150x150.webp"
		// 															alt=""
		// 													/></a>
		// 													<p class="caption">
		// 														<a
		// 															href="https://www.skjewellery.com/collection/disney-collection/"
		// 															>Disney</a
		// 														>
		// 													</p>
		// 												</div>
		// 												<div class="gallery-item">
		// 													<a
		// 														href="https://www.skjewellery.com/collection/loca-k-gold/"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-150x150.webp"
		// 															alt=""
		// 													/></a>
		// 													<p class="caption">
		// 														<a
		// 															href="https://www.skjewellery.com/collection/loca-k-gold/"
		// 															>Loca K-Gold</a
		// 														>
		// 													</p>
		// 												</div>
		// 												<div class="gallery-item">
		// 													<a
		// 														href="https://www.skjewellery.com/collection/dancing-star/"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-150x150.webp"
		// 															alt=""
		// 													/></a>
		// 													<p class="caption">
		// 														<a
		// 															href="https://www.skjewellery.com/collection/dancing-star/"
		// 															>Dancing Star</a
		// 														>
		// 													</p>
		// 												</div>
		// 												<div class="gallery-item">
		// 													<a
		// 														href="https://www.skjewellery.com/collection/oro-amare/"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-150x150.webp"
		// 															alt=""
		// 													/></a>
		// 													<p class="caption">
		// 														<a
		// 															href="https://www.skjewellery.com/collection/oro-amare/"
		// 															>Oro Amare</a
		// 														>
		// 													</p>
		// 												</div>
		// 												<div class="gallery-item">
		// 													<a
		// 														href="https://www.skjewellery.com/collection/si-dian-jin"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-150x150.jpg"
		// 															alt=""
		// 													/></a>
		// 													<p class="caption">
		// 														<a
		// 															href="https://www.skjewellery.com/collection/si-dian-jin"
		// 															>Si Dian Jin</a
		// 														>
		// 													</p>
		// 												</div>
		// 												<div class="gallery-item">
		// 													<a
		// 														href="https://www.skjewellery.com/collection/gold-legacy/"
		// 														><img
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-150x150.jpg"
		// 															alt=""
		// 													/></a>
		// 													<p class="caption">
		// 														<a
		// 															href="https://www.skjewellery.com/collection/gold-legacy/"
		// 															>Gold Legacy</a
		// 														>
		// 													</p>
		// 												</div>
		// 												<!-- ECached@24/05/2023 12:39 AM -->
		// 											</div>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417821
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 												"
		// 												id="mega-menu-item-417821"
		// 											>
		// 												<a class="mega-menu-link"
		// 													>Everyday Collections<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span></a
		// 												><a class="menu-has-image" href=""
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/04/Everyday-Collections.webp"
		// 												/></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417827
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417827"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/celestial-shine/"
		// 																>Sun, Star &amp; Moon</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417826
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417826"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/lock-and-key/"
		// 																>Locks &amp; Keys</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417824
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417824"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/cross-jewellery/"
		// 																>Cross</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417823
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417823"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/nature-inspired/"
		// 																>Nature-Inspired</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-422645
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-422645"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/animals-pets/"
		// 																>Animals &amp; Pets</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-bottom-space
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417822
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 															bottom-space
		// 														"
		// 														id="mega-menu-item-417822"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/shima-pearls/"
		// 																>Shima Pearls</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-424206
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-424206"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/collection/starlett-diamonds/"
		// 																>Starlett Lab Diamonds</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-424207
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-424207"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/collection/skarlet-diamonds/"
		// 																>Skarlet Mined Diamonds</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417841
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 												"
		// 												id="mega-menu-item-417841"
		// 											>
		// 												<a class="mega-menu-link"
		// 													>Auspicious Collections<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span></a
		// 												><a class="menu-has-image" href=""
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Jade.webp"
		// 												/></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu mega-no-event
		// 															mega-sub_menu_second
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417838
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 															no-event
		// 															sub_menu_second
		// 														"
		// 														id="mega-menu-item-417838"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product-category/pixiu-bracelets/"
		// 																>Pixiu Blessing</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417843
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417843"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/abacus-abundance/"
		// 																>Abacus Abundance</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-522740
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-522740"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/collection/jade/"
		// 																>Modern Jade</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417839
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417839"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/four-leaf-clover/"
		// 																>Four Leaf Clover</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417840
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417840"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/999-pure-gold"
		// 																>999 Pure Gold</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417842
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417842"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/sk-916/"
		// 																>SK 916 Gold</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu mega-no-event
		// 													mega-sub_menu_second
		// 													mega-show-mobile
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-424039
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													sub_menu_second
		// 													show-mobile
		// 												"
		// 												id="mega-menu-item-424039"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product-category/online-exclusive/"
		// 													>Online Exclusives</a
		// 												><a
		// 													class="menu-has-image"
		// 													href="/product-category/online-exclusive/"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp"
		// 												/></a>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu mega-no-event
		// 													mega-sub_menu_second
		// 													mega-show-mobile
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417844
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													sub_menu_second
		// 													show-mobile
		// 												"
		// 												id="mega-menu-item-417844"
		// 											>
		// 												<a class="mega-menu-link"
		// 													>Past’s Campaigns<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span></a
		// 												><a class="menu-has-image" href=""
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/In-Store-Exclusives.webp"
		// 												/></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417837
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417837"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/valentines-day"
		// 																>Valentine’s Day</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-taxonomy
		// 															mega-menu-item-object-product_occasions
		// 															mega-menu-item-527932 mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-527932"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/product_occasions/for-mum"
		// 																>Celebrate Mom's Endless Love</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 										</ul>
		// 									</li>
		// 									<li class="emm_bottom_menu">
		// 										<ul class="">
		// 											<li
		// 												class="mega-menu-calendar mega-menu-item menu-calendar"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/consultation/"
		// 													tabindex="0"
		// 													>Book Appointment</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-locator mega-menu-item
		// 													menu-locator
		// 												"
		// 											>
		// 												<a class="mega-menu-link" href="/locate-us" tabindex="0"
		// 													>Store Locator</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-shipto mega-menu-item
		// 													menu-shipto
		// 												"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 													>Ship to: Singapore</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-acc mega-menu-item
		// 													menu-acc
		// 												"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/my-account"
		// 													tabindex="0"
		// 													>My Account</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-logout mega-menu-item
		// 													menu-logout
		// 												"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="https://www.skjewellery.com/my-account/customer-logout/?_wpnonce=49fc134358"
		// 													tabindex="0"
		// 													>Logout</a
		// 												>
		// 											</li>
		// 										</ul>
		// 									</li>
		// 								</ul>
		// 							</li>
		// 							<li
		// 								class="
		// 									alt-li-item
		// 									mega-menu-megamenu
		// 									mega-bridal
		// 									mega-menus-jewellery
		// 									mega-alt-has-submenu-toggle
		// 									mega-alt-has-border
		// 									mega-menu-item
		// 									mega-menu-item-type-custom
		// 									mega-menu-item-object-custom
		// 									mega-menu-item-has-children
		// 									mega-menu-item-417847
		// 									mega-alt-depth-0
		// 									mega-abc_0
		// 									bridal
		// 									menus-jewellery
		// 									alt-has-submenu-toggle alt-has-border
		// 								"
		// 								id="mega-menu-item-417847"
		// 							>
		// 								<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 									>Bridal<span
		// 										class="mega-indicator alt-mega-indicator"
		// 										data-has-click-event="true"
		// 									></span
		// 								></a>
		// 								<ul class="mega-sub-menu">
		// 									<li class="top-child-menu">
		// 										<div class="menu-back">
		// 											<div class="menu-back__icon"></div>
		// 											<div class="menu-back__text"><a href="#">Menu</a></div>
		// 										</div>
		// 										<div class="banner-item-menu"></div>
		// 									</li>
		// 									<li class="wrapper-li-item">
		// 										<ul class="child-ul">
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-only-desktop
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417848
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													only-desktop
		// 												"
		// 												id="mega-menu-item-417848"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product_bridal/engagement-rings"
		// 													>Engagement Rings<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span
		// 												></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417849
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417849"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_bridal/engagement-rings"
		// 																>Our Engagement Suite</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-only-mobile
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-417850
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													only-mobile
		// 												"
		// 												id="mega-menu-item-417850"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product_bridal/engagement-rings"
		// 													>Engagement Rings</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417851
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 												"
		// 												id="mega-menu-item-417851"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product_bridal/wedding-bands"
		// 													>Wedding Bands<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span
		// 												></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417852
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417852"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_bridal/men-wedding-bands"
		// 																>Male Wedding Bands</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417853
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417853"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_bridal/women-wedding-bands"
		// 																>Female Wedding Bands</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-only-desktop
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417854
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													only-desktop
		// 												"
		// 												id="mega-menu-item-417854"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/product_bridal/bridal-si-dian-jin"
		// 													>Si Dian Jin<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span
		// 												></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417855
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417855"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/collection/si-dian-jin/"
		// 																>All Si Dian Jin</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-only-mobile
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-417856
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													only-mobile
		// 												"
		// 												id="mega-menu-item-417856"
		// 											>
		// 												<a class="mega-menu-link" href="/collection/si-dian-jin"
		// 													>Si Dian Jin</a
		// 												>
		// 											</li>
		// 										</ul>
		// 									</li>
		// 									<li class="emm_bottom_menu">
		// 										<ul class="">
		// 											<li
		// 												class="mega-menu-calendar mega-menu-item menu-calendar"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/consultation/"
		// 													tabindex="0"
		// 													>Book Appointment</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-locator mega-menu-item
		// 													menu-locator
		// 												"
		// 											>
		// 												<a class="mega-menu-link" href="/locate-us" tabindex="0"
		// 													>Store Locator</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-shipto mega-menu-item
		// 													menu-shipto
		// 												"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 													>Ship to: Singapore</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-acc mega-menu-item
		// 													menu-acc
		// 												"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/my-account"
		// 													tabindex="0"
		// 													>My Account</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-logout mega-menu-item
		// 													menu-logout
		// 												"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="https://www.skjewellery.com/my-account/customer-logout/?_wpnonce=49fc134358"
		// 													tabindex="0"
		// 													>Logout</a
		// 												>
		// 											</li>
		// 										</ul>
		// 									</li>
		// 								</ul>
		// 							</li>
		// 							<li
		// 								class="
		// 									alt-li-item
		// 									mega-menu-megamenu
		// 									mega-menu-gifts
		// 									mega-list-layout
		// 									mega-level1
		// 									mega-has-banner
		// 									mega-alt-has-submenu-toggle
		// 									mega-alt-has-border
		// 									mega-menu-item
		// 									mega-menu-item-type-custom
		// 									mega-menu-item-object-custom
		// 									mega-menu-item-has-children
		// 									mega-menu-item-417857
		// 									mega-alt-depth-0
		// 									mega-abc_0
		// 									menu-gifts
		// 									list-layout
		// 									level1
		// 									has-banner
		// 									alt-has-submenu-toggle alt-has-border
		// 								"
		// 								id="mega-menu-item-417857"
		// 							>
		// 								<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 									>Gifts<span
		// 										class="mega-indicator alt-mega-indicator"
		// 										data-has-click-event="true"
		// 									></span
		// 								></a>
		// 								<ul class="mega-sub-menu">
		// 									<li class="top-child-menu">
		// 										<div class="menu-back">
		// 											<div class="menu-back__icon"></div>
		// 											<div class="menu-back__text"><a href="#">Menu</a></div>
		// 										</div>
		// 										<div class="banner-item-menu"></div>
		// 									</li>
		// 									<li class="wrapper-li-item">
		// 										<ul class="child-ul">
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-banner-mobile
		// 													mega-only-mobile
		// 													mega-only-desktop
		// 													mega-no-text
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-417858
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													banner-mobile
		// 													only-mobile only-desktop
		// 													no-text
		// 												"
		// 												id="mega-menu-item-417858"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#"
		// 													>gift banner</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-oas-no-hover
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417859
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													oas-no-hover
		// 												"
		// 												id="mega-menu-item-417859"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#"
		// 													>Recipients<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span
		// 												></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417860
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417860"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_recipients/for-him"
		// 																>For Him</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417861
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417861"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_recipients/for-her"
		// 																>For Her</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-oas-no-hover
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417862
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													oas-no-hover
		// 												"
		// 												id="mega-menu-item-417862"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#"
		// 													>Occasions<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span
		// 												></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417863
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417863"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_occasions/birthdays"
		// 																>Birthdays</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417864
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417864"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_occasions/anniversaries"
		// 																>Anniversaries</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417865
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417865"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_occasions/for-mum"
		// 																>For Mum</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417866
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417866"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_occasions/wedding"
		// 																>Wedding</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417867
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417867"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_occasions/kids"
		// 																>Kids</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-oas-no-hover
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417868
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													oas-no-hover
		// 												"
		// 												id="mega-menu-item-417868"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#"
		// 													>Price Range<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span
		// 												></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417869
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417869"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_price-range/gifts-under-200"
		// 																>Gifts under $200</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417870
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417870"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_price-range/gifts-under-500"
		// 																>Gifts under $500</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417871
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417871"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/product_price-range/gifts-under-1000"
		// 																>Gifts under $1000</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-421719
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 												"
		// 												id="mega-menu-item-421719"
		// 											>
		// 												<a class="mega-menu-link" href="/corporate-gifts/"
		// 													>Corporate Gifts</a
		// 												>
		// 											</li>
		// 										</ul>
		// 									</li>
		// 									<li class="emm_bottom_menu">
		// 										<ul class="">
		// 											<li
		// 												class="mega-menu-calendar mega-menu-item menu-calendar"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/consultation/"
		// 													tabindex="0"
		// 													>Book Appointment</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-locator mega-menu-item
		// 													menu-locator
		// 												"
		// 											>
		// 												<a class="mega-menu-link" href="/locate-us" tabindex="0"
		// 													>Store Locator</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-shipto mega-menu-item
		// 													menu-shipto
		// 												"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 													>Ship to: Singapore</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-acc mega-menu-item
		// 													menu-acc
		// 												"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/my-account"
		// 													tabindex="0"
		// 													>My Account</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-logout mega-menu-item
		// 													menu-logout
		// 												"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="https://www.skjewellery.com/my-account/customer-logout/?_wpnonce=49fc134358"
		// 													tabindex="0"
		// 													>Logout</a
		// 												>
		// 											</li>
		// 										</ul>
		// 									</li>
		// 								</ul>
		// 							</li>
		// 							<li
		// 								class="
		// 									alt-li-item
		// 									mega-menu-megamenu
		// 									mega-personalise
		// 									mega-menu-item
		// 									mega-menu-item-type-custom
		// 									mega-menu-item-object-custom
		// 									mega-menu-item-has-children
		// 									mega-menu-item-417872
		// 									mega-alt-depth-0
		// 									mega-abc_0
		// 									personalise
		// 								"
		// 								id="mega-menu-item-417872"
		// 							>
		// 								<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 									>Personalise<span
		// 										class="mega-indicator alt-mega-indicator"
		// 										data-has-click-event="true"
		// 									></span
		// 								></a>
		// 								<ul class="mega-sub-menu">
		// 									<li class="top-child-menu">
		// 										<div class="menu-back">
		// 											<div class="menu-back__icon"></div>
		// 											<div class="menu-back__text"><a href="#">Menu</a></div>
		// 										</div>
		// 										<div class="banner-item-menu"></div>
		// 									</li>
		// 									<li class="wrapper-li-item">
		// 										<ul class="child-ul">
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-bg_layout
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-417873
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													bg_layout
		// 												"
		// 												id="mega-menu-item-417873"
		// 											>
		// 												<a class="mega-menu-link" href="/charm-builder/"
		// 													>Charm Builder</a
		// 												><a class="menu-has-image" href="/charm-builder/"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Zodiac-Charms-Mobile-1.webp"
		// 												/></a>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-bg_layout
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-417874
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													bg_layout
		// 												"
		// 												id="mega-menu-item-417874"
		// 											>
		// 												<a class="mega-menu-link" href="/gold-bar-customiser/"
		// 													>Gold Bar Customiser</a
		// 												><a class="menu-has-image" href="/gold-bar-customiser/"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bar-Banner.webp"
		// 												/></a>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-bg_layout
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-417875
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													bg_layout
		// 												"
		// 												id="mega-menu-item-417875"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/personalised-name-necklace"
		// 													>Yours Truly</a
		// 												><a
		// 													class="menu-has-image"
		// 													href="/personalised-name-necklace"
		// 													><img
		// 														src="https://www.skjewellery.com/wp-content/uploads/2023/03/04-Personalise-3-1-1.webp"
		// 												/></a>
		// 											</li>
		// 										</ul>
		// 									</li>
		// 									<li class="emm_bottom_menu">
		// 										<ul class="">
		// 											<li
		// 												class="mega-menu-calendar mega-menu-item menu-calendar"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/consultation/"
		// 													tabindex="0"
		// 													>Book Appointment</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-locator mega-menu-item
		// 													menu-locator
		// 												"
		// 											>
		// 												<a class="mega-menu-link" href="/locate-us" tabindex="0"
		// 													>Store Locator</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-shipto mega-menu-item
		// 													menu-shipto
		// 												"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 													>Ship to: Singapore</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-acc mega-menu-item
		// 													menu-acc
		// 												"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/my-account"
		// 													tabindex="0"
		// 													>My Account</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-logout mega-menu-item
		// 													menu-logout
		// 												"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="https://www.skjewellery.com/my-account/customer-logout/?_wpnonce=49fc134358"
		// 													tabindex="0"
		// 													>Logout</a
		// 												>
		// 											</li>
		// 										</ul>
		// 									</li>
		// 								</ul>
		// 							</li>
		// 							<li
		// 								class="
		// 									alt-li-item
		// 									mega-menu-megamenu
		// 									mega-menu-highlights
		// 									mega-menus-jewellery
		// 									mega-alt-has-submenu-toggle
		// 									mega-alt-has-border
		// 									mega-menu-item
		// 									mega-menu-item-type-custom
		// 									mega-menu-item-object-custom
		// 									mega-menu-item-has-children
		// 									mega-menu-item-417876
		// 									mega-alt-depth-0
		// 									mega-abc_0
		// 									menu-highlights
		// 									menus-jewellery
		// 									alt-has-submenu-toggle alt-has-border
		// 								"
		// 								id="mega-menu-item-417876"
		// 							>
		// 								<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 									>Guides<span
		// 										class="mega-indicator alt-mega-indicator"
		// 										data-has-click-event="true"
		// 									></span
		// 								></a>
		// 								<ul class="mega-sub-menu">
		// 									<li class="top-child-menu">
		// 										<div class="menu-back">
		// 											<div class="menu-back__icon"></div>
		// 											<div class="menu-back__text"><a href="#">Menu</a></div>
		// 										</div>
		// 										<div class="banner-item-menu"></div>
		// 									</li>
		// 									<li class="wrapper-li-item">
		// 										<ul class="child-ul">
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-oas-no-hover
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417877
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													oas-no-hover
		// 												"
		// 												id="mega-menu-item-417877"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#"
		// 													>SK's World of Jewellery<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span
		// 												></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417878
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417878"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/ring-sizer-guide/"
		// 																>Ring Size Guide</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417879
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417879"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a class="mega-menu-link" href="/wedding-bands/"
		// 																>Wedding Bands Guide</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu mega-menu-item
		// 															mega-menu-item-type-post_type
		// 															mega-menu-item-object-page
		// 															mega-menu-item-417880
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417880"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/jewellery-care-guide/"
		// 																>Jewellery Care Guide</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu mega-menu-item
		// 															mega-menu-item-type-post_type
		// 															mega-menu-item-object-page
		// 															mega-menu-item-417881
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417881"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/gold-jewellery-guide/"
		// 																>Gold Jewellery Guide</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417882
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417882"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a class="mega-menu-link" href="/sidianjin/"
		// 																>Si Dian Jin (四点金) Guide</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417883
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417883"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a class="mega-menu-link" href="/gold-legacy/"
		// 																>Gold Legacy (古法金)</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417884
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417884"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/gift-guide-for-kids/"
		// 																>Gift Guide for Kids</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-oas-no-hover
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417885
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													oas-no-hover
		// 												"
		// 												id="mega-menu-item-417885"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#"
		// 													>Specialties<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span
		// 												></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417886
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417886"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="/about-lab-grown-diamonds/"
		// 																>Lab Grown Diamonds</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu mega-menu-item
		// 															mega-menu-item-type-post_type
		// 															mega-menu-item-object-page
		// 															mega-menu-item-417887
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417887"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/allstar-diamond/"
		// 																>AllStar Diamond</a
		// 															>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-megamenu
		// 													mega-no-event
		// 													mega-oas-no-hover
		// 													mega-menu-item
		// 													mega-menu-item-type-custom
		// 													mega-menu-item-object-custom
		// 													mega-menu-item-has-children
		// 													mega-menu-item-417888
		// 													mega-alt-depth-1
		// 													mega-abc_1
		// 													no-event
		// 													oas-no-hover
		// 												"
		// 												id="mega-menu-item-417888"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#"
		// 													>Keeping You Updated<span
		// 														class="mega-indicator alt-mega-indicator"
		// 														data-has-click-event="true"
		// 													></span
		// 												></a>
		// 												<ul class="mega-sub-menu">
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu mega-menu-item
		// 															mega-menu-item-type-post_type
		// 															mega-menu-item-object-page
		// 															mega-menu-item-417889
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417889"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/to-my-supermom/"
		// 																>SK Mother's Day Campaign</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu mega-menu-item
		// 															mega-menu-item-type-post_type
		// 															mega-menu-item-object-page
		// 															mega-menu-item-417890
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417890"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a
		// 																class="mega-menu-link"
		// 																href="https://www.skjewellery.com/made-with-passion/"
		// 																>SK Jewellery X Made with Passion</a
		// 															>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417891
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417891"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a class="mega-menu-link" href="/news/">News</a>
		// 														</div>
		// 													</li>
		// 													<li
		// 														class="
		// 															alt-li-item
		// 															mega-menu-megamenu
		// 															mega-menu-item
		// 															mega-menu-item-type-custom
		// 															mega-menu-item-object-custom
		// 															mega-menu-item-417892
		// 															mega-alt-depth-2
		// 															mega-abc_2
		// 														"
		// 														id="mega-menu-item-417892"
		// 													>
		// 														<div class="alt-extra-layout-box">
		// 															<a class="mega-menu-link" href="/blog">Blog</a>
		// 														</div>
		// 													</li>
		// 												</ul>
		// 											</li>
		// 										</ul>
		// 									</li>
		// 									<li class="emm_bottom_menu">
		// 										<ul class="">
		// 											<li
		// 												class="mega-menu-calendar mega-menu-item menu-calendar"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/consultation/"
		// 													tabindex="0"
		// 													>Book Appointment</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-locator mega-menu-item
		// 													menu-locator
		// 												"
		// 											>
		// 												<a class="mega-menu-link" href="/locate-us" tabindex="0"
		// 													>Store Locator</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-shipto mega-menu-item
		// 													menu-shipto
		// 												"
		// 											>
		// 												<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 													>Ship to: Singapore</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-acc mega-menu-item
		// 													menu-acc
		// 												"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="/my-account"
		// 													tabindex="0"
		// 													>My Account</a
		// 												>
		// 											</li>
		// 											<li
		// 												class="
		// 													alt-li-item
		// 													mega-menu-logout mega-menu-item
		// 													menu-logout
		// 												"
		// 											>
		// 												<a
		// 													class="mega-menu-link"
		// 													href="https://www.skjewellery.com/my-account/customer-logout/?_wpnonce=49fc134358"
		// 													tabindex="0"
		// 													>Logout</a
		// 												>
		// 											</li>
		// 										</ul>
		// 									</li>
		// 								</ul>
		// 							</li>
		// 							<li
		// 								class="
		// 									alt-li-item
		// 									mega-menu-megamenu
		// 									mega-menu-locator
		// 									mega-only-desktop
		// 									mega-menu-item
		// 									mega-menu-item-type-custom
		// 									mega-menu-item-object-custom
		// 									mega-menu-item-417893
		// 									mega-alt-depth-0
		// 									mega-abc_0
		// 									menu-locator
		// 									only-desktop
		// 								"
		// 								id="mega-menu-item-417893"
		// 							>
		// 								<a class="mega-menu-link" href="/locate-us" tabindex="0"
		// 									>Store Locator</a
		// 								>
		// 							</li>
		// 							<li
		// 								class="
		// 									alt-li-item
		// 									mega-menu-megamenu
		// 									mega-menu-shipto
		// 									mega-only-desktop
		// 									mega-menu-item
		// 									mega-menu-item-type-custom
		// 									mega-menu-item-object-custom
		// 									mega-menu-item-417894
		// 									mega-alt-depth-0
		// 									mega-abc_0
		// 									menu-shipto
		// 									only-desktop
		// 								"
		// 								id="mega-menu-item-417894"
		// 							>
		// 								<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 									>Ship to: Singapore</a
		// 								>
		// 							</li>
		// 						</ul>
		// 						<div class="section_fixed_menu">
		// 							<ul class="">
		// 								<li class="mega-menu-calendar mega-menu-item menu-calendar">
		// 									<a class="mega-menu-link" href="/consultation/" tabindex="0"
		// 										>Book Appointment</a
		// 									>
		// 								</li>
		// 								<li
		// 									class="
		// 										alt-li-item
		// 										mega-menu-locator mega-menu-item
		// 										menu-locator
		// 									"
		// 								>
		// 									<a class="mega-menu-link" href="/locate-us" tabindex="0"
		// 										>Store Locator</a
		// 									>
		// 								</li>
		// 								<li
		// 									class="
		// 										alt-li-item
		// 										mega-menu-shipto mega-menu-item
		// 										menu-shipto
		// 									"
		// 								>
		// 									<a class="mega-menu-link no-hover" href="#" tabindex="0"
		// 										>Ship to: Singapore</a
		// 									>
		// 								</li>
		// 								<li class="alt-li-item mega-menu-acc mega-menu-item menu-acc">
		// 									<a class="mega-menu-link" href="/my-account" tabindex="0"
		// 										>My Account</a
		// 									>
		// 								</li>
		// 								<li
		// 									class="
		// 										alt-li-item
		// 										mega-menu-logout mega-menu-item
		// 										menu-logout
		// 									"
		// 								>
		// 									<a class="mega-menu-link" href="/my-account/" tabindex="0"
		// 										>Login</a
		// 									>
		// 								</li>
		// 							</ul>
		// 						</div>
		// 					</div>
		// 					<!-- ECached@24/05/2023 12:39 AM -->
		// 				</div>

		// 				<div class="fake-search"></div>
		// 			</header>
		// 		</div>
		// 		<div id="sp-galleries" style="display: none">
		// 			<h5 class="gallery_title">Categories</h5>
		// 			<div class="gallery-item">
		// 				<a href="https://www.skjewellery.com/all-star/"
		// 					><img
		// 						src="https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-150x150.webp"
		// 						alt=""
		// 				/></a>
		// 				<p class="caption">
		// 					<a href="https://www.skjewellery.com/collection/allstar-diamonds/"
		// 						>Allstar Diamond</a
		// 					>
		// 				</p>
		// 			</div>
		// 			<div class="gallery-item">
		// 				<a href="https://www.skjewellery.com/star-carat/"
		// 					><img
		// 						src="https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-150x150.webp"
		// 						alt=""
		// 				/></a>
		// 				<p class="caption">
		// 					<a href="https://www.skjewellery.com/collection/star-carat-diamonds/"
		// 						>Star Carat Diamond</a
		// 					>
		// 				</p>
		// 			</div>
		// 			<div class="gallery-item">
		// 				<a href="https://www.skjewellery.com/?attachment_id=424046"
		// 					><img
		// 						src="https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-150x150.webp"
		// 						alt=""
		// 				/></a>
		// 				<p class="caption">
		// 					<a href="https://www.skjewellery.com/collection/disney-collection/"
		// 						>Disney</a
		// 					>
		// 				</p>
		// 			</div>
		// 			<div class="gallery-item">
		// 				<a href="https://www.skjewellery.com/local-k-gold/"
		// 					><img
		// 						src="https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-150x150.webp"
		// 						alt=""
		// 				/></a>
		// 				<p class="caption">
		// 					<a href="https://www.skjewellery.com/collection/loca-k-gold/"
		// 						>Loca K-Gold</a
		// 					>
		// 				</p>
		// 			</div>
		// 			<div class="gallery-item">
		// 				<a href="https://www.skjewellery.com/dancing-star-2/"
		// 					><img
		// 						src="https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-150x150.webp"
		// 						alt=""
		// 				/></a>
		// 				<p class="caption">
		// 					<a href="https://www.skjewellery.com/collection/dancing-star/"
		// 						>Dancing Star</a
		// 					>
		// 				</p>
		// 			</div>
		// 			<div class="gallery-item">
		// 				<a href="https://www.skjewellery.com/locate-us/amk-hub/oro-amare-2/"
		// 					><img
		// 						src="https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-150x150.webp"
		// 						alt=""
		// 				/></a>
		// 				<p class="caption">
		// 					<a href="https://www.skjewellery.com/collection/oro-amare/"
		// 						>Oro Amare</a
		// 					>
		// 				</p>
		// 			</div>
		// 			<div class="gallery-item">
		// 				<a href="https://www.skjewellery.com/locate-us/amk-hub/sdj-menu/"
		// 					><img
		// 						src="https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-150x150.jpg"
		// 						alt=""
		// 				/></a>
		// 				<p class="caption">
		// 					<a href="https://www.skjewellery.com/collection/si-dian-jin"
		// 						>Si Dian Jin</a
		// 					>
		// 				</p>
		// 			</div>
		// 			<div class="gallery-item">
		// 				<a href="https://www.skjewellery.com/artboard-7/"
		// 					><img
		// 						src="https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-150x150.jpg"
		// 						alt=""
		// 				/></a>
		// 				<p class="caption">
		// 					<a href="https://www.skjewellery.com/collection/gold-legacy/"
		// 						>Gold Legacy</a
		// 					>
		// 				</p>
		// 			</div>
		// 			<!-- ECached@24/05/2023 12:39 AM -->
		// 		</div>

		// 		<div class="search-v2" style="top: 136.453px"></div>
		// 		<div id="content" class="site-content pt-md-40px">
		// 			<section id="primary" class="content-area">
		// 				<main id="main" class="site-main">
		// 					<div id="product-ids" style="display: none !important">
		// 						["78185","78179","410515","87111","74607","5296","420225","411709","4074","4041","3711","366989","365956","365770","358823","358822","358808","358801","357584","357583","357582","357576","357495","357448","357447","357446","357445","357444","357443","357442","332750","332704","332628","329618","329616","329607","329561","329552","329535","329520","3203","318194","285346","248793","248791","248790","248787","248786","248785","248784","203051","203033","199361","199356","199351","198063","197993","197754","166534","161884"]
		// 					</div>
		// 					<div class="wrapper-list woocommerce">
		// 						<div class="container-fluid">
		// 							<div class="before-content-search">
		// 								<div class="container">
		// 									<!-- <div class="total_results_search">
		// 			<h1>
		// 						</h1>
		// 		</div> -->

		// 									<!-- <form  method="get" class="search-form2" action="https://www.skjewellery.com">
		// 			<label>
		// 				<i class="navbar-icons navbar-icon-search"></i>
		// 				<input type="search" class="search-field2" placeholder="Search" value="necklace" name="s">
		// 			</label>
		// 			<input type="submit" class="search-submit" value="">
		// 		</form> -->

		// 									<div class="suggested"></div>
		// 								</div>
		// 							</div>

		// 							<div class="row skj_products masory_product filter_type1">
		// 								<!-- on pc -->
		// 								<div class="mb-sidebar-left-list active">
		// 									<!-- #11088 -->

		// 									<div class="s-top">
		// 										<h1 class="s-title">search results</h1>
		// 										<div class="s-content">
		// 											<div class="text-s-content">
		// 												<form
		// 													class="search-form17"
		// 													action="https://www.skjewellery.com"
		// 													method="GET"
		// 													autocomplete="off"
		// 												>
		// 													<div class="">
		// 														<label for="s">
		// 															<input
		// 																type="text"
		// 																name="s"
		// 																id="s"
		// 																class="s-input"
		// 																value="necklace"
		// 															/>
		// 															<input
		// 																type="submit"
		// 																value="submit"
		// 																style="display: none !important"
		// 															/>
		// 															<span
		// 																class="s-icon icon-search"
		// 																id="icon-s"
		// 															></span>
		// 														</label>
		// 													</div>
		// 												</form>
		// 											</div>
		// 										</div>
		// 									</div>

		// 									<!-- End #11088 -->

		// 									<div class="total-product 1 hide-pc">60 Products</div>

		// 									<div
		// 										class="sidebar-left-list col-md-3 pl-lg-0 d-none d-md-block"
		// 									>
		// 										<form action="" id="form-filter">
		// 											<input
		// 												type="hidden"
		// 												name="price_show"
		// 												id="price_show"
		// 												class="price_show"
		// 												value="1"
		// 											/>
		// 											<input
		// 												type="hidden"
		// 												name="price_change"
		// 												id="price_change"
		// 												value=""
		// 											/>
		// 											<input type="hidden" name="ekey" id="ekey" value="" />
		// 											<input type="hidden" name="eorder" id="eorder" value="" />
		// 											<input
		// 												type="hidden"
		// 												name="eorderby"
		// 												id="eorderby"
		// 												value=""
		// 											/>
		// 											<input
		// 												type="hidden"
		// 												name="url_meta"
		// 												id="url_meta"
		// 												value=""
		// 											/>
		// 											<input
		// 												type="hidden"
		// 												name="get_prefix_block"
		// 												id="get_prefix_block"
		// 												value=""
		// 											/>
		// 											<input type="hidden" name="shop_term" value="" />

		// 											<input
		// 												type="hidden"
		// 												id="e_paged"
		// 												name="paged"
		// 												value="1"
		// 											/>
		// 											<input
		// 												type="hidden"
		// 												id="value_s"
		// 												name="value_s"
		// 												value="necklace"
		// 											/>
		// 											<div class="wrapper-term-filter">
		// 												<div class="box-fillter">
		// 													<h3 class="title-box">Category</h3>
		// 													<div class="list-term">
		// 														<div class="" style="display: none">
		// 															New Arrivals
		// 														</div>
		// 														<div class="term-item term_55">
		// 															<label for="product_cat0">
		// 																<input
		// 																	id="product_cat0"
		// 																	type="checkbox"
		// 																	name="product_cat[]"
		// 																	value="55"
		// 																/>
		// 																<span> New In </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Pendants &amp; Necklaces
		// 														</div>
		// 														<div class="term-item term_163">
		// 															<label for="product_cat1">
		// 																<input
		// 																	id="product_cat1"
		// 																	type="checkbox"
		// 																	name="product_cat[]"
		// 																	value="163"
		// 																/>
		// 																<span> Pendants &amp; Necklaces </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">Rings</div>
		// 														<div class="" style="display: none">Earrings</div>
		// 														<div class="term-item term_26">
		// 															<label for="product_cat3">
		// 																<input
		// 																	id="product_cat3"
		// 																	type="checkbox"
		// 																	name="product_cat[]"
		// 																	value="26"
		// 																/>
		// 																<span> Earrings </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">
		// 															GOLD CHAINS
		// 														</div>
		// 														<div class="term-item term_178">
		// 															<label for="product_cat4">
		// 																<input
		// 																	id="product_cat4"
		// 																	type="checkbox"
		// 																	name="product_cat[]"
		// 																	value="178"
		// 																/>
		// 																<span> Chains </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Gold Collectibles
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Bundle Deals
		// 														</div>
		// 														<div class="term-item term_494">
		// 															<label for="product_cat6">
		// 																<input
		// 																	id="product_cat6"
		// 																	type="checkbox"
		// 																	name="product_cat[]"
		// 																	value="494"
		// 																/>
		// 																<span> Bundle Deals </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">Bracelets</div>
		// 														<div class="term-item term_439">
		// 															<label for="product_cat7">
		// 																<input
		// 																	id="product_cat7"
		// 																	type="checkbox"
		// 																	name="product_cat[]"
		// 																	value="439"
		// 																/>
		// 																<span> Bracelets </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">Anklets</div>
		// 													</div>
		// 												</div>
		// 												<div class="box-fillter">
		// 													<h3 class="title-box">Collections</h3>
		// 													<div class="list-term">
		// 														<div class="" style="display: none">
		// 															Abacus Abundance
		// 														</div>
		// 														<div class="" style="display: none">
		// 															AllStar Diamonds
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Animals &amp; Pets
		// 														</div>
		// 														<div class="term-item term_886">
		// 															<label for="collection2">
		// 																<input
		// 																	id="collection2"
		// 																	type="checkbox"
		// 																	name="collection[]"
		// 																	value="886"
		// 																/>
		// 																<span> Animals &amp; Pets </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Dancing Star
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Four Leaf Clover
		// 														</div>
		// 														<div class="term-item term_628">
		// 															<label for="collection4">
		// 																<input
		// 																	id="collection4"
		// 																	type="checkbox"
		// 																	name="collection[]"
		// 																	value="628"
		// 																/>
		// 																<span> Four Leaf Clover </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Disney Collection
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Divine Glory
		// 														</div>
		// 														<div class="term-item term_686">
		// 															<label for="collection6">
		// 																<input
		// 																	id="collection6"
		// 																	type="checkbox"
		// 																	name="collection[]"
		// 																	value="686"
		// 																/>
		// 																<span> Divine Glory </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">Jade</div>
		// 														<div class="" style="display: none">
		// 															Lock and Key
		// 														</div>
		// 														<div class="term-item term_885">
		// 															<label for="collection8">
		// 																<input
		// 																	id="collection8"
		// 																	type="checkbox"
		// 																	name="collection[]"
		// 																	value="885"
		// 																/>
		// 																<span> Lock and Key </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Fit For a Queen
		// 														</div>
		// 														<div class="term-item term_870">
		// 															<label for="collection9">
		// 																<input
		// 																	id="collection9"
		// 																	type="checkbox"
		// 																	name="collection[]"
		// 																	value="870"
		// 																/>
		// 																<span> Fit For a Queen </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">Pearls</div>
		// 														<div class="term-item term_470">
		// 															<label for="collection10">
		// 																<input
		// 																	id="collection10"
		// 																	type="checkbox"
		// 																	name="collection[]"
		// 																	value="470"
		// 																/>
		// 																<span> Pearls </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Statement Chains
		// 														</div>
		// 														<div class="term-item term_892">
		// 															<label for="collection11">
		// 																<input
		// 																	id="collection11"
		// 																	type="checkbox"
		// 																	name="collection[]"
		// 																	value="892"
		// 																/>
		// 																<span> Statement Chains </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Sun, Star &amp; Moon
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Pixiu Blessings
		// 														</div>
		// 													</div>
		// 												</div>
		// 												<div class="box-fillter">
		// 													<h3 class="title-box">Material</h3>
		// 													<div class="list-term">
		// 														<div class="" style="display: none">Silver</div>
		// 														<div class="term-item term_84">
		// 															<label for="material0">
		// 																<input
		// 																	id="material0"
		// 																	type="checkbox"
		// 																	name="material[]"
		// 																	value="84"
		// 																/>
		// 																<span> Silver </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">10K Gold</div>
		// 														<div class="term-item term_461">
		// 															<label for="material1">
		// 																<input
		// 																	id="material1"
		// 																	type="checkbox"
		// 																	name="material[]"
		// 																	value="461"
		// 																/>
		// 																<span> 10K Gold </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">14K Gold</div>
		// 														<div class="term-item term_466">
		// 															<label for="material2">
		// 																<input
		// 																	id="material2"
		// 																	type="checkbox"
		// 																	name="material[]"
		// 																	value="466"
		// 																/>
		// 																<span> 14K Gold </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">18K Gold</div>
		// 														<div class="term-item term_477">
		// 															<label for="material3">
		// 																<input
		// 																	id="material3"
		// 																	type="checkbox"
		// 																	name="material[]"
		// 																	value="477"
		// 																/>
		// 																<span> 18K Gold </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">916 Gold</div>
		// 														<div class="term-item term_176">
		// 															<label for="material4">
		// 																<input
		// 																	id="material4"
		// 																	type="checkbox"
		// 																	name="material[]"
		// 																	value="176"
		// 																/>
		// 																<span> 916 Gold </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">999 Gold</div>
		// 														<div class="term-item term_453">
		// 															<label for="material5">
		// 																<input
		// 																	id="material5"
		// 																	type="checkbox"
		// 																	name="material[]"
		// 																	value="453"
		// 																/>
		// 																<span> 999 Gold </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">Platinum</div>
		// 													</div>
		// 												</div>
		// 												<div class="box-fillter">
		// 													<h3 class="title-box">Gold Type</h3>
		// 													<div class="list-term">
		// 														<div class="" style="display: none">
		// 															Sterling Silver
		// 														</div>
		// 														<div class="term-item term_506">
		// 															<label for="product_gold-type0">
		// 																<input
		// 																	id="product_gold-type0"
		// 																	type="checkbox"
		// 																	name="product_gold-type[]"
		// 																	value="506"
		// 																/>
		// 																<span> Sterling Silver </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">White Gold</div>
		// 														<div class="term-item term_462">
		// 															<label for="product_gold-type1">
		// 																<input
		// 																	id="product_gold-type1"
		// 																	type="checkbox"
		// 																	name="product_gold-type[]"
		// 																	value="462"
		// 																/>
		// 																<span> White Gold </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">Rose Gold</div>
		// 														<div class="term-item term_478">
		// 															<label for="product_gold-type2">
		// 																<input
		// 																	id="product_gold-type2"
		// 																	type="checkbox"
		// 																	name="product_gold-type[]"
		// 																	value="478"
		// 																/>
		// 																<span> Rose Gold </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Yellow Gold
		// 														</div>
		// 														<div class="term-item term_454">
		// 															<label for="product_gold-type3">
		// 																<input
		// 																	id="product_gold-type3"
		// 																	type="checkbox"
		// 																	name="product_gold-type[]"
		// 																	value="454"
		// 																/>
		// 																<span> Yellow Gold </span>
		// 															</label>
		// 														</div>
		// 													</div>
		// 												</div>
		// 												<div class="box-fillter">
		// 													<h3 class="title-box">Gemstone</h3>
		// 													<div class="list-term">
		// 														<div class="" style="display: none">Agate</div>
		// 														<div class="term-item term_335">
		// 															<label for="gemstone0">
		// 																<input
		// 																	id="gemstone0"
		// 																	type="checkbox"
		// 																	name="gemstone[]"
		// 																	value="335"
		// 																/>
		// 																<span> Agate </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Coloured Gemstones
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Lab Grown Diamonds
		// 														</div>
		// 														<div class="term-item term_897">
		// 															<label for="gemstone2">
		// 																<input
		// 																	id="gemstone2"
		// 																	type="checkbox"
		// 																	name="gemstone[]"
		// 																	value="897"
		// 																/>
		// 																<span> Lab Grown Diamonds </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">
		// 															Mined Diamonds
		// 														</div>
		// 														<div class="term-item term_73">
		// 															<label for="gemstone3">
		// 																<input
		// 																	id="gemstone3"
		// 																	type="checkbox"
		// 																	name="gemstone[]"
		// 																	value="73"
		// 																/>
		// 																<span> Mined Diamonds </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">Pearl</div>
		// 														<div class="term-item term_74">
		// 															<label for="gemstone4">
		// 																<input
		// 																	id="gemstone4"
		// 																	type="checkbox"
		// 																	name="gemstone[]"
		// 																	value="74"
		// 																/>
		// 																<span> Pearl </span>
		// 															</label>
		// 														</div>
		// 														<div class="" style="display: none">Jade</div>
		// 													</div>
		// 												</div>
		// 											</div>

		// 											<div class="box-fillter price-range2">
		// 												<h3 class="title-box">Price</h3>
		// 												<div
		// 													class="
		// 														w-default
		// 														price-slider
		// 														list-term
		// 														wrapper-price-toogle
		// 													"
		// 												>
		// 													<input
		// 														type="hidden"
		// 														name="range-price"
		// 														id="amout-price"
		// 														value="69@8614.04"
		// 													/>
		// 													<div
		// 														id="slider-range"
		// 														data-max="8614.04"
		// 														data-min="69"
		// 														class="
		// 															ui-slider
		// 															ui-corner-all
		// 															ui-slider-horizontal
		// 															ui-widget
		// 															ui-widget-content
		// 														"
		// 													>
		// 														<div
		// 															class="
		// 																ui-slider-range ui-corner-all ui-widget-header
		// 															"
		// 															style="left: 0%; width: 100%"
		// 														></div>
		// 														<span
		// 															tabindex="0"
		// 															class="
		// 																ui-slider-handle ui-corner-all ui-state-default
		// 															"
		// 															style="left: 0%"
		// 														></span
		// 														><span
		// 															tabindex="0"
		// 															class="
		// 																ui-slider-handle ui-corner-all ui-state-default
		// 															"
		// 															style="left: 100%"
		// 														></span>
		// 													</div>
		// 													<div class="value-slider">
		// 														<div id="min-value" class="min-value value-price">
		// 															69
		// 														</div>
		// 														<div id="max-value" class="max-value value-price">
		// 															8614
		// 														</div>
		// 													</div>
		// 													<input
		// 														type="number"
		// 														name="pointer-input"
		// 														class="pointer-input"
		// 														pattern="[0-9]*"
		// 														inputmode="numeric"
		// 													/>
		// 												</div>
		// 											</div>

		// 											<span class="clear-filter">
		// 												<a href="https://www.skjewellery.com?s=necklace"
		// 													>CLEAR FILTER</a
		// 												><span class="filter-close"
		// 													><span class="filter-close__content"></span></span
		// 											></span>
		// 											<div class="wc-result-filter"></div>
		// 											<input
		// 												type="hidden"
		// 												name="is-loadmore"
		// 												id="is-loadmore"
		// 												value="false"
		// 											/>
		// 										</form>

		// 										<div class="sort_by">
		// 											<label for="">
		// 												<span class="sort_by_label">Sort By:</span>
		// 												<span class="sort_by_menu">Most Similar</span>
		// 												<img
		// 													src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/images/arrow-filter-icon.png"
		// 													alt=""
		// 												/>
		// 											</label>
		// 											<ul class="sortby_delvify">
		// 												<li data-label="Latest">Most Similar</li>
		// 												<li
		// 													class="sort-item"
		// 													data-key=""
		// 													data-order=""
		// 													data-orderby="most_sold"
		// 													data-action="most_sold"
		// 													data-label="Most Sold Items"
		// 												>
		// 													Most Sold Items
		// 												</li>
		// 												<li
		// 													class="sort-item"
		// 													data-key=""
		// 													data-order=""
		// 													data-orderby="least_sold"
		// 													data-action="most_sold"
		// 													data-label="Least Sold Items"
		// 												>
		// 													Least Sold Items
		// 												</li>
		// 												<li
		// 													class="sort-item"
		// 													data-key=""
		// 													data-order=""
		// 													data-orderby="most_view"
		// 													data-action="most_sold"
		// 													data-label="Most Viewed Items"
		// 												>
		// 													Most Viewed Items
		// 												</li>
		// 												<li
		// 													class="sort-item"
		// 													data-key=""
		// 													data-order=""
		// 													data-orderby="least_view"
		// 													data-action="most_sold"
		// 													data-label="Least Viewed Items"
		// 												>
		// 													Least Viewed Items
		// 												</li>
		// 												<li
		// 													class="sort-item"
		// 													data-key=""
		// 													data-order=""
		// 													data-orderby="discounted"
		// 													data-action="most_sold"
		// 													data-label="Discounted Items"
		// 												>
		// 													Discounted Items
		// 												</li>
		// 											</ul>
		// 										</div>
		// 									</div>
		// 									<!-- end sidebar-left-list -->
		// 									<div class="mb-filter eproducts">
		// 										<header class="woocommerce-products-header header-shop-mb">
		// 											<h1
		// 												class="woocommerce-products-header__title page-title"
		// 												style="padding-top: 0px"
		// 											>
		// 												Shop All
		// 											</h1>
		// 											<div class="term-description"><p></p></div>
		// 										</header>
		// 										<!-- end on pc --->
		// 										<div class="before-list clearfix">
		// 											<div class="hide-filters">Filters</div>
		// 											<div class="total-product 2">(60)</div>
		// 											<div class="sort_by">
		// 												<label for="">
		// 													<span class="sort_by_label">Sort By:</span>
		// 													<span class="sort_by_menu">Most Similar</span>
		// 													<img
		// 														src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/images/arrow-filter-icon.png"
		// 														alt=""
		// 													/>
		// 												</label>
		// 												<ul class="sortby_delvify">
		// 													<li data-label="Latest">Most Similar</li>
		// 													<li
		// 														class="sort-item"
		// 														data-key=""
		// 														data-order=""
		// 														data-orderby="most_sold"
		// 														data-action="most_sold"
		// 														data-label="Most Sold Items"
		// 													>
		// 														Most Sold Items
		// 													</li>
		// 													<li
		// 														class="sort-item"
		// 														data-key=""
		// 														data-order=""
		// 														data-orderby="least_sold"
		// 														data-action="most_sold"
		// 														data-label="Least Sold Items"
		// 													>
		// 														Least Sold Items
		// 													</li>
		// 													<li
		// 														class="sort-item"
		// 														data-key=""
		// 														data-order=""
		// 														data-orderby="most_view"
		// 														data-action="most_sold"
		// 														data-label="Most Viewed Items"
		// 													>
		// 														Most Viewed Items
		// 													</li>
		// 													<li
		// 														class="sort-item"
		// 														data-key=""
		// 														data-order=""
		// 														data-orderby="least_view"
		// 														data-action="most_sold"
		// 														data-label="Least Viewed Items"
		// 													>
		// 														Least Viewed Items
		// 													</li>
		// 													<li
		// 														class="sort-item"
		// 														data-key=""
		// 														data-order=""
		// 														data-orderby="discounted"
		// 														data-action="most_sold"
		// 														data-label="Discounted Items"
		// 													>
		// 														Discounted Items
		// 													</li>
		// 												</ul>
		// 											</div>
		// 										</div>
		// 									</div>
		// 								</div>
		// 								<div class="list-product col-md-9 mx-0 pr-lg-0">
		// 									<header class="esort"></header>
		// 									<div class="eproducts search_product">
		// 										<div class="loading custom-loading">
		// 											<div class="loader"></div>
		// 										</div>
		// 										<input
		// 											type="hidden"
		// 											id="max_page"
		// 											name="max_page"
		// 											value="2"
		// 										/>
		// 										<input
		// 											type="hidden"
		// 											id="page_cur"
		// 											name="page_cur"
		// 											value="1"
		// 										/>
		// 										<ul class="products columns-4">
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-78185
		// 													status-publish
		// 													first
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													product_tag-only-in-stores
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													product-type-variable
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/wedding-pig-999-pure-gold-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 														product-has-tags
		// 													"
		// 													><div class="product-tags">
		// 														<span data-tag="790">Only In Stores</span
		// 														><br /></div
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/wedding-pig-999-pure-gold-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/YNM1459-H.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="78185"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/wedding-pig-999-pure-gold-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="78185"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="variable"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/wedding-pig-999-pure-gold-necklace/"
		// 															>Wedding Pig 999 Pure Gold Necklace 金猪项链</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>4,999</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															4999
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="78185"
		// 														data-gtm4wp_product_name="Wedding Pig 999 Pure Gold Necklace 金猪项链"
		// 														data-gtm4wp_product_price="4999"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/wedding-pig-999-pure-gold-necklace/"
		// 														data-gtm4wp_product_listposition="1"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel=""
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-78179
		// 													status-publish
		// 													instock
		// 													product_cat-labour-priced
		// 													product_cat-pendants-necklaces
		// 													product_tag-only-in-stores
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													product-type-variable
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/swan-love-999-pure-gold-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 														product-has-tags
		// 													"
		// 													><div class="product-tags">
		// 														<span data-tag="790">Only In Stores</span
		// 														><br /></div
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/swan-love-999-pure-gold-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/YWN420.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="78179"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/swan-love-999-pure-gold-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="78179"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="variable"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/swan-love-999-pure-gold-necklace/"
		// 															>Swan Love 999 Pure Gold Necklace 天鹅之恋项链</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>5,536</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															5616.65
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="78179"
		// 														data-gtm4wp_product_name="Swan Love 999 Pure Gold Necklace 天鹅之恋项链"
		// 														data-gtm4wp_product_price="5616.65"
		// 														data-gtm4wp_product_cat="Labour Priced"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/swan-love-999-pure-gold-necklace/"
		// 														data-gtm4wp_product_listposition="2"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel=""
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-410515
		// 													status-publish
		// 													instock
		// 													product_cat-bracelets
		// 													product_cat-bundle-sets
		// 													product_cat-everyday-bracelets
		// 													product_cat-new-in
		// 													product_cat-on-sale
		// 													product_cat-online-exclusive
		// 													product_cat-pendants-necklaces
		// 													product_tag-online-exclusive
		// 													has-post-thumbnail
		// 													sale
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-yith_bundle
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/iridescent-butterfly-pearl-necklace-and-bracelet-bundle/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 														product-has-tags
		// 													"
		// 													><div class="product-tags">
		// 														<span data-tag="333">Online Exclusive</span
		// 														><br /></div
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/iridescent-butterfly-pearl-necklace-and-bracelet-bundle/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/PN10006_PB10004.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="410515"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/iridescent-butterfly-pearl-necklace-and-bracelet-bundle/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="410515"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="yith_bundle"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/iridescent-butterfly-pearl-necklace-and-bracelet-bundle/"
		// 															>Iridescent Butterfly Pearl Necklace and Bracelet
		// 															Bundle</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="w_price"
		// 															><del aria-hidden="true"
		// 																><span class="woocommerce-Price-amount amount"
		// 																	><bdi
		// 																		><span
		// 																			class="woocommerce-Price-currencySymbol"
		// 																			>$</span
		// 																		>168</bdi
		// 																	></span
		// 																></del
		// 															>
		// 															<ins
		// 																><span class="woocommerce-Price-amount amount"
		// 																	><bdi
		// 																		><span
		// 																			class="woocommerce-Price-currencySymbol"
		// 																			>$</span
		// 																		>99</bdi
		// 																	></span
		// 																></ins
		// 															></span
		// 														><span class="sale-percent"
		// 															><span data-pecent="-41%"></span></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															99
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="410515"
		// 														data-gtm4wp_product_name="Iridescent Butterfly Pearl Necklace and Bracelet Bundle"
		// 														data-gtm4wp_product_price="99"
		// 														data-gtm4wp_product_cat="Bracelets/Everyday Bracelets"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/iridescent-butterfly-pearl-necklace-and-bracelet-bundle/"
		// 														data-gtm4wp_product_listposition="3"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel=""
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-87111
		// 													status-publish
		// 													last
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-on-sale
		// 													product_cat-online-exclusive
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													sale
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/allure-love-999-pure-gold-pendant/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/allure-love-999-pure-gold-pendant/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/YPQ584.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="87111"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/allure-love-999-pure-gold-pendant/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="87111"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/allure-love-999-pure-gold-pendant/"
		// 															>Allure Love 999 Pure Gold Pendant</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="w_price"
		// 															><del aria-hidden="true"
		// 																><span class="woocommerce-Price-amount amount"
		// 																	><bdi
		// 																		><span
		// 																			class="woocommerce-Price-currencySymbol"
		// 																			>$</span
		// 																		>299</bdi
		// 																	></span
		// 																></del
		// 															>
		// 															<ins
		// 																><span class="woocommerce-Price-amount amount"
		// 																	><bdi
		// 																		><span
		// 																			class="woocommerce-Price-currencySymbol"
		// 																			>$</span
		// 																		>199</bdi
		// 																	></span
		// 																></ins
		// 															></span
		// 														><span class="sale-percent"
		// 															><span data-pecent="-33%"></span></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															199
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="87111"
		// 														data-gtm4wp_product_name="Allure Love 999 Pure Gold Pendant"
		// 														data-gtm4wp_product_price="199"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/allure-love-999-pure-gold-pendant/"
		// 														data-gtm4wp_product_listposition="4"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="2"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-74607
		// 													status-publish
		// 													first
		// 													instock
		// 													product_cat-diamond-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/starry-ribbon-diamond-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/starry-ribbon-diamond-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2020/08/SDC01058-700x700.jpg"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="74607"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/starry-ribbon-diamond-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="74607"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/starry-ribbon-diamond-necklace/"
		// 															>Starry Ribbon Diamond Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>669</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															669
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="74607"
		// 														data-gtm4wp_product_name="Starry Ribbon Diamond Necklace"
		// 														data-gtm4wp_product_price="669"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Diamond Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/starry-ribbon-diamond-necklace/"
		// 														data-gtm4wp_product_listposition="5"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-5296
		// 													status-publish
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-labour-priced
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-variable
		// 													has-default-attributes
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-wish-upon-a-star-gold-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-wish-upon-a-star-gold-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2020/01/bn451_1-7-700x700.jpg"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="5296"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-wish-upon-a-star-gold-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="5296"
		// 															data-tinv-wl-productvariation="106126"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="variable"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<input
		// 															name="attribute_gold-weight"
		// 															type="hidden"
		// 															value="2.69g"
		// 														/>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-wish-upon-a-star-gold-necklace/"
		// 															>SK 916 Wish Upon a Star Gold Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>386</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															385.97
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="5296"
		// 														data-gtm4wp_product_name="SK 916 Wish Upon a Star Gold Necklace"
		// 														data-gtm4wp_product_price="385.97"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-wish-upon-a-star-gold-necklace/"
		// 														data-gtm4wp_product_listposition="6"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel=""
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-420225
		// 													status-publish
		// 													instock
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/rolling-barrel-14k-rose-gold-pendant/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/rolling-barrel-14k-rose-gold-pendant/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/03/KN10003-1_1.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="420225"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/rolling-barrel-14k-rose-gold-pendant/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="420225"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/rolling-barrel-14k-rose-gold-pendant/"
		// 															>Rolling Barrel 14K Rose Gold Pendant</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>339</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															339
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="420225"
		// 														data-gtm4wp_product_name="Rolling Barrel 14K Rose Gold Pendant"
		// 														data-gtm4wp_product_price="339"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/rolling-barrel-14k-rose-gold-pendant/"
		// 														data-gtm4wp_product_listposition="7"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="2"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-411709
		// 													status-publish
		// 													last
		// 													instock
		// 													product_cat-bracelets
		// 													product_cat-bundle-sets
		// 													product_cat-earrings
		// 													product_cat-everyday-bracelets
		// 													product_cat-new-in
		// 													product_cat-on-sale
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													sale
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-yith_bundle
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/radiant-hearts-pearl-bundle/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/radiant-hearts-pearl-bundle/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/01/PN10003_PB10002.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="411709"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/radiant-hearts-pearl-bundle/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="411709"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="yith_bundle"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/radiant-hearts-pearl-bundle/"
		// 															>Radiant Hearts Pearl Bundle</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="w_price"
		// 															><del aria-hidden="true"
		// 																><span class="woocommerce-Price-amount amount"
		// 																	><bdi
		// 																		><span
		// 																			class="woocommerce-Price-currencySymbol"
		// 																			>$</span
		// 																		>168</bdi
		// 																	></span
		// 																></del
		// 															>
		// 															<ins
		// 																><span class="woocommerce-Price-amount amount"
		// 																	><bdi
		// 																		><span
		// 																			class="woocommerce-Price-currencySymbol"
		// 																			>$</span
		// 																		>89</bdi
		// 																	></span
		// 																></ins
		// 															></span
		// 														><span class="sale-percent"
		// 															><span data-pecent="-47%"></span></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															89
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="411709"
		// 														data-gtm4wp_product_name="Radiant Hearts Pearl Bundle"
		// 														data-gtm4wp_product_price="89"
		// 														data-gtm4wp_product_cat="Bracelets/Everyday Bracelets"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/radiant-hearts-pearl-bundle/"
		// 														data-gtm4wp_product_listposition="8"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel=""
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-4074
		// 													status-publish
		// 													first
		// 													instock
		// 													product_cat-diamond-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/tyler-white-gold-diamond-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/tyler-white-gold-diamond-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2020/01/sdc00982-7-700x700.jpg"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="4074"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/tyler-white-gold-diamond-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="4074"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/tyler-white-gold-diamond-necklace/"
		// 															>Tyler White Gold Diamond Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>239</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															239
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="4074"
		// 														data-gtm4wp_product_name="Tyler White Gold Diamond Necklace"
		// 														data-gtm4wp_product_price="239"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Diamond Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/tyler-white-gold-diamond-necklace/"
		// 														data-gtm4wp_product_listposition="9"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="2"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-4041
		// 													status-publish
		// 													instock
		// 													product_cat-diamond-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/dussa-white-gold-diamond-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/dussa-white-gold-diamond-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2020/01/sdc00980-7-700x700.jpg"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="4041"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/dussa-white-gold-diamond-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="4041"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/dussa-white-gold-diamond-necklace/"
		// 															>Dussa White Gold Diamond Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>249</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															249
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="4041"
		// 														data-gtm4wp_product_name="Dussa White Gold Diamond Necklace"
		// 														data-gtm4wp_product_price="249"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Diamond Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/dussa-white-gold-diamond-necklace/"
		// 														data-gtm4wp_product_listposition="10"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-3711
		// 													status-publish
		// 													instock
		// 													product_cat-diamond-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/jassy-white-gold-diamond-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/jassy-white-gold-diamond-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2020/01/sdc00954-7-700x700.jpg"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="3711"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/jassy-white-gold-diamond-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="3711"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/jassy-white-gold-diamond-necklace/"
		// 															>Jassy White Gold Diamond Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>249</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															249
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="3711"
		// 														data-gtm4wp_product_name="Jassy White Gold Diamond Necklace"
		// 														data-gtm4wp_product_price="249"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Diamond Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/jassy-white-gold-diamond-necklace/"
		// 														data-gtm4wp_product_listposition="11"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-366989
		// 													status-publish
		// 													last
		// 													instock
		// 													product_cat-bracelets
		// 													product_cat-bundle-sets
		// 													product_cat-earrings
		// 													product_cat-on-sale
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													sale
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-yith_bundle
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/1-1-vermilion-luck-red-agate-pearl-bundle/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/1-1-vermilion-luck-red-agate-pearl-bundle/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/PB092_PC284_SE446.jpg-1.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="366989"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/1-1-vermilion-luck-red-agate-pearl-bundle/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="366989"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="yith_bundle"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/1-1-vermilion-luck-red-agate-pearl-bundle/"
		// 															>Vermilion Luck Red Agate &amp; Pearl Bundle</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="w_price"
		// 															><del aria-hidden="true"
		// 																><span class="woocommerce-Price-amount amount"
		// 																	><bdi
		// 																		><span
		// 																			class="woocommerce-Price-currencySymbol"
		// 																			>$</span
		// 																		>237</bdi
		// 																	></span
		// 																></del
		// 															>
		// 															<ins
		// 																><span class="woocommerce-Price-amount amount"
		// 																	><bdi
		// 																		><span
		// 																			class="woocommerce-Price-currencySymbol"
		// 																			>$</span
		// 																		>99</bdi
		// 																	></span
		// 																></ins
		// 															></span
		// 														><span class="sale-percent"
		// 															><span data-pecent="-58%"></span></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															99
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="366989"
		// 														data-gtm4wp_product_name="Vermilion Luck Red Agate &amp; Pearl Bundle"
		// 														data-gtm4wp_product_price="99"
		// 														data-gtm4wp_product_cat="On Sale"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/1-1-vermilion-luck-red-agate-pearl-bundle/"
		// 														data-gtm4wp_product_listposition="12"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel=""
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-365956
		// 													status-publish
		// 													first
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-new-in
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/999-pure-gold-woven-ribbon-medley-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/999-pure-gold-woven-ribbon-medley-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/YNM1946.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="365956"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/999-pure-gold-woven-ribbon-medley-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="365956"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/999-pure-gold-woven-ribbon-medley-necklace/"
		// 															>999 Pure Gold Woven Ribbon Medley Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>759</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															759
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="365956"
		// 														data-gtm4wp_product_name="999 Pure Gold Woven Ribbon Medley Necklace"
		// 														data-gtm4wp_product_price="759"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/999-pure-gold-woven-ribbon-medley-necklace/"
		// 														data-gtm4wp_product_listposition="13"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="2"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-365770
		// 													status-publish
		// 													instock
		// 													product_cat-chains product_cat-labour-priced
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-variable
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-intricity-gold-chain/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-intricity-gold-chain/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2022/05/BC057-700x700.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="365770"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-intricity-gold-chain/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="365770"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="variable"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-intricity-gold-chain/"
		// 															>SK 916 Intricity Gold Chain</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>854</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															854.39
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="365770"
		// 														data-gtm4wp_product_name="SK 916 Intricity Gold Chain"
		// 														data-gtm4wp_product_price="854.39"
		// 														data-gtm4wp_product_cat="Labour Priced"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-intricity-gold-chain/"
		// 														data-gtm4wp_product_listposition="14"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel=""
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-358823
		// 													status-publish
		// 													instock
		// 													product_cat-new-in product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/tri-splendor-pearl-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/tri-splendor-pearl-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/PC281-V2.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="358823"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/tri-splendor-pearl-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="358823"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/tri-splendor-pearl-necklace/"
		// 															>Tri Splendor Pearl Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>299</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															299
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="358823"
		// 														data-gtm4wp_product_name="Tri Splendor Pearl Necklace"
		// 														data-gtm4wp_product_price="299"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/tri-splendor-pearl-necklace/"
		// 														data-gtm4wp_product_listposition="15"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-358822
		// 													status-publish
		// 													last
		// 													instock
		// 													product_cat-new-in product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/pure-splendor-pearl-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/pure-splendor-pearl-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/PC281-V1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="358822"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/pure-splendor-pearl-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="358822"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/pure-splendor-pearl-necklace/"
		// 															>Pure Splendor Pearl Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>299</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															299
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="358822"
		// 														data-gtm4wp_product_name="Pure Splendor Pearl Necklace"
		// 														data-gtm4wp_product_price="299"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/pure-splendor-pearl-necklace/"
		// 														data-gtm4wp_product_listposition="16"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="3"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-358808
		// 													status-publish
		// 													first
		// 													instock
		// 													product_cat-diamond-pendants
		// 													product_cat-new-in
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/starlett-his-grace-diamond-pendant/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/starlett-his-grace-diamond-pendant/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2022/08/LGDP00232-700x700.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="358808"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/starlett-his-grace-diamond-pendant/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="358808"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/starlett-his-grace-diamond-pendant/"
		// 															>Starlett His Grace Diamond Pendant</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>399</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															399
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="358808"
		// 														data-gtm4wp_product_name="Starlett His Grace Diamond Pendant"
		// 														data-gtm4wp_product_price="399"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Diamond Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/starlett-his-grace-diamond-pendant/"
		// 														data-gtm4wp_product_listposition="17"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="3"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-358801
		// 													status-publish
		// 													instock
		// 													product_cat-diamond-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/starlett-crystal-dew-diamond-pendant/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/starlett-crystal-dew-diamond-pendant/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2022/08/LGDP00120-700x700.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="358801"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/starlett-crystal-dew-diamond-pendant/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="358801"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/starlett-crystal-dew-diamond-pendant/"
		// 															>Starlett Crystal Dew Diamond Pendant</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>369</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															369
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="358801"
		// 														data-gtm4wp_product_name="Starlett Crystal Dew Diamond Pendant"
		// 														data-gtm4wp_product_price="369"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Diamond Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/starlett-crystal-dew-diamond-pendant/"
		// 														data-gtm4wp_product_listposition="18"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-357584
		// 													status-publish
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/999-pure-gold-millie-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/999-pure-gold-millie-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/YNM1817-H.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="357584"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/999-pure-gold-millie-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="357584"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/999-pure-gold-millie-necklace/"
		// 															>999 Pure Gold Millie Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>599</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															599
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="357584"
		// 														data-gtm4wp_product_name="999 Pure Gold Millie Necklace"
		// 														data-gtm4wp_product_price="599"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/999-pure-gold-millie-necklace/"
		// 														data-gtm4wp_product_listposition="19"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-357583
		// 													status-publish
		// 													last
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/999-pure-gold-hexahedral-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/999-pure-gold-hexahedral-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/YNM1816-H.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="357583"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/999-pure-gold-hexahedral-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="357583"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/999-pure-gold-hexahedral-necklace/"
		// 															>999 Pure Gold Hexahedral Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>599</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															599
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="357583"
		// 														data-gtm4wp_product_name="999 Pure Gold Hexahedral Necklace"
		// 														data-gtm4wp_product_price="599"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/999-pure-gold-hexahedral-necklace/"
		// 														data-gtm4wp_product_listposition="20"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-357582
		// 													status-publish
		// 													first
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/999-pure-gold-octavius-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/999-pure-gold-octavius-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/YNM1815-H.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="357582"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/999-pure-gold-octavius-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="357582"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/999-pure-gold-octavius-necklace/"
		// 															>999 Pure Gold Octavius Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>599</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															599
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="357582"
		// 														data-gtm4wp_product_name="999 Pure Gold Octavius Necklace"
		// 														data-gtm4wp_product_price="599"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/999-pure-gold-octavius-necklace/"
		// 														data-gtm4wp_product_listposition="21"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-357576
		// 													status-publish
		// 													instock
		// 													product_cat-chains product_cat-labour-priced
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-variable
		// 													has-default-attributes
		// 													product-has-hover
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/999-pure-gold-curb-link-chain-thin/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/999-pure-gold-curb-link-chain-thin/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2022/08/YCL001_1Thin-700x700.jpg.webp" /><img
		// 															width="700"
		// 															height="700"
		// 															class="product-thumbnail-hover"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2020/09/YCL001-700x700.jpg.webp"
		// 															alt=""
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="357576"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/999-pure-gold-curb-link-chain-thin/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="357576"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="variable"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<input
		// 															name="attribute_length-999-gold-weight"
		// 															type="hidden"
		// 															value="41CM, 3.19g"
		// 														/>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/999-pure-gold-curb-link-chain-thin/"
		// 															>999 Pure Gold Curb Link Chain (THIN)</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>320</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															320.28
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="357576"
		// 														data-gtm4wp_product_name="999 Pure Gold Curb Link Chain (THIN)"
		// 														data-gtm4wp_product_price="320.28"
		// 														data-gtm4wp_product_cat="Labour Priced"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/999-pure-gold-curb-link-chain-thin/"
		// 														data-gtm4wp_product_listposition="22"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel=""
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-357495
		// 													status-publish
		// 													instock
		// 													product_cat-chains product_cat-labour-priced
		// 													has-post-thumbnail
		// 													sale
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-variable
		// 													has-default-attributes
		// 													product-has-hover
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-spiga-gold-chain/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-spiga-gold-chain/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2022/08/BC016-700x700.webp" /><img
		// 															width="700"
		// 															height="700"
		// 															class="product-thumbnail-hover"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2020/09/BC016-4.35g-10.51g-700x700.jpg.webp"
		// 															alt=""
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="357495"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-spiga-gold-chain/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="357495"
		// 															data-tinv-wl-productvariation="411758"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="variable"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<input
		// 															name="attribute_length-weight"
		// 															type="hidden"
		// 															value="40.5CM, 5.66g"
		// 														/>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-spiga-gold-chain/"
		// 															>SK 916 Spiga Gold Chain</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="w_price">
		// 															<span class="woocommerce-Price-amount amount"
		// 																><bdi
		// 																	><span
		// 																		class="woocommerce-Price-currencySymbol"
		// 																		>$</span
		// 																	>568</bdi
		// 																></span
		// 															></span
		// 														><span class="sale-percent s-hide-sale-percent"
		// 															><span data-pecent="-0%"></span></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															567.52
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="357495"
		// 														data-gtm4wp_product_name="SK 916 Spiga Gold Chain"
		// 														data-gtm4wp_product_price="567.52"
		// 														data-gtm4wp_product_cat="Labour Priced"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-spiga-gold-chain/"
		// 														data-gtm4wp_product_listposition="23"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel=""
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-357448
		// 													status-publish
		// 													last
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-to-the-point-gold-medley-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-to-the-point-gold-medley-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN973_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="357448"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-to-the-point-gold-medley-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="357448"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-to-the-point-gold-medley-necklace/"
		// 															>SK 916 To the Point Gold Medley Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>579</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															579
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="357448"
		// 														data-gtm4wp_product_name="SK 916 To the Point Gold Medley Necklace"
		// 														data-gtm4wp_product_price="579"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-to-the-point-gold-medley-necklace/"
		// 														data-gtm4wp_product_listposition="24"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-357447
		// 													status-publish
		// 													first
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-daisy-ring-gold-medley-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-daisy-ring-gold-medley-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN968_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="357447"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-daisy-ring-gold-medley-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="357447"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-daisy-ring-gold-medley-necklace/"
		// 															>SK 916 Daisy Ring Gold Medley Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>549</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															549
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="357447"
		// 														data-gtm4wp_product_name="SK 916 Daisy Ring Gold Medley Necklace"
		// 														data-gtm4wp_product_price="549"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-daisy-ring-gold-medley-necklace/"
		// 														data-gtm4wp_product_listposition="25"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="2"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-357446
		// 													status-publish
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-odessa-gold-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-odessa-gold-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN966_V2_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="357446"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-odessa-gold-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="357446"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-odessa-gold-necklace/"
		// 															>SK 916 Odessa Gold Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>539</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															539
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="357446"
		// 														data-gtm4wp_product_name="SK 916 Odessa Gold Necklace"
		// 														data-gtm4wp_product_price="539"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-odessa-gold-necklace/"
		// 														data-gtm4wp_product_listposition="26"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="2"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-357445
		// 													status-publish
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-ophelia-gold-medley-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-ophelia-gold-medley-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN966_V1_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="357445"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-ophelia-gold-medley-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="357445"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-ophelia-gold-medley-necklace/"
		// 															>SK 916 Ophelia Gold Medley Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>559</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															559
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="357445"
		// 														data-gtm4wp_product_name="SK 916 Ophelia Gold Medley Necklace"
		// 														data-gtm4wp_product_price="559"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-ophelia-gold-medley-necklace/"
		// 														data-gtm4wp_product_listposition="27"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-357444
		// 													status-publish
		// 													last
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-hanging-heart-gold-medley-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-hanging-heart-gold-medley-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN964_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="357444"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-hanging-heart-gold-medley-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="357444"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-hanging-heart-gold-medley-necklace/"
		// 															>SK 916 Hanging Heart Gold Medley Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>539</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															539
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="357444"
		// 														data-gtm4wp_product_name="SK 916 Hanging Heart Gold Medley Necklace"
		// 														data-gtm4wp_product_price="539"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-hanging-heart-gold-medley-necklace/"
		// 														data-gtm4wp_product_listposition="28"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-357443
		// 													status-publish
		// 													first
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-millennium-octagon-gold-medley-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-millennium-octagon-gold-medley-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN961_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="357443"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-millennium-octagon-gold-medley-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="357443"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-millennium-octagon-gold-medley-necklace/"
		// 															>SK 916 Millennium Octagon Gold Medley Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>599</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															599
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="357443"
		// 														data-gtm4wp_product_name="SK 916 Millennium Octagon Gold Medley Necklace"
		// 														data-gtm4wp_product_price="599"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-millennium-octagon-gold-medley-necklace/"
		// 														data-gtm4wp_product_listposition="29"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-357442
		// 													status-publish
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-clip-it-gold-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-clip-it-gold-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN957_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="357442"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-clip-it-gold-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="357442"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-clip-it-gold-necklace/"
		// 															>SK 916 Clip It Gold Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>529</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															529
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="357442"
		// 														data-gtm4wp_product_name="SK 916 Clip It Gold Necklace"
		// 														data-gtm4wp_product_price="529"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-clip-it-gold-necklace/"
		// 														data-gtm4wp_product_listposition="30"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-332750
		// 													status-publish
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-supernova-pendant/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-supernova-pendant/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BP1707_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="332750"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-supernova-pendant/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="332750"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-supernova-pendant/"
		// 															>SK 916 Supernova Pendant</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>99</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															99
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="332750"
		// 														data-gtm4wp_product_name="SK 916 Supernova Pendant"
		// 														data-gtm4wp_product_price="99"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-supernova-pendant/"
		// 														data-gtm4wp_product_listposition="31"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-332704
		// 													status-publish
		// 													last
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-dancing-queen-gold-medley-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-dancing-queen-gold-medley-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN984_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="332704"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-dancing-queen-gold-medley-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="332704"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-dancing-queen-gold-medley-necklace/"
		// 															>SK 916 Dancing Queen Gold Medley Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>529</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															529
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="332704"
		// 														data-gtm4wp_product_name="SK 916 Dancing Queen Gold Medley Necklace"
		// 														data-gtm4wp_product_price="529"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-dancing-queen-gold-medley-necklace/"
		// 														data-gtm4wp_product_listposition="32"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-332628
		// 													status-publish
		// 													first
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-starrise-gold-medley-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-starrise-gold-medley-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN955_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="332628"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-starrise-gold-medley-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="332628"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-starrise-gold-medley-necklace/"
		// 															>SK 916 Starrise Gold Medley Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>579</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															579
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="332628"
		// 														data-gtm4wp_product_name="SK 916 Starrise Gold Medley Necklace"
		// 														data-gtm4wp_product_price="579"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-starrise-gold-medley-necklace/"
		// 														data-gtm4wp_product_listposition="33"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-329618
		// 													status-publish
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-embold-clover-gold-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-embold-clover-gold-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN991_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="329618"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-embold-clover-gold-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="329618"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-embold-clover-gold-necklace/"
		// 															>SK 916 Embold Clover Gold Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>539</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															539
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="329618"
		// 														data-gtm4wp_product_name="SK 916 Embold Clover Gold Necklace"
		// 														data-gtm4wp_product_price="539"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-embold-clover-gold-necklace/"
		// 														data-gtm4wp_product_listposition="34"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-329616
		// 													status-publish
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-shamrock-ilu-gold-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-shamrock-ilu-gold-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN990_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="329616"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-shamrock-ilu-gold-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="329616"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-shamrock-ilu-gold-necklace/"
		// 															>SK 916 Shamrock ILU Gold Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>559</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															559
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="329616"
		// 														data-gtm4wp_product_name="SK 916 Shamrock ILU Gold Necklace"
		// 														data-gtm4wp_product_price="559"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-shamrock-ilu-gold-necklace/"
		// 														data-gtm4wp_product_listposition="35"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-329607
		// 													status-publish
		// 													last
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-corlette-gold-medley-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-corlette-gold-medley-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN983_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="329607"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-corlette-gold-medley-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="329607"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-corlette-gold-medley-necklace/"
		// 															>SK 916 Corlette Gold Medley Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>579</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															579
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="329607"
		// 														data-gtm4wp_product_name="SK 916 Corlette Gold Medley Necklace"
		// 														data-gtm4wp_product_price="579"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-corlette-gold-medley-necklace/"
		// 														data-gtm4wp_product_listposition="36"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-329561
		// 													status-publish
		// 													first
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-asterisk-clover-gold-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-asterisk-clover-gold-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN981_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="329561"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-asterisk-clover-gold-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="329561"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-asterisk-clover-gold-necklace/"
		// 															>SK 916 Asterisk Clover Gold Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>519</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															519
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="329561"
		// 														data-gtm4wp_product_name="SK 916 Asterisk Clover Gold Necklace"
		// 														data-gtm4wp_product_price="519"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-asterisk-clover-gold-necklace/"
		// 														data-gtm4wp_product_listposition="37"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="1"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-329552
		// 													status-publish
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-clover-dream-gold-medley-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-clover-dream-gold-medley-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN976_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="329552"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-clover-dream-gold-medley-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="329552"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-clover-dream-gold-medley-necklace/"
		// 															>SK 916 Clover Dream Gold Medley Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>579</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															579
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="329552"
		// 														data-gtm4wp_product_name="SK 916 Clover Dream Gold Medley Necklace"
		// 														data-gtm4wp_product_price="579"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-clover-dream-gold-medley-necklace/"
		// 														data-gtm4wp_product_listposition="38"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="3"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-329535
		// 													status-publish
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-ripple-clover-gold-medley-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-ripple-clover-gold-medley-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN963_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="329535"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-ripple-clover-gold-medley-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="329535"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-ripple-clover-gold-medley-necklace/"
		// 															>SK 916 Ripple Clover Gold Medley Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>589</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															589
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="329535"
		// 														data-gtm4wp_product_name="SK 916 Ripple Clover Gold Medley Necklace"
		// 														data-gtm4wp_product_price="589"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-ripple-clover-gold-medley-necklace/"
		// 														data-gtm4wp_product_listposition="39"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="2"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 											<li
		// 												class="
		// 													item_sdj_product
		// 													product
		// 													type-product
		// 													post-329520
		// 													status-publish
		// 													last
		// 													instock
		// 													product_cat-gold-pendants
		// 													product_cat-pendants-necklaces
		// 													has-post-thumbnail
		// 													shipping-taxable
		// 													purchasable
		// 													product-type-simple
		// 												"
		// 											>
		// 												<a
		// 													href="https://www.skjewellery.com/product/sk-916-bold-clover-gold-medley-necklace/"
		// 													class="
		// 														woocommerce-LoopProduct-link
		// 														woocommerce-loop-product__link
		// 													"
		// 												></a>
		// 												<div class="imagewrapper image-wrapper" data-xprice="">
		// 													<a
		// 														href="https://www.skjewellery.com/product/sk-916-bold-clover-gold-medley-necklace/"
		// 														class="
		// 															woocommerce-LoopProduct-link
		// 															woocommerce-loop-product__link
		// 														"
		// 														><img
		// 															width="700"
		// 															height="700"
		// 															src="https://www.skjewellery.com/wp-content/uploads/2023/05/BN960_1.jpg.webp"
		// 													/></a>
		// 													<div
		// 														class="
		// 															tinv-wraper
		// 															woocommerce
		// 															tinv-wishlist
		// 															tinvwl-shortcode-add-to-cart
		// 															tinvwl-loop-button-wrapper
		// 															tinvwl-woocommerce_before_shop_loop_item_title
		// 														"
		// 														data-tinvwl_product_id="329520"
		// 													>
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-bold-clover-gold-medley-necklace/"
		// 															class="
		// 																woocommerce-LoopProduct-link
		// 																woocommerce-loop-product__link
		// 															"
		// 														>
		// 														</a
		// 														><a
		// 															role="button"
		// 															tabindex="0"
		// 															name="add-to-wishlist"
		// 															aria-label="Add to Wishlist"
		// 															class="
		// 																tinvwl_add_to_wishlist_button tinvwl-icon-custom
		// 																no-txt
		// 																tinvwl-position-shortcode tinvwl-loop
		// 															"
		// 															data-tinv-wl-list="[]"
		// 															data-tinv-wl-product="329520"
		// 															data-tinv-wl-productvariation="0"
		// 															data-tinv-wl-productvariations="[0]"
		// 															data-tinv-wl-producttype="simple"
		// 															data-tinv-wl-action="addto"
		// 															><img
		// 																src="https://www.skjewellery.com/wp-content/uploads/2022/02/wishlist.png.webp"
		// 																alt="Add to Wishlist"
		// 															/>
		// 														</a>
		// 														<div class="tinv-wishlist-clear"></div>
		// 														<div class="tinvwl-tooltip">Add to Wishlist</div>
		// 													</div>
		// 												</div>
		// 												<div class="wapper_shop_item">
		// 													<h2 class="woocommerce-loop-product__title">
		// 														<a
		// 															href="https://www.skjewellery.com/product/sk-916-bold-clover-gold-medley-necklace/"
		// 															>SK 916 Bold Clover Gold Medley Necklace</a
		// 														>
		// 													</h2>
		// 													<span class="price">
		// 														<span class="woocommerce-Price-amount amount"
		// 															><bdi
		// 																><span class="woocommerce-Price-currencySymbol"
		// 																	>$</span
		// 																>579</bdi
		// 															></span
		// 														><!-- hoolah COLLECTION WIDGET -->
		// 														<div
		// 															class="hoolah_collection_data"
		// 															data-currency="SGD"
		// 															style="display: none"
		// 														>
		// 															579
		// 														</div>
		// 														<!-- End hoolah COLLECTION WIDGET -->
		// 													</span>
		// 													<span
		// 														class="gtm4wp_productdata"
		// 														style="display: none; visibility: hidden"
		// 														data-gtm4wp_product_id="329520"
		// 														data-gtm4wp_product_name="SK 916 Bold Clover Gold Medley Necklace"
		// 														data-gtm4wp_product_price="579"
		// 														data-gtm4wp_product_cat="Pendants &amp; Necklaces/Gold Pendants"
		// 														data-gtm4wp_product_url="https://www.skjewellery.com/product/sk-916-bold-clover-gold-medley-necklace/"
		// 														data-gtm4wp_product_listposition="40"
		// 														data-gtm4wp_productlist_name="Search Results"
		// 														data-gtm4wp_product_stocklevel="2"
		// 														data-gtm4wp_product_brand=""
		// 													></span>
		// 												</div>
		// 											</li>
		// 										</ul>
		// 									</div>
		// 									<!-- end e-products -->
		// 									<div class="list-product-page">
		// 										<div class="e-pagination">
		// 											<span
		// 												aria-current="page"
		// 												class="ffffffffff page-numbers current"
		// 												>1</span
		// 											>
		// 											<a
		// 												class="page-numbers"
		// 												href="https://www.skjewellery.com/page/2/?s=necklace"
		// 												>2</a
		// 											>
		// 											<a
		// 												class="next page-numbers"
		// 												href="https://www.skjewellery.com/page/2/?s=necklace"
		// 												>Next Page
		// 												<span class="skinny__arrow">
		// 													<span class="skinny__arrow-top"></span>
		// 													<span class="skinny__arrow-bottom"></span> </span
		// 											></a>
		// 										</div>
		// 									</div>
		// 									<!-- Tee #285431 SK Search Results -->
		// 									<div class="loadmore-product__wrapper">
		// 										<div class="loadmore-product__info">
		// 											<span>You've Viewed 40 of 60 Products</span>
		// 										</div>
		// 										<a href="" class="loadmore__product-button" data-paged="1">
		// 											<span>Load more</span>
		// 										</a>
		// 									</div>
		// 								</div>
		// 								<!-- end list-product -->
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</main>
		// 				<!-- #main -->
		// 			</section>
		// 			<!-- #primary -->
		// 		</div>
		// 		<!-- #content -->
		// 		<footer id="colophon" class="site-footer pt-35px">
		// 			<div class="container-fluid">
		// 				<div class="row d-block d-sm-none">
		// 					<section class="col-12 accordion text-left text-md-left pt-15px">
		// 						<a
		// 							href="#"
		// 							class="footer-title agp-normal mb-20px fs-16"
		// 							data-toggle="collapse"
		// 							data-target="#collapse-footer-company"
		// 							>Our Company
		// 							<div class="accordion-toggle-icon">
		// 								<span class="accordion-toggle-icon-close svl-icon">
		// 									<i aria-hidden="true" class="fas fa-chevron-down"></i>
		// 								</span>
		// 								<span class="accordion-toggle-icon-open svl-icon">
		// 									<i aria-hidden="true" class="fas fa-chevron-up"></i>
		// 								</span>
		// 							</div>
		// 						</a>
		// 						<div class="menu-footer-our-company-container">
		// 							<ul
		// 								id="collapse-footer-company"
		// 								class="agp-light fs-13px collapse"
		// 							>
		// 								<li
		// 									id="menu-item-366742"
		// 									class="
		// 										menu-item
		// 										menu-item-type-post_type
		// 										menu-item-object-page menu-item-366742
		// 									"
		// 								>
		// 									<a href="https://www.skjewellery.com/about/">About Us</a>
		// 								</li>
		// 								<li
		// 									id="menu-item-366744"
		// 									class="
		// 										menu-item
		// 										menu-item-type-custom
		// 										menu-item-object-custom
		// 										menu-item-366744
		// 									"
		// 								>
		// 									<a href="https://www.skjewellerygroup.com/join-us/"
		// 										>Careers</a
		// 									>
		// 								</li>
		// 								<li
		// 									id="menu-item-418451"
		// 									class="
		// 										menu-item
		// 										menu-item-type-post_type
		// 										menu-item-object-page menu-item-418451
		// 									"
		// 								>
		// 									<a href="https://www.skjewellery.com/blog/">Blog</a>
		// 								</li>
		// 								<li
		// 									id="menu-item-417303"
		// 									class="
		// 										menu-item
		// 										menu-item-type-post_type
		// 										menu-item-object-page menu-item-417303
		// 									"
		// 								>
		// 									<a href="https://www.skjewellery.com/locate-us/"
		// 										>Our Stores</a
		// 									>
		// 								</li>
		// 							</ul>
		// 						</div>
		// 					</section>
		// 					<section class="col-12 text-left text-md-left pt-15px">
		// 						<a
		// 							href="#"
		// 							class="footer-title agp-normal mb-20px fs-16"
		// 							data-toggle="collapse"
		// 							data-target="#collapse-footer-services"
		// 							>Customer Service
		// 							<div class="accordion-toggle-icon">
		// 								<span class="accordion-toggle-icon-close svl-icon">
		// 									<i aria-hidden="true" class="fas fa-chevron-down"></i>
		// 								</span>
		// 								<span class="accordion-toggle-icon-open svl-icon">
		// 									<i aria-hidden="true" class="fas fa-chevron-up"></i>
		// 								</span>
		// 							</div>
		// 						</a>
		// 						<div class="menu-footer-customer-service-container">
		// 							<ul
		// 								id="collapse-footer-services"
		// 								class="agp-light fs-13px collapse"
		// 							>
		// 								<li
		// 									id="menu-item-339"
		// 									class="
		// 										menu-item
		// 										menu-item-type-post_type
		// 										menu-item-object-page menu-item-339
		// 									"
		// 								>
		// 									<a href="https://www.skjewellery.com/faq/"
		// 										>Frequently Asked Questions</a
		// 									>
		// 								</li>
		// 								<li
		// 									id="menu-item-417299"
		// 									class="
		// 										menu-item
		// 										menu-item-type-custom
		// 										menu-item-object-custom
		// 										menu-item-417299
		// 									"
		// 								>
		// 									<a href="/faq/#return-and-exchange"
		// 										>Returns &amp; Exchanges</a
		// 									>
		// 								</li>
		// 								<li
		// 									id="menu-item-417297"
		// 									class="
		// 										menu-item
		// 										menu-item-type-post_type
		// 										menu-item-object-page menu-item-417297
		// 									"
		// 								>
		// 									<a href="https://www.skjewellery.com/jewellery-care-guide/"
		// 										>Jewellery Care</a
		// 									>
		// 								</li>
		// 								<li
		// 									id="menu-item-417298"
		// 									class="
		// 										menu-item
		// 										menu-item-type-custom
		// 										menu-item-object-custom
		// 										menu-item-417298
		// 									"
		// 								>
		// 									<a href="https://www.skjewellery.com/services/"
		// 										>Our Services</a
		// 									>
		// 								</li>
		// 								<li
		// 									id="menu-item-205"
		// 									class="
		// 										menu-item
		// 										menu-item-type-custom
		// 										menu-item-object-custom
		// 										menu-item-205
		// 									"
		// 								>
		// 									<a
		// 										href="https://www.skjewellery.com/wp-content/uploads/2022/02/SK_RingSizeChart.pdf"
		// 										>Size Guide</a
		// 									>
		// 								</li>
		// 							</ul>
		// 						</div>
		// 					</section>
		// 					<section class="col-12 footer-contact text-left text-md-left pt-15px">
		// 						<a
		// 							href="#"
		// 							class="footer-title agp-normal mb-20px fs-16"
		// 							data-toggle="collapse"
		// 							data-target="#collapse-footer-contact"
		// 							>Contact Us
		// 							<div class="accordion-toggle-icon">
		// 								<span class="accordion-toggle-icon-close svl-icon">
		// 									<i aria-hidden="true" class="fas fa-chevron-down"></i>
		// 								</span>
		// 								<span class="accordion-toggle-icon-open svl-icon">
		// 									<i aria-hidden="true" class="fas fa-chevron-up"></i>
		// 								</span>
		// 							</div>
		// 						</a>
		// 						<div id="collapse-footer-contact" class="collapse">
		// 							<p class="fs-14 agp-light mb-10px contact_hightlight">
		// 								<i class="fa fa-envelope-o"></i>
		// 								<a rel="nofollow" href="mailto:enquiry@skjewellery.com"
		// 									>enquiry@skjewellery.com</a
		// 								>
		// 							</p>
		// 							<p class="fs-14 agp-light mb-10px contact_hightlight">
		// 								<i class="fa fa-phone"></i>
		// 								<a rel="nofollow" href="tel:+6518007553935"> 1800-7553935</a>
		// 							</p>
		// 							<p class="fs-14 agp-light mb-10px contact_hightlight">
		// 								<i class="fa fa-comment-o"></i>
		// 								<a
		// 									href="/"
		// 									onclick="LiveChatWidget.call('maximize');return false;"
		// 								>
		// 									Live Chat
		// 								</a>
		// 							</p>
		// 							<div class="agp-light mb-10px footer--operating-hours">
		// 								<p>
		// 									Do note we are available on Monday - Friday, from 9AM - 6PM
		// 								</p>
		// 							</div>
		// 						</div>
		// 					</section>
		// 					<section class="col-12 text-left text-md-left pt-15px">
		// 						<a
		// 							href="#"
		// 							class="footer-title agp-normal mb-20px fs-16"
		// 							data-toggle="collapse"
		// 							data-target="#collapse-footer-policies"
		// 							>Legal
		// 							<div class="accordion-toggle-icon">
		// 								<span class="accordion-toggle-icon-close svl-icon">
		// 									<i aria-hidden="true" class="fas fa-chevron-down"></i>
		// 								</span>
		// 								<span class="accordion-toggle-icon-open svl-icon">
		// 									<i aria-hidden="true" class="fas fa-chevron-up"></i>
		// 								</span>
		// 							</div>
		// 						</a>
		// 						<div class="menu-footer-poiicies-container">
		// 							<ul
		// 								id="collapse-footer-policies"
		// 								class="agp-light fs-13px collapse"
		// 							>
		// 								<li
		// 									id="menu-item-1470"
		// 									class="
		// 										menu-item
		// 										menu-item-type-post_type
		// 										menu-item-object-page menu-item-1470
		// 									"
		// 								>
		// 									<a href="https://www.skjewellery.com/cookie-policy/"
		// 										>Cookie Policy</a
		// 									>
		// 								</li>
		// 								<li
		// 									id="menu-item-615"
		// 									class="
		// 										menu-item
		// 										menu-item-type-post_type
		// 										menu-item-object-page menu-item-privacy-policy menu-item-615
		// 									"
		// 								>
		// 									<a
		// 										rel="privacy-policy"
		// 										href="https://www.skjewellery.com/privacy-policy/"
		// 										>Privacy Policy</a
		// 									>
		// 								</li>
		// 								<li
		// 									id="menu-item-616"
		// 									class="
		// 										menu-item
		// 										menu-item-type-post_type
		// 										menu-item-object-page menu-item-616
		// 									"
		// 								>
		// 									<a href="https://www.skjewellery.com/terms-of-use/"
		// 										>Terms &amp; Conditions</a
		// 									>
		// 								</li>
		// 							</ul>
		// 						</div>
		// 					</section>
		// 					<section
		// 						class="
		// 							offset-md-1
		// 							col-12 col-md-10
		// 							text-center text-lg-left
		// 							pt-15px
		// 							no_bt
		// 						"
		// 					>
		// 						<div class="social-media mb-10px d-flex justify-content-around">
		// 							<a
		// 								rel="nofollow noreferrer"
		// 								class="footer-share footer-facebook"
		// 								target="_blank"
		// 								href="https://www.facebook.com/SKJewellerySG/"
		// 							></a>
		// 							<a
		// 								rel="nofollow noreferrer"
		// 								class="footer-share footer-tiktok"
		// 								target="_blank"
		// 								href="https://www.tiktok.com/@skjewelleryofficial"
		// 							></a>
		// 							<a
		// 								href="https://www.skjewellery.com"
		// 								class="footer-custom-logo-link"
		// 								rel="home"
		// 							>
		// 								<img
		// 									width="35"
		// 									height="35"
		// 									class="footer-custom-logo"
		// 									src="https://www.skjewellery.com/wp-content/uploads/2019/10/logo_navbar_mobile.png"
		// 									alt="SK Jewellery Logo"
		// 								/>
		// 							</a>
		// 							<a
		// 								rel="nofollow noreferrer"
		// 								class="footer-share footer-youtube"
		// 								target="_blank"
		// 								href="https://www.instagram.com/skjewellery/?hl=en"
		// 							></a>
		// 							<a
		// 								rel="nofollow noreferrer"
		// 								class="footer-share footer-instagram"
		// 								target="_blank"
		// 								href="https://www.youtube.com/user/SKJewellerySG"
		// 							></a>
		// 						</div>
		// 					</section>
		// 					<section
		// 						class="
		// 							offset-md-1
		// 							col-12 col-md-10
		// 							text-center text-lg-left
		// 							pt-15px
		// 							no_bt
		// 						"
		// 					>
		// 						<p class="fs-13px agp-light footer-copyright">
		// 							Copyright © 2023 SK Jewellery. All rights reserved.
		// 						</p>
		// 					</section>
		// 				</div>
		// 				<div class="row d-none d-sm-flex iPad-footer">
		// 					<div class="row offset-md-1 col-md-10 col-12">
		// 						<section
		// 							class="
		// 								col-12 col-sm-6 col-md-3
		// 								text-center text-md-left
		// 								pt-15px pt-md-0px
		// 							"
		// 						>
		// 							<h2 class="agp-normal mb-15px fs-20">Our Company</h2>
		// 							<div class="menu-footer-our-company-container">
		// 								<ul id="menu-footer-our-company" class="agp-light fs-13px">
		// 									<li
		// 										class="
		// 											menu-item
		// 											menu-item-type-post_type
		// 											menu-item-object-page menu-item-366742
		// 										"
		// 									>
		// 										<a href="https://www.skjewellery.com/about/">About Us</a>
		// 									</li>
		// 									<li
		// 										class="
		// 											menu-item
		// 											menu-item-type-custom
		// 											menu-item-object-custom
		// 											menu-item-366744
		// 										"
		// 									>
		// 										<a href="https://www.skjewellerygroup.com/join-us/"
		// 											>Careers</a
		// 										>
		// 									</li>
		// 									<li
		// 										class="
		// 											menu-item
		// 											menu-item-type-post_type
		// 											menu-item-object-page menu-item-418451
		// 										"
		// 									>
		// 										<a href="https://www.skjewellery.com/blog/">Blog</a>
		// 									</li>
		// 									<li
		// 										class="
		// 											menu-item
		// 											menu-item-type-post_type
		// 											menu-item-object-page menu-item-417303
		// 										"
		// 									>
		// 										<a href="https://www.skjewellery.com/locate-us/"
		// 											>Our Stores</a
		// 										>
		// 									</li>
		// 								</ul>
		// 							</div>
		// 						</section>
		// 						<section
		// 							class="
		// 								col-12 col-sm-6 col-md-3
		// 								text-center text-md-left
		// 								pt-15px pt-md-0px
		// 							"
		// 						>
		// 							<h2 class="agp-normal mb-15px fs-20">Customer Service</h2>
		// 							<div class="menu-footer-customer-service-container">
		// 								<ul id="menu-footer-customer-service" class="agp-light fs-13px">
		// 									<li
		// 										class="
		// 											menu-item
		// 											menu-item-type-post_type
		// 											menu-item-object-page menu-item-339
		// 										"
		// 									>
		// 										<a href="https://www.skjewellery.com/faq/"
		// 											>Frequently Asked Questions</a
		// 										>
		// 									</li>
		// 									<li
		// 										class="
		// 											menu-item
		// 											menu-item-type-custom
		// 											menu-item-object-custom
		// 											menu-item-417299
		// 										"
		// 									>
		// 										<a href="/faq/#return-and-exchange"
		// 											>Returns &amp; Exchanges</a
		// 										>
		// 									</li>
		// 									<li
		// 										class="
		// 											menu-item
		// 											menu-item-type-post_type
		// 											menu-item-object-page menu-item-417297
		// 										"
		// 									>
		// 										<a href="https://www.skjewellery.com/jewellery-care-guide/"
		// 											>Jewellery Care</a
		// 										>
		// 									</li>
		// 									<li
		// 										class="
		// 											menu-item
		// 											menu-item-type-custom
		// 											menu-item-object-custom
		// 											menu-item-417298
		// 										"
		// 									>
		// 										<a href="https://www.skjewellery.com/services/"
		// 											>Our Services</a
		// 										>
		// 									</li>
		// 									<li
		// 										class="
		// 											menu-item
		// 											menu-item-type-custom
		// 											menu-item-object-custom
		// 											menu-item-205
		// 										"
		// 									>
		// 										<a
		// 											href="https://www.skjewellery.com/wp-content/uploads/2022/02/SK_RingSizeChart.pdf"
		// 											>Size Guide</a
		// 										>
		// 									</li>
		// 								</ul>
		// 							</div>
		// 						</section>
		// 						<section
		// 							class="
		// 								col-12 col-sm-6 col-md-3
		// 								text-center text-md-left
		// 								pt-15px pt-md-0px
		// 							"
		// 						>
		// 							<h2 class="agp-normal mb-15px fs-20">Legal</h2>
		// 							<div class="menu-footer-poiicies-container">
		// 								<ul id="menu-footer-poiicies" class="agp-light fs-13px">
		// 									<li
		// 										class="
		// 											menu-item
		// 											menu-item-type-post_type
		// 											menu-item-object-page menu-item-1470
		// 										"
		// 									>
		// 										<a href="https://www.skjewellery.com/cookie-policy/"
		// 											>Cookie Policy</a
		// 										>
		// 									</li>
		// 									<li
		// 										class="
		// 											menu-item
		// 											menu-item-type-post_type
		// 											menu-item-object-page
		// 											menu-item-privacy-policy
		// 											menu-item-615
		// 										"
		// 									>
		// 										<a
		// 											rel="privacy-policy"
		// 											href="https://www.skjewellery.com/privacy-policy/"
		// 											>Privacy Policy</a
		// 										>
		// 									</li>
		// 									<li
		// 										class="
		// 											menu-item
		// 											menu-item-type-post_type
		// 											menu-item-object-page menu-item-616
		// 										"
		// 									>
		// 										<a href="https://www.skjewellery.com/terms-of-use/"
		// 											>Terms &amp; Conditions</a
		// 										>
		// 									</li>
		// 								</ul>
		// 							</div>
		// 						</section>
		// 						<section
		// 							class="
		// 								col-12 col-md-3
		// 								footer-contact
		// 								text-center text-md-left
		// 								pt-15px pt-md-0px
		// 							"
		// 						>
		// 							<h2
		// 								class="footer-title agp-normal mb-15px fs-20"
		// 								data-toggle="collapse"
		// 								data-target="#collapse-footer-contact"
		// 							>
		// 								Contact Us
		// 							</h2>
		// 							<p class="fs-18 agp-light mb-10px contact_hightlight">
		// 								<i class="fa fa-envelope-o"></i>
		// 								<a rel="nofollow" href="mailto:enquiry@skjewellery.com"
		// 									>enquiry@skjewellery.com</a
		// 								>
		// 							</p>
		// 							<p class="fs-18 agp-light mb-10px contact_hightlight">
		// 								<i class="fa fa-phone"></i>
		// 								<a rel="nofollow" href="tel:+6518007553935"> 1800-7553935</a>
		// 							</p>
		// 							<p class="fs-18 agp-light mb-10px contact_hightlight">
		// 								<i class="fa fa-comment-o"></i>
		// 								<a
		// 									href="/"
		// 									onclick="LiveChatWidget.call('maximize');return false;"
		// 								>
		// 									Live Chat
		// 								</a>
		// 							</p>
		// 							<div class="agp-light mb-10px footer--operating-hours">
		// 								<p>
		// 									Do note we are available on Monday - Friday, from 9AM - 6PM
		// 								</p>
		// 							</div>
		// 							<div class="social-media mb-10px">
		// 								<a
		// 									rel="nofollow noreferrer"
		// 									class="footer-share footer-facebook"
		// 									target="_blank"
		// 									href="https://www.facebook.com/SKJewellerySG/"
		// 								></a>
		// 								<a
		// 									rel="nofollow noreferrer"
		// 									class="footer-share footer-tiktok"
		// 									target="_blank"
		// 									href="https://www.tiktok.com/@skjewelleryofficial"
		// 								></a>
		// 								<a
		// 									rel="nofollow noreferrer"
		// 									class="footer-share footer-youtube"
		// 									target="_blank"
		// 									href="https://www.instagram.com/skjewellery/?hl=en"
		// 								></a>
		// 								<a
		// 									rel="nofollow noreferrer"
		// 									class="footer-share footer-instagram"
		// 									target="_blank"
		// 									href="https://www.youtube.com/user/SKJewellerySG"
		// 								></a>
		// 							</div>
		// 						</section>
		// 					</div>
		// 					<section
		// 						class="
		// 							offset-md-1
		// 							col-12 col-md-10
		// 							text-center text-lg-left
		// 							pt-15px pt-md-0px
		// 						"
		// 					>
		// 						<p class="fs-11 px-3 agp-light footer-copyright">
		// 							Copyright © 2023 SK Jewellery. All rights reserved.
		// 						</p>
		// 					</section>
		// 				</div>
		// 			</div>
		// 			<div class="book-appointment">
		// 				<a href="https://www.skjewellery.com/consultation">Book Appointment</a>
		// 			</div>
		// 		</footer>
		// 		<!-- #page -->
		// 		<div class="bg_overlay"></div>
		// 		<script>
		// 			function setCookiePromo(cname, cvalue, exmins) {
		// 				var d = new Date();
		// 				d.setTime(d.getTime() + exmins * 60 * 1000);
		// 				var expires = "expires=" + d.toGMTString();
		// 				document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		// 			}

		// 			//get cookie
		// 			function getCookie(cname) {
		// 				var name = cname + "=";
		// 				var decodedCookie = decodeURIComponent(document.cookie);
		// 				var ca = decodedCookie.split(";");
		// 				for (var i = 0; i < ca.length; i++) {
		// 					var c = ca[i];
		// 					while (c.charAt(0) == " ") {
		// 						c = c.substring(1);
		// 					}
		// 					if (c.indexOf(name) == 0) {
		// 						return c.substring(name.length, c.length);
		// 					}
		// 				}
		// 				return "";
		// 			}
		// 			//check if cookie exists
		// 			function checkPromoPopCookie() {
		// 				var data_index = jQuery("#popup").data("index");
		// 				var name_ck = "promopopCheck" + data_index;
		// 				var displayCheckPromo = getCookie(name_ck);
		// 				if (displayCheckPromo == "undefined") {
		// 					displayCheckPromo = "";
		// 				}

		// 				//if cookie exists
		// 				if (displayCheckPromo != "") {
		// 					//disable promo popup till cookie expires
		// 					jQuery(".bg_overlay").css("display", "none");
		// 					jQuery(".promo_popup").css("display", "none");
		// 					jQuery("body").css("overflow", "initial");

		// 					//if cookie doesnt exist
		// 				} else {
		// 					jQuery(".promo_popup")
		// 						.delay(2800)
		// 						.css("display", "flex")
		// 						.hide()
		// 						.fadeIn(400);
		// 					if (jQuery(".promo_popup")[0]) {
		// 						jQuery(".bg_overlay").delay(2800).fadeIn(400);
		// 						jQuery("body").delay(2800).css("overflow", "hidden");
		// 					}

		// 					function HideDialog() {
		// 						//set cookie for promo popup
		// 						// setCookiePromo(cname, cvalue, exmins)
		// 						var data_index = jQuery("#popup").data("index");
		// 						setCookiePromo("promopopCheck" + data_index, "isOff");
		// 						jQuery(".bg_overlay").fadeOut(400);
		// 						jQuery(".promo_popup").fadeOut(300);
		// 						jQuery("body").css("overflow", "initial");
		// 					}

		// 					//close on click on x popup
		// 					jQuery(".promo_popup .inner .close").click(function () {
		// 						HideDialog();
		// 					});

		// 					jQuery(document).on("click", function (e) {
		// 						if (!jQuery(e.target).closest(".promo_popup").length) {
		// 							jQuery(".promo_popup").removeClass("active");
		// 						}
		// 					});
		// 				}
		// 			}

		// 			checkPromoPopCookie();
		// 		</script>
		// 		<!-- SEO Scripts Footer -->
		// 		<!-- Custom Feeds for Instagram JS -->
		// 		<script type="text/javascript">
		// 			var sbiajaxurl = "https://www.skjewellery.com/wp-admin/admin-ajax.php";
		// 		</script>
		// 		<script id="tpl-menu-sp-extra" type="text/template">
		// 				<div class="section_fixed_menu"><ul class="">
		// 				<li class="mega-menu-calendar mega-menu-item menu-calendar">
		// 					<a class="mega-menu-link" href="/consultation/" tabindex="0">Book Appointment</a>
		// 				</li>
		// 				<li class="alt-li-item mega-menu-locator mega-menu-item menu-locator">
		// 					<a class="mega-menu-link" href="/locate-us" tabindex="0">Store Locator</a>
		// 				</li>
		// 				<li class="alt-li-item mega-menu-shipto mega-menu-item  menu-shipto">
		// 					<a class="mega-menu-link no-hover" href="#" tabindex="0">Ship to: Singapore</a>
		// 				</li>
		// 				<li class="alt-li-item mega-menu-acc mega-menu-item  menu-acc">
		// 					<a class="mega-menu-link" href="/my-account" tabindex="0">My Account</a>
		// 				</li>
		// 				<li class="alt-li-item mega-menu-logout mega-menu-item  menu-logout">
		// 					<a class="mega-menu-link" href="/my-account/" tabindex="0">Login</a>
		// 				</li>
		// 			</ul></div>
		// 		</script>
		// 		<div id="yith-ywgc">
		// 			<div class="yith-ywgc-overlay close-on-click"></div>
		// 			<div class="yith-ywgc-popup-wrapper">
		// 				<div class="yith-ywgc-popup-wrapper-region">
		// 					<div
		// 						class="yith-ywgc-popup"
		// 						data-animation-in="fadeIn"
		// 						data-animation-out="fadeOut"
		// 					>
		// 						<div class="yith-ywgc-popup-inner">
		// 							<div class="yith-ywgc-popup-close"></div>
		// 							<div class="yith-ywgc-popup-content-wrapper"></div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<script type="text/javascript">
		// 			(function () {
		// 				var c = document.body.className;
		// 				c = c.replace(/woocommerce-no-js/, "woocommerce-js");
		// 				document.body.className = c;
		// 			})();
		// 		</script>
		// 		<script src="//r3.dotdigital-pages.com/resources/sharing/popoverv2.js?sharing=lp-popover&amp;domain=r3.dotdigital-pages.com&amp;id=7FLT-6IJ%2Fheres-5-off-your-first-order-on-us%22&amp;delay=0&amp;mobile=true&amp;keydismiss=&amp;width=600"></script>
		// 		<script type="text/javascript" id="">
		// 			var pagename = document.location.pathname;
		// 			pagename = pagename.toLowerCase();
		// 			var page1 = pagename.split("/"),
		// 				pageType = "",
		// 				hier1 = "n/a",
		// 				hier2 = "n/a",
		// 				hier3 = "n/a",
		// 				text1 = jQuery(".agp-normal").text();
		// 			pageType =
		// 				-1 != text1.indexOf("Oops! Nothing Sparkly In Here")
		// 					? "error page"
		// 					: "/" == pagename
		// 					? "home"
		// 					: -1 != pagename.indexOf("/locate-us/")
		// 					? "store locator"
		// 					: -1 != pagename.indexOf("/consultation/")
		// 					? "contact-us"
		// 					: -1 != pagename.indexOf("product-category") ||
		// 					  -1 != pagename.indexOf("collection")
		// 					? "category page"
		// 					: -1 != pagename.indexOf("product")
		// 					? "product page"
		// 					: -1 != pagename.indexOf("my-account")
		// 					? "login page"
		// 					: -1 != pagename.indexOf("cart")
		// 					? "cart page"
		// 					: -1 != pagename.indexOf("wishlist")
		// 					? "wishlist page"
		// 					: -1 != pagename.indexOf("checkout")
		// 					? "checkout page"
		// 					: -1 != pagename.indexOf("shop")
		// 					? "shop page"
		// 					: -1 != pagename.indexOf("faq")
		// 					? "faq page"
		// 					: -1 != pagename.indexOf("join-us")
		// 					? "Career page"
		// 					: -1 != pagename.indexOf("blog")
		// 					? "Blog page"
		// 					: -1 != pagename.indexOf("about")
		// 					? "About us page"
		// 					: -1 != pagename.indexOf("services")
		// 					? "Our services"
		// 					: "other";
		// 			dataLayer.push({
		// 				pageType: pageType,
		// 				hierachy1: hier1,
		// 				hierachy2: hier2,
		// 				hierachy3: hier3,
		// 			});
		// 		</script>
		// 		<script type="text/javascript" id="">
		// 			var pagename = document.location.pathname;
		// 			pagename = pagename.toLowerCase();
		// 			var page1 = pagename.split("/"),
		// 				pageType = "",
		// 				hier1 = "n/a",
		// 				hier2 = "n/a",
		// 				hier3 = "n/a",
		// 				text1 = jQuery(".agp-normal").text();
		// 			pageType =
		// 				-1 != text1.indexOf("Oops! Nothing Sparkly In Here")
		// 					? "error page"
		// 					: "/" == pagename
		// 					? "home"
		// 					: -1 != pagename.indexOf("/locate-us/")
		// 					? "store locator"
		// 					: -1 != pagename.indexOf("/consultation/")
		// 					? "contact-us"
		// 					: -1 != pagename.indexOf("product-category") ||
		// 					  -1 != pagename.indexOf("collection")
		// 					? "category page"
		// 					: -1 != pagename.indexOf("product")
		// 					? "product page"
		// 					: -1 != pagename.indexOf("my-account")
		// 					? "login page"
		// 					: -1 != pagename.indexOf("cart")
		// 					? "cart page"
		// 					: -1 != pagename.indexOf("wishlist")
		// 					? "wishlist page"
		// 					: -1 != pagename.indexOf("checkout")
		// 					? "checkout page"
		// 					: -1 != pagename.indexOf("shop")
		// 					? "shop page"
		// 					: -1 != pagename.indexOf("faq")
		// 					? "faq page"
		// 					: -1 != pagename.indexOf("join-us")
		// 					? "Career page"
		// 					: -1 != pagename.indexOf("blog")
		// 					? "Blog page"
		// 					: -1 != pagename.indexOf("about")
		// 					? "About us page"
		// 					: -1 != pagename.indexOf("services")
		// 					? "Our services"
		// 					: "other";
		// 			dataLayer.push({
		// 				pageType: pageType,
		// 				hierachy1: hier1,
		// 				hierachy2: hier2,
		// 				hierachy3: hier3,
		// 			});
		// 		</script>
		// 		<script type="text/javascript" id="">
		// 			!(function (d, g, e) {
		// 				d.TiktokAnalyticsObject = e;
		// 				var a = (d[e] = d[e] || []);
		// 				a.methods =
		// 					"page track identify instances debug on off once ready alias group enableCookie disableCookie".split(
		// 						" "
		// 					);
		// 				a.setAndDefer = function (b, c) {
		// 					b[c] = function () {
		// 						b.push([c].concat(Array.prototype.slice.call(arguments, 0)));
		// 					};
		// 				};
		// 				for (d = 0; d < a.methods.length; d++) a.setAndDefer(a, a.methods[d]);
		// 				a.instance = function (b) {
		// 					b = a._i[b] || [];
		// 					for (var c = 0; c < a.methods.length; c++)
		// 						a.setAndDefer(b, a.methods[c]);
		// 					return b;
		// 				};
		// 				a.load = function (b, c) {
		// 					var f = "https://analytics.tiktok.com/i18n/pixel/events.js";
		// 					a._i = a._i || {};
		// 					a._i[b] = [];
		// 					a._i[b]._u = f;
		// 					a._t = a._t || {};
		// 					a._t[b] = +new Date();
		// 					a._o = a._o || {};
		// 					a._o[b] = c || {};
		// 					c = document.createElement("script");
		// 					c.type = "text/javascript";
		// 					c.async = !0;
		// 					c.src = f + "?sdkid\x3d" + b + "\x26lib\x3d" + e;
		// 					b = document.getElementsByTagName("script")[0];
		// 					b.parentNode.insertBefore(c, b);
		// 				};
		// 				a.load("C81VC5T0NM9PPK6KF37G");
		// 				a.page();
		// 			})(window, document, "ttq");
		// 		</script>

		// 		<script type="text/javascript" id="">
		// 			window.__lc = window.__lc || {};
		// 			window.__lc.license = 11661638;
		// 			(function (e, f, c) {
		// 				function d(a) {
		// 					return b._h ? b._h.apply(null, a) : b._q.push(a);
		// 				}
		// 				var b = {
		// 					_q: [],
		// 					_h: null,
		// 					_v: "2.0",
		// 					on: function () {
		// 						d(["on", c.call(arguments)]);
		// 					},
		// 					once: function () {
		// 						d(["once", c.call(arguments)]);
		// 					},
		// 					off: function () {
		// 						d(["off", c.call(arguments)]);
		// 					},
		// 					get: function () {
		// 						if (!b._h)
		// 							throw Error(
		// 								"[LiveChatWidget] You can't use getters before load."
		// 							);
		// 						return d(["get", c.call(arguments)]);
		// 					},
		// 					call: function () {
		// 						d(["call", c.call(arguments)]);
		// 					},
		// 					init: function () {
		// 						var a = f.createElement("script");
		// 						a.async = !0;
		// 						a.type = "text/javascript";
		// 						a.src = "https://cdn.livechatinc.com/tracking.js";
		// 						f.head.appendChild(a);
		// 					},
		// 				};
		// 				!e.__lc.asyncInit && b.init();
		// 				e.LiveChatWidget = e.LiveChatWidget || b;
		// 			})(window, document, [].slice);
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			id=""
		// 			src="https://cdn.livechatinc.com/tracking.js"
		// 		></script>
		// 		<script type="text/javascript" id="">
		// 			var LC_API = LC_API || {};
		// 			LC_API.on_chat_started = function () {
		// 				dataLayer.push({ event: "chat_start" });
		// 			};
		// 		</script>
		// 		<script type="text/javascript" id="">
		// 			!(function (b, e, f, g, a, c, d) {
		// 				b.fbq ||
		// 					((a = b.fbq =
		// 						function () {
		// 							a.callMethod
		// 								? a.callMethod.apply(a, arguments)
		// 								: a.queue.push(arguments);
		// 						}),
		// 					b._fbq || (b._fbq = a),
		// 					(a.push = a),
		// 					(a.loaded = !0),
		// 					(a.version = "2.0"),
		// 					(a.queue = []),
		// 					(c = e.createElement(f)),
		// 					(c.async = !0),
		// 					(c.src = g),
		// 					(d = e.getElementsByTagName(f)[0]),
		// 					d.parentNode.insertBefore(c, d));
		// 			})(
		// 				window,
		// 				document,
		// 				"script",
		// 				"https://connect.facebook.net/en_US/fbevents.js"
		// 			);
		// 			fbq("init", google_tag_manager["GTM-KMT5CP"].macro(4));
		// 		</script>
		// 		<script type="text/javascript" id="">
		// 			fbq(
		// 				"track",
		// 				"PageView",
		// 				{},
		// 				{ eventID: "1684941989041_1684942264625_1_gtm.js" }
		// 			);
		// 		</script>

		// 		<script
		// 			type="text/javascript"
		// 			id=""
		// 			src="https://www.googletagmanager.com/gtag/js?id=DC-6643807"
		// 		></script>
		// 		<iframe
		// 			id="avdfi_1684941989139"
		// 			src="javascript:'<html><body style=&quot;background:transparent&quot;></body></html>'"
		// 			height="0"
		// 			width="0"
		// 			marginheight="0"
		// 			marginwidth="0"
		// 			frameborder="0"
		// 			scrolling="no"
		// 			style="
		// 				width: 0px;
		// 				height: 0px;
		// 				border: 0px none;
		// 				background: none;
		// 				display: none;
		// 			"
		// 		></iframe
		// 		><style id="core-block-supports-inline-css" type="text/css">
		// 			/**
		//  * Core styles: block-supports
		//  */
		// 		</style>
		// 		<script
		// 			type="text/javascript"
		// 			id="dotdigital_woocommerce_public_js-js-extra"
		// 		>
		// 			/* <![CDATA[ */
		// 			var dd_ajax_handler = {
		// 				ajax_url: "https:\/\/www.skjewellery.com\/wp-admin\/admin-ajax.php",
		// 				nonce: "009dc17d47",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/dotdigital-for-woocommerce/public/js/dotdigital-woocommerce-public.js?ver=1.3.4"
		// 			id="dotdigital_woocommerce_public_js-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="//r1-t.trackedlink.net/_dmpt.js?ver=1.3.4"
		// 			id="tracking-js"
		// 		></script>
		// 		<script type="text/javascript" id="wbt-js-extra">
		// 			/* <![CDATA[ */
		// 			var wbt_data = { profile_id: "DM-8340345443-03" };
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/dotdigital-for-woocommerce/public/js/tracking/web-behaviour-tracking.js?ver=1.3.4"
		// 			id="wbt-js"
		// 		></script>
		// 		<script type="text/javascript" id="cart_insight-js-extra">
		// 			/* <![CDATA[ */
		// 			var cart_insight = {
		// 				data: [],
		// 				ajax_url: "https:\/\/www.skjewellery.com\/wp-admin\/admin-ajax.php",
		// 				nonce: "ece10e4978",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/dotdigital-for-woocommerce/public/js/tracking/cart-insight.js?ver=1.3.4"
		// 			id="cart_insight-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.js?ver=2.7.0-wc.7.6.1"
		// 			id="jquery-blockui-js"
		// 		></script>
		// 		<script type="text/javascript" id="wc-add-to-cart-js-extra">
		// 			/* <![CDATA[ */
		// 			var wc_add_to_cart_params = {
		// 				ajax_url: "\/wp-admin\/admin-ajax.php",
		// 				wc_ajax_url: "\/?wc-ajax=%%endpoint%%",
		// 				i18n_view_cart: "View cart",
		// 				cart_url: "https:\/\/www.skjewellery.com\/cart\/",
		// 				is_cart: "",
		// 				cart_redirect_after_add: "no",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.js?ver=7.6.1"
		// 			id="wc-add-to-cart-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.js?ver=2.1.4-wc.7.6.1"
		// 			id="js-cookie-js"
		// 		></script>
		// 		<script type="text/javascript" id="woocommerce-js-extra">
		// 			/* <![CDATA[ */
		// 			var woocommerce_params = {
		// 				ajax_url: "\/wp-admin\/admin-ajax.php",
		// 				wc_ajax_url: "\/?wc-ajax=%%endpoint%%",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.js?ver=7.6.1"
		// 			id="woocommerce-js"
		// 		></script>
		// 		<script type="text/javascript" id="wc-cart-fragments-js-extra">
		// 			/* <![CDATA[ */
		// 			var wc_cart_fragments_params = {
		// 				ajax_url: "\/wp-admin\/admin-ajax.php",
		// 				wc_ajax_url: "\/?wc-ajax=%%endpoint%%",
		// 				cart_hash_key: "wc_cart_hash_7d19a9a2831bfc06f667f2fef78342e8",
		// 				fragment_name: "wc_fragments_7d19a9a2831bfc06f667f2fef78342e8",
		// 				request_timeout: "5000",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.js?ver=7.6.1"
		// 			id="wc-cart-fragments-js"
		// 		></script>
		// 		<script type="text/javascript" id="rocket-browser-checker-js-after">
		// 			class RocketBrowserCompatibilityChecker {
		// 				constructor(options) {
		// 					this.passiveSupported = false;

		// 					this._checkPassiveOption(this);
		// 					this.options = this.passiveSupported ? options : false;
		// 				}

		// 				/**
		// 				 * Initializes browser check for addEventListener passive option.
		// 				 *
		// 				 * @link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
		// 				 * @private
		// 				 *
		// 				 * @param self Instance of this object.
		// 				 * @returns {boolean}
		// 				 */
		// 				_checkPassiveOption(self) {
		// 					try {
		// 						const options = {
		// 							// This function will be called when the browser attempts to access the passive property.
		// 							get passive() {
		// 								self.passiveSupported = true;
		// 								return false;
		// 							},
		// 						};

		// 						window.addEventListener("test", null, options);
		// 						window.removeEventListener("test", null, options);
		// 					} catch (err) {
		// 						self.passiveSupported = false;
		// 					}
		// 				}

		// 				/**
		// 				 * Checks if the browser supports requestIdleCallback and cancelIdleCallback. If no, shims its behavior with a polyfills.
		// 				 *
		// 				 * @link @link https://developers.google.com/web/updates/2015/08/using-requestidlecallback
		// 				 */
		// 				initRequestIdleCallback() {
		// 					if (!"requestIdleCallback" in window) {
		// 						window.requestIdleCallback = (cb) => {
		// 							const start = Date.now();
		// 							return setTimeout(() => {
		// 								cb({
		// 									didTimeout: false,
		// 									timeRemaining: function timeRemaining() {
		// 										return Math.max(0, 50 - (Date.now() - start));
		// 									},
		// 								});
		// 							}, 1);
		// 						};
		// 					}

		// 					if (!"cancelIdleCallback" in window) {
		// 						window.cancelIdleCallback = (id) => clearTimeout(id);
		// 					}
		// 				}

		// 				/**
		// 				 * Detects if data saver mode is on.
		// 				 *
		// 				 * @link https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data/#detecting_the_save-data_setting
		// 				 *
		// 				 * @returns {boolean|boolean}
		// 				 */
		// 				isDataSaverModeOn() {
		// 					return (
		// 						"connection" in navigator && true === navigator.connection.saveData
		// 					);
		// 				}

		// 				/**
		// 				 * Checks if the browser supports link prefetch.
		// 				 *
		// 				 * @returns {boolean|boolean}
		// 				 */
		// 				supportsLinkPrefetch() {
		// 					const elem = document.createElement("link");
		// 					return (
		// 						elem.relList &&
		// 						elem.relList.supports &&
		// 						elem.relList.supports("prefetch") &&
		// 						window.IntersectionObserver &&
		// 						"isIntersecting" in IntersectionObserverEntry.prototype
		// 					);
		// 				}

		// 				isSlowConnection() {
		// 					return (
		// 						"connection" in navigator &&
		// 						"effectiveType" in navigator.connection &&
		// 						("2g" === navigator.connection.effectiveType ||
		// 							"slow-2g" === navigator.connection.effectiveType)
		// 					);
		// 				}
		// 			}
		// 		</script>
		// 		<script type="text/javascript" id="rocket-preload-links-js-extra">
		// 			/* <![CDATA[ */
		// 			var RocketPreloadLinksConfig = {
		// 				excludeUris:
		// 					"\/(?:.+\/)?feed(?:\/(?:.+\/?)?)?$|\/(?:.+\/)?embed\/|\/checkout\/|\/cart\/|\/my-account\/|\/wc-api\/v(.*)|\/(index\\.php\/)?(.*)wp\\-json(\/.*|$)|\/refer\/|\/go\/|\/recommend\/|\/recommends\/",
		// 				usesTrailingSlash: "1",
		// 				imageExt:
		// 					"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php",
		// 				fileExt:
		// 					"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php|html|htm",
		// 				siteUrl: "https:\/\/www.skjewellery.com",
		// 				onHoverDelay: "100",
		// 				rateThrottle: "3",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script type="text/javascript" id="rocket-preload-links-js-after">
		// 			class RocketPreloadLinks {
		// 				constructor(browser, config) {
		// 					this.browser = browser;
		// 					this.config = config;
		// 					this.options = this.browser.options;

		// 					this.prefetched = new Set();
		// 					this.eventTime = null;
		// 					this.threshold = 1111;
		// 					this.numOnHover = 0;
		// 				}

		// 				/**
		// 				 * Initializes the handler.
		// 				 */
		// 				init() {
		// 					if (
		// 						!this.browser.supportsLinkPrefetch() ||
		// 						this.browser.isDataSaverModeOn() ||
		// 						this.browser.isSlowConnection()
		// 					) {
		// 						return;
		// 					}

		// 					this.regex = {
		// 						excludeUris: RegExp(this.config.excludeUris, "i"),
		// 						images: RegExp(".(" + this.config.imageExt + ")$", "i"),
		// 						fileExt: RegExp(".(" + this.config.fileExt + ")$", "i"),
		// 					};

		// 					this._initListeners(this);
		// 				}

		// 				/**
		// 				 * Initializes the event listeners.
		// 				 *
		// 				 * @private
		// 				 *
		// 				 * @param self instance of this object, used for binding "this" to the listeners.
		// 				 */
		// 				_initListeners(self) {
		// 					// Setting onHoverDelay to -1 disables the "on-hover" feature.
		// 					if (this.config.onHoverDelay > -1) {
		// 						document.addEventListener(
		// 							"mouseover",
		// 							self.listener.bind(self),
		// 							self.listenerOptions
		// 						);
		// 					}

		// 					document.addEventListener(
		// 						"mousedown",
		// 						self.listener.bind(self),
		// 						self.listenerOptions
		// 					);
		// 					document.addEventListener(
		// 						"touchstart",
		// 						self.listener.bind(self),
		// 						self.listenerOptions
		// 					);
		// 				}

		// 				/**
		// 				 * Event listener. Processes when near or on a valid <a> hyperlink.
		// 				 *
		// 				 * @param Event event Event instance.
		// 				 */
		// 				listener(event) {
		// 					const linkElem = event.target.closest("a");
		// 					const url = this._prepareUrl(linkElem);
		// 					if (null === url) {
		// 						return;
		// 					}

		// 					switch (event.type) {
		// 						case "mousedown":
		// 						case "touchstart":
		// 							this._addPrefetchLink(url);
		// 							break;
		// 						case "mouseover":
		// 							this._earlyPrefetch(linkElem, url, "mouseout");
		// 					}
		// 				}

		// 				/**
		// 				 *
		// 				 * @private
		// 				 *
		// 				 * @param Element|null linkElem
		// 				 * @param object url
		// 				 * @param string resetEvent
		// 				 */
		// 				_earlyPrefetch(linkElem, url, resetEvent) {
		// 					const doPrefetch = () => {
		// 						falseTrigger = null;

		// 						// Start the rate throttle: 1 sec timeout.
		// 						if (0 === this.numOnHover) {
		// 							setTimeout(() => (this.numOnHover = 0), 1000);
		// 						}
		// 						// Bail out when exceeding the rate throttle.
		// 						else if (this.numOnHover > this.config.rateThrottle) {
		// 							return;
		// 						}

		// 						this.numOnHover++;
		// 						this._addPrefetchLink(url);
		// 					};

		// 					// Delay to avoid false triggers for hover/touch/tap.
		// 					let falseTrigger = setTimeout(doPrefetch, this.config.onHoverDelay);

		// 					// On reset event, reset the false trigger timer.
		// 					const reset = () => {
		// 						linkElem.removeEventListener(resetEvent, reset, { passive: true });
		// 						if (null === falseTrigger) {
		// 							return;
		// 						}

		// 						clearTimeout(falseTrigger);
		// 						falseTrigger = null;
		// 					};
		// 					linkElem.addEventListener(resetEvent, reset, { passive: true });
		// 				}

		// 				/**
		// 				 * Adds a <link rel="prefetch" href="<url>"> for the given URL.
		// 				 *
		// 				 * @param string url The Given URL to prefetch.
		// 				 */
		// 				_addPrefetchLink(url) {
		// 					this.prefetched.add(url.href);

		// 					return new Promise((resolve, reject) => {
		// 						const elem = document.createElement("link");
		// 						elem.rel = "prefetch";
		// 						elem.href = url.href;
		// 						elem.onload = resolve;
		// 						elem.onerror = reject;

		// 						document.head.appendChild(elem);
		// 					}).catch(() => {
		// 						// ignore and continue.
		// 					});
		// 				}

		// 				/**
		// 				 * Prepares the target link's URL.
		// 				 *
		// 				 * @private
		// 				 *
		// 				 * @param Element|null linkElem Instance of the link element.
		// 				 * @returns {null|*}
		// 				 */
		// 				_prepareUrl(linkElem) {
		// 					if (
		// 						null === linkElem ||
		// 						typeof linkElem !== "object" ||
		// 						!"href" in linkElem ||
		// 						// Link prefetching only works on http/https protocol.
		// 						["http:", "https:"].indexOf(linkElem.protocol) === -1
		// 					) {
		// 						return null;
		// 					}

		// 					const origin = linkElem.href.substring(0, this.config.siteUrl.length);
		// 					const pathname = this._getPathname(linkElem.href, origin);
		// 					const url = {
		// 						original: linkElem.href,
		// 						protocol: linkElem.protocol,
		// 						origin: origin,
		// 						pathname: pathname,
		// 						href: origin + pathname,
		// 					};

		// 					return this._isLinkOk(url) ? url : null;
		// 				}

		// 				/**
		// 				 * Gets the URL's pathname. Note: ensures the pathname matches the permalink structure.
		// 				 *
		// 				 * @private
		// 				 *
		// 				 * @param object url Instance of the URL.
		// 				 * @param string origin The target link href's origin.
		// 				 * @returns {string}
		// 				 */
		// 				_getPathname(url, origin) {
		// 					let pathname = origin
		// 						? url.substring(this.config.siteUrl.length)
		// 						: url;

		// 					if (!pathname.startsWith("/")) {
		// 						pathname = "/" + pathname;
		// 					}

		// 					if (this._shouldAddTrailingSlash(pathname)) {
		// 						return pathname + "/";
		// 					}

		// 					return pathname;
		// 				}

		// 				_shouldAddTrailingSlash(pathname) {
		// 					return (
		// 						this.config.usesTrailingSlash &&
		// 						!pathname.endsWith("/") &&
		// 						!this.regex.fileExt.test(pathname)
		// 					);
		// 				}

		// 				/**
		// 				 * Checks if the given link element is okay to process.
		// 				 *
		// 				 * @private
		// 				 *
		// 				 * @param object url URL parts object.
		// 				 *
		// 				 * @returns {boolean}
		// 				 */
		// 				_isLinkOk(url) {
		// 					if (null === url || typeof url !== "object") {
		// 						return false;
		// 					}

		// 					return (
		// 						!this.prefetched.has(url.href) &&
		// 						url.origin === this.config.siteUrl && // is an internal document.
		// 						url.href.indexOf("?") === -1 && // not a query string.
		// 						url.href.indexOf("#") === -1 && // not an anchor.
		// 						!this.regex.excludeUris.test(url.href) && // not excluded.
		// 						!this.regex.images.test(url.href) // not an image.
		// 					);
		// 				}

		// 				/**
		// 				 * Named static constructor to encapsulate how to create the object.
		// 				 */
		// 				static run() {
		// 					// Bail out if the configuration not passed from the server.
		// 					if (typeof RocketPreloadLinksConfig === "undefined") {
		// 						return;
		// 					}

		// 					const browser = new RocketBrowserCompatibilityChecker({
		// 						capture: true,
		// 						passive: true,
		// 					});
		// 					const instance = new RocketPreloadLinks(
		// 						browser,
		// 						RocketPreloadLinksConfig
		// 					);
		// 					instance.init();
		// 				}
		// 			}

		// 			RocketPreloadLinks.run();
		// 		</script>
		// 		<script type="text/javascript" id="tinvwl-js-extra">
		// 			/* <![CDATA[ */
		// 			var tinvwl_add_to_wishlist = {
		// 				text_create: "Create New",
		// 				text_already_in: "Product already in Wishlist",
		// 				simple_flow: "1",
		// 				hide_zero_counter: "",
		// 				i18n_make_a_selection_text:
		// 					"Please select some product options before adding this product to your wishlist.",
		// 				tinvwl_break_submit: "No items or actions are selected.",
		// 				tinvwl_clipboard: "Copied!",
		// 				allow_parent_variable: "",
		// 				block_ajax_wishlists_data: "",
		// 				update_wishlists_data: "",
		// 				hash_key: "ti_wishlist_data_7d19a9a2831bfc06f667f2fef78342e8",
		// 				nonce: "fff3578b18",
		// 				rest_root: "https:\/\/www.skjewellery.com\/wp-json\/",
		// 				plugin_url:
		// 					"https:\/\/www.skjewellery.com\/wp-content\/plugins\/ti-woocommerce-wishlist\/",
		// 				wc_ajax_url: "\/?wc-ajax=tinvwl",
		// 				stats: "",
		// 				popup_timer: "6000",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/ti-woocommerce-wishlist/assets/js/public.js?ver=2.4.4"
		// 			id="tinvwl-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/global.js?ver=03:26:17"
		// 			id="global-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/navigation.js?ver=20151215"
		// 			id="oa_skj-navigation-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/slick.js?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			id="slick-js-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-includes/js/jquery/ui/core.js?ver=1.13.2"
		// 			id="jquery-ui-core-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-includes/js/jquery/ui/datepicker.js?ver=1.13.2"
		// 			id="jquery-ui-datepicker-js"
		// 		></script>
		// 		<script type="text/javascript" id="jquery-ui-datepicker-js-after">
		// 			jQuery(function (jQuery) {
		// 				jQuery.datepicker.setDefaults({
		// 					closeText: "Close",
		// 					currentText: "Today",
		// 					monthNames: [
		// 						"January",
		// 						"February",
		// 						"March",
		// 						"April",
		// 						"May",
		// 						"June",
		// 						"July",
		// 						"August",
		// 						"September",
		// 						"October",
		// 						"November",
		// 						"December",
		// 					],
		// 					monthNamesShort: [
		// 						"Jan",
		// 						"Feb",
		// 						"Mar",
		// 						"Apr",
		// 						"May",
		// 						"Jun",
		// 						"Jul",
		// 						"Aug",
		// 						"Sep",
		// 						"Oct",
		// 						"Nov",
		// 						"Dec",
		// 					],
		// 					nextText: "Next",
		// 					prevText: "Previous",
		// 					dayNames: [
		// 						"Sunday",
		// 						"Monday",
		// 						"Tuesday",
		// 						"Wednesday",
		// 						"Thursday",
		// 						"Friday",
		// 						"Saturday",
		// 					],
		// 					dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		// 					dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
		// 					dateFormat: "MM d, yy",
		// 					firstDay: 1,
		// 					isRTL: false,
		// 				});
		// 			});
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			id="jquery-ui-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			id="jqueryui-touch-punch-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/jquery.validate.min.js?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			id="jquery-validation-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/assets/dropzone/dropzone.js?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			id="dropzone-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js?ver=f1f0f3238cf9a74096f1aa508647daa3"
		// 			id="html2canvas-js"
		// 		></script>
		// 		<script type="text/javascript" id="customjs-js-extra">
		// 			/* <![CDATA[ */
		// 			var ajax_genre_params = {
		// 				ajax_url: "https:\/\/www.skjewellery.com\/wp-admin\/admin-ajax.php",
		// 				home_url: "https:\/\/www.skjewellery.com",
		// 				check_is_single: "",
		// 				theme_url: "https:\/\/www.skjewellery.com\/wp-content\/themes\/SK6.5.0",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			data-cfasync="true"
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/custom.js?ver=03:26:17"
		// 			id="customjs-js"
		// 		></script>
		// 		<iframe
		// 			id="_hjSafeContext_96555217"
		// 			title="_hjSafeContext"
		// 			tabindex="-1"
		// 			aria-hidden="true"
		// 			src="about:blank"
		// 			style="
		// 				display: none !important;
		// 				width: 1px !important;
		// 				height: 1px !important;
		// 				opacity: 0 !important;
		// 				pointer-events: none !important;
		// 			"
		// 		></iframe>
		// 		<noscript
		// 			><a href="https://www.livechatinc.com/chat-with/11661638/" rel="nofollow"
		// 				>Chat with us</a
		// 			>, powered by
		// 			<a
		// 				href="https://www.livechatinc.com/?welcome"
		// 				rel="noopener nofollow"
		// 				target="_blank"
		// 				>LiveChat</a
		// 			></noscript
		// 		>

		// 		<script type="text/javascript" id="">
		// 			window.dataLayer = window.dataLayer || [];
		// 			function gtag() {
		// 				dataLayer.push(arguments);
		// 			}
		// 			gtag("js", new Date());
		// 			gtag("config", "DC-6643807");
		// 		</script>

		// 		<img
		// 			src="//sg-gmtdmp.mookie1.com/t/v2/activity?tagid=V2_1038005&amp;src.rand=[timestamp]&amp;"
		// 			style="display: none"
		// 		/>
		// 		<script type="text/javascript" id="alt-optimize-js-extra">
		// 			/* <![CDATA[ */
		// 			var altOptimize = {
		// 				ajax_url: "https:\/\/www.skjewellery.com\/wp-admin\/admin-ajax.php",
		// 				critical: null,
		// 				plugin_url: "https:\/\/www.skjewellery.com\/wp-content\/plugins",
		// 				theme_url: "https:\/\/www.skjewellery.com\/wp-content\/themes\/SK6.5.0",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/js/optimize.js?ver=03:26:17"
		// 			id="alt-optimize-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js?ver=20150825"
		// 			id="timepicker-js-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/woo-custom/alt-ajax-cart/js/woo-ajax-remove-cart-item.js?ver=230524030526"
		// 			id="svl-remove-cart-item-ajax-js"
		// 		></script>
		// 		<script type="text/javascript" id="oaps-frontend-js-js-extra">
		// 			/* <![CDATA[ */
		// 			var oapsAjaxLocalization = {
		// 				ajaxurl: "https:\/\/www.skjewellery.com\/wp-admin\/admin-ajax.php",
		// 				addOfferToCart: "oaps_add_offer_to_cart_ajax",
		// 				addGWPToCart: "oaps_gwp_add_to_cart_ajax",
		// 				addPWPToCart: "oaps_pwp_add_to_cart_ajax",
		// 			};
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/oa-promo-system/build/oaps-frontend.js?ver=230524030526"
		// 			id="oaps-frontend-js-js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-includes/js/hoverIntent.js?ver=1.10.2"
		// 			id="hoverIntent-js"
		// 		></script>
		// 		<script type="text/javascript" id="megamenu-js-extra">
		// 			/* <![CDATA[ */
		// 			var megamenu = { timeout: "300", interval: "100" };
		// 			/* ]]> */
		// 		</script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/megamenu/js/maxmegamenu.js?ver=3.2.2"
		// 			id="megamenu-js"
		// 		></script>
		// 		<script type="text/javascript">
		// 			(function (undefined) {
		// 				var _localizedStrings = {
		// 					redirect_overlay_title: "Hold On",
		// 					redirect_overlay_text:
		// 						"You are being redirected to another page,<br>it may take a few seconds.",
		// 				};
		// 				var _targetWindow = "prefer-popup";
		// 				var _redirectOverlay = "overlay-with-spinner-and-message";
		// 				/**
		// 				 * Used when Cross-Origin-Opener-Policy blocked the access to the opener. We can't have a reference of the opened windows, so we should attempt to refresh only the windows that has opened popups.
		// 				 */
		// 				window._nslHasOpenedPopup = false;

		// 				window.NSLPopup = function (url, title, w, h) {
		// 					var userAgent = navigator.userAgent,
		// 						mobile = function () {
		// 							return (
		// 								/\b(iPhone|iP[ao]d)/.test(userAgent) ||
		// 								/\b(iP[ao]d)/.test(userAgent) ||
		// 								/Android/i.test(userAgent) ||
		// 								/Mobile/i.test(userAgent)
		// 							);
		// 						},
		// 						screenX =
		// 							window.screenX !== undefined ? window.screenX : window.screenLeft,
		// 						screenY =
		// 							window.screenY !== undefined ? window.screenY : window.screenTop,
		// 						outerWidth =
		// 							window.outerWidth !== undefined
		// 								? window.outerWidth
		// 								: document.documentElement.clientWidth,
		// 						outerHeight =
		// 							window.outerHeight !== undefined
		// 								? window.outerHeight
		// 								: document.documentElement.clientHeight - 22,
		// 						targetWidth = mobile() ? null : w,
		// 						targetHeight = mobile() ? null : h,
		// 						left = parseInt(screenX + (outerWidth - targetWidth) / 2, 10),
		// 						right = parseInt(screenY + (outerHeight - targetHeight) / 2.5, 10),
		// 						features = [];
		// 					if (targetWidth !== null) {
		// 						features.push("width=" + targetWidth);
		// 					}
		// 					if (targetHeight !== null) {
		// 						features.push("height=" + targetHeight);
		// 					}
		// 					features.push("left=" + left);
		// 					features.push("top=" + right);
		// 					features.push("scrollbars=1");

		// 					var newWindow = window.open(url, title, features.join(","));

		// 					if (window.focus) {
		// 						newWindow.focus();
		// 					}

		// 					window._nslHasOpenedPopup = true;

		// 					return newWindow;
		// 				};

		// 				var isWebView = null;

		// 				function checkWebView() {
		// 					if (isWebView === null) {
		// 						function _detectOS(ua) {
		// 							if (/Android/.test(ua)) {
		// 								return "Android";
		// 							} else if (/iPhone|iPad|iPod/.test(ua)) {
		// 								return "iOS";
		// 							} else if (/Windows/.test(ua)) {
		// 								return "Windows";
		// 							} else if (/Mac OS X/.test(ua)) {
		// 								return "Mac";
		// 							} else if (/CrOS/.test(ua)) {
		// 								return "Chrome OS";
		// 							} else if (/Firefox/.test(ua)) {
		// 								return "Firefox OS";
		// 							}
		// 							return "";
		// 						}

		// 						function _detectBrowser(ua) {
		// 							var android = /Android/.test(ua);

		// 							if (/Opera Mini/.test(ua) || / OPR/.test(ua) || / OPT/.test(ua)) {
		// 								return "Opera";
		// 							} else if (/CriOS/.test(ua)) {
		// 								return "Chrome for iOS";
		// 							} else if (/Edge/.test(ua)) {
		// 								return "Edge";
		// 							} else if (android && /Silk\//.test(ua)) {
		// 								return "Silk";
		// 							} else if (/Chrome/.test(ua)) {
		// 								return "Chrome";
		// 							} else if (/Firefox/.test(ua)) {
		// 								return "Firefox";
		// 							} else if (android) {
		// 								return "AOSP";
		// 							} else if (/MSIE|Trident/.test(ua)) {
		// 								return "IE";
		// 							} else if (/Safari\//.test(ua)) {
		// 								return "Safari";
		// 							} else if (/AppleWebKit/.test(ua)) {
		// 								return "WebKit";
		// 							}
		// 							return "";
		// 						}

		// 						function _detectBrowserVersion(ua, browser) {
		// 							if (browser === "Opera") {
		// 								return /Opera Mini/.test(ua)
		// 									? _getVersion(ua, "Opera Mini/")
		// 									: / OPR/.test(ua)
		// 									? _getVersion(ua, " OPR/")
		// 									: _getVersion(ua, " OPT/");
		// 							} else if (browser === "Chrome for iOS") {
		// 								return _getVersion(ua, "CriOS/");
		// 							} else if (browser === "Edge") {
		// 								return _getVersion(ua, "Edge/");
		// 							} else if (browser === "Chrome") {
		// 								return _getVersion(ua, "Chrome/");
		// 							} else if (browser === "Firefox") {
		// 								return _getVersion(ua, "Firefox/");
		// 							} else if (browser === "Silk") {
		// 								return _getVersion(ua, "Silk/");
		// 							} else if (browser === "AOSP") {
		// 								return _getVersion(ua, "Version/");
		// 							} else if (browser === "IE") {
		// 								return /IEMobile/.test(ua)
		// 									? _getVersion(ua, "IEMobile/")
		// 									: /MSIE/.test(ua)
		// 									? _getVersion(ua, "MSIE ")
		// 									: _getVersion(ua, "rv:");
		// 							} else if (browser === "Safari") {
		// 								return _getVersion(ua, "Version/");
		// 							} else if (browser === "WebKit") {
		// 								return _getVersion(ua, "WebKit/");
		// 							}
		// 							return "0.0.0";
		// 						}

		// 						function _getVersion(ua, token) {
		// 							try {
		// 								return _normalizeSemverString(
		// 									ua
		// 										.split(token)[1]
		// 										.trim()
		// 										.split(/[^\w\.]/)[0]
		// 								);
		// 							} catch (o_O) {}
		// 							return "0.0.0";
		// 						}

		// 						function _normalizeSemverString(version) {
		// 							var ary = version.split(/[\._]/);
		// 							return (
		// 								(parseInt(ary[0], 10) || 0) +
		// 								"." +
		// 								(parseInt(ary[1], 10) || 0) +
		// 								"." +
		// 								(parseInt(ary[2], 10) || 0)
		// 							);
		// 						}

		// 						function _isWebView(ua, os, browser, version, options) {
		// 							switch (os + browser) {
		// 								case "iOSSafari":
		// 									return false;
		// 								case "iOSWebKit":
		// 									return _isWebView_iOS(options);
		// 								case "AndroidAOSP":
		// 									return false;
		// 								case "AndroidChrome":
		// 									return parseFloat(version) >= 42
		// 										? /; wv/.test(ua)
		// 										: /\d{2}\.0\.0/.test(version)
		// 										? true
		// 										: _isWebView_Android(options);
		// 							}
		// 							return false;
		// 						}

		// 						function _isWebView_iOS(options) {
		// 							var document = window["document"] || {};

		// 							if ("WEB_VIEW" in options) {
		// 								return options["WEB_VIEW"];
		// 							}
		// 							return !(
		// 								"fullscreenEnabled" in document ||
		// 								"webkitFullscreenEnabled" in document ||
		// 								false
		// 							);
		// 						}

		// 						function _isWebView_Android(options) {
		// 							if ("WEB_VIEW" in options) {
		// 								return options["WEB_VIEW"];
		// 							}
		// 							return !(
		// 								"requestFileSystem" in window ||
		// 								"webkitRequestFileSystem" in window ||
		// 								false
		// 							);
		// 						}

		// 						var options = {};
		// 						var nav = window.navigator || {};
		// 						var ua = nav.userAgent || "";
		// 						var os = _detectOS(ua);
		// 						var browser = _detectBrowser(ua);
		// 						var browserVersion = _detectBrowserVersion(ua, browser);

		// 						isWebView = _isWebView(ua, os, browser, browserVersion, options);
		// 					}

		// 					return isWebView;
		// 				}

		// 				function isAllowedWebViewForUserAgent(provider) {
		// 					var facebookAllowedWebViews = ["Instagram", "FBAV", "FBAN"],
		// 						whitelist = [];

		// 					if (provider && provider === "facebook") {
		// 						whitelist = facebookAllowedWebViews;
		// 					}

		// 					var nav = window.navigator || {};
		// 					var ua = nav.userAgent || "";

		// 					if (whitelist.length && ua.match(new RegExp(whitelist.join("|")))) {
		// 						return true;
		// 					}

		// 					return false;
		// 				}

		// 				window._nslDOMReady(function () {
		// 					window.nslRedirect = function (url) {
		// 						if (_redirectOverlay) {
		// 							var overlay = document.createElement("div");
		// 							overlay.id = "nsl-redirect-overlay";
		// 							var overlayHTML = "",
		// 								overlayContainer = "<div id='nsl-redirect-overlay-container'>",
		// 								overlayContainerClose = "</div>",
		// 								overlaySpinner =
		// 									"<div id='nsl-redirect-overlay-spinner'></div>",
		// 								overlayTitle =
		// 									"<p id='nsl-redirect-overlay-title'>" +
		// 									_localizedStrings.redirect_overlay_title +
		// 									"</p>",
		// 								overlayText =
		// 									"<p id='nsl-redirect-overlay-text'>" +
		// 									_localizedStrings.redirect_overlay_text +
		// 									"</p>";

		// 							switch (_redirectOverlay) {
		// 								case "overlay-only":
		// 									break;
		// 								case "overlay-with-spinner":
		// 									overlayHTML =
		// 										overlayContainer + overlaySpinner + overlayContainerClose;
		// 									break;
		// 								default:
		// 									overlayHTML =
		// 										overlayContainer +
		// 										overlaySpinner +
		// 										overlayTitle +
		// 										overlayText +
		// 										overlayContainerClose;
		// 									break;
		// 							}

		// 							overlay.insertAdjacentHTML("afterbegin", overlayHTML);
		// 							document.body.appendChild(overlay);
		// 						}

		// 						window.location = url;
		// 					};

		// 					var targetWindow = _targetWindow || "prefer-popup",
		// 						lastPopup = false;

		// 					var buttonLinks = document.querySelectorAll(
		// 						' a[data-plugin="nsl"][data-action="connect"], a[data-plugin="nsl"][data-action="link"]'
		// 					);
		// 					buttonLinks.forEach(function (buttonLink) {
		// 						buttonLink.addEventListener("click", function (e) {
		// 							if (lastPopup && !lastPopup.closed) {
		// 								e.preventDefault();
		// 								lastPopup.focus();
		// 							} else {
		// 								var href = this.href,
		// 									success = false;
		// 								if (href.indexOf("?") !== -1) {
		// 									href += "&";
		// 								} else {
		// 									href += "?";
		// 								}

		// 								var redirectTo = this.dataset.redirect;
		// 								if (redirectTo === "current") {
		// 									href +=
		// 										"redirect=" +
		// 										encodeURIComponent(window.location.href) +
		// 										"&";
		// 								} else if (redirectTo && redirectTo !== "") {
		// 									href += "redirect=" + encodeURIComponent(redirectTo) + "&";
		// 								}

		// 								if (targetWindow !== "prefer-same-window" && checkWebView()) {
		// 									targetWindow = "prefer-same-window";
		// 								}

		// 								if (targetWindow === "prefer-popup") {
		// 									lastPopup = NSLPopup(
		// 										href + "display=popup",
		// 										"nsl-social-connect",
		// 										this.dataset.popupwidth,
		// 										this.dataset.popupheight
		// 									);
		// 									if (lastPopup) {
		// 										success = true;
		// 										e.preventDefault();
		// 									}
		// 								} else if (targetWindow === "prefer-new-tab") {
		// 									var newTab = window.open(href + "display=popup", "_blank");
		// 									if (newTab) {
		// 										if (window.focus) {
		// 											newTab.focus();
		// 										}
		// 										success = true;
		// 										window._nslHasOpenedPopup = true;
		// 										e.preventDefault();
		// 									}
		// 								}

		// 								if (!success) {
		// 									window.location = href;
		// 									e.preventDefault();
		// 								}
		// 							}
		// 						});
		// 					});

		// 					let hasWebViewLimitation = false;

		// 					var googleLoginButtons = document.querySelectorAll(
		// 						' a[data-plugin="nsl"][data-provider="google"]'
		// 					);
		// 					if (googleLoginButtons.length && checkWebView()) {
		// 						googleLoginButtons.forEach(function (googleLoginButton) {
		// 							googleLoginButton.remove();
		// 							hasWebViewLimitation = true;
		// 						});
		// 					}

		// 					var facebookLoginButtons = document.querySelectorAll(
		// 						' a[data-plugin="nsl"][data-provider="facebook"]'
		// 					);
		// 					if (
		// 						facebookLoginButtons.length &&
		// 						checkWebView() &&
		// 						/Android/.test(window.navigator.userAgent) &&
		// 						!isAllowedWebViewForUserAgent("facebook")
		// 					) {
		// 						facebookLoginButtons.forEach(function (facebookLoginButton) {
		// 							facebookLoginButton.remove();
		// 							hasWebViewLimitation = true;
		// 						});
		// 					}

		// 					const separators = document.querySelectorAll("div.nsl-separator");
		// 					if (hasWebViewLimitation && separators.length) {
		// 						separators.forEach(function (separator) {
		// 							let separatorParentNode = separator.parentNode;
		// 							if (separatorParentNode) {
		// 								const separatorButtonContainer =
		// 									separatorParentNode.querySelector(
		// 										"div.nsl-container-buttons"
		// 									);
		// 								if (
		// 									separatorButtonContainer &&
		// 									!separatorButtonContainer.hasChildNodes()
		// 								) {
		// 									separator.remove();
		// 								}
		// 							}
		// 						});
		// 					}
		// 				});

		// 				/**
		// 				 * Cross-Origin-Opener-Policy blocked the access to the opener
		// 				 */
		// 				if (typeof BroadcastChannel === "function") {
		// 					const _nslLoginBroadCastChannel = new BroadcastChannel(
		// 						"nsl_login_broadcast_channel"
		// 					);
		// 					_nslLoginBroadCastChannel.onmessage = (event) => {
		// 						if (
		// 							window?._nslHasOpenedPopup &&
		// 							event.data?.action === "redirect"
		// 						) {
		// 							window._nslHasOpenedPopup = false;

		// 							const url = event.data?.href;
		// 							_nslLoginBroadCastChannel.close();
		// 							if (typeof window.nslRedirect === "function") {
		// 								window.nslRedirect(url);
		// 							} else {
		// 								window.opener.location = url;
		// 							}
		// 						}
		// 					};
		// 				}
		// 			})();
		// 		</script>
		// 		<script id="tpl-alt-header-menu" type="text/template">
		// 			<div class="container-fluid"> <div class="row pt-15px pb-15px search-parent"> <div class="col-12"> <div class="row no-gutters justify-content-between"> <div class="col-4 d-flex align-items-center"> <div class="toggle-button" data-toggle="menu"> <div class="hbg-btn"> <span></span> <span></span> <span></span> </div> </div> <div class="country-selector"> <span class="location-icon location-icon--en"></span> <span class="agp-light fs-12">SG</span> <span class="skinny__arrow"> <span class="skinny__arrow-top"></span> <span class="skinny__arrow-bottom"></span> </span> <ul class="agp-light fs-12"> <li><a href="https://www.skjewellery.com/">SG</a> </li> <li><a href="https://www.skjewellery.com.my">MY</a> </li> </ul> </div> <a class="store-location" href="https://www.skjewellery.com/locate-us">  <span class="icon-widget"> <img src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/images/pin.webp" alt="Pin Icon"> </span> <span class="text-widget">STORE LOCATOR</span> </a> <a class="cons-url" href="https://www.skjewellery.com/consultation"> <span class="icon-widget"> <img src="https://www.skjewellery.com/wp-content/themes/SK6.5.0/images/notes.webp" width="19" height="20" alt="Book Apointment Icon"> </span> <span class="text-widget">Book Appointment</span> </a> </div> <div class="col-4 top-header-center"> <a href="https://www.skjewellery.com" class="custom-logo-link" rel="home"> <img width="110" height="85" class="custom-logo" src="https://www.skjewellery.com/wp-content/uploads/2022/02/SKJ_logo-2.png.webp" alt="SK Jewellery Logo"> </a> </div> <div class="col-4 d-flex align-items-center justify-content-end"> <i class="navbar-icons navbar-icon-search"></i> <div class="navbar-icons navbar-icons-wishlist"> <a href="https://www.skjewellery.com/wishlist"> </a> </div> <div class="navbar-icons navbar-icons-account"> <a href="https://www.skjewellery.com/my-account"> </a> </div> <div class="navbar-icons navbar-icons-cart"> <a href="https://www.skjewellery.com/cart"> <span class="cart-indicator"></span> </a> </div> </div> </div> </div> </div></div><div class="nav-separator"></div><div class="container-fluid header-nav__wrapper is-loading"> <div class="header-nav"> <div class="col-1 p-0 header-nav__logo"> <a href="https://www.skjewellery.com" class="custom-logo-link" rel="home"> <img width="110" height="85" class="custom-logo" src="https://www.skjewellery.com/wp-content/uploads/2022/02/SKJ_logo-2.png.webp" alt="SK Jewellery Logo"> </a> </div> <nav id="site-navigation" class="row main-navigation"> <div id="mega-menu-wrap-main-navigation-1" class="mega-menu-wrap"><div class="mega-menu-toggle"><div class="mega-toggle-blocks-left"></div><div class="mega-toggle-blocks-center"></div><div class="mega-toggle-blocks-right"><div class='mega-toggle-block mega-menu-toggle-animated-block mega-toggle-block-0' id='mega-toggle-block-0'><button aria-label="Toggle Menu" class="mega-toggle-animated mega-toggle-animated-slider" type="button" aria-expanded="false"> <span class="mega-toggle-animated-box"> <span class="mega-toggle-animated-inner"></span> </span> </button></div></div></div><ul id="mega-menu-main-navigation-1" class="mega-menu max-mega-menu mega-menu-horizontal mega-no-js" data-event="hover" data-effect="disabled" data-effect-speed="200" data-effect-mobile="disabled" data-effect-speed-mobile="0" data-mobile-force-width="false" data-second-click="go" data-document-click="collapse" data-vertical-behaviour="standard" data-breakpoint="768" data-unbind="true" data-mobile-state="collapse_all" data-hover-intent-timeout="300" data-hover-intent-interval="100"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-menu-item-417781' id='mega-menu-item-417781'><a class="mega-menu-link" href="/product-category/new-in/" tabindex="0">New Arrivals</a></li><li class='mega-full-width mega-menus-jewellery mega-alt-has-submenu-toggle mega-alt-has-border mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-megamenu mega-menu-item-417783 full-width menus-jewellery alt-has-submenu-toggle alt-has-border' id='mega-menu-item-417783'><a class="mega-menu-link" href="#" aria-haspopup="true" aria-expanded="false" tabindex="0">Jewellery<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-no-event mega-grid-layout mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417784 no-event grid-layout' id='mega-menu-item-417784'><a class="mega-menu-link" href="/product-category/rings/">Rings<span class="mega-indicator"></span></a><a class="menu-has-image" href="/product-category/rings/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Rings.webp" /></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417785' id='mega-menu-item-417785'><a class="mega-menu-link" href="/product-category/diamond-rings/">Diamond Rings</a><a class="menu-has-image" href="/product-category/diamond-rings/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417786' id='mega-menu-item-417786'><a class="mega-menu-link" href="/product-category/gold-rings/">Gold Rings</a><a class="menu-has-image" href="/product-category/gold-rings/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417787' id='mega-menu-item-417787'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/everyday-rings">Everyday Rings</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/everyday-rings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Everyday.webp" /></a></li><li class='mega-mobile-hide-border mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417788 mobile-hide-border' id='mega-menu-item-417788'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/gemstone-rings">Gemstone Rings</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/gemstone-rings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstone.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-has-description mega-menu-item-531802' id='mega-menu-item-531802'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/eternity-rings"><span class="mega-description-group"><span class="mega-menu-title">Eternity Rings</span><span class="mega-menu-description">Symbolize eternal love and commitment with our exquisite collection of eternity rings. Crafted with precision and adorned with shimmering gemstones or diamonds, our eternity rings are a timeless symbol of everlasting affection. Each ring features a continuous band of stones that wrap around the entire circumference, representing an unending bond.</span></span></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-has-description mega-menu-item-531803' id='mega-menu-item-531803'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/stacking-rings"><span class="mega-description-group"><span class="mega-menu-title">Stacking Rings</span><span class="mega-menu-description">Discover the art of stacking rings and express your unique style. Explore our exquisite collection of versatile rings designed to be stacked, mixed, and matched. Create a personalized look that reflects your personality and showcases your individuality.</span></span></a></li><li class='mega-primary-link mega-rings-online-exclusives mega-only-desktop mega-mobile-hide-border mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-hide-on-mobile mega-hide-sub-menu-on-mobile mega-menu-item-419040 primary-link rings-online-exclusives only-desktop mobile-hide-border' id='mega-menu-item-419040'><a class="mega-menu-link" href="/collection/best-sellers">Best Sellers</a><a class="menu-has-image" href="/collection/best-sellers"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp" /></a></li></ul></li><li class='mega-no-event mega-only-desktop mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417790 no-event only-desktop' id='mega-menu-item-417790'><a class="mega-menu-link" href="/product-category/chains">Chains<span class="mega-indicator"></span></a><a class="menu-has-image" href="/product-category/chains"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Chain.webp" /></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417791' id='mega-menu-item-417791'><a class="mega-menu-link" href="/product-category/chains">Gold Chains</a></li></ul></li><li class='mega-only-mobile mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-columns-1-of-6 mega-menu-item-417792 only-mobile' id='mega-menu-item-417792'><a class="mega-menu-link" href="/product-category/chains">Chains</a><a class="menu-has-image" href="/product-category/chains"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Chain.webp" /></a></li><li class='mega-no-event mega-sub_menu_second mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417793 no-event sub_menu_second' id='mega-menu-item-417793'><a class="mega-menu-link" href="/product-category/pendants-necklaces">Pendants & Necklaces<span class="mega-indicator"></span></a><a class="menu-has-image" href="/product-category/pendants-necklaces"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Pendants-Necklaces-copy.webp" /></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417794' id='mega-menu-item-417794'><a class="mega-menu-link" href="/product-category/diamond-pendants">Diamond Pendants</a><a class="menu-has-image" href="/product-category/diamond-pendants"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamonds.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417795' id='mega-menu-item-417795'><a class="mega-menu-link" href="/product-category/gold-pendants">Gold Pendants</a><a class="menu-has-image" href="/product-category/gold-pendants"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Pendant.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417796' id='mega-menu-item-417796'><a class="mega-menu-link" href="/product-category/silver-pendants">Silver Pendants</a><a class="menu-has-image" href="/product-category/silver-pendants"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Silver.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-has-description mega-menu-item-531801' id='mega-menu-item-531801'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/pearl-pendants"><span class="mega-description-group"><span class="mega-menu-title">Pearl Pendants</span><span class="mega-menu-description">Elevate your style with our exquisite collection of pearl pendants. Discover the timeless beauty of pearls and their enchanting luster. Our meticulously crafted pendants feature lustrous pearls in various shapes and sizes, complemented by elegant designs.</span></span></a></li></ul></li><li class='mega-no-event mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417797 no-event' id='mega-menu-item-417797'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/bracelets">Bracelets<span class="mega-indicator"></span></a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/bracelets"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Bracelets.webp" /></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417798' id='mega-menu-item-417798'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/gold-bracelets">Gold Bracelets</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/gold-bracelets"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-1.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417799' id='mega-menu-item-417799'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/diamond-bracelets">Diamond Bracelets</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/diamond-bracelets"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-1.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-has-description mega-menu-item-417800' id='mega-menu-item-417800'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/everyday-bracelets"><span class="mega-description-group"><span class="mega-menu-title">Everyday Bracelets</span><span class="mega-menu-description">Live your everyday with style! Discover dainty and unique designs perfect for your effortless, everyday styling.</span></span></a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/everyday-bracelets"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Everyday-1.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417801' id='mega-menu-item-417801'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/pixiu-bracelets">Pixiu Bracelets</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/pixiu-bracelets"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Pixiu.webp" /></a></li></ul></li><li class='mega-sub_menu_second mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417802 sub_menu_second' id='mega-menu-item-417802'><a class="mega-menu-link" href="/product-category/bangles">Bangles<span class="mega-indicator"></span></a><a class="menu-has-image" href="/product-category/bangles"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Bangles.webp" /></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417803' id='mega-menu-item-417803'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/gold-bangles">Gold Bangles</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/gold-bangles"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bangles.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417804' id='mega-menu-item-417804'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/diamond-bangles">Diamond Bangles</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/diamond-bangles"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-Bangles.webp" /></a></li></ul></li><li class='mega-no-event mega-Earrings mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-clear mega-menu-item-417805 no-event Earrings' id='mega-menu-item-417805'><a class="mega-menu-link" href="/product-category/earrings">Earrings<span class="mega-indicator"></span></a><a class="menu-has-image" href="/product-category/earrings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Earrings.webp" /></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417806' id='mega-menu-item-417806'><a class="mega-menu-link" href="/product-category/diamond-earrings">Diamond Earrings</a><a class="menu-has-image" href="/product-category/diamond-earrings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-Earrings.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417807' id='mega-menu-item-417807'><a class="mega-menu-link" href="/product-category/gold-earrings">Gold Earrings</a><a class="menu-has-image" href="/product-category/gold-earrings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Earrings.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-has-description mega-menu-item-417808' id='mega-menu-item-417808'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/everyday-earrings"><span class="mega-description-group"><span class="mega-menu-title">Everyday Earrings</span><span class="mega-menu-description">Earrings kept simple and stylish, perfect for your everyday accessorizing.</span></span></a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/everyday-earrings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Everyday-Earrings.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-has-description mega-menu-item-531800' id='mega-menu-item-531800'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/pearl-earrings"><span class="mega-description-group"><span class="mega-menu-title">Pearl Earrings</span><span class="mega-menu-description">Our exquisite collection offers a range of stunning designs, each showcasing the natural elegance of pearls. From classic studs to dangle earrings, our pearl pieces are meticulously crafted using high-quality pearls and fine materials.</span></span></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-has-description mega-menu-item-531799' id='mega-menu-item-531799'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/hoop-earrings"><span class="mega-description-group"><span class="mega-menu-title">Hoop Earrings</span><span class="mega-menu-description">Explore our diverse range of sizes, materials, and designs, and let our hoop earrings accentuate your natural beauty with their graceful charm. Shop now and embrace the allure of hoop earrings..</span></span></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-has-description mega-menu-item-531798' id='mega-menu-item-531798'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/dangle-earrings"><span class="mega-description-group"><span class="mega-menu-title">Dangle Earrings</span><span class="mega-menu-description">Crafted with precision and attention to detail, our dangle earrings showcase an enchanting interplay of movement and grace. Explore our selection of dangling gemstones, pearls, and intricate metalwork, each piece designed to make a statement.</span></span></a></li></ul></li><li class='mega-no-event mega-Anklets mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-426365 no-event Anklets' id='mega-menu-item-426365'><a class="mega-menu-link" href="/product-category/anklets">Anklets<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-has-description mega-menu-item-531797' id='mega-menu-item-531797'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/gold-anklets"><span class="mega-description-group"><span class="mega-menu-title">Gold Anklets</span><span class="mega-menu-description">Our stunning collection features a variety of designs, meticulously crafted with high-quality 916 gold. From delicate and minimalistic chains to intricate and ornate patterns, our gold anklets are a symbol of elegance and luxury.</span></span></a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-has-description mega-menu-item-531796' id='mega-menu-item-531796'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/baby-anklets"><span class="mega-description-group"><span class="mega-menu-title">Baby Anklets</span><span class="mega-menu-description">Introducing our adorable collection of baby anklets, designed to add a touch of sweetness to your little one’s ensemble. Each anklet features charming charms or delicate beads, creating a whimsical and delightful accessory for your baby’s tiny feet.</span></span></a></li></ul></li><li class='mega-no-event mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417809 no-event' id='mega-menu-item-417809'><a class="mega-menu-link" href="/product-category/charms">Charms<span class="mega-indicator"></span></a><a class="menu-has-image" href="/product-category/charms"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Charms.webp" /></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417810' id='mega-menu-item-417810'><a class="mega-menu-link" href="/product-category/animals">Animals</a><a class="menu-has-image" href="/product-category/animals"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Animals.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417811' id='mega-menu-item-417811'><a class="mega-menu-link" href="/product-category/zodiac">Zodiac</a><a class="menu-has-image" href="/product-category/zodiac"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Zodiac.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417812' id='mega-menu-item-417812'><a class="mega-menu-link" href="/product-category/classic">Classic</a><a class="menu-has-image" href="/product-category/classic"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Classic.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417813' id='mega-menu-item-417813'><a class="mega-menu-link" href="/product-category/blessings">Blessings</a><a class="menu-has-image" href="/product-category/blessings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Blessings.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-419533' id='mega-menu-item-419533'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/disney/">Disney</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/disney/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/04/Mickey.webp" /></a></li></ul></li><li class='mega-no-event mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417814 no-event' id='mega-menu-item-417814'><a class="mega-menu-link" href="/product-category/gold-collectibles">Gold Bars & Figurines<span class="mega-indicator"></span></a><a class="menu-has-image" href="/product-category/gold-collectibles"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bars-Figurines.webp" /></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417815' id='mega-menu-item-417815'><a class="mega-menu-link" href="/product-category/classic-gold-bars">Classic Gold Bars</a><a class="menu-has-image" href="/product-category/classic-gold-bars"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Classic-GB.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417816' id='mega-menu-item-417816'><a class="mega-menu-link" href="/product-category/square-gold-bars">Square Gold Bars</a><a class="menu-has-image" href="/product-category/square-gold-bars"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Square-GB.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417817' id='mega-menu-item-417817'><a class="mega-menu-link" href="/product-category/figurines">Figurines</a><a class="menu-has-image" href="/product-category/figurines"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Figurines.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417818' id='mega-menu-item-417818'><a class="mega-menu-link" href="/product-category/coins">Coins</a><a class="menu-has-image" href="/product-category/coins"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Coins.webp" /></a></li></ul></li><li class='mega-no-event mega-mobile-link mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-columns-1-of-6 mega-menu-item-531812 no-event mobile-link' id='mega-menu-item-531812'><a class="mega-menu-link" href="/collection/best-sellers">Best Sellers</a><a class="menu-has-image" href="/collection/best-sellers"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp" /></a></li></ul></li><li class='mega-full-width mega-menu-collections mega-menus-jewellery mega-alt-has-submenu-toggle mega-alt-has-border mega-custom-mega-menu-1 mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-megamenu mega-menu-item-417820 full-width menu-collections menus-jewellery alt-has-submenu-toggle alt-has-border custom-mega-menu-1' id='mega-menu-item-417820'><a class="mega-menu-link" href="#" aria-haspopup="true" aria-expanded="false" tabindex="0">Collections<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-no-event mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-2-of-10 mega-menu-item-417821 no-event' id='mega-menu-item-417821'><a class="mega-menu-link">Everyday Collections<span class="mega-indicator"></span></a><a class="menu-has-image" href=""><img src="https://www.skjewellery.com/wp-content/uploads/2023/04/Everyday-Collections.webp" /></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417827' id='mega-menu-item-417827'><a class="mega-menu-link" href="/collection/celestial-shine/">Sun, Star & Moon</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417826' id='mega-menu-item-417826'><a class="mega-menu-link" href="/collection/lock-and-key/">Locks & Keys</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417824' id='mega-menu-item-417824'><a class="mega-menu-link" href="/collection/cross-jewellery/">Cross</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417823' id='mega-menu-item-417823'><a class="mega-menu-link" href="/collection/nature-inspired/">Nature-Inspired</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-422645' id='mega-menu-item-422645'><a class="mega-menu-link" href="/collection/animals-pets/">Animals & Pets</a></li><li class='mega-bottom-space mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417822 bottom-space' id='mega-menu-item-417822'><a class="mega-menu-link" href="/collection/shima-pearls/">Shima Pearls</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-424206' id='mega-menu-item-424206'><a class="mega-menu-link" href="https://www.skjewellery.com/collection/starlett-diamonds/">Starlett Lab Diamonds</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-424207' id='mega-menu-item-424207'><a class="mega-menu-link" href="https://www.skjewellery.com/collection/skarlet-diamonds/">Skarlet Mined Diamonds</a></li></ul></li><li class='mega-no-event mega-sub_menu_second mega-show-mobile mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-columns-1-of-10 mega-menu-item-424039 no-event sub_menu_second show-mobile' id='mega-menu-item-424039'><a class="mega-menu-link" href="/product-category/online-exclusive/">Online Exclusives</a><a class="menu-has-image" href="/product-category/online-exclusive/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp" /></a></li><li class='mega-no-event mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-2-of-10 mega-menu-item-417841 no-event' id='mega-menu-item-417841'><a class="mega-menu-link">Auspicious Collections<span class="mega-indicator"></span></a><a class="menu-has-image" href=""><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Jade.webp" /></a><ul class="mega-sub-menu"><li class='mega-no-event mega-sub_menu_second mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417838 no-event sub_menu_second' id='mega-menu-item-417838'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/pixiu-bracelets/">Pixiu Blessing</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417843' id='mega-menu-item-417843'><a class="mega-menu-link" href="/collection/abacus-abundance/">Abacus Abundance</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-522740' id='mega-menu-item-522740'><a class="mega-menu-link" href="https://www.skjewellery.com/collection/jade/">Modern Jade</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417839' id='mega-menu-item-417839'><a class="mega-menu-link" href="/collection/four-leaf-clover/">Four Leaf Clover</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417840' id='mega-menu-item-417840'><a class="mega-menu-link" href="/collection/999-pure-gold">999 Pure Gold</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417842' id='mega-menu-item-417842'><a class="mega-menu-link" href="/collection/sk-916/">SK 916 Gold</a></li></ul></li><li class='mega-no-event mega-sub_menu_second mega-show-mobile mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-10 mega-menu-item-417844 no-event sub_menu_second show-mobile' id='mega-menu-item-417844'><a class="mega-menu-link">Past’s Campaigns<span class="mega-indicator"></span></a><a class="menu-has-image" href=""><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/In-Store-Exclusives.webp" /></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417837' id='mega-menu-item-417837'><a class="mega-menu-link" href="/collection/valentines-day">Valentine’s Day</a></li><li class='mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_occasions mega-has-description mega-menu-item-527932' id='mega-menu-item-527932'><a class="mega-menu-link" href="https://www.skjewellery.com/product_occasions/for-mum"><span class="mega-description-group"><span class="mega-menu-title">Celebrate Mom's Endless Love</span><span class="mega-menu-description">Be it jade for the cool, pearls for the wise, diamonds for the stylish and gold for the bold – we’ve got something for every mum in Singapore. Celebrate mum with a meaningful gift, and make everyday Mother’s Day.</span></span></a></li></ul></li><li class='mega-menu-item mega-menu-item-type-widget widget_media_gallery mega-menu-columns-6-of-10 mega-menu-clear mega-menu-item-media_gallery-2' id='mega-menu-item-media_gallery-2'><h4 class="mega-block-title"><span>Categories</span></h4><div id='gallery-2' class='gallery galleryid-0 gallery-columns-4 gallery-size-thumbnail'><figure class='gallery-item'><div class='gallery-icon landscape'><a href='https://www.skjewellery.com/all-star/'><img width="150" height="150" src="https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-150x150.webp" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" aria-describedby="gallery-2-424042" srcset="https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-150x150.webp 150w, https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-300x300.webp 300w, https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-354x354.webp 354w, https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-100x100.webp 100w, https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star.webp 400w" sizes="" /></a></div><figcaption class='wp-caption-text gallery-caption' id='gallery-2-424042'><a href="https://www.skjewellery.com/collection/allstar-diamonds/">Allstar Diamond</a></figcaption></figure><figure class='gallery-item'><div class='gallery-icon landscape'><a href='https://www.skjewellery.com/star-carat/'><img width="150" height="150" src="https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-150x150.webp" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" aria-describedby="gallery-2-424050" srcset="https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-150x150.webp 150w, https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-300x300.webp 300w, https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-354x354.webp 354w, https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-100x100.webp 100w, https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat.webp 400w" sizes="" /></a></div><figcaption class='wp-caption-text gallery-caption' id='gallery-2-424050'><a href="https://www.skjewellery.com/collection/star-carat-diamonds/">Star Carat Diamond</a></figcaption></figure><figure class='gallery-item'><div class='gallery-icon landscape'><a href='https://www.skjewellery.com/?attachment_id=424046'><img width="150" height="150" src="https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-150x150.webp" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" aria-describedby="gallery-2-424046" srcset="https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-150x150.webp 150w, https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-300x300.webp 300w, https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-354x354.webp 354w, https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-100x100.webp 100w, https://www.skjewellery.com/wp-content/uploads/2023/04/Disney.webp 400w" sizes="" /></a></div><figcaption class='wp-caption-text gallery-caption' id='gallery-2-424046'><a href="https://www.skjewellery.com/collection/disney-collection/">Disney</a></figcaption></figure><figure class='gallery-item'><div class='gallery-icon landscape'><a href='https://www.skjewellery.com/local-k-gold/'><img width="150" height="150" src="https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-150x150.webp" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" aria-describedby="gallery-2-424047" srcset="https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-150x150.webp 150w, https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-300x300.webp 300w, https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-768x768.webp 768w, https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-354x354.webp 354w, https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-480x480.webp 480w, https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-700x700.webp 700w, https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-100x100.webp 100w, https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold.webp 1000w" sizes="" /></a></div><figcaption class='wp-caption-text gallery-caption' id='gallery-2-424047'><a href="https://www.skjewellery.com/collection/loca-k-gold/">Loca K-Gold</a></figcaption></figure><figure class='gallery-item'><div class='gallery-icon landscape'><a href='https://www.skjewellery.com/dancing-star-2/'><img width="150" height="150" src="https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-150x150.webp" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" aria-describedby="gallery-2-424044" srcset="https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-150x150.webp 150w, https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-300x300.webp 300w, https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-354x354.webp 354w, https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-100x100.webp 100w, https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star.webp 400w" sizes="" /></a></div><figcaption class='wp-caption-text gallery-caption' id='gallery-2-424044'><a href="https://www.skjewellery.com/collection/dancing-star/">Dancing Star</a></figcaption></figure><figure class='gallery-item'><div class='gallery-icon landscape'><a href='https://www.skjewellery.com/locate-us/amk-hub/oro-amare-2/'><img width="150" height="150" src="https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-150x150.webp" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" aria-describedby="gallery-2-424048" srcset="https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-150x150.webp 150w, https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-300x300.webp 300w, https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-354x354.webp 354w, https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-100x100.webp 100w, https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare.webp 400w" sizes="" /></a></div><figcaption class='wp-caption-text gallery-caption' id='gallery-2-424048'><a href="https://www.skjewellery.com/collection/oro-amare/">Oro Amare</a></figcaption></figure><figure class='gallery-item'><div class='gallery-icon landscape'><a href='https://www.skjewellery.com/locate-us/amk-hub/sdj-menu/'><img width="150" height="150" src="https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" aria-describedby="gallery-2-424049" srcset="https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-150x150.jpg 150w, https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-300x300.jpg 300w, https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-768x768.jpg 768w, https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-354x354.jpg 354w, https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-480x480.jpg 480w, https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-700x700.jpg 700w, https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-100x100.jpg 100w, https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu.jpg 1000w" sizes="" /></a></div><figcaption class='wp-caption-text gallery-caption' id='gallery-2-424049'><a href="https://www.skjewellery.com/collection/si-dian-jin">Si Dian Jin</a></figcaption></figure><figure class='gallery-item'><div class='gallery-icon landscape'><a href='https://www.skjewellery.com/artboard-7/'><img width="150" height="150" src="https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy" aria-describedby="gallery-2-424043" srcset="https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-150x150.jpg 150w, https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-300x300.jpg 300w, https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-354x354.jpg 354w, https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-100x100.jpg 100w, https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7.jpg 400w" sizes="" /></a></div><figcaption class='wp-caption-text gallery-caption' id='gallery-2-424043'><a href="https://www.skjewellery.com/collection/gold-legacy/">Gold Legacy</a></figcaption></figure></div></li></ul></li><li class='mega-bridal mega-menus-jewellery mega-alt-has-submenu-toggle mega-alt-has-border mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-megamenu mega-menu-item-417847 bridal menus-jewellery alt-has-submenu-toggle alt-has-border' id='mega-menu-item-417847'><a class="mega-menu-link" href="#" aria-haspopup="true" aria-expanded="false" tabindex="0">Bridal<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-no-event mega-only-desktop mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417848 no-event only-desktop' id='mega-menu-item-417848'><a class="mega-menu-link" href="/product_bridal/engagement-rings">Engagement Rings<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417849' id='mega-menu-item-417849'><a class="mega-menu-link" href="/product_bridal/engagement-rings">Our Engagement Suite</a></li></ul></li><li class='mega-only-mobile mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-hide-on-desktop mega-menu-columns-1-of-6 mega-menu-item-417850 only-mobile' id='mega-menu-item-417850'><a class="mega-menu-link" href="/product_bridal/engagement-rings">Engagement Rings</a></li><li class='mega-no-event mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417851 no-event' id='mega-menu-item-417851'><a class="mega-menu-link" href="/product_bridal/wedding-bands">Wedding Bands<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417852' id='mega-menu-item-417852'><a class="mega-menu-link" href="/product_bridal/men-wedding-bands">Male Wedding Bands</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417853' id='mega-menu-item-417853'><a class="mega-menu-link" href="/product_bridal/women-wedding-bands">Female Wedding Bands</a></li></ul></li><li class='mega-no-event mega-only-desktop mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417854 no-event only-desktop' id='mega-menu-item-417854'><a class="mega-menu-link" href="/product_bridal/bridal-si-dian-jin">Si Dian Jin<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417855' id='mega-menu-item-417855'><a class="mega-menu-link" href="/collection/si-dian-jin/">All Si Dian Jin</a></li></ul></li><li class='mega-only-mobile mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-hide-on-desktop mega-menu-columns-1-of-6 mega-menu-item-417856 only-mobile' id='mega-menu-item-417856'><a class="mega-menu-link" href="/collection/si-dian-jin">Si Dian Jin</a></li><li class='mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-columns-3-of-6 mega-menu-clear mega-menu-item-media_image-19' id='mega-menu-item-media_image-19'><h4 class="mega-block-title"><span>New Arrival Wedding Bands</span></h4><a href="/product_bridal/women-wedding-bands"><img width="1386" height="756" src="https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image.webp" class="image wp-image-422656 attachment-full size-full" alt="" decoding="async" loading="lazy" style="max-width: 100%; height: auto;" title="WEDDING BANDS FOR HER" srcset="https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image.webp 1386w, https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image-300x164.webp 300w, https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image-1024x559.webp 1024w, https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image-768x419.webp 768w, https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image-480x262.webp 480w, https://www.skjewellery.com/wp-content/uploads/2023/03/Wedding-Band-Menu-Image-700x382.webp 700w" sizes="" /></a></li><li class='mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-columns-2-of-6 mega-menu-item-media_image-20' id='mega-menu-item-media_image-20'><h4 class="mega-block-title"><span>999 Pure Gold Bridal 四点金</span></h4><a href="/collection/si-dian-jin/"><img width="1386" height="756" src="https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image.webp" class="image wp-image-422657 attachment-full size-full" alt="" decoding="async" loading="lazy" style="max-width: 100%; height: auto;" title="WEDDING BANDS FOR HIM" srcset="https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image.webp 1386w, https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image-300x164.webp 300w, https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image-1024x559.webp 1024w, https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image-768x419.webp 768w, https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image-480x262.webp 480w, https://www.skjewellery.com/wp-content/uploads/2023/03/SDJ-Menu-Image-700x382.webp 700w" sizes="" /></a></li></ul></li><li class='mega-menu-gifts mega-list-layout mega-level1 mega-has-banner mega-alt-has-submenu-toggle mega-alt-has-border mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-megamenu mega-menu-item-417857 menu-gifts list-layout level1 has-banner alt-has-submenu-toggle alt-has-border' id='mega-menu-item-417857'><a class="mega-menu-link" href="#" aria-haspopup="true" aria-expanded="false" tabindex="0">Gifts<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-no-event mega-oas-no-hover mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417859 no-event oas-no-hover' id='mega-menu-item-417859'><a class="mega-menu-link" href="#">Recipients<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417860' id='mega-menu-item-417860'><a class="mega-menu-link" href="/product_recipients/for-him">For Him</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417861' id='mega-menu-item-417861'><a class="mega-menu-link" href="/product_recipients/for-her">For Her</a></li></ul></li><li class='mega-no-event mega-oas-no-hover mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417862 no-event oas-no-hover' id='mega-menu-item-417862'><a class="mega-menu-link" href="#">Occasions<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417863' id='mega-menu-item-417863'><a class="mega-menu-link" href="/product_occasions/birthdays">Birthdays</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417864' id='mega-menu-item-417864'><a class="mega-menu-link" href="/product_occasions/anniversaries">Anniversaries</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417865' id='mega-menu-item-417865'><a class="mega-menu-link" href="/product_occasions/for-mum">For Mum</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417866' id='mega-menu-item-417866'><a class="mega-menu-link" href="/product_occasions/wedding">Wedding</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417867' id='mega-menu-item-417867'><a class="mega-menu-link" href="/product_occasions/kids">Kids</a></li></ul></li><li class='mega-no-event mega-oas-no-hover mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-6 mega-menu-item-417868 no-event oas-no-hover' id='mega-menu-item-417868'><a class="mega-menu-link" href="#">Price Range<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417869' id='mega-menu-item-417869'><a class="mega-menu-link" href="/product_price-range/gifts-under-200">Gifts under $200</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417870' id='mega-menu-item-417870'><a class="mega-menu-link" href="/product_price-range/gifts-under-500">Gifts under $500</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417871' id='mega-menu-item-417871'><a class="mega-menu-link" href="/product_price-range/gifts-under-1000">Gifts under $1000</a></li></ul></li><li class='mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-columns-2-of-6 mega-menu-item-media_image-21' id='mega-menu-item-media_image-21'><h4 class="mega-block-title"><span>Send a Gift of Smiles, Sparkles and Shine</span></h4><a href="/collection/gifts-she-will-love"><img width="300" height="174" src="https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu-300x174.jpg" class="image wp-image-417903 attachment-medium size-medium" alt="" decoding="async" loading="lazy" style="max-width: 100%; height: auto;" srcset="https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu-300x174.jpg 300w, https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu-1024x593.jpg.webp 1024w, https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu-768x445.jpg 768w, https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu-480x278.jpg.webp 480w, https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu-700x406.jpg 700w, https://www.skjewellery.com/wp-content/uploads/2023/02/gifting_menu.jpg.webp 1450w" sizes="" /></a></li><li class='mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-columns-2-of-6 mega-menu-clear mega-menu-item-media_image-22' id='mega-menu-item-media_image-22'><h4 class="mega-block-title"><span>Jewellery for Little Ones</span></h4><a href="/product_occasions/kids/"><img width="300" height="280" src="https://www.skjewellery.com/wp-content/uploads/2023/02/mday_menu-300x280.jpg" class="image wp-image-417904 attachment-medium size-medium" alt="" decoding="async" loading="lazy" style="max-width: 100%; height: auto;" srcset="https://www.skjewellery.com/wp-content/uploads/2023/02/mday_menu-300x280.jpg 300w, https://www.skjewellery.com/wp-content/uploads/2023/02/mday_menu-768x717.jpg 768w, https://www.skjewellery.com/wp-content/uploads/2023/02/mday_menu-480x448.jpg.webp 480w, https://www.skjewellery.com/wp-content/uploads/2023/02/mday_menu-700x653.jpg 700w, https://www.skjewellery.com/wp-content/uploads/2023/02/mday_menu.jpg.webp 900w" sizes="" /></a></li><li class='mega-banner-mobile mega-only-mobile mega-only-desktop mega-no-text mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-columns-1-of-6 mega-menu-item-417858 banner-mobile only-mobile only-desktop no-text' id='mega-menu-item-417858'><a class="mega-menu-link" href="#">gift banner</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-columns-1-of-6 mega-menu-item-421719' id='mega-menu-item-421719'><a class="mega-menu-link" href="/corporate-gifts/">Corporate Gifts</a></li></ul></li><li class='mega-personalise mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-menu-item-417872 personalise' id='mega-menu-item-417872'><a class="mega-menu-link" href="#" aria-haspopup="true" aria-expanded="false" tabindex="0">Personalise<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-menu-row mega-emm_element_center emm_element_center' id='mega-menu-417872-0'><ul class="mega-sub-menu"><li class='mega-menu-column mega-menu-columns-3-of-12' id='mega-menu-417872-0-0'><ul class="mega-sub-menu"><li class='mega-bg_layout mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417873 bg_layout' id='mega-menu-item-417873'><a class="mega-menu-link" href="/charm-builder/">Charm Builder</a><a class="menu-has-image" href="/charm-builder/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Zodiac-Charms-Mobile-1.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-7' id='mega-menu-item-text-7'><h4 class="mega-block-title"><span></span></h4><div class="textwidget"><p>Create your own charm bracelet with a curated collection of 999 Pure Gold Charms.</p><p>&nbsp;</p></div></li><li class='mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-7' id='mega-menu-item-custom_html-7'><h4 class="mega-block-title"><span></span></h4><div class="textwidget custom-html-widget"><a href="/charm-builder/">Let's Go &gt;</a></div></li><li class='mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-23' id='mega-menu-item-media_image-23'><h4 class="mega-block-title"><span></span></h4><a href="/charm-builder/"><img width="300" height="164" src="https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-300x164.jpg" class="image wp-image-417906 attachment-medium size-medium" alt="" decoding="async" loading="lazy" style="max-width: 100%; height: auto;" srcset="https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-300x164.jpg 300w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-1024x559.jpg.webp 1024w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-768x419.jpg 768w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-1536x838.jpg 1536w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-480x262.jpg.webp 480w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1-700x382.jpg 700w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-1.jpg.webp 1540w" sizes="" /></a></li></ul></li><li class='mega-menu-column mega-menu-columns-3-of-12' id='mega-menu-417872-0-1'><ul class="mega-sub-menu"><li class='mega-bg_layout mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417874 bg_layout' id='mega-menu-item-417874'><a class="mega-menu-link" href="/gold-bar-customiser/">Gold Bar Customiser</a><a class="menu-has-image" href="/gold-bar-customiser/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bar-Banner.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-5' id='mega-menu-item-text-5'><h4 class="mega-block-title"><span></span></h4><div class="textwidget"><p>Capture the perfect moments with your loved ones and customise them into gold bars.</p><p>Perfect for gifting!</p></div></li><li class='mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-6' id='mega-menu-item-custom_html-6'><h4 class="mega-block-title"><span></span></h4><div class="textwidget custom-html-widget"><a href="/gold-bar-customiser/">Let's Go &gt;</a></div></li><li class='mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-25' id='mega-menu-item-media_image-25'><h4 class="mega-block-title"><span></span></h4><a href="/gold-bar-customiser/"><img width="300" height="300" src="https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-300x300.jpg" class="image wp-image-417907 attachment-medium size-medium" alt="" decoding="async" loading="lazy" style="max-width: 100%; height: auto;" srcset="https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-300x300.jpg 300w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-1024x1024.jpg.webp 1024w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-150x150.jpg 150w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-768x768.jpg 768w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-354x354.jpg 354w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-480x480.jpg.webp 480w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-700x700.jpg.webp 700w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2-100x100.jpg 100w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-2.jpg.webp 1500w" sizes="" /></a></li></ul></li><li class='mega-menu-column mega-menu-columns-3-of-12' id='mega-menu-417872-0-2'><ul class="mega-sub-menu"><li class='mega-bg_layout mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417875 bg_layout' id='mega-menu-item-417875'><a class="mega-menu-link" href="/personalised-name-necklace">Yours Truly</a><a class="menu-has-image" href="/personalised-name-necklace"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/04-Personalise-3-1-1.webp" /></a></li><li class='mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-6' id='mega-menu-item-text-6'><h4 class="mega-block-title"><span></span></h4><div class="textwidget"><p>Create your very own customised necklace alongside your birthstone.</p><p>&nbsp;</p></div></li><li class='mega-menu-item mega-menu-item-type-widget widget_custom_html mega-menu-item-custom_html-5' id='mega-menu-item-custom_html-5'><h4 class="mega-block-title"><span></span></h4><div class="textwidget custom-html-widget"><a href="/personalised-name-necklace">Let's Go &gt;</a></div></li><li class='mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-item-media_image-24' id='mega-menu-item-media_image-24'><h4 class="mega-block-title"><span></span></h4><a href="/personalised-name-necklace"><img width="300" height="164" src="https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-300x164.jpg" class="image wp-image-417908 attachment-medium size-medium" alt="" decoding="async" loading="lazy" style="max-width: 100%; height: auto;" srcset="https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-300x164.jpg 300w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-1024x559.jpg.webp 1024w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-768x419.jpg 768w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-1536x838.jpg 1536w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-480x262.jpg.webp 480w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3-700x382.jpg 700w, https://www.skjewellery.com/wp-content/uploads/2023/02/04-Personalise-3.jpg.webp 1540w" sizes="" /></a></li></ul></li></ul></li></ul></li><li class='mega-menu-highlights mega-menus-jewellery mega-alt-has-submenu-toggle mega-alt-has-border mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-megamenu mega-menu-item-417876 menu-highlights menus-jewellery alt-has-submenu-toggle alt-has-border' id='mega-menu-item-417876'><a class="mega-menu-link" href="#" aria-haspopup="true" aria-expanded="false" tabindex="0">Guides<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-no-event mega-oas-no-hover mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-4 mega-menu-item-417877 no-event oas-no-hover' id='mega-menu-item-417877'><a class="mega-menu-link" href="#">SK's World of Jewellery<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417878' id='mega-menu-item-417878'><a class="mega-menu-link" href="/ring-sizer-guide/">Ring Size Guide</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417879' id='mega-menu-item-417879'><a class="mega-menu-link" href="/wedding-bands/">Wedding Bands Guide</a></li><li class='mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-417880' id='mega-menu-item-417880'><a class="mega-menu-link" href="https://www.skjewellery.com/jewellery-care-guide/">Jewellery Care Guide</a></li><li class='mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-417881' id='mega-menu-item-417881'><a class="mega-menu-link" href="https://www.skjewellery.com/gold-jewellery-guide/">Gold Jewellery Guide</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417882' id='mega-menu-item-417882'><a class="mega-menu-link" href="/sidianjin/">Si Dian Jin (四点金) Guide</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417883' id='mega-menu-item-417883'><a class="mega-menu-link" href="/gold-legacy/">Gold Legacy (古法金)</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417884' id='mega-menu-item-417884'><a class="mega-menu-link" href="/gift-guide-for-kids/">Gift Guide for Kids</a></li></ul></li><li class='mega-no-event mega-oas-no-hover mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-4 mega-menu-item-417885 no-event oas-no-hover' id='mega-menu-item-417885'><a class="mega-menu-link" href="#">Specialties<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417886' id='mega-menu-item-417886'><a class="mega-menu-link" href="/about-lab-grown-diamonds/">Lab Grown Diamonds</a></li><li class='mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-417887' id='mega-menu-item-417887'><a class="mega-menu-link" href="https://www.skjewellery.com/allstar-diamond/">AllStar Diamond</a></li></ul></li><li class='mega-no-event mega-oas-no-hover mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-columns-1-of-4 mega-menu-item-417888 no-event oas-no-hover' id='mega-menu-item-417888'><a class="mega-menu-link" href="#">Keeping You Updated<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class='mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-417889' id='mega-menu-item-417889'><a class="mega-menu-link" href="https://www.skjewellery.com/to-my-supermom/">SK Mother's Day Campaign</a></li><li class='mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-417890' id='mega-menu-item-417890'><a class="mega-menu-link" href="https://www.skjewellery.com/made-with-passion/">SK Jewellery X Made with Passion</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417891' id='mega-menu-item-417891'><a class="mega-menu-link" href="/news/">News</a></li><li class='mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417892' id='mega-menu-item-417892'><a class="mega-menu-link" href="/blog">Blog</a></li></ul></li><li class='mega-menu-item mega-menu-item-type-widget widget_media_image mega-menu-columns-3-of-4 mega-menu-clear mega-menu-item-media_image-26' id='mega-menu-item-media_image-26'><h4 class="mega-block-title"><span>Discover the World of Disney</span></h4><a href="/celebrate-love-with-disney-collection/"><img width="300" height="280" src="https://www.skjewellery.com/wp-content/uploads/2023/02/Disney_900x840-1-300x280.jpg" class="image wp-image-417909 attachment-medium size-medium" alt="" decoding="async" loading="lazy" style="max-width: 100%; height: auto;" srcset="https://www.skjewellery.com/wp-content/uploads/2023/02/Disney_900x840-1-300x280.jpg 300w, https://www.skjewellery.com/wp-content/uploads/2023/02/Disney_900x840-1-768x717.jpg 768w, https://www.skjewellery.com/wp-content/uploads/2023/02/Disney_900x840-1-480x448.jpg.webp 480w, https://www.skjewellery.com/wp-content/uploads/2023/02/Disney_900x840-1-700x653.jpg 700w, https://www.skjewellery.com/wp-content/uploads/2023/02/Disney_900x840-1.jpg.webp 900w" sizes="" /></a></li></ul></li><li class='mega-menu-locator mega-only-desktop mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-hide-on-mobile mega-menu-item-417893 menu-locator only-desktop' id='mega-menu-item-417893'><a class="mega-menu-link" href="/locate-us" tabindex="0">Store Locator</a></li><li class='mega-menu-shipto mega-only-desktop mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-megamenu mega-align-bottom-left mega-menu-megamenu mega-hide-on-mobile mega-menu-item-417894 menu-shipto only-desktop' id='mega-menu-item-417894'><a class="mega-menu-link" href="#" tabindex="0">Ship to: Singapore</a></li></ul></div> </nav> <div class="header-search"> <form action="https://www.skjewellery.com" method="get" autocomplete="off"> <input type="text" name="s" placeholder="I'm searching for..." id="open-search"> <span class="search__icon search__icon--loading"></span> <span class="search__icon search__icon--glass"></span> <input type="submit" value="Search" class="search-submit"> <img class="delvify-camera" width="24" height="24" margin="0px" padding="0px" src="https://smart-tag.s3.ap-southeast-1.amazonaws.com/widget-assets/dv-camera.svg?6351" alt="default"> </form> </div> </div></div><!-- Cached@24/05/2023 12:39 AM -->
		// 		</script>
		// 		<script id="tpl-alt-header-menu-mobile" type="text/template">
		// 			<div id="mega-menu-wrap-main-navigation-1" class="mega-menu-wrap"><ul id="mega-menu-main-navigation-1" class="mega-menu max-mega-menu mega-menu-horizontal mega-no-js" data-event="hover" data-effect="disabled" data-effect-speed="200" data-effect-mobile="disabled" data-effect-speed-mobile="0" data-mobile-force-width="false" data-second-click="go" data-document-click="collapse" data-vertical-behaviour="standard" data-breakpoint="768" data-unbind="true" data-mobile-state="collapse_all" data-hover-intent-timeout="300" data-hover-intent-interval="100"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417781 mega-alt-depth-0 mega-abc_0' id='mega-menu-item-417781'><a class="mega-menu-link" href="/product-category/new-in/" tabindex="0">New Arrivals</a></li><li class='alt-li-item mega-menu-megamenu mega-full-width mega-menus-jewellery mega-alt-has-submenu-toggle mega-alt-has-border mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417783 mega-alt-depth-0 mega-abc_0 full-width menus-jewellery alt-has-submenu-toggle alt-has-border' id='mega-menu-item-417783'><a class="mega-menu-link" href="#" tabindex="0">Jewellery<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class="top-child-menu"><div class="menu-back"><div class="menu-back__icon"></div><div class="menu-back__text"><a href="#">Menu</a></div></div><div class="banner-item-menu"></div></li><li class="wrapper-li-item"><ul class="child-ul"><li class='alt-li-item mega-menu-megamenu mega-no-event mega-grid-layout mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417784 mega-alt-depth-1 mega-abc_1 no-event grid-layout' id='mega-menu-item-417784'><a class="mega-menu-link" href="/product-category/rings/">Rings<span class="mega-indicator alt-mega-indicator"></span></a><a class="menu-has-image" href="/product-category/rings/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Rings.webp" /></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417785 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417785'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/diamond-rings/">Diamond Rings</a><a class="menu-has-image" href="/product-category/diamond-rings/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417786 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417786'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/gold-rings/">Gold Rings</a><a class="menu-has-image" href="/product-category/gold-rings/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417787 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417787'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/everyday-rings">Everyday Rings</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/everyday-rings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Everyday.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-mobile-hide-border mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417788 mega-alt-depth-2 mega-abc_2 mobile-hide-border' id='mega-menu-item-417788'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/gemstone-rings">Gemstone Rings</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/gemstone-rings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstone.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-531802 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-531802'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/eternity-rings">Eternity Rings</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-531803 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-531803'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/stacking-rings">Stacking Rings</a></div></li><li class='alt-li-item mega-menu-megamenu mega-primary-link mega-rings-online-exclusives mega-only-desktop mega-mobile-hide-border mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-419040 mega-alt-depth-2 mega-abc_2 primary-link rings-online-exclusives only-desktop mobile-hide-border' id='mega-menu-item-419040'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/best-sellers">Best Sellers</a><a class="menu-has-image" href="/collection/best-sellers"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp" /></a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-only-desktop mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417790 mega-alt-depth-1 mega-abc_1 no-event only-desktop' id='mega-menu-item-417790'><a class="mega-menu-link" href="/product-category/chains">Chains<span class="mega-indicator alt-mega-indicator"></span></a><a class="menu-has-image" href="/product-category/chains"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Chain.webp" /></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417791 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417791'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/chains">Gold Chains</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-only-mobile mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417792 mega-alt-depth-1 mega-abc_1 only-mobile' id='mega-menu-item-417792'><a class="mega-menu-link" href="/product-category/chains">Chains</a><a class="menu-has-image" href="/product-category/chains"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Chain.webp" /></a></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-sub_menu_second mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417793 mega-alt-depth-1 mega-abc_1 no-event sub_menu_second' id='mega-menu-item-417793'><a class="mega-menu-link" href="/product-category/pendants-necklaces">Pendants & Necklaces<span class="mega-indicator alt-mega-indicator"></span></a><a class="menu-has-image" href="/product-category/pendants-necklaces"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Pendants-Necklaces-copy.webp" /></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417794 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417794'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/diamond-pendants">Diamond Pendants</a><a class="menu-has-image" href="/product-category/diamond-pendants"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamonds.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417795 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417795'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/gold-pendants">Gold Pendants</a><a class="menu-has-image" href="/product-category/gold-pendants"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Pendant.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417796 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417796'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/silver-pendants">Silver Pendants</a><a class="menu-has-image" href="/product-category/silver-pendants"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Silver.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-531801 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-531801'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/pearl-pendants">Pearl Pendants</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-has-children mega-menu-item-417797 mega-alt-depth-1 mega-abc_1 no-event' id='mega-menu-item-417797'><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/bracelets">Bracelets<span class="mega-indicator alt-mega-indicator"></span></a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/bracelets"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Bracelets.webp" /></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417798 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417798'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/gold-bracelets">Gold Bracelets</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/gold-bracelets"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-1.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417799 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417799'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/diamond-bracelets">Diamond Bracelets</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/diamond-bracelets"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-1.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417800 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417800'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/everyday-bracelets">Everyday Bracelets</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/everyday-bracelets"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Everyday-1.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417801 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417801'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/pixiu-bracelets">Pixiu Bracelets</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/pixiu-bracelets"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Pixiu.webp" /></a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-sub_menu_second mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417802 mega-alt-depth-1 mega-abc_1 sub_menu_second' id='mega-menu-item-417802'><a class="mega-menu-link" href="/product-category/bangles">Bangles<span class="mega-indicator alt-mega-indicator"></span></a><a class="menu-has-image" href="/product-category/bangles"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Bangles.webp" /></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417803 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417803'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/gold-bangles">Gold Bangles</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/gold-bangles"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bangles.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417804 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417804'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/diamond-bangles">Diamond Bangles</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/diamond-bangles"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-Bangles.webp" /></a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-Earrings mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417805 mega-alt-depth-1 mega-abc_1 no-event Earrings' id='mega-menu-item-417805'><a class="mega-menu-link" href="/product-category/earrings">Earrings<span class="mega-indicator alt-mega-indicator"></span></a><a class="menu-has-image" href="/product-category/earrings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Earrings.webp" /></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417806 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417806'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/diamond-earrings">Diamond Earrings</a><a class="menu-has-image" href="/product-category/diamond-earrings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Diamond-Earrings.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417807 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417807'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/gold-earrings">Gold Earrings</a><a class="menu-has-image" href="/product-category/gold-earrings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Earrings.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-417808 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417808'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/everyday-earrings">Everyday Earrings</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/everyday-earrings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Everyday-Earrings.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-531800 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-531800'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/pearl-earrings">Pearl Earrings</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-531799 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-531799'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/hoop-earrings">Hoop Earrings</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-531798 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-531798'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/dangle-earrings">Dangle Earrings</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-Anklets mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-426365 mega-alt-depth-1 mega-abc_1 no-event Anklets' id='mega-menu-item-426365'><a class="mega-menu-link" href="/product-category/anklets">Anklets<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-531797 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-531797'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/gold-anklets">Gold Anklets</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_cat mega-menu-item-531796 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-531796'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/baby-anklets">Baby Anklets</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417809 mega-alt-depth-1 mega-abc_1 no-event' id='mega-menu-item-417809'><a class="mega-menu-link" href="/product-category/charms">Charms<span class="mega-indicator alt-mega-indicator"></span></a><a class="menu-has-image" href="/product-category/charms"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Charms.webp" /></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417810 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417810'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/animals">Animals</a><a class="menu-has-image" href="/product-category/animals"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Animals.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417811 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417811'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/zodiac">Zodiac</a><a class="menu-has-image" href="/product-category/zodiac"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Zodiac.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417812 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417812'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/classic">Classic</a><a class="menu-has-image" href="/product-category/classic"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Classic.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417813 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417813'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/blessings">Blessings</a><a class="menu-has-image" href="/product-category/blessings"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Blessings.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-419533 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-419533'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/disney/">Disney</a><a class="menu-has-image" href="https://www.skjewellery.com/product-category/disney/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/04/Mickey.webp" /></a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417814 mega-alt-depth-1 mega-abc_1 no-event' id='mega-menu-item-417814'><a class="mega-menu-link" href="/product-category/gold-collectibles">Gold Bars & Figurines<span class="mega-indicator alt-mega-indicator"></span></a><a class="menu-has-image" href="/product-category/gold-collectibles"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bars-Figurines.webp" /></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417815 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417815'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/classic-gold-bars">Classic Gold Bars</a><a class="menu-has-image" href="/product-category/classic-gold-bars"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Classic-GB.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417816 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417816'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/square-gold-bars">Square Gold Bars</a><a class="menu-has-image" href="/product-category/square-gold-bars"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Square-GB.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417817 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417817'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/figurines">Figurines</a><a class="menu-has-image" href="/product-category/figurines"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Figurines.webp" /></a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417818 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417818'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product-category/coins">Coins</a><a class="menu-has-image" href="/product-category/coins"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Coins.webp" /></a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-mobile-link mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-531812 mega-alt-depth-1 mega-abc_1 no-event mobile-link' id='mega-menu-item-531812'><a class="mega-menu-link" href="/collection/best-sellers">Best Sellers</a><a class="menu-has-image" href="/collection/best-sellers"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp" /></a></li></ul></li><li class="emm_bottom_menu"><ul class=""><li class="mega-menu-calendar mega-menu-item menu-calendar"><a class="mega-menu-link" href="/consultation/" tabindex="0">Book Appointment</a></li><li class="alt-li-item mega-menu-locator mega-menu-item menu-locator"><a class="mega-menu-link" href="/locate-us" tabindex="0">Store Locator</a></li><li class="alt-li-item mega-menu-shipto mega-menu-item menu-shipto"><a class="mega-menu-link no-hover" href="#" tabindex="0">Ship to: Singapore</a></li><li class="alt-li-item mega-menu-acc mega-menu-item menu-acc"><a class="mega-menu-link" href="/my-account" tabindex="0">My Account</a></li><li class="alt-li-item mega-menu-logout mega-menu-item menu-logout"><a class="mega-menu-link" href="https://www.skjewellery.com/my-account/customer-logout/?_wpnonce=49fc134358" tabindex="0">Logout</a></li></ul></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-full-width mega-menu-collections mega-menus-jewellery mega-alt-has-submenu-toggle mega-alt-has-border mega-custom-mega-menu-1 mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417820 mega-alt-depth-0 mega-abc_0 full-width menu-collections menus-jewellery alt-has-submenu-toggle alt-has-border custom-mega-menu-1' id='mega-menu-item-417820'><a class="mega-menu-link" href="#" tabindex="0">Collections<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class="top-child-menu"><div class="menu-back"><div class="menu-back__icon"></div><div class="menu-back__text"><a href="#">Menu</a></div></div><div class="banner-item-menu"></div></li><li class="wrapper-li-item"><ul class="child-ul"><li class='alt-li-item mega-menu-megamenu mega-no-event mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417821 mega-alt-depth-1 mega-abc_1 no-event' id='mega-menu-item-417821'><a class="mega-menu-link">Everyday Collections<span class="mega-indicator alt-mega-indicator"></span></a><a class="menu-has-image" href=""><img src="https://www.skjewellery.com/wp-content/uploads/2023/04/Everyday-Collections.webp" /></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417827 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417827'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/celestial-shine/">Sun, Star & Moon</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417826 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417826'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/lock-and-key/">Locks & Keys</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417824 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417824'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/cross-jewellery/">Cross</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417823 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417823'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/nature-inspired/">Nature-Inspired</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-422645 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-422645'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/animals-pets/">Animals & Pets</a></div></li><li class='alt-li-item mega-menu-megamenu mega-bottom-space mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417822 mega-alt-depth-2 mega-abc_2 bottom-space' id='mega-menu-item-417822'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/shima-pearls/">Shima Pearls</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-424206 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-424206'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/collection/starlett-diamonds/">Starlett Lab Diamonds</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-424207 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-424207'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/collection/skarlet-diamonds/">Skarlet Mined Diamonds</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417841 mega-alt-depth-1 mega-abc_1 no-event' id='mega-menu-item-417841'><a class="mega-menu-link">Auspicious Collections<span class="mega-indicator alt-mega-indicator"></span></a><a class="menu-has-image" href=""><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Jade.webp" /></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-no-event mega-sub_menu_second mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417838 mega-alt-depth-2 mega-abc_2 no-event sub_menu_second' id='mega-menu-item-417838'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product-category/pixiu-bracelets/">Pixiu Blessing</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417843 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417843'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/abacus-abundance/">Abacus Abundance</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-522740 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-522740'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/collection/jade/">Modern Jade</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417839 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417839'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/four-leaf-clover/">Four Leaf Clover</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417840 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417840'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/999-pure-gold">999 Pure Gold</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417842 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417842'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/sk-916/">SK 916 Gold</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-sub_menu_second mega-show-mobile mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-424039 mega-alt-depth-1 mega-abc_1 no-event sub_menu_second show-mobile' id='mega-menu-item-424039'><a class="mega-menu-link" href="/product-category/online-exclusive/">Online Exclusives</a><a class="menu-has-image" href="/product-category/online-exclusive/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gemstones.webp" /></a></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-sub_menu_second mega-show-mobile mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417844 mega-alt-depth-1 mega-abc_1 no-event sub_menu_second show-mobile' id='mega-menu-item-417844'><a class="mega-menu-link">Past’s Campaigns<span class="mega-indicator alt-mega-indicator"></span></a><a class="menu-has-image" href=""><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/In-Store-Exclusives.webp" /></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417837 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417837'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/valentines-day">Valentine’s Day</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-taxonomy mega-menu-item-object-product_occasions mega-menu-item-527932 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-527932'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/product_occasions/for-mum">Celebrate Mom's Endless Love</a></div></li></ul></li></ul></li><li class="emm_bottom_menu"><ul class=""><li class="mega-menu-calendar mega-menu-item menu-calendar"><a class="mega-menu-link" href="/consultation/" tabindex="0">Book Appointment</a></li><li class="alt-li-item mega-menu-locator mega-menu-item menu-locator"><a class="mega-menu-link" href="/locate-us" tabindex="0">Store Locator</a></li><li class="alt-li-item mega-menu-shipto mega-menu-item menu-shipto"><a class="mega-menu-link no-hover" href="#" tabindex="0">Ship to: Singapore</a></li><li class="alt-li-item mega-menu-acc mega-menu-item menu-acc"><a class="mega-menu-link" href="/my-account" tabindex="0">My Account</a></li><li class="alt-li-item mega-menu-logout mega-menu-item menu-logout"><a class="mega-menu-link" href="https://www.skjewellery.com/my-account/customer-logout/?_wpnonce=49fc134358" tabindex="0">Logout</a></li></ul></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-bridal mega-menus-jewellery mega-alt-has-submenu-toggle mega-alt-has-border mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417847 mega-alt-depth-0 mega-abc_0 bridal menus-jewellery alt-has-submenu-toggle alt-has-border' id='mega-menu-item-417847'><a class="mega-menu-link" href="#" tabindex="0">Bridal<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class="top-child-menu"><div class="menu-back"><div class="menu-back__icon"></div><div class="menu-back__text"><a href="#">Menu</a></div></div><div class="banner-item-menu"></div></li><li class="wrapper-li-item"><ul class="child-ul"><li class='alt-li-item mega-menu-megamenu mega-no-event mega-only-desktop mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417848 mega-alt-depth-1 mega-abc_1 no-event only-desktop' id='mega-menu-item-417848'><a class="mega-menu-link" href="/product_bridal/engagement-rings">Engagement Rings<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417849 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417849'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_bridal/engagement-rings">Our Engagement Suite</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-only-mobile mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417850 mega-alt-depth-1 mega-abc_1 only-mobile' id='mega-menu-item-417850'><a class="mega-menu-link" href="/product_bridal/engagement-rings">Engagement Rings</a></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417851 mega-alt-depth-1 mega-abc_1 no-event' id='mega-menu-item-417851'><a class="mega-menu-link" href="/product_bridal/wedding-bands">Wedding Bands<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417852 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417852'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_bridal/men-wedding-bands">Male Wedding Bands</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417853 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417853'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_bridal/women-wedding-bands">Female Wedding Bands</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-only-desktop mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417854 mega-alt-depth-1 mega-abc_1 no-event only-desktop' id='mega-menu-item-417854'><a class="mega-menu-link" href="/product_bridal/bridal-si-dian-jin">Si Dian Jin<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417855 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417855'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/collection/si-dian-jin/">All Si Dian Jin</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-only-mobile mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417856 mega-alt-depth-1 mega-abc_1 only-mobile' id='mega-menu-item-417856'><a class="mega-menu-link" href="/collection/si-dian-jin">Si Dian Jin</a></li></ul></li><li class="emm_bottom_menu"><ul class=""><li class="mega-menu-calendar mega-menu-item menu-calendar"><a class="mega-menu-link" href="/consultation/" tabindex="0">Book Appointment</a></li><li class="alt-li-item mega-menu-locator mega-menu-item menu-locator"><a class="mega-menu-link" href="/locate-us" tabindex="0">Store Locator</a></li><li class="alt-li-item mega-menu-shipto mega-menu-item menu-shipto"><a class="mega-menu-link no-hover" href="#" tabindex="0">Ship to: Singapore</a></li><li class="alt-li-item mega-menu-acc mega-menu-item menu-acc"><a class="mega-menu-link" href="/my-account" tabindex="0">My Account</a></li><li class="alt-li-item mega-menu-logout mega-menu-item menu-logout"><a class="mega-menu-link" href="https://www.skjewellery.com/my-account/customer-logout/?_wpnonce=49fc134358" tabindex="0">Logout</a></li></ul></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-menu-gifts mega-list-layout mega-level1 mega-has-banner mega-alt-has-submenu-toggle mega-alt-has-border mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417857 mega-alt-depth-0 mega-abc_0 menu-gifts list-layout level1 has-banner alt-has-submenu-toggle alt-has-border' id='mega-menu-item-417857'><a class="mega-menu-link" href="#" tabindex="0">Gifts<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class="top-child-menu"><div class="menu-back"><div class="menu-back__icon"></div><div class="menu-back__text"><a href="#">Menu</a></div></div><div class="banner-item-menu"></div></li><li class="wrapper-li-item"><ul class="child-ul"><li class='alt-li-item mega-menu-megamenu mega-banner-mobile mega-only-mobile mega-only-desktop mega-no-text mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417858 mega-alt-depth-1 mega-abc_1 banner-mobile only-mobile only-desktop no-text' id='mega-menu-item-417858'><a class="mega-menu-link" href="#">gift banner</a></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-oas-no-hover mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417859 mega-alt-depth-1 mega-abc_1 no-event oas-no-hover' id='mega-menu-item-417859'><a class="mega-menu-link" href="#">Recipients<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417860 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417860'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_recipients/for-him">For Him</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417861 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417861'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_recipients/for-her">For Her</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-oas-no-hover mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417862 mega-alt-depth-1 mega-abc_1 no-event oas-no-hover' id='mega-menu-item-417862'><a class="mega-menu-link" href="#">Occasions<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417863 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417863'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_occasions/birthdays">Birthdays</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417864 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417864'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_occasions/anniversaries">Anniversaries</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417865 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417865'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_occasions/for-mum">For Mum</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417866 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417866'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_occasions/wedding">Wedding</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417867 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417867'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_occasions/kids">Kids</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-oas-no-hover mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417868 mega-alt-depth-1 mega-abc_1 no-event oas-no-hover' id='mega-menu-item-417868'><a class="mega-menu-link" href="#">Price Range<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417869 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417869'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_price-range/gifts-under-200">Gifts under $200</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417870 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417870'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_price-range/gifts-under-500">Gifts under $500</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417871 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417871'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/product_price-range/gifts-under-1000">Gifts under $1000</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-421719 mega-alt-depth-1 mega-abc_1' id='mega-menu-item-421719'><a class="mega-menu-link" href="/corporate-gifts/">Corporate Gifts</a></li></ul></li><li class="emm_bottom_menu"><ul class=""><li class="mega-menu-calendar mega-menu-item menu-calendar"><a class="mega-menu-link" href="/consultation/" tabindex="0">Book Appointment</a></li><li class="alt-li-item mega-menu-locator mega-menu-item menu-locator"><a class="mega-menu-link" href="/locate-us" tabindex="0">Store Locator</a></li><li class="alt-li-item mega-menu-shipto mega-menu-item menu-shipto"><a class="mega-menu-link no-hover" href="#" tabindex="0">Ship to: Singapore</a></li><li class="alt-li-item mega-menu-acc mega-menu-item menu-acc"><a class="mega-menu-link" href="/my-account" tabindex="0">My Account</a></li><li class="alt-li-item mega-menu-logout mega-menu-item menu-logout"><a class="mega-menu-link" href="https://www.skjewellery.com/my-account/customer-logout/?_wpnonce=49fc134358" tabindex="0">Logout</a></li></ul></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-personalise mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417872 mega-alt-depth-0 mega-abc_0 personalise' id='mega-menu-item-417872'><a class="mega-menu-link" href="#" tabindex="0">Personalise<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class="top-child-menu"><div class="menu-back"><div class="menu-back__icon"></div><div class="menu-back__text"><a href="#">Menu</a></div></div><div class="banner-item-menu"></div></li><li class="wrapper-li-item"><ul class="child-ul"><li class='alt-li-item mega-menu-megamenu mega-bg_layout mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417873 mega-alt-depth-1 mega-abc_1 bg_layout' id='mega-menu-item-417873'><a class="mega-menu-link" href="/charm-builder/">Charm Builder</a><a class="menu-has-image" href="/charm-builder/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Zodiac-Charms-Mobile-1.webp" /></a></li><li class='alt-li-item mega-menu-megamenu mega-bg_layout mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417874 mega-alt-depth-1 mega-abc_1 bg_layout' id='mega-menu-item-417874'><a class="mega-menu-link" href="/gold-bar-customiser/">Gold Bar Customiser</a><a class="menu-has-image" href="/gold-bar-customiser/"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/Gold-Bar-Banner.webp" /></a></li><li class='alt-li-item mega-menu-megamenu mega-bg_layout mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417875 mega-alt-depth-1 mega-abc_1 bg_layout' id='mega-menu-item-417875'><a class="mega-menu-link" href="/personalised-name-necklace">Yours Truly</a><a class="menu-has-image" href="/personalised-name-necklace"><img src="https://www.skjewellery.com/wp-content/uploads/2023/03/04-Personalise-3-1-1.webp" /></a></li></ul></li><li class="emm_bottom_menu"><ul class=""><li class="mega-menu-calendar mega-menu-item menu-calendar"><a class="mega-menu-link" href="/consultation/" tabindex="0">Book Appointment</a></li><li class="alt-li-item mega-menu-locator mega-menu-item menu-locator"><a class="mega-menu-link" href="/locate-us" tabindex="0">Store Locator</a></li><li class="alt-li-item mega-menu-shipto mega-menu-item menu-shipto"><a class="mega-menu-link no-hover" href="#" tabindex="0">Ship to: Singapore</a></li><li class="alt-li-item mega-menu-acc mega-menu-item menu-acc"><a class="mega-menu-link" href="/my-account" tabindex="0">My Account</a></li><li class="alt-li-item mega-menu-logout mega-menu-item menu-logout"><a class="mega-menu-link" href="https://www.skjewellery.com/my-account/customer-logout/?_wpnonce=49fc134358" tabindex="0">Logout</a></li></ul></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-menu-highlights mega-menus-jewellery mega-alt-has-submenu-toggle mega-alt-has-border mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417876 mega-alt-depth-0 mega-abc_0 menu-highlights menus-jewellery alt-has-submenu-toggle alt-has-border' id='mega-menu-item-417876'><a class="mega-menu-link" href="#" tabindex="0">Guides<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class="top-child-menu"><div class="menu-back"><div class="menu-back__icon"></div><div class="menu-back__text"><a href="#">Menu</a></div></div><div class="banner-item-menu"></div></li><li class="wrapper-li-item"><ul class="child-ul"><li class='alt-li-item mega-menu-megamenu mega-no-event mega-oas-no-hover mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417877 mega-alt-depth-1 mega-abc_1 no-event oas-no-hover' id='mega-menu-item-417877'><a class="mega-menu-link" href="#">SK's World of Jewellery<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417878 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417878'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/ring-sizer-guide/">Ring Size Guide</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417879 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417879'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/wedding-bands/">Wedding Bands Guide</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-417880 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417880'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/jewellery-care-guide/">Jewellery Care Guide</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-417881 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417881'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/gold-jewellery-guide/">Gold Jewellery Guide</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417882 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417882'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/sidianjin/">Si Dian Jin (四点金) Guide</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417883 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417883'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/gold-legacy/">Gold Legacy (古法金)</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417884 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417884'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/gift-guide-for-kids/">Gift Guide for Kids</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-oas-no-hover mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417885 mega-alt-depth-1 mega-abc_1 no-event oas-no-hover' id='mega-menu-item-417885'><a class="mega-menu-link" href="#">Specialties<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417886 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417886'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/about-lab-grown-diamonds/">Lab Grown Diamonds</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-417887 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417887'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/allstar-diamond/">AllStar Diamond</a></div></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-no-event mega-oas-no-hover mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-item-417888 mega-alt-depth-1 mega-abc_1 no-event oas-no-hover' id='mega-menu-item-417888'><a class="mega-menu-link" href="#">Keeping You Updated<span class="mega-indicator alt-mega-indicator"></span></a><ul class="mega-sub-menu"><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-417889 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417889'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/to-my-supermom/">SK Mother's Day Campaign</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-417890 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417890'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="https://www.skjewellery.com/made-with-passion/">SK Jewellery X Made with Passion</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417891 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417891'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/news/">News</a></div></li><li class='alt-li-item mega-menu-megamenu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417892 mega-alt-depth-2 mega-abc_2' id='mega-menu-item-417892'><div class="alt-extra-layout-box"><a class="mega-menu-link" href="/blog">Blog</a></div></li></ul></li></ul></li><li class="emm_bottom_menu"><ul class=""><li class="mega-menu-calendar mega-menu-item menu-calendar"><a class="mega-menu-link" href="/consultation/" tabindex="0">Book Appointment</a></li><li class="alt-li-item mega-menu-locator mega-menu-item menu-locator"><a class="mega-menu-link" href="/locate-us" tabindex="0">Store Locator</a></li><li class="alt-li-item mega-menu-shipto mega-menu-item menu-shipto"><a class="mega-menu-link no-hover" href="#" tabindex="0">Ship to: Singapore</a></li><li class="alt-li-item mega-menu-acc mega-menu-item menu-acc"><a class="mega-menu-link" href="/my-account" tabindex="0">My Account</a></li><li class="alt-li-item mega-menu-logout mega-menu-item menu-logout"><a class="mega-menu-link" href="https://www.skjewellery.com/my-account/customer-logout/?_wpnonce=49fc134358" tabindex="0">Logout</a></li></ul></li></ul></li><li class='alt-li-item mega-menu-megamenu mega-menu-locator mega-only-desktop mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417893 mega-alt-depth-0 mega-abc_0 menu-locator only-desktop' id='mega-menu-item-417893'><a class="mega-menu-link" href="/locate-us" tabindex="0">Store Locator</a></li><li class='alt-li-item mega-menu-megamenu mega-menu-shipto mega-only-desktop mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-417894 mega-alt-depth-0 mega-abc_0 menu-shipto only-desktop' id='mega-menu-item-417894'><a class="mega-menu-link" href="#" tabindex="0">Ship to: Singapore</a></li></ul></div><!-- ECached@24/05/2023 12:39 AM -->
		// 		</script>
		// 		<script id="tpl-alt-header-sp-galleries" type="text/template">
		// 			<h5 class='gallery_title'>Categories</h5><div class='gallery-item'><a href='https://www.skjewellery.com/all-star/'><img src='https://www.skjewellery.com/wp-content/uploads/2023/04/All-Star-150x150.webp' alt=''></a><p class='caption'><a href="https://www.skjewellery.com/collection/allstar-diamonds/">Allstar Diamond</a></p></div><div class='gallery-item'><a href='https://www.skjewellery.com/star-carat/'><img src='https://www.skjewellery.com/wp-content/uploads/2023/04/Star-Carat-150x150.webp' alt=''></a><p class='caption'><a href="https://www.skjewellery.com/collection/star-carat-diamonds/">Star Carat Diamond</a></p></div><div class='gallery-item'><a href='https://www.skjewellery.com/?attachment_id=424046'><img src='https://www.skjewellery.com/wp-content/uploads/2023/04/Disney-150x150.webp' alt=''></a><p class='caption'><a href="https://www.skjewellery.com/collection/disney-collection/">Disney</a></p></div><div class='gallery-item'><a href='https://www.skjewellery.com/local-k-gold/'><img src='https://www.skjewellery.com/wp-content/uploads/2023/04/local-k-gold-150x150.webp' alt=''></a><p class='caption'><a href="https://www.skjewellery.com/collection/loca-k-gold/">Loca K-Gold</a></p></div><div class='gallery-item'><a href='https://www.skjewellery.com/dancing-star-2/'><img src='https://www.skjewellery.com/wp-content/uploads/2023/04/Dancing-Star-150x150.webp' alt=''></a><p class='caption'><a href="https://www.skjewellery.com/collection/dancing-star/">Dancing Star</a></p></div><div class='gallery-item'><a href='https://www.skjewellery.com/locate-us/amk-hub/oro-amare-2/'><img src='https://www.skjewellery.com/wp-content/uploads/2023/04/Oro-Amare-150x150.webp' alt=''></a><p class='caption'><a href="https://www.skjewellery.com/collection/oro-amare/">Oro Amare</a></p></div><div class='gallery-item'><a href='https://www.skjewellery.com/locate-us/amk-hub/sdj-menu/'><img src='https://www.skjewellery.com/wp-content/uploads/2023/04/SDJ-menu-150x150.jpg' alt=''></a><p class='caption'><a href="https://www.skjewellery.com/collection/si-dian-jin">Si Dian Jin</a></p></div><div class='gallery-item'><a href='https://www.skjewellery.com/artboard-7/'><img src='https://www.skjewellery.com/wp-content/uploads/2023/04/Artboard-7-150x150.jpg' alt=''></a><p class='caption'><a href="https://www.skjewellery.com/collection/gold-legacy/">Gold Legacy</a></p></div><!-- ECached@24/05/2023 12:39 AM -->
		// 		</script>
		// 		<script>
		// 			jQuery(document).ready(function () {
		// 				var firstPayment = false;
		// 				function data_layer_shipping(el, event_name) {}

		// 				function data_layer_payment(el) {}

		// 				data_layer_shipping(".alt-checkout-delivery-editform", "v2");
		// 				data_layer_shipping(".alt-checkout-delivery-form", "v3");

		// 				var isRegister = false;
		// 				jQuery(document).on(
		// 					"click",
		// 					"#form-register .register-btn",
		// 					function () {
		// 						isRegister = true;
		// 						// var email = jQuery('#form-register #email').val(),
		// 						// 	password = jQuery('#form-register #password').val(),
		// 						// 	firstname = jQuery('#form-register #firstname').val(),
		// 						// 	lastname = jQuery('#form-register #lastname').val();

		// 						// if( email.length > 0 && password.length > 0 ) {

		// 						// 	window.dataLayer = window.dataLayer || [];
		// 						// 	window.dataLayer.push({
		// 						// 		event: 'register',
		// 						// 		data: {
		// 						// 			email: email,
		// 						// 			firstname: firstname,
		// 						// 			lastname: lastname
		// 						// 		}
		// 						// 	});
		// 						// }

		// 						// console.log(data);
		// 					}
		// 				);

		// 				jQuery(document).on("change", ".payment-type", function () {
		// 					var paymentValue = jQuery(this);
		// 					console.log("sxxx", paymentValue);
		// 					data_layer_payment(paymentValue);
		// 				});

		// 				jQuery(document).ajaxComplete(function (event, xhr, settings) {
		// 					// Payment Method
		// 					if (
		// 						typeof settings.data != "undefined" &&
		// 						typeof settings.data == "string" &&
		// 						settings.data.search("action=alt_checkout_first") > 0 &&
		// 						typeof xhr.responseJSON != "undefined" &&
		// 						typeof xhr.responseJSON.complete != "undefined"
		// 					) {
		// 						data_layer_payment(jQuery('input[name="payment_method"]:checked'));
		// 					}

		// 					if (isRegister) {
		// 						var data = jQuery("#form-register").serializeArray();
		// 						var dataRegister = [];
		// 						jQuery.each(data, function (index, value) {
		// 							if (value.name != "redirect_to" && value.name != "password") {
		// 								dataRegister[value.name] = value.value;
		// 							}
		// 						});

		// 						window.dataLayer = window.dataLayer || [];
		// 						window.dataLayer.push({
		// 							event: "register",
		// 							data: Object.assign({}, dataRegister),
		// 						});

		// 						isRegister = false;
		// 					}

		// 					if (settings.url == "/?wc-ajax=get_refreshed_fragments") {
		// 						var fragments = xhr.responseJSON.fragments;

		// 						if (typeof fragments.removed_cart != "undefined") {
		// 							window.dataLayer = window.dataLayer || [];
		// 							window.dataLayer.push(JSON.parse(fragments.removed_cart));
		// 						}
		// 					}

		// 					if (
		// 						typeof xhr.responseJSON != "undefined" &&
		// 						(typeof xhr.responseJSON.removed != "undefined" ||
		// 							(typeof xhr.responseJSON.make_remove != "undefined" &&
		// 								xhr.responseJSON.make_remove))
		// 					) {
		// 						window.dataLayer = window.dataLayer || [];
		// 						if (xhr.responseJSON.status) {
		// 							window.dataLayer.push(xhr.responseJSON.alt_info_add);
		// 						} else {
		// 							window.dataLayer.push(xhr.responseJSON.alt_info_remove);
		// 						}
		// 					}

		// 					if (settings.url == "/?wc-ajax=remove_from_cart") {
		// 						jQuery(document).trigger("wc_fragment_refresh");
		// 					}
		// 				});

		// 				jQuery(document).on(
		// 					"click",
		// 					".woocommerce-form-login__submit",
		// 					function () {
		// 						var username = jQuery(
		// 								"form.woocommerce-form-login #username"
		// 							).val(),
		// 							password = jQuery("form.woocommerce-form-login #password").val();

		// 						if (username.length > 0 && password.length > 0) {
		// 							window.dataLayer = window.dataLayer || [];
		// 							window.dataLayer.push({
		// 								event: "login",
		// 								data: {
		// 									username: username,
		// 								},
		// 							});
		// 						}
		// 					}
		// 				);

		// 				jQuery(document).on("click", "ul.dth-sociasls-register a", function () {
		// 					var provider = jQuery(this).attr("data-provider");

		// 					var action = "login";
		// 					if (
		// 						jQuery(this).closest(".dht-login-social").attr("id") ==
		// 						"dth-register-social"
		// 					) {
		// 						action = "register";
		// 					}

		// 					window.dataLayer = window.dataLayer || [];
		// 					window.dataLayer.push({
		// 						event: action,
		// 						data: {
		// 							social: provider,
		// 						},
		// 					});
		// 				});
		// 			});
		// 		</script>
		// 		<script type="text/javascript">
		// 			var altCartTotal = 0;
		// 		</script>
		// 		<script
		// 			defer=""
		// 			src="https://static.cloudflareinsights.com/beacon.min.js/v52afc6f149f6479b8c77fa569edb01181681764108816"
		// 			integrity="sha512-jGCTpDpBAYDGNYR5ztKt4BQPGef1P0giN6ZGVUi835kFF88FOmmn8jBQWNgrNd8g/Yu421NdgWhwQoaOPFflDw=="
		// 			data-cf-beacon='{"rayId":"7cc68e5a298383f5","token":"b6014d6d78264b6587ce84fedfc75037","version":"2023.4.0","si":100}'
		// 			crossorigin="anonymous"
		// 		></script>

		// 		<script type="text/javascript" id="">
		// 			function setCookie(b, d, c) {
		// 				var a = "";
		// 				c &&
		// 					((a = new Date()),
		// 					a.setTime(a.getTime() + 864e5 * c),
		// 					(a = "; expires\x3d" + a.toUTCString()));
		// 				document.cookie = b + "\x3d" + (d || "") + a + "; path\x3d/";
		// 			}
		// 			"undefined" != typeof google_tag_manager["GTM-KMT5CP"].macro(15) &&
		// 				(setCookie("visitor", google_tag_manager["GTM-KMT5CP"].macro(16), 0),
		// 				setCookie("hashUserID", google_tag_manager["GTM-KMT5CP"].macro(17), 0),
		// 				setCookie(
		// 					"loginStatus",
		// 					google_tag_manager["GTM-KMT5CP"].macro(18),
		// 					0
		// 				));
		// 			jQuery("a").click(function () {
		// 				var b = jQuery(this).text();
		// 				"Logout" == b &&
		// 					((document.cookie =
		// 						"visitor\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 UTC; path\x3d/;"),
		// 					(document.cookie =
		// 						"loginStatus\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 UTC; path\x3d/;"),
		// 					(document.cookie =
		// 						"hashUserID\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 UTC; path\x3d/;"));
		// 			});
		// 		</script>
		// 		<div
		// 			id="chat-widget-container"
		// 			style="
		// 				opacity: 1;
		// 				visibility: visible;
		// 				z-index: 2147483639;
		// 				position: fixed;
		// 				bottom: 5px;
		// 				width: 84px;
		// 				height: 84px;
		// 				max-width: 100%;
		// 				max-height: calc(100% - 5px);
		// 				min-height: 0px;
		// 				min-width: 0px;
		// 				background-color: transparent;
		// 				border: 0px;
		// 				overflow: hidden;
		// 				right: 15px;
		// 				transition: none 0s ease 0s !important;
		// 			"
		// 			class="kts-live-chat-deactive"
		// 		>
		// 			<iframe
		// 				allow="autoplay; microphone *; camera *; display-capture *; picture-in-picture *; fullscreen *;"
		// 				src="https://secure.livechatinc.com/customer/action/open_chat?license_id=11661638&amp;group=0&amp;embedded=1&amp;widget_version=3&amp;unique_groups=0"
		// 				allowtransparency="true"
		// 				id="chat-widget"
		// 				name="chat-widget"
		// 				title="LiveChat chat widget"
		// 				scrolling="no"
		// 				style="
		// 					width: 100%;
		// 					height: 100%;
		// 					min-height: 0px;
		// 					min-width: 0px;
		// 					margin: 0px;
		// 					padding: 0px;
		// 					background-image: none;
		// 					background-position: 0% 0%;
		// 					background-size: initial;
		// 					background-attachment: scroll;
		// 					background-origin: initial;
		// 					background-clip: initial;
		// 					background-color: rgba(0, 0, 0, 0);
		// 					border-width: 0px;
		// 					float: none;
		// 					color-scheme: normal;
		// 					position: absolute;
		// 					inset: 0px;
		// 					transition: none 0s ease 0s !important;
		// 					display: none;
		// 				"
		// 			></iframe
		// 			><iframe
		// 				allowtransparency="true"
		// 				id="chat-widget-minimized"
		// 				name="chat-widget-minimized"
		// 				title="LiveChat chat widget"
		// 				scrolling="no"
		// 				style="
		// 					width: 100%;
		// 					height: 100%;
		// 					min-height: 0px;
		// 					min-width: 0px;
		// 					margin: 0px;
		// 					padding: 0px;
		// 					background-image: none;
		// 					background-position: 0% 0%;
		// 					background-size: initial;
		// 					background-attachment: scroll;
		// 					background-origin: initial;
		// 					background-clip: initial;
		// 					background-color: rgba(0, 0, 0, 0);
		// 					border-width: 0px;
		// 					float: none;
		// 					color-scheme: normal;
		// 					display: block;
		// 				"
		// 			></iframe>
		// 		</div>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://www.skjewellery.com/wp-content/plugins/megamenu/js/maxmegamenu.js?ver=3.0"
		// 			id="megamenu-js"
		// 		></script>
		// 		<div>
		// 			<div
		// 				id="delvify-tag"
		// 				api_key="skjewellery0yQ3GY2dmQEv"
		// 				config='{"xOffset":30, "xOffsetMobile":13, "yOffset": 18.5, "yOffsetMobile": 18.5}'
		// 			></div>
		// 			<div id="delvify-tracking" api_key="skjewellery0yQ3GY2dmQEv"></div>
		// 		</div>
		// 		<div id="delvify-shadow" class="dv-shadow"></div>
		// 		<div id="delvify-dialog" class="dv-dialog" style="opacity: 0">
		// 			<div id="dv-dialog-content">
		// 				<div class="dv-left-section">
		// 					<div class="dv-small-device-close" style="visibility: visible">
		// 						<img
		// 							class="dv-close"
		// 							src="https://smart-tag.s3.ap-southeast-1.amazonaws.com/widget-assets/dv-close.svg"
		// 							alt="close"
		// 						/>
		// 					</div>
		// 					<form id="dv-upload" class="dv-upload-wrapper">
		// 						<div
		// 							class="dv-title"
		// 							style="
		// 								text-align: center;
		// 								font-weight: 700;
		// 								font-size: 24px;
		// 								color: #ad073d;
		// 								font-style: normal;
		// 							"
		// 						>
		// 							Try Visual Search
		// 						</div>
		// 						<div
		// 							class="dv-subtitle"
		// 							style="
		// 								text-align: center;
		// 								font-weight: 700;
		// 								font-size: 16px;
		// 								color: #8594a8;
		// 								font-style: normal;
		// 							"
		// 						>
		// 							Search and discover similar items by uploading or taking a photo.
		// 						</div>
		// 						<div class="dv-upload">
		// 							<input type="file" accept="image/*" id="file-upload" />
		// 							<label id="file-upload-label" for="file-upload">
		// 								<img
		// 									src="https://smart-tag.s3.ap-southeast-1.amazonaws.com/widget-assets/dv-upload.svg"
		// 									alt="close"
		// 									class="uploadingImage"
		// 								/>
		// 								<div class="desktopDiv">Drop your image here or</div>
		// 								<div class="desktopDiv" style="color: #4a6ce3; margin-top: 5px">
		// 									browse
		// 								</div>
		// 								<img
		// 									src="https://smart-tag.s3.ap-southeast-1.amazonaws.com/widget-assets/dv-camera.svg"
		// 									alt="camera_icon"
		// 									class="dv-camera_icon"
		// 								/>
		// 								<p class="dv-uploadSelect" style="margin-bottom: auto">
		// 									Select a Photo
		// 								</p>
		// 							</label>
		// 						</div>
		// 					</form>
		// 				</div>

		// 				<div
		// 					id="dv-right-section"
		// 					class="dv-right-section"
		// 					style="background: #ad073d"
		// 				>
		// 					<div
		// 						class="dv-close-wrapper dv-small-disappear"
		// 						style="visibility: visible"
		// 					>
		// 						<img
		// 							class="dv-close"
		// 							src="https://smart-tag.s3.ap-southeast-1.amazonaws.com/widget-assets/dv-close.svg"
		// 							alt="close"
		// 						/>
		// 					</div>
		// 					<div class="dv-right-wrapper">
		// 						<div
		// 							class="dv-gallery-header"
		// 							style="
		// 								text-align: left;
		// 								font-weight: 700;
		// 								font-size: 16px;
		// 								color: #ffffff;
		// 								font-style: normal;
		// 							"
		// 						>
		// 							Don’t have a photo?<br />
		// 							Choose one from the gallery below.
		// 						</div>
		// 						<div class="dv-grid dv-grid6">
		// 							<div class="dv-sample-image-wrapper">
		// 								<img
		// 									data-key="1"
		// 									class="dv-sample-image dv-drop-anchor"
		// 									style="cursor: pointer"
		// 									src="https://delvify-upload.s3.ap-southeast-1.amazonaws.com/163.1.jpeg?30469"
		// 									alt="sample-image"
		// 									width="100%"
		// 									height="100%"
		// 								/>
		// 							</div>

		// 							<div class="dv-sample-image-wrapper">
		// 								<img
		// 									data-key="2"
		// 									class="dv-sample-image dv-drop-anchor"
		// 									style="cursor: pointer"
		// 									src="https://delvify-upload.s3.ap-southeast-1.amazonaws.com/163.3.jpeg?25184"
		// 									alt="sample-image"
		// 									width="100%"
		// 									height="100%"
		// 								/>
		// 							</div>

		// 							<div class="dv-sample-image-wrapper">
		// 								<img
		// 									data-key="3"
		// 									class="dv-sample-image dv-drop-anchor"
		// 									style="cursor: pointer"
		// 									src="https://delvify-upload.s3.ap-southeast-1.amazonaws.com/163.2.jpeg?75244"
		// 									alt="sample-image"
		// 									width="100%"
		// 									height="100%"
		// 								/>
		// 							</div>

		// 							<div class="dv-sample-image-wrapper">
		// 								<img
		// 									data-key="4"
		// 									class="dv-sample-image dv-drop-anchor"
		// 									style="cursor: pointer"
		// 									src="https://delvify-upload.s3.ap-southeast-1.amazonaws.com/163.4.jpeg?55698"
		// 									alt="sample-image"
		// 									width="100%"
		// 									height="100%"
		// 								/>
		// 							</div>

		// 							<div class="dv-sample-image-wrapper">
		// 								<img
		// 									data-key="5"
		// 									class="dv-sample-image dv-drop-anchor"
		// 									style="cursor: pointer"
		// 									src="https://delvify-upload.s3.ap-southeast-1.amazonaws.com/163.5.jpeg?84182"
		// 									alt="sample-image"
		// 									width="100%"
		// 									height="100%"
		// 								/>
		// 							</div>

		// 							<div class="dv-sample-image-wrapper">
		// 								<img
		// 									data-key="6"
		// 									class="dv-sample-image dv-drop-anchor"
		// 									style="cursor: pointer"
		// 									src="https://delvify-upload.s3.ap-southeast-1.amazonaws.com/163.6.jpeg?48471"
		// 									alt="sample-image"
		// 									width="100%"
		// 									height="100%"
		// 								/>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</body>
		// </html>
		// `,
		// 		};
	};

	return (
		<div className="vanilla2">
			{/* <div dangerouslySetInnerHTML={{ _html: template }}></div> */}
			{console.log(typeof createMarkup())}
			<div dangerouslySetInnerHTML={createMarkup()}></div>
		</div>
	);
	// return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
});

export default Vanilla2;
