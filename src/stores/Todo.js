import { observable, action, computed } from "mobx";

class Todo {
  static id = 0;

  @observable todos = [];

  @action
  addTodo(name) {
    this.todos.push({ id: Todo.id, name, checked: false });
    Todo.id += 1;
  }

  @action
  checkTodo(todoId) {
    this.todos = this.todos.map(todo => {
      if (todo.id === todoId) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
  }

  @action
  removeTodo(todoId) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }

  @computed
  get allTodos() {
    return this.todos;
  }

  @computed
  get activeTodos() {
    return this.todos.filter(todo => todo.checked !== true);
  }

  @computed
  get completedTodos() {
    return this.todos.filter(todo => todo.checked === true);
  }
}

export default new Todo();
