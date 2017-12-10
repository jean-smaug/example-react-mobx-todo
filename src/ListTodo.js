import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Todo from "./Todo";

@inject("todo")
@observer
class ListTodo extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todo.todos.map(({ id, name }) => {
          return (
            <li key={id}>
              <Todo name={name} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListTodo;
