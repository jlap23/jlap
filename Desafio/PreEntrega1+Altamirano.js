
nombre = prompt("Como te llamas?");
let fecha = parseInt(prompt("Bienvenido seas "+nombre+" por favor anota en que año naciste"));
let currentTime = new Date()
let edades = currentTime.getFullYear()
menu = "";
let sumaNumeros = edades - fecha;

MedicamentoA= "CA";
MedicamentoB= "CE";
MedicamentoC= "CI";


const CostoMedicamentoA = 45;
const CostoMedicamentoB = 50;
const CostoMedicamentoC = 56;

function ivaA(peso){
    let impuesto = ((CostoMedicamentoA * .21)+CostoMedicamentoA);
    return impuesto;
}

function ivaB(peso){
    let impuesto = ((CostoMedicamentoB * .21)+CostoMedicamentoB);
    return impuesto;
}

function ivaC(peso){
    let impuesto = ((CostoMedicamentoC * .21)+CostoMedicamentoC);
    return impuesto;
}


if (sumaNumeros >=18){
    console.log("Wow para tener "+sumaNumeros+" años se ve genial");
    alert("Ya eres mayor de edad")
    let menu = prompt("Gracias "+nombre+" elige por favor el número del tratamiento que necesitas.\n 1. Dolor\n 2. Insomnia\n 3. Depresión\n Presiona S para salir.");
    
    while (menu !="S"){
    switch(menu){
    case"1":
    alert("Tu necesitas "+MedicamentoA+". Tiene un costo de "+CostoMedicamentoA);
    let compraA = prompt("Escribe C para comprar "+MedicamentoA);
    if (compraA ==="C"){
        let totalA = ivaA(CostoMedicamentoA);
        alert("Precio total es de $"+totalA);
        }
    else{
    compraA=alert("Si lo compras? Escribe C")
    }
    break;
    case"2":
    alert("Tu necesitas "+MedicamentoB+". Tiene un costo de "+CostoMedicamentoB);
    let compraB = prompt("Escribe C para comprar "+MedicamentoB);
    if (compraB ==="C"){
        let totalB = ivaB(CostoMedicamentoB);
        alert("Precio total es de $"+totalB);
    }else{
    compraB=alert("Si lo compras? Escribe C")
    } break;
    case"3":
    alert("Tu necesitas "+MedicamentoC+". Tiene un costo de "+CostoMedicamentoC);
    let compraC = prompt("Escribe C para comprar "+MedicamentoC);
    if (compraC ==="C"){
        let totalC = ivaC(CostoMedicamentoC);
        alert("Precio total es de $"+totalC);
    }else{
    compraB=alert("Si lo compras? Escribe C")
    } break;
    default:
    alert("Número inválido. elige por favor el número del tratamiento que necesitas.\n 1. Dolor\n 2. Insomnia\n 3. Depresión\n Presiona S para salir.");
    break;
    }
    menu = prompt("Gracias "+nombre+" elige por favor el número del tratamiento que necesitas.\n 1. Dolor\n 2. Insomnia\n 3. Depresión\n Presiona S para salir.");
    }
    
    }else{
    alert("No eres mayor de edad. Bye");
    
    }



