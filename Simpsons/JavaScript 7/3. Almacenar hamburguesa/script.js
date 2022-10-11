/*
Obtener desde el localStorage el array de objetos almacenado durante la actividad 3, con la clave ‘hamburguesas’. 
Recorrer el array generando un listado con el detalle de cada hamburguesa, 
asociando un número de selección en función de la posición.
Por último, capturar una entrada con la selección del usuario, confirmando la información del producto escogido.
*/



let almacenadas = localStorage.getItem('hamburgesas');
if (almacenadas != null) {
    let array = JSON.parse(almacenadas);
    let salida = 'SELECCIONAR HAMBURGUESA \n';
    for (let index = 0; index < array.length; index++) {
        salida += index + ' -> ' + array[index].nombre + ' ' + array[index].ingredientes + ' $ ' + array[index].precio + '\n';
    }
    alert(salida);
    let eleccion = parseInt(prompt('INGRESAR HAMBURGUESA'));
    if ((eleccion >= 0) && (eleccion < array.length)) {
        alert("HAMBURGUESA SELECCIONADA " + array[eleccion].nombre)
    } else {
        alert("ERROR DE SELECCION");
    }
}
