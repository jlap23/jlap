//Declarar un array con nombres de ciudades y recorrerlo. 
//Por cada ciudad, crear una etiqueta h2 que contenga el nombre, y agregarla al body.

const ciudades = [  "Springfield",
                    "Shelbyville",
                    "Capital City",
                    "Cypress Creek",
                    "Ogdenville"];
for (const ciudad of ciudades) {
    let h2 = document.createElement('h2');
    h2.innerHTML = ciudad;
    document.body.appendChild(h2);
}
