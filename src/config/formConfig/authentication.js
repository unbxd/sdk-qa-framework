const authConfig = {
	moduleName: "Authentication",
	moduleKey: null,
	moduleDesc:
		"Authenticate the Unbxd library using your Unbxd account keys (also known as Authentication Keys).",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/SiteKey.html",
	config: [
		{
			name: "siteKey",
			dataType: "string",
		},
		{
			name: "apiKey",
			dataType: "string",
		},
	],
};

export default authConfig;
