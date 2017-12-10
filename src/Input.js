import React, { Component } from "react";
// import { observer } from "mobx-react";

// @observer
class Input extends Component {
  render() {
    return (
      <div>
        <input className="new-todo" placeholder="What needs to be done?" />
      </div>
    );
  }
}

export default Input;
