import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{this.props.name}</label>
        <button className="destroy"> </button>{" "}
      </div>
    );
  }
}

export default Todo;
