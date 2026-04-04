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

let task = [];

function renderData() {
  let sum = "";
  task.forEach((e) => {
    sum =
      sum +
      `<div class="task">
                            <h4>${e.task}</h4>
                            <button>Mark As Completed </button>
                        </div>`;
  });
  taskList.innerHTML = sum;
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  task.push({ task: formInput.value, details: formTextArea.value });
  renderData();

  formInput.value = "";
  formTextArea.value = "";
});
