//operadores avanzados

const boton = document.getElementById("botonDados");
const dado1 = document.getElementById("dado1");
const dado2 = document.getElementById("dado2");
const resutlado = document.getElementById("resultado");

//funcion fflecha
const arrojarDados = () => {
    let d1= Math.round(Math.random() * 5 + 1);
    let d2= Math.round(Math.random() * 5 + 1);
    return [d1,d2];
}

//eventos (para el boton)
boton.onclick = () => {
    let miSuerte=arrojarDados();//recibe array de d1 y d2
    console.log(miSuerte);
    dado1.value=miSuerte[0];
    dado2.value=miSuerte[1];
    //let total = miSuerte[0] + miSuerte[1];
    let total = miSuerte.reduce((acumulador,dado)=>acumulador+ dado, 0);
    //ternario
    ((total == 7) || (total==11)) ? resultado.innerText="Ganaste 100 USD" : resultado.innerText="Perdiste 20 USD";
}

// OPERADOR && CONDICIONAL 
console.log("\n *** Operador && condicional");
let num = 15;
let resul = (num>8) && "el numero es mayor a ocho";
console.log(resul);

//    let fecha=new Date();
  //  fecha.getDate()>24 && mostrarMensaje();

 //   function mostrarMensaje(){
 //       document.body.innerHTML+=`
  //      <h3>Se acerca fin de mes!</h3>
  //      `;
   // }

//operador de asignacion ondicional ||

console.log("\n ***Operador de asignacion ondicional ||");
let envio = localStorage.getItem("envio") || "retira en persona";
console.log(envio);

const carro = JSON.parse(localStorage.getItem("listaProductos")) || [];
console.log(carro);

//operador de union nula ??
const carro2 = JSON.parse(localStorage.getItem("listaProductos")) || [];
console.log(carro2);

//diapo 30
console.log("\n ** Acceso condicional a un objeto");
const usuario = null

//console.log( usuario.nombre || "El usuario no existe" )
// Error: "No se pueden leer propiedades de NULL"

console.log( usuario?.nombre || "El usuario no existe")
// "El usuario no existe"


//desestructuracion de objetos
console.log("\n ** desectructuración objeto");
const socio={
    numero:7895,
    nombre:"Juan Marquez",
    edad:39,
    actividades:{
        actividad1:"Futbol",
        actividad2:"Natacion"
    }
}

const {numero, edad, actividades:{actividad1}}=socio; 
console.log("El numero de socio es: "+numero+" la edad es "+edad+" PRINCIPAL ACTIVIDAD: "+actividad1);

const {nombre:nom}=socio;
console.log(nom);

//en parametos
function mostrarSocio ({numero,nombre}){
    console.log("Socio numero "+numero+" nombre: "+nombre)
}

mostrarSocio(socio);

/* si son vario socios

for (const socio of socios){
    mostrarSocio(socio);
}
*/

//diapo 52
window.addEventListener('click', ( {x, y} ) => {
    console.log(x, y)
})

//desestructuracion de arrays
console.log("\n ** desectructuración arrays");

const bandas=["Queen","Bon Jovi", "Aerosmith", "guns"];
const[,a,b,c]=bandas;
console.log(a,b,c);

//spread operator ...
//de arrrays
console.log(... bandas);
//diapo59
const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

console.log( Math.max(...numeros) ) // 92


const misBandas={
    ...bandas
}

console.log(misBandas);

//spread de objetos
const producto={
    id:1,
    nombre:"soy porducto",
    precio:200
}

const prodACarrito = {
    ...producto,
    cantidad:1,
    }

//diapo 70 rest parameters

function sumar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}

console.log( sumar(4, 2) ) // 6
console.log( sumar(10, 15, 30, 5) ) // 60
console.log( sumar(100, 300, 50) ) // 450