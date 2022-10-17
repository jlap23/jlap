//DOM
console.dir(document.body);

//getElementbyId()

let seccion = document.getElementById("principal");
console.log(seccion.innerHTML);

seccion.style.background="yellow";

let titulo = document.getElementById("titulo");
console.log(titulo.innerText);

titulo.innerText="HOY CAMBIA TODO";
titulo.style.font="bold 40px monospace";

//getElementsByTagName()

let parrafos = document.getElementsByTagName("p");

//parrafos es un array
console.log(parrafos[0].innerText);
console.log(parrafos[1].innerText);
parrafos[0].innerText=new Date().toLocaleString();

//cambiar innerhtml
let articulo= document.getElementById("articulo");
console.log(articulo.innerHTML);
articulo.innerHTML += "<h3>Hola chicos</h3>";

//inputs
let campoEmpresa = document.getElementById("empresa");
let campoCantidad = document.getElementById("cantidad");
campoEmpresa.value = "Mercado Libre";
campoCantidad.value = 19;

//array de obejtos 

const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio:  200}];

campoCantidad.value = productos.length;

//tabla

let articuloTabla = document.getElementById("inferior");
//creamos tabla y tbody
let tabla = document.createElement("table");
tabla.className="table table-striped";
let tablaBody = document.createElement("tbody");

//recorro array de productos
for(const producto of productos){
    tablaBody.innerHTML += `
    <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
    </tr>
    `;
}

tabla.append(tablaBody);
articuloTabla.append(tabla);

let articuloCartas = document.getElementById("cartas");
for(const producto of productos){
    let carta = document.createElement("div");
    carta.className="card col-md-3"
    carta.innerHTML =`
        <div class="card body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio: ${producto.precio}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>
    `;
    articuloCartas.append(carta);

}