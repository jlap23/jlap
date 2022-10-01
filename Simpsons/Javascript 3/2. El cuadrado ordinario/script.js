// Solicitar al usuario un (1) número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.
let lados = prompt('INGRESAR CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
    if (index > 3) {
        break;
    }
    alert("lado");
}
