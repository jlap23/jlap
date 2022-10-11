/*
Codificar una función con la siguiente cabecera: validacion(cadena). 
En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. 
Caso contrario, se retorna false. 
Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, 
solicitando en cada ciclo una cadena a validar.
*/

function validacion(cadena){
    return cadena !="";
}
let entrada = prompt("Ingresa cadena");
while(entrada != "ESC"){
    alert(validacion(entrada));
    entrada = prompt ("iNGRESAR CADENA");
}