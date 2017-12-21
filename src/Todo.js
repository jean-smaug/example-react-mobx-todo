import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("todo")
class Todo extends Component {
  handleCheck = () => {
    this.props.todo.checkTodo(this.props.id);
  };

  handleDelete = () => {
    this.props.todo.removeTodo(this.props.id);
  };

  render() {
    const { checked, name } = this.props;
    return (
      <div className="view">
        <input
          onChange={this.handleCheck}
          className="toggle"
          type="checkbox"
          checked={checked}
        />
        <label>{name}</label>
        <button className="destroy" onClick={this.handleDelete}>
          {" "}
        </button>
      </div>
    );
  }
}

export default Todo;
