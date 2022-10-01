/*
pedir un numero 10 veces mediante prompt y sumarle otro numero en cada repetición, mostrar el resultado por consola usando for

var numero1= parseInt(prompt("Ingresa un numero que sera sumado por interacción"));
var suma = 0;
for(let i=0; i > 10; i++){
    var numero2 = parseInt(prompt("Ingresa el numero para sumar"));
    suma = numero1 + numero2;
    console.log(suma); 
}



//pedir un texto por consola, concatenar un valor en cada iteracción aliando una salida por resultado
// ESC para salir


var texto = prompt("Ingresar numero");
var resultado = texto;
var textoConcatenar = " ";

while (textoConcatenar != "ESC"){
    textoConcatenar = prompt("Ingrese un texto para concatenar");
    resultado = resultado +" "+textoConcatenar;
    console.log(resultado);
}

*/

//pedir un numero y mostrar alerta con mensaje "Hola" la cantidad de veces del valor ingresado

var numero = parseInt(prompt("Ingresa numero",0));
for (let i=1; i <= numero; i++){
    alert("Hola");
}