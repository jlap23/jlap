function correr(){
    let apellido = prompt("Por favor ingrese su Apellido");
    let nombre= prompt("Tu nombre");
    let edad= prompt("Edad");
    let anio_actual= "2022";
    let jubilacion= "65";

    let calculo = +jubilacion - + edad;
    let jubilo= +anio_actual +calculo;
    alert("Hola "+nombre+""+apellido);
    alert("Te vas a jubilar en el año "+jubilo);

}