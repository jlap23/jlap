//Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
//“Tomate” si es 1.
//“Papa” si es 2.
//“Carne” si es 3.
//“Pollo” si es 4.


let entrada=prompt("INGRESA CODIGO DE PRODUCTO");
while (entrada !="ESC") {
    switch (entrada) {
    case "1":
        alert("Es Tomate");
        break;
    case "2":
        alert("Es Papa");
        break;
    case "3":
        alert ("Es Carne");
        break;
    case "4":
        alert("Es Pollo");
        break;
    default:
        alert("error");
        break;
}
entrada = prompt("INGRESA CODIGO DE PRODUCTO");
}