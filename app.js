const btn = document.getElementById("btn");
var input = document.getElementById("toDo");
var ul = document.querySelector("ul");


btn.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

function inputLength() {
    
    return input.value.length;
}

function addListAfterEnter(event) {
    if (inputLength() > 0 && inputLength() < 41 && event.which === 13) {
        addTodos();
    }
}

function addListAfterClick(event) {
    if (inputLength() > 0 && inputLength() < 41) {
        addTodos();
    }
}


function addTodos() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // Crossout functionality
    li.addEventListener("dblclick", crossOut);

    function crossOut() {
        li.classList.toggle("done");
    }


    // Adding delete button
    var dbtn = document.createElement("button");
    dbtn.appendChild(document.createTextNode("X"));
    li.appendChild(dbtn);
    dbtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete");
    }
}