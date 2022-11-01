//class moldeadora de objetos productos
class Producto{
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
//método del objeto para restarle stock al mismo 
    restaStock(){
        this.stock = this.stock - 1;
        console.log(`El stock de ${this.nombre} ha sido actualizado`)
    }
}

//instanciamos (creamos) objetos manualmente
const producto0 = new Producto(0, "Cafe", 350, 100);
const producto1 = new Producto(1, "Arroz", 88, 20);
const producto2 = new Producto(2, "Harina", 85, 50);
const producto3 = new Producto(3, "Yerba", 450, 10);
const producto4 = new Producto(4, "Azúcar", 235, 9)
const producto5 = new Producto(5, "Queso", 2000, 50)
const producto6 = new Producto(6, "Fideos", 140, 0)


//creamos un array y le asignamos 3 de los productos de nuestra tienda
const misProductos = [producto0, producto1, producto2, producto3, producto4, producto5, producto6]


function cardBase(){
    for (element of misProductos){
        let card = document.createElement("div")
        card.innerHTML= `<h2>${element.nombre} </h2> <input type="button" value="Comprar"">`
        document.body.append(card)
    }
}

function cardBootstrap(){
    for (element of misProductos){
        let card = document.createElement("div")
        card.innerHTML= ` <div class="card" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">${element.nombre}</h5>
          <p class="card-text">El ID de este producto es ${element.id}</p>
          <a onclick="element.restaStock()" class="btn btn-primary">Compralo a sólo ${element.precio}</a>
        </div>
      </div>`
        document.body.append( card)

    }}



    const inputNombre = document.getElementById("prodName")
    const inputPrecio = document.getElementById("prodPrecio")
    const inputStock = document.getElementById("prodStock")
    
    function nuevoProducto(){
        const userProducto = new Producto(7, inputNombre.value, inputPrecio.value, inputStock.value)
        console.log(userProducto)
        misProductos.push(userProducto)
    }




















//Funciones de orden superior

//FIND
//Busca el primer elemento existente que coincida con el valor recibido por parámetro
//Cuando encuentra la primera coincidencia, devuelve el valor y deja de recorrer el array

const precioDosMil = misProductos.find(e => e.precio == 2000)
console.log(precioDosMil)

//SOME (Algún)
//Similar al .find() Se diferencia por retornar únicamente true o false según el resultado

//FILTER Array 
// El método filter crea un nuevo array en el que incluye los elementos que cumplan
// con la condición dada en la función enviada como parametro

const sinStock = misProductos.filter(e => e.stock == 0)
console.log(sinStock)


//MAP
//Método que crea un nuevo array con los elementos del array anterior modificados por la funcion enviada.
// recorre cada elemento del array, le aplica la funcion recibida como parámetro y lo suma al array nuevo

const preciosNuevos = misProductos.map((e) => {
    return{
        id: e.id,
        nombre: e.nombre,
        precio: parseInt(e.precio*1.15),
        stock: e.stock
    }
})

console.log(preciosNuevos)


//SORT Ordena
//TRABAJA SOBRE EL ARRAY MODIFICÄNDOLO
//Recibe dos parámetros y los compara matematicamente para ordenarlo

misProductos.sort((a,b) => a.precio - b.precio)
console.log("ordennn")
console.log(misProductos)


