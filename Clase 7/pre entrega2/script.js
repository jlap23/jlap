class Producto {
    constructor(nombre,precio,detalle,cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true; 
    }

    SumarIva(){
        return this.precio * 1.25;
    }

    Vender(){
        this.disponible = false;
    }

    precioSugerido(){
        return this.precio * 1.21 * 1.25;
    }
}

var arrayProductos = [];
do{
    var comprobacion = prompt("Ingrese nombre de producto o fin para salir");
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
        break;
        }else{
        nombreP = comprobacion;
        var precioP = prompt("Ingresa precio");
        var detalleP = prompt("Ingresa detalle");
        var cantidadP = prompt("Ingresa cantidad");
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }    
}
while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion !="Fin")

console.log(arrayProductos);

for (var producto of arrayProductos){
    document.write("<ul><li><h3>Nombre: "+producto.nombre+ "</h3></li>");
    document.write("<li><h3>Detalle: "+producto.detalle+ "</h3></li>");
    document.write("<li><h3>Cantidad: "+producto.cantidad+ "</h3></li>");
    document.write("<li><h3>Cantidad: "+producto.cantidad+ "</h3></li>");
    document.write("<li><h3>Precio: "+producto.precio+ "</h3></li>");
    document.write("<li><h3>Precio con IVA: "+producto.SumarIva() + "</h3></li></ul><br>");
    console.log(producto.nombre);
    console.log(producto.detalle);
    console.log(producto.cantidad);
    console.log(producto.SumarIva());
}

//poco stock menos de 3 prod

var pocoStock = arrayProductos.filter(producto => producto.cantidad <=3 );
console.log("producto bajo, comprar de nuevo");
console.log(pocoStock);
document.write("<h3>Lista de productos con poco stock, menos de 3 unidades: </h3>");

for(var producto of pocoStock){
    document.write("<ul><li><h3>Nombre: "+ producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: "+ producto.detalle + "</h3></li>");
    document.write("<li><h3>Cantidad: "+ producto.cantidad + "</h3></li></ul><br>");
}

// BUSCAR UN PRODUCTO ESPECIFICO POR NOMBRE INGRESADO


var ingresado = prompt("Ingresar el producto que quiero buscar");

var prodIngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
console.log(prodIngresado);
document.write("<h3> Lista de Productos ingresados para busqueda: </h3>");

for (var producto of prodIngresado) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>");
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li></ul><br>");
    
//ORDENADOS POR CANTIDAD
var ordenadosCantidad = []; //Declamos el array ordenadosCantidad en una nueva posición de memoria
ordenadosCantidad = arrayProductos.map (elemento => elemento); 
ordenadosCantidad.sort(function(a, b) { 
return a. cantidad - b.cantidad; 
});

console.log('Ordenados por cantidad Ascendente: ');
console.log(ordenadescantidad);
document.write("<h3> Lista de Productos ordenados por cantidad: </h3>");

for (var producto of ordenadosCantidad){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>");
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
} 

//ORDENADOS POR PRECIO
var ordenadosPrecio =[]; // Declamos el array ordenados contidos en una nueva posición de memorie 
ordenadosPrecio = arrayProductos.map(elemento => elemento);
var ordenadosPrecio = arrayProductos;
ordenadosPrecio.sort(function(a, b){
    return a.precio - b.precio;
});
console.log("Ordenados ascendente");
console.log(ordenadosPrecio);
document.write("<h3>Lista de productos ordenados por precio ascendente</h3>")

for (var producto of ordenadosPrecio){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>");
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
} 

}