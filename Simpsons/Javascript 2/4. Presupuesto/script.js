let entrada4 = parseFloat(prompt("INGRESAR UN NUMERO"));
if ((entrada4 >= 0) && (entrada4 <= 1000)) {
    alert("PRESUPUESTO BAJO");
} else if ((entrada4 >= 1001) && (entrada4 <= 3000)) {
    alert("PRESUPUESTO MEDIO");
} else if (entrada4 > 3000) {
    alert("PRESUPUESTO ALTO");
}
else {
    alert("ERROR");
}

