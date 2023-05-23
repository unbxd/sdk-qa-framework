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
			displayIf: function (spellCheck) {
				return spellCheck.enabled === true;
			},
		},
		{
			name: "template",
			dataType: "function",
			displayIf: function (spellCheck) {
				return spellCheck.enabled === true;
			},
		},
		{
			name: "selectorClass",
			dataType: "string",
			displayIf: function (spellCheck) {
				return spellCheck.enabled === true;
			},
		},
		{
			name: "tagName",
			dataType: "string",
			displayIf: function (spellCheck) {
				return spellCheck.enabled === true;
			},
		},
		{
			name: "htmlAttributes",
			dataType: "object",
			displayIf: function (spellCheck) {
				return spellCheck.enabled === true;
			},
		},
	],
};

export default spellCheckConfig;
