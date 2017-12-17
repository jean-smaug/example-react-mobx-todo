import { observable, computed } from "mobx";
import { db } from "../database";

class Todo {
  static id = 0;
  @observable todos = [];

  constructor() {
    db.collection("todos").onSnapshot(querySnapshot => {
      this.todos = [];
      querySnapshot.forEach(doc => {
        this.todos.push({ ...doc.data(), id: doc.id });
      });
    });
  }

  addTodo(name) {
    const todo = { name, checked: false };
    db.collection("todos").add(todo);
  }

  async checkTodo(todoId) {
    const documentRef = db.collection("todos").doc(todoId);

    await documentRef.update({
      checked: !(await documentRef.get()).data().checked
    });
  }

  async removeTodo(todoId) {
    await db
      .collection("todos")
      .doc(todoId)
      .delete();
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
