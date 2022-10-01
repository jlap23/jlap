//pedir precio
let precio = parseFloat(prompt("Buen día! ¿cuánto cuesta su producto?"));

//pedir IVA
let impuesto = parseFloat(prompt("De cuanto es el impuesto que paga en su país? Sólo escriba el número por favor"));


///calcular IVA 
let preciototal = total + precio;

alert("Su producto en México con IVA incluído es de: $ "+preciototal+" MXN");