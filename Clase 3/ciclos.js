// ciclos por conteo
/*
for (let i=1; i<=5; i++){
    //procion de codigo que se va a repetir
    console.log("Vuelta no "+i);
}

//diapo13

let ingresarnumero = parseInt(prompt("ingresar numero"));
for (let i=1; i<=10; i++){
    let resultado = ingresarnumero * i ;
    console.log(ingresarnumero +" x "+ i +" = "+ resultado);
}


//diapo 14 medico

for (let i=1; i<=20; i++){
    let ingresarNombre = prompt("Ingresar nombre");
    alert ("Turno N. "+i+" Nombre: "+ingresarNombre );
        
}



// usuario y contrsaeña con ciclo FOR
for (let i=1;i<=3;i++){
    let usuario=prompt("Ingresa usuario");
    let contrasenia=prompt("Ingresa contrsaeña para "+usuario);
    
    if((usuario=="DarthVader")&&(contrasenia=="Code_66")){
        console.log("Bienvenido al sistema anakin!!!");
        break;
    }else{
        console.log("Usuario erroeno! Restan "+(3-1)+" intentos");
    }
}


//quiero imprimir los numeros impares del 1 al 10
for(let i=1;i<=10; i++){
    //saltea numeros pares
    if(i%2==0){
        continue;
    }else{
        console.log(i);
    }
 
}



//ejercicio promedio de 3 notas de un alumno
let nota;
let acumulador= 0;
for(let i=1;i<=3;i++){
    nota=parseInt(prompt("Ingresa la nota no "+i)); //7
    console.log("lanota ingresada "+nota);
    acumulador = acumulador + nota; //acumulador=0+7=7
    console.log("Acumulador actualizado "+acumulador)
}
let promedio=acumulador/3;
console.log("El promedio del alumno es "+promedio);



//ciclos por condicion - WHILE
console.log("Lista de compras")
let alimento= prompt("Ingrese aldimento a comprar (s para salir)");
while(alimento !="s"){
    console.log(alimento);
        alimento=prompt("Ingrese aldimento a comprar (s para salir)");
}


//Ciclos por condición -do...while
console.log("Mis bandas favoritas");
let banda;
do{
    //procion de codigo
    banda=prompt("Ingresa banda favorita (fin para salir)");
    if(banda!="fin"){
        console.log(banda);
    }

}while(banda!="fin")


//diapo23

let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);

   console.log(parseInt(numero));
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));



//switch es un condicional, no es un ciclo
let fruta=prompt("ingresa la fruta y te dire precio por kilo (salir para finalizar)");
while(fruta !="salir"){
    switch(fruta){
        case "manzana": 
            console.log("Precio por kilo de manzana $399");
            break;
        case "mandarina":
            console.log("Precio por kilo de mandarina $349");
            break;
        case "banana":
            console.log("Precio por kilo de banana $449");
            break;    
        case "durazno":
        case "frutilla":
            console.log("Precio por kilo de duranzo o frutilla $409");
            break;    
        default:
                console.log("Fruta sin stock");
                break;
    }
    fruta=prompt("ingresa la fruta y te dire precio por kilo (salir para finalizar)");
}
*/

//ejercicio solicitar el peso de las cuatro personas que ingresan a un elevador
//si el total del peso supera los 390 kg, dar aviso "Excede capacidad"
//sino imprime "Pueden subir"

let acumulador = 0;
for (let i = 1; i <= 4; i++) {
    let nombre = prompt("Ingrese nombre usuario");
    let peso = parseInt(prompt("Cual es el peso de " + nombre + "?"));
    // += es como x= x+x
    acumulador += peso;
}
if(acumulador >= 390){
    alert("excede capacidad")
}else{
    alert("puede subir")
}
console.log("Acumulado es de " + acumulador);