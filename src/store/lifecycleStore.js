import { observable, action, makeAutoObservable } from "mobx";

class LifecycleStore {
  @observable show = JSON.parse(localStorage.getItem("LifecycleStore") || "true");

  @action.bound
  toggleShow() {
    this.show = !this.show;

    localStorage.setItem("LifecycleStore", JSON.stringify(this.show));
  }

  constructor() {
    makeAutoObservable(this);
  }
}
const lifecycleStore = new LifecycleStore();
export default lifecycleStore;
