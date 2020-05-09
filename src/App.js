import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";


const todos = [
	{
		task: "Learn Class Components",
		id: Date.now(),
		completed: false,
	},
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	constructor() {
		super();
		this.state = {
			todos,
		};
	}

	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	toggleCompleted = (todoId) => {
		console.log("todo id", todoId);
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todoId === todo.id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			}),
		});
	};

	addNewTodo = (todoTask) => {
		this.setState({
			todos: [
				...this.state.todos,
				{ task: todoTask, id: Date.now(), completed: false },
			],
		});
	};

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoForm addNewTodo={this.addNewTodo} />
				<TodoList
					toggleCompleted={this.toggleCompleted}
					todos={this.state.todos}
				/>
			</div>
		);
	}
}

export default App;
