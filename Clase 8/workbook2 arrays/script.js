class Producto {
    constructor(nombre,precio,detalle,cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true; 
    }

    sumarIva(){
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
let comprobacion;

do{
    comprobacion = prompt("Ingresa nombre de producto o fin para finalizar");
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
        break;
    }else{
        nombreP= comprobacion;
        var precioP = parseFloat(prompt("Ingresa precio"));
        var detalleP = prompt("Ingresa detalle");
        var cantidadP = prompt("Ingresa cantidad");
        arrayProductos.push(new Producto(nombreP,precioP,detalleP,cantidadP));
    }
}
    while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin")
    console.log(arrayProductos);

//DOCUMENT.WRITE("<h3>EL PRECIO DEL COSTO DEL PRODUCTO A CALCULAR ES: "+precioCostoM+ "</H3>")
    document.write("<h3> El producto ingresado es: "+Producto.nombreP + "</h3>");
    document.write("<h3> El detalle del producto ingresado es: "+Producto.detalleP + "</h3>");
    document.write("<h3> La cantidad en stock del producto ingresado es: "+Producto.cantidad + "</h3>");
    document.write("<h3> El precio del producto con IVA es: "+Producto.sumarIva() + "</h3>");

    console.log(Producto.nombre);
    console.log(Producto.detalle);
    console.log(Producto.cantidad);
    console.log(Producto.sumarIva());

