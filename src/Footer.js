import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("todo", "display")
@observer
class Footer extends Component {
  state = {
    selectedFilter: "ALL"
  };

  handleDisplayedTodo = display => {
    this.setState({
      selectedFilter: display
    });
    this.props.display.switchDisplay(display);
  };

  render() {
    const { selectedFilter } = this.state;
    return (
      <div>
        <span className="todo-count">
          <strong>{this.props.todo.getActiveTodos().length}</strong>
          <span> </span>
          <span>items</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              className={selectedFilter === "ALL" ? "selected" : ""}
              onClick={() => this.handleDisplayedTodo("ALL")}
            >
              All
            </a>
          </li>
          <span> </span>
          <li>
            <a
              href="#/active"
              className={selectedFilter === "ACTIVE" ? "selected" : ""}
              onClick={() => this.handleDisplayedTodo("ACTIVE")}
            >
              Active
            </a>
          </li>
          <span> </span>
          <li>
            <a
              href="#/completed"
              className={selectedFilter === "COMPLETED" ? "selected" : ""}
              onClick={() => this.handleDisplayedTodo("COMPLETED")}
            >
              Completed
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
