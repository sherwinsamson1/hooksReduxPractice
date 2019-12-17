import React from "react";
import "./App.css";

//REDUX
import { Provider } from "react-redux";
import store from "./store";

//React-cookie
import { withCookies } from "react-cookie";

//components
import Counter from "./counter";
import Name from "./name";

function App() {
	return (
		<Provider store={store}>
			<Counter />
			<Name />
		</Provider>
	);
}

export default withCookies(App);
