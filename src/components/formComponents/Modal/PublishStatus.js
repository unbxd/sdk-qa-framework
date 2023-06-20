import React from "react";
import { Modal, Input, Button } from "unbxd-react-components";

const PublishStatus = (props) => {
	const {
		publishStatus,
		setPublishStatus,
		publishSuccessModalRef,
		publishedBuilderLink,
		copyPublishedLink,
		publishedPreviewLink,
	} = props;

	return (
		<Modal
			title={
				publishStatus == "true" ? "Publish Successful" : "Publish Unsuccessful"
			}
			ref={publishSuccessModalRef}
			showClose={true}
			className="publishSuccess"
			onClose={() => {
				setPublishStatus(false);
			}}
		>
			{publishStatus == true ? (
				<div>
					<div className="confirm-modal-body">
						The demo site with these configurations can now be visited at:
						<div className="links">
							<div className="builder">
								<Input
									id="builder-cdn-link"
									name="builder-cdn-link"
									readOnly
									label="Link to Builder site:"
									defaultValue={publishedBuilderLink}
								/>
								<div
									id="copyIcon-builder"
									className="copyIcon"
									onClick={() => {
										copyPublishedLink("builder-cdn-link", "copyIcon-builder");
									}}
								></div>
								<a
									id="openNewTab"
									className="openNewTab"
									href={publishedBuilderLink}
									target="_blank"
								></a>
							</div>
							<div className="preview">
								<Input
									id="preview-cdn-link"
									name="preview-cdn-link"
									readOnly
									label="Link to Preview Site:"
									defaultValue={publishedPreviewLink}
								/>
								<div
									id="copyIcon-preview"
									className="copyIcon"
									onClick={() => {
										copyPublishedLink("preview-cdn-link", "copyIcon-preview");
									}}
								></div>
								<a
									id="openNewTab"
									className="openNewTab"
									href={publishedPreviewLink}
									target="_blank"
								></a>
							</div>
						</div>
						<div className="info">
							Validation of the configs might take upto 5 minutes in the server.
							So if the configurations don't seem to be applied, try again after
							some time.
						</div>
					</div>
					<div className="modal-footer">
						<Button
							appearance="link"
							className="cancel"
							onClick={() => {
								setPublishStatus(false);
								publishSuccessModalRef.current.hideModal();
							}}
						>
							Close
						</Button>
					</div>
				</div>
			) : (
				<div>
					<div className="confirm-modal-body">
						Could not publish the configurations. Please try again later.
					</div>
					<div className="modal-footer">
						<Button
							appearance="link"
							className="cancel"
							onClick={() => {
								setPublishStatus(false);
								publishSuccessModalRef.current.hideModal();
							}}
						>
							Close
						</Button>
					</div>
				</div>
			)}
		</Modal>
	);
};

export default PublishStatus;
