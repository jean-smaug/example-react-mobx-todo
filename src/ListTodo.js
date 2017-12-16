import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { autorun } from "mobx";

import Todo from "./Todo";

@inject("todo", "display")
@observer
class ListTodo extends Component {
  state = { todos: this.props.todo.getAllTodos() };

  componentDidMount(nextProps) {
    this.autorunDisposer = autorun(() => {
      switch (this.props.display.display) {
        case "ALL":
          this.setState({
            todos: this.props.todo.getAllTodos()
          });
          break;
        case "ACTIVE":
          this.setState({
            todos: this.props.todo.getActiveTodos()
          });

          break;
        case "COMPLETED":
          this.setState({
            todos: this.props.todo.getCompletedTodos()
          });
          break;

        default:
          return;
      }
    });
  }

  componentWillUnmount() {
    this.autorunDisposer();
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
