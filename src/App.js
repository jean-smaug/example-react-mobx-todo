import React, { Component } from "react";
import Provider from "mobx-react";
import Input from "./Input";
import ListTodo from "./ListTodo";

import todoStore from "./models/Todo";

const stores = {
  todoStore
};

class App extends Component {
  render() {
    return (
      <div>
        <Provider {...stores}>
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <Input />
            </header>
            <section className="main">
              <ListTodo />
            </section>
          </section>
        </Provider>
      </div>
    );
  }
}

export default App;
