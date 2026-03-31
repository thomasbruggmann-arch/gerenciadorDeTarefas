function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");

 
  const span = document.createElement("span");
  span.textContent = text;

  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.onclick = function (e) {
    e.stopPropagation(); 
    li.remove();
  };

  
  li.onclick = function () {
    moveTask(li);
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("todoList").appendChild(li);
  input.value = "";
}

function moveTask(task) {
  const todo = document.getElementById("todoList");
  const doing = document.getElementById("inProgressList"); 
  const done = document.getElementById("doneList");

  if (task.parentElement === todo) {
    doing.appendChild(task);
  } else if (task.parentElement === doing) {
    done.appendChild(task);
  } else if (task.parentElement === done) {
    todo.appendChild(task); 
  }
}