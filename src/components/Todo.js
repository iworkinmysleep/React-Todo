import React from "react";
import './Todo.css'

const Todo = (props) => {
	const handleClick = (e) => {
		props.toggleCompleted(props.todo.id);
	};
	return (
		<div
			className={`todo${props.todo.completed ? " completed" : ""}`}
			onClick={handleClick}>
			<p>{props.todo.task}</p>
		</div>
	);
};

export default Todo;
