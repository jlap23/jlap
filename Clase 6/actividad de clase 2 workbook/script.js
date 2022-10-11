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

var arrayProductos = [];
do {
    var comprobacion = prompt("Ingresa nombre del producto o fin para terminar de agregar")
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion=== "Fin"){
        break;
    }else{
        nombreP = comprobacion;
        var precioP = prompt("Ingrese precio de producto");
        var detalleP = prompt("ingrese detalle de producto");
        var cantidadP = prompt("Ingrese cnatidad a comprar del producto");
        arrayProductos.push(new Producto(nombreP,precioP,detalleP,cantidadP));
    }
}
        while (comprobacion !="fin" || comprobacion !="FIN" || comprobacion !="Fin")
    
        console.log(arrayProductos);

        //document.write("<h3> El precio de costo del producto a calcular es: "+precioCostoM+"</h3>")
        for (var producto of arrayProductos){
            document.write("<h3>El producto ingresado es: "+producto.nombre + "</h3>");
            document.write("<h3>El detalle del producto ingresado es: "+producto.detalle+"</h3>");
            document.write("<h3>La cantidad en stock del producto ingresado es: "+producto.cantidad+"</h3>");
            document.write("<h3>El precio del producto con IVA es: "+producto.sumarIva()+ "</h3>");

            console.log(producto.nombre);
            console.log(producto.detalle);
            console.log(producto.cantidad);
            console.log(producto.sumarIva());
        
        }