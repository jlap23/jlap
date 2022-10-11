/*
Declarar un array de cadenas, compuesto por  los cuatro (4) nombres pertenecientes a los integrantes de un equipo.
 Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.

*/

const equipo = ["Homero", "apu", "Moe", "mr. burns"];
for (let index =0; index <equipo.length; index++){
    alert("POSICION "+index+" Jugador "+equipo[index]);
}
