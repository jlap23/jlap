/*
Incluir un botón con el ID ‘btnNucleo’ manipulando el DOM. 
Luego, escuchar el evento click sobre el botón generado, 
asegurando que la función manejadora dispare una salida a elección en el HTML, cuando se presione el elemento.

*/

//CREANDO EL BOTÓN DESDE JS
const btnNucleo = document.createElement("button");
//ASIGNAR ID AL BOTÓN
btnNucleo.id = 'btnNucleo';
//ASIGNAR EL INTERIOR DEL BOTÓN
btnNucleo.innerHTML = 'BOTON DEL NUCLEO';
//ESCUCHAR EL EVENTO CLICK
btnNucleo.addEventListener('click', function () {
    const h3 = document.createElement('h3');
    h3.innerHTML = 'HOLA HOMERO';
    document.body.appendChild(h3);
})
//AGREGAR EL BOTON AL DOM
document.body.appendChild(btnNucleo);
