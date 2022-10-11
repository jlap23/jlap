function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2

///

function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}
/////

//forEach

const libros=[
    {
        isbn:"222",
        titulo:"Harry",
        genero:"Aventuras",
        precio:230.9
    },
{
        isbn:"333",
        titulo:"Haerrey",
        genero:"Aven3fturas",
        precio:140.9
    },
    {
        isbn:"444",
        titulo:"rtrtrt",
        genero:"Aven3fturas",
        precio:240.9
    },
    {
        isbn:"5555",
        titulo:"gtrhytejtyj",
        genero:"Aven3fturas",
        precio:40.9
    },
]



libros.forEach((libro) => console.log(libro.titulo));

//find
//busca el primer elemento que cumpla con la condición solicitada

const encontrado = libros.find((libro) => libro.titulo == "Haerrey");
console.log(encontrado);

let libroBuscado = prompt("Ingresa");

const encontrado2 = libros.find((libro) => libro.titulo == libroBuscado);
console.log(encontrado);
if (encontrado2 != undefined){
    console.log(encontrado2);
}else{
    console.log("El libro no esta");
}

//filter
//filtra un conjunto de elementos que cumpla con la condicion

const librosEconomicos = libros.filter((libro) => libro.precio < 200);
console.log(librosEconomicos);

//some
//informa por verdadero o falso si un elemento s enecurentr o  no en el array

const existe = libros.some((libro) => libro.genero == "nOVELA");
console.log("EXISTE NOVELA?"+existe);

console.log( Math.PI ) // 3.141592653589793


//map
//crea un nuevo array con los elementos del original transformados de alguna manera

const titulos = libros.map((libro)=>libro.titulo.toUpperCase());
console.log(titulos);

const nuevaListaLibros = libros.map((libro)=> {
    return {
        isbn: libro.isbn,
        titulo: libro.titulo.toUpperCase,
        genero: libro.genero,
        precio: libro.precio*1.21,
        vendido:false
    }
});

console.log(nuevaListaLibros);

//reduce
//acumula valores de alguna propiedad especifica

const totalPrecios = libros.reduce((sumador,libro)=>sumador + libro.precio,0);
console.log("Total a abonar $"+totalPrecios);

//sort
//organiza array de ascendente o descendente X 

libros.sort((a,b) => a.precio - b.precio);//ascendente

console.log(libros);

libros.sort((a,b) => b.precio - a.precio);//descendente

console.log(libros);

libros.sort((a,b) => a.titulo.localeCompare(b.titulo));//alfabetico ascendente
console.log(libros);


//Math
//tirar un dado

let dado = (Math.random() * 5 + 1);
console.log("rESULTADO TIRADA DEL DADO: "+dado);

//date

let ahora = new Date();
console.log(ahora);
console.log(ahora.toLocaleDateString());