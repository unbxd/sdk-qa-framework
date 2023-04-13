import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Dropdown } from "unbxd-react-components";
import Usecases from "./Usecases";
import "../../../public/styles/components/lander/lander.scss";

import paginationConfig from "../../config/formConfig/pagination.json";
import productViewConfig from "../../config/formConfig/productView.json";

const Lander = () => {
	const navigate = useNavigate();
	const navigateBuilder = () => {
		navigate("/builder");
	};

	return (
		<div className="lander">
			<div className="landerHeader">
				<div className="logo">
					<a href="/" className="header-logo"></a>
				</div>
				<div className="userConfigs">
					<a href="https://unbxd.github.io/search-JS-library/" target="_blank">
						View Documentation
					</a>
				</div>
			</div>
			<div className="landerBody">
				<div className="description">
					<div className="descriptionText">
						<div className="text">
							<h1 className="banner-title">Welcome to the JS SDK Framework!</h1>
							<h3 className="banner-desc">
								This builder is a tool to help decrease the time of onboarding
								and testing.
							</h3>
							<button onClick={navigateBuilder}>
								Start building with the Unbxd SDK
							</button>
						</div>
					</div>
					{/* <div className="descriptionBanner">
						<div className="banner"></div>
					</div> */}
				</div>
				{/* <div className="searchOptions">
					<Input className="searchConfig" />
					<Dropdown
						className="dropdownConfig"
						appearance="block"
						options={[
							{
								id: 1,
								name: "All",
							},
							{
								id: 2,
								name: "Pagination",
							},
							{
								id: 3,
								name: "Product View",
							},
						]}
					/>
				</div> */}
				<div className="configurations">
					<div className="options">
						<div className="option">
							<h2>Default Configurations</h2>
							<div className="configOptions">
								{/* <a href="/builder"> */}
								<div className="configOption">
									<div className="optionHeader">
										<div className="defaultConfig"></div>
										<h4>Default Configurations</h4>
									</div>
									<div className="optionDesc">
										<p>
											Click to go to the QA Framework with default
											configurations applied.
										</p>
										<div className="buttonSection">
											<a href="/builder">
												<Button appearance="secondary" size="small">
													Builder
												</Button>
											</a>
											<a href="/qa">
												<Button appearance="secondary" size="small">
													Preview
												</Button>
											</a>
										</div>
									</div>
								</div>
								{/* </a> */}
							</div>
						</div>
						<Usecases
							title="Pagination"
							usecases={paginationConfig["usecases"]}
						/>
						<Usecases
							title="Product View"
							usecases={productViewConfig["usecases"]}
						/>
					</div>
				</div>
			</div>
			<div className="landerFooter">
				<p>Unbxd Software Pvt. Ltd. Copyrights 2023</p>
			</div>
		</div>
	);
};

export default Lander;
