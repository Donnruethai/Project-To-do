// A TaskManager class 

class taskManager {
    constructor(name, description, assignedto, duedate, status) {
    
  this._name = name;
  this._description = description;
  this._assignedto = assignedto;
  this._duedate = duedate;
    this._status = status;
  }
  
    
  addTask(task){
    const taskHTML =               
      '<div class="card mb-3 mx-auto" style="max-width: 400px;">\n' +                                  
            '<div class="card-body">\n' +
              '<img src="todos.png" class="card-img" alt="todo-image">\n' + 
               
               '<h3 class="card-name">'+task.name+'</h3>\n' +
               '<p class="card-description">'+task.description+'</p>\n'+
               '<p class="card-assignedto">'+task.assignedto+'</p>\n' +
               '<p class="card-duedate">'+task.duedate+'</p>\n' +
               '<p class="card-status">'+task.status+'</p>\n' +              
            '</div>\n' +
      '</div>';
    const tasksContainer = document.getElementById("list-items");
    tasksContainer.innerHTML += taskHTML;
  
  }
  
  };
  
  
  
  getAllTasks(){
        return {};
      }
  
  getTasksWithStatus(status) {
    return {};
  }		
  
  addTask(task){
    return {};
  }