import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import FlipMove from "react-flip-move";
import { ALL, ACTIVE, COMPLETED } from "../CONSTANTS.js";

import Todo from "./Todo";

@inject("todo", "display")
@observer
class ListTodo extends Component {
  renderTodos = () => {
    switch (this.props.display.display) {
      case ALL:
        return this.props.todo.allTodos;

      case ACTIVE:
        return this.props.todo.activeTodos;

      case COMPLETED:
        return this.props.todo.completedTodos;

      default:
        return;
    }
  };

  render() {
    return (
      <FlipMove
        className="todo-list"
        duration={150}
        typeName="ul"
        enterAnimation="elevator"
        maintainContainerHeight={true}
      >
        {this.renderTodos().map(todo => {
          return (
            <li key={todo.id}>
              <Todo {...todo} />
            </li>
          );
        })}
      </FlipMove>
    );
  }
}

export default ListTodo;
