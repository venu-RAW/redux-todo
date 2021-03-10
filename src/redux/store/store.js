import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../reducer/login.reducer";
import todoReducer from "../reducer/todo.reducer";

const logger = (store) => (next) => (action) => {
	console.log("[Middleware] Dispatching", action);
	const result = next(action);
	console.log("[Middleware] next state", store.getState());
	return result;
};

const rootReducer = combineReducers({
	login: loginReducer,
	todo: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
