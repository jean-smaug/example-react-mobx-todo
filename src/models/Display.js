import { observable, action } from "mobx";

const ALL = "ALL";
const ACTIVE = "ACTIVE";
const COMPLETED = "COMPLETED";

class Display {
  @observable display = ALL;

  @action
  switchDisplay(display) {
    if (display === ALL || display === ACTIVE || display === COMPLETED) {
      this.display = display;
    }
  }
}

export default new Display();
