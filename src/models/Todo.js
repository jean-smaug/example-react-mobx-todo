import { observable } from "mobx";

@observable
class Todo {
  @observer todos = [];
}

export default new Todo();
