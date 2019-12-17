import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

export default function Counter() {
	const { count, name } = useSelector(state => ({
		...state.counterReducer,
		...state.nameReducer
	}));
	const dispatch = useDispatch();

	const [cookies, setCookie, removeCookie] = useCookies([
		"sample",
		"counter",
		"onamae"
	]);

	function incrementCount(event) {
		const newCount = count + 1;
		setCookie("counter", newCount, { path: "/" });
		dispatch({
			type: "CHANGE_COUNT",
			payload: newCount
		});
	}

	function decrementCount() {
		const newCount = count - 1;
		setCookie("counter", newCount, { path: "/" });
		dispatch({
			type: "CHANGE_COUNT",
			payload: newCount
		});
	}

	return (
		<div>
			<h2>Counter: {count}</h2>
			<button onClick={incrementCount}>+</button>
			<button onClick={decrementCount}>-</button>
			<div>
				<h3>Your name is: {name}</h3>
				<h3>Cookie: {cookies.sample}</h3>
			</div>
		</div>
	);
}
