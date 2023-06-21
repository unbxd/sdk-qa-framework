import React, { useEffect, useRef } from "react";

// import UnbxdSearch from "../../../../search-JS-library/src/index";
import "./index.scss";
import template from "./Vanilla2.html";
import "../../../public/unbxdStyle.css";
import "../../../public/styles/components/vanilla2/vanilla2.scss";

const Vanilla2 = (props) => {
	let { validatedConfig = {}, displayMessage } = props;

	const divRef = useRef();

	useEffect(() => {
		if (Object.keys(validatedConfig).length) {
			console.log("validatedConfig:", validatedConfig);
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
								setTimeout(function () {
									document
										.getElementById(localStorage.getItem("unx_product_clicked"))
										.scrollIntoView({
											behavior: "smooth",
										});
									localStorage.removeItem("unx_product_clicked");
								}, 500);
							}
						}
					},
					onError: function (module, err) {
						displayMessage("error", err, module);
						return;
					},
					searchTrigger: "click",
					...validatedConfig,
				});
				console.log("Applied changes");
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
				// errors.forEach((error) => console.log("error:", error));
				// setErrorSet(errors);
			}
		}
	});

	useEffect(() => {
		const fragment = document.createRange().createContextualFragment(template);
		divRef.current.append(fragment);
	}, []);

	return (
		<div className="vanilla2">
			<div ref={divRef} key="key"></div>
		</div>
	);
};

export default Vanilla2;
