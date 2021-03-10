import * as actionCreators from "../actions/todo.action";

const initialState = {
	todos: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionCreators.ADD_TODO:
			return {
				...state,
				todos: [
					...state.todos,
					{
						todo: action.todo,
						id: action.id,
					},
				],
			};

		case actionCreators.DELETE_TODO:
			const todos = state.todos.filter((todo) => todo.id !== action.id);
			return {
				...state,
				todos: todos,
			};

		default:
			return state;
	}
};

export default reducer;
