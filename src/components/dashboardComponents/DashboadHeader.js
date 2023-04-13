import React, { useState } from "react";
import { Input, Button } from "unbxd-react-components";

import "../../../public/styles/components/dashboard/header.scss";

const DashboardHeader = (props) => {
	const { viewConfigOption } = props;
	return (
		<div className="dashHead">
			<div className="UNX-header">
				<div className="UNX-header-inner">
					<div className="UNX-logo">
						<a href="/" className="UNX-header-logo">
							<span className="UNX-square"></span>
						</a>
					</div>
					{/* <nav className="UNX-nav">
						<a href="" className="disabled">
							Home
						</a>
						<a href="" className="disabled">
							Clothing
						</a>
						<a href="" className="disabled">
							Electronics
						</a>
						<a href="" className="disabled">
							Health & Beauty
						</a>
						<a href="" className="disabled">
							Watches
						</a>
					</nav> */}
					<div className="UNX-right-header">
						<div id="autoSuggestInput" className="UNX-input-wrapper">
							<input
								id="unbxdInput"
								placeholder="Search here..."
								className="UNX-input"
								autoComplete="off"
							/>
							<button
								id="searchBtn"
								className="fa fa-search UNX-search-btn"
							></button>
							<div className="UNX-pd-parent">
								<div className="UNX-preview-debugger UNX-query"></div>
							</div>
						</div>
						{viewConfigOption && (
							<div className="userConfigs">
								<a
									href="https://unbxd.github.io/search-JS-library/"
									target="_blank"
								>
									View Documentation
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardHeader;
