import React from "react";
import { useNavigate } from "react-router-dom";
import LanderHeader from "./LanderHeader";
import Usecases from "./Usecases";
import "../../../public/styles/components/lander/lander.scss";

const Lander = () => {
	const navigate = useNavigate();
	const navigateHome = () => {
		navigate("/");
	};
	const navigateBuilder = () => {
		navigate("/builder");
	};

	return (
		<div className="lander">
			<LanderHeader />
			<div className="landerBody">
				<div className="description">
					<div className="descriptionText">
						<div className="text">
							<h1 className="banner-title">
								Welcome to the JS SDK QA Framework!
							</h1>
							<h3 className="banner-desc">
								Simplifying new onboardings and testing of Unbxd JS SDK
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
				<div className="landerRoutes">
					<a href="/usecases">
						<div className="route">
							<div className="usecasesLogo"></div>
							<h3>Use Cases</h3>
							<p>
								Take a look at the different usecases that are currently
								present.
							</p>
						</div>
					</a>
					<a href="/builder">
						<div className="route">
							<div className="builderLogo"></div>
							<h3>Builder</h3>
							<p>
								Go to the builder dashboard to play around with the
								configurations.
							</p>
						</div>
					</a>
					<a href="/qa">
						<div className="route">
							<div className="qaLogo"></div>
							<h3>Preview</h3>
							<p>
								Take a look at how the demo site would look with default
								configurations.
							</p>
						</div>
					</a>
				</div>
			</div>
			<div className="landerFooter">
				<p>Unbxd Software Pvt. Ltd. Copyrights 2023</p>
			</div>
		</div>
	);
};

export default Lander;
