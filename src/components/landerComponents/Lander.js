import React from "react";

const Lander = () => {
	return (
		<div
			style={{
				width: "90%",
				display: "flex",
				margin: "0 auto",
				flexDirection: "column",
				alignContent: "center",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1>Welcome to the JS SDK QA Framework.</h1>
			<div className="defaultRoutes">
				<a className="defaultRoute" href="/builder">
					<span>SI Framework</span>
				</a>
				<a className="defaultRoute" href="/qa">
					<span>QA Framework</span>
				</a>
			</div>
		</div>
	);
};

export default Lander;
