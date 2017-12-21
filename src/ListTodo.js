import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Todo from "./Todo";

@inject("todo", "display")
@observer
class ListTodo extends Component {
  renderTodos = () => {
    switch (this.props.display.display) {
      case "ALL":
        return this.props.todo.allTodos;

      case "ACTIVE":
        return this.props.todo.activeTodos;

      case "COMPLETED":
        return this.props.todo.completedTodos;

      default:
        return;
    }
  };

  render() {
    return (
      <ul className="todo-list">
        {this.renderTodos().map(todo => {
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
