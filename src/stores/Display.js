import { observable, action } from "mobx";
import { ALL, ACTIVE, COMPLETED } from "../CONSTANTS.js";

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
