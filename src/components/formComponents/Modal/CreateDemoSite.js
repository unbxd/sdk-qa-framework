import React from "react";
import { Modal, Button } from "unbxd-react-components";
import CustomRadio from "../formElements/CustomRadio";
import CustomInput from "../formElements/CustomInput";

const CreateDemoSite = (props) => {
	const {
		formData,
		confirmModalRef,
		setPublishPopUp,
		customFileName,
		setCustomFileName,
		customFileNameBool,
		setCustomFileNameBool,
		publishPopUp,
		handlePublish,
		displayMessage,
		siteKey,
		configKey,
	} = props;

	return (
		<Modal
			title="Create Demo Site"
			ref={confirmModalRef}
			showClose={true}
			className="confirmModal"
			onClose={() => {
				setPublishPopUp(false);
				setCustomFileNameBool("NO");
				setCustomFileName(
					configKey !== undefined && configKey.length > 0 ? configKey : ""
				);
			}}
		>
			{!publishPopUp && (
				<div>
					<div className="confirm-modal-body">
						Are you sure you want to create demo site?
						{siteKey !== undefined && configKey !== undefined ? (
							<>
								<CustomRadio
									appearance="block"
									className="fileSaveName"
									name="fileSaveName"
									options={[
										{
											id: "NO",
											name: "Overwriting existing configurations.",
										},
										{
											id: "YES",
											name: "Create new demo site with these configurations.",
										},
									]}
									value={customFileNameBool}
									defaultValue={"NO"}
									onChange={(val) => {
										setCustomFileNameBool(val);
									}}
								/>
								{customFileNameBool === "YES" && (
									<CustomInput
										name="customFileName"
										label="Enter the version:"
										className="customFileName"
										defaultValue={configKey}
										value={customFileName}
										onChange={(val) => {
											setCustomFileName(val.replaceAll(" ", "-"));
										}}
										readOnly={customFileNameBool === "NO" ? true : false}
									/>
								)}
							</>
						) : (
							<CustomInput
								name="customFileName"
								label="Enter the version:"
								onChange={(val) => {
									setCustomFileName(val.replaceAll(" ", "-"));
								}}
								value={customFileName}
								defaultValue={customFileName}
							/>
						)}
						<div className="confirmFileName">
							<div>
								The preview of your demo site would be at: <br />
							</div>
							<div>
								<span className="icon"></span>
								<span>
									http://localhost:3030/preview/{formData.siteKey}/
									{customFileName}
								</span>
							</div>
						</div>
						{customFileNameBool === "NO" && (
							<div className="warning">
								Note: If a file with the same name exists, the content of this
								file will be overwritten with these configurations.
							</div>
						)}
					</div>
					<div className="modal-footer">
						<Button
							appearance="link"
							className="cancel"
							onClick={() => {
								setPublishPopUp(false);
								confirmModalRef.current.hideModal();
								setCustomFileName(
									configKey !== undefined && configKey.length > 0
										? configKey
										: ""
								);
							}}
						>
							Cancel
						</Button>
						<Button
							appearance="primary"
							className="publish-configs"
							onClick={() => {
								if (customFileName.length > 0) {
									handlePublish();
								} else {
									displayMessage(
										"error",
										"Filename must have 1 or more characters."
									);
									return;
								}
							}}
						>
							Create Demo Site
						</Button>
					</div>
				</div>
			)}
			{publishPopUp && (
				<div className="confirm-modal-body">
					Publishing...
					<div className="loading">
						<img
							src="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif"
							alt="Loading"
						></img>
					</div>
				</div>
			)}
		</Modal>
	);
};

export default CreateDemoSite;
