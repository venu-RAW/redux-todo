import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../../redux/actions/todo.action";

const AddTodo = (props) => {
	const [todo, setTodo] = useState("");

	const { handleSubmit } = props;
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(todo);
					setTodo("");
				}}
			>
				<input
					type="text"
					onChange={(e) => setTodo(e.target.value)}
					value={todo}
				/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	handleSubmit: (todo) => dispatch(actionCreator.addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(AddTodo);
