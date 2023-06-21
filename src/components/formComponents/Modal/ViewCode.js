import React from "react";
import { Modal, Button } from "unbxd-react-components";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const ViewCode = (props) => {
	const {
		viewJSONModalRef,
		applyImportedCode,
		inputJSONFile,
		inputFileChange,
		exportAllJS,
		downloadJSON,
		copyJSON,
		resetJSON,
		jsonData,
		setJsonData,
	} = props;

	return (
		<Modal
			title="Configurations Code"
			ref={viewJSONModalRef}
			showClose={true}
			className="configModal"
			onClose={() => {
				applyImportedCode(jsonData);
			}}
		>
			<div className="confirm-modal-body">
				<div className="btnSection">
					<Button
						appearance="primary"
						onClick={() => {
							inputJSONFile.current.click();
						}}
					>
						Import JSON file
					</Button>
					<input
						type="file"
						onChange={inputFileChange}
						ref={inputJSONFile}
						style={{ display: "none" }}
					/>
					<Button appearance="primary" onClick={() => exportAllJS("export")}>
						Download as JS
					</Button>
					<Button appearance="primary" onClick={() => downloadJSON()}>
						Download as JSON
					</Button>
					<Button appearance="primary" onClick={() => copyJSON()}>
						Copy Code
					</Button>
					<Button appearance="primary" onClick={() => resetJSON()}>
						Reset Code
					</Button>
				</div>
				<div className="formjson" id="formjson">
					<CodeMirror
						id="jsonCode"
						className="jsonCode"
						value={jsonData}
						placeholder="Insert code here..."
						height="100%"
						width="100%"
						extensions={[javascript({ json: true })]}
						onChange={(code) => setJsonData(code)}
					/>
				</div>
			</div>
		</Modal>
	);
};

export default ViewCode;
