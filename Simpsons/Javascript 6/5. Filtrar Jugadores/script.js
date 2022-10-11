/*
Codificar una función con la siguiente cabecera: filtroJugadores(equipo, edad). 
En ella, se recibe un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y una edad. 
La función retorna los jugadores cuya edad coincide con el segundo parámetro.
Realizar al menos cinco (5) filtros solicitando la edad al usuario, 
e informar sobre el resultado de los jugadores filtrados.

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

//////

function filtroJugadores(equipo,edad){
    return equipo.filter(objeto => objeto.edad == parseInt(edad));
}
function listaJugadores(jugadores){
    let lista = "";
    for(const jugador of jugadores){
        lista += "Jugador "+jugador.nombre+ " camiseta "+jugador.camiseta+" edad "+jugador.edad+"\n"
    }
    return lista;
}
for (let index = 0; index < 5; index++) {
    let filtro = filtroJugadores(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
    if (filtro.length > 0) {
        alert(listaJugadores(filtro));
    } else {
        alert('NO EXISTE JUGADORES CON ESA EDAD');
    }
}
