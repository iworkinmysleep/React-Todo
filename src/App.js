import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import './App.css'


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

	clearCompleted = () => {
		this.setState({
			todos: this.state.todos.filter((todo) => !todo.completed),
		});
	};

	render() {
		return (
			<div className='todo_container'>
				<h1>Welcome to your Todo App!</h1>
				<TodoForm addNewTodo={this.addNewTodo} />
				<TodoList
					toggleCompleted={this.toggleCompleted}
          todos={this.state.todos}
          clearCompleted={this.clearCompleted} 
				/>
			</div>
		);
	}
}

export default App;
