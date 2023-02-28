
let todoItems = []; // Array -> Stack
let currentId = 1;

// ACTIONS

// Add a task
function addNewTask(task) {
  const _task = createTask(currentId, task);
  todoItems.push(_task);

  currentId++;
}

// Remove a task
function removeATask(taskId) {
  const indexOfTask = todoItems.findIndex(
    function (task) {
      if (task.id === Number(taskId)) return true;
      else return false;
    }
  );

  if (indexOfTask === -1) throw Error("Task not found!");

  todoItems.splice(indexOfTask, 1);
}

// Mark task as done
function markTaskAsDone(taskId) {
  // Find the index of task with task.id of taskId
  const indexOfTask = todoItems.findIndex(
    function (task) {
      if (task.id === taskId) return true;
      else return false;
    }
  );

  if (indexOfTask === -1) throw Error("Task not found!");

  todoItems[indexOfTask].status = true;
}

function getTodoList() {
  return todoItems;
}

function createTask(id, description) {
  return {
    id: id,
    description: description,
    status: false,
    date: Date(),
  };
}

addNewTask("Meeting by 1pm")
// addNewTask("Practice on DS and Algorithms")


// https://www.tasks.com
// https://www.tasks.com/api
// https://www.tasks.com/api/todo-items - getTodoList()
// https://www.tasks.com/api/todo-items/add - addNewTask()
// https://www.tasks.com/api/todo-items/remove
// https://www.tasks.com/api/todo-items/completed
