const spellCheckConfig = {
	moduleName: "Spell Check",
	moduleKey: "spellCheck",
	moduleDesc:
		"Consequat magna laborum deserunt exercitation esse est. Duis anim et et ut velit consectetur Lorem reprehenderit ad aliquip ea exercitation. Enim mollit excepteur qui cillum aliqua aliquip ipsum deserunt aute nisi labore id aute magna. Pariatur exercitation proident veniam exercitation aute ipsum cillum.",
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
