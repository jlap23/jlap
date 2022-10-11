/*
Codificar una función con la siguiente cabecera: impuesto (precio, porcentaje). 
En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.
*/

function impuesto(precio,porcentaje){
    return precio + ((precio * porcentaje)/100)
}
for (let index=0; index<5; index++) {
    let resultado = impuesto(parseFloat(prompt("Ingresa precio"))
    ,parseFloat(prompt("Ingresa IVA")));

    alert(resultado);
}


