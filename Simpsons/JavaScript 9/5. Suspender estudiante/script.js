/*
Usando de base la interfaz generada en la actividad 4, añadir un nuevo botòn ‘Suspender’ por cada estudiante.
Luego, detectar el click sobre el botón, asegurando que la función manejadora identifique el objeto estudiante seleccionado, 
y llame a un método suspender(), disparando una salida en el HTML confirmando la suspensión del estudiante.

*/
let formulario;

formulario.onsubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.children;
    estudiantes.push(new Estudiante({ nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value }));
    mostrarEstudiantes(estudiantes);
    const btnSuspender = document.getElementsByClassName('btnSuspender');
    for (const boton of btnSuspender) {
        boton.onclick = (e) => {
            const seleccionado = estudiantes.find(obj => obj.id == e.target.id);
            seleccionado.suspender();
            console.log(seleccionado);
            let notificacion = document.createElement("h6");
            notificacion.innerHTML = `Nombre ${seleccionado.nombre} -  SUSPENDIDO`;
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
                                   <button id='${estudiante.id}' class='btnEstudiante'>Seleccionar</button>
                                   <button id='${estudiante.id}' class='btnSuspender'>Suspender</button>`
        salida.appendChild(divEstudiante);
    }
}
const salida = document.createElement("div");
document.body.appendChild(formulario);
document.body.appendChild(salida);















