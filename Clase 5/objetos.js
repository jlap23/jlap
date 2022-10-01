//homero objeto
/*
let nombre = "Homero";
let edad   = 39;
let calle  = "Av. Siempreviva 742";
// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }


//objetos literales
const mi_reloj = {
    
    marca: "Fendi",
    modelo: 890,
    color: "rojo",
    malla: "cuero",
}

console.log(mi_reloj);
console.log("El color de mi reloj es: "+mi_reloj.color);
console.log("El modelo d emi reloj es "+mi_reloj["modelo"]);

mi_reloj.malla="plastica";
console.log(mi_reloj);

//funcion contstructora

function Cuaderno(tapa,hojas,tamanio){
    this.tapa=tapa;
    this.hojas=hojas;
    this.tamanio=tamanio;
}

const cuaderno1 = new Cuaderno("Blanda","rayadas","A4");
const cuaderno2 = new Cuaderno("Dura","cuadrada","Carta");

console.log(cuaderno1);

const cuaderno3 = new Cuaderno(prompt("INGRESA TAPA"),prompt("ingresa hojas"), prompt("ingresa tamaño"));
console.log(cuaderno3);


//funcion constructora que recibe como parametro un objeto literal


function Reloj(objetoLiteral){
    this.marca = objetoLiteral.marca;
    this.modelo = objetoLiteral.modelo;
    this.color = objetoLiteral.color;
    this.malla = objetoLiteral.malla;
}

const mireloj2 = {
    marca: "hg",
    modelo:111
}

const reloj1 = new Reloj(mi_reloj);
const reloj2= new Reloj(mireloj2);
console.log(reloj1);
console.log(reloj2);


//metodos de string
let frase = "soy un tenista del Top TEN, gane 2 grand Slams";
//propiedad length - cantidad de caracteres
console.log("longitud de la frase: "+frase.length);
//propiedad tolowercase
console.log("en minusculas: "+frase.toLowerCase());

console.log("en mayusculas: "+frase.toUpperCase());



//funcion constructora con método personalizado

function Mascota(raza, nombre, edad, color){
    this.raza=raza;
    this.nombre=nombre;
    this.edad=edad;
    this.color=color;
    //método para mascota
    this.mostrarMascota=function(){
        console.log("Soy "+this.nombre+" mi raza es "+this.raza+", tengo "+this.edad+" años y mi color es "+this.color);
     
    }
}

const mascota1=new Mascota("Poodle","Peggy",7,"blanca");
const mascota2=new Mascota("Pincher","Sue",15,"negro y cafe");

mascota1.mostrarMascota()
mascota2.mostrarMascota()


//diapo 25
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
//propiedad e sun mobre inventado por nosotros
for (const propiedad in persona1) {
    console.log(propiedad);
    console.log(persona1[propiedad]);
}

*/

class Computadora{
constructor(tipo,sistema){
    this.tipo=tipo;
    this.sistema=sistema;
}
//metodos
mostrarCompu(){
    return "Tipo: "+this.tipo+"\nSistema: "+this.sistema;
}
actualizarSistema(nuevoSistema){
this.sistema=nuevoSistema;
console.log("Sistema actualizado");
}
}

const compu1=new Computadora("NOTEBOOK","MacOs");
const compu2=new Computadora("escritorio","linux");

console.log(compu1);
compu2.mostrarCompu();
compu1.mostrarCompu();
console.log(compu1.mostrarCompu());


compu2.actualizarSistema(prompt("Ingresar nuevo sistema para compu2"));
console.log(compu2.mostrarCompu());

//

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();
