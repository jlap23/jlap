/*
Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. 
Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.
*/

class Jugador {
    constructor(nombre,camiseta, edad, lesionado){
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
        this.lesionado = lesionado;

    }
}

const jugadores = [];
jugadores.push(new Jugador("Bart", 15, 11, false));
jugadores.push(new Jugador("Nelson", 2, 18, false));
jugadores.push(new Jugador("MILHOUSE", 68 , 12, true));
jugadores.push(new Jugador("MARTIN", 0 , 11, false));
jugadores.push(new Jugador("ROD", 98 , 12, false));
console.log(jugadores);
