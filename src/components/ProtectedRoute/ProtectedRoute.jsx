import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";


export class ProtectedRoute extends Component {
	render() {
		const { comp: Component, ...rest } = this.props;
		return (
			<Route
				exact
				{...rest}
				render={(props) => {
					return rest.loggedIn ? (
						<Component {...props} />
					) : (
						<Redirect to="/" />
					);
				}}
			/>
		);
	}
}

export default ProtectedRoute;
