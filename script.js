const checkbox = document.getElementById("complete");
const statusText = document.getElementById("status");
const statusControl = document.getElementById("statusControl");

const editBtn = document.getElementById("editBtn");
const editForm = document.getElementById("editForm");
const viewMode = document.getElementById("viewMode");

const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

const titleEl = document.querySelector('[data-testid="test-todo-title"]');
const descEl = document.querySelector('[data-testid="test-todo-description"]');

const editTitle = document.getElementById("editTitle");
const editDesc = document.getElementById("editDesc");
const editPriority = document.getElementById("editPriority");
const editDue = document.getElementById("editDue");

const priorityIndicator = document.getElementById("priorityIndicator");
const priorityText = document.getElementById("priorityText");

const timeRemainingEl = document.getElementById("timeRemaining");
const overdueIndicator = document.getElementById("overdueIndicator");

const expandBtn = document.getElementById("expandBtn");

let isEditing = false;
let isExpanded = false;

let state = {
  title: "Watch Arsenal win the Premier League",
  description: "Since the 03/04 season, Arsenal has not won the Premier League. This season, they are in a very good position to win it. I want to watch them win it live at the Emirates Stadium (maybe not live).",
  priority: "High",
  status: "Pending",
  dueDate: new Date("2026-05-24T18:00:00"),
  completedAt: null
};

function render() {
  titleEl.innerText = state.title;
  descEl.innerText = isExpanded
    ? state.description
    : state.description.slice(0, 110) + "...";

  statusText.innerText = state.status;
  statusControl.value = state.status;

  checkbox.checked = state.status === "Done";

  if (priorityText) {
    priorityText.innerText = state.priority;
  }

  priorityIndicator.style.background =
    state.priority === "High" ? "red" :
    state.priority === "Medium" ? "orange" : "green";

  document.querySelector(".card").classList.toggle("done", state.status === "Done");
}

function updateTime() {
  if (state.status === "Done") {
    timeRemainingEl.innerText = "Completed";
    return;
  }

  const now = new Date();
  const diff = state.dueDate - now;

  if (diff < 0) {
    const hours = Math.floor(Math.abs(diff) / (1000 * 60 * 60));
    timeRemainingEl.innerText = `Overdue by ${hours} hour(s)`;
    overdueIndicator.innerText = "⚠ Overdue";
  } else {
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    overdueIndicator.innerText = "";

    if (minutes < 60) {
      timeRemainingEl.innerText = `Due in ${minutes} min`;
    } else if (hours < 24) {
      timeRemainingEl.innerText = `Due in ${hours} hours`;
    } else {
      timeRemainingEl.innerText = `Due in ${days} days`;
    }
  }
}

editBtn.onclick = () => {
  isEditing = true;
  viewMode.style.display = "none";
  editForm.style.display = "block";

  editTitle.value = state.title;
  editDesc.value = state.description;
  editPriority.value = state.priority;
  editDue.value = state.dueDate.toISOString().slice(0,16);
};

saveBtn.onclick = () => {
  state.title = editTitle.value;
  state.description = editDesc.value;
  state.priority = editPriority.value;
  state.dueDate = new Date(editDue.value);

  isEditing = false;
  viewMode.style.display = "block";
  editForm.style.display = "none";

  render();
};

cancelBtn.onclick = () => {
  isEditing = false;
  viewMode.style.display = "block";
  editForm.style.display = "none";
};

checkbox.addEventListener("change", () => {
  state.status = checkbox.checked ? "Done" : "Pending";
  render();
});

statusControl.addEventListener("change", () => {
  state.status = statusControl.value;
  render();
});

expandBtn.onclick = () => {
  isExpanded = !isExpanded;
  expandBtn.innerText = isExpanded ? "Collapse" : "Expand";
  render();
};

render();
updateTime();
setInterval(updateTime, 30000);
