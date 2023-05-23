function escapeJSON(obj) {
	const replacer = (key, value) => {
		if (typeof value === "function") {
			return value.toString(); // Convert functions to string
		} else if (value instanceof Element) {
			return value.outerHTML; // Convert DOM elements to string
		} else if (typeof value === "object") {
			return escapeJSON(value); // Recursively escape nested objects
		}
		return value;
	};

	return JSON.stringify(obj, replacer, 2);
}

function unescapeJSON(str) {
	const reviver = (key, value) => {
		if (typeof value === "string") {
			if (value.startsWith("function")) {
				// Convert function strings back to functions
				const functionBody = value
					.substring(value.indexOf("{") + 1, value.lastIndexOf("}"))
					.trim();
				return new Function(functionBody);
			} else if (value.startsWith("<") && value.endsWith(">")) {
				// Convert DOM element strings back to elements
				const div = document.createElement("div");
				div.innerHTML = value;
				return div.firstElementChild;
			}
		} else if (typeof value === "object") {
			if (Array.isArray(value)) {
				return value.map((element) => unescapeJSON(element)); // Recursively unescape arrays
			} else {
				return unescapeJSON(value); // Recursively unescape nested objects
			}
		}
		return value;
	};

	return JSON.parse(str, reviver);
}

export { escapeJSON, unescapeJSON };
