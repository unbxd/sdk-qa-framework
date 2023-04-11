import React, { useEffect, useState } from "react";

const ExternalHtmlComponent = (props) => {
	const { filename } = props;
	const [htmlContent, setHtmlContent] = useState("");

	useEffect(() => {
		fetch(`/path/to/external/${filename}`)
			.then((response) => response.text())
			.then((html) => setHtmlContent(html))
			.catch((error) => console.log(error));
	}, []);

	return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default ExternalHtmlComponent;
