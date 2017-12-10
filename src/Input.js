import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("todo")
@observer
class Input extends Component {
  state = {
    currentInputValue: ""
  };

  addTodo = e => {
    if (e.key === "Enter" && e.target.value !== "") {
      this.props.todo.addTodo(this.state.currentInputValue);
      this.setState({ currentInputValue: "" });
    }
  };

  render() {
    return (
      <div>
        <input
          value={this.state.currentInputValue}
          onChange={e => this.setState({ currentInputValue: e.target.value })}
          onKeyPress={e => this.addTodo(e)}
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </div>
    );
  }
}

export default Input;
