// console.dir(window.document);
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  //  Prevents the browser window from automatically refreshing
  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  //   console.dir(taskNameInput);

  var taskTypeInput = document.querySelector("select[name='task-type']").value;
//   console.log(taskTypeInput);

  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold info and add to list item
  var taskInfoEl = document.createElement("div");
  //   give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskNameInput +
    "</h3><span class='task-type'>" +
    taskTypeInput +
    "</span>";

  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);

  //   console.log(event);
  console.dir(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
