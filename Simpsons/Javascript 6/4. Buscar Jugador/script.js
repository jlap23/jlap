function buscarJugador(equipo, jugador){
    return equipo.find(objeto => objeto.nombre === jugador.toUpperCase());
}
for (let index = 0; index < 3; index++) {
    let busqueda = buscarJugador(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
    if(busqueda != undefined){
        alert('JUGADOR '+busqueda.nombre+' CAMISETA '+busqueda.camiseta+' EDAD '+busqueda.edad);
    }else{
        alert('NO EXISTE JUGADOR CON ESE NOMBRE');
    }
}
