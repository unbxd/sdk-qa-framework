import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import "./App.scss";

const el = document.getElementById("app");

const root = ReactDOM.createRoot(el);

// root.render(<App />);
root.render(
	<div>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</div>
);
