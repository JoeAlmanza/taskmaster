import STORE from "../store.js"
import List from "../Models/Lists.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  createList(listData){
    let list = new List(listData)
    STORE.State.lists.push(list)
  }

  removeList(id){
    let c = confirm("Are you sure you want to remove this list?");
    if(c == true){
      STORE.State.lists = STORE.State.lists.filter(l => l.id !=id)
    }
    else{
      return
    }
  }

  createTask(newTask, listId){
    let list = STORE.State.lists.find(l => l.id == listId)
    list.task.push(newTask)
  }

  removeTask(listId, task){
    let c = confirm("Are you sure you want to remove this task?");
    if(c == true){
    let list = STORE.State.lists.find(l => l.id == listId)
    let taskIndex = list.task.findIndex(t => t == task)
    list.task.splice(taskIndex, 1)
    }
    else{
      return
    }
  }
}

const SERVICE = new ListService();
export default SERVICE;
