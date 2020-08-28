import ListController from "./Controllers/ListsController.js";

//NOTE This should be good to go
class App {
  listsController = new ListController();
}

window["app"] = new App();
