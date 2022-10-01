//Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
//Luego realizar un única salida por alerta, con todos los nombres ingresados.


let entrada    = prompt("INGRESAR NOMBRE");
let ingresados = '';
while (entrada != 'Voldemort') {
    ingresados += entrada +"\n";
    entrada     = prompt("INGRESAR NOMBRE");
}
alert(ingresados);
