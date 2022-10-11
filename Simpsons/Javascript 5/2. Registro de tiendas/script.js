/*
Solicitar al usuario el registro de cinco (5) tiendas.
Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. 
Generar una única salida compuesta por la información de los objetos instanciados.

*/
//de la tienda, de pone para definir la variable
class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}



///
let ingresados = '';
for(let index = 0; index < 5; index++){
    let tienda = new Tienda(prompt("nombre"),
                            prompt("Direccion"),
                            prompt("Propietario"),
                            prompt("Rubro"));
ingresados+= "Tienda: "+tienda.nombre+" "+
        "Direccion: "+tienda.direccion+" "+
        "Propietario: "+tienda.propietario+" "+
        "Rubro: "+tienda.rubro+"\n";

}
alert(ingresados);