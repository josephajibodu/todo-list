let addItemButton = document.getElementById("addItemBtn");
let textInput = document.getElementById("todoDescriptionInput");
let todoBox = document.getElementById("todo-box");

function handleSubmitButton(event) {
  // get the value of the textInput
  let task = textInput.value;

  // check if the value is not empty!
  if (task === "") return alert("You have to add a task!");

  // call function to add the task to our todolist
  addNewTask(task);

  textInput.value = "";

  refreshTasksOnScreen();
}

function handleRemoveButton(event) {
  
}

function addTaskToScreen(task) {
  // Create a div
  let div = document.createElement("div");

  // Give the div a class
  div.classList.add(["todo-item"]);

  // Create a p
  let para = document.createElement("p");

  // Add text to the p
  let textNode = document.createTextNode(task);
  para.appendChild(textNode);

  // Add the para to div
  div.appendChild(para);

  // Add the div to todo-box
  todoBox.appendChild(div);
}

function refreshTasksOnScreen() {
  todoBox.innerHTML = '';

  getTodoList().forEach(function (task) {
    addTaskToScreen(task.description);
  });
}

addItemButton.addEventListener("click", handleSubmitButton);
refreshTasksOnScreen();