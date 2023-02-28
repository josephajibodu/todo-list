let addItemButton = document.getElementById("addItemBtn");
let textInput = document.getElementById("todoDescriptionInput");
let todoBox = document.getElementById("todo-box");

// TODO LIST
let todoList = [];
// END OF TODO LIST

const handleSubmitButton = () => {
  const todo = textInput.value;

  if (todo == "") {
    alert("You todo input cannot be empty.");
    return;
  }

  // Add the todo to our todo list
  todoList.push(todo);

  // Display it on the page
  const todoElem = `<div class="todo-item">
  <p>${todo}</p>
  <button data-id="1">Remove</button>
</div>`;

  const todoBoxContent = todoBox.innerHTML;
  todoBox.innerHTML = todoBoxContent + todoElem;
  textInput.value = "";
}

{/* <div class="todo-item">
          <p>Cardvest Mobile app revamp - phase 1</p>
          <button data-id="1">Remove</button>
        </div> */}


addItemButton.addEventListener("click", handleSubmitButton);