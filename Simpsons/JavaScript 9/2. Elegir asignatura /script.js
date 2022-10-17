/*
Declarar un array con nombres de asignatura, y generar un select, 
donde los values de las etiquetas option sean la posición de la asignatura en la colección.
Luego, escuchar el evento change sobre el select, 
asegurando que la función manejadora dispare una salida en el HTML, 
especificando el elemento escogido por el usuario.

*/

const materias = ['MATEMATICA', 'LENGUA', 'PROGRAMACION', 'HISTORIA'];
let select = document.createElement("select");
for (let index = 0; index < materias.length; index++) {
    select.innerHTML +=  `<option value='${index}'>${materias[index]}</option>`;
}
//ESCUCHAR EL EVENTO CHANGE
select.addEventListener('change', function (e) {
    const h3 = document.createElement('h3');
    h3.innerHTML = materias[e.target.value];
    document.body.appendChild(h3);
})
document.body.appendChild(select);