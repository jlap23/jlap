//funcion sin parametros
/*
function saludar() {
    console.log("Buneas nochoees programadores!");
}

saludar();
saludar();


for(let i=1;i<=3;i++){
    saludar();
}



//verbo infinitivo muy descriptivo recomendable

function sumar(){
    let num1=parseInt(prompt("iNGRESA NUMERO"));
    let num2=parseInt(prompt("Ingresa numero 2"));
    let resultado=num1+num2;
    console.log("El resultado de suma es: "+resultado);
}

sumar();




//funcion con parametros

function armarFrase(palabra1,palabra2){
 console.log("la frase es: "+palabra1+" "+palabra2+".");
   }

   armarFrase("Tengo","hambre");
   armarFrase("Que","Frio");

   let p1=prompt("Ingresa la primera palabra");
   let p2=prompt("Ingresa palabra 2");

   armarFrase(p1,p2);

   
   //funcion con parametros y return
let precioprod=parseFloat(prompt("Ingresa el precio del producto"));

   function calcularIva(precio){
    return precio * 0.21;    
   }

   //precio=100 -> iva =21

   let iva=calcularIva(precioprod);
   console.log("El valor del IVA es $ "+iva);

   function mostrarPrecioFinal(precioIngresado,ivaCalculado){
    console.log("El precio ingresado con iva es $"+ (precioIngresado+ivaCalculado));
   }

   mostrarPrecioFinal(precioprod,iva);



   //calculadora
   function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "*"));




//ambito de una variable (local o global)

let soyGlobal="Pepe";

function probarScope(){
    console.log(soyGlobal);
    let soyLocal="Lautaro";
    console.log(soyLocal);
    return soyLocal;
}

let loQueRetorna=probarScope();
//console.log(soyGlobal); (te da error porque esta fuera de bloque {})

function sumar(num1, num2) {
    let resultado = num1 + num2
    return resultado
}

function restar(num1, num2) {
    let resultado = num1 - num2
    return resultado
}

let resulSuma = sumar(4,3);
console.log(resulSuma);
let resulResta = restar(4,3);

resulSuma = sumar(10,9);
console.log(resulSuma);
 


//funcion anonima
const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }
console.log( suma(15,20) )
console.log( resta(15,5) )

*/
//funcion anonima 2

const descuento = function (precio) { return precio * 0.10};

console.log("el descuento ES "+descuento(700));

// funcion flecha

const mostrarNombre = (nombre) => "Mi nombre es "+nombre;

console.log(mostrarNombre("pepe"));

//pidiendo nombre al usuario
// atnes let nombre = prompt("Ingresa tu nombre");
console.log(mostrarNombre(prompt("Ingresa tu nombre"))); //queda local

 
const areaTriangulo = (base,altura) => (base/altura)/2;
console.log("El area del triangulo es: "+areaTriangulo(4,6));

const ejemplo = (parametro1,parametro2) => {
    //aqui el blorque de codigo 
    return parametro1 + parametro2;
}


//clase profe pasado
//debugger

