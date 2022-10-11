/*
Declarar un clase Tienda que permita registrar:
Nombre de la tienda.
Dirección de la tienda.
Propietario de la tienda.
Rubro de la tienda.
Luego invocar al menos tres (3) objetos usando esta clase.
*/

class Tienda {
    constructor(nombre,direccion,propietario,rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro= rubro;
}
}

const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu","Almacen");
const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel","Panaderia");
const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns","Shopping");
console.log(tienda1);
console.log(tienda2);
console.log(tienda3);
