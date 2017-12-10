import { observable, action } from "mobx";

class Todo {
  static id = 0;

  @observable todos = [];

  @action
  addTodo(name) {
    this.todos.push({ id: Todo.id, name });
    Todo.id += 1;
  }
}

export default new Todo();
