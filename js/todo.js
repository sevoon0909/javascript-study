const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => Number(li.id) !== toDo.id);
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText  = newToDo.text
    const button = document.createElement("button");
    
    button.innerText = 'X';
    button.addEventListener("click",deleteToDo);
    button.classList.add("delete-btn");

    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    if(toDos.length>9){
        alert("계획이 너무 많습니다.");
        return;
    }
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newObjectToDo ={
        text:newToDo,
        id:Date.now()
    }
    toDos.push(newObjectToDo);
    paintToDo(newObjectToDo);
    saveToDos();

}

toDoForm.addEventListener("submit",handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    
    if(parseToDos!==null){
        toDos = parseToDos;
        parseToDos.forEach(paintToDo);
    }
}
