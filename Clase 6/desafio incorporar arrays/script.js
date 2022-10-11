class Producto {
    constructor(nombre, precio, detalle, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }

    sumarIVA(){
        return this.precio * 1.21;
    }
    Vender(){
        this.disponible= false;
    }
    precioSugerido(){
        return this.precio * 1.21 * 1.25;
    }
}

var arrayProductos = [];
do{
    var comprobacion = prompt("Ingrese un nombre del producto o fin para terminar de agregar")
    if (comprobacion == "fin" || comprobacion === "FIN" || comprobacion ==="Fin" ) {
        break;
    }else{
        nombreP = comprobacion;
        var precioP = prompt("INGRESE PRECIO DE PRODUCTO");
        var detallep = prompt("INGRESE DETALLE DE PRODUCTO");
        var cantidadP = prompt("INGRESE CANTIDAD A COMPRAR DE PRODUCTO");
        arrayProductos.push(new Producto(nombreP, precioP, detallep, cantidadP));

    }    }
    while(comprobacion == "fin" || comprobacion === "FIN" || comprobacion ==="Fin" )

    console.log(arrayProductos);

    //document.write("<h3> EL precio de costo del producto a calcular es: "+precioCostom+"</h3>")
for (var producto of arrayProductos){
    document.write("<h3> El producto ingresado es: "+ producto.nombre+"</h3>");
    document.write("<h3> El detalle del producto ingresado es: "+producto.detalle+ "</h3>");
    document.write("<h3> El precio del producto con IVA es: "+producto.sumarIVA() + "</h3>");

    console.log(producto.nombre);
    console.log(producto.detalle);
    console.log(producto.cantidad);
    console.log(producto.sumarIVA());}

