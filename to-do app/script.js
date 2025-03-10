const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// CREATE TEMPLATE
generateTemplate = (e) => {
  const li = ` 
        <li class="list-group-item mb-3 d-flex justify-content-between align-items-center">
           <span class="tasks">${e} </span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;

  list.insertAdjacentHTML("beforeend", li);
};
// ADD THE TASK TO THE LIST

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskValue = addForm.addTask.value.trim();
  if (taskValue.length) {
    generateTemplate(taskValue);
    addForm.reset();

    addForm.addTask.focus();
  } else {
    alert("Please enter a task");
  }
});

// ADD THE TİCK TO THE BEGGINNING OF THE TASK AND DELETİNG THE CHOSEN TASKS

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked-color");
    e.target.children[0].classList.toggle("checked");
  }
  if (e.target.tagName === "SPAN") {
    e.target.classList.toggle("checked");
    e.target.parentElement.classList.toggle("checked-color");
  }
});

// FILTER THE TASK

search.addEventListener("keyup", (e) => {
  const term = search.value.trim().toLowerCase();
  filterLi(term);
});

filterLi = (i) => {
  Array.from(list.children)
    .filter((li) => !li.textContent.toLowerCase().includes(i))
    .forEach((li) => li.classList.add("filtered"));

  Array.from(list.children)
    .filter((li) => li.textContent.toLowerCase().includes(i))
    .forEach((li) => li.classList.remove("filtered"));
};
