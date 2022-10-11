//slide 10
/*
const arrayA = []; //vacio
const arrayB = [1,2]; //numeros
const arrayC = ["1","C2"]; //STRING
const arrayD = [true,false,true,false];
// Declaracion de array mixto
const arrayE = [1,false,"C4"];


//listas (ideal para carrito de compras)

const listaCompras = ["Leche","Agua","hARINA","pan","lrech","tomate"];
console.log(listaCompras);

console.log(listaCompras[2]);
console.log(listaCompras[0]+" y "+listaCompras[2]);

//recorrer la lista 
console.log("**recorrido de lista****");
for(let i=0; i<listaCompras.length; i++){
    console.log(listaCompras[i]);
}

//mostrar propiedad lenght - longitud del array
console.log(listaCompras.length);

//metodo push - agrega nuevo elemento al final de la lista
listaCompras.push("Sal");
console.log(listaCompras);

//metodo unshift
listaCompras.unshift("hamburguesas");
console.log(listaCompras);

//metodo pop - elimina el ultimo elemento
listaCompras.pop();
console.log(listaCompras);

//metodo shift - elimina el pirmer elemento

listaCompras.shift();
console.log(listaCompras);

//metodo splice - eliminar elementos de cualquier parte del array 
listaCompras.splice(3,2); //3 es la posicion y 2 es la cantidad de elementos a eliminar
console.log(listaCompras);

//metodo join - pasa a un string todos los elementos del array con un separador
let todosLosElementos = listaCompras.join(" , ");
console.log(todosLosElementos);

//metodo concat - une dos arrays en uno nuevo 
const postre = ["helado","flan","tirasu"];
const listaCompleta = listaCompras.concat(postre);
console.log(listaCompleta);

//metodo slice - copia una parte del array 

const subConjunto = listaCompleta.slice(3,6);
console.log(subConjunto);

//web ejemplo 

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits.slice(1, 3);
console.log(fruits, citrus)
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']



//metodo indeOf - da la posición d eun elemento en el array
const listaAlumnos = ["Perez","centeno","Lopez","rodriguez","burocco"];
let posicion = listaAlumnos.indexOf("Lopez");
console.log(posicion);

posicion = listaAlumnos.indexOf("Herrero");
console.log(posicion);

let apellido = prompt("Ingresa apellido buscado");
posicion = listaAlumnos.indexOf(apellido);
if(posicion !=-1){
    alert("el alumno "+listaAlumnos[posicion]+" se encuentra en curso");
}else{
    alert("el alumno no esta en curso");
}


//metodo includes - si un elemento esta o no en un array 

let encontrado =  listaAlumnos.includes("Perez");
console.log(encontrado)//true

//metodo reverse - invierte orden de los elementos del array
listaAlumnos.reverse();
console.log(listaAlumnos);



//slide 30
//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));

//slide 31

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}

eliminar('Pedro')

*/

//
const cosmeticos = [
    {
        id:67,
        nombre:"mascara de pestañas",
        marca:"maybelline",
        precio: 2000
    },
    {
        id:11,
        nombre:"Labial",
        marca:"Revlon",
        precio: 1500
    },
    {
        id:89,
        nombre:"corrector de ojeras",
        marca:"loreal",
        precio: 3000
    },
];

//console.log(cosmeticos);
//console.log(cosmeticos[1]);

//FOR ..of  recorre array de objetos
for(const cosmetico of cosmeticos){
    //console.log(cosmetico);
    console.log(cosmetico.nombre+" -Precio $ "+cosmetico.precio);
}

//diapo 38 - sumarle iva a todos los productos por metodo

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();

console.log(productos);

//tarea usar arrays en proyecto 

