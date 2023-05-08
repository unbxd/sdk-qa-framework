const spellCheckConfig = {
	moduleName: "Spell Check",
	moduleKey: "spellCheck",
	moduleDesc:
		"Provides spelling suggestions or spell-checks for misspelled search queries.",
	docLink:
		"https://unbxd.github.io/search-JS-library/docs/configurations/SpellCheckConfig.html",
	config: [
		{
			name: "enabled",
			dataType: "boolean",
			label: "Enable Spell Check",
		},
		{
			name: "el",
			dataType: "element",
		},
		{
			name: "template",
			dataType: "function",
		},
		{
			name: "selectorClass",
			dataType: "string",
		},
		{
			name: "tagName",
			dataType: "string",
		},
		{
			name: "htmlAttributes",
			dataType: "object",
		},
	],
};

export default spellCheckConfig;
