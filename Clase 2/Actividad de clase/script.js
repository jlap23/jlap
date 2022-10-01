var numero = parseInt(prompt("Ingrese un numero"));

if(numero < 1000){
    alert("El numero ingresado es: "+numero+" y es mayor a 1000");
}else{
    alert("El numero ingresado es: "+numero+" y es menor a 1000");
}

//pedir un texto por consola y si es igual a Hola mostrar mensaje

var hol = prompt("Escribe Hola");

if(hol == "Hola"){
    alert("Hola you too yeai");
}else{
    alert("OK ");
}

//pedir un numero y comprobar si esta entre 10 y 50 

var numero = parseInt(prompt("Ingresa un numero",0));
var numero2 = parseInt(prompt("Ingrese el otro numero",0));

if (numero >= 10 && numero2<= 50 ){
    alert("Los numeros ingresados estan entre 10 y 50 y son: "+numero+" y "+numero2);
  }else{
    alert("Los numeros ingresados NO estan entre 10 y 50 y son: "+numero+" y "+numero2);
}
