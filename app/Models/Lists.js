import { generateId } from "../utils.js";

export default class List {
  constructor({name, task, id, color}) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.name = name
    this.task = task || []
    this.id = id || generateId()
    this.color = color || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

get Template(){
  return `
  <div class="card col-4 p-0 m-4 text-center">
    <div class="card-header ${this.color}" id="cardHeader">
      <h3 class="text-dark"><u>${this.name}</u>   <i class="fa fa-times" aria-hidden="true" onclick="app.listsController.removeList('${this.id}')"></i></h3>
    </div>
    <form onsubmit="app.listsController.createTask(event, '${this.id}')">
      <div class="form-group">
      <ul class="list-group list-group-flush">
        ${this.TaskTemplate}
      </ul>
        <label for="taskBody" class="ml-3 mt-2 text-dark"><b>Add task...</b></label>
        <input type="text" class="" id="taskBody" placeholder="Enter your new task...">
      </div>
        <button class="btn btn-outline-dark mb-2 ${this.color}" type="submit">Add Task</button>
    </form>
  </div>
  </div>
  <br>
  `
}

get TaskTemplate(){
  let template = ""
  this.task.forEach(t => {
    template += `
    <li class="list-group-item"><input type="checkbox" class="form-check-input" id="exampleCheck1"> - ${t}  <i class="fa fa-times" aria-hidden="true" onclick="app.listsController.removeTask('${this.id}', '${t}')"></i></li>
  `
  })
  return template
}
}
