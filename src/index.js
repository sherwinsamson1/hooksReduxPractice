import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//React-cookie
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
	<CookiesProvider>
		<App />
	</CookiesProvider>,
	document.getElementById("root")
);
