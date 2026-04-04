function openFeature() {
  let allElems = document.querySelectorAll(".elem");
  let elemPage = document.querySelectorAll(".fullElems");

  let closeButton = document.querySelectorAll(".fullElems .close");

  allElems.forEach((x) => {
    x.addEventListener("click", () => {
      elemPage[x.id].style.display = "block";
    });
  });

  closeButton.forEach((x) => {
    x.addEventListener("click", () => {
      elemPage[x.id].style.display = "none";
    });
  });
}

openFeature();

let taskForm = document.querySelector(".addTask form");
let formInput = document.querySelector(".addTask form input");
let formTextArea = document.querySelector(".addTask form textarea");
let taskList = document.querySelector(".taskList-container");
let markAsCompletedBtn = document.querySelector(".task button");

function todoPage() {
  let task = [];

  if (localStorage.getItem("task")) {
    task = JSON.parse(localStorage.getItem("task"));
  } else {
    console.log("Task list is empty");
  }
  function renderData() {
    let sum = "";
    task.forEach((e, index) => {
      sum =
        sum +
        `<div class="task">
                            <h4>${e.task}</h4>
                            <button id=${index} class="delete-btn">Mark As Completed </button>
                        </div>`;
    });
    taskList.innerHTML = sum;
  }

  renderData();

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    task.push({ task: formInput.value, details: formTextArea.value });
    localStorage.setItem("task", JSON.stringify(task));

    formInput.value = "";
    formTextArea.value = "";

    renderData();
  });

  taskList.addEventListener("click", (e) => {
    if ((e.target.classlist = "delete-btn")) {
      let index = e.target.id;
      task.splice(index, 1);
    }

    localStorage.setItem("task", JSON.stringify(task));
    renderData();
  });
}

todoPage();
