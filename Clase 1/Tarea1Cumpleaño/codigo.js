//pedir fecha
let fecha = parseInt(prompt("Buen día! por favor anota en que año naciste"));

// Return today's date and time
let currentTime = new Date()

// returns the year (four digits)
let edades = currentTime.getFullYear()


//calcular cumpleaños con año 2022
let sumaNumeros = edades - fecha;
alert("Usted tiene: "+sumaNumeros+" años");
