/*
Declarar un método para la clase Tienda con la siguiente cabecera esPropietario(nombre). 
Se retorna true si el nombre enviado corresponde al propietario de la tienda.Caso contrario, se retorna false.
Luego, invocar al menos tres(3) objetos usando esta clase y solicitar al usuario cinco(5) nombres.
Informar por alerta si los nombres pertenecen a algún dueño de tienda.
*/

class Tienda{
    constructor(nombre,direccion,propietario,rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this. propietario = propietario;
        this. rubro = rubro;
    }
esPropietario(nombre){
return this.propietario == nombre;
}
}

const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu", "Almacen");
const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel", "Panaderia");
const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns", "Shopping");
for (let index = 0; index <5; index++){
    let entrada = prompt("Ingresa nombre de propietario");
    if(tienda1.esPropietario(entrada)){
        alert(entrada+ " es propietario de la tienda "+tienda1.nombre);
    }
    if (tienda2.esPropietario(entrada)){
        alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
    }
    if (tienda3.esPropietario(entrada)){
        alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
    }
}
