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
  let textNode = document.createTextNode(task.description);
  para.appendChild(textNode);

  // Add the para to div
  div.appendChild(para); 

  // Adding Delete Button .. <button data-id="1">Remove</button>
  let delBtn = document.createElement('button');
  delBtn.setAttribute('data-id', task.id);
  let delText = document.createTextNode("Delete");
  delBtn.appendChild(delText);
  
  // Add delete event to button
  delBtn.addEventListener('click', handleDeleteTask);
  
  div.appendChild(delBtn);

//adding checkBox <input type="checkbox" id="">
  let checkBox = document.createElement('input');
  checkBox.classList.add('statusButton');
  // checkBox.setAttribute('class', 'statusButton');
  checkBox.setAttribute('type', 'checkbox');

  checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
      para.style.textDecoration = "line-through";
      para.style.color = "red";
      markTaskAsDone(task.id);
      console.log('done');
    } else {
      para.style.textDecoration = "none";
      para.style.color = "black";
      task.status = false;
    };
  }
  );

  div.appendChild(checkBox);

  // Add the div to todo-box
  todoBox.appendChild(div);

}

function refreshTasksOnScreen() {
  todoBox.innerHTML = '';

  getTodoList().forEach(function (task) {
    addTaskToScreen(task);
  });
}

function handleDeleteTask(event) {
  const taskId = event.target.getAttribute('data-id');
  
  removeATask(taskId);
  refreshTasksOnScreen();
}

//function to invoke when a task is completed
// function handleDoneTask(checkTask) {
//   if (checkTask.checked == true) {
//     para.style.textDecoration = "line-through";
//     markTaskAsDone(task.id);
//     console.log('done');
//   } else;
// }

addItemButton.addEventListener("click", handleSubmitButton);
refreshTasksOnScreen();