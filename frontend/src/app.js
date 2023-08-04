let listTasks = [];

fetch("http://localhost:3000/api/tasks").then(res => res.json()).then(response =>{
    listTasks = response;
    console.log(listTasks);
    showtasks();
});


const objtask = {
    title : '',
    description : '',
}

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

form.addEventListener('submit', validarform);

function validarform(e){
    e.preventDefault();

    if(title.value === '' || description.value === ''){
        alert('Todos los campos deben estar completos');
        return;
    }

    objtask.title = title.value;
    objtask.description = description.value;

    addtask();
}

function addtask(){

    listTasks.push({...objtask});
    console.log(listTasks);

    fetch("http://localhost:3000/api/tasks", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title: objtask.title,
            description: objtask.description,
        })
    }).then(res => res.json()).then(res => {
        form.reset();
        clearobj();
        gettasks();
    })
}
    

function clearobj(){
    objtask.id = '';
    objtask.title = '';
    objtask.description = '';
}

function showtasks(){
    clearscreen();

    const tasks = document.querySelector('.tasks');
    
    console.log(listTasks);

    if(listTasks.length > 0){
        listTasks.forEach(task =>{

            const divlist = document.createElement('div')
            const {id, title, description} = task;
            const parrafo = document.createElement ('p');
    
            parrafo.textContent = title + " - " + description;
            parrafo.dataset.id = id;
    
            const btndelete = document.createElement ('button');
            btndelete.onclick = () => deletetask(id);
            btndelete.textContent = "Eliminar";
            btndelete.classList.add('btn', 'btndelete');
    
            divlist.appendChild(parrafo);
            divlist.appendChild(btndelete);
    
    
            tasks.appendChild(divlist);
        })
        }
        else{
        const parrafo = document.createElement ('p');
        parrafo.textContent = "No hay tareas que realizar";

        tasks.appendChild(parrafo);
        }   
    
}

function gettasks(){

    fetch("http://localhost:3000/api/tasks").then(res => res.json()).then(response =>{ 
        listTasks = response;
        showtasks();
    });

}


function deletetask(id){
    listTasks = listTasks.filter(task => task.id !== id)

    fetch("http://localhost:3000/api/tasks/" + id, {
        method: 'DELETE'
    }).then(response => {
    console.log(response.status);     
    gettasks();
    });
}

function clearscreen() {
    const tasks = document.querySelector('.tasks');
    while(tasks.firstChild){
        tasks.removeChild(tasks.firstChild);
    }
}

