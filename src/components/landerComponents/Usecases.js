import React from "react";
import { Button } from "unbxd-react-components";

const Usecases = ({ usecases = [], title = "" }) => {
	const colors = [
		"#FF8000",
		"#FFFF00",
		"#80FF00",
		"#00FF00",
		"#00FF80",
		"#0080FF",
		"#FF00FF",
		"#FF0080",
	];

	let count = 0;

	return (
		<div className="option">
			<h2>{title}</h2>
			<div className="configOptions">
				{usecases.map((usecase, key) => {
					return (
						// <a key={key} href={`/builder/${usecase["key"]}`}>
						<div key={key}>
							<div
								className="configOption"
								style={{
									backgroundColor: "#fff",
									// backgroundColor: `${colors[count++]}`,
								}}
							>
								<div className="optionHeader">
									<div className={usecase["icon"]}></div>
									<h4>{usecase["name"]}</h4>
								</div>
								<div className="optionDesc">
									<p>{usecase["desc"]}</p>
									<div className="buttonSection">
										{/* <a href={`/builder/${usecase["key"]}`}> */}
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
						</div>
						//</a>
					);
				})}
			</div>
		</div>
	);
};

export default Usecases;
