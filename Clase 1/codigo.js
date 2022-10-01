//comentario de una sola linea

/*
Este
es
un comentario
largo
*/

//declaracion de una variable
let nombre;
let edad;

//inicializacion de esa variable 
nombre = "Jose Luis";
edad= 23;
h 
//actualizar
nombre = "Marina";
edad= 40;

//declarar y asignar al mismo tiempo
let direccion = "Avenida Rivadavia 788";


//CONSTANT
const PI = 3.14;
PI = 2.11;

//operacoiones 
let num1 = 8;
let num2 = 3;
let suma = num1 + num2; //11
let resta = num1 - num2; //5
let multiplicacion = num1 * num2; //24
let division = num1 / num2; //2.6666

//concatenacion
let apellido = "Gomez";
const ESPACIO = " ";
let nombrecompleto = nombre + ESPACIO+ apellido; //Marina Gomez

let nombyedad = nombre +ESPACIO+ edad; //Marina 40

//consola
console.log("Bienvenidos a la consola!");
console.log("El resultado de la suma es: "+suma);
console.log("El resultado de la resta es: "+resta);
console.log("El resultado de la multiplicacion es: "+multiplicacion);
console.log("El resultado de la division es: "+division);

console.log("El nombre completo del usuario es "+nombrecompleto);
console.log("El nombre concatenado a la edad es "+nombyedad);


//prompt
let bandaFavorita = prompt("Ingresa tu banda favorita");
console.log("La banda favorita del usuario es: "+bandaFavorita);

//alert
let nomUsu = prompt("Ingresa tu nombre");
alert("Buenas Noches"+nomUsu);


//ejercicio sumams do numeros que ingresan el usuario
let primerNum = parseInt(promt("Ingresa el primer numero a sumar"));
let segundoNum = parseInt(prompt("Ingresa numero dos"));
//ya tenemos ambos en formato numerico
let sumaNumeros = primerNum + segundoNum;
alert("La suma de los numeros es: "+sumaNumeros);

//parseFloat para convertir a numeros con decimales por ej un precio.


//Tarea:
//1) solicitar el año de nacimiento al usuario y decirles cuantos años tiene
//2) soliitar (parseflaot) un precio de producto e informar precio final con iva incluído 
