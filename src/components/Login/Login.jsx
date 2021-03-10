import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../../helper/history";

import * as actionCreator from "../../redux/actions/login.action";

function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { handleSubmit } = props;
	return (
		<>
			<form
				name="form"
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(username, password);
				}}
			>
				<div className="form-group">
					<label htmlFor="username">Username: </label>
					<input
						type="text"
						name="username"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
				</div>
				<br />
				<div className="form-group">
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</div>
				<br />
				<div className="form-group">
					<button type="submit">Login</button>
				</div>
			</form>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		token: state.login.token,
		loggedIn: state.login.loggedIn,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: (username, password) =>
			dispatch(actionCreator.checkLogin(username, password)).then(
				(success) => {
					if (success) {
						history.push("/home");
					}
				}
			),
	};
};

const componentWithRouter = withRouter(Login);
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(componentWithRouter);
