const inputValue = document.getElementById("inputField");
const addButton = document.getElementById("addButton");
const todoSection = document.querySelector(".addedTodo");

// get data from local storage
const getTODOFromLocalStorage = () => {
  let todos =
    localStorage.getItem("todo") === null
      ? []
      : JSON.parse(localStorage.getItem("todo"));
  return todos;
};
// assign a data in todos variable
let todos = getTODOFromLocalStorage();
// insert data in to todo list
const addTODOInLocalStorage = (text) => {
  todos.push(text);
  todos = [...new Set(todos)];
  localStorage.setItem("todo", JSON.stringify(todos));
};

// create element for todo list
const createElement = (element) => {
  const divElement = document.createElement("div");
  divElement.classList.add("todo-list");
  divElement.innerHTML = `<li class="todo">${element}</li>
          <button class="delete-button">Delete</button>`;
  todoSection.append(divElement);
};

// show local todo when page load
const showLocalElement = () => {
  todos.forEach((element) => {
    createElement(element);
  });
};

// show element
showLocalElement();

// handle add button click
const handleAddButton = () => {
  const inputText = inputValue.value.trim();

  if (inputText) {
    inputValue.value = "";
    if (!todos.includes(inputText)) {
      addTODOInLocalStorage(inputText);

      createElement(inputText);
    }
  } else {
    alert("Please Enter TODO!");
  }
};

// delete element from local storage and html
const handleDeleteButton = (element) => {
  try {
  
    
    if (element.target.classList.contains("delete-button")) {
      const targetElement = element.target;
      const previousElement = targetElement.previousElementSibling;
      const text = previousElement.innerText;
      const parentElement = previousElement.parentElement;

      if (todos.includes(text)) {
        todos = todos.filter((element) => element !== text);
        localStorage.setItem("todo", JSON.stringify(todos));
        parentElement.remove();
      }
    }
  } catch (e) {
    console.log(e);
  }
};

// add button click event
addButton.addEventListener("click", handleAddButton);

// delete todo function event
todoSection.addEventListener("click", handleDeleteButton);
