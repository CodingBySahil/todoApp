let toDoList = [];
let runTimeValue;
function add() {
  runTimeValue = document.querySelector(".title").value;
  if (runTimeValue == "") {
    alert("Enter a valid task !");
  } else {
    toDoList.push(runTimeValue);
    document.querySelector(".title").value = "";
  }
  showTask();
}
function del() {
  let allTask = document.querySelectorAll("h2");
  if (allTask.length > 0) {
    allTask[allTask.length - 1].remove();
  } else {
    alert("all task are delted");
  }
}

const showTask = () => {
  let h2 = document.createElement("h2");
  h2.classList.add("task");
  document.querySelector("#task").appendChild(h2);
  h2.innerHTML = toDoList.pop();
};
