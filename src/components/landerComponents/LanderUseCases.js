import React from "react";
import LanderHeader from "./LanderHeader";
import Usecases from "./Usecases";

import { Input, Button, Dropdown } from "unbxd-react-components";
import paginationConfig from "../../config/formConfig/pagination.json";
import productViewConfig from "../../config/formConfig/productView.json";
import facetsConfig from "../../config/formConfig/facets.json";

const LanderUseCases = () => {
	return (
		<div className="lander">
			<LanderHeader />
			<div className="landerBody">
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
				<div className="description">
					<div className="descriptionText">
						<div className="text">
							<h1 className="banner-title">Uses Cases</h1>
							<h3 className="banner-desc">
								Different combinations of configurations are applied onto the
								demo site.
							</h3>
						</div>
					</div>
					{/* <div className="descriptionBanner">
						<div className="banner"></div>
					</div> */}
				</div>
				<div className="configurations">
					<div className="options">
						<Usecases
							title="Pagination"
							usecases={paginationConfig["usecases"]}
						/>
						<Usecases
							title="Product View"
							usecases={productViewConfig["usecases"]}
						/>
						<Usecases title="Facets" usecases={facetsConfig["usecases"]} />
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default LanderUseCases;
