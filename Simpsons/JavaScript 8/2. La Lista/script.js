/*
Solicitar al usuario cinco (5) tareas de forma iterativa, cargandolas en un array. 
Crear una etiqueta ul, y concatenar una etiqueta li a un template de caracteres por cada tarea ingresada, 
asignando el resultado al interior de la etiqueta ul. Por último, agregar la lista al body.
*/

const tareas = []
for (let index = 0; index < 5; index++) {
   tareas.push(prompt('INGRESAR TAREA'));
}
let ul = document.createElement("ul");
let inner = '';
for (const tarea of tareas) {
    inner+= `<li>${tarea}</li>`;
}
ul.innerHTML = inner;
document.body.appendChild(ul);
