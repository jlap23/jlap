//ejercicio de presentación  slide 15

let unNumero = 5

//con (unNumro ==5) comparamos si unNumero es igual a 5
if (unNumero ==5){
    console.log("vas a ver esto");
}

//con (unNumero ==6) comparamos si unNumero e sigual a 6 
if (unNumero ==6){
    console.log("no vas a ver este mensaje");
}


//if

let edad = 14;

if (edad ==18){
    console.log("Ya eres mayor de edad");
}else{
    console.log("No eres mayor de edad");
}


// == es comparación
// = es asignación

// if...else
/*
let user = prompt("Ingrese usuario");

if (user == "Juanito1989"){
    console.log("Bienvenido Juan");
}else{
    console.log("Usuario No registrado");
}
*/

//if...else if...else
/*
let codproducto = prompt("Ingrese el codigo del producto y le diré su precio");

if(codproducto == "1212"){
    console.log("Mouse marca Genius - modelo DX100 - $ 999.99");
}else if(codproducto == "2222"){
    console.log("Teclado Logitech - modelo G600 - $ 7999.99");
}else if(codproducto == "1133"){
    console.log("Mouse pad gamer - $ 6000");
}
else{
    console.log("producto sin stock!");
}
*/

//Ejercicio: Solicitar al usuario el año de vencimiento de su registro de conducir
//Si el mismo coincide con año actual => enviar mensaje: "Su registro esta vencido o por vencer"
//Sino enviar un mensaje: "Aun esta vigente"
/*
let aniovenc = parseInt(prompt("Ingrese año de vencimiento de su registro"));
const ANIOACTUAL = 2022;

if(aniovenc == ANIOACTUAL){
    console.log("Su registro esta vencido o por vencer");
}
else{
    console.log("Aun esta vigente");
}


//variables boolean
let tieneAptoFisico = false;
if (tieneAptoFisico){
    console.log ("Puede realizar act fisica");
}else{
    console.log("Priemro debe traer apto fisico");

}


let edadUusario=18;
let esMayorDeEdad = (edadUusario>17); //true

if(esMayorDeEdad){
    console.log("Puede ingresar al bar");
}else
console.log("Para ingresar debes ser mayor de edad");


// == vs ===

let num1 = 1;
let numUno= "1";

let sonIguales = ((num1 == numUno));
console.log(sonIguales);
//compara por valor

let sonEstrictamenteIguales = (num1 === numUno);
console.log(sonEstrictamenteIguales);
// === compara por valor y por tipo


// operadores < <= > >=
let CaloriasDiarias = parseInt(prompt("Ingresa las calorias ingeridas hoy"));

if (CaloriasDiarias <= 1800){
    console.log("Deficit Calorico");
}else if(CaloriasDiarias <= 2300){
    console.log("Excelente valor calorico");
}else{
    console.log("Exceso Calorico");
}

//Operador &&
let usuario = prompt("Ingresa nombre de usuario");
let contrasenia = prompt("Ingresa la contraseña para usuario "+usuario);

if ((usuario == "Pepito_2022") && (contrasenia == "roble+1_J")){
console.log("Bienvenido al sistema");
}else{
    console.log("Usuario y/o contraseña erroneos");
}


// Operador or ||
let bandaFavorita = prompt("Ingresa tu banda favorita");
if((bandaFavorita=="daft punk") || (bandaFavorita=="DAFT PUNK") || (bandaFavorita=="Daft Punk")){
    console.log("También es mi banda favorita!");
}else{
    console.log(bandaFavorita + " es buena banda");
}



//operación de negación. negativo en automático
let esargentino = true;
let nacionalidad = !esargentino;
console.log(nacionalidad);

//
let ingresodato = prompt("Ingresa dato");
if(ingresodato !=""){
    console.log("La palabra ingresada es "+ingresodato);
}else{
    console.log("Debes ingresar una palabra");
}


//quizz 2

var unaCadena = "progra en";
var otracadena = "js";
var resultado = unaCadena + otracadena;
console.log(resultado);

//quizz 3
for(var i=0;i<10;i++){
    if((i===2) || (i ===6)){
        console.log("HOLA CODER "+i);
    }
}

//QUIZZ 3.1

let nombre = "ANA";
switch(nombre){
    case"ALBERTO":
        console.log("HOLA ALBERTO");
        break;
    case"EVA":
       console.log("HOLA EVA");
        break;
    case "JUAN":
        console.log("HOLA JUAN");
        break;
    default:
        console.log("HOLA ANA");
        break; 
}


//diapo 28
let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}



//tareita
let numerote = parseInt(prompt("NO ESCRIBAS MÁS DE 1000 "));
if (numerote>1000){
    console.log("Te pasaste mano");
}else{
    console.log("ALGO ESTA MAL")
}
let pedirhola = prompt("Escribe Hola");
if (pedirhola =="Hola"){
    console.log("HOLLABCK MF")
}else{
    console.log("ALGO ESTA MAL")
}
let numerito = prompt("ESCRIBE ENTRE 10 Y 50");
if ((numerito>=10) || (numerito<=50)){
    console.log("BIEN HECHO");
}else{
    console.log("ALGO ESTA MAL")
}

*/


function hello (a, b) {
	return a + b
}

hello(0, 2)