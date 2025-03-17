document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) =>{
       e.preventDefault();
       buildToDo(e.target.to_do.value);
       form.reset()
    })
});

function buildToDo(todo){
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.addEventListener('click', handleDelete);
    btn.textContent = 'delete';
    btn.style.color = "red"
    p.textContent = `${todo} `;
    p.appendChild(btn);
    document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
    e.target.parentNode.remove();
}