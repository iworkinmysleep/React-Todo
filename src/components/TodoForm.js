import React, { Component } from "react";

class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			newTodo: "",
		};
	}

	handleChanges = (e) => {
		this.setState({
			newTodo: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.newTodo) {
			this.props.addNewTodo(this.state.newTodo);
		}
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Enter Todo....."
					value={this.state.newTodo}
					onChange={this.handleChanges}></input>
				<button type="submit">Add Todo</button>
			</form>
		);
	}
}

export default TodoForm;
