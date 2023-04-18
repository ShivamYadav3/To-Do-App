let editIndex;
function addList() {
  let main = document.createElement("div");
  main.className = "main";
  let buttonDiv = document.createElement("div");
  const elem = document.getElementById("enter");
  const input = elem.value;
  const todo = document.createElement("div");
  todo.className = "box3";
  todo.innerText = input;
  main.append(todo);
  main.append(buttonDiv);
  if (input === "") {
    alert("Enter Something");
    return;
  }

  const button1 = document.createElement("button");
  button1.innerText = "Remove";
  button1.setAttribute("onclick", "Remove()");
  button1.className = "button2";
  buttonDiv.append(button1);

  const button2 = document.createElement("button");
  button2.innerText = "Edit";
  button2.setAttribute("onclick", "edit()");
  button2.className = "button3";
  buttonDiv.append(button2);

  const list = document.getElementById("list");
  list.append(main);
  elem.value = "";
}
function Remove() {
  const element = document.getElementsByClassName("main");
  for (let i = 0; i < element.length; i++) {
    element[i].onclick = function () {
      element[i].style.display = "none";
    };
  }
}

function edit() {
  const element = document.getElementsByClassName("main");
  const todo = document.getElementsByClassName("box3");
  const elem = document.getElementById("enter");
  const button = document.getElementById("button");
  const editTodo = document.getElementById("button8");
  editTodo.style.display = "block";
  button.style.display = "none";
  for (let i = 0; i < todo.length; i++) {
    element[i].onclick = function () {
      const targetTodo = todo[i].innerText;
      elem.value = targetTodo;
      editIndex = i;
    };
  }
}
function updateToDo() {
  const button = document.getElementById("button");
  const todo = document.getElementsByClassName("box3");
  const element = document.getElementsByClassName("main");
  const editTodo = document.getElementById("button8");
  editTodo.style.display = "none";
  button.style.display = "block";
  const elem = document.getElementById("enter");
  const input = elem.value;
  todo[editIndex].innerText = input;
  console.log(input);
  elem.value = "";
}