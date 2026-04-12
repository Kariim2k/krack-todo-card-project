const checkbox = document.getElementById("complete");
const statusText = document.getElementById("status");
const card = document.querySelector(".card");

const dueDateEl = document.getElementById("dueDate");
const timeRemainingEl = document.getElementById("timeRemaining");

const startDate = new Date("2026-04-10T07:00:00");
const dueDate = new Date("2026-05-24T17:00:00");

dueDateEl.innerText = "Due " + dueDate.toDateString();

let isCompleted = false;
let completedAt = null;

function updateTime() {
  const now = new Date();

  if (isCompleted && completedAt) {
    const diff = now - completedAt;
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (minutes < 60) {
      timeRemainingEl.innerText = `Completed ${minutes} minute(s) ago`;
    } else {
      timeRemainingEl.innerText = `Completed ${hours} hour(s) ago`;
    }
    return;
  }

  if (now < startDate) {
    timeRemainingEl.innerText = "Not started yet";
    return;
  }

  if (now > dueDate) {
    const diff = now - dueDate;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    timeRemainingEl.innerText = `Overdue by ${hours} hour(s)`;
    return;
  }

  const diff = dueDate - now;

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    timeRemainingEl.innerText = `Due in ${minutes} minute(s)`;
  } else if (hours < 24) {
    timeRemainingEl.innerText = `Due in ${hours} hour(s)`;
  } else if (days === 1) {
    timeRemainingEl.innerText = "Due tomorrow";
  } else {
    timeRemainingEl.innerText = `Due in ${days} days`;
  }
}

updateTime();
setInterval(updateTime, 60000);

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    isCompleted = true;
    completedAt = new Date();

    statusText.innerText = "Done";
    card.classList.add("done");
  } else {
    isCompleted = false;
    completedAt = null;

    statusText.innerText = "Pending";
    card.classList.remove("done");
  }

  updateTime();
});