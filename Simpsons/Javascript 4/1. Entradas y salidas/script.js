//Codificar tres funciones:
//Una función entrada(), la cual solicite un valor al usuario y lo retorne.
//Una función procesamiento(valor), donde se transforme la entrada.
//Una función salida(valor), la cual mostrará el resultado por alerta.
//Luego, invocar las tres funciones.



function entrada (){
    return prompt("Ingresar dato");
}

function procesamiento (valor){
    return "La entrada es  "+valor 
}

function salida(valor){
    alert(valor);
}

salida(procesamiento(entrada()));

