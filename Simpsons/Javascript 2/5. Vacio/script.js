let producto1 = prompt("Ingresa item 1");
let producto2 = prompt("Ingresa item 2");
let producto3 = prompt("Ingresa item 3");
let producto4 = prompt("Ingresa item 4");

if ((producto1!="")&&(producto2!="")&&(producto3!="")&&(producto4!="")){
    let heladera = "1) "+producto1+" "+
    "2) "+producto2+" "+
    "3) "+producto3+" "+
    "4) "+producto4;

    console.log(heladera);
}else{
    console.log("ERROR");
}