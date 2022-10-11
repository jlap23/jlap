/*
Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. 
Para ello, puede emplearse  Math.round.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.
*/

function redondeo(valor){
    return Math.round(valor)
}
for (let index = 0; index < 5; index++) {
    let entrada = prompt("INGRESAR NUMERO");
    alert(redondeo(entrada));
}
