import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../../redux/actions/todo.action";
import styles from "./List.module.css";

const List = (props) => {
	const { todos, deleteTodo } = props;
	return (
		<ul className={styles.nav}>
			{todos.map((todo) => (
				<div key={todo.id} className={styles.navMenu}>
					<li className={styles.navText}>{todo.todo}</li>
					<button onClick={() => deleteTodo(todo.id)}>del</button>
				</div>
			))}
		</ul>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch) => ({
	deleteTodo: (id) => dispatch(actionCreator.deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
