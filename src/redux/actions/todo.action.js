export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (todo) => ({
	type: ADD_TODO,
	todo: todo,
	id: Math.random().toString(),
});

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	id: id,
});
