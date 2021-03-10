export const LOGIN = "LOGIN";

export const login = (username) => {
	return {
		type: LOGIN,
		username,
	};
};

export const checkLogin = (username, password) => {
	return async (dispatch) => {
		try {
			if (username === "venu" && password === "venu") {
				await new Promise((resolve, reject) =>
					setTimeout(() => resolve(), 500)
				);

				dispatch(login(username));
				return Promise.resolve(true);
			} else {
				await new Promise((resolve, reject) =>
					setTimeout(() => resolve(), 500)
				);

				console.log("username or password incorrect");
				return Promise.resolve(false);
			}
		} catch (err) {
			console.log("error", err);
			return Promise.reject();
		}
	};
};
