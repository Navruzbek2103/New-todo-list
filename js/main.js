let elForm = document.querySelector(".form");
let inputTask = document.querySelector(".input-task");
let inputDate = document.querySelector(".input-time")
let elSelect = document.querySelector(".select-priority");
let elList = document.querySelector(".list-group");

// console.log(elList);
let arr = [];




function createTodo() {
  elForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let valueInput = inputTask.value.trim()


    const obj = {
      id: new Date().getMilliseconds(),
      taskName: valueInput,
      date: inputDate.value,
      priority: elSelect.value
    }
    arr.push(obj)

    let newItem = document.createElement("li");
    newItem.setAttribute("class", "list-group-item rounded-2 d-flex flex-row align-items-center gap-2 flex-wrap");

    newItem.innerHTML = `
    <div class="checkbox-inner">
      <label class="form-check-label fs-4 d-flex">
        <input class="form-check-input me-3" type="checkbox" value="">
        <p class="checkbox-task-text fs-5 fst-italic" title="${valueInput}">${valueInput}</p>
      </label>
    </div>
    <div class="deadline">
      <p class="deadline-text">${inputDate.value}</p>
      </div>
      <div class="priority">
      <p class="priority-text">${elSelect.value}</p>
      </div>
      <div class="button-group d-flex">
      <div class="edit d-flex">
        <button class="btn btn-success">
          <img src="./images/pencil-24-px.png" alt="pencil img">
        </button>
        </div>
      <div class="delete">
        <button class="btn btn-danger">
          <img src="./images/delete-24px.png" alt="delete icon">
        </button>
        </div>
      <div class="like">
        <button class="btn btn-warning">
        <img src="./images/heart.png" alt="delete icon">
        </button>
        </div>
        </div>
        `
    elList.appendChild(newItem)
  });
}

createTodo();