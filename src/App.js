import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "./helper/history";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import TodoList from "./components/TodoList/TodoList";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App(props) {
	return (
		<div className="App">
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={Login} />
					<ProtectedRoute exact path="/home" {...props} comp={Home} />
					<ProtectedRoute exact path="/todo" {...props} comp={TodoList} />
				</Switch>
			</Router>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		token: state.login.token,
		loggedIn: state.login.loggedIn,
	};
};

export default connect(mapStateToProps)(App);
