import ListService from "../Services/ListsService.js";
import STORE from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  STORE.saveState()
  let template = ""
  STORE.State.lists.forEach(l => template += l.Template)
  document.getElementById("listArea").innerHTML = template
}
//Public
export default class ListsController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
  createList(event){
    event.preventDefault();
    let form = event.target
    let newList = {
      name: form.listTitle.value,
      color: form.colorSelect.value
    }
    ListService.createList(newList)
    _drawLists()
  }

  removeList(id){
    ListService.removeList(id)
    _drawLists()
  }

  createTask(event, listId){
    event.preventDefault()
    let form = event.target
    let newTask = form.taskBody.value
    ListService.createTask(newTask, listId)
    _drawLists()
  }

  removeTask(listId, task){
    ListService.removeTask(listId, task)
    _drawLists()
  }
}
