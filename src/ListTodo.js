import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Todo from "./Todo";

@inject("todo", "display")
@observer
class ListTodo extends Component {
  state = { todos: this.props.todo.allTodos };

  componentDidMount(nextProps) {
    switch (this.props.display.display) {
      case "ALL":
        this.setState({
          todos: this.props.todo.allTodos
        });
        break;
      case "ACTIVE":
        this.setState({
          todos: this.props.todo.activeTodos
        });

        break;
      case "COMPLETED":
        this.setState({
          todos: this.props.todo.completedTodos
        });
        break;

      default:
        return;
    }
  }

  render() {
    return (
      <ul className="todo-list">
        {this.state.todos.map(todo => {
          return (
            <li key={todo.id}>
              <Todo {...todo} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListTodo;
