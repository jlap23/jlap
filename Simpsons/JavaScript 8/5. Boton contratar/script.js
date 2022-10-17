/*
Usando de base la resolución de la actividad 4, añadir un ‘id’ como propiedad a la clase Cantante, 
y modificar las instancias, definiendo un identificador único por cada cantante.
Luego, por cada div generado, 
incluir un botón cuyo id de la etiqueta tenga el valor asociado a la propiedad ‘id’ del objeto,
 y el texto de cada botón sea ‘Contratar”.
*/

class Cantante{
    constructor(id,nombre, edad, pais){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }
}
const cantantes = [];
cantantes.push(new Cantante(1,'HOMERO',39,'USA'));
cantantes.push(new Cantante(2,'BARNEY',40,'USA'));
cantantes.push(new Cantante(3,'APU',42,'INDIA'));
cantantes.push(new Cantante(4,'SKINNER',38,'USA'));

for (const cantante of cantantes) {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${cantante.nombre}</h2>
                     <p>${cantante.edad} / ${cantante.pais}</p>
                     <button id='${cantante.id}'>Contratar</button>
                     <hr>`;
    document.body.appendChild(div);
}
