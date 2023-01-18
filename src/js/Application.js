import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);
  }
  init() {
    const element = document.querySelector(".article");
    element.addEventListener("click", () => {
      console.log("element clicked");
      anime({
        targets: element,
        translateX: 270,
        easing: "spring(1, 80, 10, 0)",
      });
    });
  }
}
