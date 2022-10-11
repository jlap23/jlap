/*
Declarar un array vacío, y cargarlo de forma dinámica solicitando al usuario nombres de forma consecutiva,  
hasta que se ingrese “ESC”. Luego recorrer el array, e informar por alerta el nombre de cada jugador, 
así como la posición  que ocupa en la colección.

*/



let e = prompt("INGRESAR JUGADOR");
const equip = [];
while (e != 'ESC') {
    equip.push(e);
    e = prompt("INGRESAR JUGADOR");
}
for (let index = 0; index < equip.length; index++) {
    alert("POSICION " + index + " JUGADOR " + equip[index]);
}
