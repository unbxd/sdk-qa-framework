import React from "react";

const FormIcons = (props) => {
	const { formConfigs, showContent, selectedAcc } = props;
	return (
		<div className="formIcons">
			{formConfigs.map((formConfig = {}, i) => {
				return (
					<div
						className="icon"
						key={i}
						onClick={() => showContent(i)}
						// style={
						// 	selectedAcc == i
						// 		? { border: "1px solid cornflowerblue" }
						// 		: { borderRight: "#1px solid #ccc" }
						// }
						// style={
						// 	selectedAcc == i
						// 		? { backgroundColor: "#c0d7ff" }
						// 		: { backgroundColor: "#fff" }
						// }
					>
						<div
							className={
								selectedAcc == i ? "moduleLogo-selected" : "moduleLogo"
							}
						>
							<span
								className={
									formConfig.moduleKey
										? `${formConfig.moduleKey}-icon`
										: `${formConfig.moduleName}-icon`
								}
							></span>
							{/* <i
								className={formConfig.moduleIconClass}
								style={
									selectedAcc == i ? { color: "#4777ED" } : { color: "#000" }
								}
							></i> */}
						</div>
						{/* <p className="moduleName">{formConfig.moduleName}</p> */}
					</div>
				);
			})}
		</div>
	);
};

export default FormIcons;
