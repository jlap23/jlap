/*Ejercicio 1: Cotizaciones
Codificar dos funciones:

Una funcion cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dolares. 

Una función cotizarPesos(dolar), que recibe dolares y retorna en peso argentino. 

Luego invocar las funciones solicitando al usuario el valor y el tipo de cotización a realizar. 


const DolarCompra= 284;
const DolarVenta=288;

function cotizarDolar(pesos){
    let cotizacionDolares = pesos/DolarCompra;
    return cotizacionDolares;
}
function cotizarPesos(dolar){
    let cotizacionPesos = dolar * DolarVenta;
    return cotizacionPesos;
}

let opcion = prompt("**** COTIZADOR ***\n1-De pesos a dolares\n2. De dolares a pesos");
if (opcion =="1"){
    let cantiPesos= parseFloat(prompt("ingresa la cantidad de pesos"));
    let cotizacionD = cotizarDolar(cantiPesos);
    alert("Ingresando $"+cantiPesos+" te quedan U$S"+cotizacionD);
}else if(opcion == "2"){
    let cantiDolares = parseFloat(prompt("Ingresa la cantidad de U$S"));
    let cotizacionP = cotizarPesos(cantiDolares);
    alert("Ingresando U$S"+cantiDolares+" te quedan $"+cotizacionP)
}else{
    alert("Error en la opcion!");
}

/*

/*Ejercicio 2:tIENDA
declarar una clase Tienda que permita registrar:
Nombre de tienda
Dreccion de tienda
propietario de tienda
rubro de la tienda
luego invocar al menos tres (3) objeto usando esta clase. 
*/

class Tienda{
        constructor(nombre,direccion,propietario,rubro){
                this.nombre = nombre;
                this.direccion = direccion;
                this.propietario = propietario;
                this.rubro = rubro;
        }
        //resolucion3
        estaAbierto(hora){
            if((hora>=8 && hora<=12)||(hora>=15 && hora<=19)){
                return true;
            }else{
                return false;
            }
        }
}

const tienda1 = new Tienda("T1","DIRT1","OWNT1","RESTAURANT");
const tienda2 = new Tienda("T2","DIRT2","OWNT2","RESTAURANT");
const tienda3 = new Tienda("T3","DIRT3","OWNT3","ALIMENTOS");

/*ejercicio 3: Abierto /cERRADO
Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora). 
Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. 
Caso contrario, se retorna false.
Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas. Informar por alerta si la tienda está abierta, en función de la hora ingresada.
*/

for(let i=1;i<=3;i++){
    let horario = parseInt(prompt("INGRESA LA HORA EN LA QUE IRAS A LA TIENDA"));
    let estadoTienda = tienda1.estaAbierto(horario);//true or false 
    if(estadoTienda == true){
        alert("tE ESPERAMOS, LA TIENDA ESTÁ ABIERTA!");
    }else{
        alert("La tienda está cerrada");
    }
}

