/*
Declarar una clase Cliente que permita registrar:
Registrar nombre, presupuesto, si tiene tarjeta de descuento, y número de teléfono del cliente.
Un método transferirDinero(valor), que permita  obtener y restar cierta cantidad del presupuesto, 
siempre que este parámetro sea menor al valor enviado, y mayor que cero.
Luego invocar al menos tres (3) objetos usando esta clase, y solicitar al usuario cinco (5) números. 
Informar por alerta si cada uno de los clientes cuenta con el presupuesto suficiente para realizar 
una transferencia de igual monto al ingresado.
*/

class Cliente{
    constructor(nombre,presupuesto,tarjeta,telefono){
        this.nombre = nombre;
        this.presupuesto = parseFloat(presupuesto);
        this.tarjeta = tarjeta;
        this.telefono = telefono;
    }

    transferirDinero(valor){
        if((this.presupuesto > 0)&&(valor < this.presupuesto)){
            this.presupuesto -= valor;
            return valor
        }else{
            return 0;
        }
    }
}
const cliente1 = new Cliente("Homero", 2000, true, "1234560");
const cliente2 = new Cliente("Carlos", "1000", false, "21234560");
const cliente3 = new Cliente("Barny", "50", false, "231234560");
for (let index = 0; index < 5; index++) {
    let entrada = parseFloat(prompt("INGRESAR MONTO"));
    if (cliente1.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente1.nombre+ " TE PUEDE PAGAR "+entrada);
    }
    if (cliente2.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente2.nombre+ " TE PUEDE PAGAR "+entrada);
    }
    if (cliente3.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente3.nombre+ " TE PUEDE PAGAR "+entrada);
    }
}
