
nombre = prompt("Como te llamas?");
//esto en un document.writew
document.write("<h3>Bienvenido seas al portal "+nombre+" por favor compra mucho</h3>");

let fecha = parseInt(prompt("Bienvenido seas "+nombre+" por favor anota en que año naciste"));
let currentTime = new Date()
let edades = currentTime.getFullYear()
menu = "";
let sumaNumeros = edades - fecha;

if (sumaNumeros >=18){
    class Producto {
        constructor(nombre,precio,detalle, cantidad){
            this.nombre = nombre;
            this.precio = precio;
            this.detalle = detalle;
            this.cantidad = cantidad;
            this.disponible = true;
        }
    
        sumarIva(){
            return this.precio * 1.16;
        }
        Vender(){
            this.disponible = false;
        }
        precioSugerido(){
            return this.precio * 1.16 * 1.25;
        }
    }
    
    var Productos = [];
    do {
        var comprobacion = prompt("Ingresa nombre del producto o fin para terminar de agregar")
        if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion=== "Fin"){
            break;
        }else{
            nombreP = comprobacion;
            var precioP = parseFloat(prompt("Ingrese precio de producto"));
            var detalleP = prompt("ingrese detalle de producto");
            var cantidadP = parseFloat(prompt("Ingrese cantidad a comprar del producto"));
            Productos.push(new Producto(nombreP,precioP,detalleP,cantidadP));
        }
    }
            while (comprobacion !="fin" || comprobacion !="FIN" || comprobacion !="Fin")
        
            console.log(Productos);
            console.log(Productos[0]+" y "+Productos[2]);
 
            //tabla

let articuloTabla = document.getElementById("inferior");
//creamos tabla y tbody
let tabla = document.createElement("table");
tabla.className="table table-striped";
let tablaBody = document.createElement("tbody");

//recorro array de productos
for(const producto of Productos){
    tablaBody.innerHTML += `
    <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.descuento}</td>
    </tr>
    `;
}



let articuloCartas = document.getElementById("cartas");
for(const producto of Productos){
    let carta = document.createElement("div");
    carta.className="card col-md-3"
    carta.innerHTML =`
        <div class="card body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio: ${producto.precio}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>
    `;
    articuloCartas.append(carta);

}
      var descuento = prompt("¿Quieres descuento?")
        if (descuento === "si" || comprobacion === "SI" || comprobacion=== "Si"){
            const descuento = function (precio) { return precio * 0.10};
            console.log("el descuento ES "+descuento(700));;
        }else{
            alert("Chale");
        }
    }else{
    alert("No eres mayor de edad. Bye");
    
    }



