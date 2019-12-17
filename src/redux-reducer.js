import { combineReducers } from "redux";

function counterReducer(state = { count: 0 }, action) {
	switch (action.type) {
		case "CHANGE_COUNT":
			return {
				...state,
				count: action.payload
			};
		default:
			return state;
	}
}

function nameReducer(state = { name: "" }, action) {
	switch (action.type) {
		case "UPDATE_NAME":
			return {
				...state,
				name: action.payload
			};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	counterReducer,
	nameReducer
});

export default rootReducer;
