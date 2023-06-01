import React, { useEffect, useState } from "react";

// import UnbxdSearch from  '@unbxd-ui/vanilla-search-library';
import UnbxdSearch from "../../../../search-JS-library/src/index";

import template from "./Vanilla2.html";
// import updatedTemplate from "./updatedVanilla2/updatedVanilla2.html";
// import UnbxdSearch from "../../../../../search-JS-library/src/index";
// import useDeepCompareEffect from "use-deep-compare-effect";
// import "../../../public/unbxdStyle.css";
// import "../../../public/styles/components/vanilla2/unbxdStyles.scss";
// import "./updatedVanilla2/updatedVanilla2.css";
import "../../../public/styles/components/vanilla2/vanilla2.scss";

const Vanilla2 = (props) => {
	let { validatedConfig = {}, displayError } = props,
		newTemplate = "";

	// console.log("template:", template, typeof template);

	var scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		result,
		indices = [];
	// while ((result = scriptRegex.exec(template))) {
	// 	indices.push(result.index);
	// }
	// console.log(indices.length);
	newTemplate = template.replaceAll(scriptRegex, "");

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
			// if (validatedConfig.pagesize.pageSize !== undefined) {
			// 	validatedConfig = {
			// 		...validatedConfig,
			// 		pageSize: validatedConfig.pagesize.pageSize,
			// 	};
			// }
			console.log("validatedConfig:", validatedConfig);
			// debugger;

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
					// pageSize: validatedConfig.pagesize.pageSize,
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
		// 			__html: `<!DOCTYPE html>
		// <html>
		// 	<head>
		// 		<meta charset="UTF-8" />
		// 		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		// 		<script
		// 			type="text/javascript"
		// 			src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://libraries.unbxdapi.com/sdk-assets/jquery.ui.widget.js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://libraries.unbxdapi.com/sdk-assets/jquery.ui.mouse.js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.5.3/handlebars.min.js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.5.0/nouislider.min.js"
		// 		></script>
		// 		<script
		// 			type="text/javascript"
		// 			src="https://cdn.jsdelivr.net/npm/choices.js@9.0.1/public/assets/scripts/choices.min.js"
		// 		></script>
		// 		<!-- Unbxd Search JS SDK -->
		// 		<!-- <script
		// 			type="text/javascript"
		// 			src="./vanillaSearch.min.js"
		// 		></script> -->
		// 		<script
		// 			type="text/javascript"
		// 			src="https://libraries.unbxdapi.com/search-sdk/v2.0.30-bevilles/vanillaSearch.min.js"
		// 		></script>
		// 		<!-- Unbxd Autosuggest SDK -->
		// 		<script
		// 			type="text/javascript"
		// 			src="https://libraries.unbxdapi.com/unbxdAutosuggest_v1.1.js"
		// 		></script>
		// 		<link rel="preconnect" href="https://fonts.gstatic.com" />
		// 		<link
		// 			href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&display=swap"
		// 			rel="stylesheet"
		// 		/>
		// 		<!-- Dependency library stylesheets -->
		// 		<link
		// 			rel="stylesheet"
		// 			type="text/css"
		// 			href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.5.0/nouislider.min.css"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			type="text/css"
		// 			href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.theme.min.css"
		// 		/>
		// 		<link
		// 			rel="stylesheet"
		// 			href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
		// 		/>
		// 		<!-- <link rel='stylesheet' href='https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css' /> -->
		// 		<link
		// 			rel="stylesheet"
		// 			href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css"
		// 		/>
		// 		<!-- End dependency library stylesheets -->
		// 		<!-- Custom stylesheet for Unbxd default theme, update this if you want to change the look & feel -->
		// 		<link
		// 			rel="stylesheet"
		// 			href="https://libraries.unbxdapi.com/search-sdk/v2.0.30-bevilles/vanillaSearch.min.css"
		// 		/>
		// 		<link
		// 			href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
		// 			rel="stylesheet"
		// 		/>
		// 	</head>

		// 	<body class="{{langCSS}}">
		// 		<div class="UNX-header">
		// 			<div class="UNX-header-inner">
		// 				<div class="UNX-logo">
		// 					<a href="/" class="UNX-header-logo">
		// 						<span class="UNX-square"></span>
		// 					</a>
		// 				</div>
		// 				<!-- <nav class="UNX-nav">
		//                 <a href="" class="disabled"> Home </a>
		//                 <a href="" class="disabled"> Clothing </a>
		//                 <a href="" class="disabled"> Electronics </a>
		//                 <a href="" class="disabled"> Health & Beauty </a>
		//                 <a href="" class="disabled"> Watches </a>
		//             </nav> -->
		// 				<div class="UNX-right-header">
		// 					<div id="autoSuggestInput" class="UNX-input-wrapper">
		// 						<input
		// 							id="unbxdInput"
		// 							placeholder="Search here..."
		// 							class="UNX-input"
		// 							autocomplete="off"
		// 						/>
		// 						<button id="searchBtn" class="fa fa-search UNX-search-btn"></button>
		// 						<div class="UNX-pd-parent">
		// 							<div class="UNX-preview-debugger UNX-query"></div>
		// 						</div>
		// 					</div>
		// 					<!-- <div class="userConfigs">
		//                     <a href="https://unbxd.github.io/search-JS-library/" target="_blank">
		//                         View Documentation
		//                     </a>
		//                 </div> -->
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div class="search-preview">
		// 			<div class="UNX-results-container">
		// 				<div class="UNX-head-wrapper"></div>
		// 				<div class="UNX-product-results">
		// 					<div class="UNX-facet-wrapper">
		// 						<div>
		// 							<h2 class="UNX-filter-header">Filter By</h2>
		// 							<div class="UNX-fxd-facet">
		// 								<div
		// 									class="UNX-selected-facet-wrapper UNX-selected-f-m"
		// 									id="selectedMFacetWrapper"
		// 								></div>
		// 								<div class="UNX-text-facet-block" id="facetsWrapper"></div>
		// 								<div class="UNX-m-facet-row">
		// 									<button
		// 										data-action="applyFacets"
		// 										class="UNX-primary-btn UNX-facet-trigger"
		// 									>
		// 										Apply
		// 									</button>
		// 									<button
		// 										data-action="clearFacets"
		// 										class="UNX-default-btn UNX-facet-trigger"
		// 									>
		// 										Clear
		// 									</button>
		// 								</div>
		// 							</div>
		// 							<div class="UNX-m-facet-row">
		// 								<button
		// 									class="UNX-m-facet-btn UNX-facet-trigger fa fa-filter"
		// 								></button>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div class="UNX-product-list">
		// 						<div class="UNX-selected-actions">
		// 							<div class="UNX-bread-wrapper" id="breadcrumpContainer"></div>
		// 							<div
		// 								class="UNX-selected-facet-wrapper"
		// 								id="selectedFacetWrapper"
		// 							></div>
		// 						</div>
		// 						<div class="UNX-result-header">
		// 							<div id="didYouMeanWrapper"></div>
		// 							<div class="UNX-result-right">
		// 								<div class="UNX-sort-wrapper" id="sortWrapper"></div>
		// 								<div class="UNX-change-products" id="changeNoOfProducts"></div>
		// 								<div
		// 									class="UNX-product-type-block"
		// 									id="productViewTypeContainer"
		// 								></div>
		// 							</div>
		// 						</div>
		// 						<div id="bannerContainer"></div>
		// 						<div class="UNX-product-wrapper" id="searchResultsWrapper"></div>
		// 						<div
		// 							id=""
		// 							class="UNX-change-pagination-wrap UNX-m-page unxPagination"
		// 						></div>
		// 					</div>
		// 				</div>
		// 				<div class="UNX-loader-container" id="loaderEl"></div>
		// 				<div id="noResultWrapper"></div>
		// 				<div id="clickScrollContainer"></div>
		// 			</div>
		// 			<div class="UNX-footer-main">
		// 				<div class="UNX-footer-container">
		// 					<div class="UNX-footer-features">
		// 						<div class="UNX-feature-item">
		// 							<span class="UNX-footer-icon UNX-icons UNX-icon-truck"></span>
		// 							<label class="UNX-footer-label">We ship worldwide</label>
		// 						</div>
		// 						<div class="UNX-feature-item UNX-money">
		// 							<span class="UNX-icons UNX-icon-call"></span>
		// 							<label class="UNX-footer-label">Call 18000 765 00000</label>
		// 						</div>
		// 						<div class="UNX-feature-item UNX-money">
		// 							<span class="UNX-icons UNX-icon-money-back"></span>
		// 							<label class="UNX-footer-label">Money Back Guarantee</label>
		// 						</div>
		// 						<div class="UNX-feature-item UNX-money">
		// 							<span class="UNX-icons UNX-icon-return"></span>
		// 							<label class="UNX-footer-label">30 Days Return</label>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div class="UNX-company-footer">
		// 				<div class="UNX-footer-container UNX-company-footer-wrap">
		// 					<div class="UNX-footer-info-column">
		// 						<h6 class="UNX-footer-info-head">Online Shopping</h6>
		// 						<div class="UNX-link-wrapper">
		// 							<a href="#">Men</a>
		// 							<a href="#">Women</a>
		// 							<a href="#">Kids</a>
		// 							<a href="#">Home & Living</a>
		// 							<a href="#">Discover</a>
		// 							<a href="#">Gift Cards</a>
		// 						</div>
		// 					</div>
		// 					<div class="UNX-footer-info-column">
		// 						<h6 class="UNX-footer-info-head">Policy</h6>
		// 						<div class="UNX-link-wrapper">
		// 							<a href="#">Contact Us</a>
		// 							<a href="#">FAQ</a>
		// 							<a href="#">T&C</a>
		// 							<a href="#">Track Orders</a>
		// 							<a href="#">Shipping</a>
		// 							<a href="#">Cancellation</a>
		// 						</div>
		// 					</div>
		// 					<div class="UNX-footer-info-column">
		// 						<h6 class="UNX-footer-info-head">About</h6>
		// 						<div class="UNX-link-wrapper">
		// 							<a href="#">Contact Us</a>
		// 							<a href="#">About Us</a>
		// 							<a href="#">Press</a>
		// 						</div>
		// 					</div>
		// 					<div class="UNX-footer-info-column">
		// 						<h6 class="UNX-footer-info-head">Registered Office Address</h6>
		// 						<div class="UNX-link-wrapper">
		// 							<a href="#">Company</a>
		// 							<a href="#">Careers</a>
		// 							<a href="#">Contact Us</a>
		// 						</div>
		// 					</div>
		// 					<div class="UNX-footer-info-column">
		// 						<h6 class="UNX-footer-info-head">Keep in Touch</h6>
		// 						<div class="UNX-link-wrapper UNX-keep-touch">
		// 							<a class="UNX-link-icon UNX-icons UNX-icon-linkedin" href="#"></a>
		// 							<a class="UNX-link-icon UNX-icons UNX-icon-twitter" href="#"></a>
		// 							<a class="UNX-link-icon UNX-icons UNX-icon-youtube" href="#"></a>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div class="UNX-privacy-footer-wrap">
		// 				<div class="UNX-footer-container">
		// 					<p>
		// 						In case of any concern,
		// 						<a class="UNX-contact-link" href="#">Contact Us</a>
		// 					</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<!-- <script>
		// 			var date = new Date();
		// 			var year = date.getFullYear();
		// 			document.getElementsByClassName("year")[0].innerHTML = year;
		// 		</script> -->
		// 		<!-- Unbxd SDK trigger script for default template -->
		// 		<!-- <script type="text/javascript" src="./index.js"></script> -->
		// 	</body>
		// 	<!-- Unbxd SDK dependency libraries: jQuery, jQuery UI & Handlebars -->
		// </html>
		// `,
		// 		};
	};

	return (
		<div className="vanilla2">
			{/* <div dangerouslySetInnerHTML={{ _html: template }}></div> */}
			<div dangerouslySetInnerHTML={createMarkup()}></div>
		</div>
	);
	// return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Vanilla2;
