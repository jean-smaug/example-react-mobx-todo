import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("todo")
class Todo extends Component {
  handleCheck = () => {
    this.props.todo.checkTodo(this.props.id);
  };

  render() {
    const { checked, name } = this.props;
    return (
      <div className="view">
        <input
          onClick={() => {
            this.handleCheck();
          }}
          className="toggle"
          type="checkbox"
          checked={checked}
        />
        <label>{name}</label>
        <button className="destroy"> </button>{" "}
      </div>
    );
  }
}

export default Todo;
