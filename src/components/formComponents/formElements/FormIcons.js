import React from "react";
import "../../../../public/styles/components/form/icons.scss";

const FormIcons = (props) => {
	const { formConfigs, showContent, selectedAcc } = props;
	return (
		<div className="formIcons">
			{formConfigs.map((formConfig = {}, i) => {
				return (
					<div
						className={selectedAcc == i ? "icon-selected" : "icon"}
						key={i}
						onClick={() => showContent(i)}
					>
						<div className="moduleLogo">
							<span
								className={
									formConfig.moduleKey
										? `${formConfig.moduleKey}-icon`
										: `${formConfig.moduleName}-icon`
								}
							></span>
						</div>
						<div className="moduleName">
							{formConfig.moduleKey
								? `${formConfig.moduleKey}`
								: `${formConfig.moduleName}`}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default FormIcons;
