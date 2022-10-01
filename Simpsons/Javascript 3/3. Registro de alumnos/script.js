//Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
//Luego realizar un única salida por alerta, con el listado de alumnos registrados.


let alumnos = "";
for(let index = 0; index < 10; index ++){
    alumnos += prompt ("Ingresa alumno")+"\n";
}
alert(alumnos);