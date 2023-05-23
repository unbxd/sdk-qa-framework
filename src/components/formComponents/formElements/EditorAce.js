import React, { Component } from "react";
import brace from "brace";
import AceEditor from "react-ace";

import "brace/mode/json";
import "brace/theme/monokai";

const EditorAce = (props) => {
	const { formData } = props;
	const onChange = (newValue) => {
		console.log(newValue);
	};
	return (
		<AceEditor
			id="aceEditor"
			className="aceEditor"
			mode="json"
			// theme="monokai"
			name="blah2"
			// onLoad={this.onLoad}
			height="60%"
			width="600px"
			fontSize="16px"
			value={JSON.stringify(formData, null, 4)}
			onChange={(code) => {
				onChange(code);
			}}
		/>
	);
};

export default EditorAce;
