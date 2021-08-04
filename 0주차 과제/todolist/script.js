// 여기에 작성해주세요
const addBtn = document.querySelector("#btn");
const deleteBtn = document.querySelector("#deleteBtn");

document.addEventListener("click", listItemDelete);
document.addEventListener("click", ListItemDone);

addBtn.addEventListener("click", addTodo);
deleteBtn.addEventListener("click", listItemDeleteAll);

function addTodo() {
  const value = document.querySelector("#add").value.trim();
  const list = document.querySelector("#list");
  if (value) {
    list.innerHTML += `<div class = "list__item"><li>${value}</li> <i class="fas fa-trash fa-2x"></i></div>`;
  }
}

function ListItemDone(e) {
  if (e.target?.tagName === "LI") {
    const li = e.target;
    li.classList.toggle("checked");
  }
}

function listItemDelete(e) {
  if (e.target?.classList.contains("fas")) {
    const div = e.target.parentNode;
    div.remove();
  }
}

function listItemDeleteAll() {
  const list = document.querySelector("#list");
  Array.from(list.querySelectorAll("div")).forEach((div) => div.remove());
}
