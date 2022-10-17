/*
Declarar una clase Cantante, instanciando al menos cinco (5) objetos con ella, asignándoles a un array. 
Luego, por cada cantante crear una etiqueta div, 
cuya estructura interna detalle la información del objeto, agregando cada contenedor al body.
*/

class Cantante{
    constructor(nombre, edad, pais){
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }
}
const cantantes = [];
cantantes.push(new Cantante('HOMERO',39,'USA'));
cantantes.push(new Cantante('BARNEY',40,'USA'));
cantantes.push(new Cantante('APU',42,'INDIA'));
cantantes.push(new Cantante('SKINNER',38,'USA'));
for (const cantante of cantantes) {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${cantante.nombre}</h2>
                     <p>${cantante.edad} / ${cantante.pais}</p>
                     <hr>`;
    document.body.appendChild(div);
}
