// console.dir(window.document);
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  //  Prevents the browser window from automatically refreshing
  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  //   console.dir(taskNameInput);

  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  console.log(taskTypeInput);

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = taskNameInput;
  tasksToDoEl.appendChild(listItemEl);

  //   console.log(event);
};

formEl.addEventListener("submit", createTaskHandler);
