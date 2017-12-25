import React, { Component } from "react";
import { Provider } from "mobx-react";
import Input from "./components/Input";
import Footer from "./components/Footer";
import ListTodo from "./components/ListTodo";

import todoStore from "./stores/Todo";
import displayStore from "./stores/Display";

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
