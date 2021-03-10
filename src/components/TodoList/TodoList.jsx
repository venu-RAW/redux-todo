import React from "react";
import Navigation from "../Navigation/Navigation";
import AddTodo from "./AddTodo/AddTodo";
import List from "./List/List";

function TodoList() {
	return (
		<div>
			<Navigation />
			<AddTodo />
			<List />
		</div>
	);
}

export default TodoList;
