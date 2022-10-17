class Producto{
constructor(id, nombre, precio, stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}


//metodo del objeto para restarle stock al mismo

    restaStock(){
        this.stock = this.stock - 1;
        console.log(`El stock de ${this.nombre} ha sido actualizado`)     
}
}

//instanciamos (creamos) objetos manuales
const producto0 = new Producto(0, "Cafe", 350, 100);
const producto1 = new Producto(1, "Arroz",88,20);
const producto2 = new Producto(2, "Harina",85,50);
const producto3 = new Producto(3, "Yerba",450,10);
const producto4 = new Producto(4, "Azucar",235,9);
const producto5 = new Producto(5, "Queso",2000,50);
const producto6 = new Producto(6, "Fideos",140,0);

const misproductos = [producto0, producto1, producto2, producto3, producto4, producto5, producto6]

//poner en html

function mostrarCard(){
    for (elemento of misproductos){
        let card = document.createElement("div")
        card.innerHTML = `<h2> ${elemento.nombre} </h2> <input type="button" value="llevalo por solo ${elemento.precio}">`
        document.body.append()
    }
}



/* let opcionUser = 5

const productoElegido = misProductos.find(elemento => elemento.id === opcionUser)

console.log(productoElegido)

let precioTotal =+ productoElegido.precio */
/*
let mensajePantalla = "Estos son nuestros productos \n "
for (elemento of misProductos){
  mensajePantalla += `${elemento.id} - {elemento.nombre}   

let opcionUser = prompt(mensajePantalla)
debugger
const productoElegido = misProductos.fin(elemento => elemento.id === opcionUser)
alert(`Te vas a llevar ${})

*/