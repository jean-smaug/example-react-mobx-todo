import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Todo from "./Todo";

@inject("todo")
@observer
class ListTodo extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todo.todos.map(todo => {
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
