//API Call
import { get } from 'http';
import fetch from 'node-fetch';

async function getTareas() {
  try {
    const response = await fetch('http://localhost:3000/tareas');
    if (!response.ok) {
      throw new Error('${response.status}');
    }
    const result = await response.json();
    
    return result;
  } catch (err) {
    console.log(err);
  }
}

const list = async () =>{
  let i = 0;
  const tareas = await getTareas();
  console.log(tareas);
  tareas.forEach(function(data) {
    const tarea = document.createElement('div');
    let newtarea = tarea.innerHTML = `
    <div class="tarea">
      <div class="tarea__titulo">
        <p>${data.cuerpo.titulo}</p>
      </div>
      <div class="tarea__descripcion">
        <p>${data.cuerpo.descripcion}</p>
      </div>;
      <form action = "/tarea/${i}>
        <button class="boton__eliminar" >Eliminar</button>
      </form>
    </div>
   `
   i++;
  })
}
list();