const initialState = {
	token: "",
	loggedIn: false,
};

const reducer = (state = initialState, action) => {
	if (action.type === "LOGIN") {
		return {
			...state,
			token: Math.random().toString(36).substring(7),
			loggedIn: true,
		};
	}

	return state;
};

export default reducer;
