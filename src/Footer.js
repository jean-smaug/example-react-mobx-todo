import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("todo")
@observer
class Footer extends Component {
  render() {
    return (
      <div>
        <span className="todo-count">
          <strong>2</strong>
          <span> </span>
          <span>items</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className="">
              All
            </a>
          </li>
          <span> </span>
          <li>
            <a href="#/active" className="selected">
              Active
            </a>
          </li>
          <span> </span>
          <li>
            <a href="#/completed" className="">
              Completed
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
