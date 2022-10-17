/*
Usando el array de estudiantes creado en la actividad 3, iterar la colección creando una etiqueta div, 
cuya estructura interna detalle la información del estudiante, y contenga un botón ‘Seleccionar’, 
agregando cada estructura al body.
Luego, detectar el click sobre el botón, especificando al usuario los datos del alumno seleccionado.

*/

formulario.onsubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.children;
    estudiantes.push(new Estudiante({ nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value }));
    mostrarEstudiantes(estudiantes);
    const btnEstudiantes = document.getElementsByClassName('btnEstudiante');
    for (const boton of btnEstudiantes) {
        boton.onclick = (e) => {
            const seleccionado = estudiantes.find(obj => obj.id == e.target.id);
            let notificacion = document.createElement("h6");
            notificacion.innerHTML = `Nombre ${seleccionado.nombre} -  Edad ${seleccionado.edad}`;
            salida.prepend(notificacion);
        }
    }
}
function mostrarEstudiantes(estudiantes) {
    salida.innerHTML = '';
    for (const estudiante of estudiantes) {
        let divEstudiante = document.createElement("div");
        divEstudiante.innerHTML = `<h2>${estudiante.nombre}</h2>
                                   <p>${estudiante.edad} / ${estudiante.curso} </p>
                                   <button id='${estudiante.id}' class='btnEstudiante'>Seleccionar</button>`
        salida.appendChild(divEstudiante);
    }
}
const salida = document.createElement("div");
document.body.appendChild(formulario);
document.body.appendChild(salida);