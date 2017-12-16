import React, { Component } from "react";
import { Provider } from "mobx-react";
import Input from "./Input";
import Footer from "./Footer";
import ListTodo from "./ListTodo";

import todoStore from "./models/Todo";
import displayStore from "./models/Display";

const stores = {
  todo: todoStore,
  display: displayStore
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
            <footer className="footer">
              <Footer />
            </footer>
          </section>
        </Provider>
      </div>
    );
  }
}

export default App;
