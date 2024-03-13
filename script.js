let listArr = document.querySelectorAll(".list");
let taskArr = document.querySelectorAll(".task");
let active = document.querySelector(".active");
let taskTitle = document.querySelector(".task-title>h3");
const btnList = document.querySelector(".btn-list");
const btntask = document.querySelector(".btn-task");
const listUl = document.querySelector(".list-ul");
const listInput = document.querySelector(".new-list");
const taskInput = document.querySelector(".new-task");
const form = document.querySelectorAll("form");
const todo = document.querySelector(".todo");
let remaining = document.querySelector(".remaining");
let remainCount = 0;
let count = 4;

btnList.addEventListener("click", createList);
btntask.addEventListener("click", createTask);

listArr.forEach((list) =>
  list.addEventListener("click", (e) => {
    listArr.forEach((list) => list.classList.remove("active"));
    list.classList.add("active");
    active = document.querySelector(".active");
    taskTitle.innerHTML = active.innerHTML;
    taskArr.forEach((task) => {
      task.style.display = "none";
    });
    taskArr.forEach((task) => {
      if (task.dataset.listName == active.innerHTML) {
        task.style.display = "";
      }
    });
    updateRemaining();
  })
);

form.forEach((forme) => {
  forme.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});

function createList() {
  const list = document.createElement("li");
  list.textContent = listInput.value;
  listUl.appendChild(list);
  list.classList.add("list");
  listArr = document.querySelectorAll(".list");
  listArr.forEach((list) =>
    list.addEventListener("click", (e) => {
      listArr.forEach((list) => list.classList.remove("active"));
      list.classList.add("active");
      active = document.querySelector(".active");

      taskTitle.innerHTML = active.innerHTML;
    })
  );
}

function createTask() {
  const task = document.createElement("div");
  const checkbox = document.createElement("input");
  const taskLable = document.createElement("label");
  todo.appendChild(task);
  task.appendChild(checkbox);
  task.appendChild(taskLable);
  task.classList.add("task");
  checkbox.type = "checkbox";
  let countkey = `task${count}`;
  checkbox.id = countkey;
  taskLable.htmlFor = countkey;
  task.dataset.listName = taskTitle.innerHTML;
  const inner = `<span class="custom-checkbox"></span>${taskInput.value}`;

  taskLable.innerHTML = inner;

  taskArr = document.querySelectorAll(".task");
  count++;

  updateRemaining();
}

function updateRemaining() {
  const total = taskArr.length;
  let displayNone = 0;
  taskArr.forEach((task) => {
    const displayStyle = window.getComputedStyle(task);

    if (displayStyle.getPropertyValue("display") == "none") {
      displayNone++;
    }
  });
  remainCount = total - displayNone;
  remaining.innerHTML = `${remainCount} Remaining`;
}
