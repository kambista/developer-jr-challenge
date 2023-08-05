let listTasks = [];

gettasks();

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

            const divtask = document.createElement('div');
            divtask.classList.add('task');
            const divlist = document.createElement('div');
            divlist.classList.add('obj');
            const divdesc = document.createElement('div');
            const {id, title, description} = task;
            const parrafo1= document.createElement ('p');
            parrafo1.classList.add('title');
            const parrafo2= document.createElement ('p');
            parrafo2.classList.add('description');
    
            parrafo1.textContent = title;
            parrafo1.dataset.id = id;
            parrafo2.textContent = description;
            parrafo2.dataset.id = id;
            const btndelete = document.createElement ('button');
            btndelete.onclick = () => deletetask(id);
            btndelete.textContent = "Eliminar";
            btndelete.classList.add('btndelete');

            divdesc.appendChild(parrafo1);
            divdesc.appendChild(parrafo2);

            divlist.appendChild(divdesc);
    
            divtask.appendChild(divlist);
            divtask.appendChild(btndelete);

            tasks.appendChild(divtask);
        })
        }
        else{
        const parrafo = document.createElement ('p');
        parrafo.classList.add('title');
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

