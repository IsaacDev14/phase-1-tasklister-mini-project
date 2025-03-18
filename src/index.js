document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) =>{
       e.preventDefault();

       let todoText = document.getElementById("to_do").value;
       let priority = document.getElementById("priority").value;
       let dueDate = document.getElementById("due_date").value;

       if (todoText.trim() === "") {
        alert("Task description cannot be empty!");
        return;
        }

       buildToDo(todoText, priority, dueDate);
       form.reset()
    })
});

function buildToDo(todo, priority, dueDate){
    let p = document.createElement('p');
    let btn = document.createElement('button');
    

    if(priority === "high"){
        p.style.backgroundColor = "green"
    } else if(priority === "medium"){
        p.style.backgroundColor = "orange"
    } else if (priority === "low"){
        p.style.backgroundColor = "red"
    };

    btn.addEventListener('click', handleDelete);
    btn.textContent = 'delete';
    btn.style.color = "red"
    p.textContent = `${todo} (Due: ${dueDate})`;
    p.appendChild(btn);
    document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
    e.target.parentNode.remove();
}